(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Home-Home"],{"0698":function(t,a,e){var i=e("4959");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2b8b4576",i,!0,{sourceMap:!1,shadowMode:!1})},2038:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{styleType:{type:String,default:""},goodInfo:{}},data:function(){return{moreIcon:"icon-zhankai",showMore:!1}},methods:{moreHandle:function(){this.showMore=!this.showMore,this.moreIcon=this.showMore?"icon-shang":"icon-zhankai"},addGood:function(){this.$refs.spec.show=!0}}};a.default=i},"221b":function(t,a,e){"use strict";var i=e("0698"),n=e.n(i);n.a},2826:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{show:!1,num:1,remark:""}},methods:{changNum:function(t){1==t&&this.num>1?this.num--:2==t&&this.num++},add:function(){}}};a.default=i},2855:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={specifications:e("6f536").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/ProductDetail/ProductDetail","","id=1")}}}),e("v-uni-view",{staticClass:"name mt10"},[t._v("名称")]),e("v-uni-view",{staticClass:"desc  mt10"},[t._v("¥20.00/盒子（一盒约2斤）")]),e("v-uni-view",{staticClass:"label mt10 row"},[e("v-uni-text",{staticClass:"l1"},[t._v("新品上市")]),e("v-uni-text",{staticClass:"l1"},[t._v("今日特价")])],1),e("v-uni-view",{staticClass:"spec mt10 row"},[e("v-uni-text",{staticClass:"s_tit"},[t._v("规格")]),e("v-uni-text",{staticClass:"s_detail"},[t._v("5斤/10斤/15斤")])],1),e("v-uni-view",{staticClass:"price row mt20"},[e("v-uni-view",{staticClass:"p_wrap"},[e("v-uni-text",{staticClass:"p_detail"},[e("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),e("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),e("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),t.showMore?t._e():e("v-uni-view",{staticClass:"sale "},[t._v("满100减10")])],1),e("v-uni-text",{staticClass:"show_more row",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.moreHandle.apply(void 0,arguments)}}},[t._v(t._s(t.showMore?"收起":"展开")),e("v-uni-text",{staticClass:"iconfont ",class:t.moreIcon})],1),e("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addGood.apply(void 0,arguments)}}})],1),t.showMore?[e("v-uni-view",{staticClass:"price row mt20"},[e("v-uni-text",{staticClass:"p_detail"},[e("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),e("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),e("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),e("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"price row mt20"},[e("v-uni-text",{staticClass:"p_detail"},[e("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),e("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),e("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),e("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"price row mt20"},[e("v-uni-text",{staticClass:"p_detail"},[e("v-uni-text",{staticClass:"p_left"},[t._v("¥")]),e("v-uni-text",{staticClass:"p_right"},[t._v("10.00"),e("v-uni-text",{staticClass:"unit"},[t._v("/斤")])],1)],1),e("v-uni-image",{staticClass:"add",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png",mode:"widthFix"}})],1)]:t._e(),e("specifications",{ref:"spec"})],2)},s=[]},"2d2b":function(t,a,e){"use strict";e.r(a);var i=e("499c"),n=e("bf09");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("eeda");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"7d6da2d4",null,!1,i["a"],r);a["default"]=c.exports},"2de4":function(t,a,e){"use strict";e.r(a);var i=e("f025"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"40c0":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-49a611ab]{flex-wrap:wrap;justify-content:space-between}.list .item[data-v-49a611ab]{align-items:baseline;width:38.4%;background-color:#fff;padding:%?30?% %?40?%}.list .item .item_top .sign[data-v-49a611ab]{display:block;width:%?8?%;height:%?40?%;background-color:#ff6105;border-radius:%?8?%;margin-right:%?30?%}.list .item .item_top .title[data-v-49a611ab]{color:#2c2c2c;font-size:%?32?%;font-weight:600;margin-right:%?10?%}.list .item .item_top .more[data-v-49a611ab]{width:%?16?%}.list .item .item_center[data-v-49a611ab]{padding:%?4?% %?20?%;font-size:%?20?%;color:#999}.list .item .item_bottom[data-v-49a611ab]{padding:%?20?%}.list .item .item_bottom .img[data-v-49a611ab]{width:%?120?%;height:%?120?%;border-radius:%?12?%}.list .item .item_bottom .img[data-v-49a611ab]:first-child{margin-right:%?20?%}',""]),t.exports=a},4115:function(t,a,e){var i=e("5824");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0f5e4d2c",i,!0,{sourceMap:!1,shadowMode:!1})},4668:function(t,a,e){var i=e("40c0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2f579f30",i,!0,{sourceMap:!1,shadowMode:!1})},4959:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.spec_wrap .con[data-v-02dbf2ca]{padding:%?30?%}.spec_wrap .con .info[data-v-02dbf2ca]{justify-content:center;margin-bottom:%?120?%}.spec_wrap .con .info uni-image[data-v-02dbf2ca]{margin-right:%?30?%;width:%?172?%;height:%?172?%}.spec_wrap .con .detail[data-v-02dbf2ca]{padding:%?30?%;border-top:1px solid #eee}.spec_wrap .con .detail .num_wrap uni-text[data-v-02dbf2ca]{background-color:#f6f6f6;padding:%?8?% %?16?%;color:#bebebe;font-size:%?28?%}.spec_wrap .con .detail .num_wrap[data-v-02dbf2ca] uni-input{background-color:#f6f6f6;padding:%?3?% %?18?%!important;width:%?50?%;margin:0 %?6?%}',""]),t.exports=a},"499c":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"module-wrap mt30"},[e("v-uni-view",{staticClass:"row title"},[e("v-uni-text",{staticClass:"txt"},[t._v("品牌专场")]),e("v-uni-view",{staticClass:"more_r"},[t._v("更多"),e("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1)],1),e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,interval:"5000"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.onSwiperChange.apply(void 0,arguments)}}},t._l(2,(function(a,i){return e("v-uni-swiper-item",{key:i,staticClass:"swiper_item"},[e("v-uni-view",{staticClass:"list row"},t._l(6,(function(t,a){return e("v-uni-view",{key:a,staticClass:"item mt20"},[e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"}})],1)})),1)],1)})),1),e("v-uni-view",{staticClass:"dots row "},t._l(2,(function(a,i){return e("v-uni-view",{key:i,staticClass:"dot",class:{current:t.current===i}})})),1)],1)},s=[]},"4d4d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{}}};a.default=i},"5319d":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"list row model-wrap mt30"},t._l(10,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item column mt30"},[e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"}}),e("v-uni-text",{staticClass:"name"},[t._v("名称")])],1)})),1)},s=[]},"55ca":function(t,a,e){"use strict";e.r(a);var i=e("2038"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"55d6":function(t,a,e){"use strict";e.r(a);var i=e("4d4d"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"57e3":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"HomeBanner",data:function(){return{current:0,list:[{image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2221182985,1875035766&fm=26&gp=0.jpg"},{image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2544696267,4055569904&fm=26&gp=0.jpg"},{image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2573133749,533767849&fm=26&gp=0.jpg"}]}},props:{},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};a.default=i},5824:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.list[data-v-589b50f4]{flex-wrap:wrap;justify-content:space-between;padding:0 %?30?% %?30?% %?30?%}.list .item[data-v-589b50f4]{width:%?120?%;color:#999;font-size:%?24?%;border-radius:%?10?%}.list .item .img[data-v-589b50f4]{width:%?100?%;height:%?100?%;border-radius:%?8?%}',""]),t.exports=a},"617a":function(t,a,e){"use strict";e.r(a);var i=e("2855"),n=e("55ca");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("7e55");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"62a1ae27",null,!1,i["a"],r);a["default"]=c.exports},"63df":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{list:[{title:"肉蛋水产",subTitle:"营养满分 健康美味"},{title:"家庭菜场",subTitle:"家庭采购 实惠便宜"},{title:"乳饮干货",subTitle:"营养满分 健康美味"},{title:"水果专场",subTitle:"时令水果 新鲜美味"}]}}};a.default=i},"651c":function(t,a,e){"use strict";e.r(a);var i=e("ed5c"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},6522:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{current:0}},methods:{onSwiperChange:function(t){this.current=t.detail.current}}};a.default=i},"6d05":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-94d7d262]{position:fixed;left:0;top:0;z-index:95;width:100%;background-color:#fff}.btn[data-v-94d7d262]{width:44px;height:40px;position:relative}.btn .mix-icon[data-v-94d7d262]{font-size:20px;color:#333}.btn .dizhi[data-v-94d7d262]{width:%?34?%}.btn .msg[data-v-94d7d262]{position:absolute;right:7px;top:5px;width:12px;height:12px;background-color:#f5f5f5;border:2px solid #fff;border-radius:100px;opacity:0}.btn .msg.show[data-v-94d7d262]{opacity:1}.center[data-v-94d7d262]{display:flex;align-items:center;justify-content:center}.search-wrap[data-v-94d7d262]{flex:1;font-size:14px;color:#999;border-radius:100px;background-color:#f2f2f2}.search-wrap .search[data-v-94d7d262]{width:%?30?%;margin-right:%?20?%}.search-wrap .icon-sousuo[data-v-94d7d262]{margin-right:6px;font-size:18px;color:#999}',""]),t.exports=a},"6f536":function(t,a,e){"use strict";e.r(a);var i=e("eaa7"),n=e("d563");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("221b");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"02dbf2ca",null,!1,i["a"],r);a["default"]=c.exports},7111:function(t,a,e){"use strict";var i=e("4115"),n=e.n(i);n.a},"7e55":function(t,a,e){"use strict";var i=e("a31a"),n=e.n(i);n.a},"7eb8":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),s={data:function(){return{upOption:{auto:!1,page:{num:0,size:10},noMoreSize:1}}},computed:{headerHeight:function(){return 750/uni.upx2px(750)*(this.systemInfo.navigationBarHeight+this.systemInfo.statusBarHeight)}},methods:{loadHotList:function(t){var a=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:1===t.num?(a.hotList=[],a.$refs.productList&&(a.$refs.productList.loadType="refresh")):a.$refs.productList.loadType="add";case 1:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.isLoading=!0,this.mescroll=t,this.mescroll.resetUpScroll(!1)}}};a.default=s},8307:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.home-banner[data-v-4135ad9e]{position:relative}.swiper[data-v-4135ad9e]{width:100%;height:%?310?%;padding-top:%?10?%}.pic[data-v-4135ad9e]{display:block;width:100%;height:100%;border-radius:%?16?%;-webkit-transform:scale(.94,.88);transform:scale(.94,.88);transition:-webkit-transform .36s;transition:transform .36s;transition:transform .36s,-webkit-transform .36s}.pic.current[data-v-4135ad9e]{-webkit-transform:scale(1);transform:scale(1)}.dots[data-v-4135ad9e]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-4135ad9e]{width:%?32?%;height:%?8?%;margin:0 %?6?%;background-color:#fff;border-radius:10px}.dot.current[data-v-4135ad9e]{background-color:#fe5b07}',""]),t.exports=a},"84fc":function(t,a,e){"use strict";e.r(a);var i=e("f7d9"),n=e("2de4");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("a34b");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5aad11cc",null,!1,i["a"],r);a["default"]=c.exports},9057:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"home-banner "},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,autoplay:!0,interval:"5000"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.list,(function(a,i){return e("v-uni-swiper-item",{key:i,staticClass:"item"},[e("v-uni-image",{staticClass:"pic",class:{current:t.current===i},attrs:{src:a.image,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo(a.link)}}})],1)})),1),e("v-uni-view",{staticClass:"dots row "},t._l(t.list,(function(a,i){return e("v-uni-view",{key:i,staticClass:"dot",class:{current:t.current===i}})})),1)],1)},s=[]},"938a":function(t,a,e){"use strict";e.r(a);var i=e("9057"),n=e("c79b");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("f5f2");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"4135ad9e",null,!1,i["a"],r);a["default"]=c.exports},"93da":function(t,a,e){var i=e("d34a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1f772384",i,!0,{sourceMap:!1,shadowMode:!1})},9742:function(t,a,e){"use strict";e.r(a);var i=e("efe7"),n=e("651c");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("bc9b");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"94d7d262",null,!1,i["a"],r);a["default"]=c.exports},9846:function(t,a,e){"use strict";e.r(a);var i=e("63df"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"9b3b":function(t,a,e){var i=e("6d05");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("dc066e16",i,!0,{sourceMap:!1,shadowMode:!1})},a31a:function(t,a,e){var i=e("e53f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("92ee5396",i,!0,{sourceMap:!1,shadowMode:!1})},a34b:function(t,a,e){"use strict";var i=e("93da"),n=e.n(i);n.a},a91a:function(t,a,e){var i=e("8307");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1e460759",i,!0,{sourceMap:!1,shadowMode:!1})},b972:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"list row "},t._l(t.list,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item column mt30"},[e("v-uni-view",{staticClass:"item_top row"},[e("v-uni-text",{staticClass:"sign"}),e("v-uni-text",{staticClass:"title"},[t._v(t._s(a.title))]),e("v-uni-image",{staticClass:"more",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"item_center"},[t._v(t._s(a.subTitle))]),e("v-uni-view",{staticClass:"item_bottom row"},[e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"}}),e("v-uni-image",{staticClass:"img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"}})],1)],1)})),1)},s=[]},bc9b:function(t,a,e){"use strict";var i=e("9b3b"),n=e.n(i);n.a},bf09:function(t,a,e){"use strict";e.r(a);var i=e("6522"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},c476:function(t,a,e){"use strict";var i=e("4668"),n=e.n(i);n.a},c580:function(t,a,e){"use strict";e.r(a);var i=e("5319d"),n=e("55d6");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("7111");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"589b50f4",null,!1,i["a"],r);a["default"]=c.exports},c79b:function(t,a,e){"use strict";e.r(a);var i=e("57e3"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},c827:function(t,a,e){"use strict";e.r(a);var i=e("b972"),n=e("9846");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("c476");var r,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"49a611ab",null,!1,i["a"],r);a["default"]=c.exports},d34a:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-5aad11cc]{background:#f5f5f5}.page_wrap .container[data-v-5aad11cc]{padding:%?10?% %?30?%;background-image:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg2.png);background-repeat:no-repeat;background-size:100% %?320?%;padding-top:%?80?%}.page_wrap .container .search_wrap[data-v-5aad11cc]{width:95%;background-color:#fff;text-align:center;border-radius:%?36?%;height:%?64?%;line-height:%?64?%;margin:%?10?% auto;color:#bbb;font-size:%?24?%}.page_wrap .container .search_wrap uni-text[data-v-5aad11cc]{margin-right:%?20?%}.page_wrap .container .notice[data-v-5aad11cc]{padding:%?4?% %?12?%;background-color:#fff9f3;border:1px solid #fdd3ad;border-radius:%?29?%;margin-top:%?30?%}.page_wrap .container .notice .msg_img[data-v-5aad11cc]{width:%?46?%;margin-right:%?30?%}.page_wrap .container .notice .notice_txt[data-v-5aad11cc]{font-size:%?24?%;color:#a2a2a2}.page_wrap .container .notice .notice_txt .time[data-v-5aad11cc]{color:#fe5108}.page_wrap .container .guess .guess_top[data-v-5aad11cc]{justify-content:center}.page_wrap .container .guess .guess_top .top_txt[data-v-5aad11cc]{color:#fe5b07;font-size:%?32?%;margin:0 %?30?%}.page_wrap .container .guess .guess_top .top_line[data-v-5aad11cc]{width:%?54?%;height:%?4?%}.page_wrap .container .guess .guess_top .left[data-v-5aad11cc]{background:linear-gradient(270deg,#ff6801,#fff)}.page_wrap .container .guess .guess_top .right[data-v-5aad11cc]{background:linear-gradient(270deg,#fff,#ff6801)}.product_list[data-v-5aad11cc]{position:relative;display:flex;flex-direction:row}.product_list .right_list[data-v-5aad11cc]{margin-left:%?20?%}.product_list .detail .list[data-v-5aad11cc]{width:%?294?%;background-color:#fff;padding:%?20?%;border-radius:%?10?%;align-items:baseline}',""]),t.exports=a},d563:function(t,a,e){"use strict";e.r(a);var i=e("2826"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},d967:function(t,a,e){var i=e("fb33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("13fa1e51",i,!0,{sourceMap:!1,shadowMode:!1})},e53f:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.img[data-v-62a1ae27]{width:%?250?%;height:%?180?%;margin:auto;display:block}.name[data-v-62a1ae27]{font-size:%?32?%;color:#333}.desc[data-v-62a1ae27]{font-size:%?24?%;color:#999}.label .l1[data-v-62a1ae27]{background:#fff4ed;padding:%?4?% %?8?%;color:#fe5b07;font-size:%?20?%;border-radius:%?8?%;margin-right:%?10?%}.spec .s_tit[data-v-62a1ae27]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);padding:%?4?% %?10?%;color:#fff;font-size:%?20?%;border-radius:2px 0 0 2px}.spec .s_detail[data-v-62a1ae27]{background:#fff4ed;padding:%?4?% %?10?%;color:#fe5b07;font-size:%?20?%}.price[data-v-62a1ae27]{justify-content:space-between;width:100%;position:relative}.price .p_wrap[data-v-62a1ae27]{display:flex;flex-direction:column}.price .p_detail[data-v-62a1ae27]{color:#fe5b07}.price .p_detail .p_left[data-v-62a1ae27]{font-size:%?16?%}.price .p_detail .p_right[data-v-62a1ae27]{font-size:%?32?%}.price .p_detail .p_right .unit[data-v-62a1ae27]{font-size:%?20?%}.price .show_more[data-v-62a1ae27]{color:#fe5b07;font-size:%?20?%;position:absolute;right:%?50?%}.price .show_more .iconfont[data-v-62a1ae27]{font-size:%?20?%}.price .add[data-v-62a1ae27]{width:%?44?%}.sale[data-v-62a1ae27]{padding:%?4?% %?10?%;color:#fe5b07;border:1px solid #fe5b07;font-size:%?20?%;border-radius:%?8?%;display:inline-block}',""]),t.exports=a},eaa7:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={uPopup:e("cbea").default,uInput:e("5e42").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"spec_wrap"},[e("u-popup",{attrs:{show:t.show,closeable:!0,mode:"bottom"},on:{close:function(a){arguments[0]=a=t.$handleEvent(a),t.show=!1}}},[e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"info row"},[e("v-uni-image",{attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png",mode:"widthFix"}}),e("v-uni-view",{},[e("v-uni-text",{staticClass:"f32-c333"},[t._v("柠檬")]),e("v-uni-text",{staticClass:"f24-c999 mt10"},[t._v("250g")])],1)],1),e("v-uni-view",{staticClass:"detail row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v("结算单位")]),e("v-uni-text",{staticClass:"f28-c999"},[t._v("箱")])],1),e("v-uni-view",{staticClass:"detail row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v("数量")]),e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changNum(1)}}},[t._v("-")]),e("u-input",{attrs:{border:"none",type:"text"},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changNum(2)}}},[t._v("+")])],1)],1),e("v-uni-view",{staticClass:"detail jc_sb"},[e("v-uni-view",{staticClass:"f28-c333"},[t._v("备注")]),e("u-input",{staticClass:"mt20",attrs:{type:"text",border:"none",placeholder:"请输入备注"},model:{value:t.remark,callback:function(a){t.remark=a},expression:"remark"}})],1),e("v-uni-view",{staticClass:"btn_default",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.add.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},s=[]},ed5c:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"HomePageHeader",data:function(){return{}},props:{showFillView:{type:Boolean,default:!0},bgColor:{type:String,default:"#fff"},showAddress:{type:Boolean,default:!1},showTel:{type:Boolean,default:!1}},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight},customWidth:function(){return this.systemInfo.custom.width},customHeight:function(){return this.systemInfo.custom.height},headerPaddingRight:function(){return 0}},methods:{scanCode:function(){uni.scanCode({success:function(t){var a=t.result;"string"!==typeof a||uni.navigateTo({url:"/pages/public/web-view?url="+a})}})}}};a.default=i},eeda:function(t,a,e){"use strict";var i=e("d967"),n=e.n(i);n.a},efe7:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mix-page-header"},[e("v-uni-view",{staticClass:"content row",style:{paddingRight:t.headerPaddingRight+"px",paddingTop:t.statusBarHeight+"px",height:t.navigationBarHeight+t.statusBarHeight+"px",backgroundColor:t.bgColor}},[t.showAddress?e("v-uni-view",{staticClass:"btn center"},[e("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dizhi.png",mode:"widthFix"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/Address/Address")}}})],1):t._e(),e("v-uni-view",{staticClass:"search-wrap center",style:{height:t.customHeight+"px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/Search/Search")}}},[e("v-uni-image",{staticClass:"search",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png",mode:"widthFix"}}),e("v-uni-text",[t._v("输入关键字搜索")])],1),t.showTel?e("v-uni-view",{staticClass:"btn center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.scanCode.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"dizhi",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dianhua.png",mode:"widthFix"}})],1):t._e()],1),t.showFillView?e("v-uni-view",{style:[{minHeight:t.navigationBarHeight+t.statusBarHeight+"px"}]}):t._e()],1)},s=[]},f025:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("7eb8")),s=i(e("938a")),r=i(e("c580")),o=i(e("c827")),c=i(e("2d2b")),u={components:{banner:s.default,module1:r.default,module2:o.default,module3:c.default},mixins:[n.default],data:function(){return{bgColor:"transparent"}},onPageScroll:function(t){console.log(t),t.scrollTop>50?this.bgColor="#FF6105":this.bgColor="transparent"}};a.default=u},f5f2:function(t,a,e){"use strict";var i=e("a91a"),n=e.n(i);n.a},f7d9:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={pageHeader:e("9742").default,productList:e("617a").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page_wrap"},[e("page-header",{attrs:{showAddress:!0,showTel:!0,showFillView:!1,bgColor:t.bgColor}}),e("v-uni-view",{staticClass:"bg"}),e("v-uni-view",{staticClass:"container"},[e("banner"),e("v-uni-view",{},[e("v-uni-view",{staticClass:"notice row mt30"},[e("v-uni-image",{staticClass:"msg_img",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/message.png",mode:"widthFix"}}),e("v-uni-text",{staticClass:"notice_txt "},[t._v("今日23:00前下单，次日"),e("v-uni-text",{staticClass:"time"},[t._v("7:00～10:00")]),t._v("送达")],1)],1)],1),e("module1"),e("module2"),e("module3"),e("v-uni-view",{staticClass:"guess mt30"},[e("v-uni-view",{staticClass:"guess_top row"},[e("v-uni-text",{staticClass:"top_line left"}),e("v-uni-text",{staticClass:"top_txt"},[t._v("猜您喜欢")]),e("v-uni-text",{staticClass:"top_line right"})],1),e("v-uni-view",{staticClass:"product_list "},[e("v-uni-view",{staticClass:"detail left_list"},t._l(3,(function(t,a){return e("v-uni-view",{key:a,staticClass:"list column mt20"},[e("product-list")],1)})),1),e("v-uni-view",{staticClass:"detail right_list"},t._l(3,(function(t,a){return e("v-uni-view",{key:a,staticClass:"list column mt20"},[e("product-list")],1)})),1)],1)],1)],1)],1)},s=[]},fb33:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.module-wrap[data-v-7d6da2d4]{height:%?540?%;background:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg1.png) no-repeat;background-size:100% 100%;padding:%?30?%;position:relative}.module-wrap .title[data-v-7d6da2d4]{justify-content:space-between}.module-wrap .title .txt[data-v-7d6da2d4]{color:#ff6423}.module-wrap .title .more_r[data-v-7d6da2d4]{color:#7e7e7e;font-size:%?20?%;margin-right:%?10?%}.module-wrap .title .more[data-v-7d6da2d4]{width:%?12?%;margin-left:%?10?%}.module-wrap .swiper[data-v-7d6da2d4]{height:100%}.module-wrap .swiper .swiper_item .list[data-v-7d6da2d4]{flex-wrap:wrap;justify-content:space-around}.module-wrap .swiper .swiper_item .list .img[data-v-7d6da2d4]{width:%?200?%;height:%?200?%;border-radius:%?8?%}.dots[data-v-7d6da2d4]{position:absolute;left:0;bottom:%?12?%;width:100%;justify-content:center}.dot[data-v-7d6da2d4]{width:%?12?%;height:%?12?%;margin:0 %?6?%;background-color:#fff;border-radius:50%}.dot.current[data-v-7d6da2d4]{background-color:#fe5b07}',""]),t.exports=a}}]);