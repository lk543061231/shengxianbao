(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ShopCar-ShopCar"],{"19b1":function(t,i,s){"use strict";var o=s("f402"),e=s.n(o);e.a},"29a3":function(t,i,s){"use strict";var o;s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return a})),s.d(i,"a",(function(){return o}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"common-car"},[t.isEmpty?s("v-uni-view",{staticClass:"empty-shop-car"},[s("v-uni-text",[t._v("当前您的购物车是空的")]),s("v-uni-view",{staticClass:"empty-shop-car-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/Home/Home","switch")}}},[s("v-uni-text",[t._v("去逛逛")])],1)],1):s("v-uni-view",{staticClass:"shop-car mt10"},[s("v-uni-view",{staticClass:"sale row"},[s("v-uni-view"),s("v-uni-view",{staticClass:"sale_right row",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isCut=!t.isCut}}},[t._v("管理")])],1),s("v-uni-view",{staticClass:"sale row"},[s("v-uni-view",{staticClass:"sale_left row"},[s("v-uni-text",{staticClass:"left_txt"},[t._v("满100减7")]),s("v-uni-text",{staticClass:"right_txt"},[t._v("订货满100减7元")])],1),s("v-uni-view",{staticClass:"sale_right row"},[t._v("去逛逛"),s("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),s("v-uni-view",{staticClass:"store-box"},t._l(t.dataList,(function(i,o){return s("v-uni-view",{key:o,staticClass:"goodsInfo ",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.toDetail(i)}}},[2==i.checked?s("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png",mode:""},on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.goodsCheck(o,i.checked)}}}):s("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:""},on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.goodsCheck(o,i.checked)}}}),s("v-uni-view",{staticClass:"goodsInfo-right"},[s("v-uni-image",{staticClass:"goods-image",attrs:{src:i.productImage,mode:""}}),s("v-uni-view",{staticClass:"goodsInfo-box"},[s("v-uni-text",{staticClass:"goods-name"},[t._v(t._s(i.productName)+" ("+t._s(i.productNameAlias)+")")]),s("v-uni-text",{staticClass:"spe"},[t._v("规格："+t._s(i.productUnit))]),s("v-uni-view",{staticClass:"goods-box"},[s("v-uni-text",{staticClass:"goods-price"},[t._v("¥"+t._s(i.unitPrice))]),s("v-uni-view",{staticClass:"goods-num-box"},[s("v-uni-view",{staticClass:"goods-image",on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.sub(o,i.buyQuantity)}}},[s("v-uni-text",[t._v("-")])],1),s("v-uni-view",{staticClass:"goods-num"},[s("v-uni-text",[t._v(t._s(i.buyQuantity))])],1),s("v-uni-view",{staticClass:"goods-image",on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.add(o,i.buyQuantity)}}},[s("v-uni-text",[t._v("+")])],1)],1)],1),s("v-uni-view",{staticClass:"remark"},[t._v("备注："+t._s(i.remark||"无"))]),s("v-uni-view",{staticClass:"subtotal mt20"},[t._v("小计：￥"+t._s(2==i.checked?(i.unitPrice*i.buyQuantity).toFixed(2):0))])],1)],1)],1)})),1),s("v-uni-view",{staticClass:"statistics-box"},[s("v-uni-view",{staticClass:"explain"},[s("v-uni-text",{staticClass:"e1"},[t._v("订货满"),s("v-uni-text",{staticClass:"e2"},[t._v("¥1000.00")]),t._v("免运费")],1)],1),s("v-uni-view",{staticClass:"statistics"},[t.statisticsIndex?s("v-uni-view",{staticClass:"statistics-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.allCheck.apply(void 0,arguments)}}},[s("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png",mode:""}}),s("v-uni-text",[t._v("全选")])],1):s("v-uni-view",{staticClass:"statistics-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.allCheck.apply(void 0,arguments)}}},[s("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:""}}),s("v-uni-text",[t._v("全选")])],1),t.isCut?s("v-uni-view",{staticClass:"statistics-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.accounts.apply(void 0,arguments)}}},[s("v-uni-text",[t._v("合计：")]),s("v-uni-text",{staticClass:"text-color"},[t._v("¥"+t._s(t.total))]),s("v-uni-view",{staticClass:"btn to_pay",class:t.total>0&&"is_pay"},[s("v-uni-text",[t._v("去结算")])],1)],1):s("v-uni-view",{staticClass:"statistics-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delect.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"btn to_pay is_pay"},[s("v-uni-text",[t._v("删除")])],1)],1)],1),s("v-uni-view",{staticClass:"gap"})],1)],1)],1)},a=[]},"69f4":function(t,i,s){"use strict";var o=s("4ea4");s("7db0"),s("4160"),s("a9e3"),s("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,s("96cf");var e=o(s("1da1")),a={name:"commonCar",data:function(){return{isEmpty:!0,iPhoneX:!1,statisticsIndex:!1,total:0,isCut:!0}},onShow:function(){this.iPhoneX=uni.getStorageSync("iPhoneX"),this.dataList=[],this.getData()},methods:{getData:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.queryUrl="api/bmallshoppingcart/getShoppingCartPage",i.next=3,t.getList();case 3:s=i.sent,s.forEach((function(t){t.checked=2})),t.dataList=s,0==s.length?t.isEmpty=!0:t.isEmpty=!1,t.allCheck();case 8:case"end":return i.stop()}}),i)})))()},delect:function(t){var i=this,s=this.judgeSelect();s.length?uni.showModal({title:"提示",content:"确认删除勾选商品吗？",success:function(t){t.confirm&&i.$http("api/bmallshoppingcart",s,"delete").then((function(t){uni.showToast({title:"删除成功",icon:"none"}),i.dataList=[],i.getList().then((function(t){0==t.length?i.isEmpty=!0:t.isEmpty=!1}))}))}}):uni.showToast({title:"您当前未选择任何商品,删除失败",icon:"none"})},goodsCheck:function(t,i){this.dataList[t].checked=1==i?2:1,this.$forceUpdate();var s=!0;this.dataList.find((function(t,i){1==t.checked&&(s=!1)})),this.statisticsIndex=0!=s,this.statistics()},toDetail:function(t){this.navTo("/pagesB/ProductDetail/ProductDetail?id="+t.productId+"&skuId="+t.productSkuId)},sub:function(t,i){1!=i&&(this.dataList[t].buyQuantity--,this.statistics())},add:function(t,i){this.dataList[t].buyQuantity++,this.statistics()},allCheck:function(){this.statisticsIndex?(this.dataList.find((function(t,i){t.checked=1})),this.statisticsIndex=!1):(this.dataList.find((function(t,i){t.checked=2})),this.statisticsIndex=!0),this.statistics()},statistics:function(){var t=0;this.dataList.find((function(i,s){2==i.checked&&(t+=i.unitPrice*i.buyQuantity)})),this.total=t.toFixed(2)},cut:function(){this.isCut=!this.isCut,this.statisticsIndex=!0,this.allCheck()},accounts:function(){var t=this.judgeSelect();t?this.navTo("/pages/ConfirmOrder/ConfirmOrder"):uni.showToast({title:"您当前未选择任何商品,结算失败",icon:"none"})},judgeSelect:function(){var t=[];return this.dataList.find((function(i,s){2==i.checked&&t.push(Number(i.id))})),t}}};i.default=a},"7fb2":function(t,i,s){"use strict";s.r(i);var o=s("69f4"),e=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(i,t,(function(){return o[t]}))}(a);i["default"]=e.a},bc60:function(t,i,s){var o=s("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.common-car[data-v-609c644e]{width:%?750?%;display:flex;flex-direction:column;align-items:center;background:#f5f5f5}.empty-shop-car[data-v-609c644e]{width:%?750?%;min-height:%?680?%;display:flex;flex-direction:column;align-items:center}.empty-shop-car .empty-shop-car-image[data-v-609c644e]{width:%?340?%;height:%?278?%;margin-top:%?102?%}.empty-shop-car uni-text[data-v-609c644e]{margin-top:%?40?%;font-size:%?28?%;font-weight:400;color:#666}.empty-shop-car .empty-shop-car-btn[data-v-609c644e]{width:%?240?%;height:%?90?%;background:#fbbc02;border-radius:%?200?%;margin-top:%?40?%;text-align:center;line-height:%?90?%;font-size:%?30?%;font-weight:400;color:#313133}.shop-car[data-v-609c644e]{width:%?750?%;display:flex;flex-direction:column;align-items:center}.shop-car .sale[data-v-609c644e]{width:92%;background-color:#fff;padding:%?10?% %?30?%;justify-content:space-between}.shop-car .sale .sale_left .left_txt[data-v-609c644e]{width:%?160?%;height:%?46?%;background-image:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/as.png);background-repeat:no-repeat;color:#fff;font-size:%?18?%;display:block;background-size:100% 100%;text-align:right;padding-right:%?10?%;line-height:%?46?%}.shop-car .sale .sale_left .right_txt[data-v-609c644e]{color:#2f2f2f;font-size:%?24?%;margin-left:%?20?%}.shop-car .sale .sale_right[data-v-609c644e]{color:#fe5b07;font-size:%?28?%}.shop-car .shop-car-header[data-v-609c644e]{width:%?690?%;height:%?80?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.shop-car .shop-car-header uni-text[data-v-609c644e]{font-size:%?28?%;font-weight:400;color:#313133}.shop-car .store-box[data-v-609c644e]{width:%?750?%;margin-bottom:%?200?%;display:flex;flex-direction:column;align-items:center}.shop-car .store-box .store-header[data-v-609c644e]{width:%?690?%;height:%?78?%;padding:0 %?30?%;display:flex;flex-direction:row;align-items:center;font-size:%?28?%;font-weight:400;color:#313133}.shop-car .store-box .store-header .checked-image[data-v-609c644e]{width:%?40?%;height:%?40?%}.shop-car .store-box .store-header uni-text[data-v-609c644e]{font-size:%?28?%;font-weight:400;color:#313133;margin-left:%?20?%}.shop-car .store-box .store-header .label[data-v-609c644e]{width:%?14?%;height:%?24?%;margin-left:%?10?%;margin-top:%?5?%}.shop-car .store-box .goodsInfo[data-v-609c644e]{display:flex;flex-direction:row;align-items:center;margin-bottom:%?10?%;background-color:#fff;padding:0 %?30?%}.shop-car .store-box .goodsInfo[data-v-609c644e]:nth-last-child(1){border:none}.shop-car .store-box .goodsInfo .checked-image[data-v-609c644e]{width:%?40?%;height:%?40?%}.shop-car .store-box .goodsInfo .goodsInfo-right[data-v-609c644e]{width:%?634?%;margin-left:%?16?%;display:flex;flex-direction:row;padding:%?30?% 0}.shop-car .store-box .goodsInfo .goodsInfo-right .goods-image[data-v-609c644e]{width:%?180?%;height:%?180?%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box[data-v-609c644e]{width:%?428?%;margin-left:%?24?%;display:flex;flex-direction:column;align-items:center}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-name[data-v-609c644e]{width:%?428?%;font-size:%?28?%;font-weight:400;color:#2f2f2f}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .spe[data-v-609c644e]{width:%?428?%;margin-top:%?10?%;font-size:%?24?%;font-weight:400;color:#919298}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box[data-v-609c644e]{width:%?428?%;margin-top:%?18?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-price[data-v-609c644e]{font-size:%?32?%;font-weight:400;color:#fe5b07}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box[data-v-609c644e]{width:%?168?%;height:%?46?%;display:flex;flex-direction:row;align-items:center}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box .goods-image[data-v-609c644e]{width:%?46?%;height:%?44?%;text-align:center;line-height:%?44?%;border:%?1?% solid #cfcfcf;font-size:%?38?%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box .goods-num[data-v-609c644e]{width:%?76?%;height:%?44?%;text-align:center;line-height:%?44?%;font-size:%?33?%;font-weight:400;color:#666;border-top:1px solid #cfcfcf;border-bottom:1px solid #cfcfcf}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .remark[data-v-609c644e]{padding:%?20?% 0;color:#999;font-size:%?22?%;border-top:1px solid #eee;border-bottom:1px solid #eee;margin-top:%?30?%;width:100%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .subtotal[data-v-609c644e]{color:#2f2f2f;font-size:%?32?%;width:100%;text-align:right}.shop-car .statistics-box[data-v-609c644e]{width:%?750?%;display:flex;flex-direction:column;align-items:center;background-color:#fff;position:fixed;bottom:%?64?%}.shop-car .statistics-box .explain[data-v-609c644e]{padding:%?20?% 0;width:100%;color:#333;font-size:%?22?%;border-top:%?2?% solid #f1f1f1;border-bottom:1px solid #eee}.shop-car .statistics-box .explain .e1[data-v-609c644e]{margin-left:%?30?%}.shop-car .statistics-box .explain .e2[data-v-609c644e]{color:#fe5b07}.shop-car .statistics-box .statistics[data-v-609c644e]{width:%?720?%;padding:0 %?30?%;height:%?98?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .statistics-box .statistics .statistics-left[data-v-609c644e]{width:%?120?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .statistics-box .statistics .statistics-left uni-image[data-v-609c644e]{width:%?40?%;height:%?40?%}.shop-car .statistics-box .statistics .statistics-left uni-text[data-v-609c644e]{font-size:%?30?%;font-weight:400;color:#313133}.shop-car .statistics-box .statistics .statistics-right[data-v-609c644e]{width:%?600?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.shop-car .statistics-box .statistics .statistics-right .btn[data-v-609c644e]{text-align:center;margin-left:%?40?%}.shop-car .statistics-box .statistics .statistics-right uni-text[data-v-609c644e]{font-size:%?30?%;font-weight:400;color:#313133}.shop-car .statistics-box .statistics .statistics-right .to_pay[data-v-609c644e]{background-color:#c6c6c6;padding:%?8?% %?26?%;border-radius:%?32?%;font-size:%?28?%}.shop-car .statistics-box .statistics .statistics-right .to_pay uni-text[data-v-609c644e]{color:#fff}.shop-car .statistics-box .statistics .statistics-right .is_pay[data-v-609c644e]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20)}.shop-car .statistics-box .statistics .statistics-right .text-color[data-v-609c644e]{color:#f21212}.shop-car .statistics-box .gap[data-v-609c644e]{width:%?750?%;height:%?40?%}',""]),t.exports=i},ccb6:function(t,i,s){"use strict";s.r(i);var o=s("29a3"),e=s("7fb2");for(var a in e)"default"!==a&&function(t){s.d(i,t,(function(){return e[t]}))}(a);s("19b1");var n,c=s("f0c5"),r=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"609c644e",null,!1,o["a"],n);i["default"]=r.exports},f402:function(t,i,s){var o=s("bc60");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=s("4f06").default;e("127e8f03",o,!0,{sourceMap:!1,shadowMode:!1})}}]);