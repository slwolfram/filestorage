(ns filestorage.db
  (:require [reagent.core :as r]))

(def default-db {:name "db"})

(def app-state (r/atom {:name "app-state"}))
