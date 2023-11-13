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
var n_32121 = ret;
var shift_32122__$1 = shift;
while(true){
var arr_32123 = n_32121.arr;
var subidx_32124 = (((cnt - (1)) >> shift_32122__$1) & (31));
if((shift_32122__$1 === (5))){
(arr_32123[subidx_32124] = tail_node);
} else {
var child_32125 = (arr_32123[subidx_32124]);
if((child_32125 == null)){
(arr_32123[subidx_32124] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_32122__$1 - (5)),tail_node));
} else {
var editable_child_32126 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_32125);
(arr_32123[subidx_32124] = editable_child_32126);

var G__32127 = editable_child_32126;
var G__32128 = (shift_32122__$1 - (5));
n_32121 = G__32127;
shift_32122__$1 = G__32128;
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
var G__32103 = (shift - (5));
var G__32104 = ccnt;
var G__32105 = root_edit;
var G__32106 = child;
var G__32107 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__32103,G__32104,G__32105,G__32106,G__32107) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__32103,G__32104,G__32105,G__32106,G__32107));
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
var msg_32129 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_32130 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_32129,data_32130);
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
var child = (function (){var G__32108 = (shift - (5));
var G__32109 = cnt;
var G__32110 = root_edit;
var G__32111 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32108,G__32109,G__32110,G__32111) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32108,G__32109,G__32110,G__32111));
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
var new_child = (function (){var G__32112 = (shift - (5));
var G__32113 = child_cnt;
var G__32114 = root_edit;
var G__32115 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32112,G__32113,G__32114,G__32115) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32112,G__32113,G__32114,G__32115));
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
var shift_32131__$1 = shift;
var node_32132 = ret;
while(true){
if((shift_32131__$1 === (0))){
var arr_32133 = node_32132.arr;
(arr_32133[(i & (31))] = val);
} else {
var arr_32134 = node_32132.arr;
var subidx_32135 = ((i >> shift_32131__$1) & (31));
var child_32136 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_32134[subidx_32135]));
(arr_32134[subidx_32135] = child_32136);

var G__32137 = (shift_32131__$1 - (5));
var G__32138 = child_32136;
shift_32131__$1 = G__32137;
node_32132 = G__32138;
continue;
}
break;
}
} else {
var arr_32139 = ret.arr;
var rngs_32140 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_32141 = ((i >> shift) & (31));
var subidx_32142__$1 = (function (){var subidx_32142__$1 = subidx_32141;
while(true){
if((i < ((rngs_32140[subidx_32142__$1]) | (0)))){
return subidx_32142__$1;
} else {
var G__32144 = (subidx_32142__$1 + (1));
subidx_32142__$1 = G__32144;
continue;
}
break;
}
})();
var i_32143__$1 = (((subidx_32142__$1 === (0)))?i:(i - (rngs_32140[(subidx_32142__$1 - (1))])));
(arr_32139[subidx_32142__$1] = (function (){var G__32116 = (shift - (5));
var G__32117 = root_edit;
var G__32118 = (arr_32139[subidx_32142__$1]);
var G__32119 = i_32143__$1;
var G__32120 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__32116,G__32117,G__32118,G__32119,G__32120) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__32116,G__32117,G__32118,G__32119,G__32120));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
