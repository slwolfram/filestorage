(ns filestorage.subscriptions
  (:require [re-frame.core :as rfc]))


(rfc/reg-sub
 :app-state
 (fn [db]
   {:app-state db}))


(rfc/reg-sub
 :registration-errors
 (fn [db]
   (let [error-detail (get-in db [:registration-error :response :detail])
         status-text (get-in db [:registration-error :response :status-text])]
   (if (nil? error-detail)
     status-text
     error-detail))))
