(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-StockManage-AddPage"],{"0532":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"jPicker"},[t.pickerVisable?i("v-uni-view",{staticClass:"pickerMask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerVisable=!1}}},[i("v-uni-view",{staticClass:"alertArea JAnimateBtmIn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.doNothing.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pickerTop"},[i("v-uni-view",{staticClass:"lefBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelSel.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"midInput"},[[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])]],2),i("v-uni-view",{staticClass:"rigBtn",style:{color:t.sureColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sureSelect.apply(void 0,arguments)}}},[t._v("确定")])],1),i("v-uni-picker-view",{staticClass:"pickerView",attrs:{value:[t.nSel],"mask-style":"background-color:"+t.bgColor,"indicator-style":t.selStyle},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selChange.apply(void 0,arguments)}}},[i("v-uni-picker-view-column",t._l(t.listData,(function(e,a){return i("v-uni-view",{key:a,staticClass:"opItem"},[t._v(t._s(e[t.showKey]||e))])})),1)],1)],1)],1):t._e()],1)},s=[]},"05ff":function(t,e,i){var a=i("b6d7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1fc9690e",a,!0,{sourceMap:!1,shadowMode:!1})},4925:function(t,e,i){"use strict";i.r(e);var a=i("670e"),n=i("b678");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("ec92");var r,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"11fb2be2",null,!1,a["a"],r);e["default"]=c.exports},"53af":function(t,e,i){"use strict";var a=i("5653"),n=i.n(a);n.a},5653:function(t,e,i){var a=i("ec27");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1f1e9ab6",a,!0,{sourceMap:!1,shadowMode:!1})},"588c":function(t,e,i){"use strict";i.r(e);var a=i("9f83"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"5a73":function(t,e,i){"use strict";i.r(e);var a=i("0532"),n=i("f48f");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("53af");var r,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5e3670e4",null,!1,a["a"],r);e["default"]=c.exports},"5c87":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"datePicker",props:{maskColor:{type:String,default:"rgba(0,0,0,0.3)"}},data:function(){for(var t=new Date,e=[],i=t.getFullYear(),a=[],n=t.getMonth()+1,s=t.getDate(),r=1940;r<=t.getFullYear()+10;r++)e.push(r);for(var o=1;o<=12;o++)a.push(o);return{isShow:!1,isOpen:!1,years:e,months:a,days:[],year:i,month:n,day:s,value:[i-1940,n-1,s-1],visible:!0,indicatorStyle:"height: ".concat(Math.round(uni.getSystemInfoSync().screenWidth/7.5),"px;")}},methods:{dateConfirm:function(){var t=this.year+"-"+(this.month>9?this.month:"0"+this.month)+"-"+(this.day>9?this.day:"0"+this.day);this.$emit("dateConfirm",t),this.hide()},bindChange:function(t){var e=t.detail.value;this.year=this.years[e[0]],this.month=this.months[e[1]],this.day=this.days[e[2]]},show:function(){var t=this;this.isShow=!0,this.$nextTick((function(){setTimeout((function(){t.isOpen=!0}),20)}))},hide:function(){var t=this;this.isOpen=!1,setTimeout((function(){t.isShow=!1}),200)},handleClick:function(t){t.stopPropagation()}},watch:{month:{handler:function(t){if(t<8)if(t%2!==0){this.days=[];for(var e=1;e<=31;e++)this.days.push(e)}else{this.days=[];for(var i=1;i<=30;i++)this.days.push(i)}if(t>7)if(t%2===0){this.days=[];for(var a=1;a<=31;a++)this.days.push(a)}else{this.days=[];for(var n=1;n<=30;n++)this.days.push(n)}if(2===t)if(this.year%4===0){this.days=[];for(var s=1;s<=29;s++)this.days.push(s)}else{this.days=[];for(var r=1;r<=28;r++)this.days.push(r)}},deep:!0,immediate:!0},year:{handler:function(t){if(t%4===0){if(2===this.month){this.days=[];for(var e=1;e<=29;e++)this.days.push(e)}}else if(2===this.month){this.days=[];for(var i=1;i<=28;i++)this.days.push(i)}}},deep:!0,immediate:!0}};e.default=a},"63af":function(t,e,i){var a=i("b70d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2be4af23",a,!0,{sourceMap:!1,shadowMode:!1})},"670e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("v-uni-view",[i("v-uni-view",{staticClass:"date-picker-mask",class:[t.isOpen?"show-date-picker-mask":"hide-date-picekr-mask"],style:{backgroundColor:t.maskColor},attrs:{bubble:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"date-picker-container",class:[t.isOpen?"show-date-picker":"hide-date-picekr"],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"date-picker-title row between-center"},[i("v-uni-text",{staticClass:"date-picker-cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-text",{staticClass:"date-picker-confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dateConfirm.apply(void 0,arguments)}}},[t._v("确定")])],1),t.visible?i("v-uni-picker-view",{staticClass:"date-picker-box",attrs:{"indicator-style":t.indicatorStyle,value:t.value},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindChange.apply(void 0,arguments)}}},[i("v-uni-picker-view-column",{staticClass:"center"},t._l(t.years,(function(e,a){return i("v-uni-view",{key:a,staticClass:"date-picker-item center"},[i("v-uni-text",[t._v(t._s(e)+"年")])],1)})),1),i("v-uni-picker-view-column",t._l(t.months,(function(e,a){return i("v-uni-view",{key:a,staticClass:"date-picker-item center"},[i("v-uni-text",[t._v(t._s(e)+"月")])],1)})),1),i("v-uni-picker-view-column",t._l(t.days,(function(e,a){return i("v-uni-view",{key:a,staticClass:"date-picker-item center"},[i("v-uni-text",[t._v(t._s(e)+"日")])],1)})),1)],1):t._e()],1)],1):t._e()},s=[]},"848f":function(t,e,i){"use strict";i("c975"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"jPicker",data:function(){return{listData:this.options,nSel:-1,pickerVisable:!1,searchPosition:"middle",selStyle:"height:50px;"}},props:["options","showKey","valKey","val","position","disabled","bgColor","sureColor","title"],watch:{options:function(t){this.listData=t,this.selByValKey()},val:function(t){this.selByValKey()}},mounted:function(){this.selByValKey(),this.position&&(this.searchPosition=this.position)},methods:{showPicker:function(){this.disabled||(this.pickerVisable=!0,this.listData=this.options)},cancelSel:function(){if(this.pickerVisable=!1,this.val)if(this.valKey){for(var t=this.listData,e=0,i=t.length;e<i;e++)if(t[e][this.valKey]==this.val){this.nSel=e;break}}else this.nSel=this.val;else this.nSel=-1},sureSelect:function(){if(this.pickerVisable=!1,0==this.listData.length)this.$emit("sure",{});else{var t={pickerVal:this.nSel,pickerName:-1==this.nSel?this.listData[0]:this.listData[this.nSel]};this.valKey&&(-1!=this.nSel?(t=this.listData[this.nSel],t.pickerVal=t[this.valKey]):(t=this.listData[0],t.pickerVal=t[this.valKey])),this.$emit("sure",t)}},selChange:function(t){this.nSel=t.detail.value[0]},filterOp:function(t){var e=t.detail.value;if(""!=e){e=e.toLowerCase();var i=this.options;this.listData=[],this.nSel=0;for(var a=0;a<i.length;a++){var n=i[a];this.showKey&&(n=i[a][this.showKey]),n.toString().toLowerCase().indexOf(e)>-1&&this.listData.push(i[a])}}else this.listData=this.options,this.nSel=this.val?this.val:-1,this.selByValKey()},selByValKey:function(){var t=this.options;if(this.listData=t,this.valKey){for(var e=0,i=t.length;e<i;e++)if(t[e][this.valKey]==this.val){this.nSel=e;break}}else this.nSel=this.val},doNothing:function(){}}};e.default=a},"8a7b":function(t,e,i){"use strict";i.r(e);var a=i("efe2"),n=i("588c");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("a08f");var r,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"723f1f6b",null,!1,a["a"],r);e["default"]=c.exports},"9f83":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("3e0a"),n={data:function(){return{num:"",showPop:!1,selectDate:"",pageType:"",pageTxt:"",remark:"",stockData:null,columns:[{label:"仓库1",value:1},{label:"仓库2",value:2}]}},onLoad:function(t){var e;"out"==t.pageType?(e="新增出库单",this.pageTxt="出库"):"in"==t.pageType?(e="新增入库单",this.pageTxt="入库"):"overflow"==t.pageType?(e="新增报溢单",this.pageTxt="报溢"):"return"==t.pageType?(e="新增退货单",this.pageTxt="退货"):"inventory"==t.pageType?(e="新增盘点单",this.pageTxt="盘点"):"frmLoss"==t.pageType&&(e="新增报损单",this.pageTxt="报损"),this.pageType=t.pageType,uni.setNavigationBarTitle({title:e}),this.selectDate=(0,a.date)("Y-m-d",(new Date).getTime()),uni.getStorageSync("stockData")&&(this.stockData=uni.getStorageSync("stockData"))},mounted:function(){uni.getStorageSync("stockData")&&(this.$refs.detailList.step="three")},methods:{showPopHandle:function(t){2==t?this.$refs.dateEl.show():this.$refs.jPicker.pickerVisable=!0},dateConfirm:function(t){console.log(t),this.selectDate=t},confirm:function(t){console.log(t)}},onUnload:function(){console.log(2222),uni.removeStorageSync("stockData")},onBackPress:function(t){if("backbutton"==t.from)return uni.removeStorageSync("stockData"),uni.navigateTo({url:"./Index?pageType="+this.pageType}),!0}};e.default=n},a08f:function(t,e,i){"use strict";var a=i("63af"),n=i.n(a);n.a},b678:function(t,e,i){"use strict";i.r(e);var a=i("5c87"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},b6d7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.date-picker-mask[data-v-11fb2be2]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:99988}.date-picker-container[data-v-11fb2be2]{position:fixed;left:0;right:0;bottom:0;z-index:99999;background-color:#fff}.show-date-picker-mask[data-v-11fb2be2]{transition-property:opacity;transition-duration:.2s;transition-timing-function:ease;opacity:1}.hide-date-picekr-mask[data-v-11fb2be2]{transition-property:opacity;transition-duration:.2s;transition-timing-function:ease;opacity:0}.show-date-picker[data-v-11fb2be2]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.2s;transition-timing-function:ease;transform:translateY(0);opacity:1;-moz-transition-property:transform,opacity;-webkit-transition-property:transform,opacity;-o-transition-property:transform,opacity;-moz-transition-duration:.2s;-webkit-transition-duration:.2s;-webkit-transition-duration:.2s;-moz-transition-timing-function:ease;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;-moz-transform:translateY(0);-webkit-transform:translateY(0);-o-transform:translateY(0)}.hide-date-picekr[data-v-11fb2be2]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.2s;transition-timing-function:ease;transform:translateY(500px);opacity:1;-moz-transition-property:transform,opacity;-webkit-transition-property:transform,opacity;-o-transition-property:transform,opacity;-moz-transition-duration:.2s;-webkit-transition-duration:.2s;-webkit-transition-duration:.2s;-moz-transition-timing-function:ease;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;-moz-transform:translateY(500px);-webkit-transform:translateY(500px);-o-transform:translateY(500px)}.date-picker-title[data-v-11fb2be2]{height:%?100?%;padding:0 %?20?%;box-shadow:0 %?1?% %?1?% #e4e4e4}.date-picker-confirm[data-v-11fb2be2]{padding:%?10?% %?30?%;font-size:%?32?%;color:#fe5b07}.date-picker-cancel[data-v-11fb2be2]{padding:%?10?% %?30?%;font-size:%?32?%;color:#aaa}.date-picker-box[data-v-11fb2be2]{width:%?750?%;height:%?500?%;padding:0 %?20?%;box-sizing:border-box;background-color:#fff}.date-picker-item[data-v-11fb2be2]{height:%?100?%}.row[data-v-11fb2be2]{display:flex;flex-direction:row}.center[data-v-11fb2be2]{display:flex;justify-content:center;align-items:center}.between-center[data-v-11fb2be2]{justify-content:space-between;align-items:center}',""]),t.exports=e},b70d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-723f1f6b]{padding-bottom:%?100?%}.page_wrap .list[data-v-723f1f6b]{background-color:#fff;padding:0 %?30?%}.page_wrap .list .item[data-v-723f1f6b]{padding:%?40?% 0;border-bottom:1px solid #e1e1e1;justify-content:space-between}.page_wrap .list .item .left[data-v-723f1f6b]{font-size:%?30?%;color:#333}.page_wrap .list .item .right .label[data-v-723f1f6b]{color:#666;font-size:%?28?%;margin-right:%?12?%}.page_wrap .list .item .right[data-v-723f1f6b] .uni-input-placeholder{text-align:right}.page_wrap .list .item .right[data-v-723f1f6b] uni-input{text-align:right}.page_wrap .list .item .input[data-v-723f1f6b]{width:%?400?%}.page_wrap .list .item[data-v-723f1f6b]:last-child{border:none}.page_wrap .btn_default[data-v-723f1f6b]{width:90%;margin:auto;margin-top:%?300?%}',""]),t.exports=e},ec27:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.jPicker[data-v-5e3670e4]{width:100%}.jPicker .showLine[data-v-5e3670e4]{width:100%;display:inline-block}.pickerMask[data-v-5e3670e4]{background-color:rgba(0,0,0,.5);height:100vh;width:100vw;position:fixed;left:0;top:0;z-index:999}.alertArea[data-v-5e3670e4]{position:fixed;bottom:0;left:0;width:100vw}.alertArea .searchInput[data-v-5e3670e4]{width:100%;position:relative}.alertArea .searchInput .clickArea[data-v-5e3670e4]{width:100%;display:flex;align-items:center;justify-content:center;height:36px}.alertArea .searchInput .clickArea .jInput[data-v-5e3670e4]{text-align:left;width:90%;border:none;height:30px;font-size:17px;padding:2px 8px;box-sizing:border-box;color:#fff}.alertArea .searchInput .clickArea .searchLogo[data-v-5e3670e4]{width:30px;height:30px;line-height:30px;text-align:center}.alertArea .searchInput[data-v-5e3670e4]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#678699;-webkit-filter:blur(18px);filter:blur(18px);z-index:-1}.alertArea .pickerTop[data-v-5e3670e4]{background-color:#fff;height:52px;display:flex;align-items:center;font-size:18px;box-sizing:border-box;justify-content:space-around}.alertArea .pickerTop .lefBtn[data-v-5e3670e4],\r\n.alertArea .pickerTop .rigBtn[data-v-5e3670e4]{font-size:%?32?%;line-height:1rem}.alertArea .pickerTop .lefBtn[data-v-5e3670e4]{color:#aaa}.alertArea .pickerTop .rigBtn[data-v-5e3670e4]{color:#fe5b07}.alertArea .pickerTop .midInput[data-v-5e3670e4]{width:64%;height:30px;position:relative;text-align:center;line-height:30px}.alertArea .pickerTop .midInput .searchArea[data-v-5e3670e4]{text-align:left;background-color:#efefef;border-radius:20px;padding:4px 10px}.alertArea .pickerTop .midInput .title[data-v-5e3670e4]{font-size:%?36?%;color:#333;font-weight:700}.alertArea .pickerTop .midInput .searchIcon[data-v-5e3670e4]{position:absolute;right:5px;top:0;width:30px;height:30px;text-align:center;display:flex;align-items:center}.alertArea .pickerView[data-v-5e3670e4]{background-color:#fff;width:100%;height:300px;left:0}.alertArea .pickerView .opItem[data-v-5e3670e4]{line-height:50px;text-align:center;color:#000}.JAnimateBtmIn[data-v-5e3670e4]{-webkit-animation:btmIn-data-v-5e3670e4 .3s ease;animation:btmIn-data-v-5e3670e4 .3s ease}@-webkit-keyframes btmIn-data-v-5e3670e4{0%{-webkit-transform:translateY(666px);transform:translateY(666px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes btmIn-data-v-5e3670e4{0%{-webkit-transform:translateY(666px);transform:translateY(666px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}',""]),t.exports=e},ec92:function(t,e,i){"use strict";var a=i("05ff"),n=i.n(a);n.a},efe2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uInput:i("5e42").default,detailList:i("40c3").default,jPicker:i("5a73").default,itmisterDatePicker:i("4925").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page_wrap"},[i("v-uni-view",{staticClass:"list mt20"},[i("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(1)}}},[i("v-uni-view",{staticClass:"left "},[t._v(t._s(t.pageTxt)+"仓库")]),i("v-uni-view",{staticClass:"right row"},[i("v-uni-text",{staticClass:"label"},[t._v("1231231")]),i("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),i("v-uni-view",{staticClass:"item row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopHandle(2)}}},[i("v-uni-view",{staticClass:"left "},[t._v("日期")]),i("v-uni-view",{staticClass:"right row"},[i("v-uni-text",{staticClass:"label"},[t._v(t._s(t.selectDate))]),i("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),i("v-uni-view",{staticClass:"item row"},[i("v-uni-view",{staticClass:"left "},[t._v("备注")]),i("v-uni-view",{staticClass:"right "},[i("u-input",{attrs:{border:"none",placeholder:"请输入"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1),t.stockData?i("v-uni-view",{staticClass:"slot_wrap"},[i("detail-list",{ref:"detailList",attrs:{pageType:t.pageType,pageTxt:t.pageTxt,nowParentPage:"AddPage",datas:t.stockData}})],1):i("v-uni-view",{staticClass:"btn_default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./SelectGood?pageType="+t.pageType)}}},[t._v("选择商品")]),i("jPicker",{ref:"jPicker",attrs:{title:"选择仓库",options:t.columns,valKey:"value",showKey:"label"},on:{sure:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}}),i("itmister-date-picker",{ref:"dateEl",on:{dateConfirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dateConfirm.apply(void 0,arguments)}}})],1)},s=[]},f48f:function(t,e,i){"use strict";i.r(e);var a=i("848f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a}}]);