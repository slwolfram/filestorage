(ns filestorage.views.filestorage
  (:require [reagent.core :as r]
            ;;[re-frame.core :as rfc]
            [reitit.frontend.easy :as rfe]
            [ajax.core :refer [GET POST PUT DELETE]]
            [filestorage.db :as db]
            [filestorage.views.common :refer [input-element vec-remove copy-to-clipboard]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn submit-file
  "submit the file that is on input `#input-id`"
  [input-id selected-filetype selected-access-level file-description errors e]
  (let [el (.getElementById js/document input-id)
        name (.-name el)
        file (aget (.-files el) 0)
        form (.getElementById js/document "upload-form")
        form-data (js/FormData.)
        _ (.append form-data "file" file)
        ;;submit-params {:uri "http://localhost:5050/api/upload"
        ;;               :body form-data
        ;;               :method :post
        ;;               :on-success-kvec [::events/success-http-result]}
        ]
    (js/console.log @selected-filetype)
    (js/console.log @selected-access-level)
    (js/console.log @file-description)

    (if (not (= "" (-> el .-value)))
      (if (not (= "" @selected-filetype))
        (if (not (= "" @selected-access-level))
          (do
            (if (= "" @file-description)
              (reset! file-description "None"))
            (POST (str "http://localhost:5050/api/files/upload/" @file-description "/" @selected-filetype "/" @selected-access-level)
              {;;:format :json
               :headers {"Authorization" (str "Bearer " (get-in @db/app-state [:user "token" "access_token"]))}
               :body form-data
               :handler (fn [r] (js/console.log r
                                                (swap! db/app-state update-in [:files] conj r)
                                                (reset! errors "")
                                                (.reset form)))
               :error-handler (fn [r] (js/console.log r
                                                      (if (contains? r :response)
                                                        (reset! errors (get (get r :response) "detail"))
                                                        (if (contains? r :status-text)
                                                          (reset! errors (get r :status-text))))))}))

          (reset! errors "Please select an access level"))

        (reset! errors "Please select a file type"))

      (reset! errors "No file selected")))
  (.preventDefault e))

(defn file-selector
  "an image-selection element that shows the image you've chosen.
  This is a form-2 reagent component so we can avoid global state.
  https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function"
  []
  (let [UPLOADED-FILE (r/atom nil)
        errors (r/atom nil)
        selected-filetype (r/atom "")
        selected-access-level (r/atom "")
        file-description (r/atom "")
        bg-image-style (fn []
                         (if-let [i @UPLOADED-FILE]
                           {:background-image
                            (str "url(" i ")")}
                           {:background-color "red"}))
        input-id "image-in"]
    (fn []
      [:div.cntnr
       [:div {:id "errors" :style {:color "red"}}
        @errors]
       [:form {:id "upload-form" :on-submit (fn [e] (submit-file input-id selected-filetype selected-access-level file-description errors e))}
        [:br]
        [:input {:type "file"
                 :name "file"
                 :id input-id
                           ;; :on-change #(change-read % UPLOADED-FILE)
                 :enc-type "multipart/form-data"}]
        [:br] [:br]
        [:table {:style {:border-spacing "0 20px"}}
         [:tbody

          [:tr [:td {:width "150px"} [:label  "file type: "]]
           [:td [:select {:id "file-type" :on-change #(reset! selected-filetype (.. % -target -value))}
                 [:option {:value ""} "--SELECT--"]
                 (for [filetype (get-in @db/app-state [:filetypes])]
                   [:option {:value filetype} filetype])]]]
          [:tr [:td [:label "access level: "]]
           [:td [:select {:id "access-level" :on-change #(reset! selected-access-level (.. % -target -value))}
                 [:option {:value ""} "--SELECT--"]
                 (for [access-level (get-in @db/app-state [:access_levels])]
                   [:option {:value access-level} access-level])]]]
          [:tr [:td [:label "description:"]]
           [:td [input-element "file-description" "file-description" "text" file-description (r/atom false)]]]]]
        [:div.display-image {:height "300px" :width "300px" :style (bg-image-style)}]
        [:br]
        [:button
        ;;{:on-click #(submit-file input-id errors)}
         "Submit"]]])))

(defn file-viewer
  "an image-selection element that shows the image you've chosen.
  This is a form-2 reagent component so we can avoid global state.
  https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function"
  []
  (let [files (r/atom nil)
        errors (r/atom nil)
        input-id "file-viewer"
        ;;i (r/atom 0)
        get-filetypes (fn [] (GET "http://localhost:5050/api/files/filetypes"
                               :handler (fn [response] (do
                                                         (js/console.log response)
                                                         (swap! db/app-state assoc :filetypes response)))))
        get-access-levels (fn [] (GET "http://localhost:5050/api/files/access_levels"
                                   :handler (fn [response] (do
                                                             (js/console.log response)
                                                             (swap! db/app-state assoc :access_levels response)))))
        get-files (fn [] (GET "http://localhost:5050/api/files/"
                           :headers {"Authorization" (str "Bearer " (get-in @db/app-state [:user "token" "access_token"]))}
                           :handler (fn [response] (do
                                                     (js/console.log response)
                                                     (swap! db/app-state assoc :files response)))))]
    (get-filetypes)
    (get-access-levels)
    (get-files)
    (fn []
      [:div.cntnr
       ;;@errors
       ;;@files
       ;;(js/console.log (get-in @db/app-state [:user]))
       ;;(str(get-in @db/app-state [:user "files"]))
       [:div {:style {:display "None"}}
        (def i (r/atom 0))]
       [:table {:id "file-grid" :class "grid"}
        [:thead
         [:tr
          [:td {:class "grid-cell"} "filename"]
          [:td {:class "grid-cell"} "description"]
          [:td {:class "grid-cell"} "filetype"]
          [:td {:class "grid-cell"} "access level"]
          [:td]
          [:td]]]

        [:tbody
         (for [file-row (get-in @db/app-state [:files])]
           (let [access-level-value (r/atom (get file-row "access_level_id"))
                 file-type-value (r/atom (get file-row "file_type_id"))
                 description-value (r/atom (get file-row "description"))
                 file-id (get file-row "id")
                 dl-link (if (= @access-level-value "PRIVATE")
                               (str "http://localhost:5050/api/files/download/"
                                    (get file-row "filepath") "/"
                                    (get-in @db/app-state [:user "token" "access_token"]))
                               (str "http://localhost:5050/api/files/download/"
                                    (get file-row "filepath")))
                 index @i
                 _ (swap! i + 1)]
             (js/console.log @i)
             [:tr {:id file-id}
              [:td {:class "grid-cell"}
               [:a {:href dl-link}
                (get file-row "filename")]]
              [:td {:class "grid-cell"}
               [input-element (str "description" file-id) (str "description" file-id) "text" description-value (r/atom false)]]
              [:td {:class "grid-cell"}
               [:select {:id "file-type"
                         :default-value @file-type-value
                         :on-change #(reset! file-type-value (.. % -target -value))}
                (for [filetype (get-in @db/app-state [:filetypes])]
                  [:option {:value filetype} filetype])]]
              [:td {:class "grid-cell"}
               [:select {:id "access-level"
                         :default-value @access-level-value
                         :on-change #(reset! access-level-value (.. % -target -value))}
                (for [access_level (get-in @db/app-state [:access_levels])]
                  [:option {:value access_level} access_level])]]
              [:td {:class "grid-cell"}
               [:button {:on-click (fn [event] (copy-to-clipboard dl-link))} "Copy Link"]]
              [:td {:class "grid-cell"}
               [:button
                {:on-click
                 (fn [event]
                   (do
                     (js/console.log @access-level-value)
                     (PUT "http://localhost:5050/api/files/"
                       {:format :json
                        :headers {"Authorization" (str "Bearer " (get-in @db/app-state [:user "token" "access_token"]))}
                        :params {:filename (get file-row "filename")
                                 :id file-id
                                 :description @description-value
                                 :access_level_id @access-level-value
                                 :file_type_id @file-type-value}
                        :handler (fn [r] (do (js/console.log r)
                                             (swap! db/app-state update-in [:files] assoc index r)))
                        :error-handler (fn [r] (js/console.log r))})))}
                "Save"]]

              [:td {:class "grid-cell"}
               [:button
                {:on-click
                 (fn [event]
                   (do
                     (DELETE (str "http://localhost:5050/api/files/" file-id)
                       {:format :json
                        :headers {"Authorization" (str "Bearer " (get-in @db/app-state [:user "token" "access_token"]))}
                        :params {}
                        :handler (fn [r] (do (js/console.log r)
                                             (swap! db/app-state assoc :files (vec-remove index (get-in @db/app-state [:files])))))
                        :error-handler (fn [r] (js/console.log r))})))}
                "Delete"]]]
             ;;(js/console.log @i)
             ;;(swap! inc i)
             ))]]])))
(defn filestorage-view []
  ;;(if (not (contains? @db/app-state :file-types))
  ;;  )
  [:div
   [:h2 "upload file"]
   [file-selector "file-selector"]

   [:br] [:hr] [:br]

   [:h2 "files"]

   [file-viewer "file-viewer"]

   ;;[:form {:action "http://localhost:5050/api/upload"
   ;;        :enc-type "multipart/form-data"
   ;;        :method "post"}
   ;; [:input {:type "file"
   ;;          :name "file"
   ;;          :enc-type "multipart/form-data"}]
   ;; [:br] [:br] [:br] [:br]
   ;; [:button {:type "submit"}
   ;;  "Submit"]]
   ])

