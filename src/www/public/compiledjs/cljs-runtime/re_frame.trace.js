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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__30969){
var map__30970 = p__30969;
var map__30970__$1 = cljs.core.__destructure_map(map__30970);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30970__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30970__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30970__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30970__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__30971_30998 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__30972_30999 = null;
var count__30973_31000 = (0);
var i__30974_31001 = (0);
while(true){
if((i__30974_31001 < count__30973_31000)){
var vec__30985_31002 = chunk__30972_30999.cljs$core$IIndexed$_nth$arity$2(null,i__30974_31001);
var k_31003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30985_31002,(0),null);
var cb_31004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30985_31002,(1),null);
try{var G__30989_31005 = cljs.core.deref(re_frame.trace.traces);
(cb_31004.cljs$core$IFn$_invoke$arity$1 ? cb_31004.cljs$core$IFn$_invoke$arity$1(G__30989_31005) : cb_31004.call(null,G__30989_31005));
}catch (e30988){var e_31006 = e30988;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31003,"while storing",cljs.core.deref(re_frame.trace.traces),e_31006], 0));
}

var G__31007 = seq__30971_30998;
var G__31008 = chunk__30972_30999;
var G__31009 = count__30973_31000;
var G__31010 = (i__30974_31001 + (1));
seq__30971_30998 = G__31007;
chunk__30972_30999 = G__31008;
count__30973_31000 = G__31009;
i__30974_31001 = G__31010;
continue;
} else {
var temp__5804__auto___31011 = cljs.core.seq(seq__30971_30998);
if(temp__5804__auto___31011){
var seq__30971_31012__$1 = temp__5804__auto___31011;
if(cljs.core.chunked_seq_QMARK_(seq__30971_31012__$1)){
var c__5568__auto___31013 = cljs.core.chunk_first(seq__30971_31012__$1);
var G__31014 = cljs.core.chunk_rest(seq__30971_31012__$1);
var G__31015 = c__5568__auto___31013;
var G__31016 = cljs.core.count(c__5568__auto___31013);
var G__31017 = (0);
seq__30971_30998 = G__31014;
chunk__30972_30999 = G__31015;
count__30973_31000 = G__31016;
i__30974_31001 = G__31017;
continue;
} else {
var vec__30990_31018 = cljs.core.first(seq__30971_31012__$1);
var k_31019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990_31018,(0),null);
var cb_31020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990_31018,(1),null);
try{var G__30994_31021 = cljs.core.deref(re_frame.trace.traces);
(cb_31020.cljs$core$IFn$_invoke$arity$1 ? cb_31020.cljs$core$IFn$_invoke$arity$1(G__30994_31021) : cb_31020.call(null,G__30994_31021));
}catch (e30993){var e_31022 = e30993;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31019,"while storing",cljs.core.deref(re_frame.trace.traces),e_31022], 0));
}

var G__31023 = cljs.core.next(seq__30971_31012__$1);
var G__31024 = null;
var G__31025 = (0);
var G__31026 = (0);
seq__30971_30998 = G__31023;
chunk__30972_30999 = G__31024;
count__30973_31000 = G__31025;
i__30974_31001 = G__31026;
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
