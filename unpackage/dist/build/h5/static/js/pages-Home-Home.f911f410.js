(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Home-Home"],{"0acf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */._notice[data-v-11bc15b4]{width:%?500?%;font-size:%?20?%;height:%?44?%;color:#666;border-radius:%?6?%;overflow:hidden;box-sizing:border-box}.swiper-item[data-v-11bc15b4]{width:%?500?%!important;margin-right:%?20?%}._swiper[data-v-11bc15b4]{line-height:%?44?%;height:%?50?%}',""]),t.exports=e},"0d5a":function(t,e,i){"use strict";var a=i("143b"),n=i.n(a);n.a},"13d7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={specifications:i("6f536").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/ProductDetail/ProductDetail")}}}),i("v-uni-view",{staticClass:"name mt10"},[t._v(t._s(t.goodInfo.productName))]),i("v-uni-view",{staticClass:"desc  mt10"},[t._v("¥20.00/盒子（一盒约2斤）")]),i("v-uni-view",{staticClass:"label mt10 row"},[i("v-uni-text",{staticClass:"l1"},[t._v("新品上市")]),i("v-uni-text",{staticClass:"l1"},[t._v("今日特价")])],1),i("v-uni-view",{staticClass:"spec mt10 row"},[i("v-uni-text",{staticClass:"s_tit"},[t._v("规格")]),i("v-uni-text",{staticClass:"s_detail"},[t._v("5斤/10斤/15斤")])],1),i("v-uni-view",{staticClass:"price row mt20"},[i("v-uni-view",{staticClass:"p_wrap"},[i("v-uni-text",{staticClass:"p_detail"},[i("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),i("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),i("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),t.showMore?t._e():i("v-uni-view",{staticClass:"sale "},[t._v("满100减10")])],1),i("v-uni-text",{staticClass:"show_more row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moreHandle.apply(void 0,arguments)}}},[t._v(t._s(t.showMore?"收起":"展开")),i("v-uni-text",{staticClass:"iconfont ",class:t.moreIcon})],1),i("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addGood.apply(void 0,arguments)}}})],1),t.showMore?[i("v-uni-view",{staticClass:"price row mt20"},[i("v-uni-text",{staticClass:"p_detail"},[i("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),i("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),i("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),i("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"price row mt20"},[i("v-uni-text",{staticClass:"p_detail"},[i("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),i("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),i("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),i("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"price row mt20"},[i("v-uni-text",{staticClass:"p_detail"},[i("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),i("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),i("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),i("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1)]:t._e(),i("specifications",{ref:"spec"})],2)},s=[]},"143b":function(t,e,i){var a=i("6f4c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c08c253c",a,!0,{sourceMap:!1,shadowMode:!1})},"16d7":function(t,e,i){var a=i("5f74");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("131ceea8",a,!0,{sourceMap:!1,shadowMode:!1})},"1b91":function(t,e,i){"use strict";var a=i("77cd"),n=i.n(a);n.a},2038:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{styleType:{type:String,default:""},goodInfo:{type:Object,default:function(){return{}}}},data:function(){return{moreIcon:"icon-zhankai",showMore:!1}},methods:{moreHandle:function(){this.showMore=!this.showMore,this.moreIcon=this.showMore?"icon-shang":"icon-zhankai"},addGood:function(){this.$util.isLogin()&&(this.$refs.spec.show=!0)}}};e.default=a},2826:function(t,e,i){"use strict";i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{pid:"0",info:{type:Object,default:function(){return{}}},selectPrice:{type:Object,default:function(){return{}}}},data:function(){return{show:!1,num:1,remark:"",img:""}},watch:{info:function(t){this.img=t.productImageVoList.map((function(t){if(t.main)return t.imageUrl}))}},methods:{changNum:function(t){1==t&&this.num>1?this.num--:2==t&&this.num++},add:function(){var t=this;this.$http("api/bmallshoppingcart/addShoppingCart",{buyQuantity:this.num,productSkuId:this.selectPrice.productSkuId,remark:this.remark},"post").then((function(e){uni.showToast({title:"添加成功",icon:"none"}),setTimeout((function(){t.show=!1}),1500)}))}}};e.default=a},"2c9a":function(t,e,i){var a=i("a417");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d9192c7c",a,!0,{sourceMap:!1,shadowMode:!1})},"2d2b":function(t,e,i){"use strict";i.r(e);var a=i("7996"),n=i("bf09");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8b6a");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5d9dab6b",null,!1,a["a"],r);e["default"]=o.exports},"2de4":function(t,e,i){"use strict";i.r(e);var a=i("f025"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},34273:function(t,e,i){"use strict";i.r(e);var a=i("5784"),n=i("8949");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("97f0");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"11bc15b4",null,!1,a["a"],r);e["default"]=o.exports},"38a7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.module-wrap[data-v-5d9dab6b]{height:%?540?%;background:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg1.png) no-repeat;background-size:100% 100%;padding:%?30?%;position:relative}.module-wrap .title[data-v-5d9dab6b]{justify-content:space-between}.module-wrap .title .txt[data-v-5d9dab6b]{color:#ff6423}.module-wrap .title .more_r[data-v-5d9dab6b]{color:#7e7e7e;font-size:%?20?%;margin-right:%?10?%}.module-wrap .title .more[data-v-5d9dab6b]{width:%?12?%;margin-left:%?10?%}.module-wrap .swiper[data-v-5d9dab6b]{height:100%}.module-wrap .swiper .swiper_item .list[data-v-5d9dab6b]{flex-wrap:wrap}.module-wrap .swiper .swiper_item .list .item[data-v-5d9dab6b]{margin-right:%?15?%}.module-wrap .swiper .swiper_item .list .item[data-v-5d9dab6b]:nth-child(3n){margin-right:0}.module-wrap .swiper .swiper_item .list .img[data-v-5d9dab6b]{width:%?200?%;height:%?200?%;border-radius:%?8?%}.dots[data-v-5d9dab6b]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-5d9dab6b]{width:%?12?%;height:%?12?%;margin:0 %?6?%;background-color:#fff;border-radius:50%}.dot.current[data-v-5d9dab6b]{background-color:#fe5b07}',""]),t.exports=e},4742:function(t,e,i){"use strict";var a=i("5bd1"),n=i.n(a);n.a},"4d4d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=a},"536b":function(t,e,i){var a=i("38a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("75dbe6bc",a,!0,{sourceMap:!1,shadowMode:!1})},"55ca":function(t,e,i){"use strict";i.r(e);var a=i("2038"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"55d6":function(t,e,i){"use strict";i.r(e);var a=i("4d4d"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},5784:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_notice"},[i("v-uni-swiper",{staticClass:"_swiper",attrs:{"indicator-dots":!1,autoplay:"true",interval:t.interval,circular:!0,duration:t.duration}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesB/NoticeInfo/NoticeInfo?id="+e.id)}}},[i("v-uni-view",{staticClass:" uni-bg-red"},[t._v(t._s(e.noteTitle))])],1)})),1)],1)},s=[]},"57e3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}}},name:"HomeBanner",data:function(){return{current:0}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};e.default=a},5889:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,defual:function(){return[]}}},data:function(){return{interval:3e3,duration:12e3}},methods:{}};e.default=a},"5bd1":function(t,e,i){var a=i("fffe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("49e97271",a,!0,{sourceMap:!1,shadowMode:!1})},"5cb0":function(t,e,i){var a=i("d3c1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0d9414e6",a,!0,{sourceMap:!1,shadowMode:!1})},"5f74":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-1a848e53]{flex-wrap:wrap;padding:0 %?30?% %?30?% %?30?%}.list .item[data-v-1a848e53]{width:%?126?%;color:#999;font-size:%?24?%;border-radius:%?10?%}.list .item .img[data-v-1a848e53]{width:%?100?%;height:%?100?%;border-radius:%?8?%}',""]),t.exports=e},"617a":function(t,e,i){"use strict";i.r(e);var a=i("13d7"),n=i("55ca");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("620c");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"f8d3269a",null,!1,a["a"],r);e["default"]=o.exports},"620c":function(t,e,i){"use strict";var a=i("5cb0"),n=i.n(a);n.a},"63df":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{}};e.default=a},"651c":function(t,e,i){"use strict";i.r(e);var a=i("ed5c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},6522:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{current:0}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};e.default=a},"6f4c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-9f72080e]{position:fixed;left:0;top:0;z-index:95;width:100%;background-color:#fff}.btn[data-v-9f72080e]{width:44px;height:40px;position:relative}.btn .mix-icon[data-v-9f72080e]{font-size:20px;color:#333}.btn .dizhi[data-v-9f72080e]{width:%?34?%}.btn .msg[data-v-9f72080e]{position:absolute;right:7px;top:5px;width:12px;height:12px;background-color:#f5f5f5;border:2px solid #fff;border-radius:100px;opacity:0}.btn .msg.show[data-v-9f72080e]{opacity:1}.center[data-v-9f72080e]{display:flex;align-items:center;justify-content:center}.search-wrap[data-v-9f72080e]{flex:1;font-size:14px;color:#999;border-radius:100px;background-color:#f2f2f2}.search-wrap .search[data-v-9f72080e]{width:%?30?%;margin-right:%?20?%}.search-wrap .icon-sousuo[data-v-9f72080e]{margin-right:6px;font-size:18px;color:#999}',""]),t.exports=e},"6f4d":function(t,e,i){var a=i("d36c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("58a1a63c",a,!0,{sourceMap:!1,shadowMode:!1})},"6f536":function(t,e,i){"use strict";i.r(e);var a=i("e750"),n=i("d563");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("924f");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0f011330",null,!1,a["a"],r);e["default"]=o.exports},"77cd":function(t,e,i){var a=i("e6671");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e8e29ed8",a,!0,{sourceMap:!1,shadowMode:!1})},7996:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"module-wrap mt30"},[i("v-uni-view",{staticClass:"row title"},[i("v-uni-text",{staticClass:"txt"},[t._v("品牌专场")]),i("v-uni-view",{staticClass:"more_r row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/AllBrand/AllBrand")}}},[t._v("更多"),i("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1)],1),i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper_item"},[i("v-uni-view",{staticClass:"list row"},t._l(e,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item mt20",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesB/RecommendPage/RecommendPage?id="+e.id+"&pageType=spec")}}},[i("v-uni-image",{staticClass:"img",attrs:{src:e.specialImage}})],1)})),1)],1)})),1),i("v-uni-view",{staticClass:"dots row "},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"dot",class:{current:t.current===a}})})),1)],1)},s=[]},"84fc":function(t,e,i){"use strict";i.r(e);var a=i("f7ee"),n=i("2de4");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4742");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"61c7941c",null,!1,a["a"],r);e["default"]=o.exports},"86b2":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"list row model-wrap mt30"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item column mt30"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.categoryImage}}),i("v-uni-text",{staticClass:"name mt10"},[t._v(t._s(e.categoryName))])],1)})),1)},s=[]},8949:function(t,e,i){"use strict";i.r(e);var a=i("5889"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"8b6a":function(t,e,i){"use strict";var a=i("536b"),n=i.n(a);n.a},"924f":function(t,e,i){"use strict";var a=i("2c9a"),n=i.n(a);n.a},"938a":function(t,e,i){"use strict";i.r(e);var a=i("bb5a"),n=i("c79b");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1b91");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5644a2cd",null,!1,a["a"],r);e["default"]=o.exports},9742:function(t,e,i){"use strict";i.r(e);var a=i("c4e2"),n=i("651c");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("0d5a");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"9f72080e",null,!1,a["a"],r);e["default"]=o.exports},"97f0":function(t,e,i){"use strict";var a=i("dd3c"),n=i.n(a);n.a},9846:function(t,e,i){"use strict";i.r(e);var a=i("63df"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},a417:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.spec_wrap .con[data-v-0f011330]{padding:%?30?%}.spec_wrap .con .info[data-v-0f011330]{justify-content:center;margin-bottom:%?120?%}.spec_wrap .con .info uni-image[data-v-0f011330]{margin-right:%?30?%;width:%?172?%;height:%?172?%}.spec_wrap .con .detail[data-v-0f011330]{padding:%?30?%;border-top:1px solid #eee}.spec_wrap .con .detail .num_wrap uni-text[data-v-0f011330]{background-color:#f6f6f6;padding:%?8?% %?16?%;color:#bebebe;font-size:%?28?%}.spec_wrap .con .detail .num_wrap[data-v-0f011330] uni-input{background-color:#f6f6f6;padding:%?3?% %?18?%!important;width:%?50?%;margin:0 %?6?%}',""]),t.exports=e},bb5a:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home-banner "},[i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,autoplay:!0,interval:"5000"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"item"},[i("v-uni-image",{staticClass:"pic",class:{current:t.current===a},attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2221182985,1875035766&fm=26&gp=0.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo(e.link)}}})],1)})),1),i("v-uni-view",{staticClass:"dots row "},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"dot",class:{current:t.current===a}})})),1)],1)},s=[]},bf09:function(t,e,i){"use strict";i.r(e);var a=i("6522"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},bffb:function(t,e,i){"use strict";var a=i("16d7"),n=i.n(a);n.a},c4e2:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mix-page-header"},[i("v-uni-view",{staticClass:"content row",style:{paddingRight:t.headerPaddingRight+"px",paddingTop:t.statusBarHeight+"px",height:t.navigationBarHeight+t.statusBarHeight+"px",backgroundColor:t.bgColor}},[t.showAddress?i("v-uni-view",{staticClass:"btn center"},[i("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dizhi.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/Address/Address")}}})],1):t._e(),i("v-uni-view",{staticClass:"search-wrap center",style:{height:t.customHeight+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pagesB/Search/Search")}}},[i("v-uni-image",{staticClass:"search",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png",mode:"widthFix"}}),i("v-uni-text",[t._v("输入关键字搜索")])],1),t.showTel?i("v-uni-view",{staticClass:"btn center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scanCode.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dianhua.png",mode:"widthFix"}})],1):t._e()],1),t.showFillView?i("v-uni-view",{style:[{minHeight:t.navigationBarHeight+t.statusBarHeight+"px"}]}):t._e()],1)},s=[]},c580:function(t,e,i){"use strict";i.r(e);var a=i("86b2"),n=i("55d6");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("bffb");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1a848e53",null,!1,a["a"],r);e["default"]=o.exports},c79b:function(t,e,i){"use strict";i.r(e);var a=i("57e3"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},c827:function(t,e,i){"use strict";i.r(e);var a=i("e78a"),n=i("9846");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("ea91");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"73816174",null,!1,a["a"],r);e["default"]=o.exports},d36c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-73816174]{flex-wrap:wrap;justify-content:space-between}.list .item[data-v-73816174]{align-items:baseline;width:38.4%;background-color:#fff;padding:%?30?% %?40?%}.list .item .item_top .sign[data-v-73816174]{display:block;width:%?8?%;height:%?40?%;background-color:#ff6105;border-radius:%?8?%;margin-right:%?30?%}.list .item .item_top .title[data-v-73816174]{color:#2c2c2c;font-size:%?32?%;font-weight:600;margin-right:%?10?%}.list .item .item_top .more[data-v-73816174]{width:%?16?%}.list .item .item_center[data-v-73816174]{padding:%?4?% %?20?%;font-size:%?20?%;color:#999}.list .item .item_bottom[data-v-73816174]{padding:%?20?%}.list .item .item_bottom .img[data-v-73816174]{width:%?120?%;height:%?120?%;border-radius:%?12?%}.list .item .item_bottom .img[data-v-73816174]:first-child{margin-right:%?20?%}',""]),t.exports=e},d3c1:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.img[data-v-f8d3269a]{width:%?250?%;height:%?180?%;margin:auto;display:block}.name[data-v-f8d3269a]{font-size:%?32?%;color:#333}.desc[data-v-f8d3269a]{font-size:%?24?%;color:#999}.label .l1[data-v-f8d3269a]{background:#fff4ed;padding:%?4?% %?8?%;color:#fe5b07;font-size:%?20?%;border-radius:%?8?%;margin-right:%?10?%}.spec .s_tit[data-v-f8d3269a]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);padding:%?4?% %?10?%;color:#fff;font-size:%?20?%;border-radius:2px 0 0 2px}.spec .s_detail[data-v-f8d3269a]{background:#fff4ed;padding:%?4?% %?10?%;color:#fe5b07;font-size:%?20?%}.price[data-v-f8d3269a]{justify-content:space-between;width:100%;position:relative}.price .p_wrap[data-v-f8d3269a]{display:flex;flex-direction:column}.price .p_detail[data-v-f8d3269a]{color:#fe5b07}.price .p_detail .p_left[data-v-f8d3269a]{font-size:%?16?%}.price .p_detail .p_right[data-v-f8d3269a]{font-size:%?32?%}.price .p_detail .p_right .unit[data-v-f8d3269a]{font-size:%?20?%}.price .show_more[data-v-f8d3269a]{color:#fe5b07;font-size:%?20?%;position:absolute;right:%?50?%}.price .show_more .iconfont[data-v-f8d3269a]{font-size:%?20?%}.price .add[data-v-f8d3269a]{width:%?44?%}.sale[data-v-f8d3269a]{padding:%?4?% %?10?%;color:#fe5b07;border:1px solid #fe5b07;font-size:%?20?%;border-radius:%?8?%;display:inline-block}',""]),t.exports=e},d563:function(t,e,i){"use strict";i.r(e);var a=i("2826"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},dd3c:function(t,e,i){var a=i("0acf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("bb457166",a,!0,{sourceMap:!1,shadowMode:!1})},e6671:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.home-banner[data-v-5644a2cd]{position:relative}.swiper[data-v-5644a2cd]{width:100%;height:%?310?%;padding-top:%?10?%}.pic[data-v-5644a2cd]{display:block;width:100%;height:100%;border-radius:%?16?%;-webkit-transform:scale(.94,.88);transform:scale(.94,.88);transition:-webkit-transform .36s;transition:transform .36s;transition:transform .36s,-webkit-transform .36s}.pic.current[data-v-5644a2cd]{-webkit-transform:scale(1);transform:scale(1)}.dots[data-v-5644a2cd]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-5644a2cd]{width:%?32?%;height:%?8?%;margin:0 %?6?%;background-color:#fff;border-radius:10px}.dot.current[data-v-5644a2cd]{background-color:#fe5b07}',""]),t.exports=e},e750:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uPopup:i("cbea").default,uInput:i("5e42").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"spec_wrap"},[i("u-popup",{attrs:{show:t.show,closeable:!0,mode:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"info row"},[i("v-uni-image",{attrs:{src:t.img[0],mode:"widthFix"}}),i("v-uni-view",{},[i("v-uni-text",{staticClass:"f32-c333 mr20"},[t._v(t._s(t.info.productName))]),i("v-uni-text",{staticClass:"f24-c999 mt10"},[t._v(t._s(t.selectPrice.productModel))])],1)],1),i("v-uni-view",{staticClass:"detail row jc_sb"},[i("v-uni-text",{staticClass:"f28-c333"},[t._v("结算单位")]),i("v-uni-text",{staticClass:"f28-c999"},[t._v(t._s(t.selectPrice.productUnit))])],1),i("v-uni-view",{staticClass:"detail row jc_sb"},[i("v-uni-text",{staticClass:"f28-c333"},[t._v("数量")]),i("v-uni-view",{staticClass:"num_wrap row"},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(1)}}},[t._v("-")]),i("u-input",{attrs:{border:"none",type:"text"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changNum(2)}}},[t._v("+")])],1)],1),i("v-uni-view",{staticClass:"detail jc_sb row"},[i("u-input",{attrs:{placeholder:"请输入备注",border:"none"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}},[i("template",{slot:"prefix"},[i("v-uni-text",{staticClass:"label f28-c333"},[t._v("备注")])],1)],2)],1),i("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},s=[]},e78a:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"list row "},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item column mt30",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pagesB/RecommendPage/RecommendPage?id="+e.id+"&pageType=recommend")}}},[i("v-uni-view",{staticClass:"item_top row"},[i("v-uni-text",{staticClass:"sign"}),i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.recommendName))]),i("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"item_center"},[t._v(t._s(e.remark||""))]),i("v-uni-view",{staticClass:"item_bottom row"},t._l(e.recommendProductinfoVoList,(function(t,e){return i("v-uni-image",{key:e,staticClass:"img",attrs:{src:t.defaultImage}})})),1)],1)})),1)},s=[]},ea91:function(t,e,i){"use strict";var a=i("6f4d"),n=i.n(a);n.a},ed5c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"HomePageHeader",data:function(){return{}},props:{showFillView:{type:Boolean,default:!0},bgColor:{type:String,default:"#fff"},showAddress:{type:Boolean,default:!1},showTel:{type:Boolean,default:!1}},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight},customWidth:function(){return this.systemInfo.custom.width},customHeight:function(){return this.systemInfo.custom.height},headerPaddingRight:function(){return 0}},methods:{scanCode:function(){uni.scanCode({success:function(t){var e=t.result;"string"!==typeof e||uni.navigateTo({url:"/pages/public/web-view?url="+e})}})}}};e.default=a},f025:function(t,e,i){"use strict";var a=i("4ea4");i("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("938a")),s=a(i("c580")),r=a(i("c827")),c=a(i("2d2b")),o={components:{banner:n.default,module1:s.default,module2:r.default,module3:c.default},data:function(){return{bgColor:"transparent",banners:[],typeList:[],specialList:[],recommendList:[],noticeList:[],pageType:"Home"}},onPageScroll:function(t){t.scrollTop>50?this.bgColor="#FF6105":this.bgColor="transparent"},onLoad:function(){this.getBanner()},methods:{getBanner:function(){var t=this;this.$http("index/getBannerList",{displayPosition:1}).then((function(e){t.banners=e,t.getTypeList(),t.getRecommentList(),t.getSpecialList(),t.getNotice(),t.getLike()}))},getTypeList:function(){var t=this;this.$http("index/getProductTypeGroupingList").then((function(e){t.typeList=e}))},getRecommentList:function(){var t=this;this.$http("index/getBMallRecommendList",{recommendTypeId:2}).then((function(e){t.recommendList=e}))},getSpecialList:function(){var t=this;this.$http("index/getSpecialList").then((function(e){for(var i=[],a=0,n=e.length;a<n;a+=6)i.push(e.slice(a,a+6));t.specialList=i}))},getNotice:function(){var t=this;this.$http("index/getCustomerNoticeRollingList").then((function(e){t.noticeList=e}))},getLike:function(){this.queryUrl="api/myOneslft/getFavoriteProductPage",this.getList()}}};e.default=o},f7ee:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={pageHeader:i("9742").default,screenTextScroll:i("34273").default,productList:i("617a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page_wrap"},[i("page-header",{attrs:{showAddress:!0,showTel:!0,showFillView:!1,bgColor:t.bgColor}}),i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"container"},[i("banner",{attrs:{list:t.banners}}),i("v-uni-view",{},[t.noticeList.length>0?i("v-uni-view",{staticClass:"notice row mt30"},[i("v-uni-image",{staticClass:"msg_img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/message.png",mode:"widthFix"}}),i("screenTextScroll",{attrs:{list:t.noticeList}})],1):t._e()],1),i("module1",{attrs:{list:t.typeList}}),i("module2",{attrs:{list:t.recommendList}}),i("module3",{attrs:{list:t.specialList}}),i("v-uni-view",{staticClass:"guess mt30"},[i("v-uni-view",{staticClass:"guess_top row"},[i("v-uni-text",{staticClass:"top_line left"}),i("v-uni-text",{staticClass:"top_txt"},[t._v("猜您喜欢")]),i("v-uni-text",{staticClass:"top_line right"})],1),i("v-uni-view",{staticClass:"product_list "},[i("v-uni-view",{staticClass:"detail left_list"},t._l(3,(function(t,e){return i("v-uni-view",{key:e,staticClass:"list column mt20"},[i("product-list")],1)})),1),i("v-uni-view",{staticClass:"detail right_list"},t._l(3,(function(t,e){return i("v-uni-view",{key:e,staticClass:"list column mt20"},[i("product-list")],1)})),1)],1)],1)],1)],1)},s=[]},fffe:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-61c7941c]{background:#f5f5f5}.page_wrap .container[data-v-61c7941c]{padding:%?10?% %?30?%;background-image:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg2.png);background-repeat:no-repeat;background-size:100% %?320?%;padding-top:%?80?%}.page_wrap .container .search_wrap[data-v-61c7941c]{width:95%;background-color:#fff;text-align:center;border-radius:%?36?%;height:%?64?%;line-height:%?64?%;margin:%?10?% auto;color:#bbb;font-size:%?24?%}.page_wrap .container .search_wrap uni-text[data-v-61c7941c]{margin-right:%?20?%}.page_wrap .container .notice[data-v-61c7941c]{padding:%?4?% %?12?%;background-color:#fff9f3;border:1px solid #fdd3ad;border-radius:%?29?%;margin-top:%?30?%}.page_wrap .container .notice .msg_img[data-v-61c7941c]{width:%?46?%;margin-right:%?30?%}.page_wrap .container .notice .notice_txt[data-v-61c7941c]{font-size:%?24?%;color:#a2a2a2}.page_wrap .container .notice .notice_txt .time[data-v-61c7941c]{color:#fe5108}.page_wrap .container .guess .guess_top[data-v-61c7941c]{justify-content:center}.page_wrap .container .guess .guess_top .top_txt[data-v-61c7941c]{color:#fe5b07;font-size:%?32?%;margin:0 %?30?%}.page_wrap .container .guess .guess_top .top_line[data-v-61c7941c]{width:%?54?%;height:%?4?%}.page_wrap .container .guess .guess_top .left[data-v-61c7941c]{background:linear-gradient(270deg,#ff6801,#fff)}.page_wrap .container .guess .guess_top .right[data-v-61c7941c]{background:linear-gradient(270deg,#fff,#ff6801)}.product_list[data-v-61c7941c]{position:relative;display:flex;flex-direction:row}.product_list .right_list[data-v-61c7941c]{margin-left:%?20?%}.product_list .detail .list[data-v-61c7941c]{width:%?294?%;background-color:#fff;padding:%?20?%;border-radius:%?10?%;align-items:baseline}',""]),t.exports=e}}]);