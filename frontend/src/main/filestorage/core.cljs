(ns filestorage.core
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [filestorage.db :as db]
            [filestorage.main :as main]
            [accountant.core :as accountant]
            [ajax.core :refer [GET POST]]
            [spec-tools.data-spec :as ds]
            [fipp.edn :as fedn]))

(defn header []
  [:div
   [:h1 {:style {:margin "0 0 0 0"}} "pleroma|net"]
   ;;[password-box ""]
   ])

(defonce match (r/atom nil))

(defn current-page []
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
        [:a {:href (rfe/href ::home-page)} "~"]]])]
   [:hr]
   @db/app-state

   (if @match
     (let [view (:view (:data @match))]
       [view @match]))]
   ;;[:pre (with-out-str (fedn/pprint @match))]
  )

(def routes
  [["/"
    {:name ::home-page
     :view main/home}]

   ["/login"
    {:name ::login-page
     :view main/login-form}]

   ["/register"
    {:name ::registration-page
     :view main/registration-form}]])


(defn init! []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
    ;; set to false to enable HistoryAPI
   {:use-fragment true})
  (r/render [current-page] (.getElementById js/document "app")))

(init!)
