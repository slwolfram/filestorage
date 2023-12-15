goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24556 = arguments.length;
var i__5770__auto___24557 = (0);
while(true){
if((i__5770__auto___24557 < len__5769__auto___24556)){
args__5775__auto__.push((arguments[i__5770__auto___24557]));

var G__24558 = (i__5770__auto___24557 + (1));
i__5770__auto___24557 = G__24558;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24099){
var G__24100 = cljs.core.first(seq24099);
var seq24099__$1 = cljs.core.next(seq24099);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24100,seq24099__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24103 = cljs.core.seq(sources);
var chunk__24104 = null;
var count__24105 = (0);
var i__24106 = (0);
while(true){
if((i__24106 < count__24105)){
var map__24118 = chunk__24104.cljs$core$IIndexed$_nth$arity$2(null,i__24106);
var map__24118__$1 = cljs.core.__destructure_map(map__24118);
var src = map__24118__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24118__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24118__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24118__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24119){var e_24559 = e24119;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24559);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24559.message)].join('')));
}

var G__24560 = seq__24103;
var G__24561 = chunk__24104;
var G__24562 = count__24105;
var G__24563 = (i__24106 + (1));
seq__24103 = G__24560;
chunk__24104 = G__24561;
count__24105 = G__24562;
i__24106 = G__24563;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24103);
if(temp__5804__auto__){
var seq__24103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24103__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24103__$1);
var G__24564 = cljs.core.chunk_rest(seq__24103__$1);
var G__24565 = c__5568__auto__;
var G__24566 = cljs.core.count(c__5568__auto__);
var G__24567 = (0);
seq__24103 = G__24564;
chunk__24104 = G__24565;
count__24105 = G__24566;
i__24106 = G__24567;
continue;
} else {
var map__24120 = cljs.core.first(seq__24103__$1);
var map__24120__$1 = cljs.core.__destructure_map(map__24120);
var src = map__24120__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24120__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24120__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24120__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24121){var e_24570 = e24121;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24570);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24570.message)].join('')));
}

var G__24571 = cljs.core.next(seq__24103__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24103 = G__24571;
chunk__24104 = G__24572;
count__24105 = G__24573;
i__24106 = G__24574;
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
var seq__24122 = cljs.core.seq(js_requires);
var chunk__24123 = null;
var count__24124 = (0);
var i__24125 = (0);
while(true){
if((i__24125 < count__24124)){
var js_ns = chunk__24123.cljs$core$IIndexed$_nth$arity$2(null,i__24125);
var require_str_24575 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24575);


var G__24576 = seq__24122;
var G__24577 = chunk__24123;
var G__24578 = count__24124;
var G__24579 = (i__24125 + (1));
seq__24122 = G__24576;
chunk__24123 = G__24577;
count__24124 = G__24578;
i__24125 = G__24579;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24122);
if(temp__5804__auto__){
var seq__24122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24122__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24122__$1);
var G__24580 = cljs.core.chunk_rest(seq__24122__$1);
var G__24581 = c__5568__auto__;
var G__24582 = cljs.core.count(c__5568__auto__);
var G__24583 = (0);
seq__24122 = G__24580;
chunk__24123 = G__24581;
count__24124 = G__24582;
i__24125 = G__24583;
continue;
} else {
var js_ns = cljs.core.first(seq__24122__$1);
var require_str_24584 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24584);


var G__24585 = cljs.core.next(seq__24122__$1);
var G__24586 = null;
var G__24587 = (0);
var G__24588 = (0);
seq__24122 = G__24585;
chunk__24123 = G__24586;
count__24124 = G__24587;
i__24125 = G__24588;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24133){
var map__24134 = p__24133;
var map__24134__$1 = cljs.core.__destructure_map(map__24134);
var msg = map__24134__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24134__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24134__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24135(s__24136){
return (new cljs.core.LazySeq(null,(function (){
var s__24136__$1 = s__24136;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24136__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24145 = cljs.core.first(xs__6360__auto__);
var map__24145__$1 = cljs.core.__destructure_map(map__24145);
var src = map__24145__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24145__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24145__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24136__$1,map__24145,map__24145__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24134,map__24134__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24135_$_iter__24137(s__24138){
return (new cljs.core.LazySeq(null,((function (s__24136__$1,map__24145,map__24145__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24134,map__24134__$1,msg,info,reload_info){
return (function (){
var s__24138__$1 = s__24138;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24138__$1);
if(temp__5804__auto____$1){
var s__24138__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24138__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24138__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24140 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24139 = (0);
while(true){
if((i__24139 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24139);
cljs.core.chunk_append(b__24140,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24589 = (i__24139 + (1));
i__24139 = G__24589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24140),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24135_$_iter__24137(cljs.core.chunk_rest(s__24138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24140),null);
}
} else {
var warning = cljs.core.first(s__24138__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24135_$_iter__24137(cljs.core.rest(s__24138__$2)));
}
} else {
return null;
}
break;
}
});})(s__24136__$1,map__24145,map__24145__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24134,map__24134__$1,msg,info,reload_info))
,null,null));
});})(s__24136__$1,map__24145,map__24145__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24134,map__24134__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24135(cljs.core.rest(s__24136__$1)));
} else {
var G__24590 = cljs.core.rest(s__24136__$1);
s__24136__$1 = G__24590;
continue;
}
} else {
var G__24591 = cljs.core.rest(s__24136__$1);
s__24136__$1 = G__24591;
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
var seq__24151_24592 = cljs.core.seq(warnings);
var chunk__24152_24593 = null;
var count__24153_24594 = (0);
var i__24154_24595 = (0);
while(true){
if((i__24154_24595 < count__24153_24594)){
var map__24157_24596 = chunk__24152_24593.cljs$core$IIndexed$_nth$arity$2(null,i__24154_24595);
var map__24157_24597__$1 = cljs.core.__destructure_map(map__24157_24596);
var w_24598 = map__24157_24597__$1;
var msg_24599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157_24597__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157_24597__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157_24597__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157_24597__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24602)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24600),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24601),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24599__$1)].join(''));


var G__24603 = seq__24151_24592;
var G__24604 = chunk__24152_24593;
var G__24605 = count__24153_24594;
var G__24606 = (i__24154_24595 + (1));
seq__24151_24592 = G__24603;
chunk__24152_24593 = G__24604;
count__24153_24594 = G__24605;
i__24154_24595 = G__24606;
continue;
} else {
var temp__5804__auto___24607 = cljs.core.seq(seq__24151_24592);
if(temp__5804__auto___24607){
var seq__24151_24608__$1 = temp__5804__auto___24607;
if(cljs.core.chunked_seq_QMARK_(seq__24151_24608__$1)){
var c__5568__auto___24609 = cljs.core.chunk_first(seq__24151_24608__$1);
var G__24610 = cljs.core.chunk_rest(seq__24151_24608__$1);
var G__24611 = c__5568__auto___24609;
var G__24612 = cljs.core.count(c__5568__auto___24609);
var G__24613 = (0);
seq__24151_24592 = G__24610;
chunk__24152_24593 = G__24611;
count__24153_24594 = G__24612;
i__24154_24595 = G__24613;
continue;
} else {
var map__24158_24617 = cljs.core.first(seq__24151_24608__$1);
var map__24158_24618__$1 = cljs.core.__destructure_map(map__24158_24617);
var w_24619 = map__24158_24618__$1;
var msg_24620__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24158_24618__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24158_24618__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24158_24618__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24158_24618__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24623)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24621),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24622),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24620__$1)].join(''));


var G__24624 = cljs.core.next(seq__24151_24608__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24151_24592 = G__24624;
chunk__24152_24593 = G__24625;
count__24153_24594 = G__24626;
i__24154_24595 = G__24627;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24131_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24131_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24182){
var map__24183 = p__24182;
var map__24183__$1 = cljs.core.__destructure_map(map__24183);
var msg = map__24183__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24183__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24183__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24184 = cljs.core.seq(updates);
var chunk__24186 = null;
var count__24187 = (0);
var i__24188 = (0);
while(true){
if((i__24188 < count__24187)){
var path = chunk__24186.cljs$core$IIndexed$_nth$arity$2(null,i__24188);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24363_24629 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24367_24630 = null;
var count__24368_24631 = (0);
var i__24369_24632 = (0);
while(true){
if((i__24369_24632 < count__24368_24631)){
var node_24633 = chunk__24367_24630.cljs$core$IIndexed$_nth$arity$2(null,i__24369_24632);
if(cljs.core.not(node_24633.shadow$old)){
var path_match_24634 = shadow.cljs.devtools.client.browser.match_paths(node_24633.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24634)){
var new_link_24637 = (function (){var G__24403 = node_24633.cloneNode(true);
G__24403.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24634),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24403;
})();
(node_24633.shadow$old = true);

(new_link_24637.onload = ((function (seq__24363_24629,chunk__24367_24630,count__24368_24631,i__24369_24632,seq__24184,chunk__24186,count__24187,i__24188,new_link_24637,path_match_24634,node_24633,path,map__24183,map__24183__$1,msg,updates,reload_info){
return (function (e){
var seq__24404_24638 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24406_24639 = null;
var count__24407_24640 = (0);
var i__24408_24641 = (0);
while(true){
if((i__24408_24641 < count__24407_24640)){
var map__24413_24642 = chunk__24406_24639.cljs$core$IIndexed$_nth$arity$2(null,i__24408_24641);
var map__24413_24643__$1 = cljs.core.__destructure_map(map__24413_24642);
var task_24644 = map__24413_24643__$1;
var fn_str_24645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24413_24643__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24413_24643__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24647 = goog.getObjectByName(fn_str_24645,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24646)].join(''));

(fn_obj_24647.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24647.cljs$core$IFn$_invoke$arity$2(path,new_link_24637) : fn_obj_24647.call(null,path,new_link_24637));


var G__24648 = seq__24404_24638;
var G__24649 = chunk__24406_24639;
var G__24650 = count__24407_24640;
var G__24651 = (i__24408_24641 + (1));
seq__24404_24638 = G__24648;
chunk__24406_24639 = G__24649;
count__24407_24640 = G__24650;
i__24408_24641 = G__24651;
continue;
} else {
var temp__5804__auto___24652 = cljs.core.seq(seq__24404_24638);
if(temp__5804__auto___24652){
var seq__24404_24653__$1 = temp__5804__auto___24652;
if(cljs.core.chunked_seq_QMARK_(seq__24404_24653__$1)){
var c__5568__auto___24654 = cljs.core.chunk_first(seq__24404_24653__$1);
var G__24655 = cljs.core.chunk_rest(seq__24404_24653__$1);
var G__24656 = c__5568__auto___24654;
var G__24657 = cljs.core.count(c__5568__auto___24654);
var G__24658 = (0);
seq__24404_24638 = G__24655;
chunk__24406_24639 = G__24656;
count__24407_24640 = G__24657;
i__24408_24641 = G__24658;
continue;
} else {
var map__24414_24659 = cljs.core.first(seq__24404_24653__$1);
var map__24414_24660__$1 = cljs.core.__destructure_map(map__24414_24659);
var task_24661 = map__24414_24660__$1;
var fn_str_24662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24414_24660__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24414_24660__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24664 = goog.getObjectByName(fn_str_24662,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24663)].join(''));

(fn_obj_24664.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24664.cljs$core$IFn$_invoke$arity$2(path,new_link_24637) : fn_obj_24664.call(null,path,new_link_24637));


var G__24665 = cljs.core.next(seq__24404_24653__$1);
var G__24666 = null;
var G__24667 = (0);
var G__24668 = (0);
seq__24404_24638 = G__24665;
chunk__24406_24639 = G__24666;
count__24407_24640 = G__24667;
i__24408_24641 = G__24668;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24633);
});})(seq__24363_24629,chunk__24367_24630,count__24368_24631,i__24369_24632,seq__24184,chunk__24186,count__24187,i__24188,new_link_24637,path_match_24634,node_24633,path,map__24183,map__24183__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24634], 0));

goog.dom.insertSiblingAfter(new_link_24637,node_24633);


var G__24669 = seq__24363_24629;
var G__24670 = chunk__24367_24630;
var G__24671 = count__24368_24631;
var G__24672 = (i__24369_24632 + (1));
seq__24363_24629 = G__24669;
chunk__24367_24630 = G__24670;
count__24368_24631 = G__24671;
i__24369_24632 = G__24672;
continue;
} else {
var G__24673 = seq__24363_24629;
var G__24674 = chunk__24367_24630;
var G__24675 = count__24368_24631;
var G__24676 = (i__24369_24632 + (1));
seq__24363_24629 = G__24673;
chunk__24367_24630 = G__24674;
count__24368_24631 = G__24675;
i__24369_24632 = G__24676;
continue;
}
} else {
var G__24677 = seq__24363_24629;
var G__24678 = chunk__24367_24630;
var G__24679 = count__24368_24631;
var G__24680 = (i__24369_24632 + (1));
seq__24363_24629 = G__24677;
chunk__24367_24630 = G__24678;
count__24368_24631 = G__24679;
i__24369_24632 = G__24680;
continue;
}
} else {
var temp__5804__auto___24681 = cljs.core.seq(seq__24363_24629);
if(temp__5804__auto___24681){
var seq__24363_24682__$1 = temp__5804__auto___24681;
if(cljs.core.chunked_seq_QMARK_(seq__24363_24682__$1)){
var c__5568__auto___24683 = cljs.core.chunk_first(seq__24363_24682__$1);
var G__24684 = cljs.core.chunk_rest(seq__24363_24682__$1);
var G__24685 = c__5568__auto___24683;
var G__24686 = cljs.core.count(c__5568__auto___24683);
var G__24687 = (0);
seq__24363_24629 = G__24684;
chunk__24367_24630 = G__24685;
count__24368_24631 = G__24686;
i__24369_24632 = G__24687;
continue;
} else {
var node_24688 = cljs.core.first(seq__24363_24682__$1);
if(cljs.core.not(node_24688.shadow$old)){
var path_match_24689 = shadow.cljs.devtools.client.browser.match_paths(node_24688.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24689)){
var new_link_24690 = (function (){var G__24416 = node_24688.cloneNode(true);
G__24416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24689),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24416;
})();
(node_24688.shadow$old = true);

(new_link_24690.onload = ((function (seq__24363_24629,chunk__24367_24630,count__24368_24631,i__24369_24632,seq__24184,chunk__24186,count__24187,i__24188,new_link_24690,path_match_24689,node_24688,seq__24363_24682__$1,temp__5804__auto___24681,path,map__24183,map__24183__$1,msg,updates,reload_info){
return (function (e){
var seq__24417_24691 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24419_24692 = null;
var count__24420_24693 = (0);
var i__24421_24694 = (0);
while(true){
if((i__24421_24694 < count__24420_24693)){
var map__24425_24695 = chunk__24419_24692.cljs$core$IIndexed$_nth$arity$2(null,i__24421_24694);
var map__24425_24696__$1 = cljs.core.__destructure_map(map__24425_24695);
var task_24697 = map__24425_24696__$1;
var fn_str_24698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24425_24696__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24425_24696__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24700 = goog.getObjectByName(fn_str_24698,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24699)].join(''));

(fn_obj_24700.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24700.cljs$core$IFn$_invoke$arity$2(path,new_link_24690) : fn_obj_24700.call(null,path,new_link_24690));


var G__24701 = seq__24417_24691;
var G__24702 = chunk__24419_24692;
var G__24703 = count__24420_24693;
var G__24704 = (i__24421_24694 + (1));
seq__24417_24691 = G__24701;
chunk__24419_24692 = G__24702;
count__24420_24693 = G__24703;
i__24421_24694 = G__24704;
continue;
} else {
var temp__5804__auto___24705__$1 = cljs.core.seq(seq__24417_24691);
if(temp__5804__auto___24705__$1){
var seq__24417_24706__$1 = temp__5804__auto___24705__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24417_24706__$1)){
var c__5568__auto___24707 = cljs.core.chunk_first(seq__24417_24706__$1);
var G__24708 = cljs.core.chunk_rest(seq__24417_24706__$1);
var G__24709 = c__5568__auto___24707;
var G__24710 = cljs.core.count(c__5568__auto___24707);
var G__24711 = (0);
seq__24417_24691 = G__24708;
chunk__24419_24692 = G__24709;
count__24420_24693 = G__24710;
i__24421_24694 = G__24711;
continue;
} else {
var map__24426_24712 = cljs.core.first(seq__24417_24706__$1);
var map__24426_24713__$1 = cljs.core.__destructure_map(map__24426_24712);
var task_24714 = map__24426_24713__$1;
var fn_str_24715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426_24713__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426_24713__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24717 = goog.getObjectByName(fn_str_24715,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24716)].join(''));

(fn_obj_24717.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24717.cljs$core$IFn$_invoke$arity$2(path,new_link_24690) : fn_obj_24717.call(null,path,new_link_24690));


var G__24718 = cljs.core.next(seq__24417_24706__$1);
var G__24719 = null;
var G__24720 = (0);
var G__24721 = (0);
seq__24417_24691 = G__24718;
chunk__24419_24692 = G__24719;
count__24420_24693 = G__24720;
i__24421_24694 = G__24721;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24688);
});})(seq__24363_24629,chunk__24367_24630,count__24368_24631,i__24369_24632,seq__24184,chunk__24186,count__24187,i__24188,new_link_24690,path_match_24689,node_24688,seq__24363_24682__$1,temp__5804__auto___24681,path,map__24183,map__24183__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24689], 0));

goog.dom.insertSiblingAfter(new_link_24690,node_24688);


var G__24722 = cljs.core.next(seq__24363_24682__$1);
var G__24723 = null;
var G__24724 = (0);
var G__24725 = (0);
seq__24363_24629 = G__24722;
chunk__24367_24630 = G__24723;
count__24368_24631 = G__24724;
i__24369_24632 = G__24725;
continue;
} else {
var G__24726 = cljs.core.next(seq__24363_24682__$1);
var G__24727 = null;
var G__24728 = (0);
var G__24729 = (0);
seq__24363_24629 = G__24726;
chunk__24367_24630 = G__24727;
count__24368_24631 = G__24728;
i__24369_24632 = G__24729;
continue;
}
} else {
var G__24730 = cljs.core.next(seq__24363_24682__$1);
var G__24731 = null;
var G__24732 = (0);
var G__24733 = (0);
seq__24363_24629 = G__24730;
chunk__24367_24630 = G__24731;
count__24368_24631 = G__24732;
i__24369_24632 = G__24733;
continue;
}
}
} else {
}
}
break;
}


var G__24734 = seq__24184;
var G__24735 = chunk__24186;
var G__24736 = count__24187;
var G__24737 = (i__24188 + (1));
seq__24184 = G__24734;
chunk__24186 = G__24735;
count__24187 = G__24736;
i__24188 = G__24737;
continue;
} else {
var G__24738 = seq__24184;
var G__24739 = chunk__24186;
var G__24740 = count__24187;
var G__24741 = (i__24188 + (1));
seq__24184 = G__24738;
chunk__24186 = G__24739;
count__24187 = G__24740;
i__24188 = G__24741;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24184);
if(temp__5804__auto__){
var seq__24184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24184__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24184__$1);
var G__24742 = cljs.core.chunk_rest(seq__24184__$1);
var G__24743 = c__5568__auto__;
var G__24744 = cljs.core.count(c__5568__auto__);
var G__24745 = (0);
seq__24184 = G__24742;
chunk__24186 = G__24743;
count__24187 = G__24744;
i__24188 = G__24745;
continue;
} else {
var path = cljs.core.first(seq__24184__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24431_24746 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24435_24747 = null;
var count__24436_24748 = (0);
var i__24437_24749 = (0);
while(true){
if((i__24437_24749 < count__24436_24748)){
var node_24750 = chunk__24435_24747.cljs$core$IIndexed$_nth$arity$2(null,i__24437_24749);
if(cljs.core.not(node_24750.shadow$old)){
var path_match_24751 = shadow.cljs.devtools.client.browser.match_paths(node_24750.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24751)){
var new_link_24752 = (function (){var G__24468 = node_24750.cloneNode(true);
G__24468.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24751),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24468;
})();
(node_24750.shadow$old = true);

(new_link_24752.onload = ((function (seq__24431_24746,chunk__24435_24747,count__24436_24748,i__24437_24749,seq__24184,chunk__24186,count__24187,i__24188,new_link_24752,path_match_24751,node_24750,path,seq__24184__$1,temp__5804__auto__,map__24183,map__24183__$1,msg,updates,reload_info){
return (function (e){
var seq__24472_24753 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24474_24754 = null;
var count__24475_24755 = (0);
var i__24476_24756 = (0);
while(true){
if((i__24476_24756 < count__24475_24755)){
var map__24480_24757 = chunk__24474_24754.cljs$core$IIndexed$_nth$arity$2(null,i__24476_24756);
var map__24480_24758__$1 = cljs.core.__destructure_map(map__24480_24757);
var task_24759 = map__24480_24758__$1;
var fn_str_24760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480_24758__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480_24758__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24762 = goog.getObjectByName(fn_str_24760,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24761)].join(''));

(fn_obj_24762.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24762.cljs$core$IFn$_invoke$arity$2(path,new_link_24752) : fn_obj_24762.call(null,path,new_link_24752));


var G__24763 = seq__24472_24753;
var G__24764 = chunk__24474_24754;
var G__24765 = count__24475_24755;
var G__24766 = (i__24476_24756 + (1));
seq__24472_24753 = G__24763;
chunk__24474_24754 = G__24764;
count__24475_24755 = G__24765;
i__24476_24756 = G__24766;
continue;
} else {
var temp__5804__auto___24767__$1 = cljs.core.seq(seq__24472_24753);
if(temp__5804__auto___24767__$1){
var seq__24472_24768__$1 = temp__5804__auto___24767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24472_24768__$1)){
var c__5568__auto___24769 = cljs.core.chunk_first(seq__24472_24768__$1);
var G__24770 = cljs.core.chunk_rest(seq__24472_24768__$1);
var G__24771 = c__5568__auto___24769;
var G__24772 = cljs.core.count(c__5568__auto___24769);
var G__24773 = (0);
seq__24472_24753 = G__24770;
chunk__24474_24754 = G__24771;
count__24475_24755 = G__24772;
i__24476_24756 = G__24773;
continue;
} else {
var map__24481_24774 = cljs.core.first(seq__24472_24768__$1);
var map__24481_24775__$1 = cljs.core.__destructure_map(map__24481_24774);
var task_24776 = map__24481_24775__$1;
var fn_str_24777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481_24775__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24481_24775__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24779 = goog.getObjectByName(fn_str_24777,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24778)].join(''));

(fn_obj_24779.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24779.cljs$core$IFn$_invoke$arity$2(path,new_link_24752) : fn_obj_24779.call(null,path,new_link_24752));


var G__24780 = cljs.core.next(seq__24472_24768__$1);
var G__24781 = null;
var G__24782 = (0);
var G__24783 = (0);
seq__24472_24753 = G__24780;
chunk__24474_24754 = G__24781;
count__24475_24755 = G__24782;
i__24476_24756 = G__24783;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24750);
});})(seq__24431_24746,chunk__24435_24747,count__24436_24748,i__24437_24749,seq__24184,chunk__24186,count__24187,i__24188,new_link_24752,path_match_24751,node_24750,path,seq__24184__$1,temp__5804__auto__,map__24183,map__24183__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24751], 0));

goog.dom.insertSiblingAfter(new_link_24752,node_24750);


var G__24784 = seq__24431_24746;
var G__24785 = chunk__24435_24747;
var G__24786 = count__24436_24748;
var G__24787 = (i__24437_24749 + (1));
seq__24431_24746 = G__24784;
chunk__24435_24747 = G__24785;
count__24436_24748 = G__24786;
i__24437_24749 = G__24787;
continue;
} else {
var G__24788 = seq__24431_24746;
var G__24789 = chunk__24435_24747;
var G__24790 = count__24436_24748;
var G__24791 = (i__24437_24749 + (1));
seq__24431_24746 = G__24788;
chunk__24435_24747 = G__24789;
count__24436_24748 = G__24790;
i__24437_24749 = G__24791;
continue;
}
} else {
var G__24792 = seq__24431_24746;
var G__24793 = chunk__24435_24747;
var G__24794 = count__24436_24748;
var G__24795 = (i__24437_24749 + (1));
seq__24431_24746 = G__24792;
chunk__24435_24747 = G__24793;
count__24436_24748 = G__24794;
i__24437_24749 = G__24795;
continue;
}
} else {
var temp__5804__auto___24796__$1 = cljs.core.seq(seq__24431_24746);
if(temp__5804__auto___24796__$1){
var seq__24431_24797__$1 = temp__5804__auto___24796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24431_24797__$1)){
var c__5568__auto___24798 = cljs.core.chunk_first(seq__24431_24797__$1);
var G__24799 = cljs.core.chunk_rest(seq__24431_24797__$1);
var G__24800 = c__5568__auto___24798;
var G__24801 = cljs.core.count(c__5568__auto___24798);
var G__24802 = (0);
seq__24431_24746 = G__24799;
chunk__24435_24747 = G__24800;
count__24436_24748 = G__24801;
i__24437_24749 = G__24802;
continue;
} else {
var node_24803 = cljs.core.first(seq__24431_24797__$1);
if(cljs.core.not(node_24803.shadow$old)){
var path_match_24804 = shadow.cljs.devtools.client.browser.match_paths(node_24803.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24804)){
var new_link_24805 = (function (){var G__24482 = node_24803.cloneNode(true);
G__24482.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24804),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24482;
})();
(node_24803.shadow$old = true);

(new_link_24805.onload = ((function (seq__24431_24746,chunk__24435_24747,count__24436_24748,i__24437_24749,seq__24184,chunk__24186,count__24187,i__24188,new_link_24805,path_match_24804,node_24803,seq__24431_24797__$1,temp__5804__auto___24796__$1,path,seq__24184__$1,temp__5804__auto__,map__24183,map__24183__$1,msg,updates,reload_info){
return (function (e){
var seq__24483_24806 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24485_24807 = null;
var count__24486_24808 = (0);
var i__24487_24809 = (0);
while(true){
if((i__24487_24809 < count__24486_24808)){
var map__24491_24810 = chunk__24485_24807.cljs$core$IIndexed$_nth$arity$2(null,i__24487_24809);
var map__24491_24811__$1 = cljs.core.__destructure_map(map__24491_24810);
var task_24812 = map__24491_24811__$1;
var fn_str_24813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24491_24811__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24491_24811__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24815 = goog.getObjectByName(fn_str_24813,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24814)].join(''));

(fn_obj_24815.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24815.cljs$core$IFn$_invoke$arity$2(path,new_link_24805) : fn_obj_24815.call(null,path,new_link_24805));


var G__24816 = seq__24483_24806;
var G__24817 = chunk__24485_24807;
var G__24818 = count__24486_24808;
var G__24819 = (i__24487_24809 + (1));
seq__24483_24806 = G__24816;
chunk__24485_24807 = G__24817;
count__24486_24808 = G__24818;
i__24487_24809 = G__24819;
continue;
} else {
var temp__5804__auto___24820__$2 = cljs.core.seq(seq__24483_24806);
if(temp__5804__auto___24820__$2){
var seq__24483_24821__$1 = temp__5804__auto___24820__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24483_24821__$1)){
var c__5568__auto___24822 = cljs.core.chunk_first(seq__24483_24821__$1);
var G__24823 = cljs.core.chunk_rest(seq__24483_24821__$1);
var G__24824 = c__5568__auto___24822;
var G__24825 = cljs.core.count(c__5568__auto___24822);
var G__24826 = (0);
seq__24483_24806 = G__24823;
chunk__24485_24807 = G__24824;
count__24486_24808 = G__24825;
i__24487_24809 = G__24826;
continue;
} else {
var map__24492_24827 = cljs.core.first(seq__24483_24821__$1);
var map__24492_24828__$1 = cljs.core.__destructure_map(map__24492_24827);
var task_24829 = map__24492_24828__$1;
var fn_str_24830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24492_24828__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24492_24828__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24832 = goog.getObjectByName(fn_str_24830,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24831)].join(''));

(fn_obj_24832.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24832.cljs$core$IFn$_invoke$arity$2(path,new_link_24805) : fn_obj_24832.call(null,path,new_link_24805));


var G__24833 = cljs.core.next(seq__24483_24821__$1);
var G__24834 = null;
var G__24835 = (0);
var G__24836 = (0);
seq__24483_24806 = G__24833;
chunk__24485_24807 = G__24834;
count__24486_24808 = G__24835;
i__24487_24809 = G__24836;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24803);
});})(seq__24431_24746,chunk__24435_24747,count__24436_24748,i__24437_24749,seq__24184,chunk__24186,count__24187,i__24188,new_link_24805,path_match_24804,node_24803,seq__24431_24797__$1,temp__5804__auto___24796__$1,path,seq__24184__$1,temp__5804__auto__,map__24183,map__24183__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24804], 0));

goog.dom.insertSiblingAfter(new_link_24805,node_24803);


var G__24837 = cljs.core.next(seq__24431_24797__$1);
var G__24838 = null;
var G__24839 = (0);
var G__24840 = (0);
seq__24431_24746 = G__24837;
chunk__24435_24747 = G__24838;
count__24436_24748 = G__24839;
i__24437_24749 = G__24840;
continue;
} else {
var G__24841 = cljs.core.next(seq__24431_24797__$1);
var G__24842 = null;
var G__24843 = (0);
var G__24844 = (0);
seq__24431_24746 = G__24841;
chunk__24435_24747 = G__24842;
count__24436_24748 = G__24843;
i__24437_24749 = G__24844;
continue;
}
} else {
var G__24845 = cljs.core.next(seq__24431_24797__$1);
var G__24846 = null;
var G__24847 = (0);
var G__24848 = (0);
seq__24431_24746 = G__24845;
chunk__24435_24747 = G__24846;
count__24436_24748 = G__24847;
i__24437_24749 = G__24848;
continue;
}
}
} else {
}
}
break;
}


var G__24849 = cljs.core.next(seq__24184__$1);
var G__24850 = null;
var G__24851 = (0);
var G__24852 = (0);
seq__24184 = G__24849;
chunk__24186 = G__24850;
count__24187 = G__24851;
i__24188 = G__24852;
continue;
} else {
var G__24853 = cljs.core.next(seq__24184__$1);
var G__24854 = null;
var G__24855 = (0);
var G__24856 = (0);
seq__24184 = G__24853;
chunk__24186 = G__24854;
count__24187 = G__24855;
i__24188 = G__24856;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__24501){
var map__24503 = p__24501;
var map__24503__$1 = cljs.core.__destructure_map(map__24503);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24503__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24506,done,error){
var map__24507 = p__24506;
var map__24507__$1 = cljs.core.__destructure_map(map__24507);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24507__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24508,done,error){
var map__24509 = p__24508;
var map__24509__$1 = cljs.core.__destructure_map(map__24509);
var msg = map__24509__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24509__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24509__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24509__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24510){
var map__24511 = p__24510;
var map__24511__$1 = cljs.core.__destructure_map(map__24511);
var src = map__24511__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24511__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24517 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24517) : done.call(null,G__24517));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24519){
var map__24520 = p__24519;
var map__24520__$1 = cljs.core.__destructure_map(map__24520);
var msg__$1 = map__24520__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24526){var ex = e24526;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24531){
var map__24532 = p__24531;
var map__24532__$1 = cljs.core.__destructure_map(map__24532);
var env = map__24532__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24532__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24548){
var map__24549 = p__24548;
var map__24549__$1 = cljs.core.__destructure_map(map__24549);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24549__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24549__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__24550){
var map__24551 = p__24550;
var map__24551__$1 = cljs.core.__destructure_map(map__24551);
var svc = map__24551__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24551__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
