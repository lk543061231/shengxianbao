(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-StockManage-AddPage~pagesA-StockManage-Detail~pagesA-StockManage-SelectGood"],{"0116":function(t,a,e){"use strict";e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{datas:{type:Array,default:function(){return[{name:1,checked:2,sa:0,sb:0},{name:2,checked:1,sa:0,sb:0},{name:3,checked:1,sa:0,sb:0}]}},nowParentPage:{type:String,default:""},showEdit:{type:Boolean,default:!1},pageType:{type:String,default:""},pageTxt:{type:String,default:""}},computed:{showSummary:function(){return"AddPage"==this.nowParentPage||("Detail"==this.nowParentPage?!this.showEdit:!this.showEditSelf&&!this.showEdit&&"one"!=this.step)},resultList:{get:function(){return this.datas}}},data:function(){return{step:"one",showEditSelf:!1,total:0}},mounted:function(){var t=0;this.resultList.forEach((function(a){2==a.checked&&t++})),this.total=t},methods:{changeNum1:function(t,a){this.resultList[a].sa=t},changeNum2:function(t,a){this.resultList[a].sb=t},checkHandle:function(t,a){1==t.checked?t.checked=2:t.checked=1;var e=0;this.resultList.forEach((function(t){2==t.checked&&e++})),this.total=e,this.$forceUpdate()},submit:function(t){if(this.step="one"==t?"two":"three","two"==this.step?this.showEditSelf=!0:"three"==this.step&&(this.showEditSelf=!1),"two"==t){var a=[];this.resultList.forEach((function(t){2==t.checked&&a.push(t)})),uni.setStorageSync("stockData",a),this.navTo("./AddPage?pageType="+this.pageType)}else"three"==t&&uni.showModal({title:"提示",content:"即将调整库存数量，请确认操作",success:function(t){t.confirm&&uni.removeStorageSync("stockData")}})},selectAll:function(t){this.total=1==t?0:this.resultList.length,this.resultList.forEach((function(a){a.checked=t}))}}};a.default=i},"032e":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{index:{type:Number,default:0}},data:function(){return{num:0}},watch:{num:function(t){this.$emit("changeNumResult",t,this.index)}},methods:{change:function(t){1==t?this.num>0&&this.num--:this.num++}}};a.default=i},"40c3":function(t,a,e){"use strict";e.r(a);var i=e("67aa"),n=e("e320");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("b08c");var o,c=e("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"49ce2db8",null,!1,i["a"],o);a["default"]=r.exports},"4efe":function(t,a,e){var i=e("63a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("72ca301c",i,!0,{sourceMap:!1,shadowMode:!1})},"502a":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.data_list .list[data-v-49ce2db8]{padding:%?30?%}.data_list .list .item[data-v-49ce2db8]{margin-bottom:%?30?%}.data_list .list .item .item_wrap[data-v-49ce2db8]{background-color:#fff;align-items:flex-start;padding:%?30?%}.data_list .list .item .item_wrap .row .icon-weixuanze[data-v-49ce2db8]{color:#999;margin-right:%?10?%}.data_list .list .item .item_wrap .row .icon-xuanze[data-v-49ce2db8]{color:#fe5b07;margin-right:%?10?%}.data_list .list .item .img[data-v-49ce2db8]{width:%?120?%;margin-right:%?30?%}.data_list .list .item .info[data-v-49ce2db8]{flex:1;position:relative}.data_list .list .item .info .bao[data-v-49ce2db8]{background-color:#fff4ed;color:#fe5b07;font-size:%?20?%;border-radius:%?2?%;padding:0 %?4?%;margin-right:%?10?%}.data_list .list .item .info .num_util[data-v-49ce2db8]{color:#fe5b07}.data_list .list .item .info .total[data-v-49ce2db8]{color:#d30000;font-size:%?24?%;width:100%;text-align:right;padding-top:%?20?%;border-top:1px solid #e7e7e7}.data_list .list .item .info .kucun[data-v-49ce2db8]{position:absolute;right:0;bottom:0}.data_list .list .item .bottom_wrap[data-v-49ce2db8]{background-color:#fff;justify-content:flex-end;padding:%?20?%}.data_list .list .item .bottom_wrap .tip[data-v-49ce2db8]{color:#fe5b07;font-size:%?32?%}.data_list .list .item .bottom_wrap .icon-shanchu[data-v-49ce2db8]{font-size:%?44?%;color:#666}.data_list .list .item .bottom_wrap .bg_style1[data-v-49ce2db8]{font-size:%?20?%;padding:%?8?%;margin-left:%?10?%}.data_list .list .item .change[data-v-49ce2db8]{justify-content:space-around}.data_list .foot_wrap[data-v-49ce2db8]{position:fixed;background-color:#fff;bottom:0;left:0;width:100%;padding:%?30?% 0;z-index:111}.data_list .foot_wrap .foot_con[data-v-49ce2db8]{padding:0 %?30?%}.data_list .foot_wrap .foot_con .check_wrap[data-v-49ce2db8]{margin-right:%?10?%}.data_list .foot_wrap .foot_con .check_wrap .icon-weixuanze[data-v-49ce2db8]{color:#999}.data_list .foot_wrap .foot_con .check_wrap .icon-xuanze[data-v-49ce2db8]{color:#fe5b07}.data_list .foot_wrap .foot_con .num_wrap .label[data-v-49ce2db8]{font-size:%?22?%;color:#333;margin-right:%?30?%}.data_list .foot_wrap .foot_con .num_wrap .value[data-v-49ce2db8]{font-size:%?40?%;color:#fe5b07}.data_list .foot_wrap .foot_con .btn_wrap[data-v-49ce2db8]{position:absolute;right:%?30?%}.data_list .foot_wrap .foot_con .btn_wrap .edit[data-v-49ce2db8]{margin-right:%?60?%;color:#fe5b07;font-size:%?28?%}.data_list .foot_wrap .foot_con .btn_wrap .btn[data-v-49ce2db8]{width:%?180?%;height:%?70?%;border-radius:%?35?%;background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);text-align:center;line-height:%?70?%;font-size:%?32?%;color:#fff}',""]),t.exports=a},"63a7":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.num_wrap[data-v-4bb43552] .uni-input-input{width:%?50?%;padding:%?10?%;background-color:#ececec}.num_wrap[data-v-4bb43552] uni-input{width:%?50?%;background-color:#ececec}.num_wrap .btn[data-v-4bb43552]{width:%?50?%;background-color:#ececec;text-align:center;height:%?48?%;line-height:%?48?%}.num_wrap .left[data-v-4bb43552]{margin-right:%?10?%}.num_wrap .right[data-v-4bb43552]{margin-left:%?10?%}',""]),t.exports=a},"67aa":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={changeNum:e("92e1").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"data_list"},[e("v-uni-view",{staticClass:"list"},t._l(t.resultList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item  "},[e("v-uni-view",{staticClass:"item_wrap row"},[e("v-uni-view",{staticClass:"row"},["SelectGoopd"==t.nowParentPage?e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkHandle(a,i)}}},[1==a.checked?e("v-uni-view",{staticClass:"iconfont icon-weixuanze"}):e("v-uni-view",{staticClass:"iconfont icon-xuanze"})],1):t._e(),e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v("名称")]),e("v-uni-text",{staticClass:"f24-c999"},[t._v("商品编号：123456")])],1),e("v-uni-view",{staticClass:"desc mt10 f24-c999"},[t._v("1包约125g")]),e("v-uni-view",{staticClass:"price row  mt10"},[e("v-uni-text",{staticClass:"bao"},[t._v("包")]),e("v-uni-text",{staticClass:"f24-c999"},[t._v("￥10.00元/包")])],1),"inventory"==t.pageType?e("v-uni-view",{staticClass:"kucun"},[t._v("库存")]):t._e()],1)],1),t.showEdit||t.showEditSelf?e("v-uni-view",{staticClass:"mt10 bottom_wrap change row"},["Detail"==t.nowParentPage?e("v-uni-text",{staticClass:"iconfont icon-shanchu"}):t._e(),e("v-uni-view",{staticClass:"row"},[e("change-num",{attrs:{index:i},on:{changeNumResult:function(a){arguments[0]=a=t.$handleEvent(a),t.changeNum1.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"bg_style1"},[t._v("斤")])],1),e("v-uni-view",{staticClass:"row"},[e("change-num",{attrs:{index:i},on:{changeNumResult:function(a){arguments[0]=a=t.$handleEvent(a),t.changeNum2.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"bg_style1"},[t._v("包")])],1)],1):t._e(),t.showSummary?e("v-uni-view",{staticClass:"mt10 bottom_wrap row"},[e("v-uni-text",{staticClass:"f24-c333"},[t._v(t._s(t.pageTxt)+"：")]),e("v-uni-text",{staticClass:"tip"},[t._v(t._s(a.sa)+"斤("+t._s(a.sb)+"包)")])],1):t._e()],1)})),1),e("v-uni-view",{staticClass:"foot_wrap"},["out"==t.pageType||"in"==t.pageType||"inventory"==t.pageType||"frmLoss"==t.pageType||"overflow"==t.pageType||"return"==t.pageType?[e("v-uni-view",{staticClass:"foot_con row"},["AddPage"!=t.nowParentPage?e("v-uni-view",{staticClass:"check_wrap"},[t.total<t.resultList.length?e("v-uni-view",{staticClass:"iconfont icon-weixuanze",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectAll(2)}}}):e("v-uni-view",{staticClass:"iconfont icon-xuanze",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectAll(1)}}})],1):t._e(),e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-text",{staticClass:"label"},[t._v(t._s(t.pageTxt))]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.total))])],1),e("v-uni-view",{staticClass:"btn_wrap row"},["one"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("one")}}},[t._v(t._s(t.pageTxt))]):"two"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("two")}}},[t._v("保存")]):"three"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("three")}}},[t._v("结束"+t._s(t.pageTxt))]):t._e()],1)],1)]:t._e()],2)],1)},s=[]},"76dd":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={uInput:e("5e42").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-view",{staticClass:"btn left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(1)}}},[t._v("-")]),e("u-input",{attrs:{border:"none"},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),e("v-uni-view",{staticClass:"btn right",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(2)}}},[t._v("+")])],1)},s=[]},"87ad":function(t,a,e){var i=e("502a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("177b96ca",i,!0,{sourceMap:!1,shadowMode:!1})},"8b66":function(t,a,e){"use strict";e.r(a);var i=e("032e"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"92e1":function(t,a,e){"use strict";e.r(a);var i=e("76dd"),n=e("8b66");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("96b3");var o,c=e("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"4bb43552",null,!1,i["a"],o);a["default"]=r.exports},"96b3":function(t,a,e){"use strict";var i=e("4efe"),n=e.n(i);n.a},b08c:function(t,a,e){"use strict";var i=e("87ad"),n=e.n(i);n.a},e320:function(t,a,e){"use strict";e.r(a);var i=e("0116"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a}}]);