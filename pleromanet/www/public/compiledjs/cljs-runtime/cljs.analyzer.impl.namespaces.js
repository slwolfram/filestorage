goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__27909 = libspec;
var seq__27910 = cljs.core.seq(vec__27909);
var first__27911 = cljs.core.first(seq__27910);
var seq__27910__$1 = cljs.core.next(seq__27910);
var lib = first__27911;
var spec = seq__27910__$1;
var libspec__$1 = vec__27909;
var vec__27912 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var vec__27915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
var seq__27916 = cljs.core.seq(vec__27915);
var first__27917 = cljs.core.first(seq__27916);
var seq__27916__$1 = cljs.core.next(seq__27916);
var _ = first__27917;
var first__27917__$1 = cljs.core.first(seq__27916__$1);
var seq__27916__$2 = cljs.core.next(seq__27916__$1);
var alias = first__27917__$1;
var post_spec = seq__27916__$2;
var post = vec__27915;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__27919 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27919,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__27919;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__27920 = cljs.core.seq(new_as_aliases);
var chunk__27921 = null;
var count__27922 = (0);
var i__27923 = (0);
while(true){
if((i__27923 < count__27922)){
var vec__27930 = chunk__27921.cljs$core$IIndexed$_nth$arity$2(null,i__27923);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__27958 = seq__27920;
var G__27959 = chunk__27921;
var G__27960 = count__27922;
var G__27961 = (i__27923 + (1));
seq__27920 = G__27958;
chunk__27921 = G__27959;
count__27922 = G__27960;
i__27923 = G__27961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27920);
if(temp__5804__auto__){
var seq__27920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27920__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27920__$1);
var G__27962 = cljs.core.chunk_rest(seq__27920__$1);
var G__27963 = c__5568__auto__;
var G__27964 = cljs.core.count(c__5568__auto__);
var G__27965 = (0);
seq__27920 = G__27962;
chunk__27921 = G__27963;
count__27922 = G__27964;
i__27923 = G__27965;
continue;
} else {
var vec__27933 = cljs.core.first(seq__27920__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__27966 = cljs.core.next(seq__27920__$1);
var G__27967 = null;
var G__27968 = (0);
var G__27969 = (0);
seq__27920 = G__27966;
chunk__27921 = G__27967;
count__27922 = G__27968;
i__27923 = G__27969;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__27942 = arguments.length;
switch (G__27942) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__27944 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__27944__$1 = cljs.core.__destructure_map(map__27944);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27944__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__27946 = ret__$1;
var G__27946__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27946,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__27946);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27946__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__27946__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27950,p__27951){
var map__27952 = p__27950;
var map__27952__$1 = cljs.core.__destructure_map(map__27952);
var ret__$1 = map__27952__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27952__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__27953 = p__27951;
var seq__27954 = cljs.core.seq(vec__27953);
var first__27955 = cljs.core.first(seq__27954);
var seq__27954__$1 = cljs.core.next(seq__27954);
var spec_key = first__27955;
var libspecs = seq__27954__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__27956 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__27956__$1 = cljs.core.__destructure_map(map__27956);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27956__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__27957 = ret__$1;
var G__27957__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27957,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__27957);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27957__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__27957__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
