(ns filestorage.events
  (:require
   [day8.re-frame.http-fx]
   [re-frame.core :refer [reg-event-fx] :as rfc]
   [ajax.core :as ajax]
   [filestorage.db :as db]
   ))

(rfc/reg-event-fx
 ::load-app
 (fn  [{:keys [db]} _]
   {:db (merge db db/default-db)}))

(rfc/reg-event-db
 ::clear-http-results
 (fn [db [_ result]]
   (dissoc db :failure-http-result :success-http-result)))

(rfc/reg-event-db
 ::success-http-result
 (fn [db [_ result]]
   (assoc db :success-http-result result)))

(rfc/reg-event-db
 ::failure-http-result
 (fn [db [_ result]]
   (assoc db :failure-http-result result)
   ))

(rfc/reg-event-db
 ::registration-error
 (fn [db [_ result]]
   (assoc db :registration-error result)
   ))

(rfc/reg-event-fx
 ::upload-file
 (fn upload-file [db [_ {:keys [uri method body on-success-kvec]
                          :or {method :post
                               on-success-kvec [:on-success]}}]]
   (dissoc db :failure-http-result :success-http-result)
   {:http-xhrio {:method method
                 :uri             uri
                 :timeout         8000
                 ;;:format (ajax/json-request-format)
                 :body body
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      on-success-kvec
                 :on-failure      [::failure-http-result]}}))

(rfc/reg-event-fx
 ::submit-post-request
 (fn submit-post-request [db [_ {:keys [uri method body on-success-kvec on-failure-kvec]
                         :or {method :post
                              on-success-kvec [:on-success]}}]]
   (dissoc db :failure-http-result :success-http-result)
   {:http-xhrio {:method method
                 :uri             uri
                 :timeout         8000
                 :format (ajax/json-request-format)
                 :params body
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      on-success-kvec
                 :on-failure      on-failure-kvec}}))
