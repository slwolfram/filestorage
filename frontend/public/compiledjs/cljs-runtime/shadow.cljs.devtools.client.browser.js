goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43473 = arguments.length;
var i__4737__auto___43474 = (0);
while(true){
if((i__4737__auto___43474 < len__4736__auto___43473)){
args__4742__auto__.push((arguments[i__4737__auto___43474]));

var G__43475 = (i__4737__auto___43474 + (1));
i__4737__auto___43474 = G__43475;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43264){
var G__43265 = cljs.core.first(seq43264);
var seq43264__$1 = cljs.core.next(seq43264);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43265,seq43264__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43270 = cljs.core.seq(sources);
var chunk__43271 = null;
var count__43272 = (0);
var i__43273 = (0);
while(true){
if((i__43273 < count__43272)){
var map__43282 = chunk__43271.cljs$core$IIndexed$_nth$arity$2(null,i__43273);
var map__43282__$1 = (((((!((map__43282 == null))))?(((((map__43282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43282):map__43282);
var src = map__43282__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43284){var e_43479 = e43284;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43479);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43479.message)].join('')));
}

var G__43480 = seq__43270;
var G__43481 = chunk__43271;
var G__43482 = count__43272;
var G__43483 = (i__43273 + (1));
seq__43270 = G__43480;
chunk__43271 = G__43481;
count__43272 = G__43482;
i__43273 = G__43483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43270);
if(temp__5735__auto__){
var seq__43270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43270__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43270__$1);
var G__43484 = cljs.core.chunk_rest(seq__43270__$1);
var G__43485 = c__4556__auto__;
var G__43486 = cljs.core.count(c__4556__auto__);
var G__43487 = (0);
seq__43270 = G__43484;
chunk__43271 = G__43485;
count__43272 = G__43486;
i__43273 = G__43487;
continue;
} else {
var map__43285 = cljs.core.first(seq__43270__$1);
var map__43285__$1 = (((((!((map__43285 == null))))?(((((map__43285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43285):map__43285);
var src = map__43285__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43288){var e_43488 = e43288;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43488);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43488.message)].join('')));
}

var G__43489 = cljs.core.next(seq__43270__$1);
var G__43490 = null;
var G__43491 = (0);
var G__43492 = (0);
seq__43270 = G__43489;
chunk__43271 = G__43490;
count__43272 = G__43491;
i__43273 = G__43492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43293 = cljs.core.seq(js_requires);
var chunk__43294 = null;
var count__43295 = (0);
var i__43296 = (0);
while(true){
if((i__43296 < count__43295)){
var js_ns = chunk__43294.cljs$core$IIndexed$_nth$arity$2(null,i__43296);
var require_str_43495 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43495);


var G__43497 = seq__43293;
var G__43498 = chunk__43294;
var G__43499 = count__43295;
var G__43500 = (i__43296 + (1));
seq__43293 = G__43497;
chunk__43294 = G__43498;
count__43295 = G__43499;
i__43296 = G__43500;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43293);
if(temp__5735__auto__){
var seq__43293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43293__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43293__$1);
var G__43503 = cljs.core.chunk_rest(seq__43293__$1);
var G__43504 = c__4556__auto__;
var G__43505 = cljs.core.count(c__4556__auto__);
var G__43506 = (0);
seq__43293 = G__43503;
chunk__43294 = G__43504;
count__43295 = G__43505;
i__43296 = G__43506;
continue;
} else {
var js_ns = cljs.core.first(seq__43293__$1);
var require_str_43507 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43507);


var G__43508 = cljs.core.next(seq__43293__$1);
var G__43509 = null;
var G__43510 = (0);
var G__43511 = (0);
seq__43293 = G__43508;
chunk__43294 = G__43509;
count__43295 = G__43510;
i__43296 = G__43511;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43300){
var map__43301 = p__43300;
var map__43301__$1 = (((((!((map__43301 == null))))?(((((map__43301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43301):map__43301);
var msg = map__43301__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43303(s__43304){
return (new cljs.core.LazySeq(null,(function (){
var s__43304__$1 = s__43304;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43304__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__43309 = cljs.core.first(xs__6292__auto__);
var map__43309__$1 = (((((!((map__43309 == null))))?(((((map__43309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43309):map__43309);
var src = map__43309__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43309__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__43304__$1,map__43309,map__43309__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43301,map__43301__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43303_$_iter__43305(s__43306){
return (new cljs.core.LazySeq(null,((function (s__43304__$1,map__43309,map__43309__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43301,map__43301__$1,msg,info,reload_info){
return (function (){
var s__43306__$1 = s__43306;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__43306__$1);
if(temp__5735__auto____$1){
var s__43306__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43306__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43306__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43308 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43307 = (0);
while(true){
if((i__43307 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__43307);
cljs.core.chunk_append(b__43308,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43514 = (i__43307 + (1));
i__43307 = G__43514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43308),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43303_$_iter__43305(cljs.core.chunk_rest(s__43306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43308),null);
}
} else {
var warning = cljs.core.first(s__43306__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43303_$_iter__43305(cljs.core.rest(s__43306__$2)));
}
} else {
return null;
}
break;
}
});})(s__43304__$1,map__43309,map__43309__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43301,map__43301__$1,msg,info,reload_info))
,null,null));
});})(s__43304__$1,map__43309,map__43309__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__43301,map__43301__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43303(cljs.core.rest(s__43304__$1)));
} else {
var G__43515 = cljs.core.rest(s__43304__$1);
s__43304__$1 = G__43515;
continue;
}
} else {
var G__43516 = cljs.core.rest(s__43304__$1);
s__43304__$1 = G__43516;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43311_43517 = cljs.core.seq(warnings);
var chunk__43312_43518 = null;
var count__43313_43519 = (0);
var i__43314_43520 = (0);
while(true){
if((i__43314_43520 < count__43313_43519)){
var map__43321_43521 = chunk__43312_43518.cljs$core$IIndexed$_nth$arity$2(null,i__43314_43520);
var map__43321_43522__$1 = (((((!((map__43321_43521 == null))))?(((((map__43321_43521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43321_43521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43321_43521):map__43321_43521);
var w_43523 = map__43321_43522__$1;
var msg_43524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43321_43522__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43321_43522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43321_43522__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43321_43522__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43527)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43525),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43526),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43524__$1)].join(''));


var G__43528 = seq__43311_43517;
var G__43529 = chunk__43312_43518;
var G__43530 = count__43313_43519;
var G__43531 = (i__43314_43520 + (1));
seq__43311_43517 = G__43528;
chunk__43312_43518 = G__43529;
count__43313_43519 = G__43530;
i__43314_43520 = G__43531;
continue;
} else {
var temp__5735__auto___43532 = cljs.core.seq(seq__43311_43517);
if(temp__5735__auto___43532){
var seq__43311_43533__$1 = temp__5735__auto___43532;
if(cljs.core.chunked_seq_QMARK_(seq__43311_43533__$1)){
var c__4556__auto___43534 = cljs.core.chunk_first(seq__43311_43533__$1);
var G__43535 = cljs.core.chunk_rest(seq__43311_43533__$1);
var G__43536 = c__4556__auto___43534;
var G__43537 = cljs.core.count(c__4556__auto___43534);
var G__43538 = (0);
seq__43311_43517 = G__43535;
chunk__43312_43518 = G__43536;
count__43313_43519 = G__43537;
i__43314_43520 = G__43538;
continue;
} else {
var map__43323_43539 = cljs.core.first(seq__43311_43533__$1);
var map__43323_43540__$1 = (((((!((map__43323_43539 == null))))?(((((map__43323_43539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43323_43539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43323_43539):map__43323_43539);
var w_43541 = map__43323_43540__$1;
var msg_43542__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43323_43540__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43323_43540__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43323_43540__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43323_43540__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43545)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43543),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43544),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43542__$1)].join(''));


var G__43546 = cljs.core.next(seq__43311_43533__$1);
var G__43547 = null;
var G__43548 = (0);
var G__43549 = (0);
seq__43311_43517 = G__43546;
chunk__43312_43518 = G__43547;
count__43313_43519 = G__43548;
i__43314_43520 = G__43549;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43299_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43299_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43332){
var map__43333 = p__43332;
var map__43333__$1 = (((((!((map__43333 == null))))?(((((map__43333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43333):map__43333);
var msg = map__43333__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__43338 = cljs.core.seq(updates);
var chunk__43340 = null;
var count__43341 = (0);
var i__43342 = (0);
while(true){
if((i__43342 < count__43341)){
var path = chunk__43340.cljs$core$IIndexed$_nth$arity$2(null,i__43342);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43383_43550 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43387_43551 = null;
var count__43388_43552 = (0);
var i__43389_43553 = (0);
while(true){
if((i__43389_43553 < count__43388_43552)){
var node_43554 = chunk__43387_43551.cljs$core$IIndexed$_nth$arity$2(null,i__43389_43553);
if(cljs.core.not(node_43554.shadow$old)){
var path_match_43555 = shadow.cljs.devtools.client.browser.match_paths(node_43554.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43555)){
var new_link_43556 = (function (){var G__43401 = node_43554.cloneNode(true);
G__43401.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43555),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43401;
})();
(node_43554.shadow$old = true);

(new_link_43556.onload = ((function (seq__43383_43550,chunk__43387_43551,count__43388_43552,i__43389_43553,seq__43338,chunk__43340,count__43341,i__43342,new_link_43556,path_match_43555,node_43554,path,map__43333,map__43333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43554);
});})(seq__43383_43550,chunk__43387_43551,count__43388_43552,i__43389_43553,seq__43338,chunk__43340,count__43341,i__43342,new_link_43556,path_match_43555,node_43554,path,map__43333,map__43333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43555], 0));

goog.dom.insertSiblingAfter(new_link_43556,node_43554);


var G__43557 = seq__43383_43550;
var G__43558 = chunk__43387_43551;
var G__43559 = count__43388_43552;
var G__43560 = (i__43389_43553 + (1));
seq__43383_43550 = G__43557;
chunk__43387_43551 = G__43558;
count__43388_43552 = G__43559;
i__43389_43553 = G__43560;
continue;
} else {
var G__43561 = seq__43383_43550;
var G__43562 = chunk__43387_43551;
var G__43563 = count__43388_43552;
var G__43564 = (i__43389_43553 + (1));
seq__43383_43550 = G__43561;
chunk__43387_43551 = G__43562;
count__43388_43552 = G__43563;
i__43389_43553 = G__43564;
continue;
}
} else {
var G__43565 = seq__43383_43550;
var G__43566 = chunk__43387_43551;
var G__43567 = count__43388_43552;
var G__43568 = (i__43389_43553 + (1));
seq__43383_43550 = G__43565;
chunk__43387_43551 = G__43566;
count__43388_43552 = G__43567;
i__43389_43553 = G__43568;
continue;
}
} else {
var temp__5735__auto___43569 = cljs.core.seq(seq__43383_43550);
if(temp__5735__auto___43569){
var seq__43383_43570__$1 = temp__5735__auto___43569;
if(cljs.core.chunked_seq_QMARK_(seq__43383_43570__$1)){
var c__4556__auto___43571 = cljs.core.chunk_first(seq__43383_43570__$1);
var G__43572 = cljs.core.chunk_rest(seq__43383_43570__$1);
var G__43573 = c__4556__auto___43571;
var G__43574 = cljs.core.count(c__4556__auto___43571);
var G__43575 = (0);
seq__43383_43550 = G__43572;
chunk__43387_43551 = G__43573;
count__43388_43552 = G__43574;
i__43389_43553 = G__43575;
continue;
} else {
var node_43576 = cljs.core.first(seq__43383_43570__$1);
if(cljs.core.not(node_43576.shadow$old)){
var path_match_43577 = shadow.cljs.devtools.client.browser.match_paths(node_43576.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43577)){
var new_link_43578 = (function (){var G__43402 = node_43576.cloneNode(true);
G__43402.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43577),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43402;
})();
(node_43576.shadow$old = true);

(new_link_43578.onload = ((function (seq__43383_43550,chunk__43387_43551,count__43388_43552,i__43389_43553,seq__43338,chunk__43340,count__43341,i__43342,new_link_43578,path_match_43577,node_43576,seq__43383_43570__$1,temp__5735__auto___43569,path,map__43333,map__43333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43576);
});})(seq__43383_43550,chunk__43387_43551,count__43388_43552,i__43389_43553,seq__43338,chunk__43340,count__43341,i__43342,new_link_43578,path_match_43577,node_43576,seq__43383_43570__$1,temp__5735__auto___43569,path,map__43333,map__43333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43577], 0));

goog.dom.insertSiblingAfter(new_link_43578,node_43576);


var G__43579 = cljs.core.next(seq__43383_43570__$1);
var G__43580 = null;
var G__43581 = (0);
var G__43582 = (0);
seq__43383_43550 = G__43579;
chunk__43387_43551 = G__43580;
count__43388_43552 = G__43581;
i__43389_43553 = G__43582;
continue;
} else {
var G__43583 = cljs.core.next(seq__43383_43570__$1);
var G__43584 = null;
var G__43585 = (0);
var G__43586 = (0);
seq__43383_43550 = G__43583;
chunk__43387_43551 = G__43584;
count__43388_43552 = G__43585;
i__43389_43553 = G__43586;
continue;
}
} else {
var G__43587 = cljs.core.next(seq__43383_43570__$1);
var G__43588 = null;
var G__43589 = (0);
var G__43590 = (0);
seq__43383_43550 = G__43587;
chunk__43387_43551 = G__43588;
count__43388_43552 = G__43589;
i__43389_43553 = G__43590;
continue;
}
}
} else {
}
}
break;
}


var G__43591 = seq__43338;
var G__43592 = chunk__43340;
var G__43593 = count__43341;
var G__43594 = (i__43342 + (1));
seq__43338 = G__43591;
chunk__43340 = G__43592;
count__43341 = G__43593;
i__43342 = G__43594;
continue;
} else {
var G__43595 = seq__43338;
var G__43596 = chunk__43340;
var G__43597 = count__43341;
var G__43598 = (i__43342 + (1));
seq__43338 = G__43595;
chunk__43340 = G__43596;
count__43341 = G__43597;
i__43342 = G__43598;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43338);
if(temp__5735__auto__){
var seq__43338__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43338__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43338__$1);
var G__43599 = cljs.core.chunk_rest(seq__43338__$1);
var G__43600 = c__4556__auto__;
var G__43601 = cljs.core.count(c__4556__auto__);
var G__43602 = (0);
seq__43338 = G__43599;
chunk__43340 = G__43600;
count__43341 = G__43601;
i__43342 = G__43602;
continue;
} else {
var path = cljs.core.first(seq__43338__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43405_43603 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43409_43604 = null;
var count__43410_43605 = (0);
var i__43411_43606 = (0);
while(true){
if((i__43411_43606 < count__43410_43605)){
var node_43607 = chunk__43409_43604.cljs$core$IIndexed$_nth$arity$2(null,i__43411_43606);
if(cljs.core.not(node_43607.shadow$old)){
var path_match_43608 = shadow.cljs.devtools.client.browser.match_paths(node_43607.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43608)){
var new_link_43609 = (function (){var G__43417 = node_43607.cloneNode(true);
G__43417.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43608),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43417;
})();
(node_43607.shadow$old = true);

(new_link_43609.onload = ((function (seq__43405_43603,chunk__43409_43604,count__43410_43605,i__43411_43606,seq__43338,chunk__43340,count__43341,i__43342,new_link_43609,path_match_43608,node_43607,path,seq__43338__$1,temp__5735__auto__,map__43333,map__43333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43607);
});})(seq__43405_43603,chunk__43409_43604,count__43410_43605,i__43411_43606,seq__43338,chunk__43340,count__43341,i__43342,new_link_43609,path_match_43608,node_43607,path,seq__43338__$1,temp__5735__auto__,map__43333,map__43333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43608], 0));

goog.dom.insertSiblingAfter(new_link_43609,node_43607);


var G__43610 = seq__43405_43603;
var G__43611 = chunk__43409_43604;
var G__43612 = count__43410_43605;
var G__43613 = (i__43411_43606 + (1));
seq__43405_43603 = G__43610;
chunk__43409_43604 = G__43611;
count__43410_43605 = G__43612;
i__43411_43606 = G__43613;
continue;
} else {
var G__43614 = seq__43405_43603;
var G__43615 = chunk__43409_43604;
var G__43616 = count__43410_43605;
var G__43617 = (i__43411_43606 + (1));
seq__43405_43603 = G__43614;
chunk__43409_43604 = G__43615;
count__43410_43605 = G__43616;
i__43411_43606 = G__43617;
continue;
}
} else {
var G__43618 = seq__43405_43603;
var G__43619 = chunk__43409_43604;
var G__43620 = count__43410_43605;
var G__43621 = (i__43411_43606 + (1));
seq__43405_43603 = G__43618;
chunk__43409_43604 = G__43619;
count__43410_43605 = G__43620;
i__43411_43606 = G__43621;
continue;
}
} else {
var temp__5735__auto___43622__$1 = cljs.core.seq(seq__43405_43603);
if(temp__5735__auto___43622__$1){
var seq__43405_43623__$1 = temp__5735__auto___43622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43405_43623__$1)){
var c__4556__auto___43624 = cljs.core.chunk_first(seq__43405_43623__$1);
var G__43625 = cljs.core.chunk_rest(seq__43405_43623__$1);
var G__43626 = c__4556__auto___43624;
var G__43627 = cljs.core.count(c__4556__auto___43624);
var G__43628 = (0);
seq__43405_43603 = G__43625;
chunk__43409_43604 = G__43626;
count__43410_43605 = G__43627;
i__43411_43606 = G__43628;
continue;
} else {
var node_43629 = cljs.core.first(seq__43405_43623__$1);
if(cljs.core.not(node_43629.shadow$old)){
var path_match_43630 = shadow.cljs.devtools.client.browser.match_paths(node_43629.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43630)){
var new_link_43631 = (function (){var G__43418 = node_43629.cloneNode(true);
G__43418.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43630),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43418;
})();
(node_43629.shadow$old = true);

(new_link_43631.onload = ((function (seq__43405_43603,chunk__43409_43604,count__43410_43605,i__43411_43606,seq__43338,chunk__43340,count__43341,i__43342,new_link_43631,path_match_43630,node_43629,seq__43405_43623__$1,temp__5735__auto___43622__$1,path,seq__43338__$1,temp__5735__auto__,map__43333,map__43333__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_43629);
});})(seq__43405_43603,chunk__43409_43604,count__43410_43605,i__43411_43606,seq__43338,chunk__43340,count__43341,i__43342,new_link_43631,path_match_43630,node_43629,seq__43405_43623__$1,temp__5735__auto___43622__$1,path,seq__43338__$1,temp__5735__auto__,map__43333,map__43333__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43630], 0));

goog.dom.insertSiblingAfter(new_link_43631,node_43629);


var G__43633 = cljs.core.next(seq__43405_43623__$1);
var G__43634 = null;
var G__43635 = (0);
var G__43636 = (0);
seq__43405_43603 = G__43633;
chunk__43409_43604 = G__43634;
count__43410_43605 = G__43635;
i__43411_43606 = G__43636;
continue;
} else {
var G__43637 = cljs.core.next(seq__43405_43623__$1);
var G__43638 = null;
var G__43639 = (0);
var G__43640 = (0);
seq__43405_43603 = G__43637;
chunk__43409_43604 = G__43638;
count__43410_43605 = G__43639;
i__43411_43606 = G__43640;
continue;
}
} else {
var G__43641 = cljs.core.next(seq__43405_43623__$1);
var G__43642 = null;
var G__43643 = (0);
var G__43644 = (0);
seq__43405_43603 = G__43641;
chunk__43409_43604 = G__43642;
count__43410_43605 = G__43643;
i__43411_43606 = G__43644;
continue;
}
}
} else {
}
}
break;
}


var G__43645 = cljs.core.next(seq__43338__$1);
var G__43646 = null;
var G__43647 = (0);
var G__43648 = (0);
seq__43338 = G__43645;
chunk__43340 = G__43646;
count__43341 = G__43647;
i__43342 = G__43648;
continue;
} else {
var G__43649 = cljs.core.next(seq__43338__$1);
var G__43650 = null;
var G__43651 = (0);
var G__43652 = (0);
seq__43338 = G__43649;
chunk__43340 = G__43650;
count__43341 = G__43651;
i__43342 = G__43652;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__43419){
var map__43420 = p__43419;
var map__43420__$1 = (((((!((map__43420 == null))))?(((((map__43420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43420):map__43420);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43420__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__43428){
var map__43429 = p__43428;
var map__43429__$1 = (((((!((map__43429 == null))))?(((((map__43429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43429):map__43429);
var _ = map__43429__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43429__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43431,done,error){
var map__43436 = p__43431;
var map__43436__$1 = (((((!((map__43436 == null))))?(((((map__43436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43436):map__43436);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43436__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43438,done,error){
var map__43439 = p__43438;
var map__43439__$1 = (((((!((map__43439 == null))))?(((((map__43439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43439):map__43439);
var msg = map__43439__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43439__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43439__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43441){
var map__43442 = p__43441;
var map__43442__$1 = (((((!((map__43442 == null))))?(((((map__43442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43442):map__43442);
var src = map__43442__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43442__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43445 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43445) : done.call(null,G__43445));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43446){
var map__43447 = p__43446;
var map__43447__$1 = (((((!((map__43447 == null))))?(((((map__43447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43447):map__43447);
var msg__$1 = map__43447__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43447__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43449){var ex = e43449;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43453){
var map__43454 = p__43453;
var map__43454__$1 = (((((!((map__43454 == null))))?(((((map__43454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43454):map__43454);
var env = map__43454__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43454__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__43456){
var map__43457 = p__43456;
var map__43457__$1 = (((((!((map__43457 == null))))?(((((map__43457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43457):map__43457);
var msg = map__43457__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43457__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43463){
var map__43464 = p__43463;
var map__43464__$1 = (((((!((map__43464 == null))))?(((((map__43464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43464):map__43464);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43464__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43464__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__43467){
var map__43468 = p__43467;
var map__43468__$1 = (((((!((map__43468 == null))))?(((((map__43468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43468):map__43468);
var svc = map__43468__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
