(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesC-Out-Detail"],{"02d7":function(t,e,a){"use strict";a.r(e);var i=a("0afe"),s=a("39f4");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("a1f1");var o,r=a("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"45a5994c",null,!1,i["a"],o);e["default"]=c.exports},"0afe":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={detailList:a("40c3").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"info_list mt20"},["return"==t.pageType||"frmLoss"==t.pageType||"out"==t.pageType||"in"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v(t._s(t.pageTxt)+"仓库")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.workhouseName))])],1)]:t._e(),t._e(),"offer"!==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("日期")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.lossDate||t.pageDetail.outputDate||t.pageDetail.inputDate||t.pageDetail.returnorderDate))])],1)]:t._e(),t._e(),"return"==t.pageType||"frmLoss"==t.pageType||"out"==t.pageType||"in"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("状态")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(-1==t.pageDetail.billState?"已作废":1==t.pageDetail.billState?"已审核":"待审核"))])],1)]:t._e(),"offer"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("价格组")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("价格组A")])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("报价时间")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("查看"),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("报价时间段")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("查看"),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1)]:t._e(),"return"==t.pageType||"offer"==t.pageType||"frmLoss"==t.pageType||"in"==t.pageType||"out"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("备注")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.remark||"无"))])],1)]:t._e(),"return"==t.pageType||"frmLoss"==t.pageType||"out"==t.pageType||"in"==t.pageType?[a("v-uni-view",{staticClass:"item row jc_sb",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./Log?id="+t.pageDetail.id+"&pageUrl="+t.pageUrl)}}},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("操作日志")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("查看"),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1)]:t._e()],2),t.showEdit?a("v-uni-view",{staticClass:"add_product row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addProduct.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-tianjia mr10"}),t._v("添加商品")],1):t._e(),a("v-uni-view",{staticClass:"slot_wrap"},[a("detail-list",{attrs:{pageTxt:t.pageTxt,pageType:t.pageType,nowParentPage:"Detail",datas:t.pageDetail.infoInfoVoList||t.pageDetail.infoVoList,showEdit:t.showEdit}})],1),a("v-uni-view",{staticClass:"foot_btn row jc_sb"},[a("v-uni-view",{staticClass:"nums row"},[a("v-uni-view",{staticClass:"left row"},[t._v("合计")]),a("v-uni-view",{staticClass:"right"},[t._v(t._s(t.pageDetail.infoInfoVoList&&t.pageDetail.infoInfoVoList.length||t.pageDetail.infoVoList&&t.pageDetail.infoVoList.length||0))])],1),a("v-uni-view",{staticClass:"btns"},["0"===t.pageDetail.billState?a("v-uni-text",{staticClass:"edit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showEdit=!0}}},[a("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("编辑")],1):t._e(),t.showEdit?[a("v-uni-text",{staticClass:"btn left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showEdit=!1}}},[t._v("取消")]),a("v-uni-text",{staticClass:"btn right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(1)}}},[t._v("保存")])]:["0"===t.pageDetail.billState?[a("v-uni-text",{staticClass:"btn left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(2)}}},[t._v("作废")]),a("v-uni-text",{staticClass:"btn right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(3)}}},[t._v("审核")])]:"1"===t.pageDetail.billState?[a("v-uni-text",{staticClass:"btn left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(4)}}},[t._v("反审核")]),a("v-uni-text",{staticClass:"btn right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(5)}}},[t._v("打印")])]:t._e()]],2)],1)],1)},n=[]},3782:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("5530")),n=a("2f62"),o={data:function(){return{pageType:"",pageTxt:"",showEdit:!1,pageUrl:"",id:"",pageDetail:{}}},onLoad:function(t){var e;"out"==t.pageType?(e="出库单详情",this.pageTxt="出库",this.pageUrl="api/outputBill/findInfo"):"in"==t.pageType?(e="入库单详情",this.pageTxt="入库",this.pageUrl="api/inputBill/findInfo"):"inventory"==t.pageType?(e="盘点单详情",this.pageTxt="盘点",this.pageUrl="api/stocktake/findInfo"):"frmLoss"==t.pageType?(e="报损单详情",this.pageTxt="报损",this.pageUrl="api/Loss/fingdOne"):"overflow"==t.pageType?(e="报溢单详情",this.pageTxt="报溢"):"return"==t.pageType?(e="退货单详情",this.pageTxt="退货",this.pageUrl="api/returnorder/findInfo"):"offer"==t.pageType?(e="报价单详情",this.pageTxt="报价"):"turnover"==t.pageType&&(e="周转框详情",this.pageTxt="周转"),this.id=t.id,t.showEdit&&(this.showEdit=!0),this.pageType=t.pageType,uni.setNavigationBarTitle({title:e}),this.getDetail()},computed:(0,s.default)({},(0,n.mapState)(["$StockManageInfo"])),onShow:function(){this.pageDetail.infoInfoVoList?this.pageDetail.infoInfoVoList=this.$StockManageInfo.infoInfoVoList:this.pageDetail.infoVoList=this.$StockManageInfo.infoInfoVoList},methods:(0,s.default)((0,s.default)({},(0,n.mapMutations)(["SET_STOCK_MANAGE_INFO"])),{},{getDetail:function(){var t=this;this.$http(this.pageUrl,{id:this.id}).then((function(e){t.pageDetail=e,t.SET_STOCK_MANAGE_INFO({infoInfoVoList:e.infoInfoVoList||e.infoVoList})}))},addProduct:function(){this.navTo("./SelectGood?pageType="+this.pageType+"&fromPage=Detail")},submit:function(t){var e=this,a="",i="",s={};if(1===t){switch(a="库存即将调整，请确认操作",this.pageType){case"in":i="api/inputBill/update";break;case"out":i="api/outputBill/update";break;case"inventory":i="api/stocktake/update";break;case"frmLoss":i="api/Loss/update";break;case"overflow":i="";break;case"return":i="api/returnorder/update";break;case"turnover":i="";break;case"offer":i="";break;default:i=""}s=this.pageDetail}else if(2===t){switch(a="您正在作废单据，请确认操作",this.pageType){case"in":i="api/inputBill/updateInvalid";break;case"out":i="api/outputBill/updateInvalid";break;case"inventory":i="api/stocktake/updateInvalid";break;case"frmLoss":i="api/Loss/updateInvalid";break;case"overflow":i="";break;case"return":i="api/returnorder/updateInvalid";break;case"turnover":i="";break;case"offer":i="";break;default:i=""}s={id:this.pageDetail.id}}else if(3==t){switch(a="您正在审核单据，请确认操作",this.pageType){case"in":i="api/inputBill/updateAudit";break;case"out":i="api/outputBill/updateAudit";break;case"inventory":i="api/stocktake/updateAudit";break;case"frmLoss":i="api/Loss/updateAudit";break;case"overflow":i="";break;case"return":i="api/returnorder/updateAudit";break;case"turnover":i="";break;case"offer":i="";break;default:i=""}s={id:this.pageDetail.id}}else if(4==t){switch(a="您正在反审核单据，请确认操作",this.pageType){case"in":i="api/inputBill/updateBackAudit";break;case"out":i="api/outputBill/updateBackAudit";break;case"inventory":i="api/stocktake/updateBackAudit";break;case"frmLoss":i="api/Loss/updateBackAudit";break;case"overflow":i="";break;case"return":i="api/returnorder/updateBackAudit";break;case"turnover":i="";break;case"offer":i="";break;default:i=""}s={id:this.pageDetail.id}}uni.showModal({title:"提示",content:a,success:function(a){a.confirm&&(e.$http(i,s,"put").then((function(a){e.showEdit=!1,2==t?uni.showToast({title:"报废-成功",icon:"none"}):3==t?uni.showToast({title:"审核-成功",icon:"none"}):4==t&&uni.showToast({title:"反审核-成功",icon:"none"})})),setTimeout((function(){e.getDetail()}),1500))}})}})};e.default=o},"39f4":function(t,e,a){"use strict";a.r(e);var i=a("3782"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},6150:function(t,e,a){var i=a("88ac");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("2548e579",i,!0,{sourceMap:!1,shadowMode:!1})},"88ac":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-45a5994c]{padding-bottom:%?200?%}.page_wrap .info_list[data-v-45a5994c]{background-color:#fff;padding:0 %?30?%}.page_wrap .info_list .item[data-v-45a5994c]{padding:%?30?% 0;border-bottom:%?2?% solid #f1f1f1}.page_wrap .info_list .item[data-v-45a5994c]:last-child{border:none}.page_wrap .foot_btn[data-v-45a5994c]{width:100%;position:fixed;bottom:0;left:0;padding:%?30?% 0;background-color:#fff;border-top:1px solid #f1f1f1;z-index:111}.page_wrap .foot_btn .nums[data-v-45a5994c]{margin-left:%?30?%}.page_wrap .foot_btn .nums .left[data-v-45a5994c]{color:#333;font-size:%?22?%;margin-right:%?20?%}.page_wrap .foot_btn .nums .left .iconfont[data-v-45a5994c]{color:#d7d7d7;margin-right:%?10?%}.page_wrap .foot_btn .nums .right[data-v-45a5994c]{color:#fe5b07;font-size:%?40?%}.page_wrap .foot_btn .btns[data-v-45a5994c]{margin-right:%?30?%}.page_wrap .foot_btn .btns .edit[data-v-45a5994c]{margin-right:%?60?%;color:#fe5b07;font-size:%?28?%}.page_wrap .foot_btn .btns .btn[data-v-45a5994c]{width:%?156?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:%?30?%;font-size:%?28?%;display:inline-block}.page_wrap .foot_btn .btns .left[data-v-45a5994c]{border:1px solid #fe5b07;color:#fe5b07;margin-right:%?20?%}.page_wrap .foot_btn .btns .right[data-v-45a5994c]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);color:#fff}.page_wrap .add_product[data-v-45a5994c]{padding:%?30?% %?30?% 0 %?30?%;text-align:right;color:#fe5b07;font-size:%?28?%;justify-content:flex-end}',""]),t.exports=e},a1f1:function(t,e,a){"use strict";var i=a("6150"),s=a.n(i);s.a}}]);