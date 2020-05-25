// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.edn');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.letter_list = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","D","G","L","N","R","U"], null);
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.event_channel !== 'undefined')){
} else {
hello_world.core.event_channel = cljs.core.async.chan.call(null,(10));
}
hello_world.core.send_event_BANG_ = (function hello_world$core$send_event_BANG_(e){
var c__17515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17515__auto__){
return (function (){
var f__17516__auto__ = (function (){var switch__17492__auto__ = ((function (c__17515__auto__){
return (function (state_20866){
var state_val_20867 = (state_20866[(1)]);
if((state_val_20867 === (1))){
var state_20866__$1 = state_20866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20866__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_20867 === (2))){
var inst_20864 = (state_20866[(2)]);
var state_20866__$1 = state_20866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20866__$1,inst_20864);
} else {
return null;
}
}
});})(c__17515__auto__))
;
return ((function (switch__17492__auto__,c__17515__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__17493__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__17493__auto____0 = (function (){
var statearr_20868 = [null,null,null,null,null,null,null];
(statearr_20868[(0)] = hello_world$core$send_event_BANG__$_state_machine__17493__auto__);

(statearr_20868[(1)] = (1));

return statearr_20868;
});
var hello_world$core$send_event_BANG__$_state_machine__17493__auto____1 = (function (state_20866){
while(true){
var ret_value__17494__auto__ = (function (){try{while(true){
var result__17495__auto__ = switch__17492__auto__.call(null,state_20866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17495__auto__;
}
break;
}
}catch (e20869){var ex__17496__auto__ = e20869;
var statearr_20870_20873 = state_20866;
(statearr_20870_20873[(2)] = ex__17496__auto__);


if(cljs.core.seq.call(null,(state_20866[(4)]))){
var statearr_20871_20874 = state_20866;
(statearr_20871_20874[(1)] = cljs.core.first.call(null,(state_20866[(4)])));

} else {
throw ex__17496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20875 = state_20866;
state_20866 = G__20875;
continue;
} else {
return ret_value__17494__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__17493__auto__ = function(state_20866){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__17493__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__17493__auto____1.call(this,state_20866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__17493__auto____0;
hello_world$core$send_event_BANG__$_state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__17493__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__17493__auto__;
})()
;})(switch__17492__auto__,c__17515__auto__))
})();
var state__17517__auto__ = (function (){var statearr_20872 = f__17516__auto__.call(null);
(statearr_20872[(6)] = c__17515__auto__);

return statearr_20872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17517__auto__);
});})(c__17515__auto__))
);

return c__17515__auto__;
});
hello_world.core.fetch_remote_data = (function hello_world$core$fetch_remote_data(){
cljs.core.print.call(null,"in the fetch remote data");

var c__17515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17515__auto__){
return (function (){
var f__17516__auto__ = (function (){var switch__17492__auto__ = ((function (c__17515__auto__){
return (function (state_20910){
var state_val_20911 = (state_20910[(1)]);
if((state_val_20911 === (1))){
var inst_20876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20877 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20878 = (new cljs.core.PersistentVector(null,1,(5),inst_20876,inst_20877,null));
var inst_20879 = re_frame.core.subscribe.call(null,inst_20878);
var inst_20880 = cljs.core.deref.call(null,inst_20879);
var inst_20881 = cljs.core.empty_QMARK_.call(null,inst_20880);
var state_20910__$1 = state_20910;
if(inst_20881){
var statearr_20912_20923 = state_20910__$1;
(statearr_20912_20923[(1)] = (2));

} else {
var statearr_20913_20924 = state_20910__$1;
(statearr_20913_20924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20911 === (2))){
var inst_20883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20884 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20885 = (new cljs.core.PersistentVector(null,1,(5),inst_20883,inst_20884,null));
var inst_20886 = re_frame.core.subscribe.call(null,inst_20885);
var inst_20887 = cljs.core.deref.call(null,inst_20886);
var inst_20888 = ["word supplied:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20887)].join('');
var inst_20889 = alert(inst_20888);
var state_20910__$1 = state_20910;
var statearr_20914_20925 = state_20910__$1;
(statearr_20914_20925[(2)] = inst_20889);

(statearr_20914_20925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20911 === (3))){
var inst_20896 = (state_20910[(7)]);
var inst_20891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20892 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20893 = (new cljs.core.PersistentVector(null,1,(5),inst_20891,inst_20892,null));
var inst_20894 = re_frame.core.subscribe.call(null,inst_20893);
var inst_20895 = cljs.core.deref.call(null,inst_20894);
var inst_20896__$1 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20895),"/add-word"].join('');
var inst_20897 = cljs_http.client.get.call(null,inst_20896__$1);
var state_20910__$1 = (function (){var statearr_20915 = state_20910;
(statearr_20915[(7)] = inst_20896__$1);

return statearr_20915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20910__$1,(5),inst_20897);
} else {
if((state_val_20911 === (4))){
var inst_20908 = (state_20910[(2)]);
var state_20910__$1 = state_20910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20910__$1,inst_20908);
} else {
if((state_val_20911 === (5))){
var inst_20896 = (state_20910[(7)]);
var inst_20899 = (state_20910[(2)]);
var inst_20900 = cljs.core.print.call(null,"in the fetch remote data in go");
var inst_20901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20902 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)];
var inst_20903 = (new cljs.core.PersistentVector(null,2,(5),inst_20901,inst_20902,null));
var inst_20904 = cljs.core.get_in.call(null,inst_20899,inst_20903);
var inst_20905 = cljs.core.print.call(null,inst_20904);
var inst_20906 = (function (){var req_str = inst_20896;
var resp = inst_20899;
return ((function (req_str,resp,inst_20896,inst_20899,inst_20900,inst_20901,inst_20902,inst_20903,inst_20904,inst_20905,state_val_20911,c__17515__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fetched-words","process-fetched-words",30095030),cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null))], null));
});
;})(req_str,resp,inst_20896,inst_20899,inst_20900,inst_20901,inst_20902,inst_20903,inst_20904,inst_20905,state_val_20911,c__17515__auto__))
})();
var state_20910__$1 = (function (){var statearr_20916 = state_20910;
(statearr_20916[(8)] = inst_20905);

(statearr_20916[(9)] = inst_20900);

return statearr_20916;
})();
var statearr_20917_20926 = state_20910__$1;
(statearr_20917_20926[(2)] = inst_20906);

(statearr_20917_20926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17515__auto__))
;
return ((function (switch__17492__auto__,c__17515__auto__){
return (function() {
var hello_world$core$fetch_remote_data_$_state_machine__17493__auto__ = null;
var hello_world$core$fetch_remote_data_$_state_machine__17493__auto____0 = (function (){
var statearr_20918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20918[(0)] = hello_world$core$fetch_remote_data_$_state_machine__17493__auto__);

(statearr_20918[(1)] = (1));

return statearr_20918;
});
var hello_world$core$fetch_remote_data_$_state_machine__17493__auto____1 = (function (state_20910){
while(true){
var ret_value__17494__auto__ = (function (){try{while(true){
var result__17495__auto__ = switch__17492__auto__.call(null,state_20910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17495__auto__;
}
break;
}
}catch (e20919){var ex__17496__auto__ = e20919;
var statearr_20920_20927 = state_20910;
(statearr_20920_20927[(2)] = ex__17496__auto__);


if(cljs.core.seq.call(null,(state_20910[(4)]))){
var statearr_20921_20928 = state_20910;
(statearr_20921_20928[(1)] = cljs.core.first.call(null,(state_20910[(4)])));

} else {
throw ex__17496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20929 = state_20910;
state_20910 = G__20929;
continue;
} else {
return ret_value__17494__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data_$_state_machine__17493__auto__ = function(state_20910){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data_$_state_machine__17493__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data_$_state_machine__17493__auto____1.call(this,state_20910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data_$_state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data_$_state_machine__17493__auto____0;
hello_world$core$fetch_remote_data_$_state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data_$_state_machine__17493__auto____1;
return hello_world$core$fetch_remote_data_$_state_machine__17493__auto__;
})()
;})(switch__17492__auto__,c__17515__auto__))
})();
var state__17517__auto__ = (function (){var statearr_20922 = f__17516__auto__.call(null);
(statearr_20922[(6)] = c__17515__auto__);

return statearr_20922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17517__auto__);
});})(c__17515__auto__))
);

return c__17515__auto__;
});
hello_world.core.dispatch_add_letter = (function hello_world$core$dispatch_add_letter(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),"blank"], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88"], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__20930){
var vec__20931 = p__20930;
var _ = cljs.core.nth.call(null,vec__20931,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__20931,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__20934){
var vec__20935 = p__20934;
var _ = cljs.core.nth.call(null,vec__20935,(0),null);
var new_time = cljs.core.nth.call(null,vec__20935,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),(function (db,p__20938){
var vec__20939 = p__20938;
var _ = cljs.core.nth.call(null,vec__20939,(0),null);
var new_word = cljs.core.nth.call(null,vec__20939,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-letter","add-letter",628821393),(function (db,p__20942){
var vec__20943 = p__20942;
var _ = cljs.core.nth.call(null,vec__20943,(0),null);
var new_letter = cljs.core.nth.call(null,vec__20943,(1),null);
var curr_word = new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_letter)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),(function (db,p__20946){
var vec__20947 = p__20946;
var _ = cljs.core.nth.call(null,vec__20947,(0),null);
var new_letter = cljs.core.nth.call(null,vec__20947,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_letter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),(function (db,p__20950){
var vec__20951 = p__20950;
var _ = cljs.core.nth.call(null,vec__20951,(0),null);
var new_letter = cljs.core.nth.call(null,vec__20951,(1),null);
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,new_letter) - (1)),new_letter));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),popped_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409),(function (db,p__20954){
var vec__20955 = p__20954;
var _ = cljs.core.nth.call(null,vec__20955,(0),null);
var new_word = cljs.core.nth.call(null,vec__20955,(1),null);
cljs.core.print.call(null,"called :fetch-words");

var curr_words = new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
var all_words = cljs.core.conj.call(null,curr_words,new_word);
cljs.core.print.call(null,"called :fetch-words");

cljs.core.print.call(null,curr_words,all_words);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),all_words,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-fetched-words","process-fetched-words",30095030),(function (db,p__20958){
var vec__20959 = p__20958;
var _ = cljs.core.nth.call(null,vec__20959,(0),null);
var new_word = cljs.core.nth.call(null,vec__20959,(1),null);
cljs.core.print.call(null,"in the :process-fetched-words");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"WORKED");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remote-call","remote-call",-59372943),(function (db,p__20962){
var vec__20963 = p__20962;
var _ = cljs.core.nth.call(null,vec__20963,(0),null);
var word = cljs.core.nth.call(null,vec__20963,(1),null);
cljs.core.print.call(null,"run :remote-call on:",word);

cljs.core.print.call(null,"in the fetch remote data");

var c__17515__auto___21014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17515__auto___21014,vec__20963,_,word){
return (function (){
var f__17516__auto__ = (function (){var switch__17492__auto__ = ((function (c__17515__auto___21014,vec__20963,_,word){
return (function (state_21001){
var state_val_21002 = (state_21001[(1)]);
if((state_val_21002 === (1))){
var inst_20966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20967 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20968 = (new cljs.core.PersistentVector(null,1,(5),inst_20966,inst_20967,null));
var inst_20969 = re_frame.core.subscribe.call(null,inst_20968);
var inst_20970 = cljs.core.deref.call(null,inst_20969);
var inst_20971 = cljs.core.empty_QMARK_.call(null,inst_20970);
var state_21001__$1 = state_21001;
if(inst_20971){
var statearr_21003_21015 = state_21001__$1;
(statearr_21003_21015[(1)] = (2));

} else {
var statearr_21004_21016 = state_21001__$1;
(statearr_21004_21016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21002 === (2))){
var inst_20973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20974 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20975 = (new cljs.core.PersistentVector(null,1,(5),inst_20973,inst_20974,null));
var inst_20976 = re_frame.core.subscribe.call(null,inst_20975);
var inst_20977 = cljs.core.deref.call(null,inst_20976);
var inst_20978 = ["word supplied:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20977)].join('');
var inst_20979 = alert(inst_20978);
var state_21001__$1 = state_21001;
var statearr_21005_21017 = state_21001__$1;
(statearr_21005_21017[(2)] = inst_20979);

(statearr_21005_21017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21002 === (3))){
var inst_20986 = (state_21001[(7)]);
var inst_20981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20982 = [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)];
var inst_20983 = (new cljs.core.PersistentVector(null,1,(5),inst_20981,inst_20982,null));
var inst_20984 = re_frame.core.subscribe.call(null,inst_20983);
var inst_20985 = cljs.core.deref.call(null,inst_20984);
var inst_20986__$1 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20985),"/add-word"].join('');
var inst_20987 = cljs_http.client.get.call(null,inst_20986__$1);
var state_21001__$1 = (function (){var statearr_21006 = state_21001;
(statearr_21006[(7)] = inst_20986__$1);

return statearr_21006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21001__$1,(5),inst_20987);
} else {
if((state_val_21002 === (4))){
var inst_20999 = (state_21001[(2)]);
var state_21001__$1 = state_21001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21001__$1,inst_20999);
} else {
if((state_val_21002 === (5))){
var inst_20986 = (state_21001[(7)]);
var inst_20989 = (state_21001[(2)]);
var inst_20990 = cljs.core.print.call(null,"in the remote-call in go");
var inst_20991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20992 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)];
var inst_20993 = (new cljs.core.PersistentVector(null,2,(5),inst_20991,inst_20992,null));
var inst_20994 = cljs.core.get_in.call(null,inst_20989,inst_20993);
var inst_20995 = cljs.core.print.call(null,inst_20994);
var inst_20996 = (function (){var req_str = inst_20986;
var resp = inst_20989;
return ((function (req_str,resp,inst_20986,inst_20989,inst_20990,inst_20991,inst_20992,inst_20993,inst_20994,inst_20995,state_val_21002,c__17515__auto___21014,vec__20963,_,word){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fetched-words","process-fetched-words",30095030),cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null))], null));
});
;})(req_str,resp,inst_20986,inst_20989,inst_20990,inst_20991,inst_20992,inst_20993,inst_20994,inst_20995,state_val_21002,c__17515__auto___21014,vec__20963,_,word))
})();
var inst_20997 = cljs.core.print.call(null,"in the remote-call in go after rf/disp");
var state_21001__$1 = (function (){var statearr_21007 = state_21001;
(statearr_21007[(8)] = inst_20995);

(statearr_21007[(9)] = inst_20990);

(statearr_21007[(10)] = inst_20996);

return statearr_21007;
})();
var statearr_21008_21018 = state_21001__$1;
(statearr_21008_21018[(2)] = inst_20997);

(statearr_21008_21018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17515__auto___21014,vec__20963,_,word))
;
return ((function (switch__17492__auto__,c__17515__auto___21014,vec__20963,_,word){
return (function() {
var hello_world$core$state_machine__17493__auto__ = null;
var hello_world$core$state_machine__17493__auto____0 = (function (){
var statearr_21009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21009[(0)] = hello_world$core$state_machine__17493__auto__);

(statearr_21009[(1)] = (1));

return statearr_21009;
});
var hello_world$core$state_machine__17493__auto____1 = (function (state_21001){
while(true){
var ret_value__17494__auto__ = (function (){try{while(true){
var result__17495__auto__ = switch__17492__auto__.call(null,state_21001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17495__auto__;
}
break;
}
}catch (e21010){var ex__17496__auto__ = e21010;
var statearr_21011_21019 = state_21001;
(statearr_21011_21019[(2)] = ex__17496__auto__);


if(cljs.core.seq.call(null,(state_21001[(4)]))){
var statearr_21012_21020 = state_21001;
(statearr_21012_21020[(1)] = cljs.core.first.call(null,(state_21001[(4)])));

} else {
throw ex__17496__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21021 = state_21001;
state_21001 = G__21021;
continue;
} else {
return ret_value__17494__auto__;
}
break;
}
});
hello_world$core$state_machine__17493__auto__ = function(state_21001){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__17493__auto____0.call(this);
case 1:
return hello_world$core$state_machine__17493__auto____1.call(this,state_21001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__17493__auto____0;
hello_world$core$state_machine__17493__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__17493__auto____1;
return hello_world$core$state_machine__17493__auto__;
})()
;})(switch__17492__auto__,c__17515__auto___21014,vec__20963,_,word))
})();
var state__17517__auto__ = (function (){var statearr_21013 = f__17516__auto__.call(null);
(statearr_21013[(6)] = c__17515__auto___21014);

return statearr_21013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17517__auto__);
});})(c__17515__auto___21014,vec__20963,_,word))
);


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),word);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__21024,p__21025){
var map__21026 = p__21024;
var map__21026__$1 = (((((!((map__21026 == null))))?(((((map__21026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21026):map__21026);
var db = cljs.core.get.call(null,map__21026__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21027 = p__21025;
var _ = cljs.core.nth.call(null,vec__21027,(0),null);
var word = cljs.core.nth.call(null,vec__21027,(1),null);
cljs.core.print.call(null,"in requet-it: ",word);

var req_str = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/add-word"].join('');
cljs.core.print.call(null,req_str);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),req_str,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__21031){
var vec__21032 = p__21031;
var _ = cljs.core.nth.call(null,vec__21032,(0),null);
var response = cljs.core.nth.call(null,vec__21032,(1),null);
cljs.core.print.call(null,"in :process-response");

cljs.core.print.call(null,response);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__21035){
var vec__21036 = p__21035;
var _ = cljs.core.nth.call(null,vec__21036,(0),null);
var response = cljs.core.nth.call(null,vec__21036,(1),null);
cljs.core.print.call(null,"in :bad-response");

var form_resp = clojure.edn.read_string.call(null,cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"original-text","original-text",744448452)], null)));
var fin_resp = cljs.core.get_in.call(null,form_resp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null));
cljs.core.print.call(null,form_resp);

cljs.core.print.call(null,fin_resp);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),fin_resp),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),(function (db,_){
return new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),(function (db,_){
return new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
}));
hello_world.core.clock = (function hello_world$core$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))).toTimeString()," "))], null);
});
hello_world.core.color_input = (function hello_world$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21039_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),p1__21039_SHARP_.target.value], null));
})], null)], null)], null);
});
hello_world.core.text_entry = (function hello_world$core$text_entry(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Spelling Bee Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21040_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),clojure.string.upper_case.call(null,p1__21040_SHARP_.target.value)], null));
})], null)], null)], null);
});
hello_world.core.button_entry = (function hello_world$core$button_entry(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21041_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21041_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21042_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21042_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21043_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21043_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,hello_world.core.letter_list),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21044_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21044_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21045_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21045_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21046_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21046_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21047_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21047_SHARP_.target.value)], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.action_buttons = (function hello_world$core$action_buttons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),""], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null)], null)], null);
});
hello_world.core.accrued_list = (function hello_world$core$accrued_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null))))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var iter__4523__auto__ = (function hello_world$core$accrued_list_$_iter__21048(s__21049){
return (new cljs.core.LazySeq(null,(function (){
var s__21049__$1 = s__21049;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21049__$1);
if(temp__5457__auto__){
var s__21049__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21049__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21049__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21051 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21050 = (0);
while(true){
if((i__21050 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__21050);
cljs.core.chunk_append.call(null,b__21051,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__21052 = (i__21050 + (1));
i__21050 = G__21052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21051),hello_world$core$accrued_list_$_iter__21048.call(null,cljs.core.chunk_rest.call(null,s__21049__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21051),null);
}
} else {
var item = cljs.core.first.call(null,s__21049__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$accrued_list_$_iter__21048.call(null,cljs.core.rest.call(null,s__21049__$2)));
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
hello_world.core.ui = (function hello_world$core$ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.text_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.button_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.action_buttons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.accrued_list], null)], null)], null);
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
