// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.resp = reagent.core.atom.call(null,null);
hello_world.core.fetch_remote_data = (function hello_world$core$fetch_remote_data(){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_19160){
var state_val_19161 = (state_19160[(1)]);
if((state_val_19161 === (1))){
var inst_19148 = cljs_http.client.get.call(null,"http://localhost:9500/api/random");
var state_19160__$1 = state_19160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19160__$1,(2),inst_19148);
} else {
if((state_val_19161 === (2))){
var inst_19150 = (state_19160[(2)]);
var inst_19151 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)];
var inst_19152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19153 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"lucky-number","lucky-number",-357574696)];
var inst_19154 = (new cljs.core.PersistentVector(null,2,(5),inst_19152,inst_19153,null));
var inst_19155 = cljs.core.get_in.call(null,inst_19150,inst_19154);
var inst_19156 = [new cljs.core.Keyword(null,"reset","reset",-800929946),inst_19155];
var inst_19157 = cljs.core.PersistentHashMap.fromArrays(inst_19151,inst_19156);
var inst_19158 = hello_world.core.dispatch_event_BANG_.call(null,inst_19157);
var state_19160__$1 = state_19160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19160__$1,inst_19158);
} else {
return null;
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var hello_world$core$fetch_remote_data_$_state_machine__13800__auto__ = null;
var hello_world$core$fetch_remote_data_$_state_machine__13800__auto____0 = (function (){
var statearr_19162 = [null,null,null,null,null,null,null];
(statearr_19162[(0)] = hello_world$core$fetch_remote_data_$_state_machine__13800__auto__);

(statearr_19162[(1)] = (1));

return statearr_19162;
});
var hello_world$core$fetch_remote_data_$_state_machine__13800__auto____1 = (function (state_19160){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_19160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e19163){var ex__13803__auto__ = e19163;
var statearr_19164_19167 = state_19160;
(statearr_19164_19167[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_19160[(4)]))){
var statearr_19165_19168 = state_19160;
(statearr_19165_19168[(1)] = cljs.core.first.call(null,(state_19160[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_19160;
state_19160 = G__19169;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data_$_state_machine__13800__auto__ = function(state_19160){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data_$_state_machine__13800__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data_$_state_machine__13800__auto____1.call(this,state_19160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data_$_state_machine__13800__auto____0;
hello_world$core$fetch_remote_data_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data_$_state_machine__13800__auto____1;
return hello_world$core$fetch_remote_data_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_19166 = f__13925__auto__.call(null);
(statearr_19166[(6)] = c__13924__auto__);

return statearr_19166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.typed_word !== 'undefined')){
} else {
hello_world.core.typed_word = reagent.core.atom.call(null,"");
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.the_word_list !== 'undefined')){
} else {
hello_world.core.the_word_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
hello_world.core.fetch_remote_data2 = (function hello_world$core$fetch_remote_data2(){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_19193){
var state_val_19194 = (state_19193[(1)]);
if((state_val_19194 === (1))){
var inst_19170 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_19171 = cljs.core.empty_QMARK_.call(null,inst_19170);
var state_19193__$1 = state_19193;
if(inst_19171){
var statearr_19195_19205 = state_19193__$1;
(statearr_19195_19205[(1)] = (2));

} else {
var statearr_19196_19206 = state_19193__$1;
(statearr_19196_19206[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19194 === (2))){
var inst_19173 = alert("no word supplied");
var state_19193__$1 = state_19193;
var statearr_19197_19207 = state_19193__$1;
(statearr_19197_19207[(2)] = inst_19173);

(statearr_19197_19207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19194 === (3))){
var inst_19175 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_19176 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19175),"/add-word"].join('');
var inst_19177 = cljs_http.client.get.call(null,inst_19176);
var state_19193__$1 = state_19193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19193__$1,(5),inst_19177);
} else {
if((state_val_19194 === (4))){
var inst_19191 = (state_19193[(2)]);
var state_19193__$1 = state_19193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19193__$1,inst_19191);
} else {
if((state_val_19194 === (5))){
var inst_19179 = (state_19193[(2)]);
var inst_19180 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_19181 = cljs.core.println.call(null,inst_19180);
var inst_19182 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"words","words",1924933001)];
var inst_19183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19184 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)];
var inst_19185 = (new cljs.core.PersistentVector(null,2,(5),inst_19183,inst_19184,null));
var inst_19186 = cljs.core.get_in.call(null,inst_19179,inst_19185);
var inst_19187 = [new cljs.core.Keyword(null,"reset-words","reset-words",1138309019),inst_19186];
var inst_19188 = cljs.core.PersistentHashMap.fromArrays(inst_19182,inst_19187);
var inst_19189 = hello_world.core.dispatch_event_BANG_.call(null,inst_19188);
var state_19193__$1 = (function (){var statearr_19198 = state_19193;
(statearr_19198[(7)] = inst_19181);

return statearr_19198;
})();
var statearr_19199_19208 = state_19193__$1;
(statearr_19199_19208[(2)] = inst_19189);

(statearr_19199_19208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__ = null;
var hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____0 = (function (){
var statearr_19200 = [null,null,null,null,null,null,null,null];
(statearr_19200[(0)] = hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__);

(statearr_19200[(1)] = (1));

return statearr_19200;
});
var hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____1 = (function (state_19193){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_19193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e19201){var ex__13803__auto__ = e19201;
var statearr_19202_19209 = state_19193;
(statearr_19202_19209[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_19193[(4)]))){
var statearr_19203_19210 = state_19193;
(statearr_19203_19210[(1)] = cljs.core.first.call(null,(state_19193[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19211 = state_19193;
state_19193 = G__19211;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__ = function(state_19193){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____1.call(this,state_19193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____0;
hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data2_$_state_machine__13800__auto____1;
return hello_world$core$fetch_remote_data2_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_19204 = f__13925__auto__.call(null);
(statearr_19204[(6)] = c__13924__auto__);

return statearr_19204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.the_counter !== 'undefined')){
} else {
hello_world.core.the_counter = reagent.core.atom.call(null,(0));
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.event_channel !== 'undefined')){
} else {
hello_world.core.event_channel = cljs.core.async.chan.call(null,(10));
}
hello_world.core.send_event_BANG_ = (function hello_world$core$send_event_BANG_(e){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (1))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19215__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_19216 === (2))){
var inst_19213 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19215__$1,inst_19213);
} else {
return null;
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__13800__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__13800__auto____0 = (function (){
var statearr_19217 = [null,null,null,null,null,null,null];
(statearr_19217[(0)] = hello_world$core$send_event_BANG__$_state_machine__13800__auto__);

(statearr_19217[(1)] = (1));

return statearr_19217;
});
var hello_world$core$send_event_BANG__$_state_machine__13800__auto____1 = (function (state_19215){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_19215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e19218){var ex__13803__auto__ = e19218;
var statearr_19219_19222 = state_19215;
(statearr_19219_19222[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_19215[(4)]))){
var statearr_19220_19223 = state_19215;
(statearr_19220_19223[(1)] = cljs.core.first.call(null,(state_19215[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19224 = state_19215;
state_19215 = G__19224;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__13800__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__13800__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__13800__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__13800__auto____0;
hello_world$core$send_event_BANG__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__13800__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_19221 = f__13925__auto__.call(null);
(statearr_19221[(6)] = c__13924__auto__);

return statearr_19221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.global_handler !== 'undefined')){
} else {
hello_world.core.global_handler = (function (){var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_19237){
var state_val_19238 = (state_19237[(1)]);
if((state_val_19238 === (1))){
var state_19237__$1 = state_19237;
var statearr_19239_19251 = state_19237__$1;
(statearr_19239_19251[(2)] = null);

(statearr_19239_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (2))){
var state_19237__$1 = state_19237;
var statearr_19240_19252 = state_19237__$1;
(statearr_19240_19252[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (3))){
var inst_19235 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19237__$1,inst_19235);
} else {
if((state_val_19238 === (4))){
var state_19237__$1 = state_19237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19237__$1,(7),hello_world.core.event_channel);
} else {
if((state_val_19238 === (5))){
var state_19237__$1 = state_19237;
var statearr_19242_19253 = state_19237__$1;
(statearr_19242_19253[(2)] = null);

(statearr_19242_19253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (6))){
var inst_19233 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19243_19254 = state_19237__$1;
(statearr_19243_19254[(2)] = inst_19233);

(statearr_19243_19254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (7))){
var inst_19228 = (state_19237[(2)]);
var inst_19229 = hello_world.core.dispatch_event_BANG_.call(null,inst_19228);
var state_19237__$1 = (function (){var statearr_19244 = state_19237;
(statearr_19244[(7)] = inst_19229);

return statearr_19244;
})();
var statearr_19245_19255 = state_19237__$1;
(statearr_19245_19255[(2)] = null);

(statearr_19245_19255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var hello_world$core$state_machine__13800__auto__ = null;
var hello_world$core$state_machine__13800__auto____0 = (function (){
var statearr_19246 = [null,null,null,null,null,null,null,null];
(statearr_19246[(0)] = hello_world$core$state_machine__13800__auto__);

(statearr_19246[(1)] = (1));

return statearr_19246;
});
var hello_world$core$state_machine__13800__auto____1 = (function (state_19237){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_19237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e19247){var ex__13803__auto__ = e19247;
var statearr_19248_19256 = state_19237;
(statearr_19248_19256[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_19237[(4)]))){
var statearr_19249_19257 = state_19237;
(statearr_19249_19257[(1)] = cljs.core.first.call(null,(state_19237[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19258 = state_19237;
state_19237 = G__19258;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
hello_world$core$state_machine__13800__auto__ = function(state_19237){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__13800__auto____0.call(this);
case 1:
return hello_world$core$state_machine__13800__auto____1.call(this,state_19237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__13800__auto____0;
hello_world$core$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__13800__auto____1;
return hello_world$core$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_19250 = f__13925__auto__.call(null);
(statearr_19250[(6)] = c__13924__auto__);

return statearr_19250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
})();
}
hello_world.core.dispatch_event_BANG_ = (function hello_world$core$dispatch_event_BANG_(e){
var pred__19259 = cljs.core._EQ_;
var expr__19260 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__19259.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),expr__19260))){
return hello_world.core.fetch_remote_data.call(null);
} else {
if(cljs.core.truth_(pred__19259.call(null,new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409),expr__19260))){
return hello_world.core.fetch_remote_data2.call(null);
} else {
if(cljs.core.truth_(pred__19259.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),expr__19260))){
return cljs.core.reset_BANG_.call(null,hello_world.core.the_counter,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(e));
} else {
if(cljs.core.truth_(pred__19259.call(null,new cljs.core.Keyword(null,"reset-words","reset-words",1138309019),expr__19260))){
cljs.core.reset_BANG_.call(null,hello_world.core.the_word_list,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,"");
} else {
if(cljs.core.truth_(pred__19259.call(null,new cljs.core.Keyword(null,"print-word","print-word",-1287602519),expr__19260))){
return cljs.core.println.call(null,cljs.core.deref.call(null,hello_world.core.typed_word));
} else {
return cljs.core.println.call(null,"Don't know how to handle event: ",e);
}
}
}
}
}
});
hello_world.core.add_letter = (function hello_world$core$add_letter(letter){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hello_world.core.typed_word)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''));
});
hello_world.core.rem_letter = (function hello_world$core$rem_letter(){
var popped_word = cljs.core.deref.call(null,hello_world.core.typed_word);
cljs.core.print.call(null,(new java.lang.String(cljs.core.deref.call(null,hello_world.core.typed_word))).substring((0),(cljs.core.count.call(null,cljs.core.str) - (1))));

cljs.core.print.call(null,popped_word);

return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,popped_word);
});
hello_world.core.clear_input = (function hello_world$core$clear_input(){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,"");
});
hello_world.core.letter_list = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","D","G","L","N","R","U"], null);
hello_world.core.simple_button = (function hello_world$core$simple_button(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Spelling Bee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello_world.core.typed_word),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19262_SHARP_){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,p1__19262_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19263_SHARP_){
return hello_world.core.add_letter.call(null,p1__19263_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19264_SHARP_){
return hello_world.core.add_letter.call(null,p1__19264_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19265_SHARP_){
return hello_world.core.add_letter.call(null,p1__19265_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,hello_world.core.letter_list),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19266_SHARP_){
return hello_world.core.add_letter.call(null,p1__19266_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19267_SHARP_){
return hello_world.core.add_letter.call(null,p1__19267_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19268_SHARP_){
return hello_world.core.add_letter.call(null,p1__19268_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19269_SHARP_){
return hello_world.core.add_letter.call(null,p1__19269_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"clear all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.clear_input.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.dispatch_event_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,hello_world.core.the_word_list))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var iter__4523__auto__ = (function hello_world$core$simple_button_$_iter__19270(s__19271){
return (new cljs.core.LazySeq(null,(function (){
var s__19271__$1 = s__19271;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19271__$1);
if(temp__5457__auto__){
var s__19271__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19271__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19271__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19273 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19272 = (0);
while(true){
if((i__19272 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__19272);
cljs.core.chunk_append.call(null,b__19273,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__19274 = (i__19272 + (1));
i__19272 = G__19274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19273),hello_world$core$simple_button_$_iter__19270.call(null,cljs.core.chunk_rest.call(null,s__19271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19273),null);
}
} else {
var item = cljs.core.first.call(null,s__19271__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$simple_button_$_iter__19270.call(null,cljs.core.rest.call(null,s__19271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,hello_world.core.the_word_list)));
})()], null)], null)], null)], null)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.simple_button], null),el);
});
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5457__auto__ = hello_world.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return hello_world.core.mount.call(null,el);
} else {
return null;
}
});
hello_world.core.mount_app_element.call(null);
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
