(ns filestorage.routes
  (:require [reagent.core :as r]
            ["react-router-dom" :refer (Route Link) :rename {BrowserRouter Router}]
            [filestorage.main :as main]
            [filestorage.db :as db]
            [fipp.edn :as fedn]))

(defn about []
  [:h2 "About"])

(defn get-react-component [reagent-component]
  (r/reactify-component reagent-component))

(defonce match (r/atom nil))

(defn router []
  [["/"
    {:name ::home-page
     :view main/home}]

   ["/register"
    {:name ::registration-page
     :view main/registration-form}]

   ["/login"
    {:name ::login-page
     :view main/login-form}]])

(defn old-root []
  [:> Router
   [:div
    [main/header]
    @db/app-state
    (if (contains? @db/app-state :user)
      [:nav [:ul {:style {:white-space "nowrap" :font-size "20px"}}
             [:li {:style {:display "inline" :margin "10px"}}
              [:> Link {:to "/"} "~"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:> Link {:to "/storage"} "/storage"]]]]
      [:nav [:ul {:style {:white-space "nowrap" :font-size "20px"}}
             [:li {:style {:display "inline" :margin "10px"}}
              [:> Link {:to "/"} "~"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:> Link {:to "/register"} "/register"]]
             [:li {:style {:display "inline" :margin "10px"}}
              [:> Link {:to "/login"} "/login"]]]])
    [:hr]
    [:> Route {:path "/" :exact true :component (get-react-component main/home)}]
    [:> Route {:path "/register" :exact true :component (get-react-component main/registration-form)}]
    [:> Route {:path "/login" :exact true :component (get-react-component main/login-form)}]
    ]])

(defn current-page []
  [:div
  [main/header]
  @db/app-state
  (if (contains? @db/app-state :user)
    [:nav [:ul {:style {:white-space "nowrap" :font-size "20px"}}
           [:li {:style {:display "inline" :margin "10px"}}
            [:> Link {:to "/"} "~"]]
           [:li {:style {:display "inline" :margin "10px"}}
            [:> Link {:to "/storage"} "/storage"]]]]
    [:nav [:ul {:style {:white-space "nowrap" :font-size "20px"}}
           [:li {:style {:display "inline" :margin "10px"}}
            [:> Link {:to "/"} "~"]]
           [:li {:style {:display "inline" :margin "10px"}}
            [:> Link {:to "/register"} "/register"]]
           [:li {:style {:display "inline" :margin "10px"}}
            [:> Link {:to "/login"} "/login"]]]])
  [:hr]

  (if @match
    (let [view (:view (:data @match))]
      [view @match]))
  [:pre (with-out-str (fedn/pprint @match))]])

