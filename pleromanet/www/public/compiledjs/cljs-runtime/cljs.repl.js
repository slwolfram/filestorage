goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22789){
var map__22790 = p__22789;
var map__22790__$1 = cljs.core.__destructure_map(map__22790);
var m = map__22790__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22790__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22791_23055 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22792_23056 = null;
var count__22793_23057 = (0);
var i__22794_23058 = (0);
while(true){
if((i__22794_23058 < count__22793_23057)){
var f_23059 = chunk__22792_23056.cljs$core$IIndexed$_nth$arity$2(null,i__22794_23058);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23059], 0));


var G__23060 = seq__22791_23055;
var G__23061 = chunk__22792_23056;
var G__23062 = count__22793_23057;
var G__23063 = (i__22794_23058 + (1));
seq__22791_23055 = G__23060;
chunk__22792_23056 = G__23061;
count__22793_23057 = G__23062;
i__22794_23058 = G__23063;
continue;
} else {
var temp__5804__auto___23064 = cljs.core.seq(seq__22791_23055);
if(temp__5804__auto___23064){
var seq__22791_23065__$1 = temp__5804__auto___23064;
if(cljs.core.chunked_seq_QMARK_(seq__22791_23065__$1)){
var c__5568__auto___23066 = cljs.core.chunk_first(seq__22791_23065__$1);
var G__23067 = cljs.core.chunk_rest(seq__22791_23065__$1);
var G__23068 = c__5568__auto___23066;
var G__23069 = cljs.core.count(c__5568__auto___23066);
var G__23070 = (0);
seq__22791_23055 = G__23067;
chunk__22792_23056 = G__23068;
count__22793_23057 = G__23069;
i__22794_23058 = G__23070;
continue;
} else {
var f_23071 = cljs.core.first(seq__22791_23065__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23071], 0));


var G__23072 = cljs.core.next(seq__22791_23065__$1);
var G__23073 = null;
var G__23074 = (0);
var G__23075 = (0);
seq__22791_23055 = G__23072;
chunk__22792_23056 = G__23073;
count__22793_23057 = G__23074;
i__22794_23058 = G__23075;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23076 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23076], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23076)))?cljs.core.second(arglists_23076):arglists_23076)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22801_23077 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22802_23078 = null;
var count__22803_23079 = (0);
var i__22804_23080 = (0);
while(true){
if((i__22804_23080 < count__22803_23079)){
var vec__22817_23082 = chunk__22802_23078.cljs$core$IIndexed$_nth$arity$2(null,i__22804_23080);
var name_23083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817_23082,(0),null);
var map__22820_23084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817_23082,(1),null);
var map__22820_23085__$1 = cljs.core.__destructure_map(map__22820_23084);
var doc_23086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_23085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_23085__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23083], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23087], 0));

if(cljs.core.truth_(doc_23086)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23086], 0));
} else {
}


var G__23088 = seq__22801_23077;
var G__23089 = chunk__22802_23078;
var G__23090 = count__22803_23079;
var G__23091 = (i__22804_23080 + (1));
seq__22801_23077 = G__23088;
chunk__22802_23078 = G__23089;
count__22803_23079 = G__23090;
i__22804_23080 = G__23091;
continue;
} else {
var temp__5804__auto___23092 = cljs.core.seq(seq__22801_23077);
if(temp__5804__auto___23092){
var seq__22801_23097__$1 = temp__5804__auto___23092;
if(cljs.core.chunked_seq_QMARK_(seq__22801_23097__$1)){
var c__5568__auto___23098 = cljs.core.chunk_first(seq__22801_23097__$1);
var G__23099 = cljs.core.chunk_rest(seq__22801_23097__$1);
var G__23100 = c__5568__auto___23098;
var G__23101 = cljs.core.count(c__5568__auto___23098);
var G__23102 = (0);
seq__22801_23077 = G__23099;
chunk__22802_23078 = G__23100;
count__22803_23079 = G__23101;
i__22804_23080 = G__23102;
continue;
} else {
var vec__22824_23103 = cljs.core.first(seq__22801_23097__$1);
var name_23104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824_23103,(0),null);
var map__22827_23105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824_23103,(1),null);
var map__22827_23106__$1 = cljs.core.__destructure_map(map__22827_23105);
var doc_23107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827_23106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22827_23106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23104], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23108], 0));

if(cljs.core.truth_(doc_23107)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23107], 0));
} else {
}


var G__23109 = cljs.core.next(seq__22801_23097__$1);
var G__23110 = null;
var G__23111 = (0);
var G__23112 = (0);
seq__22801_23077 = G__23109;
chunk__22802_23078 = G__23110;
count__22803_23079 = G__23111;
i__22804_23080 = G__23112;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22832 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22833 = null;
var count__22834 = (0);
var i__22835 = (0);
while(true){
if((i__22835 < count__22834)){
var role = chunk__22833.cljs$core$IIndexed$_nth$arity$2(null,i__22835);
var temp__5804__auto___23114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23114__$1)){
var spec_23115 = temp__5804__auto___23114__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23115)], 0));
} else {
}


var G__23116 = seq__22832;
var G__23117 = chunk__22833;
var G__23118 = count__22834;
var G__23119 = (i__22835 + (1));
seq__22832 = G__23116;
chunk__22833 = G__23117;
count__22834 = G__23118;
i__22835 = G__23119;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22832);
if(temp__5804__auto____$1){
var seq__22832__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22832__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22832__$1);
var G__23120 = cljs.core.chunk_rest(seq__22832__$1);
var G__23121 = c__5568__auto__;
var G__23122 = cljs.core.count(c__5568__auto__);
var G__23123 = (0);
seq__22832 = G__23120;
chunk__22833 = G__23121;
count__22834 = G__23122;
i__22835 = G__23123;
continue;
} else {
var role = cljs.core.first(seq__22832__$1);
var temp__5804__auto___23124__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23124__$2)){
var spec_23125 = temp__5804__auto___23124__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23125)], 0));
} else {
}


var G__23126 = cljs.core.next(seq__22832__$1);
var G__23127 = null;
var G__23128 = (0);
var G__23129 = (0);
seq__22832 = G__23126;
chunk__22833 = G__23127;
count__22834 = G__23128;
i__22835 = G__23129;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23131 = cljs.core.ex_cause(t);
via = G__23130;
t = G__23131;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22947 = datafied_throwable;
var map__22947__$1 = cljs.core.__destructure_map(map__22947);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22947__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22948 = cljs.core.last(via);
var map__22948__$1 = cljs.core.__destructure_map(map__22948);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22949 = data;
var map__22949__$1 = cljs.core.__destructure_map(map__22949);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22950 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22950__$1 = cljs.core.__destructure_map(map__22950);
var top_data = map__22950__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22955 = phase;
var G__22955__$1 = (((G__22955 instanceof cljs.core.Keyword))?G__22955.fqn:null);
switch (G__22955__$1) {
case "read-source":
var map__22962 = data;
var map__22962__$1 = cljs.core.__destructure_map(map__22962);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22963 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22963__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22963,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22963);
var G__22963__$2 = (cljs.core.truth_((function (){var fexpr__22965 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22965.cljs$core$IFn$_invoke$arity$1 ? fexpr__22965.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22965.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22963__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22963__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22963__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22963__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22966 = top_data;
var G__22966__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22966,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22966);
var G__22966__$2 = (cljs.core.truth_((function (){var fexpr__22967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22967.cljs$core$IFn$_invoke$arity$1 ? fexpr__22967.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22967.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22966__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22966__$1);
var G__22966__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22966__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22966__$2);
var G__22966__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22966__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22966__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22966__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22966__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22969,(3),null);
var G__22972 = top_data;
var G__22972__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22972);
var G__22972__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22972__$1);
var G__22972__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22972__$2);
var G__22972__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22972__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22972__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22972__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22972__$4;
}

break;
case "execution":
var vec__22975 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22933_SHARP_){
var or__5045__auto__ = (p1__22933_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__22982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22982.cljs$core$IFn$_invoke$arity$1 ? fexpr__22982.cljs$core$IFn$_invoke$arity$1(p1__22933_SHARP_) : fexpr__22982.call(null,p1__22933_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__22985 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22985__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22985,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22985);
var G__22985__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22985__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22985__$1);
var G__22985__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22985__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22985__$2);
var G__22985__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22985__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22985__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22985__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22985__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22955__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22995){
var map__22996 = p__22995;
var map__22996__$1 = cljs.core.__destructure_map(map__22996);
var triage_data = map__22996__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22996__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23001 = phase;
var G__23001__$1 = (((G__23001 instanceof cljs.core.Keyword))?G__23001.fqn:null);
switch (G__23001__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23002 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23003 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23004 = loc;
var G__23005 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23009_23155 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23010_23156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23011_23157 = true;
var _STAR_print_fn_STAR__temp_val__23012_23158 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23011_23157);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23012_23158);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22987_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22987_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23010_23156);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23009_23155);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23002,G__23003,G__23004,G__23005) : format.call(null,G__23002,G__23003,G__23004,G__23005));

break;
case "macroexpansion":
var G__23017 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23018 = cause_type;
var G__23019 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23020 = loc;
var G__23021 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23017,G__23018,G__23019,G__23020,G__23021) : format.call(null,G__23017,G__23018,G__23019,G__23020,G__23021));

break;
case "compile-syntax-check":
var G__23023 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23024 = cause_type;
var G__23025 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23026 = loc;
var G__23027 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23023,G__23024,G__23025,G__23026,G__23027) : format.call(null,G__23023,G__23024,G__23025,G__23026,G__23027));

break;
case "compilation":
var G__23028 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23029 = cause_type;
var G__23030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23031 = loc;
var G__23032 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23028,G__23029,G__23030,G__23031,G__23032) : format.call(null,G__23028,G__23029,G__23030,G__23031,G__23032));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23033 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23034 = symbol;
var G__23035 = loc;
var G__23036 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23041_23166 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23042_23167 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23043_23168 = true;
var _STAR_print_fn_STAR__temp_val__23044_23169 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23043_23168);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23044_23169);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22993_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22993_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23042_23167);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23041_23166);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23033,G__23034,G__23035,G__23036) : format.call(null,G__23033,G__23034,G__23035,G__23036));
} else {
var G__23046 = "Execution error%s at %s(%s).\n%s\n";
var G__23047 = cause_type;
var G__23048 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23049 = loc;
var G__23050 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23046,G__23047,G__23048,G__23049,G__23050) : format.call(null,G__23046,G__23047,G__23048,G__23049,G__23050));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23001__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
