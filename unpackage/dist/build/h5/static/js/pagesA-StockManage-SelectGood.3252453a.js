(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-StockManage-SelectGood"],{"032e":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{index:{type:Number,default:0},num:{type:Number|String,default:0}},data:function(){return{}},methods:{change:function(t){1==t?this.num>0&&this.$emit("changeNumResult","sub",this.index):2==t?this.$emit("changeNumResult","add",this.index):this.$emit("changeNumResult","",this.index,this.num)}}};a.default=i},"08b7":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .top[data-v-42c77f2a]{border-bottom:%?2?% solid #f1f1f1}.page_wrap[data-v-42c77f2a] .list{padding:0}.page_wrap[data-v-42c77f2a] .list .info{padding-bottom:%?20?%}.page_wrap .foot_wrap[data-v-42c77f2a]{position:fixed;background-color:#fff;bottom:0;left:0;width:100%;padding:%?30?% 0}.page_wrap .foot_wrap .foot_con[data-v-42c77f2a]{padding:0 %?30?%}.page_wrap .foot_wrap .foot_con .check_wrap[data-v-42c77f2a]{margin-right:%?10?%}.page_wrap .foot_wrap .foot_con .check_wrap .icon-weixuanze[data-v-42c77f2a]{color:#999}.page_wrap .foot_wrap .foot_con .check_wrap .icon-xuanze[data-v-42c77f2a]{color:#fe5b07}.page_wrap .foot_wrap .foot_con .num_wrap .label[data-v-42c77f2a]{font-size:%?22?%;color:#333;margin-right:%?30?%}.page_wrap .foot_wrap .foot_con .num_wrap .value[data-v-42c77f2a]{font-size:%?40?%;color:#fe5b07}.page_wrap .foot_wrap .foot_con .btn_wrap[data-v-42c77f2a]{position:absolute;right:%?30?%}.page_wrap .foot_wrap .foot_con .btn_wrap .btn[data-v-42c77f2a]{width:%?180?%;height:%?70?%;border-radius:%?35?%;background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);text-align:center;line-height:%?70?%;font-size:%?32?%;color:#fff}.data_list .list .item[data-v-42c77f2a]{margin-bottom:%?30?%}.data_list .list .item .item_wrap[data-v-42c77f2a]{background-color:#fff;align-items:flex-start;padding:%?30?%}.data_list .list .item .item_wrap .row .icon-weixuanze[data-v-42c77f2a]{color:#999;margin-right:%?10?%}.data_list .list .item .item_wrap .row .icon-xuanze[data-v-42c77f2a]{color:#fe5b07;margin-right:%?10?%}.data_list .list .item .img[data-v-42c77f2a]{width:%?120?%;height:%?120?%;margin-right:%?30?%}.data_list .list .item .info[data-v-42c77f2a]{flex:1;position:relative}.data_list .list .item .info .bao[data-v-42c77f2a]{background-color:#fff4ed;color:#fe5b07;font-size:%?20?%;border-radius:%?2?%;padding:0 %?4?%;margin-right:%?10?%}.data_list .list .item .info .num_util[data-v-42c77f2a]{color:#fe5b07}.data_list .list .item .info .total[data-v-42c77f2a]{color:#d30000;font-size:%?24?%;width:100%;text-align:right;padding-top:%?20?%;border-top:1px solid #e7e7e7}.data_list .list .item .info .kucun[data-v-42c77f2a]{position:absolute;right:0;bottom:0}.data_list .list .item .bottom_wrap[data-v-42c77f2a]{background-color:#fff;justify-content:flex-end;padding:%?20?%}.data_list .list .item .bottom_wrap .tip[data-v-42c77f2a]{color:#fe5b07;font-size:%?32?%}.data_list .list .item .bottom_wrap .icon-shanchu[data-v-42c77f2a]{font-size:%?44?%;color:#666}.data_list .list .item .bottom_wrap .bg_style1[data-v-42c77f2a]{font-size:%?20?%;padding:%?8?%;margin-left:%?10?%}.data_list .list .item .change[data-v-42c77f2a]{justify-content:space-around}.data_list .foot_wrap[data-v-42c77f2a]{position:fixed;background-color:#fff;bottom:0;left:0;width:100%;padding:%?30?% 0;z-index:111;border-top:%?2?% solid #f1f1f1}.data_list .foot_wrap .foot_con[data-v-42c77f2a]{padding:0 %?30?%}.data_list .foot_wrap .foot_con .check_wrap[data-v-42c77f2a]{margin-right:%?10?%}.data_list .foot_wrap .foot_con .check_wrap .icon-weixuanze[data-v-42c77f2a]{color:#999}.data_list .foot_wrap .foot_con .check_wrap .icon-xuanze[data-v-42c77f2a]{color:#fe5b07}.data_list .foot_wrap .foot_con .num_wrap .label[data-v-42c77f2a]{font-size:%?22?%;color:#333;margin-right:%?30?%}.data_list .foot_wrap .foot_con .num_wrap .value[data-v-42c77f2a]{font-size:%?40?%;color:#fe5b07}.data_list .foot_wrap .foot_con .btn_wrap[data-v-42c77f2a]{position:absolute;right:%?30?%}.data_list .foot_wrap .foot_con .btn_wrap .edit[data-v-42c77f2a]{margin-right:%?60?%;color:#fe5b07;font-size:%?28?%}.data_list .foot_wrap .foot_con .btn_wrap .btn[data-v-42c77f2a]{width:%?180?%;height:%?70?%;border-radius:%?35?%;background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);text-align:center;line-height:%?70?%;font-size:%?32?%;color:#fff}',""]),t.exports=a},"0cf6":function(t,a,e){"use strict";var i=e("4ea4");e("4de4"),e("4160"),e("45fc"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5530")),o=e("2f62"),s={name:"commonCar",data:function(){return{keyWrod:"",modelTitle:"提示",subTitle:"请输入商品数量",total:0,isCut:!0,goodsIndex:"",pageType:"",pageTxt:"",step:"one",pageList:[]}},onLoad:function(t){"out"==t.pageType?("新增出库单",this.pageTxt="出库"):"in"==t.pageType?("新增入库单",this.pageTxt="入库"):"overflow"==t.pageType?("新增报溢单",this.pageTxt="报溢"):"return"==t.pageType?("新增退货单",this.pageTxt="退货"):"inventory"==t.pageType?("新增盘点单",this.pageTxt="盘点"):"frmLoss"==t.pageType?("新增报损单",this.pageTxt="报损"):"offer"==t.pageType&&("新增报价单",this.pageTxt="报价"),this.pageType=t.pageType,this.getProductList()},computed:(0,n.default)({},(0,o.mapState)(["$StockManageInfo"])),methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)(["SET_STOCK_MANAGE_INFO"])),{},{getProductList:function(){var t=this;this.queryUrl="api/pms/productcategory/getProductList",this.getList().then((function(a){a.forEach((function(t){t.checked=1,t.leftNum=0,t.rightNum=0,t.showEdit=!1})),t.pageList=a}))},searchInput:function(t){console.log("搜索",t)},selectFilter:function(t){console.log("筛选后的数据",t)},checkHandle:function(t,a){1==t.checked?t.checked=2:t.checked=1;var e=0;this.pageList.forEach((function(t){2==t.checked&&e++})),"two"==this.step&&(2==t.checked?this.pageList[a].showEdit=!0:this.pageList[a].showEdit=!1),this.total=e,this.$forceUpdate()},selectAll:function(t){var a=this;this.total=1==t?0:this.pageList.length,this.pageList.forEach((function(e){e.checked=t,"two"==a.step&&(e.showEdit=2==t)}))},changeNum1:function(t,a,e){"add"==t?this.pageList[a].leftNum+=1:"sub"==t?this.pageList[a].leftNum-=1:this.pageList[a].leftNum=e,this.$forceUpdate()},changeNum2:function(t,a,e){"add"==t?this.pageList[a].rightNum+=1:"sub"==t?this.pageList[a].rightNum-=1:this.pageList[a].rightNum=e,this.$forceUpdate()},submit:function(t){var a=this.pageList;if("one"==t){var e=a.some((function(t){return 2==t.checked}));if(!e)return void uni.showToast({title:"请先选择商品",icon:"none"});a.forEach((function(t){2==t.checked&&(t.showEdit=!0)})),this.step="two"}else if("two"==t){var i=a.filter((function(t){return 2==t.checked}));uni.setStorageSync("stockData",i),this.SET_STOCK_MANAGE_INFO({selectData:i}),this.navTo("./AddPage?pageType="+this.pageType)}}})};a.default=s},"100b":function(t,a,e){var i=e("3dab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("5123ed74",i,!0,{sourceMap:!1,shadowMode:!1})},"1c49":function(t,a,e){"use strict";e.r(a);var i=e("6516"),n=e("4293");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3871");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"42c77f2a",null,!1,i["a"],s);a["default"]=r.exports},3871:function(t,a,e){"use strict";var i=e("5c44"),n=e.n(i);n.a},"3dab":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.num_wrap[data-v-487dae75] .uni-input-input{width:%?50?%;padding:%?10?%;background-color:#ececec}.num_wrap[data-v-487dae75] uni-input{width:%?50?%;background-color:#ececec}.num_wrap .btn[data-v-487dae75]{width:%?50?%;background-color:#ececec;text-align:center;height:%?48?%;line-height:%?48?%}.num_wrap .left[data-v-487dae75]{margin-right:%?10?%}.num_wrap .right[data-v-487dae75]{margin-left:%?10?%}',""]),t.exports=a},4293:function(t,a,e){"use strict";e.r(a);var i=e("0cf6"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"5c44":function(t,a,e){var i=e("08b7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("32e59ab2",i,!0,{sourceMap:!1,shadowMode:!1})},6516:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={searchComprehensive:e("ceb0").default,changeNum:e("92e1").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page_wrap"},[e("v-uni-view",{staticClass:"top"},[e("search-comprehensive",{attrs:{placeholder:"搜索商品",showScreen:!0,showClassify:!0},on:{searchInput:function(a){arguments[0]=a=t.$handleEvent(a),t.searchInput.apply(void 0,arguments)},selectFilter:function(a){arguments[0]=a=t.$handleEvent(a),t.selectFilter.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"data_list"},[e("v-uni-view",{staticClass:"list"},t._l(t.pageList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"item "},[e("v-uni-view",{staticClass:"item_wrap row"},[e("v-uni-view",{staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkHandle(a,i)}}},[e("v-uni-view",[1==a.checked?e("v-uni-view",{staticClass:"iconfont icon-weixuanze"}):e("v-uni-view",{staticClass:"iconfont icon-xuanze"})],1),e("v-uni-image",{staticClass:"img",attrs:{src:a.defaultImage}})],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v(t._s(a.productName))]),e("v-uni-text",{staticClass:"f24-c999"},[t._v("商品编号："+t._s(a.productCode))])],1),e("v-uni-view",{staticClass:"desc mt10 f24-c999"},[t._v(t._s(a.productNameAlias))]),e("v-uni-view",{staticClass:"price row  mt10"},[e("v-uni-text",{staticClass:"bao mr10"},[t._v(t._s(a.productUnit))]),e("v-uni-text",{staticClass:"f24-c999 mr10"},[t._v(t._s(a.auxiliaryUnit))]),e("v-uni-text",{staticClass:"f24-c999"},[t._v("￥"+t._s(a.unitPrice)+"元/"+t._s(a.productUnit))])],1),"inventory"==t.pageType?e("v-uni-view",{staticClass:"kucun"},[t._v("库存")]):t._e()],1)],1),a.showEdit?e("v-uni-view",{staticClass:"mt10 bottom_wrap change row"},[e("v-uni-view",{staticClass:"row"},[e("change-num",{attrs:{index:i,num:a.leftNum},on:{changeNumResult:function(a){arguments[0]=a=t.$handleEvent(a),t.changeNum1.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"bg_style1"},[t._v(t._s(a.productUnit))])],1),e("v-uni-view",{staticClass:"row"},[e("change-num",{attrs:{index:i,num:a.rightNum},on:{changeNumResult:function(a){arguments[0]=a=t.$handleEvent(a),t.changeNum2.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"bg_style1"},[t._v(t._s(a.auxiliaryUnit))])],1)],1):t._e()],1)})),1),e("v-uni-view",{staticClass:"foot_wrap"},[[e("v-uni-view",{staticClass:"foot_con row"},[e("v-uni-view",{staticClass:"check_wrap"},[t.total<t.pageList.length?e("v-uni-view",{staticClass:"iconfont icon-weixuanze",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectAll(2)}}}):e("v-uni-view",{staticClass:"iconfont icon-xuanze",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectAll(1)}}})],1),e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-text",{staticClass:"label"},[t._v(t._s(t.pageTxt))]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.total))])],1),e("v-uni-view",{staticClass:"btn_wrap row"},["one"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("one")}}},[t._v(t._s(t.pageTxt))]):"two"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("two")}}},[t._v("保存")]):"three"==t.step?e("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit("three")}}},[t._v("结束"+t._s(t.pageTxt))]):t._e()],1)],1)]],2)],1)],1)},o=[]},"8b66":function(t,a,e){"use strict";e.r(a);var i=e("032e"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"92e1":function(t,a,e){"use strict";e.r(a);var i=e("cfe5"),n=e("8b66");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("bbd0");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"487dae75",null,!1,i["a"],s);a["default"]=r.exports},bbd0:function(t,a,e){"use strict";var i=e("100b"),n=e.n(i);n.a},cfe5:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uInput:e("5e42").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-view",{staticClass:"btn left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(1)}}},[t._v("-")]),e("u-input",{attrs:{border:"none"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.change(3)}},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),e("v-uni-view",{staticClass:"btn right",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(2)}}},[t._v("+")])],1)},o=[]}}]);