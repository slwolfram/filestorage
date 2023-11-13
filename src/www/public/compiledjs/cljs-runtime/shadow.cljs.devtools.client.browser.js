goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24589 = arguments.length;
var i__5770__auto___24590 = (0);
while(true){
if((i__5770__auto___24590 < len__5769__auto___24589)){
args__5775__auto__.push((arguments[i__5770__auto___24590]));

var G__24591 = (i__5770__auto___24590 + (1));
i__5770__auto___24590 = G__24591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24191){
var G__24192 = cljs.core.first(seq24191);
var seq24191__$1 = cljs.core.next(seq24191);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24192,seq24191__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24199 = cljs.core.seq(sources);
var chunk__24200 = null;
var count__24201 = (0);
var i__24202 = (0);
while(true){
if((i__24202 < count__24201)){
var map__24207 = chunk__24200.cljs$core$IIndexed$_nth$arity$2(null,i__24202);
var map__24207__$1 = cljs.core.__destructure_map(map__24207);
var src = map__24207__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24214){var e_24592 = e24214;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24592);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24592.message)].join('')));
}

var G__24593 = seq__24199;
var G__24594 = chunk__24200;
var G__24595 = count__24201;
var G__24596 = (i__24202 + (1));
seq__24199 = G__24593;
chunk__24200 = G__24594;
count__24201 = G__24595;
i__24202 = G__24596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24199);
if(temp__5804__auto__){
var seq__24199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24199__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24199__$1);
var G__24597 = cljs.core.chunk_rest(seq__24199__$1);
var G__24598 = c__5568__auto__;
var G__24599 = cljs.core.count(c__5568__auto__);
var G__24600 = (0);
seq__24199 = G__24597;
chunk__24200 = G__24598;
count__24201 = G__24599;
i__24202 = G__24600;
continue;
} else {
var map__24215 = cljs.core.first(seq__24199__$1);
var map__24215__$1 = cljs.core.__destructure_map(map__24215);
var src = map__24215__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24215__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24215__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24215__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24215__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24216){var e_24601 = e24216;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24601);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24601.message)].join('')));
}

var G__24602 = cljs.core.next(seq__24199__$1);
var G__24603 = null;
var G__24604 = (0);
var G__24605 = (0);
seq__24199 = G__24602;
chunk__24200 = G__24603;
count__24201 = G__24604;
i__24202 = G__24605;
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
var seq__24218 = cljs.core.seq(js_requires);
var chunk__24219 = null;
var count__24220 = (0);
var i__24221 = (0);
while(true){
if((i__24221 < count__24220)){
var js_ns = chunk__24219.cljs$core$IIndexed$_nth$arity$2(null,i__24221);
var require_str_24607 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24607);


var G__24608 = seq__24218;
var G__24609 = chunk__24219;
var G__24610 = count__24220;
var G__24611 = (i__24221 + (1));
seq__24218 = G__24608;
chunk__24219 = G__24609;
count__24220 = G__24610;
i__24221 = G__24611;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24218);
if(temp__5804__auto__){
var seq__24218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24218__$1);
var G__24612 = cljs.core.chunk_rest(seq__24218__$1);
var G__24613 = c__5568__auto__;
var G__24614 = cljs.core.count(c__5568__auto__);
var G__24615 = (0);
seq__24218 = G__24612;
chunk__24219 = G__24613;
count__24220 = G__24614;
i__24221 = G__24615;
continue;
} else {
var js_ns = cljs.core.first(seq__24218__$1);
var require_str_24616 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24616);


var G__24617 = cljs.core.next(seq__24218__$1);
var G__24618 = null;
var G__24619 = (0);
var G__24620 = (0);
seq__24218 = G__24617;
chunk__24219 = G__24618;
count__24220 = G__24619;
i__24221 = G__24620;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24225){
var map__24226 = p__24225;
var map__24226__$1 = cljs.core.__destructure_map(map__24226);
var msg = map__24226__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24226__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24226__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24227(s__24228){
return (new cljs.core.LazySeq(null,(function (){
var s__24228__$1 = s__24228;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24228__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24233 = cljs.core.first(xs__6360__auto__);
var map__24233__$1 = cljs.core.__destructure_map(map__24233);
var src = map__24233__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24233__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24228__$1,map__24233,map__24233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24226,map__24226__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24227_$_iter__24229(s__24230){
return (new cljs.core.LazySeq(null,((function (s__24228__$1,map__24233,map__24233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24226,map__24226__$1,msg,info,reload_info){
return (function (){
var s__24230__$1 = s__24230;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24230__$1);
if(temp__5804__auto____$1){
var s__24230__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24230__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24230__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24232 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24231 = (0);
while(true){
if((i__24231 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24231);
cljs.core.chunk_append(b__24232,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24621 = (i__24231 + (1));
i__24231 = G__24621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24232),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24227_$_iter__24229(cljs.core.chunk_rest(s__24230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24232),null);
}
} else {
var warning = cljs.core.first(s__24230__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24227_$_iter__24229(cljs.core.rest(s__24230__$2)));
}
} else {
return null;
}
break;
}
});})(s__24228__$1,map__24233,map__24233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24226,map__24226__$1,msg,info,reload_info))
,null,null));
});})(s__24228__$1,map__24233,map__24233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24226,map__24226__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24227(cljs.core.rest(s__24228__$1)));
} else {
var G__24622 = cljs.core.rest(s__24228__$1);
s__24228__$1 = G__24622;
continue;
}
} else {
var G__24623 = cljs.core.rest(s__24228__$1);
s__24228__$1 = G__24623;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24234_24624 = cljs.core.seq(warnings);
var chunk__24235_24625 = null;
var count__24236_24626 = (0);
var i__24237_24627 = (0);
while(true){
if((i__24237_24627 < count__24236_24626)){
var map__24240_24628 = chunk__24235_24625.cljs$core$IIndexed$_nth$arity$2(null,i__24237_24627);
var map__24240_24629__$1 = cljs.core.__destructure_map(map__24240_24628);
var w_24630 = map__24240_24629__$1;
var msg_24631__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24240_24629__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24240_24629__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24240_24629__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24240_24629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24634)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24632),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24633),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24631__$1)].join(''));


var G__24635 = seq__24234_24624;
var G__24636 = chunk__24235_24625;
var G__24637 = count__24236_24626;
var G__24638 = (i__24237_24627 + (1));
seq__24234_24624 = G__24635;
chunk__24235_24625 = G__24636;
count__24236_24626 = G__24637;
i__24237_24627 = G__24638;
continue;
} else {
var temp__5804__auto___24639 = cljs.core.seq(seq__24234_24624);
if(temp__5804__auto___24639){
var seq__24234_24640__$1 = temp__5804__auto___24639;
if(cljs.core.chunked_seq_QMARK_(seq__24234_24640__$1)){
var c__5568__auto___24641 = cljs.core.chunk_first(seq__24234_24640__$1);
var G__24642 = cljs.core.chunk_rest(seq__24234_24640__$1);
var G__24643 = c__5568__auto___24641;
var G__24644 = cljs.core.count(c__5568__auto___24641);
var G__24645 = (0);
seq__24234_24624 = G__24642;
chunk__24235_24625 = G__24643;
count__24236_24626 = G__24644;
i__24237_24627 = G__24645;
continue;
} else {
var map__24241_24646 = cljs.core.first(seq__24234_24640__$1);
var map__24241_24647__$1 = cljs.core.__destructure_map(map__24241_24646);
var w_24648 = map__24241_24647__$1;
var msg_24649__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241_24647__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241_24647__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241_24647__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241_24647__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24652)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24650),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24651),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24649__$1)].join(''));


var G__24653 = cljs.core.next(seq__24234_24640__$1);
var G__24654 = null;
var G__24655 = (0);
var G__24656 = (0);
seq__24234_24624 = G__24653;
chunk__24235_24625 = G__24654;
count__24236_24626 = G__24655;
i__24237_24627 = G__24656;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24224_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24224_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24242){
var map__24243 = p__24242;
var map__24243__$1 = cljs.core.__destructure_map(map__24243);
var msg = map__24243__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24243__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24243__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24244 = cljs.core.seq(updates);
var chunk__24246 = null;
var count__24247 = (0);
var i__24248 = (0);
while(true){
if((i__24248 < count__24247)){
var path = chunk__24246.cljs$core$IIndexed$_nth$arity$2(null,i__24248);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24385_24658 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24389_24659 = null;
var count__24390_24660 = (0);
var i__24391_24661 = (0);
while(true){
if((i__24391_24661 < count__24390_24660)){
var node_24662 = chunk__24389_24659.cljs$core$IIndexed$_nth$arity$2(null,i__24391_24661);
if(cljs.core.not(node_24662.shadow$old)){
var path_match_24663 = shadow.cljs.devtools.client.browser.match_paths(node_24662.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24663)){
var new_link_24664 = (function (){var G__24444 = node_24662.cloneNode(true);
G__24444.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24663),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24444;
})();
(node_24662.shadow$old = true);

(new_link_24664.onload = ((function (seq__24385_24658,chunk__24389_24659,count__24390_24660,i__24391_24661,seq__24244,chunk__24246,count__24247,i__24248,new_link_24664,path_match_24663,node_24662,path,map__24243,map__24243__$1,msg,updates,reload_info){
return (function (e){
var seq__24447_24665 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24449_24666 = null;
var count__24450_24667 = (0);
var i__24451_24668 = (0);
while(true){
if((i__24451_24668 < count__24450_24667)){
var map__24463_24669 = chunk__24449_24666.cljs$core$IIndexed$_nth$arity$2(null,i__24451_24668);
var map__24463_24670__$1 = cljs.core.__destructure_map(map__24463_24669);
var task_24671 = map__24463_24670__$1;
var fn_str_24672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463_24670__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24463_24670__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24674 = goog.getObjectByName(fn_str_24672,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24673)].join(''));

(fn_obj_24674.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24674.cljs$core$IFn$_invoke$arity$2(path,new_link_24664) : fn_obj_24674.call(null,path,new_link_24664));


var G__24675 = seq__24447_24665;
var G__24676 = chunk__24449_24666;
var G__24677 = count__24450_24667;
var G__24678 = (i__24451_24668 + (1));
seq__24447_24665 = G__24675;
chunk__24449_24666 = G__24676;
count__24450_24667 = G__24677;
i__24451_24668 = G__24678;
continue;
} else {
var temp__5804__auto___24679 = cljs.core.seq(seq__24447_24665);
if(temp__5804__auto___24679){
var seq__24447_24680__$1 = temp__5804__auto___24679;
if(cljs.core.chunked_seq_QMARK_(seq__24447_24680__$1)){
var c__5568__auto___24681 = cljs.core.chunk_first(seq__24447_24680__$1);
var G__24682 = cljs.core.chunk_rest(seq__24447_24680__$1);
var G__24683 = c__5568__auto___24681;
var G__24684 = cljs.core.count(c__5568__auto___24681);
var G__24685 = (0);
seq__24447_24665 = G__24682;
chunk__24449_24666 = G__24683;
count__24450_24667 = G__24684;
i__24451_24668 = G__24685;
continue;
} else {
var map__24468_24686 = cljs.core.first(seq__24447_24680__$1);
var map__24468_24687__$1 = cljs.core.__destructure_map(map__24468_24686);
var task_24688 = map__24468_24687__$1;
var fn_str_24689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24468_24687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24468_24687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24691 = goog.getObjectByName(fn_str_24689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24690)].join(''));

(fn_obj_24691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24691.cljs$core$IFn$_invoke$arity$2(path,new_link_24664) : fn_obj_24691.call(null,path,new_link_24664));


var G__24692 = cljs.core.next(seq__24447_24680__$1);
var G__24693 = null;
var G__24694 = (0);
var G__24695 = (0);
seq__24447_24665 = G__24692;
chunk__24449_24666 = G__24693;
count__24450_24667 = G__24694;
i__24451_24668 = G__24695;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24662);
});})(seq__24385_24658,chunk__24389_24659,count__24390_24660,i__24391_24661,seq__24244,chunk__24246,count__24247,i__24248,new_link_24664,path_match_24663,node_24662,path,map__24243,map__24243__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24663], 0));

goog.dom.insertSiblingAfter(new_link_24664,node_24662);


var G__24696 = seq__24385_24658;
var G__24697 = chunk__24389_24659;
var G__24698 = count__24390_24660;
var G__24699 = (i__24391_24661 + (1));
seq__24385_24658 = G__24696;
chunk__24389_24659 = G__24697;
count__24390_24660 = G__24698;
i__24391_24661 = G__24699;
continue;
} else {
var G__24700 = seq__24385_24658;
var G__24701 = chunk__24389_24659;
var G__24702 = count__24390_24660;
var G__24703 = (i__24391_24661 + (1));
seq__24385_24658 = G__24700;
chunk__24389_24659 = G__24701;
count__24390_24660 = G__24702;
i__24391_24661 = G__24703;
continue;
}
} else {
var G__24704 = seq__24385_24658;
var G__24705 = chunk__24389_24659;
var G__24706 = count__24390_24660;
var G__24707 = (i__24391_24661 + (1));
seq__24385_24658 = G__24704;
chunk__24389_24659 = G__24705;
count__24390_24660 = G__24706;
i__24391_24661 = G__24707;
continue;
}
} else {
var temp__5804__auto___24708 = cljs.core.seq(seq__24385_24658);
if(temp__5804__auto___24708){
var seq__24385_24709__$1 = temp__5804__auto___24708;
if(cljs.core.chunked_seq_QMARK_(seq__24385_24709__$1)){
var c__5568__auto___24710 = cljs.core.chunk_first(seq__24385_24709__$1);
var G__24711 = cljs.core.chunk_rest(seq__24385_24709__$1);
var G__24712 = c__5568__auto___24710;
var G__24713 = cljs.core.count(c__5568__auto___24710);
var G__24714 = (0);
seq__24385_24658 = G__24711;
chunk__24389_24659 = G__24712;
count__24390_24660 = G__24713;
i__24391_24661 = G__24714;
continue;
} else {
var node_24715 = cljs.core.first(seq__24385_24709__$1);
if(cljs.core.not(node_24715.shadow$old)){
var path_match_24716 = shadow.cljs.devtools.client.browser.match_paths(node_24715.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24716)){
var new_link_24717 = (function (){var G__24469 = node_24715.cloneNode(true);
G__24469.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24716),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24469;
})();
(node_24715.shadow$old = true);

(new_link_24717.onload = ((function (seq__24385_24658,chunk__24389_24659,count__24390_24660,i__24391_24661,seq__24244,chunk__24246,count__24247,i__24248,new_link_24717,path_match_24716,node_24715,seq__24385_24709__$1,temp__5804__auto___24708,path,map__24243,map__24243__$1,msg,updates,reload_info){
return (function (e){
var seq__24470_24718 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24472_24719 = null;
var count__24473_24720 = (0);
var i__24474_24721 = (0);
while(true){
if((i__24474_24721 < count__24473_24720)){
var map__24480_24722 = chunk__24472_24719.cljs$core$IIndexed$_nth$arity$2(null,i__24474_24721);
var map__24480_24723__$1 = cljs.core.__destructure_map(map__24480_24722);
var task_24724 = map__24480_24723__$1;
var fn_str_24725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480_24723__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480_24723__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24727 = goog.getObjectByName(fn_str_24725,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24726)].join(''));

(fn_obj_24727.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24727.cljs$core$IFn$_invoke$arity$2(path,new_link_24717) : fn_obj_24727.call(null,path,new_link_24717));


var G__24728 = seq__24470_24718;
var G__24729 = chunk__24472_24719;
var G__24730 = count__24473_24720;
var G__24731 = (i__24474_24721 + (1));
seq__24470_24718 = G__24728;
chunk__24472_24719 = G__24729;
count__24473_24720 = G__24730;
i__24474_24721 = G__24731;
continue;
} else {
var temp__5804__auto___24732__$1 = cljs.core.seq(seq__24470_24718);
if(temp__5804__auto___24732__$1){
var seq__24470_24733__$1 = temp__5804__auto___24732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24470_24733__$1)){
var c__5568__auto___24734 = cljs.core.chunk_first(seq__24470_24733__$1);
var G__24735 = cljs.core.chunk_rest(seq__24470_24733__$1);
var G__24736 = c__5568__auto___24734;
var G__24737 = cljs.core.count(c__5568__auto___24734);
var G__24738 = (0);
seq__24470_24718 = G__24735;
chunk__24472_24719 = G__24736;
count__24473_24720 = G__24737;
i__24474_24721 = G__24738;
continue;
} else {
var map__24483_24739 = cljs.core.first(seq__24470_24733__$1);
var map__24483_24740__$1 = cljs.core.__destructure_map(map__24483_24739);
var task_24741 = map__24483_24740__$1;
var fn_str_24742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24483_24740__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24483_24740__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24744 = goog.getObjectByName(fn_str_24742,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24743)].join(''));

(fn_obj_24744.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24744.cljs$core$IFn$_invoke$arity$2(path,new_link_24717) : fn_obj_24744.call(null,path,new_link_24717));


var G__24745 = cljs.core.next(seq__24470_24733__$1);
var G__24746 = null;
var G__24747 = (0);
var G__24748 = (0);
seq__24470_24718 = G__24745;
chunk__24472_24719 = G__24746;
count__24473_24720 = G__24747;
i__24474_24721 = G__24748;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24715);
});})(seq__24385_24658,chunk__24389_24659,count__24390_24660,i__24391_24661,seq__24244,chunk__24246,count__24247,i__24248,new_link_24717,path_match_24716,node_24715,seq__24385_24709__$1,temp__5804__auto___24708,path,map__24243,map__24243__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24716], 0));

goog.dom.insertSiblingAfter(new_link_24717,node_24715);


var G__24749 = cljs.core.next(seq__24385_24709__$1);
var G__24750 = null;
var G__24751 = (0);
var G__24752 = (0);
seq__24385_24658 = G__24749;
chunk__24389_24659 = G__24750;
count__24390_24660 = G__24751;
i__24391_24661 = G__24752;
continue;
} else {
var G__24753 = cljs.core.next(seq__24385_24709__$1);
var G__24754 = null;
var G__24755 = (0);
var G__24756 = (0);
seq__24385_24658 = G__24753;
chunk__24389_24659 = G__24754;
count__24390_24660 = G__24755;
i__24391_24661 = G__24756;
continue;
}
} else {
var G__24757 = cljs.core.next(seq__24385_24709__$1);
var G__24758 = null;
var G__24759 = (0);
var G__24760 = (0);
seq__24385_24658 = G__24757;
chunk__24389_24659 = G__24758;
count__24390_24660 = G__24759;
i__24391_24661 = G__24760;
continue;
}
}
} else {
}
}
break;
}


var G__24761 = seq__24244;
var G__24762 = chunk__24246;
var G__24763 = count__24247;
var G__24764 = (i__24248 + (1));
seq__24244 = G__24761;
chunk__24246 = G__24762;
count__24247 = G__24763;
i__24248 = G__24764;
continue;
} else {
var G__24765 = seq__24244;
var G__24766 = chunk__24246;
var G__24767 = count__24247;
var G__24768 = (i__24248 + (1));
seq__24244 = G__24765;
chunk__24246 = G__24766;
count__24247 = G__24767;
i__24248 = G__24768;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24244);
if(temp__5804__auto__){
var seq__24244__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24244__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24244__$1);
var G__24769 = cljs.core.chunk_rest(seq__24244__$1);
var G__24770 = c__5568__auto__;
var G__24771 = cljs.core.count(c__5568__auto__);
var G__24772 = (0);
seq__24244 = G__24769;
chunk__24246 = G__24770;
count__24247 = G__24771;
i__24248 = G__24772;
continue;
} else {
var path = cljs.core.first(seq__24244__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24484_24773 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24488_24774 = null;
var count__24489_24775 = (0);
var i__24490_24776 = (0);
while(true){
if((i__24490_24776 < count__24489_24775)){
var node_24777 = chunk__24488_24774.cljs$core$IIndexed$_nth$arity$2(null,i__24490_24776);
if(cljs.core.not(node_24777.shadow$old)){
var path_match_24778 = shadow.cljs.devtools.client.browser.match_paths(node_24777.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24778)){
var new_link_24779 = (function (){var G__24533 = node_24777.cloneNode(true);
G__24533.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24778),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24533;
})();
(node_24777.shadow$old = true);

(new_link_24779.onload = ((function (seq__24484_24773,chunk__24488_24774,count__24489_24775,i__24490_24776,seq__24244,chunk__24246,count__24247,i__24248,new_link_24779,path_match_24778,node_24777,path,seq__24244__$1,temp__5804__auto__,map__24243,map__24243__$1,msg,updates,reload_info){
return (function (e){
var seq__24534_24780 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24536_24781 = null;
var count__24537_24782 = (0);
var i__24538_24783 = (0);
while(true){
if((i__24538_24783 < count__24537_24782)){
var map__24542_24784 = chunk__24536_24781.cljs$core$IIndexed$_nth$arity$2(null,i__24538_24783);
var map__24542_24785__$1 = cljs.core.__destructure_map(map__24542_24784);
var task_24786 = map__24542_24785__$1;
var fn_str_24787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24542_24785__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24542_24785__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24789 = goog.getObjectByName(fn_str_24787,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24788)].join(''));

(fn_obj_24789.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24789.cljs$core$IFn$_invoke$arity$2(path,new_link_24779) : fn_obj_24789.call(null,path,new_link_24779));


var G__24790 = seq__24534_24780;
var G__24791 = chunk__24536_24781;
var G__24792 = count__24537_24782;
var G__24793 = (i__24538_24783 + (1));
seq__24534_24780 = G__24790;
chunk__24536_24781 = G__24791;
count__24537_24782 = G__24792;
i__24538_24783 = G__24793;
continue;
} else {
var temp__5804__auto___24794__$1 = cljs.core.seq(seq__24534_24780);
if(temp__5804__auto___24794__$1){
var seq__24534_24795__$1 = temp__5804__auto___24794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24534_24795__$1)){
var c__5568__auto___24796 = cljs.core.chunk_first(seq__24534_24795__$1);
var G__24797 = cljs.core.chunk_rest(seq__24534_24795__$1);
var G__24798 = c__5568__auto___24796;
var G__24799 = cljs.core.count(c__5568__auto___24796);
var G__24800 = (0);
seq__24534_24780 = G__24797;
chunk__24536_24781 = G__24798;
count__24537_24782 = G__24799;
i__24538_24783 = G__24800;
continue;
} else {
var map__24543_24801 = cljs.core.first(seq__24534_24795__$1);
var map__24543_24802__$1 = cljs.core.__destructure_map(map__24543_24801);
var task_24803 = map__24543_24802__$1;
var fn_str_24804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24543_24802__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24543_24802__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24806 = goog.getObjectByName(fn_str_24804,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24805)].join(''));

(fn_obj_24806.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24806.cljs$core$IFn$_invoke$arity$2(path,new_link_24779) : fn_obj_24806.call(null,path,new_link_24779));


var G__24807 = cljs.core.next(seq__24534_24795__$1);
var G__24808 = null;
var G__24809 = (0);
var G__24810 = (0);
seq__24534_24780 = G__24807;
chunk__24536_24781 = G__24808;
count__24537_24782 = G__24809;
i__24538_24783 = G__24810;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24777);
});})(seq__24484_24773,chunk__24488_24774,count__24489_24775,i__24490_24776,seq__24244,chunk__24246,count__24247,i__24248,new_link_24779,path_match_24778,node_24777,path,seq__24244__$1,temp__5804__auto__,map__24243,map__24243__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24778], 0));

goog.dom.insertSiblingAfter(new_link_24779,node_24777);


var G__24811 = seq__24484_24773;
var G__24812 = chunk__24488_24774;
var G__24813 = count__24489_24775;
var G__24814 = (i__24490_24776 + (1));
seq__24484_24773 = G__24811;
chunk__24488_24774 = G__24812;
count__24489_24775 = G__24813;
i__24490_24776 = G__24814;
continue;
} else {
var G__24815 = seq__24484_24773;
var G__24816 = chunk__24488_24774;
var G__24817 = count__24489_24775;
var G__24818 = (i__24490_24776 + (1));
seq__24484_24773 = G__24815;
chunk__24488_24774 = G__24816;
count__24489_24775 = G__24817;
i__24490_24776 = G__24818;
continue;
}
} else {
var G__24819 = seq__24484_24773;
var G__24820 = chunk__24488_24774;
var G__24821 = count__24489_24775;
var G__24822 = (i__24490_24776 + (1));
seq__24484_24773 = G__24819;
chunk__24488_24774 = G__24820;
count__24489_24775 = G__24821;
i__24490_24776 = G__24822;
continue;
}
} else {
var temp__5804__auto___24823__$1 = cljs.core.seq(seq__24484_24773);
if(temp__5804__auto___24823__$1){
var seq__24484_24824__$1 = temp__5804__auto___24823__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24484_24824__$1)){
var c__5568__auto___24825 = cljs.core.chunk_first(seq__24484_24824__$1);
var G__24826 = cljs.core.chunk_rest(seq__24484_24824__$1);
var G__24827 = c__5568__auto___24825;
var G__24828 = cljs.core.count(c__5568__auto___24825);
var G__24829 = (0);
seq__24484_24773 = G__24826;
chunk__24488_24774 = G__24827;
count__24489_24775 = G__24828;
i__24490_24776 = G__24829;
continue;
} else {
var node_24830 = cljs.core.first(seq__24484_24824__$1);
if(cljs.core.not(node_24830.shadow$old)){
var path_match_24831 = shadow.cljs.devtools.client.browser.match_paths(node_24830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24831)){
var new_link_24832 = (function (){var G__24544 = node_24830.cloneNode(true);
G__24544.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24831),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24544;
})();
(node_24830.shadow$old = true);

(new_link_24832.onload = ((function (seq__24484_24773,chunk__24488_24774,count__24489_24775,i__24490_24776,seq__24244,chunk__24246,count__24247,i__24248,new_link_24832,path_match_24831,node_24830,seq__24484_24824__$1,temp__5804__auto___24823__$1,path,seq__24244__$1,temp__5804__auto__,map__24243,map__24243__$1,msg,updates,reload_info){
return (function (e){
var seq__24545_24833 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24547_24834 = null;
var count__24548_24835 = (0);
var i__24549_24836 = (0);
while(true){
if((i__24549_24836 < count__24548_24835)){
var map__24558_24837 = chunk__24547_24834.cljs$core$IIndexed$_nth$arity$2(null,i__24549_24836);
var map__24558_24838__$1 = cljs.core.__destructure_map(map__24558_24837);
var task_24839 = map__24558_24838__$1;
var fn_str_24840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558_24838__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558_24838__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24842 = goog.getObjectByName(fn_str_24840,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24841)].join(''));

(fn_obj_24842.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24842.cljs$core$IFn$_invoke$arity$2(path,new_link_24832) : fn_obj_24842.call(null,path,new_link_24832));


var G__24843 = seq__24545_24833;
var G__24844 = chunk__24547_24834;
var G__24845 = count__24548_24835;
var G__24846 = (i__24549_24836 + (1));
seq__24545_24833 = G__24843;
chunk__24547_24834 = G__24844;
count__24548_24835 = G__24845;
i__24549_24836 = G__24846;
continue;
} else {
var temp__5804__auto___24847__$2 = cljs.core.seq(seq__24545_24833);
if(temp__5804__auto___24847__$2){
var seq__24545_24848__$1 = temp__5804__auto___24847__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24545_24848__$1)){
var c__5568__auto___24849 = cljs.core.chunk_first(seq__24545_24848__$1);
var G__24850 = cljs.core.chunk_rest(seq__24545_24848__$1);
var G__24851 = c__5568__auto___24849;
var G__24852 = cljs.core.count(c__5568__auto___24849);
var G__24853 = (0);
seq__24545_24833 = G__24850;
chunk__24547_24834 = G__24851;
count__24548_24835 = G__24852;
i__24549_24836 = G__24853;
continue;
} else {
var map__24559_24854 = cljs.core.first(seq__24545_24848__$1);
var map__24559_24855__$1 = cljs.core.__destructure_map(map__24559_24854);
var task_24856 = map__24559_24855__$1;
var fn_str_24857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24559_24855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24559_24855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24859 = goog.getObjectByName(fn_str_24857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24858)].join(''));

(fn_obj_24859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24859.cljs$core$IFn$_invoke$arity$2(path,new_link_24832) : fn_obj_24859.call(null,path,new_link_24832));


var G__24860 = cljs.core.next(seq__24545_24848__$1);
var G__24861 = null;
var G__24862 = (0);
var G__24863 = (0);
seq__24545_24833 = G__24860;
chunk__24547_24834 = G__24861;
count__24548_24835 = G__24862;
i__24549_24836 = G__24863;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24830);
});})(seq__24484_24773,chunk__24488_24774,count__24489_24775,i__24490_24776,seq__24244,chunk__24246,count__24247,i__24248,new_link_24832,path_match_24831,node_24830,seq__24484_24824__$1,temp__5804__auto___24823__$1,path,seq__24244__$1,temp__5804__auto__,map__24243,map__24243__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24831], 0));

goog.dom.insertSiblingAfter(new_link_24832,node_24830);


var G__24864 = cljs.core.next(seq__24484_24824__$1);
var G__24865 = null;
var G__24866 = (0);
var G__24867 = (0);
seq__24484_24773 = G__24864;
chunk__24488_24774 = G__24865;
count__24489_24775 = G__24866;
i__24490_24776 = G__24867;
continue;
} else {
var G__24868 = cljs.core.next(seq__24484_24824__$1);
var G__24869 = null;
var G__24870 = (0);
var G__24871 = (0);
seq__24484_24773 = G__24868;
chunk__24488_24774 = G__24869;
count__24489_24775 = G__24870;
i__24490_24776 = G__24871;
continue;
}
} else {
var G__24872 = cljs.core.next(seq__24484_24824__$1);
var G__24873 = null;
var G__24874 = (0);
var G__24875 = (0);
seq__24484_24773 = G__24872;
chunk__24488_24774 = G__24873;
count__24489_24775 = G__24874;
i__24490_24776 = G__24875;
continue;
}
}
} else {
}
}
break;
}


var G__24876 = cljs.core.next(seq__24244__$1);
var G__24877 = null;
var G__24878 = (0);
var G__24879 = (0);
seq__24244 = G__24876;
chunk__24246 = G__24877;
count__24247 = G__24878;
i__24248 = G__24879;
continue;
} else {
var G__24880 = cljs.core.next(seq__24244__$1);
var G__24881 = null;
var G__24882 = (0);
var G__24883 = (0);
seq__24244 = G__24880;
chunk__24246 = G__24881;
count__24247 = G__24882;
i__24248 = G__24883;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__24564){
var map__24565 = p__24564;
var map__24565__$1 = cljs.core.__destructure_map(map__24565);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24565__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24566,done,error){
var map__24567 = p__24566;
var map__24567__$1 = cljs.core.__destructure_map(map__24567);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24567__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24568,done,error){
var map__24570 = p__24568;
var map__24570__$1 = cljs.core.__destructure_map(map__24570);
var msg = map__24570__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24570__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24570__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24570__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24571){
var map__24572 = p__24571;
var map__24572__$1 = cljs.core.__destructure_map(map__24572);
var src = map__24572__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24572__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24573 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24573) : done.call(null,G__24573));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24574){
var map__24575 = p__24574;
var map__24575__$1 = cljs.core.__destructure_map(map__24575);
var msg__$1 = map__24575__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24575__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24576){var ex = e24576;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24577){
var map__24578 = p__24577;
var map__24578__$1 = cljs.core.__destructure_map(map__24578);
var env = map__24578__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24578__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24582){
var map__24583 = p__24582;
var map__24583__$1 = cljs.core.__destructure_map(map__24583);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24583__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24583__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__24584){
var map__24585 = p__24584;
var map__24585__$1 = cljs.core.__destructure_map(map__24585);
var svc = map__24585__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24585__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
