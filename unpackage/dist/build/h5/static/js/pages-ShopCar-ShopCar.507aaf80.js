(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ShopCar-ShopCar"],{"2d70":function(t,s,i){var o=i("24fb");s=o(!1),s.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.common-car[data-v-c60519a2]{width:%?750?%;display:flex;flex-direction:column;align-items:center;background:#f5f5f5}.empty-shop-car[data-v-c60519a2]{width:%?750?%;min-height:%?680?%;display:flex;flex-direction:column;align-items:center}.empty-shop-car .empty-shop-car-image[data-v-c60519a2]{width:%?340?%;height:%?278?%;margin-top:%?102?%}.empty-shop-car uni-text[data-v-c60519a2]{margin-top:%?40?%;font-size:%?28?%;font-weight:400;color:#666}.empty-shop-car .empty-shop-car-btn[data-v-c60519a2]{width:%?240?%;height:%?90?%;background:#fbbc02;border-radius:%?200?%;margin-top:%?40?%;text-align:center;line-height:%?90?%;font-size:%?30?%;font-weight:400;color:#313133}.shop-car[data-v-c60519a2]{width:%?750?%;display:flex;flex-direction:column;align-items:center}.shop-car .sale[data-v-c60519a2]{width:92%;background-color:#fff;padding:%?10?% %?30?%;justify-content:space-between}.shop-car .sale .sale_left .left_txt[data-v-c60519a2]{width:%?160?%;height:%?46?%;background-image:url(https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/as.png);background-repeat:no-repeat;color:#fff;font-size:%?18?%;display:block;background-size:100% 100%;text-align:right;padding-right:%?10?%;line-height:%?46?%}.shop-car .sale .sale_left .right_txt[data-v-c60519a2]{color:#2f2f2f;font-size:%?24?%;margin-left:%?20?%}.shop-car .sale .sale_right[data-v-c60519a2]{color:#fe5b07;font-size:%?28?%}.shop-car .shop-car-header[data-v-c60519a2]{width:%?690?%;height:%?80?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.shop-car .shop-car-header uni-text[data-v-c60519a2]{font-size:%?28?%;font-weight:400;color:#313133}.shop-car .store-box[data-v-c60519a2]{width:%?750?%;margin-bottom:%?20?%;display:flex;flex-direction:column;align-items:center}.shop-car .store-box .store-header[data-v-c60519a2]{width:%?690?%;height:%?78?%;padding:0 %?30?%;display:flex;flex-direction:row;align-items:center;font-size:%?28?%;font-weight:400;color:#313133}.shop-car .store-box .store-header .checked-image[data-v-c60519a2]{width:%?40?%;height:%?40?%}.shop-car .store-box .store-header uni-text[data-v-c60519a2]{font-size:%?28?%;font-weight:400;color:#313133;margin-left:%?20?%}.shop-car .store-box .store-header .label[data-v-c60519a2]{width:%?14?%;height:%?24?%;margin-left:%?10?%;margin-top:%?5?%}.shop-car .store-box .goodsInfo[data-v-c60519a2]{display:flex;flex-direction:row;align-items:center;margin-bottom:%?10?%;background-color:#fff;padding:0 %?30?%}.shop-car .store-box .goodsInfo[data-v-c60519a2]:nth-last-child(1){border:none}.shop-car .store-box .goodsInfo .checked-image[data-v-c60519a2]{width:%?40?%;height:%?40?%}.shop-car .store-box .goodsInfo .goodsInfo-right[data-v-c60519a2]{width:%?634?%;margin-left:%?16?%;display:flex;flex-direction:row;padding:%?30?% 0}.shop-car .store-box .goodsInfo .goodsInfo-right .goods-image[data-v-c60519a2]{width:%?180?%;height:%?180?%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box[data-v-c60519a2]{width:%?428?%;margin-left:%?24?%;display:flex;flex-direction:column;align-items:center}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-name[data-v-c60519a2]{width:%?428?%;font-size:%?28?%;font-weight:400;color:#2f2f2f}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .spe[data-v-c60519a2]{width:%?428?%;margin-top:%?10?%;font-size:%?24?%;font-weight:400;color:#919298}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box[data-v-c60519a2]{width:%?428?%;margin-top:%?18?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-price[data-v-c60519a2]{font-size:%?32?%;font-weight:400;color:#fe5b07}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box[data-v-c60519a2]{width:%?168?%;height:%?46?%;display:flex;flex-direction:row;align-items:center}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box .goods-image[data-v-c60519a2]{width:%?46?%;height:%?44?%;text-align:center;line-height:%?44?%;border:%?1?% solid #cfcfcf;font-size:%?38?%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .goods-box .goods-num-box .goods-num[data-v-c60519a2]{width:%?76?%;height:%?44?%;text-align:center;line-height:%?44?%;font-size:%?33?%;font-weight:400;color:#666;border-top:1px solid #cfcfcf;border-bottom:1px solid #cfcfcf}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .remark[data-v-c60519a2]{padding:%?20?% 0;color:#999;font-size:%?22?%;border-top:1px solid #eee;border-bottom:1px solid #eee;margin-top:%?30?%;width:100%}.shop-car .store-box .goodsInfo .goodsInfo-right .goodsInfo-box .subtotal[data-v-c60519a2]{color:#2f2f2f;font-size:%?32?%;width:100%;text-align:right}.shop-car .statistics-box[data-v-c60519a2]{width:%?750?%;display:flex;flex-direction:column;align-items:center;background-color:#fff;position:fixed;bottom:%?64?%}.shop-car .statistics-box .explain[data-v-c60519a2]{padding:%?20?% 0;width:100%;color:#333;font-size:%?22?%;border-bottom:1px solid #eee}.shop-car .statistics-box .explain .e1[data-v-c60519a2]{margin-left:%?30?%}.shop-car .statistics-box .explain .e2[data-v-c60519a2]{color:#fe5b07}.shop-car .statistics-box .statistics[data-v-c60519a2]{width:%?720?%;padding:0 %?30?%;height:%?98?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .statistics-box .statistics .statistics-left[data-v-c60519a2]{width:%?120?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.shop-car .statistics-box .statistics .statistics-left uni-image[data-v-c60519a2]{width:%?40?%;height:%?40?%}.shop-car .statistics-box .statistics .statistics-left uni-text[data-v-c60519a2]{font-size:%?30?%;font-weight:400;color:#313133}.shop-car .statistics-box .statistics .statistics-right[data-v-c60519a2]{width:%?600?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.shop-car .statistics-box .statistics .statistics-right .btn[data-v-c60519a2]{text-align:center;margin-left:%?40?%}.shop-car .statistics-box .statistics .statistics-right uni-text[data-v-c60519a2]{font-size:%?30?%;font-weight:400;color:#313133}.shop-car .statistics-box .statistics .statistics-right .to_pay[data-v-c60519a2]{background-color:#c6c6c6;padding:%?8?% %?26?%;border-radius:%?32?%;font-size:%?28?%}.shop-car .statistics-box .statistics .statistics-right .to_pay uni-text[data-v-c60519a2]{color:#fff}.shop-car .statistics-box .statistics .statistics-right .is_pay[data-v-c60519a2]{background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20)}.shop-car .statistics-box .statistics .statistics-right .text-color[data-v-c60519a2]{color:#f21212}.shop-car .statistics-box .gap[data-v-c60519a2]{width:%?750?%;height:%?40?%}',""]),t.exports=s},"545b":function(t,s,i){"use strict";var o;i.d(s,"b",(function(){return a})),i.d(s,"c",(function(){return e})),i.d(s,"a",(function(){return o}));var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",{staticClass:"common-car"},[t.isEmpty?i("v-uni-view",{staticClass:"empty-shop-car"},[i("v-uni-text",[t._v("当前您的购物车是空的")]),i("v-uni-view",{staticClass:"empty-shop-car-btn"},[i("v-uni-text",[t._v("去逛逛")])],1)],1):i("v-uni-view",{staticClass:"shop-car mt10"},[i("v-uni-view",{staticClass:"sale row"},[i("v-uni-view",{staticClass:"sale_left row"},[i("v-uni-text",{staticClass:"left_txt"},[t._v("满100减7")]),i("v-uni-text",{staticClass:"right_txt"},[t._v("订货满100减7元")])],1),i("v-uni-view",{staticClass:"sale_right row"},[t._v("去逛逛"),i("v-uni-text",{staticClass:"iconfont icon-jinru"})],1)],1),i("v-uni-view",{staticClass:"store-box"},t._l(t.datas,(function(s,o){return i("v-uni-view",{key:o,staticClass:"goodsInfo "},[2==s.checked?i("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsCheck(o,s.checked)}}}):i("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsCheck(o,s.checked)}}}),i("v-uni-view",{staticClass:"goodsInfo-right"},[i("v-uni-image",{staticClass:"goods-image",attrs:{src:s.img,mode:""}}),i("v-uni-view",{staticClass:"goodsInfo-box"},[i("v-uni-text",{staticClass:"goods-name"},[t._v(t._s(s.title))]),i("v-uni-text",{staticClass:"spe"},[t._v("规格："+t._s(s.remark))]),i("v-uni-view",{staticClass:"goods-box"},[i("v-uni-text",{staticClass:"goods-price"},[t._v("¥"+t._s(s.price))]),i("v-uni-view",{staticClass:"goods-num-box"},[i("v-uni-view",{staticClass:"goods-image",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sub(o,s.number)}}},[i("v-uni-text",[t._v("-")])],1),i("v-uni-view",{staticClass:"goods-num"},[i("v-uni-text",[t._v(t._s(s.number))])],1),i("v-uni-view",{staticClass:"goods-image",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add(o,s.number)}}},[i("v-uni-text",[t._v("+")])],1)],1)],1),i("v-uni-view",{staticClass:"remark"},[t._v("备注")]),i("v-uni-view",{staticClass:"subtotal mt20"},[t._v("小计：￥"+t._s(2==s.checked?(s.price*s.number).toFixed(2):0))])],1)],1)],1)})),1),i("v-uni-view",{staticClass:"statistics-box"},[i("v-uni-view",{staticClass:"explain"},[i("v-uni-text",{staticClass:"e1"},[t._v("订货满"),i("v-uni-text",{staticClass:"e2"},[t._v("¥1000.00")]),t._v("免运费")],1)],1),i("v-uni-view",{staticClass:"statistics"},[t.statisticsIndex?i("v-uni-view",{staticClass:"statistics-left",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.allCheck.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png",mode:""}}),i("v-uni-text",[t._v("全选")])],1):i("v-uni-view",{staticClass:"statistics-left",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.allCheck.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"checked-image",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:""}}),i("v-uni-text",[t._v("全选")])],1),t.isCut?i("v-uni-view",{staticClass:"statistics-right",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.accounts.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("合计：")]),i("v-uni-text",{staticClass:"text-color"},[t._v("¥"+t._s(t.total))]),i("v-uni-view",{staticClass:"btn to_pay",class:t.total>0&&"is_pay"},[i("v-uni-text",[t._v("去结算")])],1)],1):i("v-uni-view",{staticClass:"statistics-right",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.delect.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"btn"},[i("v-uni-text",[t._v("删除")])],1)],1)],1),i("v-uni-view",{staticClass:"gap"})],1)],1)],1)},e=[]},"69f4":function(t,s,i){"use strict";i("7db0"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o={name:"commonCar",data:function(){return{isEmpty:!0,iPhoneX:!1,datas:[{img:"../../static/goods_avatar.png",title:"华为荣耀",remark:"256G",price:"128.80",number:1,checked:1},{img:"../../static/goods_avatar.png",title:"mate40",remark:"128G",price:"116.80",number:1,checked:1}],statisticsIndex:!1,total:0,isCut:!0}},created:function(){this.iPhoneX=uni.getStorageSync("iPhoneX"),0==this.datas.length?this.isEmpty=!0:this.isEmpty=!1},onNavigationBarButtonTap:function(t){var s=this.judgeSelect();s?console.log(123123):uni.showToast({title:"您当前未选择任何商品,删除失败",icon:"none"})},methods:{goodsCheck:function(t,s){this.datas[t].checked=1==s?2:1;var i=!0;this.datas.find((function(t,s){1==t.checked&&(i=!1)})),this.statisticsIndex=0!=i,this.statistics()},sub:function(t,s){1!=s&&(this.datas[t].number--,this.statistics())},add:function(t,s){this.datas[t].number++,this.statistics()},allCheck:function(){this.statisticsIndex?(this.datas.find((function(t,s){t.checked=1})),this.statisticsIndex=!1):(this.datas.find((function(t,s){t.checked=2})),this.statisticsIndex=!0),this.statistics()},statistics:function(){var t=0;this.datas.find((function(s,i){2==s.checked&&(t+=s.price*s.number)})),this.total=t.toFixed(2)},cut:function(){this.isCut=!this.isCut,this.statisticsIndex=!0,this.allCheck()},accounts:function(){var t=this.judgeSelect();t?this.navTo("/pages/ConfirmOrder/ConfirmOrder"):uni.showToast({title:"您当前未选择任何商品,结算失败",icon:"none"})},judgeSelect:function(){var t=!1;return this.datas.find((function(s,i){2==s.checked&&(t=!0)})),t}}};s.default=o},"7fb2":function(t,s,i){"use strict";i.r(s);var o=i("69f4"),a=i.n(o);for(var e in o)"default"!==e&&function(t){i.d(s,t,(function(){return o[t]}))}(e);s["default"]=a.a},c780:function(t,s,i){var o=i("2d70");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("46a77925",o,!0,{sourceMap:!1,shadowMode:!1})},ccb6:function(t,s,i){"use strict";i.r(s);var o=i("545b"),a=i("7fb2");for(var e in a)"default"!==e&&function(t){i.d(s,t,(function(){return a[t]}))}(e);i("d2e5");var n,c=i("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"c60519a2",null,!1,o["a"],n);s["default"]=r.exports},d2e5:function(t,s,i){"use strict";var o=i("c780"),a=i.n(o);a.a}}]);