goog.provide('filestorage.views.filestorage');
/**
 * submit the file that is on input `#input-id`
 */
filestorage.views.filestorage.submit_file = (function filestorage$views$filestorage$submit_file(input_id,selected_filetype,selected_access_level,file_description,errors,e){
var el_27389 = document.getElementById(input_id);
var name_27390 = el_27389.name;
var file_27391 = (el_27389.files[(0)]);
var form_27392 = document.getElementById("upload-form");
var form_data_27393 = (new FormData());
var __27394 = form_data_27393.append("file",file_27391);
console.log(cljs.core.deref(selected_filetype));

console.log(cljs.core.deref(selected_access_level));

console.log(cljs.core.deref(file_description));

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",el_27389.value)))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(selected_filetype))))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(selected_access_level))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(file_description))){
cljs.core.reset_BANG_(file_description,"None");
} else {
}

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:5050/api/files/upload/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file_description)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_filetype)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_access_level))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"body","body",-2049205669),form_data_27393,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return console.log(r,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filestorage.db.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)),cljs.core.reset_BANG_(errors,""),form_27392.reset());
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r,((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"response","response",-1068424192)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"response","response",-1068424192)),"detail")):((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))):null)));
})], null)], 0));
} else {
cljs.core.reset_BANG_(errors,"Please select an access level");
}
} else {
cljs.core.reset_BANG_(errors,"Please select a file type");
}
} else {
cljs.core.reset_BANG_(errors,"No file selected");
}

return e.preventDefault();
});
/**
 * an image-selection element that shows the image you've chosen.
 *   This is a form-2 reagent component so we can avoid global state.
 *   https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function
 */
filestorage.views.filestorage.file_selector = (function filestorage$views$filestorage$file_selector(){
var UPLOADED_FILE = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var selected_filetype = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var selected_access_level = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var file_description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var bg_image_style = (function (){
var temp__5802__auto__ = cljs.core.deref(UPLOADED_FILE);
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null);
}
});
var input_id = "image-in";
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cntnr","div.cntnr",-1450244708),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-form",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.views.filestorage.submit_file(input_id,selected_filetype,selected_access_level,file_description,errors,e);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"id","id",-1388402092),input_id,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),"0 20px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"file type: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-type",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27357_SHARP_){
return cljs.core.reset_BANG_(selected_filetype,p1__27357_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"--SELECT--"], null),(function (){var iter__5523__auto__ = (function filestorage$views$filestorage$file_selector_$_iter__27359(s__27360){
return (new cljs.core.LazySeq(null,(function (){
var s__27360__$1 = s__27360;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27360__$1);
if(temp__5804__auto__){
var s__27360__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27360__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27360__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27362 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27361 = (0);
while(true){
if((i__27361 < size__5522__auto__)){
var filetype = cljs.core._nth(c__5521__auto__,i__27361);
cljs.core.chunk_append(b__27362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null));

var G__27395 = (i__27361 + (1));
i__27361 = G__27395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27362),filestorage$views$filestorage$file_selector_$_iter__27359(cljs.core.chunk_rest(s__27360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27362),null);
}
} else {
var filetype = cljs.core.first(s__27360__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null),filestorage$views$filestorage$file_selector_$_iter__27359(cljs.core.rest(s__27360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filetypes","filetypes",-1534290296)], null)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"access level: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"access-level",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27358_SHARP_){
return cljs.core.reset_BANG_(selected_access_level,p1__27358_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"--SELECT--"], null),(function (){var iter__5523__auto__ = (function filestorage$views$filestorage$file_selector_$_iter__27363(s__27364){
return (new cljs.core.LazySeq(null,(function (){
var s__27364__$1 = s__27364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27364__$1);
if(temp__5804__auto__){
var s__27364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27364__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27364__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27366 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27365 = (0);
while(true){
if((i__27365 < size__5522__auto__)){
var access_level = cljs.core._nth(c__5521__auto__,i__27365);
cljs.core.chunk_append(b__27366,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null));

var G__27396 = (i__27365 + (1));
i__27365 = G__27396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27366),filestorage$views$filestorage$file_selector_$_iter__27363(cljs.core.chunk_rest(s__27364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27366),null);
}
} else {
var access_level = cljs.core.first(s__27364__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null),filestorage$views$filestorage$file_selector_$_iter__27363(cljs.core.rest(s__27364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"access_levels","access_levels",720498431)], null)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"description:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.common.input_element,"file-description","file-description","text",file_description,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display-image","div.display-image",816542142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"style","style",-496642736),bg_image_style()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Submit"], null)], null)], null);
});
});
/**
 * an image-selection element that shows the image you've chosen.
 *   This is a form-2 reagent component so we can avoid global state.
 *   https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function
 */
filestorage.views.filestorage.file_viewer = (function filestorage$views$filestorage$file_viewer(){
var files = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var input_id = "file-viewer";
var get_filetypes = (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/files/filetypes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(response);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"filetypes","filetypes",-1534290296),response);
})], 0));
});
var get_access_levels = (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/files/access_levels",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(response);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"access_levels","access_levels",720498431),response);
})], 0));
});
var get_files = (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/files/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(response);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"files","files",-472457450),response);
})], 0));
});
get_filetypes();

get_access_levels();

get_files();

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cntnr","div.cntnr",-1450244708),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"None"], null)], null),filestorage.views.filestorage.i = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-grid",new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),"filename"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),"description"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),"filetype"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),"access level"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function filestorage$views$filestorage$file_viewer_$_iter__27369(s__27370){
return (new cljs.core.LazySeq(null,(function (){
var s__27370__$1 = s__27370;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27370__$1);
if(temp__5804__auto__){
var s__27370__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27370__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27370__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27372 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27371 = (0);
while(true){
if((i__27371 < size__5522__auto__)){
var file_row = cljs.core._nth(c__5521__auto__,i__27371);
cljs.core.chunk_append(b__27372,(function (){var access_level_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"access_level_id"));
var file_type_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"file_type_id"));
var description_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"description"));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"id");
var dl_link = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(access_level_value),"PRIVATE"))?["http://localhost:5050/api/files/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath")),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join(''):["http://localhost:5050/api/files/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath"))].join(''));
var index = cljs.core.deref(filestorage.views.filestorage.i);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(filestorage.views.filestorage.i,cljs.core._PLUS_,(1));
console.log(cljs.core.deref(filestorage.views.filestorage.i));

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),file_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dl_link], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.common.input_element,["description",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),["description",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),"text",description_value,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-type",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref(file_type_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (p1__27367_SHARP_){
return cljs.core.reset_BANG_(file_type_value,p1__27367_SHARP_.target.value);
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),(function (){var iter__5523__auto__ = ((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27373(s__27374){
return (new cljs.core.LazySeq(null,((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (){
var s__27374__$1 = s__27374;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27374__$1);
if(temp__5804__auto____$1){
var s__27374__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27374__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27374__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27376 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27375 = (0);
while(true){
if((i__27375 < size__5522__auto____$1)){
var filetype = cljs.core._nth(c__5521__auto____$1,i__27375);
cljs.core.chunk_append(b__27376,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null));

var G__27397 = (i__27375 + (1));
i__27375 = G__27397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27376),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27373(cljs.core.chunk_rest(s__27374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27376),null);
}
} else {
var filetype = cljs.core.first(s__27374__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27373(cljs.core.rest(s__27374__$2)));
}
} else {
return null;
}
break;
}
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
,null,null));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
;
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filetypes","filetypes",-1534290296)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"access-level",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref(access_level_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (p1__27368_SHARP_){
return cljs.core.reset_BANG_(access_level_value,p1__27368_SHARP_.target.value);
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),(function (){var iter__5523__auto__ = ((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27377(s__27378){
return (new cljs.core.LazySeq(null,((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (){
var s__27378__$1 = s__27378;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27378__$1);
if(temp__5804__auto____$1){
var s__27378__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27378__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27378__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27380 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27379 = (0);
while(true){
if((i__27379 < size__5522__auto____$1)){
var access_level = cljs.core._nth(c__5521__auto____$1,i__27379);
cljs.core.chunk_append(b__27380,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null));

var G__27398 = (i__27379 + (1));
i__27379 = G__27398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27380),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27377(cljs.core.chunk_rest(s__27378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27380),null);
}
} else {
var access_level = cljs.core.first(s__27378__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27377(cljs.core.rest(s__27378__$2)));
}
} else {
return null;
}
break;
}
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
,null,null));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
;
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"access_levels","access_levels",720498431)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
return filestorage.views.common.copy_to_clipboard(dl_link);
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Copy Link"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
console.log(cljs.core.deref(access_level_value));

return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/files/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename"),new cljs.core.Keyword(null,"id","id",-1388402092),file_id,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(description_value),new cljs.core.Keyword(null,"access_level_id","access_level_id",-1424655605),cljs.core.deref(access_level_value),new cljs.core.Keyword(null,"file_type_id","file_type_id",1840241019),cljs.core.deref(file_type_value)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (r){
console.log(r);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filestorage.db.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index,r], 0));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (r){
return console.log(r);
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null)], 0));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Save"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:5050/api/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (r){
console.log(r);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"files","files",-472457450),filestorage.views.common.vec_remove(index,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null))));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (r){
return console.log(r);
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null)], 0));
});})(i__27371,access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,c__5521__auto__,size__5522__auto__,b__27372,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Delete"], null)], null)], null);
})());

var G__27399 = (i__27371 + (1));
i__27371 = G__27399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27372),filestorage$views$filestorage$file_viewer_$_iter__27369(cljs.core.chunk_rest(s__27370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27372),null);
}
} else {
var file_row = cljs.core.first(s__27370__$2);
return cljs.core.cons((function (){var access_level_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"access_level_id"));
var file_type_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"file_type_id"));
var description_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"description"));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"id");
var dl_link = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(access_level_value),"PRIVATE"))?["http://localhost:5050/api/files/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath")),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join(''):["http://localhost:5050/api/files/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath"))].join(''));
var index = cljs.core.deref(filestorage.views.filestorage.i);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(filestorage.views.filestorage.i,cljs.core._PLUS_,(1));
console.log(cljs.core.deref(filestorage.views.filestorage.i));

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),file_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),dl_link], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.common.input_element,["description",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),["description",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),"text",description_value,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-type",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref(file_type_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (p1__27367_SHARP_){
return cljs.core.reset_BANG_(file_type_value,p1__27367_SHARP_.target.value);
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),(function (){var iter__5523__auto__ = ((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27381(s__27382){
return (new cljs.core.LazySeq(null,(function (){
var s__27382__$1 = s__27382;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27382__$1);
if(temp__5804__auto____$1){
var s__27382__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27382__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27382__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27384 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27383 = (0);
while(true){
if((i__27383 < size__5522__auto__)){
var filetype = cljs.core._nth(c__5521__auto__,i__27383);
cljs.core.chunk_append(b__27384,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null));

var G__27400 = (i__27383 + (1));
i__27383 = G__27400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27384),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27381(cljs.core.chunk_rest(s__27382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27384),null);
}
} else {
var filetype = cljs.core.first(s__27382__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),filetype], null),filetype], null),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27381(cljs.core.rest(s__27382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
;
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filetypes","filetypes",-1534290296)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"access-level",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref(access_level_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (p1__27368_SHARP_){
return cljs.core.reset_BANG_(access_level_value,p1__27368_SHARP_.target.value);
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),(function (){var iter__5523__auto__ = ((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27385(s__27386){
return (new cljs.core.LazySeq(null,(function (){
var s__27386__$1 = s__27386;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27386__$1);
if(temp__5804__auto____$1){
var s__27386__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27386__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27386__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27388 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27387 = (0);
while(true){
if((i__27387 < size__5522__auto__)){
var access_level = cljs.core._nth(c__5521__auto__,i__27387);
cljs.core.chunk_append(b__27388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null));

var G__27401 = (i__27387 + (1));
i__27387 = G__27401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27388),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27385(cljs.core.chunk_rest(s__27386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27388),null);
}
} else {
var access_level = cljs.core.first(s__27386__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),access_level], null),access_level], null),filestorage$views$filestorage$file_viewer_$_iter__27369_$_iter__27385(cljs.core.rest(s__27386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
;
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"access_levels","access_levels",720498431)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
return filestorage.views.common.copy_to_clipboard(dl_link);
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Copy Link"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
console.log(cljs.core.deref(access_level_value));

return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/files/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename"),new cljs.core.Keyword(null,"id","id",-1388402092),file_id,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(description_value),new cljs.core.Keyword(null,"access_level_id","access_level_id",-1424655605),cljs.core.deref(access_level_value),new cljs.core.Keyword(null,"file_type_id","file_type_id",1840241019),cljs.core.deref(file_type_value)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
console.log(r);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filestorage.db.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index,r], 0));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r);
})], null)], 0));
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Save"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files){
return (function (event){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:5050/api/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
console.log(r);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"files","files",-472457450),filestorage.views.common.vec_remove(index,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null))));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r);
})], null)], 0));
});})(access_level_value,file_type_value,description_value,file_id,dl_link,index,_,file_row,s__27370__$2,temp__5804__auto__,files,errors,input_id,get_filetypes,get_access_levels,get_files))
], null),"Delete"], null)], null)], null);
})(),filestorage$views$filestorage$file_viewer_$_iter__27369(cljs.core.rest(s__27370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null)));
})()], null)], null)], null);
});
});
filestorage.views.filestorage.filestorage_view = (function filestorage$views$filestorage$filestorage_view(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"upload file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.filestorage.file_selector,"file-selector"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"files"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.filestorage.file_viewer,"file-viewer"], null)], null);
});

//# sourceMappingURL=filestorage.views.filestorage.js.map
