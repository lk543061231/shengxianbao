(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Address-Address"],{"000e":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{show:{type:Boolean,default:uni.$u.props.swipeActionItem.show},name:{type:[String,Number],default:uni.$u.props.swipeActionItem.name},disabled:{type:Boolean,default:uni.$u.props.swipeActionItem.disabled},autoClose:{type:Boolean,default:uni.$u.props.swipeActionItem.autoClose},threshold:{type:Number,default:uni.$u.props.swipeActionItem.threshold},options:{type:Array,default:function(){return uni.$u.props.swipeActionItem.rightOptions}},duration:{type:[String,Number],default:uni.$u.props.swipeActionItem.duration}}};i.default=n},"02ac":function(t,i,e){"use strict";e.r(i);var n=e("71ff"),o=e("8c54");for(var c in o)"default"!==c&&function(t){e.d(i,t,(function(){return o[t]}))}(c);var u,a=e("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"1354af88",null,!1,n["a"],u);i["default"]=s.exports},"04e9":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-015caf4f]{padding-bottom:%?240?%}.page_wrap[data-v-015caf4f] .u-swipe-action-item__content{transition:-webkit-transform .3s ease 0s;transition:transform .3s ease 0s;transition:transform .3s ease 0s,-webkit-transform .3s ease 0s;-webkit-transform:translateX(0);transform:translateX(0)}.page_wrap .item[data-v-015caf4f]{padding:%?30?%;border-bottom:1px solid #eee}.page_wrap .item .user_info .moren[data-v-015caf4f]{color:#fe5b07;font-size:%?24?%;margin-right:%?20?%}.page_wrap .item .user_info .name[data-v-015caf4f]{color:#333;font-size:%?32?%}.page_wrap .item .user_info .phone[data-v-015caf4f]{margin-left:%?20?%;color:#aaa;font-size:%?28?%}.page_wrap .item .address[data-v-015caf4f]{color:#333;font-size:%?28?%}.page_wrap .btn_default[data-v-015caf4f]{width:93%;position:fixed;bottom:%?40?%;left:3.5%}',""]),t.exports=i},"05c6":function(t,i,e){"use strict";e.r(i);var n=e("11ac"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=o.a},"11ac":function(t,i,e){"use strict";var n=e("4ea4");e("caad"),e("c975"),e("2532"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("d389")),c=n(e("a524")),u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,c.default],computed:{uClasses:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&t.push("u-icon__icon--"+this.color),t},iconStyle:function(){var t={};return t={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(t.color=this.color),t},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var t={};return t.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),t.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),t},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(t){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(t)}}};i.default=u},1336:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o,c=n(e("ade3")),u=n(e("de97")),a=n(e("000e")),s=n(e("9e99")),r=(o={name:"u-swipe-action-item",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default,u.default]},(0,c.default)(o,"mixins",[uni.$u.mpMixin,uni.$u.mixin,a.default,u.default,s.default]),(0,c.default)(o,"data",(function(){return{size:{},parentData:{autoClose:!0},status:"close"}})),(0,c.default)(o,"watch",{wxsInit:function(t,i){this.queryRect()}}),(0,c.default)(o,"computed",{wxsInit:function(){return[this.disabled,this.autoClose,this.threshold,this.options,this.duration]}}),(0,c.default)(o,"mounted",(function(){this.init()})),(0,c.default)(o,"methods",{init:function(){var t=this;this.updateParentData(),uni.$u.sleep().then((function(){t.queryRect()}))},updateParentData:function(){this.getParentData("u-swipe-action")},queryRect:function(){var t=this;this.$uGetRect(".u-swipe-action-item__right__button",!0).then((function(i){t.size={buttons:i,show:t.show,disabled:t.disabled,threshold:t.threshold,duration:t.duration}}))},buttonClickHandler:function(t,i){this.$emit("click",{index:i,name:this.name})}}),o);i.default=r},2706:function(t,i,e){var n=e("04e9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("8a5c5adc",n,!0,{sourceMap:!1,shadowMode:!1})},"2cdc":function(t,i,e){"use strict";var n=function(t){(t.options.wxs||(t.options.wxs={}))["wxs"]=function(t){function i(t,i){var e=t.instance,n=e.getState();if(!n.disabled){var o=t.touches;o&&o.length>1||(n.moving=!0,n.startX=o[0].pageX,n.startY=o[0].pageY,i.callMethod("closeOther"))}}function e(t,i){var e=t.instance,n=e.getState();if(!n.disabled&&n.moving){var o=t.touches,u=o[0].pageX,a=o[0].pageY,s=u-n.startX,r=a-n.startY,l=n.buttonsWidth;(Math.abs(s)>Math.abs(r)||Math.abs(s)>n.threshold)&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),Math.abs(s)<Math.abs(r)||("open"===n.status?(s<0&&(s=0),s>l&&(s=l),c(-l+s,e,i)):(s>0&&(s=0),Math.abs(s)>l&&(s=-l),c(s,e,i)))}}function n(t,i){var e=t.instance,n=e.getState();if(n.moving&&!n.disabled){var o=t.changedTouches?t.changedTouches[0]:{},c=o.pageX,a=(o.pageY,c-n.startX);if("open"===n.status){if(a<0)return;if(0===a)return s(e,i);Math.abs(a)<n.threshold?u(e,i):s(e,i)}else{if(a>0)return;Math.abs(a)<n.threshold?s(e,i):u(e,i)}}}function o(t){return t.toString().indexOf("s")>=0?t:t>30?t+"ms":t+"s"}function c(t,i,e){i.getState(),e.selectAllComponents(".u-swipe-action-item__right__button");i.requestAnimationFrame((function(){i.setStyle({transition:"none",transform:"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)"})}))}function u(t,i){var e=t.getState(),n=(i.selectAllComponents(".u-swipe-action-item__right__button"),o(e.duration)),c=-e.buttonsWidth;t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+n,transform:"translateX("+c+"px)","-webkit-transform":"translateX("+c+"px)"})})),a("open",t,i)}function a(t,i,e){var n=i.getState();n.status=t,e.callMethod("setState",t)}function s(t,i){var e=t.getState(),n=i.selectAllComponents(".u-swipe-action-item__right__button"),c=n.length,u=o(e.duration);t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+u,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"});for(var i=c-1;i>=0;i--)n[i].setStyle({transition:"transform "+u,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"})})),a("close",t,i)}function r(t,i,e,n){var o=n.getState();o.disabled||("close"===t&&"open"===o.status?s(n,e):"open"===t&&"close"===o.status&&u(n,e))}function l(t,i,e,n){var o=n.getState();if(o.disabled=t.disabled,o.duration=t.duration,o.show=t.show,o.threshold=t.threshold,o.buttons=t.buttons,o.buttons)for(var c=o.buttons.length,u=0,a=t.buttons,s=0;s<c;s++)u+=a[s].width;o.buttonsWidth=u}return t.exports={touchstart:i,touchmove:e,touchend:n,sizeChange:l,statusChange:r},t.exports}({exports:{}})};i["a"]=n},"33c6":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var n={uIcon:e("eb19").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{ref:"u-swipe-action-item",staticClass:"u-swipe-action-item"},[e("v-uni-view",{staticClass:"u-swipe-action-item__right"},[t._t("button",t._l(t.options,(function(i,n){return e("v-uni-view",{key:n,ref:"u-swipe-action-item__right__button-"+n,refInFor:!0,staticClass:"u-swipe-action-item__right__button",style:[{alignItems:i.style&&i.style.borderRadius?"center":"stretch"}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClickHandler(i,n)}}},[e("v-uni-view",{staticClass:"u-swipe-action-item__right__button__wrapper",style:[{backgroundColor:i.style&&i.style.backgroundColor?i.style.backgroundColor:"#C7C6CD",borderRadius:i.style&&i.style.borderRadius?i.style.borderRadius:"0",padding:i.style&&i.style.borderRadius?"0":"0 15px"},i.style]},[i.icon?e("u-icon",{attrs:{name:i.icon,color:i.style&&i.style.color?i.style.color:"#ffffff",size:i.iconSize?t.$u.addUnit(i.iconSize):i.style&&i.style.fontSize?1.2*t.$u.getPx(i.style.fontSize):17,customStyle:{marginRight:i.text?"2px":0}}}):t._e(),i.text?e("v-uni-text",{staticClass:"u-swipe-action-item__right__button__wrapper__text u-line-1",style:[{color:i.style&&i.style.color?i.style.color:"#ffffff",fontSize:i.style&&i.style.fontSize?i.style.fontSize:"16px",lineHeight:i.style&&i.style.fontSize?i.style.fontSize:"16px"}]},[t._v(t._s(i.text))]):t._e()],1)],1)})))],2),e("v-uni-view",{wxsProps:{"change:size":"size","change:status":"status"},staticClass:"u-swipe-action-item__content",attrs:{status:t.status,"change:status":t.wxs.statusChange,size:t.size,"change:size":t.wxs.sizeChange},on:{touchstart:function(i){i=t.$handleWxsEvent(i),t.wxs.touchstart(i,t.$getComponentDescriptor())},touchmove:function(i){i=t.$handleWxsEvent(i),t.wxs.touchmove(i,t.$getComponentDescriptor())},touchend:function(i){i=t.$handleWxsEvent(i),t.wxs.touchend(i,t.$getComponentDescriptor())}}},[t._t("default")],2)],1)},c=[]},"3cc4":function(t,i,e){"use strict";var n=e("d210"),o=e.n(n);o.a},4137:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-swipe-action-item[data-v-76e231ca]{position:relative;overflow:hidden;touch-action:none}.u-swipe-action-item__content[data-v-76e231ca]{background-color:#fff}.u-swipe-action-item__right[data-v-76e231ca]{position:absolute;top:0;bottom:0;right:0;\r\ndisplay:flex;\r\nflex-direction:row}.u-swipe-action-item__right__button[data-v-76e231ca]{\r\ndisplay:flex;\r\nflex-direction:row;justify-content:center;overflow:hidden;align-items:center}.u-swipe-action-item__right__button__wrapper[data-v-76e231ca]{\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;justify-content:center;padding:0 15px}.u-swipe-action-item__right__button__wrapper__text[data-v-76e231ca]{\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;color:#fff;font-size:15px;text-align:center;justify-content:center}',""]),t.exports=i},"45c1":function(t,i,e){"use strict";e.r(i);var n=e("ecc3"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=o.a},"493c":function(t,i,e){"use strict";e.r(i);var n=e("57f9"),o=e("45c1");for(var c in o)"default"!==c&&function(t){e.d(i,t,(function(){return o[t]}))}(c);e("ef49");var u,a=e("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"015caf4f",null,!1,n["a"],u);i["default"]=s.exports},"4e35":function(t,i,e){"use strict";e.r(i);var n=e("33c6"),o=e("a1fe");for(var c in o)"default"!==c&&function(t){e.d(i,t,(function(){return o[t]}))}(c);e("59e9");var u,a=e("f0c5"),s=e("2cdc"),r=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"76e231ca",null,!1,n["a"],u);"function"===typeof s["a"]&&Object(s["a"])(r),i["default"]=r.exports},"57f9":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var n={uSwipeAction:e("02ac").default,uSwipeActionItem:e("4e35").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page_wrap"},[e("u-swipe-action",{staticClass:"mt20"},t._l(t.dataList,(function(i,n){return e("u-swipe-action-item",{key:n,attrs:{name:n,show:!1,options:t.options2},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectAddress.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmAddress(i)}}},[e("v-uni-view",{staticClass:"user_info row"},[0===n?e("v-uni-text",{staticClass:"moren"},[t._v("[默认]")]):t._e(),e("v-uni-text",{staticClass:"name"},[t._v("姓名")]),e("v-uni-text",{staticClass:"phone"},[t._v("12345678911")])],1),e("v-uni-view",{staticClass:"address mt20"},[t._v("江苏省 相城区 苏州市 江苏省相城区漕湖花园")])],1)],1)})),1),e("v-uni-view",{staticClass:"btn_default",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("./AddressDetail?pageType=add")}}},[t._v("+ 新增地址")])],1)},c=[]},"59e9":function(t,i,e){"use strict";var n=e("f71f"),o=e.n(n);o.a},"655b":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+t.labelPos],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler.apply(void 0,arguments)}}},[t.isImg?e("v-uni-image",{staticClass:"u-icon__img",style:[t.imgStyle,t.$u.addStyle(t.customStyle)],attrs:{src:t.name,mode:t.imgMode}}):e("v-uni-text",{staticClass:"u-icon__icon",class:t.uClasses,style:[t.iconStyle,t.$u.addStyle(t.customStyle)],attrs:{"hover-class":t.hoverClass}},[t._v(t._s(t.icon))]),""!==t.label?e("v-uni-text",{staticClass:"u-icon__label",style:{color:t.labelColor,fontSize:t.$u.addUnit(t.labelSize),marginLeft:"right"==t.labelPos?t.$u.addUnit(t.space):0,marginTop:"bottom"==t.labelPos?t.$u.addUnit(t.space):0,marginRight:"left"==t.labelPos?t.$u.addUnit(t.space):0,marginBottom:"top"==t.labelPos?t.$u.addUnit(t.space):0}},[t._v(t._s(t.label))]):t._e()],1)},c=[]},"71ff":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-swipe-action"},[t._t("default")],2)},c=[]},"85ec":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{autoClose:{type:Boolean,default:uni.$u.props.swipeAction.autoClose}}};i.default=n},"8c54":function(t,i,e){"use strict";e.r(i);var n=e("a622"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=o.a},"9e99":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={methods:{closeHandler:function(){this.status="close"},setState:function(t){this.status=t},closeOther:function(){this.parent&&this.parent.closeOther(this)}}};i.default=n},a1fe:function(t,i,e){"use strict";e.r(i);var n=e("1336"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=o.a},a524:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};i.default=n},a622:function(t,i,e){"use strict";var n=e("4ea4");e("d81d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("85ec")),c={name:"u-swipe-action",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{}},provide:function(){return{swipeAction:this}},computed:{parentData:function(){return[this.autoClose]}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"===typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},methods:{closeOther:function(t){this.autoClose&&this.children.map((function(i,e){t!==i&&i.closeHandler()}))}}};i.default=c},d210:function(t,i,e){var n=e("dfcb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("3bbb93f1",n,!0,{sourceMap:!1,shadowMode:!1})},d389:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""};i.default=n},de97:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=10;function o(t,i){return t>i&&t>n?"horizontal":i>t&&i>n?"vertical":""}var c={methods:{getTouchPoint:function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX||0,y:t.clientY||0}:{x:0,y:0}},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart:function(t){this.resetTouchStatus();var i=this.getTouchPoint(t);this.startX=i.x,this.startY=i.y},touchMove:function(t){var i=this.getTouchPoint(t);this.deltaX=i.x-this.startX,this.deltaY=i.y-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)}}};i.default=c},dfcb:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-63fb8f8b]{display:flex;align-items:center}.u-icon--left[data-v-63fb8f8b]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-63fb8f8b]{flex-direction:row;align-items:center}.u-icon--top[data-v-63fb8f8b]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-63fb8f8b]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-63fb8f8b]{font-family:uicon-iconfont;position:relative;\r\ndisplay:flex;\r\nflex-direction:row;align-items:center}.u-icon__icon--primary[data-v-63fb8f8b]{color:#3c9cff}.u-icon__icon--success[data-v-63fb8f8b]{color:#5ac725}.u-icon__icon--error[data-v-63fb8f8b]{color:#f56c6c}.u-icon__icon--warning[data-v-63fb8f8b]{color:#f9ae3d}.u-icon__icon--info[data-v-63fb8f8b]{color:#909399}.u-icon__img[data-v-63fb8f8b]{height:auto;will-change:transform}.u-icon__label[data-v-63fb8f8b]{line-height:1}',""]),t.exports=i},eb19:function(t,i,e){"use strict";e.r(i);var n=e("655b"),o=e("05c6");for(var c in o)"default"!==c&&function(t){e.d(i,t,(function(){return o[t]}))}(c);e("3cc4");var u,a=e("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"63fb8f8b",null,!1,n["a"],u);i["default"]=s.exports},ecc3:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{options2:[{text:"编辑",style:{backgroundColor:"#FDCE00"}},{text:"删除",style:{backgroundColor:"#FD4D00"}}],pageType:""}},onLoad:function(t){this.pageType=t.pageType,this.getData()},methods:{getData:function(){this.queryUrl="api/myOneslft/getCustomerAddrList",this.getList(),console.log(this.dataList)},selectAddress:function(t){1==t.index?uni.showModal({title:"提示",content:"确定要删除吗？",success:function(t){t.confirm&&uni.$u.toast("删除成功")}}):this.navTo("./AddressDetail?pageType=edit")},confirmAddress:function(t){"confirmOrder"==this.pageType&&console.log(123)}}};i.default=n},ef49:function(t,i,e){"use strict";var n=e("2706"),o=e.n(n);o.a},f71f:function(t,i,e){var n=e("4137");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("09a5ddd4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);