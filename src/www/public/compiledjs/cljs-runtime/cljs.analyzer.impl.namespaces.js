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
var vec__26792 = libspec;
var seq__26793 = cljs.core.seq(vec__26792);
var first__26794 = cljs.core.first(seq__26793);
var seq__26793__$1 = cljs.core.next(seq__26793);
var lib = first__26794;
var spec = seq__26793__$1;
var libspec__$1 = vec__26792;
var vec__26795 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26795,(0),null);
var vec__26798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26795,(1),null);
var seq__26799 = cljs.core.seq(vec__26798);
var first__26800 = cljs.core.first(seq__26799);
var seq__26799__$1 = cljs.core.next(seq__26799);
var _ = first__26800;
var first__26800__$1 = cljs.core.first(seq__26799__$1);
var seq__26799__$2 = cljs.core.next(seq__26799__$1);
var alias = first__26800__$1;
var post_spec = seq__26799__$2;
var post = vec__26798;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__26804 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26804,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__26804;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__26805 = cljs.core.seq(new_as_aliases);
var chunk__26806 = null;
var count__26807 = (0);
var i__26808 = (0);
while(true){
if((i__26808 < count__26807)){
var vec__26816 = chunk__26806.cljs$core$IIndexed$_nth$arity$2(null,i__26808);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__26849 = seq__26805;
var G__26850 = chunk__26806;
var G__26851 = count__26807;
var G__26852 = (i__26808 + (1));
seq__26805 = G__26849;
chunk__26806 = G__26850;
count__26807 = G__26851;
i__26808 = G__26852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26805);
if(temp__5804__auto__){
var seq__26805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26805__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26805__$1);
var G__26853 = cljs.core.chunk_rest(seq__26805__$1);
var G__26854 = c__5568__auto__;
var G__26855 = cljs.core.count(c__5568__auto__);
var G__26856 = (0);
seq__26805 = G__26853;
chunk__26806 = G__26854;
count__26807 = G__26855;
i__26808 = G__26856;
continue;
} else {
var vec__26821 = cljs.core.first(seq__26805__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26821,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26821,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__26857 = cljs.core.next(seq__26805__$1);
var G__26858 = null;
var G__26859 = (0);
var G__26860 = (0);
seq__26805 = G__26857;
chunk__26806 = G__26858;
count__26807 = G__26859;
i__26808 = G__26860;
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
var G__26826 = arguments.length;
switch (G__26826) {
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
var map__26829 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__26829__$1 = cljs.core.__destructure_map(map__26829);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26829__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26829__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__26830 = ret__$1;
var G__26830__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26830,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__26830);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26830__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__26830__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26835,p__26836){
var map__26837 = p__26835;
var map__26837__$1 = cljs.core.__destructure_map(map__26837);
var ret__$1 = map__26837__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26837__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__26838 = p__26836;
var seq__26839 = cljs.core.seq(vec__26838);
var first__26840 = cljs.core.first(seq__26839);
var seq__26839__$1 = cljs.core.next(seq__26839);
var spec_key = first__26840;
var libspecs = seq__26839__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__26843 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__26843__$1 = cljs.core.__destructure_map(map__26843);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__26844 = ret__$1;
var G__26844__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26844,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__26844);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26844__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__26844__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
