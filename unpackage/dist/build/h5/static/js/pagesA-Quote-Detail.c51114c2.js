(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Quote-Detail"],{"083d":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-1820ec2b]{padding-bottom:%?30?%}.page_wrap .info_list[data-v-1820ec2b]{background-color:#fff;padding:0 %?30?%}.page_wrap .info_list .item[data-v-1820ec2b]{padding:%?30?% 0;border-bottom:%?2?% solid #f1f1f1}.page_wrap .info_list .item[data-v-1820ec2b]:last-child{border:none}.page_wrap .slot_wrap .item[data-v-1820ec2b]{margin-bottom:%?30?%}.page_wrap .slot_wrap .item .item_wrap[data-v-1820ec2b]{background-color:#fff;align-items:flex-start;padding:%?30?%}.page_wrap .slot_wrap .item .item_wrap .row .img[data-v-1820ec2b]{width:%?100?%;height:%?100?%}.page_wrap .slot_wrap .item .img[data-v-1820ec2b]{width:%?120?%;margin-right:%?30?%}.page_wrap .slot_wrap .item .info[data-v-1820ec2b]{flex:1;position:relative}.page_wrap .slot_wrap .item .info .bao[data-v-1820ec2b]{background-color:#fff4ed;color:#fe5b07;font-size:%?20?%;border-radius:%?2?%;padding:0 %?4?%;margin-right:%?10?%}.page_wrap .foot_btn[data-v-1820ec2b]{width:100%;position:fixed;bottom:0;left:0;padding:%?30?% 0;background-color:#fff;border-top:1px solid #f1f1f1;z-index:111;text-align:right}.page_wrap .foot_btn .btn[data-v-1820ec2b]{width:%?156?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:%?30?%;font-size:%?28?%;display:inline-block;background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20);color:#fff;margin-right:%?30?%}',""]),t.exports=i},2224:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"info_list mt20"},[a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("报价单号")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.offerpriceCode))])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("状态")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(-1==t.pageDetail.billState?"已作废":1==t.pageDetail.billState?"已审核":"待审核"))])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("价格组")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.customerlevelName))])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("报价时间")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.createDate))])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("报价时间段")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.startDate)+"到"+t._s(t.pageDetail.endDate))])],1),a("v-uni-view",{staticClass:"item row jc_sb"},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("备注")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v(t._s(t.pageDetail.remark||"无"))])],1),a("v-uni-view",{staticClass:"item row jc_sb",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("./Log?id="+t.pageDetail.id+"&pageUrl=api/salesofferPrice/info")}}},[a("v-uni-view",{staticClass:"left f28-c333"},[t._v("操作日志")]),a("v-uni-view",{staticClass:"f28-c666"},[t._v("查看"),a("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1)],1),a("v-uni-view",{staticClass:"slot_wrap mt20"},t._l(t.pageDetail.infoInfoVoList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"item "},[a("v-uni-view",{staticClass:"item_wrap row"},[a("v-uni-view",{staticClass:"row"},[a("v-uni-image",{staticClass:"img",attrs:{src:i.defaultImage,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"row jc_sb"},[a("v-uni-text",{staticClass:"f28-c333"},[t._v(t._s(i.productName))]),a("v-uni-text",{staticClass:"f24-c999"},[t._v("商品编号："+t._s(i.productCode))])],1),a("v-uni-view",{staticClass:"desc mt10 f24-c999"},[t._v(t._s(i.productNameAlias))]),a("v-uni-view",{staticClass:"price row  mt10"},[a("v-uni-text",{staticClass:"bao mr10"},[t._v(t._s(i.auxiliaryUnit))]),a("v-uni-text",{staticClass:"f24-c999 mr10"},[t._v(t._s(i.productUnit))]),a("v-uni-text",{staticClass:"f24-c999"},[t._v("￥"+t._s(i.costPrice||i.returnorderPrice)+"元/"+t._s(i.productUnit))])],1)],1)],1)],1)})),1),a("v-uni-view",{staticClass:"foot_btn  "},[a("v-uni-text",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit(5)}}},[t._v("打印")])],1)],1)},n=[]},"30c7":function(t,i,a){"use strict";a.r(i);var e=a("2224"),s=a("969c");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("5665");var c,r=a("f0c5"),o=Object(r["a"])(s["default"],e["b"],e["c"],!1,null,"1820ec2b",null,!1,e["a"],c);i["default"]=o.exports},5665:function(t,i,a){"use strict";var e=a("eeb3"),s=a.n(e);s.a},6874:function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(a("5530")),n=a("2f62"),c={data:function(){return{pageType:"",pageTxt:"",showEdit:!1,pageUrl:"",id:"",pageDetail:{}}},onLoad:function(t){this.id=t.id,this.getDetail()},computed:(0,s.default)({},(0,n.mapState)(["$StockManageInfo"])),onShow:function(){},methods:(0,s.default)((0,s.default)({},(0,n.mapMutations)(["SET_STOCK_MANAGE_INFO"])),{},{getDetail:function(){var t=this;this.$http("api/salesofferPrice/info",{id:this.id}).then((function(i){t.pageDetail=i}))}})};i.default=c},"969c":function(t,i,a){"use strict";a.r(i);var e=a("6874"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},eeb3:function(t,i,a){var e=a("083d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("3d426dbe",e,!0,{sourceMap:!1,shadowMode:!1})}}]);