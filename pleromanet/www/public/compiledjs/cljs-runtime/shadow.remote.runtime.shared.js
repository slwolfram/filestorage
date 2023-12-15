goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__21176){
var map__21177 = p__21176;
var map__21177__$1 = cljs.core.__destructure_map(map__21177);
var runtime = map__21177__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_21290 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_21290)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__21182 = runtime;
var G__21183 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_21290);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__21182,G__21183) : shadow.remote.runtime.shared.process.call(null,G__21182,G__21183));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__21184,res){
var map__21185 = p__21184;
var map__21185__$1 = cljs.core.__destructure_map(map__21185);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__21186 = res;
var G__21186__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21186,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__21186);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21186__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__21186__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__21193 = arguments.length;
switch (G__21193) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__21195,msg,handlers,timeout_after_ms){
var map__21197 = p__21195;
var map__21197__$1 = cljs.core.__destructure_map(map__21197);
var runtime = map__21197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21292 = arguments.length;
var i__5770__auto___21293 = (0);
while(true){
if((i__5770__auto___21293 < len__5769__auto___21292)){
args__5775__auto__.push((arguments[i__5770__auto___21293]));

var G__21294 = (i__5770__auto___21293 + (1));
i__5770__auto___21293 = G__21294;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21220,ev,args){
var map__21221 = p__21220;
var map__21221__$1 = cljs.core.__destructure_map(map__21221);
var runtime = map__21221__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__21222 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21225 = null;
var count__21226 = (0);
var i__21227 = (0);
while(true){
if((i__21227 < count__21226)){
var ext = chunk__21225.cljs$core$IIndexed$_nth$arity$2(null,i__21227);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21295 = seq__21222;
var G__21296 = chunk__21225;
var G__21297 = count__21226;
var G__21298 = (i__21227 + (1));
seq__21222 = G__21295;
chunk__21225 = G__21296;
count__21226 = G__21297;
i__21227 = G__21298;
continue;
} else {
var G__21299 = seq__21222;
var G__21300 = chunk__21225;
var G__21301 = count__21226;
var G__21302 = (i__21227 + (1));
seq__21222 = G__21299;
chunk__21225 = G__21300;
count__21226 = G__21301;
i__21227 = G__21302;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21222);
if(temp__5804__auto__){
var seq__21222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21222__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21222__$1);
var G__21303 = cljs.core.chunk_rest(seq__21222__$1);
var G__21304 = c__5568__auto__;
var G__21305 = cljs.core.count(c__5568__auto__);
var G__21306 = (0);
seq__21222 = G__21303;
chunk__21225 = G__21304;
count__21226 = G__21305;
i__21227 = G__21306;
continue;
} else {
var ext = cljs.core.first(seq__21222__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21307 = cljs.core.next(seq__21222__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__21222 = G__21307;
chunk__21225 = G__21308;
count__21226 = G__21309;
i__21227 = G__21310;
continue;
} else {
var G__21311 = cljs.core.next(seq__21222__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__21222 = G__21311;
chunk__21225 = G__21312;
count__21226 = G__21313;
i__21227 = G__21314;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq21200){
var G__21201 = cljs.core.first(seq21200);
var seq21200__$1 = cljs.core.next(seq21200);
var G__21202 = cljs.core.first(seq21200__$1);
var seq21200__$2 = cljs.core.next(seq21200__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21201,G__21202,seq21200__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__21238,p__21239){
var map__21240 = p__21238;
var map__21240__$1 = cljs.core.__destructure_map(map__21240);
var runtime = map__21240__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21241 = p__21239;
var map__21241__$1 = cljs.core.__destructure_map(map__21241);
var msg = map__21241__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__21242 = cljs.core.deref(state_ref);
var map__21242__$1 = cljs.core.__destructure_map(map__21242);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__21244,msg){
var map__21245 = p__21244;
var map__21245__$1 = cljs.core.__destructure_map(map__21245);
var runtime = map__21245__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__21259,key,p__21260){
var map__21261 = p__21259;
var map__21261__$1 = cljs.core.__destructure_map(map__21261);
var state = map__21261__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__21262 = p__21260;
var map__21262__$1 = cljs.core.__destructure_map(map__21262);
var spec = map__21262__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__21263,key,spec){
var map__21264 = p__21263;
var map__21264__$1 = cljs.core.__destructure_map(map__21264);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__21265_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__21265_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__21266_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__21266_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__21267_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__21267_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__21268_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__21268_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__21269_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__21269_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__21270,key){
var map__21271 = p__21270;
var map__21271__$1 = cljs.core.__destructure_map(map__21271);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__21272,msg){
var map__21273 = p__21272;
var map__21273__$1 = cljs.core.__destructure_map(map__21273);
var runtime = map__21273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21274,p__21275){
var map__21276 = p__21274;
var map__21276__$1 = cljs.core.__destructure_map(map__21276);
var runtime = map__21276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21277 = p__21275;
var map__21277__$1 = cljs.core.__destructure_map(map__21277);
var msg = map__21277__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21279 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21281 = null;
var count__21282 = (0);
var i__21283 = (0);
while(true){
if((i__21283 < count__21282)){
var map__21287 = chunk__21281.cljs$core$IIndexed$_nth$arity$2(null,i__21283);
var map__21287__$1 = cljs.core.__destructure_map(map__21287);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21287__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21315 = seq__21279;
var G__21316 = chunk__21281;
var G__21317 = count__21282;
var G__21318 = (i__21283 + (1));
seq__21279 = G__21315;
chunk__21281 = G__21316;
count__21282 = G__21317;
i__21283 = G__21318;
continue;
} else {
var G__21319 = seq__21279;
var G__21320 = chunk__21281;
var G__21321 = count__21282;
var G__21322 = (i__21283 + (1));
seq__21279 = G__21319;
chunk__21281 = G__21320;
count__21282 = G__21321;
i__21283 = G__21322;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21279);
if(temp__5804__auto__){
var seq__21279__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21279__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21279__$1);
var G__21323 = cljs.core.chunk_rest(seq__21279__$1);
var G__21324 = c__5568__auto__;
var G__21325 = cljs.core.count(c__5568__auto__);
var G__21326 = (0);
seq__21279 = G__21323;
chunk__21281 = G__21324;
count__21282 = G__21325;
i__21283 = G__21326;
continue;
} else {
var map__21288 = cljs.core.first(seq__21279__$1);
var map__21288__$1 = cljs.core.__destructure_map(map__21288);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21327 = cljs.core.next(seq__21279__$1);
var G__21328 = null;
var G__21329 = (0);
var G__21330 = (0);
seq__21279 = G__21327;
chunk__21281 = G__21328;
count__21282 = G__21329;
i__21283 = G__21330;
continue;
} else {
var G__21331 = cljs.core.next(seq__21279__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__21279 = G__21331;
chunk__21281 = G__21332;
count__21282 = G__21333;
i__21283 = G__21334;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
