(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Home-Home"],{"0acf":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */._notice[data-v-11bc15b4]{width:%?500?%;font-size:%?20?%;height:%?44?%;color:#666;border-radius:%?6?%;overflow:hidden;box-sizing:border-box}.swiper-item[data-v-11bc15b4]{width:%?500?%!important;margin-right:%?20?%}._swiper[data-v-11bc15b4]{line-height:%?44?%;height:%?50?%}',""]),t.exports=e},"0d5a":function(t,e,a){"use strict";var i=a("143b"),n=a.n(i);n.a},1055:function(t,e,a){"use strict";var i=a("d70f"),n=a.n(i);n.a},"143b":function(t,e,a){var i=a("6f4c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c08c253c",i,!0,{sourceMap:!1,shadowMode:!1})},"1b39":function(t,e,a){var i=a("9af3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("67a4ea5b",i,!0,{sourceMap:!1,shadowMode:!1})},"1b91":function(t,e,a){"use strict";var i=a("77cd"),n=a.n(i);n.a},2038:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s={props:{styleType:{type:String,default:""},goodInfo:{type:Object,default:function(){return{}}}},data:function(){return{moreIcon:"icon-zhankai",showMore:!1,selectData:{}}},methods:{moreHandle:function(){this.showMore=!this.showMore,this.moreIcon=this.showMore?"icon-shang":"icon-zhankai"},addGood:function(t){this.$util.isLogin()&&(this.selectData=t?(0,n.default)((0,n.default)({},t),{},{productName:this.goodInfo.productName,imageUrl:this.goodInfo.defaultImage}):(0,n.default)((0,n.default)({},this.goodInfo.productSkuList[0]),{},{productName:this.goodInfo.productName,imageUrl:this.goodInfo.defaultImage}),this.$refs.spec.show=!0)}}};e.default=s},2826:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{selectData:{type:Object,default:function(){return{}}}},data:function(){return{show:!1,num:1,remark:"",img:""}},watch:{},methods:{changNum:function(t){1==t&&this.num>1?this.num--:2==t&&this.num++},add:function(){var t=this;this.$http("api/bmallshoppingcart/addShoppingCart",{buyQuantity:this.num,productSkuId:this.selectData.productSkuId,remark:this.remark},"post").then((function(e){t.show=!1,uni.showToast({title:"添加成功",icon:"none"})}))}}};e.default=i},"2d2b":function(t,e,a){"use strict";a.r(e);var i=a("7996"),n=a("bf09");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("8b6a");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5d9dab6b",null,!1,i["a"],r);e["default"]=c.exports},"2de4":function(t,e,a){"use strict";a.r(e);var i=a("f025"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},34273:function(t,e,a){"use strict";a.r(e);var i=a("5784"),n=a("8949");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("97f0");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"11bc15b4",null,!1,i["a"],r);e["default"]=c.exports},"38a7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.module-wrap[data-v-5d9dab6b]{height:%?540?%;background:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg1.png) no-repeat;background-size:100% 100%;padding:%?30?%;position:relative}.module-wrap .title[data-v-5d9dab6b]{justify-content:space-between}.module-wrap .title .txt[data-v-5d9dab6b]{color:#ff6423}.module-wrap .title .more_r[data-v-5d9dab6b]{color:#7e7e7e;font-size:%?20?%;margin-right:%?10?%}.module-wrap .title .more[data-v-5d9dab6b]{width:%?12?%;margin-left:%?10?%}.module-wrap .swiper[data-v-5d9dab6b]{height:100%}.module-wrap .swiper .swiper_item .list[data-v-5d9dab6b]{flex-wrap:wrap}.module-wrap .swiper .swiper_item .list .item[data-v-5d9dab6b]{margin-right:%?15?%}.module-wrap .swiper .swiper_item .list .item[data-v-5d9dab6b]:nth-child(3n){margin-right:0}.module-wrap .swiper .swiper_item .list .img[data-v-5d9dab6b]{width:%?200?%;height:%?200?%;border-radius:%?8?%}.dots[data-v-5d9dab6b]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-5d9dab6b]{width:%?12?%;height:%?12?%;margin:0 %?6?%;background-color:#fff;border-radius:50%}.dot.current[data-v-5d9dab6b]{background-color:#fe5b07}',""]),t.exports=e},4311:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uPopup:a("cbea").default,uInput:a("5e42").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"spec_wrap"},[a("u-popup",{attrs:{show:t.show,closeable:!0,mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"info row"},[a("v-uni-image",{attrs:{src:t.selectData.imageUrl,mode:"widthFix"}}),a("v-uni-view",{},[a("v-uni-text",{staticClass:"f32-c333 mr20"},[t._v(t._s(t.selectData.productName))]),a("v-uni-text",{staticClass:"f24-c999 mt10"},[t._v(t._s(t.selectData.productModel))])],1)],1),a("v-uni-view",{staticClass:"detail row jc_sb"},[a("v-uni-text",{staticClass:"f28-c333"},[t._v("结算单位")]),a("v-uni-text",{staticClass:"f28-c999"},[t._v(t._s(t.selectData.productUnit))])],1),a("v-uni-view",{staticClass:"detail row jc_sb"},[a("v-uni-text",{staticClass:"f28-c333"},[t._v("数量")]),a("v-uni-view",{staticClass:"num_wrap row"},[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(1)}}},[t._v("-")]),a("u-input",{attrs:{border:"none",type:"text"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(2)}}},[t._v("+")])],1)],1),a("v-uni-view",{staticClass:"detail jc_sb row"},[a("u-input",{attrs:{placeholder:"请输入备注",border:"none"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label f28-c333"},[t._v("备注")])],1)],2)],1),a("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},s=[]},"4d4d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{toClass:function(t){uni.setStorageSync("classId","12"),this.navTo("/pages/Classify/Classify","switch")}}};e.default=i},"536b":function(t,e,a){var i=a("38a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("75dbe6bc",i,!0,{sourceMap:!1,shadowMode:!1})},"55ca":function(t,e,a){"use strict";a.r(e);var i=a("2038"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"55d6":function(t,e,a){"use strict";a.r(e);var i=a("4d4d"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},5718:function(t,e,a){var i=a("9c9d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0250dafc",i,!0,{sourceMap:!1,shadowMode:!1})},5784:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"_notice"},[a("v-uni-swiper",{staticClass:"_swiper",attrs:{"indicator-dots":!1,autoplay:"true",interval:t.interval,circular:!0,duration:t.duration}},t._l(t.list,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"swiper-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pagesB/NoticeInfo/NoticeInfo?id="+e.id)}}},[a("v-uni-view",{staticClass:" uni-bg-red"},[t._v(t._s(e.noteTitle))])],1)})),1)],1)},s=[]},"57e3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}}},name:"HomeBanner",data:function(){return{current:0}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};e.default=i},5889:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,defual:function(){return[]}}},data:function(){return{interval:3e3,duration:12e3}},methods:{}};e.default=i},"5a25":function(t,e,a){"use strict";var i=a("ae4a"),n=a.n(i);n.a},"617a":function(t,e,a){"use strict";a.r(e);var i=a("fc31"),n=a("55ca");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("bcaf");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"614307cd",null,!1,i["a"],r);e["default"]=c.exports},"63df":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{}};e.default=i},"651c":function(t,e,a){"use strict";a.r(e);var i=a("ed5c"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},6522:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{current:0}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};e.default=i},"6f4c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-9f72080e]{position:fixed;left:0;top:0;z-index:95;width:100%;background-color:#fff}.btn[data-v-9f72080e]{width:44px;height:40px;position:relative}.btn .mix-icon[data-v-9f72080e]{font-size:20px;color:#333}.btn .dizhi[data-v-9f72080e]{width:%?34?%}.btn .msg[data-v-9f72080e]{position:absolute;right:7px;top:5px;width:12px;height:12px;background-color:#f5f5f5;border:2px solid #fff;border-radius:100px;opacity:0}.btn .msg.show[data-v-9f72080e]{opacity:1}.center[data-v-9f72080e]{display:flex;align-items:center;justify-content:center}.search-wrap[data-v-9f72080e]{flex:1;font-size:14px;color:#999;border-radius:100px;background-color:#f2f2f2}.search-wrap .search[data-v-9f72080e]{width:%?30?%;margin-right:%?20?%}.search-wrap .icon-sousuo[data-v-9f72080e]{margin-right:6px;font-size:18px;color:#999}',""]),t.exports=e},"6f4d":function(t,e,a){var i=a("d36c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("58a1a63c",i,!0,{sourceMap:!1,shadowMode:!1})},"6f536":function(t,e,a){"use strict";a.r(e);var i=a("4311"),n=a("d563");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1055");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"16ee0094",null,!1,i["a"],r);e["default"]=c.exports},"77cd":function(t,e,a){var i=a("e6671");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e8e29ed8",i,!0,{sourceMap:!1,shadowMode:!1})},7996:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"module-wrap mt30"},[a("v-uni-view",{staticClass:"row title"},[a("v-uni-text",{staticClass:"txt"},[t._v("品牌专场")]),a("v-uni-view",{staticClass:"more_r row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/AllBrand/AllBrand")}}},[t._v("更多"),a("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1)],1),a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"swiper_item"},[a("v-uni-view",{staticClass:"list row"},t._l(e,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item mt20",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pagesB/RecommendPage/RecommendPage?id="+e.id+"&pageType=spec")}}},[a("v-uni-image",{staticClass:"img",attrs:{src:e.specialImage}})],1)})),1)],1)})),1),a("v-uni-view",{staticClass:"dots row "},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"dot",class:{current:t.current===i}})})),1)],1)},s=[]},"84fc":function(t,e,a){"use strict";a.r(e);var i=a("d8f7"),n=a("2de4");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("b6aa");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"314206d4",null,!1,i["a"],r);e["default"]=c.exports},8949:function(t,e,a){"use strict";a.r(e);var i=a("5889"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"8b6a":function(t,e,a){"use strict";var i=a("536b"),n=a.n(i);n.a},"8f8e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.spec_wrap[data-v-16ee0094] .u-popup .u-transition{z-index:99998}.spec_wrap .con[data-v-16ee0094]{padding:%?30?%}.spec_wrap .con .info[data-v-16ee0094]{justify-content:center;margin-bottom:%?120?%}.spec_wrap .con .info uni-image[data-v-16ee0094]{margin-right:%?30?%;width:%?172?%;height:%?172?%}.spec_wrap .con .detail[data-v-16ee0094]{padding:%?30?%;border-top:1px solid #eee}.spec_wrap .con .detail .num_wrap uni-text[data-v-16ee0094]{background-color:#f6f6f6;padding:%?8?% %?16?%;color:#bebebe;font-size:%?28?%}.spec_wrap .con .detail .num_wrap[data-v-16ee0094] uni-input{background-color:#f6f6f6;padding:%?3?% %?18?%!important;width:%?50?%;margin:0 %?6?%}',""]),t.exports=e},"938a":function(t,e,a){"use strict";a.r(e);var i=a("bb5a"),n=a("c79b");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1b91");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5644a2cd",null,!1,i["a"],r);e["default"]=c.exports},9742:function(t,e,a){"use strict";a.r(e);var i=a("c4e2"),n=a("651c");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("0d5a");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"9f72080e",null,!1,i["a"],r);e["default"]=c.exports},"97f0":function(t,e,a){"use strict";var i=a("dd3c"),n=a.n(i);n.a},9846:function(t,e,a){"use strict";a.r(e);var i=a("63df"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"9af3":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-314206d4]{background:#f5f5f5}.page_wrap .container[data-v-314206d4]{padding:%?10?% %?30?%;background-image:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg2.png);background-repeat:no-repeat;background-size:100% %?320?%;padding-top:%?80?%}.page_wrap .container .search_wrap[data-v-314206d4]{width:95%;background-color:#fff;text-align:center;border-radius:%?36?%;height:%?64?%;line-height:%?64?%;margin:%?10?% auto;color:#bbb;font-size:%?24?%}.page_wrap .container .search_wrap uni-text[data-v-314206d4]{margin-right:%?20?%}.page_wrap .container .notice[data-v-314206d4]{padding:%?4?% %?12?%;background-color:#fff9f3;border:1px solid #fdd3ad;border-radius:%?29?%;margin-top:%?30?%}.page_wrap .container .notice .msg_img[data-v-314206d4]{width:%?46?%;margin-right:%?30?%}.page_wrap .container .notice .notice_txt[data-v-314206d4]{font-size:%?24?%;color:#a2a2a2}.page_wrap .container .notice .notice_txt .time[data-v-314206d4]{color:#fe5108}.page_wrap .container .guess .guess_top[data-v-314206d4]{justify-content:center}.page_wrap .container .guess .guess_top .top_txt[data-v-314206d4]{color:#fe5b07;font-size:%?32?%;margin:0 %?30?%}.page_wrap .container .guess .guess_top .top_line[data-v-314206d4]{width:%?54?%;height:%?4?%}.page_wrap .container .guess .guess_top .left[data-v-314206d4]{background:linear-gradient(270deg,#ff6801,#fff)}.page_wrap .container .guess .guess_top .right[data-v-314206d4]{background:linear-gradient(270deg,#fff,#ff6801)}.product_list[data-v-314206d4]{position:relative;display:flex;flex-direction:row}.product_list .right_list[data-v-314206d4]{margin-left:%?20?%}.product_list .detail .list[data-v-314206d4]{width:%?294?%;background-color:#fff;padding:%?20?%;border-radius:%?10?%;align-items:baseline}',""]),t.exports=e},"9c9d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list_wrap[data-v-614307cd]{width:%?294?%}.img[data-v-614307cd]{width:%?250?%;height:%?180?%;margin:auto;display:block}.name[data-v-614307cd]{font-size:%?32?%;color:#333}.desc[data-v-614307cd]{font-size:%?24?%;color:#999}.label .l1[data-v-614307cd]{background:#fff4ed;padding:%?4?% %?8?%;color:#fe5b07;font-size:%?20?%;border-radius:%?8?%;margin-right:%?10?%}.spec .s_tit[data-v-614307cd]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);padding:%?4?% %?10?%;color:#fff;font-size:%?20?%;border-radius:2px 0 0 2px}.spec .s_detail[data-v-614307cd]{background:#fff4ed;padding:%?4?% %?10?%;color:#fe5b07;font-size:%?20?%}.price[data-v-614307cd]{justify-content:space-between;width:100%;position:relative}.price .p_wrap[data-v-614307cd]{display:flex;flex-direction:column}.price .p_detail[data-v-614307cd]{color:#fe5b07}.price .p_detail .p_left[data-v-614307cd]{font-size:%?16?%}.price .p_detail .p_right[data-v-614307cd]{font-size:%?32?%}.price .p_detail .p_right .unit[data-v-614307cd]{font-size:%?20?%}.price .show_more[data-v-614307cd]{color:#fe5b07;font-size:%?20?%;position:absolute;right:%?50?%}.price .show_more .iconfont[data-v-614307cd]{font-size:%?20?%}.price .add[data-v-614307cd]{width:%?44?%;height:%?44?%}.sale[data-v-614307cd]{padding:%?4?% %?10?%;color:#fe5b07;border:1px solid #fe5b07;font-size:%?20?%;border-radius:%?8?%;display:inline-block}',""]),t.exports=e},ae4a:function(t,e,a){var i=a("fece");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8a9bbcc8",i,!0,{sourceMap:!1,shadowMode:!1})},b2b4:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"list row model-wrap mt30"},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item column mt30",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toClass(e)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:e.categoryImage}}),a("v-uni-text",{staticClass:"name mt10"},[t._v(t._s(e.categoryName))])],1)})),1)},s=[]},b6aa:function(t,e,a){"use strict";var i=a("1b39"),n=a.n(i);n.a},bb5a:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"home-banner "},[a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,autoplay:!0,interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"item"},[a("v-uni-image",{staticClass:"pic",class:{current:t.current===i},attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2221182985,1875035766&fm=26&gp=0.jpg",mode:"aspectFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo(e.link)}}})],1)})),1),a("v-uni-view",{staticClass:"dots row "},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"dot",class:{current:t.current===i}})})),1)],1)},s=[]},bcaf:function(t,e,a){"use strict";var i=a("5718"),n=a.n(i);n.a},bf09:function(t,e,a){"use strict";a.r(e);var i=a("6522"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},c4e2:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"mix-page-header"},[a("v-uni-view",{staticClass:"content row",style:{paddingRight:t.headerPaddingRight+"px",paddingTop:t.statusBarHeight+"px",height:t.navigationBarHeight+t.statusBarHeight+"px",backgroundColor:t.bgColor}},[t.showAddress?a("v-uni-view",{staticClass:"btn center"},[a("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dizhi.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/Address/Address")}}})],1):t._e(),a("v-uni-view",{staticClass:"search-wrap center",style:{height:t.customHeight+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/Search/Search")}}},[a("v-uni-image",{staticClass:"search",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png",mode:"widthFix"}}),a("v-uni-text",[t._v("输入关键字搜索")])],1),t.showTel?a("v-uni-view",{staticClass:"btn center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scanCode.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dianhua.png",mode:"widthFix"}})],1):t._e()],1),t.showFillView?a("v-uni-view",{style:[{minHeight:t.navigationBarHeight+t.statusBarHeight+"px"}]}):t._e()],1)},s=[]},c580:function(t,e,a){"use strict";a.r(e);var i=a("b2b4"),n=a("55d6");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("5a25");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"0665ac33",null,!1,i["a"],r);e["default"]=c.exports},c79b:function(t,e,a){"use strict";a.r(e);var i=a("57e3"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},c827:function(t,e,a){"use strict";a.r(e);var i=a("e78a"),n=a("9846");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("ea91");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"73816174",null,!1,i["a"],r);e["default"]=c.exports},d36c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-73816174]{flex-wrap:wrap;justify-content:space-between}.list .item[data-v-73816174]{align-items:baseline;width:38.4%;background-color:#fff;padding:%?30?% %?40?%}.list .item .item_top .sign[data-v-73816174]{display:block;width:%?8?%;height:%?40?%;background-color:#ff6105;border-radius:%?8?%;margin-right:%?30?%}.list .item .item_top .title[data-v-73816174]{color:#2c2c2c;font-size:%?32?%;font-weight:600;margin-right:%?10?%}.list .item .item_top .more[data-v-73816174]{width:%?16?%}.list .item .item_center[data-v-73816174]{padding:%?4?% %?20?%;font-size:%?20?%;color:#999}.list .item .item_bottom[data-v-73816174]{padding:%?20?%}.list .item .item_bottom .img[data-v-73816174]{width:%?120?%;height:%?120?%;border-radius:%?12?%}.list .item .item_bottom .img[data-v-73816174]:first-child{margin-right:%?20?%}',""]),t.exports=e},d563:function(t,e,a){"use strict";a.r(e);var i=a("2826"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},d70f:function(t,e,a){var i=a("8f8e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d2a907a8",i,!0,{sourceMap:!1,shadowMode:!1})},d8f7:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={pageHeader:a("9742").default,screenTextScroll:a("34273").default,productList:a("617a").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("page-header",{attrs:{showAddress:!0,showTel:!0,showFillView:!1,bgColor:t.bgColor}}),a("v-uni-view",{staticClass:"bg"}),a("v-uni-view",{staticClass:"container"},[a("banner",{attrs:{list:t.banners}}),a("v-uni-view",{},[t.noticeList.length>0?a("v-uni-view",{staticClass:"notice row mt30"},[a("v-uni-image",{staticClass:"msg_img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/message.png",mode:"widthFix"}}),a("screenTextScroll",{attrs:{list:t.noticeList}})],1):t._e()],1),a("module1",{attrs:{list:t.typeList}}),a("module2",{attrs:{list:t.recommendList}}),a("module3",{attrs:{list:t.specialList}}),a("v-uni-view",{staticClass:"guess mt30"},[a("v-uni-view",{staticClass:"guess_top row"},[a("v-uni-text",{staticClass:"top_line left"}),a("v-uni-text",{staticClass:"top_txt"},[t._v("猜您喜欢")]),a("v-uni-text",{staticClass:"top_line right"})],1),a("v-uni-view",{staticClass:"product_list jc_sb"},t._l(t.likeList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"detail left_list"},t._l(e,(function(t,e){return a("v-uni-view",{key:e,staticClass:"list column mt20"},[a("product-list",{attrs:{goodInfo:t}})],1)})),1)})),1)],1)],1)],1)},s=[]},dd3c:function(t,e,a){var i=a("0acf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("bb457166",i,!0,{sourceMap:!1,shadowMode:!1})},e6671:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.home-banner[data-v-5644a2cd]{position:relative}.swiper[data-v-5644a2cd]{width:100%;height:%?310?%;padding-top:%?10?%}.pic[data-v-5644a2cd]{display:block;width:100%;height:100%;border-radius:%?16?%;-webkit-transform:scale(.94,.88);transform:scale(.94,.88);transition:-webkit-transform .36s;transition:transform .36s;transition:transform .36s,-webkit-transform .36s}.pic.current[data-v-5644a2cd]{-webkit-transform:scale(1);transform:scale(1)}.dots[data-v-5644a2cd]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-5644a2cd]{width:%?32?%;height:%?8?%;margin:0 %?6?%;background-color:#fff;border-radius:10px}.dot.current[data-v-5644a2cd]{background-color:#fe5b07}',""]),t.exports=e},e78a:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"list row "},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item column mt30",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pagesB/RecommendPage/RecommendPage?id="+e.id+"&pageType=recommend")}}},[a("v-uni-view",{staticClass:"item_top row"},[a("v-uni-text",{staticClass:"sign"}),a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.recommendName))]),a("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"item_center"},[t._v(t._s(e.remark||""))]),a("v-uni-view",{staticClass:"item_bottom row"},t._l(e.recommendProductinfoVoList,(function(t,e){return a("v-uni-image",{key:e,staticClass:"img",attrs:{src:t.defaultImage}})})),1)],1)})),1)},s=[]},ea91:function(t,e,a){"use strict";var i=a("6f4d"),n=a.n(i);n.a},ed5c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"HomePageHeader",data:function(){return{}},props:{showFillView:{type:Boolean,default:!0},bgColor:{type:String,default:"#fff"},showAddress:{type:Boolean,default:!1},showTel:{type:Boolean,default:!1}},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight},customWidth:function(){return this.systemInfo.custom.width},customHeight:function(){return this.systemInfo.custom.height},headerPaddingRight:function(){return 0}},methods:{scanCode:function(){uni.scanCode({success:function(t){var e=t.result;"string"!==typeof e||uni.navigateTo({url:"/pages/public/web-view?url="+e})}})}}};e.default=i},f025:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("fb6a"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("938a")),r=i(a("c580")),o=i(a("c827")),c=i(a("2d2b")),u={components:{banner:s.default,module1:r.default,module2:o.default,module3:c.default},data:function(){return{bgColor:"transparent",banners:[],typeList:[],specialList:[],recommendList:[],noticeList:[],likeList:[],pageType:"Home"}},onPageScroll:function(t){t.scrollTop>50?this.bgColor="#FF6105":this.bgColor="transparent"},onLoad:function(){this.getBanner()},onShow:function(){this.dataList=[],uni.getStorageSync("token")&&this.getLike()},methods:{getBanner:function(){var t=this;this.$http("index/getBannerList",{displayPosition:1}).then((function(e){t.banners=e,t.getTypeList(),t.getRecommentList(),t.getSpecialList(),t.getNotice()}))},getTypeList:function(){var t=this;this.$http("index/getProductTypeGroupingList").then((function(e){t.typeList=e}))},getRecommentList:function(){var t=this;this.$http("index/getBMallRecommendList",{recommendTypeId:2}).then((function(e){t.recommendList=e}))},getSpecialList:function(){var t=this;this.$http("index/getSpecialList").then((function(e){for(var a=[],i=0,n=e.length;i<n;i+=6)a.push(e.slice(i,i+6));t.specialList=a}))},getNotice:function(){var t=this;this.$http("index/getCustomerNoticeRollingList").then((function(e){t.noticeList=e}))},getLike:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.queryUrl="api/myOneslft/getFavoriteProductPage",e.next=3,t.getList();case 3:a=e.sent,i=[],n=[],a.forEach((function(t,e){(e+1)%2==1?i.push(t):n.push(t)})),t.likeList=[i,n];case 8:case"end":return e.stop()}}),e)})))()}}};e.default=u},fc31:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={specifications:a("6f536").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"list_wrap"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.goodInfo.defaultImage},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/ProductDetail/ProductDetail?id="+t.goodInfo.productId+"&skuId="+t.goodInfo.productSkuList[0].productSkuId)}}}),a("v-uni-view",{staticClass:"name mt10"},[t._v(t._s(t.goodInfo.productName))]),t.goodInfo.productTag?a("v-uni-view",{staticClass:"label mt10 row"},[a("v-uni-text",{staticClass:"l1"},[t._v(t._s(t.goodInfo.productTag))])],1):t._e(),t.goodInfo.productModelList.length>1?a("v-uni-view",{staticClass:"spec mt10 row"},[a("v-uni-text",{staticClass:"s_tit"},[t._v("规格")]),a("v-uni-text",{staticClass:"s_detail"},[t._v(t._s(t.goodInfo.productModelList.join("/")))])],1):t._e(),a("v-uni-view",{staticClass:"price row mt20"},[a("v-uni-view",{staticClass:"p_wrap"},[a("v-uni-text",{staticClass:"p_detail"},[a("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),a("v-uni-text",{staticClass:"p_right"},[t._v(t._s(t.goodInfo.productSkuList[0].unitPrice)),a("v-uni-text",{staticClass:"unit"},[t._v("/"+t._s(t.goodInfo.productSkuList[0].productUnit))])],1)],1),t.showMore?t._e():a("v-uni-view",{staticClass:"sale "},[t._v("满100减10")])],1),t.goodInfo.productSkuList.length>1?a("v-uni-text",{staticClass:"show_more row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moreHandle.apply(void 0,arguments)}}},[t._v(t._s(t.showMore?"收起":"展开")),a("v-uni-text",{staticClass:"iconfont ",class:t.moreIcon})],1):t._e(),a("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addGood("")}}})],1),t.showMore?t._l(t.goodInfo.productSkuList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"price row mt20"},[i>0?[a("v-uni-text",{staticClass:"p_detail"},[a("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),a("v-uni-text",{staticClass:"p_right"},[t._v(t._s(e.unitPrice)),a("v-uni-text",{staticClass:"unit"},[t._v("/"+t._s(e.productUnit))])],1)],1),a("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addGood(e)}}})]:t._e()],2)})):t._e(),a("specifications",{ref:"spec",attrs:{selectData:t.selectData}})],2)},s=[]},fece:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-0665ac33]{flex-wrap:wrap;padding:0 %?30?% %?30?% %?30?%}.list .item[data-v-0665ac33]{width:%?126?%;color:#999;font-size:%?24?%;border-radius:%?10?%}.list .item .img[data-v-0665ac33]{width:%?100?%;height:%?100?%;border-radius:%?8?%}',""]),t.exports=e}}]);