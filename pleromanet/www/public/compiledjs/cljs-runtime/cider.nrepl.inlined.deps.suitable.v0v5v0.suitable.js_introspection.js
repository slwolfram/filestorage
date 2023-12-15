goog.provide('cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection');
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__48127 = Object.getPrototypeOf(obj__$1);
var G__48128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__48127;
protos = G__48128;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$property_names_and_types(var_args){
var G__48113 = arguments.length;
switch (G__48113) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var iter__4529__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__48114(s__48115){
return (new cljs.core.LazySeq(null,(function (){
var s__48115__$1 = s__48115;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48115__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__48120 = cljs.core.first(xs__6292__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48120,(0),null);
var map__48123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48120,(1),null);
var map__48123__$1 = (((((!((map__48123 == null))))?(((((map__48123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48123):map__48123);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48123__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48123__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4525__auto__ = ((function (s__48115__$1,vec__48120,i,map__48123,map__48123__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__48114_$_iter__48116(s__48117){
return (new cljs.core.LazySeq(null,((function (s__48115__$1,vec__48120,i,map__48123,map__48123__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__48117__$1 = s__48117;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48117__$1);
if(temp__5735__auto____$1){
var s__48117__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48117__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48117__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48119 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48118 = (0);
while(true){
if((i__48118 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__48118);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__48119,(function (){var prop = goog.object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e48125){if((e48125 instanceof Error)){
var _e = e48125;
return "var";
} else {
throw e48125;

}
}})()], null);
})());

var G__48130 = (i__48118 + (1));
i__48118 = G__48130;
continue;
} else {
var G__48131 = (i__48118 + (1));
i__48118 = G__48131;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48119),cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__48114_$_iter__48116(cljs.core.chunk_rest(s__48117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48119),null);
}
} else {
var key = cljs.core.first(s__48117__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e48126){if((e48126 instanceof Error)){
var _e = e48126;
return "var";
} else {
throw e48126;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__48114_$_iter__48116(cljs.core.rest(s__48117__$2)));
} else {
var G__48132 = cljs.core.rest(s__48117__$2);
s__48117__$1 = G__48132;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__48115__$1,vec__48120,i,map__48123,map__48123__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__48115__$1,vec__48120,i,map__48123,map__48123__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.js_keys(props)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__48114(cljs.core.rest(s__48115__$1)));
} else {
var G__48133 = cljs.core.rest(s__48115__$1);
s__48115__$1 = G__48133;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.js.map
