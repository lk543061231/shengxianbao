(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-StockManage-Detail"],{2144:function(t,i,a){"use strict";a.r(i);var e=a("62f6"),n=a("d972");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("70ab");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"3d6b8225",null,!1,e["a"],o);i["default"]=c.exports},"369c":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{pageType:"",pageTxt:"",showEdit:!1}},onLoad:function(t){var i;"out"==t.pageType?(i="出库单详情",this.pageTxt="出库"):"in"==t.pageType?(i="入库单详情",this.pageTxt="入库"):"inventory"==t.pageType?(i="盘点单详情",this.pageTxt="盘点"):"frmLoss"==t.pageType?(i="报损单详情",this.pageTxt="报损"):"overflow"==t.pageType?(i="报溢单详情",this.pageTxt="报溢"):"return"==t.pageType?(i="退货单详情",this.pageTxt="退货"):"offer"==t.pageType&&(i="报价单详情",this.pageTxt="报价"),t.showEdit&&(this.showEdit=!0),this.pageType=t.pageType,uni.setNavigationBarTitle({title:i})},methods:{submit:function(t){uni.showModal({title:"提示",content:"内容",success:function(t){console.log(t)}})}}};i.default=e},"523d":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-3d6b8225]{padding-bottom:%?200?%}.page_wrap .info_list[data-v-3d6b8225]{background-color:#fff;padding:0 %?30?%}.page_wrap .info_list .item[data-v-3d6b8225]{padding:%?30?% 0;border-bottom:%?2?% solid #f1f1f1}.page_wrap .info_list .item[data-v-3d6b8225]:last-child{border:none}.page_wrap .foot_btn[data-v-3d6b8225]{width:100%;position:fixed;bottom:0;left:0;padding:%?30?% 0;background-color:#fff;border-top:1px solid #f1f1f1;z-index:111}.page_wrap .foot_btn .nums[data-v-3d6b8225]{margin-left:%?30?%}.page_wrap .foot_btn .nums .left[data-v-3d6b8225]{color:#333;font-size:%?22?%;margin-right:%?20?%}.page_wrap .foot_btn .nums .left .iconfont[data-v-3d6b8225]{color:#d7d7d7;margin-right:%?10?%}.page_wrap .foot_btn .nums .right[data-v-3d6b8225]{color:#fe5b07;font-size:%?40?%}.page_wrap .foot_btn .btns[data-v-3d6b8225]{margin-right:%?30?%}.page_wrap .foot_btn .btns .edit[data-v-3d6b8225]{margin-right:%?60?%;color:#fe5b07;font-size:%?28?%}.page_wrap .foot_btn .btns .btn[data-v-3d6b8225]{width:%?156?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:%?30?%;font-size:%?28?%;display:inline-block}.page_wrap .foot_btn .btns .left[data-v-3d6b8225]{border:1px solid #fe5b07;color:#fe5b07;margin-right:%?20?%}.page_wrap .foot_btn .btns .right[data-v-3d6b8225]{background:-webkit-linear-gradient(337deg,#f87523,#ff6c00 0,#fd1d20);background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);color:#fff}',""]),t.exports=i},"62f6":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var e={detailList:a("e189").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"info_list mt20"},["return"==t.pageType||"frmLoss"==t.pageType||"out"==t.pageType||"in"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v(t._s(t.pageTxt)+"仓库")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("仓库")])],1)]:t._e(),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("日期")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("2021-12-20")])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("单号")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("123456")])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("状态")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("待审核")])],1),"offer"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("状态")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("待审核")])],1)]:t._e()],2),a("v-uni-view",{staticClass:"slot_wrap"},[a("detail-list",{attrs:{pageTxt:t.pageTxt,nowParentPage:"Detail",showEdit:t.showEdit}})],1),a("v-uni-view",{staticClass:"foot_btn row jc_sb"},[a("v-uni-view",{staticClass:"nums row"},[a("v-uni-view",{staticClass:"left row"},[t._v(t._s(t.pageTxt))]),a("v-uni-view",{staticClass:"right"},[t._v("3")])],1),a("v-uni-view",{staticClass:"btns"},[a("v-uni-text",{staticClass:"edit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showEdit=!0}}},[a("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("编辑")],1),t.showEdit?[a("v-uni-text",{staticClass:"btn left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showEdit=!1}}},[t._v("取消")]),a("v-uni-text",{staticClass:"btn right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit(1)}}},[t._v("保存")])]:[a("v-uni-text",{staticClass:"btn left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit(2)}}},[t._v("作废")]),a("v-uni-text",{staticClass:"btn right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit(3)}}},[t._v("审核")])]],2)],1)],1)},s=[]},"70ab":function(t,i,a){"use strict";var e=a("eced"),n=a.n(e);n.a},d972:function(t,i,a){"use strict";a.r(i);var e=a("369c"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},eced:function(t,i,a){var e=a("523d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("2659433e",e,!0,{sourceMap:!1,shadowMode:!1})}}]);