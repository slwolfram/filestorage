(ns filestorage.views.blog
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]]
            [filestorage.db :as db]
            [filestorage.views.common :refer [input-element]]
            ["@tinymce/tinymce-react" :refer (Editor)]
            ;;["slate" :refer (Editor)]
            ;;["slate-plain-serializer" :refer [Plain]]
            ;;["react-quill" :as quill]
            ;;[react :as react]
            ))

(defn blog-view []
  (let [
        ;;[value setValue] (react/useState "")
        ]
    [:div
     [:h1 "Blog"]
       ;;[:> quill/ReactQuill {:theme "snow"}]
       ;;(js/console.log (Plain.deserialize "Hello world"))
       ;;[:> Editor {:value=""}]
       [:> Editor
        {:apiKey "0f7cswhraa4a4jvbwt628sf0i2ln6oqe9k60o3n207b4iy5c"
         :initialValue "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Vel fringilla est ullamcorper eget nulla facilisi. Turpis tincidunt id aliquet risus feugiat in. Gravida arcu ac tortor dignissim convallis aenean et. Tempus urna et pharetra pharetra massa massa. Arcu non odio euismod lacinia. Habitant morbi tristique senectus et netus et malesuada fames. A arcu cursus vitae congue mauris rhoncus aenean. Enim lobortis scelerisque fermentum dui. In eu mi bibendum neque egestas. Augue lacus viverra vitae congue eu consequat ac felis. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>"
         :init {:height "600"
                :menubar true
                :plugins ["advlist" "autolink" "lists" "link" "image" "charmap"  "preview" "anchor" "searchreplace"
                          "visualblocks" "code" "fullscreen"
                          "insertdatetime" "media" "table"  "code" "help" "wordcount"]
                :toolbar [(str "undo redo | formatselect | "
                               "bold italic backcolor | image link | alignleft aligncenter "
                               "alignright alignjustify | bullist numlist outdent indent | "
                               "removeformat | help")]
                :skin "oxide-dark"
                :content_css "dark"}}]
     ]))

