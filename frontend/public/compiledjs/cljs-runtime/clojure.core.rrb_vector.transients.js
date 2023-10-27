goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_32793 = ret;
var shift_32794__$1 = shift;
while(true){
var arr_32795 = n_32793.arr;
var subidx_32796 = (((cnt - (1)) >> shift_32794__$1) & (31));
if((shift_32794__$1 === (5))){
(arr_32795[subidx_32796] = tail_node);
} else {
var child_32797 = (arr_32795[subidx_32796]);
if((child_32797 == null)){
(arr_32795[subidx_32796] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_32794__$1 - (5)),tail_node));
} else {
var editable_child_32798 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_32797);
(arr_32795[subidx_32796] = editable_child_32798);

var G__32799 = editable_child_32798;
var G__32800 = (shift_32794__$1 - (5));
n_32793 = G__32799;
shift_32794__$1 = G__32800;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__32775 = (shift - (5));
var G__32776 = ccnt;
var G__32777 = root_edit;
var G__32778 = child;
var G__32779 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__32775,G__32776,G__32777,G__32778,G__32779) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__32775,G__32776,G__32777,G__32778,G__32779));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_32801 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_32802 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_32801,data_32802);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__32780 = (shift - (5));
var G__32781 = cnt;
var G__32782 = root_edit;
var G__32783 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32780,G__32781,G__32782,G__32783) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32780,G__32781,G__32782,G__32783));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__32784 = (shift - (5));
var G__32785 = child_cnt;
var G__32786 = root_edit;
var G__32787 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32784,G__32785,G__32786,G__32787) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32784,G__32785,G__32786,G__32787));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_32803__$1 = shift;
var node_32804 = ret;
while(true){
if((shift_32803__$1 === (0))){
var arr_32805 = node_32804.arr;
(arr_32805[(i & (31))] = val);
} else {
var arr_32806 = node_32804.arr;
var subidx_32807 = ((i >> shift_32803__$1) & (31));
var child_32808 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_32806[subidx_32807]));
(arr_32806[subidx_32807] = child_32808);

var G__32809 = (shift_32803__$1 - (5));
var G__32810 = child_32808;
shift_32803__$1 = G__32809;
node_32804 = G__32810;
continue;
}
break;
}
} else {
var arr_32811 = ret.arr;
var rngs_32812 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_32813 = ((i >> shift) & (31));
var subidx_32814__$1 = (function (){var subidx_32814__$1 = subidx_32813;
while(true){
if((i < ((rngs_32812[subidx_32814__$1]) | (0)))){
return subidx_32814__$1;
} else {
var G__32816 = (subidx_32814__$1 + (1));
subidx_32814__$1 = G__32816;
continue;
}
break;
}
})();
var i_32815__$1 = (((subidx_32814__$1 === (0)))?i:(i - (rngs_32812[(subidx_32814__$1 - (1))])));
(arr_32811[subidx_32814__$1] = (function (){var G__32788 = (shift - (5));
var G__32789 = root_edit;
var G__32790 = (arr_32811[subidx_32814__$1]);
var G__32791 = i_32815__$1;
var G__32792 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__32788,G__32789,G__32790,G__32791,G__32792) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__32788,G__32789,G__32790,G__32791,G__32792));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
