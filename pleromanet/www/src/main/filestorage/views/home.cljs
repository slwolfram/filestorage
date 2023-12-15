(ns filestorage.views.home
  (:require [reagent.core :as r]
            [filestorage.db :as db]
            [reitit.frontend.easy :as rfe]
            ))

(defn home-page []
  (if (not (contains? @db/app-state :user))
    (rfe/push-state :filestorage.core/login-page)
    (js/console.log "logged in"))
  [:div {:class "row"}
   [:div {:class "column"}
    [:img {:src "../images/170078705544407620 (2).jpeg" :style {:height "80%"
                                                            :width "auto"
                                                            :position "fixed"
                                                            :display "inline-block"}}]]
   [:div {:class "column"}
    [:img {:src "../images/imageedit_15_6475468390.jpg" :style {:height "80%"
                                                            :width "auto"
                                                            :position "fixed"
                                                            :display "inline-block"}}]]
   [:div {:class "column"}
    [:img {:src "../images/imageedit_16_5354337374.jpg" :style {:height "80%"
                                                            :width "auto"
                                                            :position "fixed"
                                                            :display "inline-block"}}]]])
