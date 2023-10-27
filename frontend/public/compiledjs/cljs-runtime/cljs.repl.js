goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42391){
var map__42392 = p__42391;
var map__42392__$1 = (((((!((map__42392 == null))))?(((((map__42392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42392):map__42392);
var m = map__42392__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__42395_42607 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42396_42608 = null;
var count__42397_42609 = (0);
var i__42398_42610 = (0);
while(true){
if((i__42398_42610 < count__42397_42609)){
var f_42611 = chunk__42396_42608.cljs$core$IIndexed$_nth$arity$2(null,i__42398_42610);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42611], 0));


var G__42612 = seq__42395_42607;
var G__42613 = chunk__42396_42608;
var G__42614 = count__42397_42609;
var G__42615 = (i__42398_42610 + (1));
seq__42395_42607 = G__42612;
chunk__42396_42608 = G__42613;
count__42397_42609 = G__42614;
i__42398_42610 = G__42615;
continue;
} else {
var temp__5735__auto___42616 = cljs.core.seq(seq__42395_42607);
if(temp__5735__auto___42616){
var seq__42395_42617__$1 = temp__5735__auto___42616;
if(cljs.core.chunked_seq_QMARK_(seq__42395_42617__$1)){
var c__4556__auto___42618 = cljs.core.chunk_first(seq__42395_42617__$1);
var G__42619 = cljs.core.chunk_rest(seq__42395_42617__$1);
var G__42620 = c__4556__auto___42618;
var G__42621 = cljs.core.count(c__4556__auto___42618);
var G__42622 = (0);
seq__42395_42607 = G__42619;
chunk__42396_42608 = G__42620;
count__42397_42609 = G__42621;
i__42398_42610 = G__42622;
continue;
} else {
var f_42623 = cljs.core.first(seq__42395_42617__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42623], 0));


var G__42625 = cljs.core.next(seq__42395_42617__$1);
var G__42626 = null;
var G__42627 = (0);
var G__42628 = (0);
seq__42395_42607 = G__42625;
chunk__42396_42608 = G__42626;
count__42397_42609 = G__42627;
i__42398_42610 = G__42628;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42629 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42629], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42629)))?cljs.core.second(arglists_42629):arglists_42629)], 0));
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
var seq__42401_42634 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42402_42635 = null;
var count__42403_42636 = (0);
var i__42404_42637 = (0);
while(true){
if((i__42404_42637 < count__42403_42636)){
var vec__42419_42638 = chunk__42402_42635.cljs$core$IIndexed$_nth$arity$2(null,i__42404_42637);
var name_42639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42419_42638,(0),null);
var map__42422_42640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42419_42638,(1),null);
var map__42422_42641__$1 = (((((!((map__42422_42640 == null))))?(((((map__42422_42640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42422_42640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42422_42640):map__42422_42640);
var doc_42642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422_42641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42422_42641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42639], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42643], 0));

if(cljs.core.truth_(doc_42642)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42642], 0));
} else {
}


var G__42645 = seq__42401_42634;
var G__42646 = chunk__42402_42635;
var G__42647 = count__42403_42636;
var G__42648 = (i__42404_42637 + (1));
seq__42401_42634 = G__42645;
chunk__42402_42635 = G__42646;
count__42403_42636 = G__42647;
i__42404_42637 = G__42648;
continue;
} else {
var temp__5735__auto___42649 = cljs.core.seq(seq__42401_42634);
if(temp__5735__auto___42649){
var seq__42401_42650__$1 = temp__5735__auto___42649;
if(cljs.core.chunked_seq_QMARK_(seq__42401_42650__$1)){
var c__4556__auto___42651 = cljs.core.chunk_first(seq__42401_42650__$1);
var G__42652 = cljs.core.chunk_rest(seq__42401_42650__$1);
var G__42653 = c__4556__auto___42651;
var G__42654 = cljs.core.count(c__4556__auto___42651);
var G__42655 = (0);
seq__42401_42634 = G__42652;
chunk__42402_42635 = G__42653;
count__42403_42636 = G__42654;
i__42404_42637 = G__42655;
continue;
} else {
var vec__42424_42657 = cljs.core.first(seq__42401_42650__$1);
var name_42658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42424_42657,(0),null);
var map__42427_42659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42424_42657,(1),null);
var map__42427_42660__$1 = (((((!((map__42427_42659 == null))))?(((((map__42427_42659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42427_42659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42427_42659):map__42427_42659);
var doc_42661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427_42660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427_42660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42658], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42662], 0));

if(cljs.core.truth_(doc_42661)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42661], 0));
} else {
}


var G__42667 = cljs.core.next(seq__42401_42650__$1);
var G__42668 = null;
var G__42669 = (0);
var G__42670 = (0);
seq__42401_42634 = G__42667;
chunk__42402_42635 = G__42668;
count__42403_42636 = G__42669;
i__42404_42637 = G__42670;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42431 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42432 = null;
var count__42433 = (0);
var i__42434 = (0);
while(true){
if((i__42434 < count__42433)){
var role = chunk__42432.cljs$core$IIndexed$_nth$arity$2(null,i__42434);
var temp__5735__auto___42671__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42671__$1)){
var spec_42672 = temp__5735__auto___42671__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42672)], 0));
} else {
}


var G__42673 = seq__42431;
var G__42674 = chunk__42432;
var G__42675 = count__42433;
var G__42676 = (i__42434 + (1));
seq__42431 = G__42673;
chunk__42432 = G__42674;
count__42433 = G__42675;
i__42434 = G__42676;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42431);
if(temp__5735__auto____$1){
var seq__42431__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42431__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42431__$1);
var G__42677 = cljs.core.chunk_rest(seq__42431__$1);
var G__42678 = c__4556__auto__;
var G__42679 = cljs.core.count(c__4556__auto__);
var G__42680 = (0);
seq__42431 = G__42677;
chunk__42432 = G__42678;
count__42433 = G__42679;
i__42434 = G__42680;
continue;
} else {
var role = cljs.core.first(seq__42431__$1);
var temp__5735__auto___42681__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42681__$2)){
var spec_42682 = temp__5735__auto___42681__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42682)], 0));
} else {
}


var G__42683 = cljs.core.next(seq__42431__$1);
var G__42684 = null;
var G__42685 = (0);
var G__42686 = (0);
seq__42431 = G__42683;
chunk__42432 = G__42684;
count__42433 = G__42685;
i__42434 = G__42686;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__42691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42692 = cljs.core.ex_cause(t);
via = G__42691;
t = G__42692;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__42440 = datafied_throwable;
var map__42440__$1 = (((((!((map__42440 == null))))?(((((map__42440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42440):map__42440);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42440__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42440__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42440__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42441 = cljs.core.last(via);
var map__42441__$1 = (((((!((map__42441 == null))))?(((((map__42441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42441):map__42441);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42441__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42441__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42442 = data;
var map__42442__$1 = (((((!((map__42442 == null))))?(((((map__42442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42442):map__42442);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42443 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42443__$1 = (((((!((map__42443 == null))))?(((((map__42443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42443):map__42443);
var top_data = map__42443__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42465 = phase;
var G__42465__$1 = (((G__42465 instanceof cljs.core.Keyword))?G__42465.fqn:null);
switch (G__42465__$1) {
case "read-source":
var map__42466 = data;
var map__42466__$1 = (((((!((map__42466 == null))))?(((((map__42466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42466):map__42466);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42466__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42466__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42475 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42475__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42475,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42475);
var G__42475__$2 = (cljs.core.truth_((function (){var fexpr__42476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42476.cljs$core$IFn$_invoke$arity$1 ? fexpr__42476.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42476.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42475__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42475__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42475__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42477 = top_data;
var G__42477__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42477,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42477);
var G__42477__$2 = (cljs.core.truth_((function (){var fexpr__42482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42482.cljs$core$IFn$_invoke$arity$1 ? fexpr__42482.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42482.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42477__$1);
var G__42477__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42477__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42477__$2);
var G__42477__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42477__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42477__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42493 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(3),null);
var G__42496 = top_data;
var G__42496__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42496,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42496);
var G__42496__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42496__$1);
var G__42496__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42496__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42496__$2);
var G__42496__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42496__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42496__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42496__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42496__$4;
}

break;
case "execution":
var vec__42512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42439_SHARP_){
var or__4126__auto__ = (p1__42439_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__42525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42525.cljs$core$IFn$_invoke$arity$1 ? fexpr__42525.cljs$core$IFn$_invoke$arity$1(p1__42439_SHARP_) : fexpr__42525.call(null,p1__42439_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42526 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42526__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42526,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42526);
var G__42526__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42526__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42526__$1);
var G__42526__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42526__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42526__$2);
var G__42526__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42526__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42526__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42526__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42526__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42465__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42550){
var map__42551 = p__42550;
var map__42551__$1 = (((((!((map__42551 == null))))?(((((map__42551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42551):map__42551);
var triage_data = map__42551__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42566 = phase;
var G__42566__$1 = (((G__42566 instanceof cljs.core.Keyword))?G__42566.fqn:null);
switch (G__42566__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42567 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42569 = loc;
var G__42570 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42571_42715 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42572_42716 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42573_42717 = true;
var _STAR_print_fn_STAR__temp_val__42574_42718 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42573_42717);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42574_42718);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42545_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42572_42716);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42571_42715);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42567,G__42568,G__42569,G__42570) : format.call(null,G__42567,G__42568,G__42569,G__42570));

break;
case "macroexpansion":
var G__42576 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42577 = cause_type;
var G__42578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42579 = loc;
var G__42580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42576,G__42577,G__42578,G__42579,G__42580) : format.call(null,G__42576,G__42577,G__42578,G__42579,G__42580));

break;
case "compile-syntax-check":
var G__42581 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42582 = cause_type;
var G__42583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42584 = loc;
var G__42585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42581,G__42582,G__42583,G__42584,G__42585) : format.call(null,G__42581,G__42582,G__42583,G__42584,G__42585));

break;
case "compilation":
var G__42586 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42587 = cause_type;
var G__42588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42589 = loc;
var G__42590 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42586,G__42587,G__42588,G__42589,G__42590) : format.call(null,G__42586,G__42587,G__42588,G__42589,G__42590));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42591 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42592 = symbol;
var G__42593 = loc;
var G__42594 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42595_42723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42596_42724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42597_42725 = true;
var _STAR_print_fn_STAR__temp_val__42598_42726 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42597_42725);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42598_42726);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42549_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42549_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42596_42724);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42595_42723);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42591,G__42592,G__42593,G__42594) : format.call(null,G__42591,G__42592,G__42593,G__42594));
} else {
var G__42600 = "Execution error%s at %s(%s).\n%s\n";
var G__42601 = cause_type;
var G__42602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42603 = loc;
var G__42604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42600,G__42601,G__42602,G__42603,G__42604) : format.call(null,G__42600,G__42601,G__42602,G__42603,G__42604));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42566__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
