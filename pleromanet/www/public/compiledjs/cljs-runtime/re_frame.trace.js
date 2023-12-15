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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__25720){
var map__25721 = p__25720;
var map__25721__$1 = cljs.core.__destructure_map(map__25721);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25721__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__25722_25749 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__25723_25750 = null;
var count__25724_25751 = (0);
var i__25725_25752 = (0);
while(true){
if((i__25725_25752 < count__25724_25751)){
var vec__25736_25753 = chunk__25723_25750.cljs$core$IIndexed$_nth$arity$2(null,i__25725_25752);
var k_25754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25736_25753,(0),null);
var cb_25755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25736_25753,(1),null);
try{var G__25740_25756 = cljs.core.deref(re_frame.trace.traces);
(cb_25755.cljs$core$IFn$_invoke$arity$1 ? cb_25755.cljs$core$IFn$_invoke$arity$1(G__25740_25756) : cb_25755.call(null,G__25740_25756));
}catch (e25739){var e_25757 = e25739;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_25754,"while storing",cljs.core.deref(re_frame.trace.traces),e_25757], 0));
}

var G__25758 = seq__25722_25749;
var G__25759 = chunk__25723_25750;
var G__25760 = count__25724_25751;
var G__25761 = (i__25725_25752 + (1));
seq__25722_25749 = G__25758;
chunk__25723_25750 = G__25759;
count__25724_25751 = G__25760;
i__25725_25752 = G__25761;
continue;
} else {
var temp__5804__auto___25762 = cljs.core.seq(seq__25722_25749);
if(temp__5804__auto___25762){
var seq__25722_25763__$1 = temp__5804__auto___25762;
if(cljs.core.chunked_seq_QMARK_(seq__25722_25763__$1)){
var c__5568__auto___25764 = cljs.core.chunk_first(seq__25722_25763__$1);
var G__25765 = cljs.core.chunk_rest(seq__25722_25763__$1);
var G__25766 = c__5568__auto___25764;
var G__25767 = cljs.core.count(c__5568__auto___25764);
var G__25768 = (0);
seq__25722_25749 = G__25765;
chunk__25723_25750 = G__25766;
count__25724_25751 = G__25767;
i__25725_25752 = G__25768;
continue;
} else {
var vec__25741_25769 = cljs.core.first(seq__25722_25763__$1);
var k_25770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741_25769,(0),null);
var cb_25771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741_25769,(1),null);
try{var G__25745_25772 = cljs.core.deref(re_frame.trace.traces);
(cb_25771.cljs$core$IFn$_invoke$arity$1 ? cb_25771.cljs$core$IFn$_invoke$arity$1(G__25745_25772) : cb_25771.call(null,G__25745_25772));
}catch (e25744){var e_25773 = e25744;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_25770,"while storing",cljs.core.deref(re_frame.trace.traces),e_25773], 0));
}

var G__25774 = cljs.core.next(seq__25722_25763__$1);
var G__25775 = null;
var G__25776 = (0);
var G__25777 = (0);
seq__25722_25749 = G__25774;
chunk__25723_25750 = G__25775;
count__25724_25751 = G__25776;
i__25725_25752 = G__25777;
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
