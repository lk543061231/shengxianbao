(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-ProductDetail-ProductDetail"],{"036e":function(t,a,e){"use strict";var n=e("4ea4");e("c740"),e("4160"),e("a434"),e("d3b7"),e("4d63"),e("ac1f"),e("25f0"),e("5319"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530"));e("96cf");var r=n(e("1da1")),o=n(e("5e4b")),s=n(e("801b")),c=n(e("2b12")),u={components:{pageHeader:o.default,mixSwiper:s.default,bottomOperation:c.default},data:function(){return{currentSku:{},data:{images:[]},specActive:0,selectData:{},ratingData:{},id:"",skuId:""}},onLoad:function(t){this.id=t.id,this.skuId=t.skuId},onShow:function(){this.loadData()},onPageScroll:function(t){this.$refs.pageHeader&&this.$refs.pageHeader.pageScroll(t)},methods:{loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http("api/pms/productcategory/getProductSkuIdInfo",{productId:t.id||7,productSkuId:t.skuId||""});case 2:e=a.sent,e.appContent=e.appContent.replace(/&(amp|gt|lt|quot|#39|nbsp);/g,(function(t){return{"&lt;":"<","&amp;":"&","&quot;":'"',"&gt;":">","&#39;":"'","&nbsp;":" "}[t]})),e.appContent=t.imgTagAddStyle(e.appContent),e.productImageVoList.forEach((function(t){t.src=t.imageUrl})),e.images=e.productImageVoList,n=e.productSkuList.findIndex((function(a){return a.productSkuId==t.skuId})),t.specActive=n>=0?n:0,t.selectData=(0,i.default)((0,i.default)({},e.productSkuList[n>=0?n:0]),{},{productName:e.productName,imageUrl:e.productImageVoList[0].imageUrl}),t.data=e,t.$nextTick((function(){t.calcAnchor()}));case 12:case"end":return a.stop()}}),a)})))()},imgTagAddStyle:function(t){var a=new RegExp("(i?)(<img)(?!(.*?style=['\"](.*)['\"])[^>]+>)","gmi");return t=t.replace(a,"$2 style=width:100% $3"),t},loadRating:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$request("rating","getDetailRating",{product_id:t.id});case 2:e=a.sent,t.ratingData=e,t.$nextTick((function(){t.calcAnchor()}));case 5:case"end":return a.stop()}}),a)})))()},selectSpec:function(t,a){this.specActive=a,this.selectData=Object.assign(this.selectData,t)},addToCart:function(){var t=this;this.$util.throttle((0,r.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t.getConfirmData(),e){a.next=3;break}return a.abrupt("return");case 3:return a.next=5,t.$request("cart","add",e,{showLoading:!0,login:!0});case 5:if(n=a.sent,n){a.next=8;break}return a.abrupt("return");case 8:t.log(n),t.$util.msg(n.msg),1===n.status&&(t.hidePopup("skuPopup"),t.$store.dispatch("getCartCount"),uni.$emit("refreshCart"));case 11:case"end":return a.stop()}}),a)}))))},buyNow:function(){var t=this.getConfirmData();t&&(this.hidePopup("skuPopup"),this.navTo("/pages/order/createOrder?data="+JSON.stringify(t),{login:!0}))},setCurrentSku:function(t){this.currentSku=t},getConfirmData:function(){var t=this.currentSku._id?this.currentSku:this.data.sku[0];if(t.stock<=0||this.data.stock<=0)return this.$util.msg("库存不足"),!1;var a={product_id:this.data._id,number:this.$refs.skuPopup.buyNumber||1,sku:this.currentSku._id?this.currentSku:this.data.sku[0]};return a},calcAnchor:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var e,n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,new Promise((function(t){uni.createSelectorQuery().select("#rating").boundingClientRect((function(a){t(a)})).exec()}));case 2:e=a.sent,n=t.systemInfo.statusBarHeight+t.systemInfo.navigationBarHeight,i=(e?e.top:0)-n,r=(e?e.bottom:0)+uni.upx2px(12)-n,t.$refs.pageHeader.anchorList[1].top=i,t.$refs.pageHeader.anchorList[2].top=r,[0,i,r];case 9:case"end":return a.stop()}}),a)})))()},addProductHistory:function(){var t=this.data,a=uni.getStorageSync("productHistory");a||(a=[]);var e=a.findIndex((function(a){return a.id===t._id}));-1!==e&&a.splice(e,1),a.unshift({id:t._id,thumb:t.thumb}),uni.setStorageSync("productHistory",a)},delHistory:function(){var t=uni.getStorageSync("productHistory");if(t){var a=t.findIndex((function(t){return t._id===data._id}));-1!==a&&(t.splice(a,1),uni.setStorageSync("productHistory",t))}},showPopup:function(t,a){this.$refs[t].open(a)},onOprationClick:function(t){this.showPopup("skuPopup",t)},doAppShare:function(){var t=this;this.$util.throttle((0,r.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e={provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:t.data.thumb,title:t.data.title,miniProgram:{id:"gh_3dada2e0f833",path:"/pages/product/detail?id="+t.data._id,type:0,webUrl:"http://guoyunnet.com"},success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}},uni.share(e);case 2:case"end":return a.stop()}}),a)}))))}}};a.default=u},"0a3e":function(t,a,e){"use strict";var n=e("4ea4");e("d81d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),r={name:"MixProductDetailSwiper",data:function(){return{current:0,renderList:[]}},props:{list:{type:Array,default:function(){return[]}}},watch:{list:function(t){var a=this;this.renderList=t.map((function(t){return(0,i.default)({loaded:!!a.loaded},t)})),this.loaded=!0}},methods:{onSwiperChange:function(t){this.current=t.detail.current},previewImage:function(t){uni.previewImage({current:t,urls:this.list})},imageOnLoad:function(t,a){var e=this;setTimeout((function(){e.$set(t,"loaded",!0)}),100)}}};a.default=r},"154b":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.mix-page-header[data-v-7ddba333]{position:fixed;left:0;top:0;z-index:90;justify-content:space-between;width:100%}.btn[data-v-7ddba333]{width:%?80?%}.icon-zuojiantou[data-v-7ddba333]{width:%?52?%;height:%?52?%;border-radius:%?100?%;font-size:%?36?%;color:#333;text-align:center;line-height:%?52?%}.icon-zuojiantou.dark[data-v-7ddba333]{background-color:rgba(0,0,0,.5);color:#fff}.cen[data-v-7ddba333]{flex:1;height:100%;position:relative}.cen .cen-item[data-v-7ddba333]{width:50px;height:36px;font-size:15px;color:#333;text-align:center;line-height:36px;position:relative}.cen .active[data-v-7ddba333]{font-size:17px;font-weight:700}.cen .active[data-v-7ddba333]:after{position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);content:"";width:30px;height:2px;background-color:#fe5b07;border-radius:%?10?%}',""]),t.exports=a},"20fa":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.mix-botoom-operation[data-v-7b1d4d3d]{position:fixed;left:0;bottom:0;z-index:90;width:100%;height:%?100?%;background-color:#fff;box-shadow:0 %?-2?% %?10?% 0 rgba(0,0,0,.1);box-sizing:initial;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.nav-group[data-v-7b1d4d3d]{padding-left:%?6?%}.nav-group .nav[data-v-7b1d4d3d]{width:%?90?%;height:%?80?%;color:#333;position:relative}.nav-group .nav.active[data-v-7b1d4d3d]{color:#fe5b07}.nav-group .tit[data-v-7b1d4d3d]{font-size:%?20?%}.nav-group .mix-icon[data-v-7b1d4d3d]{height:%?48?%;line-height:%?48?%;font-size:%?38?%;margin-bottom:%?6?%}.nav-group .number[data-v-7b1d4d3d]{position:absolute;right:%?16?%;top:%?2?%;min-width:%?24?%;height:%?24?%;padding:0 %?8?%;font-size:%?16?%;color:#fff;background-color:#fe5b07;border-radius:%?100?%}.btn-group[data-v-7b1d4d3d]{flex:1;margin:0 %?16?% 0 %?14?%;overflow:hidden}.btn-group .btn[data-v-7b1d4d3d]{flex:1;height:%?76?%;font-size:%?30?%;color:#fff;border-radius:%?100?%;background:linear-gradient(113deg,#f87523,#ff6c00 0,#fd1d20)}',""]),t.exports=a},"232c":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uPopup:e("cbea").default,uInput:e("5e42").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"spec_wrap"},[e("u-popup",{attrs:{show:t.show,closeable:!0,mode:"bottom"},on:{close:function(a){arguments[0]=a=t.$handleEvent(a),t.show=!1}}},[e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"info row"},[e("v-uni-image",{attrs:{src:t.selectData.imageUrl,mode:"widthFix"}}),e("v-uni-view",{},[e("v-uni-view",{staticClass:"f32-c333 mr20"},[t._v(t._s(t.selectData.productName))]),e("v-uni-view",{staticClass:"f24-c999 mt10"},[t._v(t._s(t.selectData.productModel))])],1)],1),e("v-uni-view",{staticClass:"detail row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v("结算单位")]),e("v-uni-text",{staticClass:"f28-c999"},[t._v(t._s(t.selectData.productUnit))])],1),e("v-uni-view",{staticClass:"detail row jc_sb"},[e("v-uni-text",{staticClass:"f28-c333"},[t._v("数量")]),e("v-uni-view",{staticClass:"num_wrap row"},[e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changNum(1)}}},[t._v("-")]),e("u-input",{attrs:{border:"none",type:"text"},model:{value:t.num,callback:function(a){t.num=a},expression:"num"}}),e("v-uni-text",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changNum(2)}}},[t._v("+")])],1)],1),e("v-uni-view",{staticClass:"detail jc_sb row"},[e("u-input",{attrs:{placeholder:"请输入备注",border:"none"},model:{value:t.remark,callback:function(a){t.remark=a},expression:"remark"}},[e("template",{slot:"prefix"},[e("v-uni-text",{staticClass:"label f28-c333"},[t._v("备注")])],1)],2)],1),e("v-uni-view",{staticClass:"btn_default",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.add.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},r=[]},2826:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={props:{selectData:{type:Object,default:function(){return{}}}},data:function(){return{show:!1,num:1,remark:"",img:""}},watch:{},methods:{changNum:function(t){1==t&&this.num>1?this.num--:2==t&&this.num++},add:function(){var t=this;this.$http("api/bmallshoppingcart/addShoppingCart",{buyQuantity:this.num,productSkuId:this.selectData.productSkuId,remark:this.remark},"post").then((function(a){t.show=!1,uni.showToast({title:"添加成功",icon:"none"})}))}}};a.default=n},"2b12":function(t,a,e){"use strict";e.r(a);var n=e("32a6"),i=e("9491");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("5f09");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7b1d4d3d",null,!1,n["a"],o);a["default"]=c.exports},"32a6":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={specifications:e("6f536").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mix-botoom-operation row"},[e("v-uni-view",{staticClass:"nav-group row"},[e("v-uni-view",{staticClass:"nav column center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/ShopCar/ShopCar","switch")}}},[e("v-uni-text",{staticClass:"iconfont icon-gouwuche"}),e("v-uni-text",{staticClass:"tit"},[t._v("购物车")]),t.cartCount>0?e("v-uni-view",{staticClass:"number center"},[e("v-uni-text",[t._v(t._s(t.cartCount))])],1):t._e()],1),e("v-uni-view",{class:["nav column center",{active:1==t.infoData.used}],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addCusOftenBuy.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-jiacy"}),e("v-uni-text",{staticClass:"tit"},[t._v(t._s(1==t.infoData.used?"常用":"加常用"))])],1)],1),e("v-uni-view",{staticClass:"btn-group row"},[e("v-uni-view",{staticClass:"btn center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onOprationClick("cart")}}},[e("v-uni-text",[t._v("加入购物车")])],1)],1),e("specifications",{ref:"spec",attrs:{selectData:t.selectData}}),t.isLoading?e("mix-loading",{attrs:{mask:!0}}):t._e()],1)},r=[]},"3c74":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mix-page-header row",style:{height:t.navigationBarHeight+t.statusBarHeight+"px",paddingTop:t.statusBarHeight+"px",backgroundColor:"rgba(255,255,255, "+t.headerOpacity+")"}},[e("v-uni-view",{staticClass:"btn center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navBack.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-zuojiantou",class:{dark:t.headerOpacity<.5}})],1),e("v-uni-view",{staticClass:"cen center"},t._l(t.anchorList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cen-item",class:{active:n===t.currentAnchor},style:{opacity:t.headerOpacity},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToAnchor(n)}}},[e("v-uni-text",[t._v(t._s(a.name))])],1)})),1),e("v-uni-view",{staticClass:"btn"})],1)},r=[]},"40d3":function(t,a,e){var n=e("96e2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1fa5e9b0",n,!0,{sourceMap:!1,shadowMode:!1})},"417b":function(t,a,e){var n=e("87458");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("295b48f0",n,!0,{sourceMap:!1,shadowMode:!1})},"472e":function(t,a,e){"use strict";var n=e("417b"),i=e.n(n);i.a},"4cbc":function(t,a,e){"use strict";var n=e("b246"),i=e.n(n);i.a},"5e4b":function(t,a,e){"use strict";e.r(a);var n=e("3c74"),i=e("c06f");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("4cbc");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7ddba333",null,!1,n["a"],o);a["default"]=c.exports},"5f09":function(t,a,e){"use strict";var n=e("71b3"),i=e.n(n);i.a},"657f":function(t,a,e){"use strict";e.r(a);var n=e("036e"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"6f536":function(t,a,e){"use strict";e.r(a);var n=e("232c"),i=e("d563");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("e97c");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"13a7d3a6",null,!1,n["a"],o);a["default"]=c.exports},"71b3":function(t,a,e){var n=e("20fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("72a6347b",n,!0,{sourceMap:!1,shadowMode:!1})},"801b":function(t,a,e){"use strict";e.r(a);var n=e("c301"),i=e("9749");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("472e");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"02d4d4e7",null,!1,n["a"],o);a["default"]=c.exports},"83a2":function(t,a,e){var n=e("aba9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("14c3c93c",n,!0,{sourceMap:!1,shadowMode:!1})},"844b":function(t,a,e){"use strict";var n=e("4ea4");e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),r={name:"BotoomOperation",data:function(){return{is_fav:0}},computed:{cartCount:function(){return this.$store.state.cartCount}},props:{infoData:{type:Object,default:function(){return{}}},selectData:{type:Object,default:function(){return{}}}},watch:{infoData:function(t){this.is_fav=t.fav}},methods:{changeFav:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.$util.isLogin()){a.next=2;break}return a.abrupt("return");case 2:return e=Number(t.infoData.favorite),a.next=5,t.$http("api/favorite/saveFavorite",{favoriteType:!e,productSkuId:t.infoData.productSkuId});case 5:n=a.sent,n.data,e?(t.infoData.favorite=0,t.$util.msg("取消收藏成功")):(t.infoData.favorite=1,t.$util.msg("收藏成功"));case 8:case"end":return a.stop()}}),a)})))()},addCusOftenBuy:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.$util.isLogin()){a.next=2;break}return a.abrupt("return");case 2:if(0!=t.infoData.used){a.next=10;break}return a.next=5,t.$http("api/usedlist/addCusOftenBuy",{buyQuantity:1,productSkuId:t.infoData.productSkuId||7},"post");case 5:a.sent,t.infoData.used=1,uni.showToast({title:"添加成功",icon:"none"}),a.next=15;break;case 10:return a.next=12,t.$http("api/usedlist/removeCusOftenBuy",{buyQuantity:1,productSkuId:t.infoData.productSkuId||7},"delete");case 12:a.sent,t.infoData.used=0,uni.showToast({title:"移除成功",icon:"none"});case 15:case"end":return a.stop()}}),a)})))()},onOprationClick:function(t){this.$util.isLogin()&&(this.$refs.spec.show=!0)},switchTab:function(t){uni.switchTab({url:t})}}};a.default=r},87458:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.mix-product-detail-swiper[data-v-02d4d4e7]{position:relative}.swiper[data-v-02d4d4e7]{width:%?750?%;height:%?750?%}.image-wrapper[data-v-02d4d4e7]{flex-shrink:0;width:%?750?%;height:%?750?%;margin-right:%?20?%;overflow:hidden}.image-wrapper uni-image[data-v-02d4d4e7]{width:100%;height:100%}.dots[data-v-02d4d4e7]{position:absolute;left:0;bottom:%?12?%;width:100%}.dot[data-v-02d4d4e7]{width:%?32?%;height:%?8?%;margin:0 %?6?%;background-color:#fff;border-radius:10px}.dot.current[data-v-02d4d4e7]{background-color:#fe5b07}',""]),t.exports=a},9491:function(t,a,e){"use strict";e.r(a);var n=e("844b"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"96e2":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.spec_wrap[data-v-13a7d3a6] .u-popup .u-transition{z-index:99998}.spec_wrap .con[data-v-13a7d3a6]{padding:%?30?%}.spec_wrap .con .info[data-v-13a7d3a6]{justify-content:center;margin-bottom:%?120?%}.spec_wrap .con .info uni-image[data-v-13a7d3a6]{margin-right:%?30?%;width:%?172?%;height:%?172?%}.spec_wrap .con .detail[data-v-13a7d3a6]{padding:%?30?%;border-top:1px solid #eee}.spec_wrap .con .detail .num_wrap uni-text[data-v-13a7d3a6]{background-color:#f6f6f6;padding:%?8?% %?16?%;color:#bebebe;font-size:%?28?%}.spec_wrap .con .detail .num_wrap[data-v-13a7d3a6] uni-input{background-color:#f6f6f6;padding:%?3?% %?18?%!important;width:%?50?%;margin:0 %?6?%}',""]),t.exports=a},9749:function(t,a,e){"use strict";e.r(a);var n=e("0a3e"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},a831:function(t,a,e){"use strict";var n=e("faa9"),i=e.n(n);i.a},aba9:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-498aa203]{background-color:#f5f5f5}body.?%PAGE?%[data-v-498aa203]{background-color:#f5f5f5}",""]),t.exports=a},b246:function(t,a,e){var n=e("154b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("0314f1b9",n,!0,{sourceMap:!1,shadowMode:!1})},b77b:function(t,a,e){"use strict";e.r(a);var n=e("ffa7"),i=e("657f");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("c637"),e("a831");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"498aa203",null,!1,n["a"],o);a["default"]=c.exports},c06f:function(t,a,e){"use strict";e.r(a);var n=e("f63e"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},c301:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"mix-product-detail-swiper"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,autoplay:!0,interval:"80000"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.onSwiperChange.apply(void 0,arguments)}}},t._l(t.renderList,(function(a,n){return e("v-uni-swiper-item",{key:n,staticClass:"item"},[e("v-uni-view",{staticClass:"image-wrapper lazyload lazypic",class:{loaded:a.loaded}},[e("v-uni-image",{attrs:{src:a.src,mode:"aspectFill"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imageOnLoad(a)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImage(n)}}})],1)],1)})),1),e("v-uni-view",{staticClass:"dots row center"},t._l(t.renderList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"dot",class:{current:t.current===n}})})),1)],1)},r=[]},c637:function(t,a,e){"use strict";var n=e("83a2"),i=e.n(n);i.a},d563:function(t,a,e){"use strict";e.r(a);var n=e("2826"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},e97c:function(t,a,e){"use strict";var n=e("40d3"),i=e.n(n);i.a},f63e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=!1,i={name:"ProductPageHeader",data:function(){return{headerOpacity:0,currentAnchor:0,anchorList:[{id:1,name:"商品",top:0},{id:2,name:"评价",top:0},{id:3,name:"详情",top:0}]}},props:{},computed:{statusBarHeight:function(){return this.systemInfo.statusBarHeight},navigationBarHeight:function(){return this.systemInfo.navigationBarHeight}},methods:{navToAnchor:function(t){this.headerOpacity;var a=this.anchorList;this.statusBarHeight,this.navigationBarHeight;0!=this.headerOpacity&&(n=!0,uni.pageScrollTo({scrollTop:a[t].top-1,duration:200}),this.currentAnchor=t,setTimeout((function(){n=!1}),400))},pageScroll:function(t){if(this.headerOpacity=t.scrollTop/150,!n){var a=this.currentAnchor,e=this.anchorList,i=t.scrollTop>=e[2].top?2:t.scrollTop>=e[1].top?1:0;i!==a&&(this.currentAnchor=i)}},navBack:function(){uni.navigateBack()}}};a.default=i},f92c:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.app[data-v-498aa203]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.app[data-v-498aa203]:after{content:"";display:block;width:100%;height:%?100?%}\r\n/* 标题简介 */.introduce[data-v-498aa203]{background:#fff;padding:%?20?% %?30?%}.introduce .price[data-v-498aa203]{color:#fe5b07;font-size:%?24?%;background-color:#fff;align-items:baseline}.introduce .price .p[data-v-498aa203]{font-size:%?40?%}.introduce .price .tag[data-v-498aa203]{border:%?2?% solid #fe5b07;color:#fe5b07;font-size:%?20?%;padding:%?2?%;margin-left:%?20?%}.introduce .title[data-v-498aa203]{min-height:%?44?%;font-size:%?32?%;color:#333;line-height:%?44?%;font-weight:700}.introduce .spec[data-v-498aa203]{padding-top:%?20?%;border-top:%?2?% solid #f1f1f1}.introduce .spec .item[data-v-498aa203]{border:%?2?% solid #ebebeb;padding:%?20?%;color:#999}.introduce .spec .item .s1[data-v-498aa203]{font-size:%?28?%}.introduce .spec .item .s2[data-v-498aa203]{font-size:%?22?%}.introduce .spec .spec_active[data-v-498aa203]{border-color:#ff6304;background-color:#fff1e9;color:#ff6304}.c-list[data-v-498aa203]{font-size:%?26?%;color:#888;background:#fff}.c-list .row[data-v-498aa203]{min-height:%?82?%;padding:%?16?% %?30?%;position:relative}.c-list .row[data-v-498aa203]:after{border-color:#eaeaea}.c-list .row[data-v-498aa203]:last-child:after{border:0}.c-list .tit[data-v-498aa203]{width:%?140?%}.c-list .con[data-v-498aa203]{flex:1;color:#333}.c-list .con .attr[data-v-498aa203]{margin-right:%?10?%}.c-list .con .service[data-v-498aa203]{margin-right:%?30?%}.c-list .con .service[data-v-498aa203]:last-child{margin:0}.c-list .con-list[data-v-498aa203]{color:#333}.c-list .con-list uni-text[data-v-498aa203]{line-height:%?40?%}.c-list .red[data-v-498aa203]{color:#fe5b07}.c-list .icon-you[data-v-498aa203]{font-size:%?24?%;color:#999}\r\n/* 评价 */.rating-wrap[data-v-498aa203]{padding:%?20?% %?30?% %?0?%;background:#fff;margin-top:%?12?%}.rating-wrap.no-data[data-v-498aa203]{padding:%?10?% %?30?% %?10?%}.rating-wrap .e-header[data-v-498aa203]{display:flex;align-items:center;height:%?70?%;font-size:%?28?%;color:#333}.rating-wrap .tit[data-v-498aa203]{font-size:%?32?%;color:#333;font-weight:700;margin-right:%?4?%}.rating-wrap .tip[data-v-498aa203]{flex:1;font-size:%?26?%;color:#999;text-align:right}.rating-wrap .icon-you[data-v-498aa203]{margin-left:%?8?%;font-size:%?24?%;color:#999}.rating-wrap .mix-rating-item[data-v-498aa203]::after{border:0}\r\n/*  详情 */.detail-desc[data-v-498aa203]{margin-top:%?12?%;background:#fff}.detail-desc .d-header[data-v-498aa203]{height:%?80?%;font-size:%?30?%;color:#333}.detail-desc .d-header uni-text[data-v-498aa203]{margin:0 %?20?%}.detail-desc .d-header[data-v-498aa203]:before, .detail-desc .d-header[data-v-498aa203]:after{content:"";width:%?60?%;border-bottom:1px solid #ccc}.detail-desc .content img[data-v-498aa203]{width:100%}',""]),t.exports=a},faa9:function(t,a,e){var n=e("f92c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("a56f5746",n,!0,{sourceMap:!1,shadowMode:!1})},ffa7:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"app"},[e("pageHeader",{ref:"pageHeader"}),e("mix-swiper",{attrs:{list:t.data.images}}),e("v-uni-view",{staticClass:"introduce"},[e("v-uni-view",{staticClass:"price row"},[e("v-uni-view",{staticClass:"mr10"},[t._v("¥"),e("v-uni-text",{staticClass:"p"},[t._v(t._s(t.selectData.unitPrice))]),e("v-uni-text",{staticClass:"u"},[t._v("/"+t._s(t.selectData.productUnit))])],1),t.data.productTag?e("v-uni-view",{staticClass:"tag"},[t._v(t._s(t.data.productTag))]):t._e()],1),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.data.productName))]),e("v-uni-view",{staticClass:"spec row mt30"},t._l(t.data.productSkuList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"item column mr20",class:t.specActive==n?"spec_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec(a,n)}}},[e("v-uni-view",{staticClass:"s1"},[t._v(t._s(a.productModel))]),e("v-uni-view",{staticClass:"s2"},[t._v("¥"+t._s(a.unitPrice)+"/"+t._s(a.productUnit))])],1)})),1)],1),e("v-uni-view",{staticClass:"c-list"},[t.data.skuData?e("v-uni-view",{staticClass:"row b-b",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showPopup("skuPopup")}}},[e("v-uni-text",{staticClass:"tit"},[t._v("购买类型")]),e("v-uni-view",{staticClass:"con"},[e("v-uni-text",{staticClass:"attr"},[t._v(t._s(t.currentSku.name||""))])],1),e("v-uni-text",{staticClass:"mix-icon icon-you"})],1):t._e(),e("v-uni-view",{staticClass:"row b-b",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/coupon/receiveCoupon",{login:!0})}}},[e("v-uni-text",{staticClass:"tit"},[t._v("优惠券")]),e("v-uni-text",{staticClass:"con red"},[t._v("领取优惠券")]),e("v-uni-text",{staticClass:"mix-icon icon-you"})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[t._v("服务")]),e("v-uni-view",{staticClass:"con"},t._l(t.data.productService,(function(a,n){return e("v-uni-text",{key:n,staticClass:"service mr20"},[t._v(t._s(a))])})),1)],1)],1),e("v-uni-view",{staticClass:"rating-wrap column",class:{"no-data":!t.ratingData.data},attrs:{id:"rating"}},[e("v-uni-view",{staticClass:"e-header",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navTo("/pages/rating/rating?id="+t.data._id)}}},[e("v-uni-text",{staticClass:"tit"},[t._v("商品评价")]),e("v-uni-text",[t._v("("+t._s(t.ratingData.count||0)+")")]),e("v-uni-text",{staticClass:"tip"},[t._v("好评率 "+t._s(t.data.rating_ratio||100)+"%")]),e("v-uni-text",{staticClass:"mix-icon icon-you"})],1)],1),e("v-uni-view",{staticClass:"detail-desc"},[e("v-uni-view",{staticClass:"d-header center"},[e("v-uni-text",[t._v("图文详情")])],1),e("v-uni-view",{staticClass:"content",domProps:{innerHTML:t._s(t.data.appContent)}})],1),e("bottom-operation",{attrs:{infoData:t.data,selectData:t.selectData},on:{onOprationClick:function(a){arguments[0]=a=t.$handleEvent(a),t.onOprationClick.apply(void 0,arguments)}}})],1)},r=[]}}]);