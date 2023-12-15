(ns filestorage.core
  (:require [reagent.core :as r]
            [re-frame.core :as rfc]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [filestorage.db :as db]
            [filestorage.views.authorization :as auth]
            [filestorage.views.filestorage :as filestorage]
            [filestorage.views.blog :as blog]
            [filestorage.views.home :as home]
            [ajax.core :refer [GET POST]]
            [spec-tools.data-spec :as ds]
            [fipp.edn :as fedn]))

(defn header []
  [:div
   [:h1 {:style {:margin "0 0 0 0"}} "pleroma⸸net"]
   ;;[password-box ""]
   ])

(defonce match (r/atom nil))

(defn current-page
  []
  (let [btn-text (r/atom "v")
        btn-display (r/atom "none")]
    (r/create-class
     {:component-did-mount               ;; the name of a lifecycle function
      (fn [this]
        (println "component-did-mount"))

      :reagent-render
      (fn []
        (js/console.log "rendering component")
        ;;(rfc/dispatch [::events/clear-http-results])
        [:div
         [header]
         [:nav
          (if (not (contains? @db/app-state :user))
            [:ul {:style {:white-space "nowrap" :font-size "20px"}}
             [:li {:style {:display "inline" :margin "10px"}}
              [:a {:href (rfe/href ::registration-page)} "/register"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:a {:href (rfe/href ::login-page)} "/login"]]]
            [:ul {:style {:white-space "nowrap" :font-size "20px"}}
             [:li {:style {:display "inline" :margin "10px"}}
              [:a {:href (rfe/href ::home-page)} "~"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:a {:href (rfe/href ::filestorage-page)} "/filestorage"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:a {:href (rfe/href ::blog-page)} "/blog"]]
             ])]
         [:a {:style {:cursor "pointer"}
              :on-click (fn [event]
                          (if (= @btn-display "block")
                            (do (reset! btn-display "none")
                                (reset! btn-text "v"))
                            (do (reset! btn-display "block")
                                (reset! btn-text "^"))))} @btn-text]

         [:hr]
         [:div {:style {:display @btn-display}}
          @db/app-state
         [:hr]]
         [:br]
         (if @match
           (do
           (js/console.log "route match")
           (print @match)
           (let [view (:view (:data @match))]
             [view @match])))])}
     ;;[:pre (with-out-str (fedn/pprint @match))]
     )))
(def routes
  [["/"
    {:name ::home-page
     :view home/home-page}]

   ["/filestorage"
    {:name ::filestorage-page
     :view filestorage/filestorage-view}]

   ["/blog"
    {:name ::blog-page
     :view blog/blog-view}]

   ["/login"
    {:name ::login-page
     :view auth/login-form}]

   ["/register"
    {:name ::registration-page
     :view auth/registration-form}]])

(defn init! []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment true})
  ;;(rfc/dispatch-sync [::events/load-app])
  (r/render [current-page] (.getElementById js/document "app")))

(init!)
