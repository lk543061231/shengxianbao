(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Help-about"],{"0463":function(i,e,t){"use strict";t("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:[String,Number],default:uni.$u.props.cell.title},label:{type:[String,Number],default:uni.$u.props.cell.label},value:{type:[String,Number],default:uni.$u.props.cell.value},icon:{type:String,default:uni.$u.props.cell.icon},titleWidth:{type:[String,Number],default:uni.$u.props.cell.titleWidth},disabled:{type:Boolean,default:uni.$u.props.cell.disabled},border:{type:Boolean,default:uni.$u.props.cell.border},center:{type:Boolean,default:uni.$u.props.cell.center},url:{type:String,default:uni.$u.props.cell.url},linkType:{type:String,default:uni.$u.props.cell.linkType},clickable:{type:Boolean,default:uni.$u.props.cell.clickable},isLink:{type:Boolean,default:uni.$u.props.cell.isLink},required:{type:Boolean,default:uni.$u.props.cell.required},rightIcon:{type:String,default:uni.$u.props.cell.rightIcon},arrowDirection:{type:String,default:uni.$u.props.cell.arrowDirection},iconStyle:{type:Object,default:function(){}},rightIconStyle:{type:Object,default:function(){return uni.$u.props.cell.rightIconStyle}},titleStyle:{type:Object,default:function(){return uni.$u.props.cell.titleStyle}},size:{type:String,default:uni.$u.props.cell.size},stop:{type:Boolean,default:uni.$u.props.cell.stop},name:{type:[Number,String],default:uni.$u.props.cell.name}}};e.default=n},"099a":function(i,e,t){"use strict";t.r(e);var n=t("956d"),o=t("d316");for(var l in o)"default"!==l&&function(i){t.d(e,i,(function(){return o[i]}))}(l);t("2274");var c,u=t("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"1a84d4bf",null,!1,n["a"],c);e["default"]=a.exports},"0d89":function(i,e,t){"use strict";t.r(e);var n=t("b0be"),o=t("dc0f");for(var l in o)"default"!==l&&function(i){t.d(e,i,(function(){return o[i]}))}(l);t("80b4");var c,u=t("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"78a43b85",null,!1,n["a"],c);e["default"]=a.exports},"1dfe":function(i,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return n}));var n={uCell:t("d429").default},o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"page_wrap"},[t("v-uni-view",{staticClass:"versions_info column"},[t("v-uni-view",{staticClass:"logo"},[t("v-uni-image",{attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png",mode:"widthFix"}})],1),t("v-uni-view",{staticClass:"f28-c333"},[i._v("当前版本：v1.0")])],1),t("v-uni-view",{staticClass:"tool"},[t("u-cell",{attrs:{title:"营业执照",size:"large",isLink:!0,url:"/pagesA/Help/businessLicense"}}),t("u-cell",{attrs:{title:"用户协议",size:"large",isLink:!0,url:"/pagesA/Help/userAgreement",border:!1}})],1)],1)},l=[]},"1f70":function(i,e,t){"use strict";t("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};e.default=n},2274:function(i,e,t){"use strict";var n=t("cc97"),o=t.n(n);o.a},"3d58":function(i,e,t){"use strict";t.r(e);var n=t("dc6d"),o=t.n(n);for(var l in n)"default"!==l&&function(i){t.d(e,i,(function(){return n[i]}))}(l);e["default"]=o.a},"3dac":function(i,e,t){var n=t("fb28");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=t("4f06").default;o("5b0b277e",n,!0,{sourceMap:!1,shadowMode:!1})},"4fb3":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onLoad:function(i){},methods:{}};e.default=n},5069:function(i,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return n}));var n={uIcon:t("0d89").default,uLine:t("099a").default},o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"u-cell",class:[i.customClass],style:[i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.disabled||!i.clickable&&!i.isLink?"":"u-cell--clickable","hover-stay-time":250},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickHandler.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"u-cell__body",class:[i.center&&"u-cell--center","large"===i.size&&"u-cell__body--large"]},[t("v-uni-view",{staticClass:"u-cell__body__content"},[i.$slots.icon||i.icon?t("v-uni-view",{staticClass:"u-cell__left-icon-wrap"},[i.$slots.icon?i._t("icon"):t("u-icon",{attrs:{name:i.icon,"custom-style":i.iconStyle,size:"large"===i.size?22:18}})],2):i._e(),t("v-uni-view",{staticClass:"u-cell__title"},[i._t("title",[i.title?t("v-uni-text",{staticClass:"u-cell__title-text",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__title-text--large"]},[i._v(i._s(i.title))]):i._e()]),i._t("label",[i.label?t("v-uni-text",{staticClass:"u-cell__label",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__label--large"]},[i._v(i._s(i.label))]):i._e()])],2)],1),i._t("value",[i.$u.test.empty(i.value)?i._e():t("v-uni-text",{staticClass:"u-cell__value",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__value--large"]},[i._v(i._s(i.value))])]),i.$slots["right-icon"]||i.isLink?t("v-uni-view",{staticClass:"u-cell__right-icon-wrap",class:["u-cell__right-icon-wrap--"+i.arrowDirection]},[i.$slots["right-icon"]?i._t("right-icon"):t("u-icon",{attrs:{name:i.rightIcon,"custom-style":i.rightIconStyle,color:i.disabled?"#c8c9cc":"info",size:"large"===i.size?18:16}})],2):i._e()],2),i.border?t("u-line"):i._e()],1)},l=[]},"66ef":function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-78a43b85]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon--left[data-v-78a43b85]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon--right[data-v-78a43b85]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon--top[data-v-78a43b85]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-icon--bottom[data-v-78a43b85]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-icon__icon[data-v-78a43b85]{font-family:uicon-iconfont;position:relative;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon__icon--primary[data-v-78a43b85]{color:#3c9cff}.u-icon__icon--success[data-v-78a43b85]{color:#5ac725}.u-icon__icon--error[data-v-78a43b85]{color:#f56c6c}.u-icon__icon--warning[data-v-78a43b85]{color:#f9ae3d}.u-icon__icon--info[data-v-78a43b85]{color:#909399}.u-icon__img[data-v-78a43b85]{height:auto;will-change:transform}.u-icon__label[data-v-78a43b85]{line-height:1}',""]),i.exports=e},"686f":function(i,e,t){var n=t("d2cb");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=t("4f06").default;o("4aad8f27",n,!0,{sourceMap:!1,shadowMode:!1})},"6c1b":function(i,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(t("fe55")),l={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],computed:{lineStyle:function(){var i={};return i.margin=this.margin,"row"===this.direction?(i.borderBottomWidth="1px",i.borderBottomStyle=this.dashed?"dashed":"solid",i.width=this.$u.addUnit(this.length),this.hairline&&(i.transform="scaleY(0.5)")):(i.borderLeftWidth="1px",i.borderLeftStyle=this.dashed?"dashed":"solid",i.height=this.$u.addUnit(this.length),this.hairline&&(i.transform="scaleX(0.5)")),i.borderColor=this.color,uni.$u.deepMerge(i,uni.$u.addStyle(this.customStyle))}}};e.default=l},7435:function(i,e,t){"use strict";t.r(e);var n=t("4fb3"),o=t.n(n);for(var l in n)"default"!==l&&function(i){t.d(e,i,(function(){return n[i]}))}(l);e["default"]=o.a},"80b4":function(i,e,t){"use strict";var n=t("984d"),o=t.n(n);o.a},9271:function(i,e,t){"use strict";var n=t("4ea4");t("caad"),t("c975"),t("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(t("e43d")),l=n(t("1f70")),c={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,l.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),i.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),i},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(i)}}};e.default=c},"956d":function(i,e,t){"use strict";var n;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return n}));var o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"u-line",style:[i.lineStyle]})},l=[]},"964f":function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-line[data-v-1a84d4bf]{vertical-align:middle}',""]),i.exports=e},"984d":function(i,e,t){var n=t("66ef");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=t("4f06").default;o("5e5f12e8",n,!0,{sourceMap:!1,shadowMode:!1})},a513:function(i,e,t){"use strict";var n=t("686f"),o=t.n(n);o.a},b0be:function(i,e,t){"use strict";var n;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return n}));var o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?t("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):t("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?t("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},l=[]},cc97:function(i,e,t){var n=t("964f");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=t("4f06").default;o("07e85c83",n,!0,{sourceMap:!1,shadowMode:!1})},d2cb:function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-cell__body[data-v-cae86890]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;box-sizing:border-box;padding:10px 15px;font-size:15px;color:#303133;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-cell__body__content[data-v-cae86890]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-cell__body--large[data-v-cae86890]{padding-top:13px;padding-bottom:13px}.u-cell__left-icon-wrap[data-v-cae86890], .u-cell__right-icon-wrap[data-v-cae86890]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:16px}.u-cell__left-icon-wrap[data-v-cae86890]{margin-right:4px}.u-cell__right-icon-wrap[data-v-cae86890]{margin-left:4px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-cell__right-icon-wrap--up[data-v-cae86890]{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.u-cell__right-icon-wrap--down[data-v-cae86890]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.u-cell__title[data-v-cae86890]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-cell__title-text[data-v-cae86890]{font-size:15px;line-height:22px;color:#303133}.u-cell__title-text--large[data-v-cae86890]{font-size:16px}.u-cell__label[data-v-cae86890]{margin-top:5px;font-size:12px;color:#909193;line-height:18px}.u-cell__label--large[data-v-cae86890]{font-size:14px}.u-cell__value[data-v-cae86890]{text-align:right;font-size:14px;line-height:24px;color:#606266}.u-cell__value--large[data-v-cae86890]{font-size:15px}.u-cell--clickable[data-v-cae86890]{background-color:#f3f4f6}.u-cell--disabled[data-v-cae86890]{color:#c8c9cc;cursor:not-allowed}.u-cell--center[data-v-cae86890]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),i.exports=e},d316:function(i,e,t){"use strict";t.r(e);var n=t("6c1b"),o=t.n(n);for(var l in n)"default"!==l&&function(i){t.d(e,i,(function(){return n[i]}))}(l);e["default"]=o.a},d429:function(i,e,t){"use strict";t.r(e);var n=t("5069"),o=t("3d58");for(var l in o)"default"!==l&&function(i){t.d(e,i,(function(){return o[i]}))}(l);t("a513");var c,u=t("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"cae86890",null,!1,n["a"],c);e["default"]=a.exports},dc0f:function(i,e,t){"use strict";t.r(e);var n=t("9271"),o=t.n(n);for(var l in n)"default"!==l&&function(i){t.d(e,i,(function(){return n[i]}))}(l);e["default"]=o.a},dc6d:function(i,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(t("0463")),l={name:"u-cell",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],methods:{clickHandler:function(i){this.disabled||(this.$emit("click",{name:this.name}),this.openPage(),this.stop&&this.preventEvent(i))}}};e.default=l},dc89:function(i,e,t){"use strict";var n=t("3dac"),o=t.n(n);o.a},e43d:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""};e.default=n},e875:function(i,e,t){"use strict";t.r(e);var n=t("1dfe"),o=t("7435");for(var l in o)"default"!==l&&function(i){t.d(e,i,(function(){return o[i]}))}(l);t("dc89");var c,u=t("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"a927a67a",null,!1,n["a"],c);e["default"]=a.exports},fb28:function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .versions_info[data-v-a927a67a]{background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?600?%}.page_wrap .versions_info .logo[data-v-a927a67a]{margin-bottom:%?80?%;width:%?160?%;height:%?160?%;overflow:hidden}.page_wrap .versions_info .logo uni-image[data-v-a927a67a]{width:100%}.page_wrap .tool[data-v-a927a67a]{background-color:#fff;margin-top:%?18?%}',""]),i.exports=e},fe55:function(i,e,t){"use strict";t("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};e.default=n}}]);