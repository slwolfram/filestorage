goog.provide('filestorage.subscriptions');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),db], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"registration-errors","registration-errors",1579698570),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
var error_detail = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registration-error","registration-error",-205059943),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"detail","detail",-1545345025)], null));
var status_text = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registration-error","registration-error",-205059943),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"status-text","status-text",-1834235478)], null));
if((error_detail == null)){
return status_text;
} else {
return error_detail;
}
})], 0));

//# sourceMappingURL=filestorage.subscriptions.js.map
