(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Help-about"],{"00dd":function(i,e,n){"use strict";var t=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(n("1a94")),l={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],computed:{lineStyle:function(){var i={};return i.margin=this.margin,"row"===this.direction?(i.borderBottomWidth="1px",i.borderBottomStyle=this.dashed?"dashed":"solid",i.width=this.$u.addUnit(this.length),this.hairline&&(i.transform="scaleY(0.5)")):(i.borderLeftWidth="1px",i.borderLeftStyle=this.dashed?"dashed":"solid",i.height=this.$u.addUnit(this.length),this.hairline&&(i.transform="scaleX(0.5)")),i.borderColor=this.color,uni.$u.deepMerge(i,uni.$u.addStyle(this.customStyle))}}};e.default=l},"05c6":function(i,e,n){"use strict";n.r(e);var t=n("11ac"),o=n.n(t);for(var l in t)"default"!==l&&function(i){n.d(e,i,(function(){return t[i]}))}(l);e["default"]=o.a},"0aee":function(i,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return t}));var t={uCell:n("ac97").default},o=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"page_wrap"},[n("v-uni-view",{staticClass:"versions_info column"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{attrs:{src:"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"f28-c333"},[i._v("当前版本：v1.0")])],1),n("v-uni-view",{staticClass:"tool"},[n("u-cell",{attrs:{title:"营业执照",size:"large",isLink:!0,url:"/pagesA/Help/businessLicense"}}),n("u-cell",{attrs:{title:"用户协议",size:"large",isLink:!0,url:"/pagesA/Help/userAgreement",border:!1}})],1)],1)},l=[]},"0bd1":function(i,e,n){"use strict";n.r(e);var t=n("3626"),o=n.n(t);for(var l in t)"default"!==l&&function(i){n.d(e,i,(function(){return t[i]}))}(l);e["default"]=o.a},"11ac":function(i,e,n){"use strict";var t=n("4ea4");n("caad"),n("c975"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(n("d389")),l=t(n("a524")),c={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,l.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&this.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:this.$u.addUnit(this.size),lineHeight:this.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:this.$u.addUnit(this.top)},this.color&&!this.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?this.$u.addUnit(this.width):this.$u.addUnit(this.size),i.height=this.height?this.$u.addUnit(this.height):this.$u.addUnit(this.size),i},icon:function(){return o.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.$u.preventEvent(i)}}};e.default=c},"1a94":function(i,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};e.default=t},"1c9d":function(i,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={props:{title:{type:[String,Number],default:uni.$u.props.cell.title},label:{type:[String,Number],default:uni.$u.props.cell.label},value:{type:[String,Number],default:uni.$u.props.cell.value},icon:{type:String,default:uni.$u.props.cell.icon},titleWidth:{type:[String,Number],default:uni.$u.props.cell.titleWidth},disabled:{type:Boolean,default:uni.$u.props.cell.disabled},border:{type:Boolean,default:uni.$u.props.cell.border},center:{type:Boolean,default:uni.$u.props.cell.center},url:{type:String,default:uni.$u.props.cell.url},linkType:{type:String,default:uni.$u.props.cell.linkType},clickable:{type:Boolean,default:uni.$u.props.cell.clickable},isLink:{type:Boolean,default:uni.$u.props.cell.isLink},required:{type:Boolean,default:uni.$u.props.cell.required},rightIcon:{type:String,default:uni.$u.props.cell.rightIcon},arrowDirection:{type:String,default:uni.$u.props.cell.arrowDirection},iconStyle:{type:Object,default:function(){}},rightIconStyle:{type:Object,default:function(){return uni.$u.props.cell.rightIconStyle}},titleStyle:{type:Object,default:function(){return uni.$u.props.cell.titleStyle}},size:{type:String,default:uni.$u.props.cell.size},stop:{type:Boolean,default:uni.$u.props.cell.stop},name:{type:[Number,String],default:uni.$u.props.cell.name}}};e.default=t},2892:function(i,e,n){"use strict";n.r(e);var t=n("00dd"),o=n.n(t);for(var l in t)"default"!==l&&function(i){n.d(e,i,(function(){return t[i]}))}(l);e["default"]=o.a},"351e":function(i,e,n){"use strict";var t=n("916c"),o=n.n(t);o.a},3626:function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{}},onLoad:function(i){},methods:{}};e.default=t},"3cc4":function(i,e,n){"use strict";var t=n("d210"),o=n.n(t);o.a},"4e48":function(i,e,n){"use strict";var t=n("a770"),o=n.n(t);o.a},"655b":function(i,e,n){"use strict";var t;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return t}));var o=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?n("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):n("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?n("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},l=[]},"761e":function(i,e,n){"use strict";var t=n("7860"),o=n.n(t);o.a},7860:function(i,e,n){var t=n("ac3c");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var o=n("4f06").default;o("50f49baf",t,!0,{sourceMap:!1,shadowMode:!1})},"900b":function(i,e,n){"use strict";n.r(e);var t=n("c206"),o=n("2892");for(var l in o)"default"!==l&&function(i){n.d(e,i,(function(){return o[i]}))}(l);n("4e48");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"0657e27d",null,!1,t["a"],c);e["default"]=a.exports},"916c":function(i,e,n){var t=n("f3b6");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var o=n("4f06").default;o("58e9abd0",t,!0,{sourceMap:!1,shadowMode:!1})},"97a1":function(i,e,n){"use strict";n.r(e);var t=n("cb2c"),o=n.n(t);for(var l in t)"default"!==l&&function(i){n.d(e,i,(function(){return t[i]}))}(l);e["default"]=o.a},a115:function(i,e,n){var t=n("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-line[data-v-0657e27d]{vertical-align:middle}',""]),i.exports=e},a524:function(i,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};e.default=t},a770:function(i,e,n){var t=n("a115");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var o=n("4f06").default;o("15901c4a",t,!0,{sourceMap:!1,shadowMode:!1})},ac3c:function(i,e,n){var t=n("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n.u-cell__body[data-v-8707b6ac]{\r\ndisplay:flex;\r\nflex-direction:row;box-sizing:border-box;padding:10px 15px;font-size:15px;color:#303133;align-items:center}.u-cell__body__content[data-v-8707b6ac]{\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;flex:1}.u-cell__body--large[data-v-8707b6ac]{padding-top:13px;padding-bottom:13px}.u-cell__left-icon-wrap[data-v-8707b6ac], .u-cell__right-icon-wrap[data-v-8707b6ac]{\r\ndisplay:flex;\r\nflex-direction:row;align-items:center;font-size:16px}.u-cell__left-icon-wrap[data-v-8707b6ac]{margin-right:4px}.u-cell__right-icon-wrap[data-v-8707b6ac]{margin-left:4px;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-cell__right-icon-wrap--up[data-v-8707b6ac]{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.u-cell__right-icon-wrap--down[data-v-8707b6ac]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.u-cell__title[data-v-8707b6ac]{flex:1}.u-cell__title-text[data-v-8707b6ac]{font-size:15px;line-height:22px;color:#303133}.u-cell__title-text--large[data-v-8707b6ac]{font-size:16px}.u-cell__label[data-v-8707b6ac]{margin-top:5px;font-size:12px;color:#909193;line-height:18px}.u-cell__label--large[data-v-8707b6ac]{font-size:14px}.u-cell__value[data-v-8707b6ac]{text-align:right;font-size:14px;line-height:24px;color:#606266}.u-cell__value--large[data-v-8707b6ac]{font-size:15px}.u-cell--clickable[data-v-8707b6ac]{background-color:#f3f4f6}.u-cell--disabled[data-v-8707b6ac]{color:#c8c9cc;cursor:not-allowed}.u-cell--center[data-v-8707b6ac]{align-items:center}',""]),i.exports=e},ac97:function(i,e,n){"use strict";n.r(e);var t=n("ef3c"),o=n("97a1");for(var l in o)"default"!==l&&function(i){n.d(e,i,(function(){return o[i]}))}(l);n("761e");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"8707b6ac",null,!1,t["a"],c);e["default"]=a.exports},c0bc:function(i,e,n){"use strict";n.r(e);var t=n("0aee"),o=n("0bd1");for(var l in o)"default"!==l&&function(i){n.d(e,i,(function(){return o[i]}))}(l);n("351e");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"a927a67a",null,!1,t["a"],c);e["default"]=a.exports},c206:function(i,e,n){"use strict";var t;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return t}));var o=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"u-line",style:[i.lineStyle]})},l=[]},cb2c:function(i,e,n){"use strict";var t=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(n("1c9d")),l={name:"u-cell",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],methods:{clickHandler:function(i){this.disabled||(this.$emit("click",{name:this.name}),this.openPage(),this.stop&&this.preventEvent(i))}}};e.default=l},d210:function(i,e,n){var t=n("dfcb");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var o=n("4f06").default;o("3bbb93f1",t,!0,{sourceMap:!1,shadowMode:!1})},d389:function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""};e.default=t},dfcb:function(i,e,n){var t=n("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\n@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-63fb8f8b]{display:flex;align-items:center}.u-icon--left[data-v-63fb8f8b]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-63fb8f8b]{flex-direction:row;align-items:center}.u-icon--top[data-v-63fb8f8b]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-63fb8f8b]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-63fb8f8b]{font-family:uicon-iconfont;position:relative;\r\ndisplay:flex;\r\nflex-direction:row;align-items:center}.u-icon__icon--primary[data-v-63fb8f8b]{color:#3c9cff}.u-icon__icon--success[data-v-63fb8f8b]{color:#5ac725}.u-icon__icon--error[data-v-63fb8f8b]{color:#f56c6c}.u-icon__icon--warning[data-v-63fb8f8b]{color:#f9ae3d}.u-icon__icon--info[data-v-63fb8f8b]{color:#909399}.u-icon__img[data-v-63fb8f8b]{height:auto;will-change:transform}.u-icon__label[data-v-63fb8f8b]{line-height:1}',""]),i.exports=e},eb19:function(i,e,n){"use strict";n.r(e);var t=n("655b"),o=n("05c6");for(var l in o)"default"!==l&&function(i){n.d(e,i,(function(){return o[i]}))}(l);n("3cc4");var c,u=n("f0c5"),a=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"63fb8f8b",null,!1,t["a"],c);e["default"]=a.exports},ef3c:function(i,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return t}));var t={uIcon:n("eb19").default,uLine:n("900b").default},o=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"u-cell",class:[i.customClass],style:[i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.disabled||!i.clickable&&!i.isLink?"":"u-cell--clickable","hover-stay-time":250},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-cell__body",class:[i.center&&"u-cell--center","large"===i.size&&"u-cell__body--large"]},[n("v-uni-view",{staticClass:"u-cell__body__content"},[i.$slots.icon||i.icon?n("v-uni-view",{staticClass:"u-cell__left-icon-wrap"},[i.$slots.icon?i._t("icon"):n("u-icon",{attrs:{name:i.icon,"custom-style":i.iconStyle,size:"large"===i.size?22:18}})],2):i._e(),n("v-uni-view",{staticClass:"u-cell__title"},[i._t("title",[i.title?n("v-uni-text",{staticClass:"u-cell__title-text",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__title-text--large"]},[i._v(i._s(i.title))]):i._e()]),i._t("label",[i.label?n("v-uni-text",{staticClass:"u-cell__label",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__label--large"]},[i._v(i._s(i.label))]):i._e()])],2)],1),i._t("value",[i.$u.test.empty(i.value)?i._e():n("v-uni-text",{staticClass:"u-cell__value",class:[i.disabled&&"u-cell--disabled","large"===i.size&&"u-cell__value--large"]},[i._v(i._s(i.value))])]),i.$slots["right-icon"]||i.isLink?n("v-uni-view",{staticClass:"u-cell__right-icon-wrap",class:["u-cell__right-icon-wrap--"+i.arrowDirection]},[i.$slots["right-icon"]?i._t("right-icon"):n("u-icon",{attrs:{name:i.rightIcon,"custom-style":i.rightIconStyle,color:i.disabled?"#c8c9cc":"info",size:"large"===i.size?18:16}})],2):i._e()],2),i.border?n("u-line"):i._e()],1)},l=[]},f3b6:function(i,e,n){var t=n("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .versions_info[data-v-a927a67a]{background-color:#fff;justify-content:center;height:%?600?%}.page_wrap .versions_info .logo[data-v-a927a67a]{margin-bottom:%?80?%;width:%?160?%;height:%?160?%;overflow:hidden}.page_wrap .versions_info .logo uni-image[data-v-a927a67a]{width:100%}.page_wrap .tool[data-v-a927a67a]{background-color:#fff;margin-top:%?18?%}',""]),i.exports=e}}]);