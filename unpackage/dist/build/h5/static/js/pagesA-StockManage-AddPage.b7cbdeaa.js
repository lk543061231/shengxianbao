(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-StockManage-AddPage"],{"01b4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("0050"),n={data:function(){return{num:"",showPop:!1,selectDate:"",pageType:"",pageTxt:"",remark:"",stockData:null,columns:[{label:"仓库1",value:1},{label:"仓库2",value:2}]}},onLoad:function(t){var e;"out"==t.pageType?(e="新增出库单",this.pageTxt="出库"):"in"==t.pageType?(e="新增入库单",this.pageTxt="入库"):"overflow"==t.pageType?(e="新增报溢单",this.pageTxt="报溢"):"return"==t.pageType?(e="新增退货单",this.pageTxt="退货"):"inventory"==t.pageType?(e="新增盘点单",this.pageTxt="盘点"):"frmLoss"==t.pageType?(e="新增报损单",this.pageTxt="报损"):"offer"==t.pageType&&(e="新增报价单",this.pageTxt="报价"),this.pageType=t.pageType,uni.setNavigationBarTitle({title:e}),this.selectDate=(0,i.date)("Y-m-d",(new Date).getTime()),uni.getStorageSync("stockData")&&(this.stockData=uni.getStorageSync("stockData"))},mounted:function(){uni.getStorageSync("stockData")&&(this.$refs.detailList.step="three")},methods:{showPopHandle:function(t){2==t?this.$refs.dateEl.show():this.$refs.jPicker.pickerVisable=!0},dateConfirm:function(t){console.log(t),this.selectDate=t},confirm:function(t){console.log(t)}},onUnload:function(){console.log(2222),uni.removeStorageSync("stockData")},onBackPress:function(t){if("backbutton"==t.from)return uni.removeStorageSync("stockData"),uni.navigateTo({url:"./Index?pageType="+this.pageType}),!0}};e.default=n},"0dab":function(t,e,a){"use strict";a.r(e);var i=a("51be"),n=a("4fb2");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("bbcb");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"1105d295",null,!1,i["a"],o);e["default"]=c.exports},"4fb2":function(t,e,a){"use strict";a.r(e);var i=a("01b4"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"51be":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uInput:a("f76d").default,detailList:a("e189").default,jPicker:a("3d93").default,itmisterDatePicker:a("e94e").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"list mt20"},[a("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(1)}}},[a("v-uni-view",{staticClass:"left "},[t._v(t._s(t.pageTxt)+"仓库")]),a("v-uni-view",{staticClass:"right row"},[a("v-uni-text",{staticClass:"label"},[t._v("1231231")]),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),a("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(2)}}},[a("v-uni-view",{staticClass:"left "},[t._v("日期")]),a("v-uni-view",{staticClass:"right row"},[a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.selectDate))]),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),a("v-uni-view",{staticClass:"item row"},[a("v-uni-view",{staticClass:"left "},[t._v("备注")]),a("v-uni-view",{staticClass:"right "},[a("u-input",{attrs:{border:"none",placeholder:"请输入"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1),t.stockData?a("v-uni-view",{staticClass:"slot_wrap"},[a("detail-list",{ref:"detailList",attrs:{pageType:t.pageType,pageTxt:t.pageTxt,nowParentPage:"AddPage",datas:t.stockData}})],1):a("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./SelectGood?pageType="+t.pageType)}}},[t._v("选择商品")]),a("jPicker",{ref:"jPicker",attrs:{title:"选择仓库",options:t.columns,valKey:"value",showKey:"label"},on:{sure:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}}),a("itmister-date-picker",{ref:"dateEl",on:{dateConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dateConfirm.apply(void 0,arguments)}}})],1)},s=[]},"84ca":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-1105d295]{padding-bottom:%?100?%}.page_wrap .list[data-v-1105d295]{background-color:#fff;padding:0 %?30?%}.page_wrap .list .item[data-v-1105d295]{padding:%?40?% 0;border-bottom:1px solid #e1e1e1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page_wrap .list .item .left[data-v-1105d295]{font-size:%?30?%;color:#333}.page_wrap .list .item .right .label[data-v-1105d295]{color:#666;font-size:%?28?%;margin-right:%?12?%}.page_wrap .list .item .right[data-v-1105d295] .uni-input-placeholder{text-align:right}.page_wrap .list .item .right[data-v-1105d295] uni-input{text-align:right}.page_wrap .list .item .input[data-v-1105d295]{width:%?400?%}.page_wrap .list .item[data-v-1105d295]:last-child{border:none}.page_wrap .btn_default[data-v-1105d295]{width:90%;margin:auto;margin-top:%?300?%}',""]),t.exports=e},bbcb:function(t,e,a){"use strict";var i=a("cb16"),n=a.n(i);n.a},cb16:function(t,e,a){var i=a("84ca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f2ab9b46",i,!0,{sourceMap:!1,shadowMode:!1})}}]);