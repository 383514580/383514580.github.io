webpackJsonp([2,0],[function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(21),i=s(n),o=a(98),r=s(o),d=a(45),l=s(d),c=a(44),u=s(c);new i.default({store:l.default,el:"#app",template:"<App/>",router:u.default,components:{App:r.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){var s,n;a(91),s=a(38);var i=a(110);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-dd04c1ec",t.exports=s},function(t,e,a){var s,n;a(88),s=a(39);var i=a(107);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-3ef5e902",t.exports=s},function(t,e){"use strict"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"FloatBar",computed:{},methods:{goTop:function(){function t(){var e=document.documentElement.style.scrollTop||document.body.scrollTop;0<e&&(e-=document.body.clientHeight/1e3*17,window.scrollTo(0,e),window.requestAnimationFrame(t))}t()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"HeaderBar",computed:{},methods:{}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loader",props:["opts"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MyCard"}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(35),i=s(n);e.default={name:"scrollList",data:function(){return{list_data:[],translate_y:0,start_y:0,start_scroll_top:0,is_pull_down:!1,is_loading:!1}},mounted:function(){var t=this,e=this.$el.childNodes[0];e.addEventListener("touchstart",function(e){t.is_pull_down=!0,t.start_y=e.touches[0].clientY,t.start_scroll_top=t._getScrollTop()},!1),e.addEventListener("touchmove",function(e){var a=e.touches[0].clientY-t.start_y-t.start_scroll_top;0<a&&0==t._getScrollTop()&&(t.translate_y=a/2,e.preventDefault(),e.stopPropagation())},!1),e.addEventListener("touchend",function(e){0<t.translate_y&&(t.is_pull_down=!1,t.translate_y=10,t.is_loading=!0,setTimeout(function(){t.is_loading=!1,t.translate_y=0,t.list_data.splice(0,0,{title:"本站代码",time:"2013-01-01 12:32:21",category:"javascript",id:"0",desc:"隐藏"})},1e3))},!1)},created:function(){function t(){0>=i.$el.getBoundingClientRect().top?n.commit("isListPosTop",!0):n.commit("isListPosTop",!1)}function e(){window.screen.availHeight+window.scrollY+50>=document.body.clientHeight&&(clearTimeout(s),s=setTimeout(function(){n.state.page<n.state.page_total&&(n.state.page++,n.commit("setPage",n.state.page))},200)),n.state.page>=n.state.page_total&&(window.removeEventListener("scroll",e),n.commit("setListLoader",!1))}var a=this;this.$store.dispatch("getList").then(function(){a.list_data=a.$store.state.list,a.$store.commit("setPageTotal",Math.ceil(a.list_data.length/a.$store.state.page_each))});var s=null,n=this.$store,i=this;window.addEventListener("scroll",e,!1),window.addEventListener("scroll",t,!1)},methods:{_getScrollTop:function(){return window.pageYOffset},goDetail:function(t){this.$store.commit("setIndexPosY",window.scrollY),this.$router.push({name:"detail",params:{id:t}})}},computed:{list_already_length:function(){return this.$store.state.page*this.$store.state.page_each}},components:{Loader:i.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(35),i=s(n),o=a(34),r=s(o);e.default={name:"Detail",created:function(){var t=this;this.$store.commit("setDetailLoader",!0),this.$store.dispatch("getDetail",this.$route.params.id).then(function(){t.list_data=t.$store.state.list,t.$store.commit("setPageTotal",Math.ceil(t.list_data.length/t.$store.state.page_each))})},computed:{detail:function(){return this.$store.state.detail}},components:{Loader:i.default,HeaderBar:r.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(34),i=s(n),o=a(100),r=s(o),d=a(101),l=s(d),c=a(99),u=s(c);e.default={name:"Index",components:{HeaderBar:i.default,MyCard:r.default,ScrollList:l.default,FloatBar:u.default},activated:function(){window.scrollTo(0,this.$store.state.index_pos_y)}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(21),i=s(n),o=a(112),r=s(o),d=a(103),l=s(d),c=a(102),u=s(c);i.default.use(r.default);var I=[{path:"/",component:l.default},{path:"/index",component:l.default,name:"index"},{path:"/detail/:id",component:u.default,name:"detail"}];e.default=new r.default({routes:I})},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=a(47),o=s(i),r=a(48),d=s(r),l=a(21),c=s(l),u=a(113),I=s(u),g=a(93),f=s(g);c.default.use(I.default),e.default=new I.default.Store({state:(n={index_pos_y:0,top_bar:{show:!1},page:1,count:0,list:[],list_loader:!0,page_total:1},(0,d.default)(n,"page",1),(0,d.default)(n,"page_each",3),(0,d.default)(n,"detail",{}),(0,d.default)(n,"detail_loader",!0),n),mutations:{setIndexPosY:function(t,e){t.index_pos_y=e},isListPosTop:function(t,e){t.top_bar.show=e},setList:function(t,e){t.list=e},setListLoader:function(t,e){t.list_loader=e},setPageTotal:function(t,e){t.page_total=e},setPage:function(t,e){t.page=e},setDetail:function(t,e){t.detail=e},setDetailLoader:function(t,e){t.detail_loader=e},setDetailStatus:function(t,e){t.detail_status=e}},actions:{getList:function(t,e){return new o.default(function(e,a){f.default.get("/static/db/list.json").set("Accept","application/json").end(function(a,s){t.commit("setList",s.body),e()})})},getDetail:function(t,e){return new o.default(function(a,s){f.default.get("/static/db/detail/"+e+".tpl").end(function(e,s){t.commit("setDetailLoader",!1),t.commit("setDetail",s.text),a()})})}}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){t.exports=a.p+"static/img/avatar.fda2c94.png"},function(t,e){t.exports="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+DQo8c3ZnIHdpZHRoPSIxMjAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxMjAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2FhYSI+DQogICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBmcm9tPSIxNSIgdG89IjE1Ig0KICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyINCiAgICAgICAgICAgICAgICAgdmFsdWVzPSIxNTs5OzE1IiBjYWxjTW9kZT0ibGluZWFyIg0KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBmcm9tPSIxIiB0bz0iMSINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjAuOHMiDQogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTsuNTsxIiBjYWxjTW9kZT0ibGluZWFyIg0KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgICA8L2NpcmNsZT4NCiAgICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjE1IiByPSI5IiBmaWxsLW9wYWNpdHk9IjAuMyI+DQogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGZyb209IjkiIHRvPSI5Ig0KICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC44cyINCiAgICAgICAgICAgICAgICAgdmFsdWVzPSI5OzE1OzkiIGNhbGNNb2RlPSJsaW5lYXIiDQogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGZyb209IjAuNSIgdG89IjAuNSINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjAuOHMiDQogICAgICAgICAgICAgICAgIHZhbHVlcz0iLjU7MTsuNSIgY2FsY01vZGU9ImxpbmVhciINCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgPC9jaXJjbGU+DQogICAgPGNpcmNsZSBjeD0iMTA1IiBjeT0iMTUiIHI9IjE1Ij4NCiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZnJvbT0iMTUiIHRvPSIxNSINCiAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjAuOHMiDQogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTU7OTsxNSIgY2FsY01vZGU9ImxpbmVhciINCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgZnJvbT0iMSIgdG89IjEiDQogICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIwLjhzIg0KICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7LjU7MSIgY2FsY01vZGU9ImxpbmVhciINCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgPC9jaXJjbGU+DQo8L3N2Zz4NCg=="},function(t,e,a){var s,n;a(90),s=a(36);var i=a(109);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(85),s=a(37);var i=a(104);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-07846883",t.exports=s},function(t,e,a){var s,n;a(87),s=a(40);var i=a(106);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-2c62d470",t.exports=s},function(t,e,a){var s,n;a(89),s=a(41);var i=a(108);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-4e2b3277",t.exports=s},function(t,e,a){var s,n;a(86),s=a(42);var i=a(105);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-0b83484e",t.exports=s},function(t,e,a){var s,n;a(92),s=a(43);var i=a(111);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("ul",{staticClass:"com-float-bar"},[e("li",{on:{click:t.goTop}},["顶部"])," "])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"detail-view"},[e("loader",{attrs:{opts:{show:t.$store.state.detail_loader}}})," "," ",e("section",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.detail_loader,expression:"!$store.state.detail_loader"}]},[e("header",[t._m(0)," "," "," ",e("router-link",{staticClass:"btn-return",attrs:{to:{name:"index"},tag:"a"}},["返回"])])," ",e("article",{domProps:{innerHTML:t._s(t.detail)}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("p",{staticClass:"email"},["Email: ",e("a",{attrs:{href:"mailto:383514580@qq.com"}},["383514580@qq.com"])])}]}},function(t,e,a){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"com-card"},[e("h1",{staticClass:"name"},["宁宁"])," ",e("div",{staticClass:"avatar"},[e("img",{attrs:{src:a(96)}})])," ",e("h1",{staticClass:"say"},["hi! 软件能干的事, 你别干."])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.opts.show,expression:"opts.show"}],staticClass:"com-loader"},[e("img",{attrs:{src:a(97)}})," ",e("p",{attrs:{align:"center"}},["努力加载..."])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"com-scroll-list"},[e("div",{staticClass:"body",class:{bounce:!t.is_pull_down},style:{transform:"translate3d(0, "+t.translate_y+"px,0)"}},[[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.is_loading,expression:"!is_loading"}],staticClass:"arrow"},[e("i",{staticClass:"icon",class:{rotate:t.is_pull_down}})," ",e("p",{staticClass:"text"},["松开加载"])])," ",e("loader",{attrs:{opts:{show:t.is_loading}}})]," "," ",e("transition-group",{staticClass:"list",attrs:{name:"list",tag:"ul"}},[t._l(t.list_data,function(a,s){return t.list_already_length>s?e("li",{key:s,staticClass:"list-item"},[e("router-link",{staticClass:"title",attrs:{to:{name:"detail",params:{id:a.id}},tag:"h1"}},["\n                    "+t._s(a.title)+"\n                "])," ",e("p",{staticClass:"desc",domProps:{innerHTML:t._s("["+a.category+"]"+a.desc)}})," ",e("p",{staticClass:"time"},[t._s(a.create_time)])," ",e("a",{staticClass:"btn-view",on:{click:function(e){t.goDetail(a.id)}}},["查看全部"])]):t._e()})])," ",[e("loader",{attrs:{opts:{show:t.$store.state.list_loader}}})," "," ",e("p",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.list_loader,expression:"!$store.state.list_loader"}],staticClass:"info"},["没有更多文章喽!"])]])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"bounce",mode:"out-in"}},[e("keep-alive",[e("router-view")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.top_bar.show,expression:"$store.state.top_bar.show"}],staticClass:"com-header-bar"},[e("div",{staticClass:"center"},[e("p",{staticClass:"page-count"},["欢迎你哦!"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"index-view"},[e("div",{staticClass:"foreground"},[e("my-card")," ",e("header-bar")," ",e("scroll-list")])," ",e("float-bar")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.be743ad710dc5a56a21e.js.map