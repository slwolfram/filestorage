goog.provide('filestorage.views.common');
/**
 * An input element which updates its value and on focus parameters on change, blur, and focus
 */
filestorage.views.common.input_element = (function filestorage$views$common$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),name,cljs.core.deref(value),(function (arg){
if((cljs.core.deref(value) == null)){
cljs.core.reset_BANG_(value,"");
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__27148_SHARP_){
return cljs.core.reset_BANG_(value,p1__27148_SHARP_.target.value);
}),""])], null);
});
/**
 * remove elem in coll
 */
filestorage.views.common.vec_remove = (function filestorage$views$common$vec_remove(pos,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1))));
});
filestorage.views.common.copy_to_clipboard = (function filestorage$views$common$copy_to_clipboard(val){
var el = document.createElement("textarea");
(el.value = val);

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=filestorage.views.common.js.map
