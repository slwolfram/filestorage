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
var _STAR_current_trace_STAR__orig_val__25965 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25966 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25966);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26103 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26103)){
var new_db_26104 = temp__5804__auto___26103;
var fexpr__25967_26105 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25967_26105.cljs$core$IFn$_invoke$arity$1 ? fexpr__25967_26105.cljs$core$IFn$_invoke$arity$1(new_db_26104) : fexpr__25967_26105.call(null,new_db_26104));
} else {
}

var seq__25968 = cljs.core.seq(effects_without_db);
var chunk__25969 = null;
var count__25970 = (0);
var i__25971 = (0);
while(true){
if((i__25971 < count__25970)){
var vec__25996 = chunk__25969.cljs$core$IIndexed$_nth$arity$2(null,i__25971);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25996,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25996,(1),null);
var temp__5802__auto___26108 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26108)){
var effect_fn_26109 = temp__5802__auto___26108;
(effect_fn_26109.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26109.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26109.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26110 = seq__25968;
var G__26111 = chunk__25969;
var G__26112 = count__25970;
var G__26113 = (i__25971 + (1));
seq__25968 = G__26110;
chunk__25969 = G__26111;
count__25970 = G__26112;
i__25971 = G__26113;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25968);
if(temp__5804__auto__){
var seq__25968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25968__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25968__$1);
var G__26114 = cljs.core.chunk_rest(seq__25968__$1);
var G__26115 = c__5568__auto__;
var G__26116 = cljs.core.count(c__5568__auto__);
var G__26117 = (0);
seq__25968 = G__26114;
chunk__25969 = G__26115;
count__25970 = G__26116;
i__25971 = G__26117;
continue;
} else {
var vec__26001 = cljs.core.first(seq__25968__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26001,(1),null);
var temp__5802__auto___26118 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26118)){
var effect_fn_26119 = temp__5802__auto___26118;
(effect_fn_26119.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26119.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26119.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26120 = cljs.core.next(seq__25968__$1);
var G__26121 = null;
var G__26122 = (0);
var G__26123 = (0);
seq__25968 = G__26120;
chunk__25969 = G__26121;
count__25970 = G__26122;
i__25971 = G__26123;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__25700__auto___26124 = re_frame.interop.now();
var duration__25701__auto___26125 = (end__25700__auto___26124 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25701__auto___26125,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__25700__auto___26124);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25965);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26126 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26126)){
var new_db_26127 = temp__5804__auto___26126;
var fexpr__26006_26128 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26006_26128.cljs$core$IFn$_invoke$arity$1 ? fexpr__26006_26128.cljs$core$IFn$_invoke$arity$1(new_db_26127) : fexpr__26006_26128.call(null,new_db_26127));
} else {
}

var seq__26007 = cljs.core.seq(effects_without_db);
var chunk__26008 = null;
var count__26009 = (0);
var i__26010 = (0);
while(true){
if((i__26010 < count__26009)){
var vec__26024 = chunk__26008.cljs$core$IIndexed$_nth$arity$2(null,i__26010);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26024,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26024,(1),null);
var temp__5802__auto___26129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26129)){
var effect_fn_26132 = temp__5802__auto___26129;
(effect_fn_26132.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26132.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26132.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26133 = seq__26007;
var G__26134 = chunk__26008;
var G__26135 = count__26009;
var G__26136 = (i__26010 + (1));
seq__26007 = G__26133;
chunk__26008 = G__26134;
count__26009 = G__26135;
i__26010 = G__26136;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26007);
if(temp__5804__auto__){
var seq__26007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26007__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26007__$1);
var G__26137 = cljs.core.chunk_rest(seq__26007__$1);
var G__26138 = c__5568__auto__;
var G__26139 = cljs.core.count(c__5568__auto__);
var G__26140 = (0);
seq__26007 = G__26137;
chunk__26008 = G__26138;
count__26009 = G__26139;
i__26010 = G__26140;
continue;
} else {
var vec__26029 = cljs.core.first(seq__26007__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26029,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26029,(1),null);
var temp__5802__auto___26141 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26141)){
var effect_fn_26142 = temp__5802__auto___26141;
(effect_fn_26142.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26142.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26142.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26143 = cljs.core.next(seq__26007__$1);
var G__26144 = null;
var G__26145 = (0);
var G__26146 = (0);
seq__26007 = G__26143;
chunk__26008 = G__26144;
count__26009 = G__26145;
i__26010 = G__26146;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26032){
var map__26033 = p__26032;
var map__26033__$1 = cljs.core.__destructure_map(map__26033);
var effect = map__26033__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26033__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26033__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26035 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26036 = null;
var count__26037 = (0);
var i__26038 = (0);
while(true){
if((i__26038 < count__26037)){
var effect = chunk__26036.cljs$core$IIndexed$_nth$arity$2(null,i__26038);
re_frame.fx.dispatch_later(effect);


var G__26147 = seq__26035;
var G__26148 = chunk__26036;
var G__26149 = count__26037;
var G__26150 = (i__26038 + (1));
seq__26035 = G__26147;
chunk__26036 = G__26148;
count__26037 = G__26149;
i__26038 = G__26150;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26035);
if(temp__5804__auto__){
var seq__26035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26035__$1);
var G__26151 = cljs.core.chunk_rest(seq__26035__$1);
var G__26152 = c__5568__auto__;
var G__26153 = cljs.core.count(c__5568__auto__);
var G__26154 = (0);
seq__26035 = G__26151;
chunk__26036 = G__26152;
count__26037 = G__26153;
i__26038 = G__26154;
continue;
} else {
var effect = cljs.core.first(seq__26035__$1);
re_frame.fx.dispatch_later(effect);


var G__26155 = cljs.core.next(seq__26035__$1);
var G__26156 = null;
var G__26157 = (0);
var G__26158 = (0);
seq__26035 = G__26155;
chunk__26036 = G__26156;
count__26037 = G__26157;
i__26038 = G__26158;
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
var seq__26047 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26048 = null;
var count__26049 = (0);
var i__26050 = (0);
while(true){
if((i__26050 < count__26049)){
var vec__26069 = chunk__26048.cljs$core$IIndexed$_nth$arity$2(null,i__26050);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26069,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26069,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___26159 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26159)){
var effect_fn_26160 = temp__5802__auto___26159;
(effect_fn_26160.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26160.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26160.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26161 = seq__26047;
var G__26162 = chunk__26048;
var G__26163 = count__26049;
var G__26164 = (i__26050 + (1));
seq__26047 = G__26161;
chunk__26048 = G__26162;
count__26049 = G__26163;
i__26050 = G__26164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26047);
if(temp__5804__auto__){
var seq__26047__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26047__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26047__$1);
var G__26165 = cljs.core.chunk_rest(seq__26047__$1);
var G__26166 = c__5568__auto__;
var G__26167 = cljs.core.count(c__5568__auto__);
var G__26168 = (0);
seq__26047 = G__26165;
chunk__26048 = G__26166;
count__26049 = G__26167;
i__26050 = G__26168;
continue;
} else {
var vec__26073 = cljs.core.first(seq__26047__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26073,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26073,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___26169 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26169)){
var effect_fn_26170 = temp__5802__auto___26169;
(effect_fn_26170.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26170.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26170.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26171 = cljs.core.next(seq__26047__$1);
var G__26172 = null;
var G__26173 = (0);
var G__26174 = (0);
seq__26047 = G__26171;
chunk__26048 = G__26172;
count__26049 = G__26173;
i__26050 = G__26174;
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
var seq__26080 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26081 = null;
var count__26082 = (0);
var i__26083 = (0);
while(true){
if((i__26083 < count__26082)){
var event = chunk__26081.cljs$core$IIndexed$_nth$arity$2(null,i__26083);
re_frame.router.dispatch(event);


var G__26175 = seq__26080;
var G__26176 = chunk__26081;
var G__26177 = count__26082;
var G__26178 = (i__26083 + (1));
seq__26080 = G__26175;
chunk__26081 = G__26176;
count__26082 = G__26177;
i__26083 = G__26178;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26080);
if(temp__5804__auto__){
var seq__26080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26080__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26080__$1);
var G__26179 = cljs.core.chunk_rest(seq__26080__$1);
var G__26180 = c__5568__auto__;
var G__26181 = cljs.core.count(c__5568__auto__);
var G__26182 = (0);
seq__26080 = G__26179;
chunk__26081 = G__26180;
count__26082 = G__26181;
i__26083 = G__26182;
continue;
} else {
var event = cljs.core.first(seq__26080__$1);
re_frame.router.dispatch(event);


var G__26183 = cljs.core.next(seq__26080__$1);
var G__26184 = null;
var G__26185 = (0);
var G__26186 = (0);
seq__26080 = G__26183;
chunk__26081 = G__26184;
count__26082 = G__26185;
i__26083 = G__26186;
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
var seq__26090 = cljs.core.seq(value);
var chunk__26091 = null;
var count__26092 = (0);
var i__26093 = (0);
while(true){
if((i__26093 < count__26092)){
var event = chunk__26091.cljs$core$IIndexed$_nth$arity$2(null,i__26093);
clear_event(event);


var G__26187 = seq__26090;
var G__26188 = chunk__26091;
var G__26189 = count__26092;
var G__26190 = (i__26093 + (1));
seq__26090 = G__26187;
chunk__26091 = G__26188;
count__26092 = G__26189;
i__26093 = G__26190;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26090);
if(temp__5804__auto__){
var seq__26090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26090__$1);
var G__26193 = cljs.core.chunk_rest(seq__26090__$1);
var G__26194 = c__5568__auto__;
var G__26195 = cljs.core.count(c__5568__auto__);
var G__26196 = (0);
seq__26090 = G__26193;
chunk__26091 = G__26194;
count__26092 = G__26195;
i__26093 = G__26196;
continue;
} else {
var event = cljs.core.first(seq__26090__$1);
clear_event(event);


var G__26201 = cljs.core.next(seq__26090__$1);
var G__26202 = null;
var G__26203 = (0);
var G__26204 = (0);
seq__26090 = G__26201;
chunk__26091 = G__26202;
count__26092 = G__26203;
i__26093 = G__26204;
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
