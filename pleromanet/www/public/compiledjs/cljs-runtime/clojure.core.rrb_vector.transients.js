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
var n_32181 = ret;
var shift_32182__$1 = shift;
while(true){
var arr_32183 = n_32181.arr;
var subidx_32184 = (((cnt - (1)) >> shift_32182__$1) & (31));
if((shift_32182__$1 === (5))){
(arr_32183[subidx_32184] = tail_node);
} else {
var child_32185 = (arr_32183[subidx_32184]);
if((child_32185 == null)){
(arr_32183[subidx_32184] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_32182__$1 - (5)),tail_node));
} else {
var editable_child_32186 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_32185);
(arr_32183[subidx_32184] = editable_child_32186);

var G__32187 = editable_child_32186;
var G__32188 = (shift_32182__$1 - (5));
n_32181 = G__32187;
shift_32182__$1 = G__32188;
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
var G__32162 = (shift - (5));
var G__32163 = ccnt;
var G__32164 = root_edit;
var G__32165 = child;
var G__32166 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__32162,G__32163,G__32164,G__32165,G__32166) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__32162,G__32163,G__32164,G__32165,G__32166));
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
var msg_32189 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_32190 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_32189,data_32190);
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
var child = (function (){var G__32168 = (shift - (5));
var G__32169 = cnt;
var G__32170 = root_edit;
var G__32171 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32168,G__32169,G__32170,G__32171) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32168,G__32169,G__32170,G__32171));
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
var new_child = (function (){var G__32172 = (shift - (5));
var G__32173 = child_cnt;
var G__32174 = root_edit;
var G__32175 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__32172,G__32173,G__32174,G__32175) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__32172,G__32173,G__32174,G__32175));
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
var shift_32197__$1 = shift;
var node_32198 = ret;
while(true){
if((shift_32197__$1 === (0))){
var arr_32199 = node_32198.arr;
(arr_32199[(i & (31))] = val);
} else {
var arr_32200 = node_32198.arr;
var subidx_32201 = ((i >> shift_32197__$1) & (31));
var child_32202 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_32200[subidx_32201]));
(arr_32200[subidx_32201] = child_32202);

var G__32203 = (shift_32197__$1 - (5));
var G__32204 = child_32202;
shift_32197__$1 = G__32203;
node_32198 = G__32204;
continue;
}
break;
}
} else {
var arr_32205 = ret.arr;
var rngs_32206 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_32207 = ((i >> shift) & (31));
var subidx_32208__$1 = (function (){var subidx_32208__$1 = subidx_32207;
while(true){
if((i < ((rngs_32206[subidx_32208__$1]) | (0)))){
return subidx_32208__$1;
} else {
var G__32210 = (subidx_32208__$1 + (1));
subidx_32208__$1 = G__32210;
continue;
}
break;
}
})();
var i_32209__$1 = (((subidx_32208__$1 === (0)))?i:(i - (rngs_32206[(subidx_32208__$1 - (1))])));
(arr_32205[subidx_32208__$1] = (function (){var G__32176 = (shift - (5));
var G__32177 = root_edit;
var G__32178 = (arr_32205[subidx_32208__$1]);
var G__32179 = i_32209__$1;
var G__32180 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__32176,G__32177,G__32178,G__32179,G__32180) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__32176,G__32177,G__32178,G__32179,G__32180));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
