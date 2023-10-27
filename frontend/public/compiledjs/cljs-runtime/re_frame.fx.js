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
var _STAR_current_trace_STAR__orig_val__44762 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44763 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44763);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44855 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44855)){
var new_db_44856 = temp__5735__auto___44855;
var fexpr__44765_44857 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44765_44857.cljs$core$IFn$_invoke$arity$1 ? fexpr__44765_44857.cljs$core$IFn$_invoke$arity$1(new_db_44856) : fexpr__44765_44857.call(null,new_db_44856));
} else {
}

var seq__44766 = cljs.core.seq(effects_without_db);
var chunk__44767 = null;
var count__44768 = (0);
var i__44769 = (0);
while(true){
if((i__44769 < count__44768)){
var vec__44779 = chunk__44767.cljs$core$IIndexed$_nth$arity$2(null,i__44769);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44779,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44779,(1),null);
var temp__5733__auto___44858 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44858)){
var effect_fn_44859 = temp__5733__auto___44858;
(effect_fn_44859.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44859.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44859.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44860 = seq__44766;
var G__44861 = chunk__44767;
var G__44862 = count__44768;
var G__44863 = (i__44769 + (1));
seq__44766 = G__44860;
chunk__44767 = G__44861;
count__44768 = G__44862;
i__44769 = G__44863;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44766);
if(temp__5735__auto__){
var seq__44766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44766__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44766__$1);
var G__44864 = cljs.core.chunk_rest(seq__44766__$1);
var G__44865 = c__4556__auto__;
var G__44866 = cljs.core.count(c__4556__auto__);
var G__44867 = (0);
seq__44766 = G__44864;
chunk__44767 = G__44865;
count__44768 = G__44866;
i__44769 = G__44867;
continue;
} else {
var vec__44783 = cljs.core.first(seq__44766__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783,(1),null);
var temp__5733__auto___44868 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44868)){
var effect_fn_44869 = temp__5733__auto___44868;
(effect_fn_44869.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44869.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44869.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44870 = cljs.core.next(seq__44766__$1);
var G__44871 = null;
var G__44872 = (0);
var G__44873 = (0);
seq__44766 = G__44870;
chunk__44767 = G__44871;
count__44768 = G__44872;
i__44769 = G__44873;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44439__auto___44874 = re_frame.interop.now();
var duration__44440__auto___44875 = (end__44439__auto___44874 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44440__auto___44875,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44439__auto___44874);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44762);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___44876 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___44876)){
var new_db_44877 = temp__5735__auto___44876;
var fexpr__44787_44878 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44787_44878.cljs$core$IFn$_invoke$arity$1 ? fexpr__44787_44878.cljs$core$IFn$_invoke$arity$1(new_db_44877) : fexpr__44787_44878.call(null,new_db_44877));
} else {
}

var seq__44788 = cljs.core.seq(effects_without_db);
var chunk__44789 = null;
var count__44790 = (0);
var i__44791 = (0);
while(true){
if((i__44791 < count__44790)){
var vec__44800 = chunk__44789.cljs$core$IIndexed$_nth$arity$2(null,i__44791);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44800,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44800,(1),null);
var temp__5733__auto___44881 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44881)){
var effect_fn_44882 = temp__5733__auto___44881;
(effect_fn_44882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44882.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44883 = seq__44788;
var G__44884 = chunk__44789;
var G__44885 = count__44790;
var G__44886 = (i__44791 + (1));
seq__44788 = G__44883;
chunk__44789 = G__44884;
count__44790 = G__44885;
i__44791 = G__44886;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44788);
if(temp__5735__auto__){
var seq__44788__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44788__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44788__$1);
var G__44887 = cljs.core.chunk_rest(seq__44788__$1);
var G__44888 = c__4556__auto__;
var G__44889 = cljs.core.count(c__4556__auto__);
var G__44890 = (0);
seq__44788 = G__44887;
chunk__44789 = G__44888;
count__44790 = G__44889;
i__44791 = G__44890;
continue;
} else {
var vec__44804 = cljs.core.first(seq__44788__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44804,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44804,(1),null);
var temp__5733__auto___44891 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44891)){
var effect_fn_44892 = temp__5733__auto___44891;
(effect_fn_44892.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44892.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44892.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44894 = cljs.core.next(seq__44788__$1);
var G__44895 = null;
var G__44896 = (0);
var G__44897 = (0);
seq__44788 = G__44894;
chunk__44789 = G__44895;
count__44790 = G__44896;
i__44791 = G__44897;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__44808){
var map__44809 = p__44808;
var map__44809__$1 = (((((!((map__44809 == null))))?(((((map__44809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44809):map__44809);
var effect = map__44809__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__44811 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44812 = null;
var count__44813 = (0);
var i__44814 = (0);
while(true){
if((i__44814 < count__44813)){
var effect = chunk__44812.cljs$core$IIndexed$_nth$arity$2(null,i__44814);
re_frame.fx.dispatch_later(effect);


var G__44899 = seq__44811;
var G__44900 = chunk__44812;
var G__44901 = count__44813;
var G__44902 = (i__44814 + (1));
seq__44811 = G__44899;
chunk__44812 = G__44900;
count__44813 = G__44901;
i__44814 = G__44902;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44811);
if(temp__5735__auto__){
var seq__44811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44811__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44811__$1);
var G__44905 = cljs.core.chunk_rest(seq__44811__$1);
var G__44906 = c__4556__auto__;
var G__44907 = cljs.core.count(c__4556__auto__);
var G__44908 = (0);
seq__44811 = G__44905;
chunk__44812 = G__44906;
count__44813 = G__44907;
i__44814 = G__44908;
continue;
} else {
var effect = cljs.core.first(seq__44811__$1);
re_frame.fx.dispatch_later(effect);


var G__44909 = cljs.core.next(seq__44811__$1);
var G__44910 = null;
var G__44911 = (0);
var G__44912 = (0);
seq__44811 = G__44909;
chunk__44812 = G__44910;
count__44813 = G__44911;
i__44814 = G__44912;
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
var seq__44816 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__44817 = null;
var count__44818 = (0);
var i__44819 = (0);
while(true){
if((i__44819 < count__44818)){
var vec__44828 = chunk__44817.cljs$core$IIndexed$_nth$arity$2(null,i__44819);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44828,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44828,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44913)){
var effect_fn_44915 = temp__5733__auto___44913;
(effect_fn_44915.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44915.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44915.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44916 = seq__44816;
var G__44917 = chunk__44817;
var G__44918 = count__44818;
var G__44919 = (i__44819 + (1));
seq__44816 = G__44916;
chunk__44817 = G__44917;
count__44818 = G__44918;
i__44819 = G__44919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44816);
if(temp__5735__auto__){
var seq__44816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44816__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44816__$1);
var G__44921 = cljs.core.chunk_rest(seq__44816__$1);
var G__44922 = c__4556__auto__;
var G__44923 = cljs.core.count(c__4556__auto__);
var G__44924 = (0);
seq__44816 = G__44921;
chunk__44817 = G__44922;
count__44818 = G__44923;
i__44819 = G__44924;
continue;
} else {
var vec__44831 = cljs.core.first(seq__44816__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44831,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44831,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___44925 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44925)){
var effect_fn_44926 = temp__5733__auto___44925;
(effect_fn_44926.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44926.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44926.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44927 = cljs.core.next(seq__44816__$1);
var G__44928 = null;
var G__44929 = (0);
var G__44930 = (0);
seq__44816 = G__44927;
chunk__44817 = G__44928;
count__44818 = G__44929;
i__44819 = G__44930;
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
var seq__44835 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44836 = null;
var count__44837 = (0);
var i__44838 = (0);
while(true){
if((i__44838 < count__44837)){
var event = chunk__44836.cljs$core$IIndexed$_nth$arity$2(null,i__44838);
re_frame.router.dispatch(event);


var G__44933 = seq__44835;
var G__44934 = chunk__44836;
var G__44935 = count__44837;
var G__44936 = (i__44838 + (1));
seq__44835 = G__44933;
chunk__44836 = G__44934;
count__44837 = G__44935;
i__44838 = G__44936;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44835);
if(temp__5735__auto__){
var seq__44835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44835__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44835__$1);
var G__44937 = cljs.core.chunk_rest(seq__44835__$1);
var G__44938 = c__4556__auto__;
var G__44939 = cljs.core.count(c__4556__auto__);
var G__44940 = (0);
seq__44835 = G__44937;
chunk__44836 = G__44938;
count__44837 = G__44939;
i__44838 = G__44940;
continue;
} else {
var event = cljs.core.first(seq__44835__$1);
re_frame.router.dispatch(event);


var G__44941 = cljs.core.next(seq__44835__$1);
var G__44942 = null;
var G__44943 = (0);
var G__44944 = (0);
seq__44835 = G__44941;
chunk__44836 = G__44942;
count__44837 = G__44943;
i__44838 = G__44944;
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
var seq__44851 = cljs.core.seq(value);
var chunk__44852 = null;
var count__44853 = (0);
var i__44854 = (0);
while(true){
if((i__44854 < count__44853)){
var event = chunk__44852.cljs$core$IIndexed$_nth$arity$2(null,i__44854);
clear_event(event);


var G__44947 = seq__44851;
var G__44948 = chunk__44852;
var G__44949 = count__44853;
var G__44950 = (i__44854 + (1));
seq__44851 = G__44947;
chunk__44852 = G__44948;
count__44853 = G__44949;
i__44854 = G__44950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44851);
if(temp__5735__auto__){
var seq__44851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44851__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44851__$1);
var G__44951 = cljs.core.chunk_rest(seq__44851__$1);
var G__44952 = c__4556__auto__;
var G__44953 = cljs.core.count(c__4556__auto__);
var G__44954 = (0);
seq__44851 = G__44951;
chunk__44852 = G__44952;
count__44853 = G__44953;
i__44854 = G__44954;
continue;
} else {
var event = cljs.core.first(seq__44851__$1);
clear_event(event);


var G__44955 = cljs.core.next(seq__44851__$1);
var G__44956 = null;
var G__44957 = (0);
var G__44958 = (0);
seq__44851 = G__44955;
chunk__44852 = G__44956;
count__44853 = G__44957;
i__44854 = G__44958;
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
