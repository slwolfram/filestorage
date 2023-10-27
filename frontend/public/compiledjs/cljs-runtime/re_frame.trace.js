goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__44461){
var map__44462 = p__44461;
var map__44462__$1 = (((((!((map__44462 == null))))?(((((map__44462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44462):map__44462);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44462__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44462__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44462__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44462__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__44466_44495 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__44467_44496 = null;
var count__44468_44497 = (0);
var i__44469_44498 = (0);
while(true){
if((i__44469_44498 < count__44468_44497)){
var vec__44482_44499 = chunk__44467_44496.cljs$core$IIndexed$_nth$arity$2(null,i__44469_44498);
var k_44500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44482_44499,(0),null);
var cb_44501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44482_44499,(1),null);
try{var G__44486_44502 = cljs.core.deref(re_frame.trace.traces);
(cb_44501.cljs$core$IFn$_invoke$arity$1 ? cb_44501.cljs$core$IFn$_invoke$arity$1(G__44486_44502) : cb_44501.call(null,G__44486_44502));
}catch (e44485){var e_44503 = e44485;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44500,"while storing",cljs.core.deref(re_frame.trace.traces),e_44503], 0));
}

var G__44505 = seq__44466_44495;
var G__44506 = chunk__44467_44496;
var G__44507 = count__44468_44497;
var G__44508 = (i__44469_44498 + (1));
seq__44466_44495 = G__44505;
chunk__44467_44496 = G__44506;
count__44468_44497 = G__44507;
i__44469_44498 = G__44508;
continue;
} else {
var temp__5735__auto___44509 = cljs.core.seq(seq__44466_44495);
if(temp__5735__auto___44509){
var seq__44466_44510__$1 = temp__5735__auto___44509;
if(cljs.core.chunked_seq_QMARK_(seq__44466_44510__$1)){
var c__4556__auto___44511 = cljs.core.chunk_first(seq__44466_44510__$1);
var G__44512 = cljs.core.chunk_rest(seq__44466_44510__$1);
var G__44513 = c__4556__auto___44511;
var G__44514 = cljs.core.count(c__4556__auto___44511);
var G__44515 = (0);
seq__44466_44495 = G__44512;
chunk__44467_44496 = G__44513;
count__44468_44497 = G__44514;
i__44469_44498 = G__44515;
continue;
} else {
var vec__44487_44516 = cljs.core.first(seq__44466_44510__$1);
var k_44517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487_44516,(0),null);
var cb_44518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487_44516,(1),null);
try{var G__44491_44519 = cljs.core.deref(re_frame.trace.traces);
(cb_44518.cljs$core$IFn$_invoke$arity$1 ? cb_44518.cljs$core$IFn$_invoke$arity$1(G__44491_44519) : cb_44518.call(null,G__44491_44519));
}catch (e44490){var e_44520 = e44490;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44517,"while storing",cljs.core.deref(re_frame.trace.traces),e_44520], 0));
}

var G__44522 = cljs.core.next(seq__44466_44510__$1);
var G__44524 = null;
var G__44525 = (0);
var G__44526 = (0);
seq__44466_44495 = G__44522;
chunk__44467_44496 = G__44524;
count__44468_44497 = G__44525;
i__44469_44498 = G__44526;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
