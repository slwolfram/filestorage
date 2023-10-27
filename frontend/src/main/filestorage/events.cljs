(ns filestorage.events
  (:require [re-frame.core :as rf]
            [filestorage.db :as db]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
