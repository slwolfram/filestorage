goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__31248 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31249 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31249);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___31352 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___31352)){
var new_db_31353 = temp__5804__auto___31352;
var fexpr__31265_31354 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31265_31354.cljs$core$IFn$_invoke$arity$1 ? fexpr__31265_31354.cljs$core$IFn$_invoke$arity$1(new_db_31353) : fexpr__31265_31354.call(null,new_db_31353));
} else {
}

var seq__31266 = cljs.core.seq(effects_without_db);
var chunk__31267 = null;
var count__31268 = (0);
var i__31269 = (0);
while(true){
if((i__31269 < count__31268)){
var vec__31299 = chunk__31267.cljs$core$IIndexed$_nth$arity$2(null,i__31269);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31299,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31299,(1),null);
var temp__5802__auto___31355 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31355)){
var effect_fn_31356 = temp__5802__auto___31355;
(effect_fn_31356.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31356.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31356.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31357 = seq__31266;
var G__31358 = chunk__31267;
var G__31359 = count__31268;
var G__31360 = (i__31269 + (1));
seq__31266 = G__31357;
chunk__31267 = G__31358;
count__31268 = G__31359;
i__31269 = G__31360;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31266);
if(temp__5804__auto__){
var seq__31266__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31266__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31266__$1);
var G__31361 = cljs.core.chunk_rest(seq__31266__$1);
var G__31362 = c__5568__auto__;
var G__31363 = cljs.core.count(c__5568__auto__);
var G__31364 = (0);
seq__31266 = G__31361;
chunk__31267 = G__31362;
count__31268 = G__31363;
i__31269 = G__31364;
continue;
} else {
var vec__31302 = cljs.core.first(seq__31266__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(1),null);
var temp__5802__auto___31365 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31365)){
var effect_fn_31366 = temp__5802__auto___31365;
(effect_fn_31366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31367 = cljs.core.next(seq__31266__$1);
var G__31368 = null;
var G__31369 = (0);
var G__31370 = (0);
seq__31266 = G__31367;
chunk__31267 = G__31368;
count__31268 = G__31369;
i__31269 = G__31370;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__30949__auto___31371 = re_frame.interop.now();
var duration__30950__auto___31372 = (end__30949__auto___31371 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30950__auto___31372,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__30949__auto___31371);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31248);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___31373 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___31373)){
var new_db_31374 = temp__5804__auto___31373;
var fexpr__31305_31375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31305_31375.cljs$core$IFn$_invoke$arity$1 ? fexpr__31305_31375.cljs$core$IFn$_invoke$arity$1(new_db_31374) : fexpr__31305_31375.call(null,new_db_31374));
} else {
}

var seq__31306 = cljs.core.seq(effects_without_db);
var chunk__31307 = null;
var count__31308 = (0);
var i__31309 = (0);
while(true){
if((i__31309 < count__31308)){
var vec__31316 = chunk__31307.cljs$core$IIndexed$_nth$arity$2(null,i__31309);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31316,(1),null);
var temp__5802__auto___31376 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31376)){
var effect_fn_31377 = temp__5802__auto___31376;
(effect_fn_31377.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31377.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31377.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31378 = seq__31306;
var G__31379 = chunk__31307;
var G__31380 = count__31308;
var G__31381 = (i__31309 + (1));
seq__31306 = G__31378;
chunk__31307 = G__31379;
count__31308 = G__31380;
i__31309 = G__31381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31306);
if(temp__5804__auto__){
var seq__31306__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31306__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31306__$1);
var G__31382 = cljs.core.chunk_rest(seq__31306__$1);
var G__31383 = c__5568__auto__;
var G__31384 = cljs.core.count(c__5568__auto__);
var G__31385 = (0);
seq__31306 = G__31382;
chunk__31307 = G__31383;
count__31308 = G__31384;
i__31309 = G__31385;
continue;
} else {
var vec__31319 = cljs.core.first(seq__31306__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319,(1),null);
var temp__5802__auto___31386 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31386)){
var effect_fn_31387 = temp__5802__auto___31386;
(effect_fn_31387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31387.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31388 = cljs.core.next(seq__31306__$1);
var G__31389 = null;
var G__31390 = (0);
var G__31391 = (0);
seq__31306 = G__31388;
chunk__31307 = G__31389;
count__31308 = G__31390;
i__31309 = G__31391;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__31322){
var map__31323 = p__31322;
var map__31323__$1 = cljs.core.__destructure_map(map__31323);
var effect = map__31323__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31323__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31323__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__31324 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31325 = null;
var count__31326 = (0);
var i__31327 = (0);
while(true){
if((i__31327 < count__31326)){
var effect = chunk__31325.cljs$core$IIndexed$_nth$arity$2(null,i__31327);
re_frame.fx.dispatch_later(effect);


var G__31392 = seq__31324;
var G__31393 = chunk__31325;
var G__31394 = count__31326;
var G__31395 = (i__31327 + (1));
seq__31324 = G__31392;
chunk__31325 = G__31393;
count__31326 = G__31394;
i__31327 = G__31395;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31324);
if(temp__5804__auto__){
var seq__31324__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31324__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31324__$1);
var G__31396 = cljs.core.chunk_rest(seq__31324__$1);
var G__31397 = c__5568__auto__;
var G__31398 = cljs.core.count(c__5568__auto__);
var G__31399 = (0);
seq__31324 = G__31396;
chunk__31325 = G__31397;
count__31326 = G__31398;
i__31327 = G__31399;
continue;
} else {
var effect = cljs.core.first(seq__31324__$1);
re_frame.fx.dispatch_later(effect);


var G__31400 = cljs.core.next(seq__31324__$1);
var G__31401 = null;
var G__31402 = (0);
var G__31403 = (0);
seq__31324 = G__31400;
chunk__31325 = G__31401;
count__31326 = G__31402;
i__31327 = G__31403;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__31328 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31329 = null;
var count__31330 = (0);
var i__31331 = (0);
while(true){
if((i__31331 < count__31330)){
var vec__31338 = chunk__31329.cljs$core$IIndexed$_nth$arity$2(null,i__31331);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___31404 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31404)){
var effect_fn_31405 = temp__5802__auto___31404;
(effect_fn_31405.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31405.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31405.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31406 = seq__31328;
var G__31407 = chunk__31329;
var G__31408 = count__31330;
var G__31409 = (i__31331 + (1));
seq__31328 = G__31406;
chunk__31329 = G__31407;
count__31330 = G__31408;
i__31331 = G__31409;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31328);
if(temp__5804__auto__){
var seq__31328__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31328__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31328__$1);
var G__31410 = cljs.core.chunk_rest(seq__31328__$1);
var G__31411 = c__5568__auto__;
var G__31412 = cljs.core.count(c__5568__auto__);
var G__31413 = (0);
seq__31328 = G__31410;
chunk__31329 = G__31411;
count__31330 = G__31412;
i__31331 = G__31413;
continue;
} else {
var vec__31341 = cljs.core.first(seq__31328__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31341,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31341,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___31414 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___31414)){
var effect_fn_31415 = temp__5802__auto___31414;
(effect_fn_31415.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31415.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31415.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31416 = cljs.core.next(seq__31328__$1);
var G__31417 = null;
var G__31418 = (0);
var G__31419 = (0);
seq__31328 = G__31416;
chunk__31329 = G__31417;
count__31330 = G__31418;
i__31331 = G__31419;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__31344 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31345 = null;
var count__31346 = (0);
var i__31347 = (0);
while(true){
if((i__31347 < count__31346)){
var event = chunk__31345.cljs$core$IIndexed$_nth$arity$2(null,i__31347);
re_frame.router.dispatch(event);


var G__31420 = seq__31344;
var G__31421 = chunk__31345;
var G__31422 = count__31346;
var G__31423 = (i__31347 + (1));
seq__31344 = G__31420;
chunk__31345 = G__31421;
count__31346 = G__31422;
i__31347 = G__31423;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31344);
if(temp__5804__auto__){
var seq__31344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31344__$1);
var G__31424 = cljs.core.chunk_rest(seq__31344__$1);
var G__31425 = c__5568__auto__;
var G__31426 = cljs.core.count(c__5568__auto__);
var G__31427 = (0);
seq__31344 = G__31424;
chunk__31345 = G__31425;
count__31346 = G__31426;
i__31347 = G__31427;
continue;
} else {
var event = cljs.core.first(seq__31344__$1);
re_frame.router.dispatch(event);


var G__31429 = cljs.core.next(seq__31344__$1);
var G__31430 = null;
var G__31431 = (0);
var G__31432 = (0);
seq__31344 = G__31429;
chunk__31345 = G__31430;
count__31346 = G__31431;
i__31347 = G__31432;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__31348 = cljs.core.seq(value);
var chunk__31349 = null;
var count__31350 = (0);
var i__31351 = (0);
while(true){
if((i__31351 < count__31350)){
var event = chunk__31349.cljs$core$IIndexed$_nth$arity$2(null,i__31351);
clear_event(event);


var G__31433 = seq__31348;
var G__31434 = chunk__31349;
var G__31435 = count__31350;
var G__31436 = (i__31351 + (1));
seq__31348 = G__31433;
chunk__31349 = G__31434;
count__31350 = G__31435;
i__31351 = G__31436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31348);
if(temp__5804__auto__){
var seq__31348__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31348__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31348__$1);
var G__31437 = cljs.core.chunk_rest(seq__31348__$1);
var G__31438 = c__5568__auto__;
var G__31439 = cljs.core.count(c__5568__auto__);
var G__31440 = (0);
seq__31348 = G__31437;
chunk__31349 = G__31438;
count__31350 = G__31439;
i__31351 = G__31440;
continue;
} else {
var event = cljs.core.first(seq__31348__$1);
clear_event(event);


var G__31441 = cljs.core.next(seq__31348__$1);
var G__31442 = null;
var G__31443 = (0);
var G__31444 = (0);
seq__31348 = G__31441;
chunk__31349 = G__31442;
count__31350 = G__31443;
i__31351 = G__31444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
