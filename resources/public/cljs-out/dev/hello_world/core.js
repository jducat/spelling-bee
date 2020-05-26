// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('clojure.edn');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.letter_list !== 'undefined')){
} else {
hello_world.core.letter_list = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","D","G","L","N","R","U"], null);
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.event_channel !== 'undefined')){
} else {
hello_world.core.event_channel = cljs.core.async.chan.call(null,(10));
}
hello_world.core.send_event_BANG_ = (function hello_world$core$send_event_BANG_(e){
var c__12331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12331__auto__){
return (function (){
var f__12332__auto__ = (function (){var switch__12308__auto__ = ((function (c__12331__auto__){
return (function (state_18808){
var state_val_18809 = (state_18808[(1)]);
if((state_val_18809 === (1))){
var state_18808__$1 = state_18808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18808__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_18809 === (2))){
var inst_18806 = (state_18808[(2)]);
var state_18808__$1 = state_18808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18808__$1,inst_18806);
} else {
return null;
}
}
});})(c__12331__auto__))
;
return ((function (switch__12308__auto__,c__12331__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__12309__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__12309__auto____0 = (function (){
var statearr_18810 = [null,null,null,null,null,null,null];
(statearr_18810[(0)] = hello_world$core$send_event_BANG__$_state_machine__12309__auto__);

(statearr_18810[(1)] = (1));

return statearr_18810;
});
var hello_world$core$send_event_BANG__$_state_machine__12309__auto____1 = (function (state_18808){
while(true){
var ret_value__12310__auto__ = (function (){try{while(true){
var result__12311__auto__ = switch__12308__auto__.call(null,state_18808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12311__auto__;
}
break;
}
}catch (e18811){var ex__12312__auto__ = e18811;
var statearr_18812_18815 = state_18808;
(statearr_18812_18815[(2)] = ex__12312__auto__);


if(cljs.core.seq.call(null,(state_18808[(4)]))){
var statearr_18813_18816 = state_18808;
(statearr_18813_18816[(1)] = cljs.core.first.call(null,(state_18808[(4)])));

} else {
throw ex__12312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18817 = state_18808;
state_18808 = G__18817;
continue;
} else {
return ret_value__12310__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__12309__auto__ = function(state_18808){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__12309__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__12309__auto____1.call(this,state_18808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__12309__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__12309__auto____0;
hello_world$core$send_event_BANG__$_state_machine__12309__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__12309__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__12309__auto__;
})()
;})(switch__12308__auto__,c__12331__auto__))
})();
var state__12333__auto__ = (function (){var statearr_18814 = f__12332__auto__.call(null);
(statearr_18814[(6)] = c__12331__auto__);

return statearr_18814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12333__auto__);
});})(c__12331__auto__))
);

return c__12331__auto__;
});
hello_world.core.word_score = (function hello_world$core$word_score(word){
var count_word = cljs.core.count.call(null,word);
if(cljs.core._EQ_.call(null,count_word,(4))){
return (4);
} else {
if(cljs.core._EQ_.call(null,(7),count_word)){
return (14);
} else {
return count_word;
}
}
});
hello_world.core.calc_points = (function hello_world$core$calc_points(word_list){
return cljs.core.map.call(null,hello_world.core.word_score,word_list);
});
hello_world.core.shuffle_list = (function (){var mid_letter = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,hello_world.core.letter_list)], null);
var bod = cljs.core.shuffle.call(null,cljs.core.rest.call(null,hello_world.core.letter_list));
return cljs.core.into.call(null,mid_letter,bod);
})();
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602),hello_world.core.letter_list,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"",new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"point-score","point-score",-397384391),(0)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),(function (db,p__18818){
var vec__18819 = p__18818;
var _ = cljs.core.nth.call(null,vec__18819,(0),null);
var new_word = cljs.core.nth.call(null,vec__18819,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-letter","add-letter",628821393),(function (db,p__18822){
var vec__18823 = p__18822;
var _ = cljs.core.nth.call(null,vec__18823,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18823,(1),null);
var curr_word = new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_letter)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),(function (db,p__18826){
var vec__18827 = p__18826;
var _ = cljs.core.nth.call(null,vec__18827,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18827,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_letter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),(function (db,p__18830){
var vec__18831 = p__18830;
var _ = cljs.core.nth.call(null,vec__18831,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18831,(1),null);
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,new_letter) - (1)),new_letter));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),popped_word);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__18834,p__18835){
var map__18836 = p__18834;
var map__18836__$1 = (((((!((map__18836 == null))))?(((((map__18836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18836):map__18836);
var db = cljs.core.get.call(null,map__18836__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18837 = p__18835;
var _ = cljs.core.nth.call(null,vec__18837,(0),null);
var word = cljs.core.nth.call(null,vec__18837,(1),null);
var c__12331__auto___18877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word){
return (function (){
var f__12332__auto__ = (function (){var switch__12308__auto__ = ((function (c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word){
return (function (state_18864){
var state_val_18865 = (state_18864[(1)]);
if((state_val_18865 === (1))){
var inst_18841 = cljs.core.empty_QMARK_.call(null,word);
var state_18864__$1 = state_18864;
if(inst_18841){
var statearr_18866_18878 = state_18864__$1;
(statearr_18866_18878[(1)] = (2));

} else {
var statearr_18867_18879 = state_18864__$1;
(statearr_18867_18879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18865 === (2))){
var inst_18843 = ["word supplied:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
var inst_18844 = alert(inst_18843);
var state_18864__$1 = state_18864;
var statearr_18868_18880 = state_18864__$1;
(statearr_18868_18880[(2)] = inst_18844);

(statearr_18868_18880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18865 === (3))){
var inst_18846 = (state_18864[(7)]);
var inst_18846__$1 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/add-word"].join('');
var inst_18847 = cljs_http.client.get.call(null,inst_18846__$1);
var state_18864__$1 = (function (){var statearr_18869 = state_18864;
(statearr_18869[(7)] = inst_18846__$1);

return statearr_18869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18864__$1,(5),inst_18847);
} else {
if((state_val_18865 === (4))){
var inst_18862 = (state_18864[(2)]);
var state_18864__$1 = state_18864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18864__$1,inst_18862);
} else {
if((state_val_18865 === (5))){
var inst_18846 = (state_18864[(7)]);
var inst_18849 = (state_18864[(2)]);
var inst_18850 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18846)," ----  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18849)].join('');
var inst_18851 = cljs.core.print.call(null,inst_18850);
var inst_18852 = cljs.core.print.call(null,word);
var inst_18853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18855 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"correct-word","correct-word",-1698341709)];
var inst_18856 = (new cljs.core.PersistentVector(null,2,(5),inst_18854,inst_18855,null));
var inst_18857 = cljs.core.get_in.call(null,inst_18849,inst_18856);
var inst_18858 = [new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409),inst_18857];
var inst_18859 = (new cljs.core.PersistentVector(null,2,(5),inst_18853,inst_18858,null));
var inst_18860 = re_frame.core.dispatch.call(null,inst_18859);
var state_18864__$1 = (function (){var statearr_18870 = state_18864;
(statearr_18870[(8)] = inst_18851);

(statearr_18870[(9)] = inst_18852);

return statearr_18870;
})();
var statearr_18871_18881 = state_18864__$1;
(statearr_18871_18881[(2)] = inst_18860);

(statearr_18871_18881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word))
;
return ((function (switch__12308__auto__,c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word){
return (function() {
var hello_world$core$state_machine__12309__auto__ = null;
var hello_world$core$state_machine__12309__auto____0 = (function (){
var statearr_18872 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18872[(0)] = hello_world$core$state_machine__12309__auto__);

(statearr_18872[(1)] = (1));

return statearr_18872;
});
var hello_world$core$state_machine__12309__auto____1 = (function (state_18864){
while(true){
var ret_value__12310__auto__ = (function (){try{while(true){
var result__12311__auto__ = switch__12308__auto__.call(null,state_18864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12311__auto__;
}
break;
}
}catch (e18873){var ex__12312__auto__ = e18873;
var statearr_18874_18882 = state_18864;
(statearr_18874_18882[(2)] = ex__12312__auto__);


if(cljs.core.seq.call(null,(state_18864[(4)]))){
var statearr_18875_18883 = state_18864;
(statearr_18875_18883[(1)] = cljs.core.first.call(null,(state_18864[(4)])));

} else {
throw ex__12312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18884 = state_18864;
state_18864 = G__18884;
continue;
} else {
return ret_value__12310__auto__;
}
break;
}
});
hello_world$core$state_machine__12309__auto__ = function(state_18864){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__12309__auto____0.call(this);
case 1:
return hello_world$core$state_machine__12309__auto____1.call(this,state_18864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__12309__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__12309__auto____0;
hello_world$core$state_machine__12309__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__12309__auto____1;
return hello_world$core$state_machine__12309__auto__;
})()
;})(switch__12308__auto__,c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word))
})();
var state__12333__auto__ = (function (){var statearr_18876 = f__12332__auto__.call(null);
(statearr_18876[(6)] = c__12331__auto___18877);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12333__auto__);
});})(c__12331__auto___18877,map__18836,map__18836__$1,db,vec__18837,_,word))
);


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409),(function (db,p__18885){
var vec__18886 = p__18885;
var _ = cljs.core.nth.call(null,vec__18886,(0),null);
var word = cljs.core.nth.call(null,vec__18886,(1),null);
cljs.core.print.call(null,"in :fetch-words");

var curr_word_list = new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
var new_list = cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.conj.call(null,curr_word_list,word));
var score = cljs.core.reduce.call(null,cljs.core._PLUS_,hello_world.core.calc_points.call(null,new_list));
cljs.core.print.call(null,"correct word in :fetch ",word);

cljs.core.print.call(null,"cur-word:",curr_word_list);

cljs.core.print.call(null,"all entered words",new_list);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),new_list),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),""),new cljs.core.Keyword(null,"point-score","point-score",-397384391),score);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"shuffle-buttons","shuffle-buttons",1463659004),(function (db,p__18889){
var vec__18890 = p__18889;
var _ = cljs.core.nth.call(null,vec__18890,(0),null);
var letter = cljs.core.nth.call(null,vec__18890,(1),null);
var mid_letter = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,hello_world.core.letter_list)], null);
var bod = cljs.core.shuffle.call(null,cljs.core.rest.call(null,hello_world.core.letter_list));
var output = cljs.core.into.call(null,mid_letter,bod);
cljs.core.print.call(null,"shuffle output: ",output,", letters",hello_world.core.letter_list);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),output);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),(function (db,_){
return new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),(function (db,_){
return new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"point-score","point-score",-397384391),(function (db,_){
return new cljs.core.Keyword(null,"point-score","point-score",-397384391).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),(function (db,_){
return new cljs.core.Keyword(null,"button-letters","button-letters",457120602).cljs$core$IFn$_invoke$arity$1(db);
}));
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.init !== 'undefined')){
} else {
hello_world.core.init = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),"blank"], null));
}
hello_world.core.text_entry = (function hello_world$core$text_entry(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),"Spelling Bee Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18893_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),clojure.string.upper_case.call(null,p1__18893_SHARP_.target.value)], null));
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__18894_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__18894_SHARP_.charCode)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
} else {
return null;
}
})], null)], null)], null)], null);
});
hello_world.core.button_entry = (function hello_world$core$button_entry(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18895_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18895_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18896_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18896_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18897_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18897_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,hello_world.core.letter_list),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18898_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18898_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18899_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18899_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18900_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18900_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18901_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18901_SHARP_.target.value)], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.action_buttons = (function hello_world$core$action_buttons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),""], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"Shuffle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle-buttons","shuffle-buttons",1463659004),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null)], null)], null);
});
hello_world.core.accrued_list = (function hello_world$core$accrued_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null))))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#the-text","h2#the-text",398723717),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))))," points!"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#list-text","li#list-text",1156845976),(function (){var iter__4523__auto__ = (function hello_world$core$accrued_list_$_iter__18902(s__18903){
return (new cljs.core.LazySeq(null,(function (){
var s__18903__$1 = s__18903;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18903__$1);
if(temp__5457__auto__){
var s__18903__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18903__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18903__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18905 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18904 = (0);
while(true){
if((i__18904 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__18904);
cljs.core.chunk_append.call(null,b__18905,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__18906 = (i__18904 + (1));
i__18904 = G__18906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18905),hello_world$core$accrued_list_$_iter__18902.call(null,cljs.core.chunk_rest.call(null,s__18903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18905),null);
}
} else {
var item = cljs.core.first.call(null,s__18903__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$accrued_list_$_iter__18902.call(null,cljs.core.rest.call(null,s__18903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null)))));
})()], null)], null)], null)], null);
});
hello_world.core.slider = (function hello_world$core$slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),"slider"], null)], null)], null)], null);
});
hello_world.core.ui = (function hello_world$core$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnl","columnl",-593925269)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.text_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.button_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.action_buttons], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnr","columnr",-14597535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.accrued_list], null)], null)], null);
});
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return document.getElementById("app");
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.ui], null),el);
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
re_frame.core.clear_subscription_cache_BANG_.call(null);

cljs.core.println.call(null,"reloading...");

return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
