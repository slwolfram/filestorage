(ns filestorage.main
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [reitit.frontend.easy :as rfe]
            [accountant.core :as accountant]
            [ajax.core :refer [GET POST]]
            [filestorage.db :as db]))

(defn redirect!
  "If `push` is truthy, previous page will be left in history."
  [{:keys [to path-params query-params push]}]
  (if push
    (rfe/push-state to path-params query-params)
    (rfe/replace-state to path-params query-params)))

(defn Redirect
  "Component that only causes a redirect side-effect."
  [props]
  (r/create-class
   {:component-did-mount  (fn [this] (redirect! (r/props this)))
    :component-did-update (fn [this [_ prev-props]]
                            (if (not= (r/props this) prev-props)
                              (redirect! (r/props this))))
    :render (fn [this] nil)}))

(defn password-box [pw]
  (let [s (r/atom {:value pw})]
    (fn []
      [:form
       (pr-str @s) [:br]

       [:input {:type :password
                :value (:value @s)
                :on-change #(swap! s assoc :value (-> % .-target .-value))}] [:br]])))

(defn header []
  [:div
   [:h1 {:style {:margin "0 0 0 0"}} "pleroma|net"]
   ;;[password-box ""]
   ])
(defn check-nil-then-predicate
  "Check if the value is nil, then apply the predicate"
  [value predicate]
  (if (nil? value)
    false
    (predicate value)))

(defn valid-email?
  [email]
  (check-nil-then-predicate email (fn [arg] (boolean (first (re-seq #"\w+@\w+.\w+" arg))))))

(defn eight-or-more-characters?
  [word]
  (check-nil-then-predicate word (fn [arg] (> (count arg) 7))))

(defn has-special-character?
  [word]
  (check-nil-then-predicate word (fn [arg] (boolean (first (re-seq #"\W+" arg))))))

(defn has-number?
  [word]
  (check-nil-then-predicate word (fn [arg] (boolean (re-seq #"\d+" arg)))))

(defn valid-password?
  [password]
  (and (eight-or-more-characters? password) (has-special-character? password) (has-number? password)))

(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:div {:class "my-messages"}
   ;;[:div {:class "prompt message-animation"} [:p message]]
   ])
(defn input-element
  "An input element which updates its value and on focus parameters on change, blur, and focus"
  [id name type value in-focus]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (-> % .-target .-value))
           :on-focus #(swap! in-focus not)
           :on-blur (fn [arg] (if (nil? @value) (reset! value "")) (swap! in-focus not))}])

(defn input-and-prompt
  "Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message"
  [label-value input-name input-type input-element-arg prompt-element required?]
  (let [input-focus (r/atom false)]
    (fn []
      [:div
       [:label label-value]
       (if @input-focus prompt-element [:div])
       [input-element input-name input-name input-type input-element-arg input-focus]
       ;;(if (and required? (= "" @input-element-arg))
       ;;  [:div "Field is required!"]
       ;;  [:div])
       ])))
(defn email-form [email-address-atom]
  (input-and-prompt "email"
                    "email"
                    "email"
                    email-address-atom
                    (prompt-message "What's your email address?")
                    true))

(defn name-form [name-atom]
  (input-and-prompt "name"
                    "name"
                    "text"
                    name-atom
                    (prompt-message "What's your name?")
                    true))

(defn password-requirements
  "A list to describe which password requirements have been met so far"
  [password requirements]
  [:div
   [:ul (->> requirements
             (filter (fn [req] (not ((:check-fn req) @password))))
             (doall)
             (map (fn [req] ^{:key req} [:li {:style {:color "red"}} (:message req)])))]])

(defn password-form
  [password]
  (let [password-type-atom (r/atom "password")]
    (fn []
      [:div
       [(input-and-prompt "password"
                          "password"
                          @password-type-atom
                          password
                          (prompt-message "What's your password")
                          true)]
       [password-requirements password [{:message "8 or more characters" :check-fn eight-or-more-characters?}
                                        {:message "At least one special character" :check-fn has-special-character?}
                                        {:message "At least one number" :check-fn has-number?}]]])))

(defn password-form-noval
  [password]
  (let [password-type-atom (r/atom "password")]
    (fn []
      [:div
       [(input-and-prompt "password"
                          "password"
                          @password-type-atom
                          password
                          (prompt-message "What's your password")
                          true)]])))

(defn wrap-as-element-in-form
  [element]
  [:div {:class "row form-group"}
   element])

(defn submit-registration
  [email-address name password errors e]

  (js/console.log "submitting registration")
  ;;(js/console.log email-address)
  ;;(js/console.log name)
  ;;(js/console.log password)

  (if (valid-email? email-address)
    (if (valid-password? password)
      (do
        (reset! errors "")
        (let [data {:name name :email email-address :password password}]
          (POST "http://localhost:5050/api/register"
            {:format :json
             :params data
             :handler (fn [r] (js/console.log r
                                              (swap! db/app-state assoc :user r)
                                              (rfe/push-state :filestorage.core/home-page)
                                              ))
             :error-handler (fn [r] (js/console.log r
                                                    (if (contains? r :status-text)
                                                      (reset! errors (get r :status-text)))))})))

      (reset! errors "password is invalid"))
    (reset! errors "email is invalid"))
  (.preventDefault e))

(defn registration-form []
  (let [email-address (r/atom nil)
        name (r/atom nil)
        password (r/atom nil)
        errors (r/atom "")]
    (fn []
      [:div {:class "signup-wrapper"}

       [:h2 "Register User"]
       [:div {:id "errors" :style {:color "red"}}
        @errors]
       [:br]
       [:form {:on-submit (fn [e] (submit-registration @email-address @name @password errors e))}
        (wrap-as-element-in-form [email-form email-address])
        [:br]
        (wrap-as-element-in-form [name-form name])
        [:br]
        (wrap-as-element-in-form [password-form password])
        [:button {:id "submit-registration"
                  :type "submit"
                  ;;:on-click #(submit-registration @email-address @name @password errors)
                  }"Submit"]]])))

(defn submit-login
  [email-address password errors e]

  (js/console.log "submitting login")
  ;;(js/console.log email-address)
  ;;(js/console.log name)
  ;;(js/console.log password)

  (let [data {:email email-address :password password}]
    (POST "http://localhost:5050/api/login"
      {:format :json
       :params data
       :handler (fn [r] (js/console.log r))
       :error-handler (fn [r] (js/console.log r
                                              (if (contains? r :status-text)
                                                (reset! errors (get r :status-text)))))}))
  (.preventDefault e))

(defn login-form []
  (let [email-address (r/atom nil)
        password (r/atom nil)
        errors (r/atom nil)]
    (fn []
      [:div {:class "login-wrapper"}
       [:h2 "Login User"]
       [:div {:id "errors" :style {:color "red"}}
        @errors]
       [:br]
       [:form {:on-submit (fn [e] (submit-login @email-address @password errors e))}
        (wrap-as-element-in-form [email-form email-address])
        [:br]
        (wrap-as-element-in-form [password-form-noval password])
        [:br] [:br]
        [:button {:id "submit-registration"
                  :type "submit"
                  ;;:on-click #(submit-registration @email-address @name @password errors)
                  }"Submit"]]])))

(defn home []
  (if (not (contains? @db/app-state :user))
    (js/console.log "not logged in")
    (js/console.log "logged in"))
  [:h2 "home"])

