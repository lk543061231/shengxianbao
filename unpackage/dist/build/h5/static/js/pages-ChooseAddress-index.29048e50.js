(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ChooseAddress-index"],{"2ced":function(t,e,i){"use strict";var s=i("3447"),a=i.n(s);a.a},3447:function(t,e,i){var s=i("b29b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("812ae0b2",s,!0,{sourceMap:!1,shadowMode:!1})},"5ae9":function(t,e,i){"use strict";i.r(e);var s=i("bb68"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"826d":function(t,e,i){"use strict";i.r(e);var s=i("9700"),a=i("5ae9");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("2ced"),i("dad9");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"bffe51c6",null,!1,s["a"],o);e["default"]=c.exports},9700:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app"},[i("v-uni-view",{staticClass:"current-address row b-b"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"row"},[i("v-uni-text",{staticClass:"red"},[t._v("[当前]")]),i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.currentAddress.title))])],1),i("v-uni-text",{staticClass:"addr clamp"},[t._v(t._s(t.currentAddress.address))])],1),i("v-uni-image",{staticClass:"ser-icon",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./search?city="+t.curCity)}}})],1),i("v-uni-view",{staticClass:"confirm-wrap row"},[i("v-uni-input",{staticClass:"input",attrs:{placeholder:"补充详细地址：楼号、门牌等(选填)","placeholder-class":"placeholder"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}}),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定")])],1),i("v-uni-map",{staticClass:"map",attrs:{id:"map",scale:15,"show-location":!0,longitude:t.map.longitude,latitude:t.map.latitude},on:{regionchange:function(e){arguments[0]=e=t.$handleEvent(e),t.onRegionchange.apply(void 0,arguments)}}},[i("v-uni-cover-image",{staticClass:"map-center-icon",attrs:{src:"https://7478-tx-cloud-mix-mall-d6944c-1302673523.tcb.qcloud.la/5bfbd58b18200d8e16f6b17a02e6ed9.png"}})],1),i("v-uni-scroll-view",{staticClass:"addr-list-scroll",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"addr-list"},t._l(t.list,(function(e,s){return i("v-uni-view",{key:s,staticClass:"addr-item b-b row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseAddress(s)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"addr"},[t._v(t._s(e.address))])],1),t.checked===s?i("v-uni-image",{staticClass:"icon_circle",attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png",mode:"widthFix"}}):t._e()],1)})),1)],1)],1)},n=[]},b29b:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"uni-page-body[data-v-bffe51c6]{height:100%;background:#f6f6f6}body.?%PAGE?%[data-v-bffe51c6]{background:#f6f6f6}",""]),t.exports=e},bb68:function(t,e,i){"use strict";var s=i("4ea4");i("99af"),i("4160"),i("d81d"),i("d3b7"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=s(i("1da1")),n=s(i("a184")),o=i("6fd1"),r=s(i("e143"));r.default.use(o.VueJsonp);var c=i("193a"),d=(new c({key:n.default.qqmapWxKey}),null),l={data:function(){return{curCity:"",mapStatus:1,map:{longitude:116.39742,latitude:39.909},room:"",list:[],checked:0,tempAddress:null}},computed:{currentAddress:function(){return 0===this.list.length?{}:this.list[this.checked]}},created:function(){d=uni.createMapContext("map")},onNavigationBarButtonTap:function(){this.submit()},onLoad:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var s,a,n,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=t.data,!s){i.next=8;break}e.tempAddress=JSON.parse(s),e.room=e.tempAddress.room,a=e.tempAddress.location.lng,n=e.tempAddress.location.lat,i.next=13;break;case 8:return i.next=10,e.getLocation();case 10:o=i.sent,a=+o.longitude,n=+o.latitude;case 13:e.map={longitude:a,latitude:n},e.position={longitude:a,latitude:n},e.getAddressList(1);case 16:case"end":return i.stop()}}),i)})))()},methods:{submit:function(){var t=this.currentAddress,e=this.room,i=t.ad_info,s=t.address,a=t.location,n=t.title;this.$util.prePage().setAddress(Object.assign({},{ad_info:i,address:s,location:a,title:n,room:e})),uni.navigateBack()},getAddressList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(1!==this.isSetTempAddress){var i="https://apis.map.qq.com/ws/geocoder/v1/?key=".concat(n.default.qqmapWxKey,"&location=").concat(this.position.latitude,",").concat(this.position.longitude,"&get_poi=1&output=jsonp");this.$jsonp(i).then((function(i){t.initRegion(e,i)}))}},initRegion:function(t,e){var i=this;if(e.result.pois.forEach((function(t){t.ad_info||(t.ad_info={adcode:t.adcode,city:t.city,district:t.district,province:t.province})})),this.tempAddress&&(this.tempAddress.title!=e.result.pois[0].title&&(this.tempAddress.ad_info||(this.tempAddress.ad_info={adcode:this.tempAddress.adcode,city:this.tempAddress.city,district:this.tempAddress.district,province:this.tempAddress.province}),e.result.pois.unshift(this.tempAddress)),this.tempAddress=null,this.isSetTempAddress=1,setTimeout((function(){i.isSetTempAddress=0}),500)),t){var s=e.result.pois[0].ad_info;this.curCity=s.city||"",e.result.pois[0].select=1,this.list=e.result.pois,this.checked=0}else this.list=e.result.pois},onRegionchange:function(t){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){"end"!==t.type&&"regionchange"!==t.type||d.getCenterLocation({success:function(t){e.position={latitude:t.latitude,longitude:t.longitude},1==e.mapStatus&&e.getAddressList(1)},fail:function(t){console.log(t)}})}),200)},chooseAddress:function(t){var e=this,i=this.list;this.map={longitude:i[t].location.lng,latitude:i[t].location.lat},this.checked=t,this.mapStatus=0,clearTimeout(this.mapStatusTimer),this.mapStatusTimer=setTimeout((function(){e.mapStatus=1}),1e3)},getLocation:function(){return new Promise((function(t){uni.getLocation({type:"wgs84",success:function(e){t({longitude:e.longitude,latitude:e.latitude})},err:function(e){t({longitude:116.39742,latitude:39.909})},complete:function(t){}})}))},navTo:function(t){uni.navigateTo({url:t})}}};e.default=l},cc5c:function(t,e,i){var s=i("d78c");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("36baab90",s,!0,{sourceMap:!1,shadowMode:!1})},d78c:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.app[data-v-bffe51c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.row[data-v-bffe51c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.b-b[data-v-bffe51c6]{position:relative}.b-b[data-v-bffe51c6]:after{position:absolute;z-index:3;left:0;top:auto;bottom:0;right:0;height:0;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);border-bottom:1px solid #e5e5e5}.clamp[data-v-bffe51c6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.current-address[data-v-bffe51c6]{height:%?120?%;padding:0 %?24?%;background-color:#fff}.current-address .left[data-v-bffe51c6]{width:%?634?%}.current-address .red[data-v-bffe51c6]{-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?6?%;font-size:%?28?%;color:#fe5b07;line-height:%?36?%}.current-address .title[data-v-bffe51c6]{font-size:%?28?%;color:#333;font-weight:700;line-height:%?36?%}.current-address .addr[data-v-bffe51c6]{width:%?700?%;margin-top:%?12?%;font-size:%?24?%;color:#909399;line-height:1.4}.current-address .ser-icon[data-v-bffe51c6]{-webkit-flex-shrink:0;flex-shrink:0;width:%?36?%;height:%?40?%;padding:%?12?% %?4?% %?12?% %?20?%}.confirm-wrap[data-v-bffe51c6]{height:%?88?%;padding:0 %?24?%;background-color:#fff}.confirm-wrap .input[data-v-bffe51c6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.confirm-wrap .btn[data-v-bffe51c6]{padding:0 %?24?%;font-size:%?26?%;color:#fff;line-height:%?50?%;background-color:#fe5b07;border-radius:%?100?%}.map[data-v-bffe51c6]{width:%?750?%;height:%?700?%}.map .map-center-icon[data-v-bffe51c6]{position:absolute;left:%?339?%;top:%?264?%;width:%?72?%;height:%?72?%}.addr-list-scroll[data-v-bffe51c6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.addr-list-scroll .addr-list[data-v-bffe51c6]{background-color:#fff}.addr-list-scroll .addr-item[data-v-bffe51c6]{padding:%?24?%}.addr-list-scroll .left[data-v-bffe51c6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-right:%?50?%}.addr-list-scroll .title[data-v-bffe51c6]{font-size:%?28?%;color:#303133}.addr-list-scroll .addr[data-v-bffe51c6]{margin-top:%?10?%;font-size:%?24?%;color:#909399;line-height:1.4}.icon_circle[data-v-bffe51c6]{width:%?50?%}',""]),t.exports=e},dad9:function(t,e,i){"use strict";var s=i("cc5c"),a=i.n(s);a.a}}]);