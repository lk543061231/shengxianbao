(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-Set-AccountSafe-changePhone"],{2685:function(e,t,a){var n=a("dd7f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("169c3780",n,!0,{sourceMap:!1,shadowMode:!1})},"2ef7":function(e,t,a){"use strict";a.r(t);var n=a("c8c7"),i=a("ed33");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("45a1");var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"b6a7802c",null,!1,n["a"],o);t["default"]=u.exports},"3abf":function(e,t,a){"use strict";a.r(t);var n=a("84e2"),i=a("82dd");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("7731");var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"46d908eb",null,!1,n["a"],o);t["default"]=u.exports},"45a1":function(e,t,a){"use strict";var n=a("76c5"),i=a.n(n);i.a},"4c4a":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-b6a7802c]{background-color:#fff;min-height:calc(100vh - 74px);padding:%?30?%}.page_wrap .page_type .txt[data-v-b6a7802c]{color:#333;font-size:%?48?%;font-weight:700;position:relative}.page_wrap .page_type .txt[data-v-b6a7802c]::after{content:"";display:block;position:absolute;bottom:0;width:%?92?%;height:%?10?%;background:-webkit-linear-gradient(314deg,#f87523,#fd1d20);background:linear-gradient(136deg,#f87523,#fd1d20)}.page_wrap .page_type .sub_txt[data-v-b6a7802c]{font-size:%?24?%;color:#666}.page_wrap .page_type .sub_txt .change[data-v-b6a7802c]{color:#fe5b07}.page_wrap .input_wrap[data-v-b6a7802c]{margin-top:%?100?%}.page_wrap .input_wrap[data-v-b6a7802c] .u-input{padding:%?12?% 0!important}.page_wrap .input_wrap[data-v-b6a7802c] .u-input__content__prefix-icon{margin-right:%?40?%!important}.page_wrap .input_wrap[data-v-b6a7802c] .input_item{width:100%!important}.page_wrap .input_wrap[data-v-b6a7802c] .u-form-item__body__right__message{margin:0!important}.page_wrap .input_wrap .input_item .label[data-v-b6a7802c]{color:#333;font-size:%?32?%}.page_wrap .input_wrap .input_item .iconfont[data-v-b6a7802c]{color:#d1d1d1}.page_wrap .input_wrap .input_item .get_code[data-v-b6a7802c]{color:#fd4d00;font-size:%?28?%}.page_wrap .btn[data-v-b6a7802c]{height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?36?%;font-weight:700;border-radius:%?50?%;background:-webkit-linear-gradient(314deg,#f87523,#fd1d20);background:linear-gradient(136deg,#f87523,#fd1d20);margin-top:%?100?%}.page_wrap .logo[data-v-b6a7802c]{width:%?344?%;margin:auto;display:block;margin-top:%?60?%}',""]),e.exports=t},"76c5":function(e,t,a){var n=a("4c4a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("1de32a94",n,!0,{sourceMap:!1,shadowMode:!1})},7731:function(e,t,a){"use strict";var n=a("2685"),i=a.n(n);i.a},"82dd":function(e,t,a){"use strict";a.r(t);var n=a("a066"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"84e2":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-code"})},r=[]},a066:function(e,t,a){"use strict";var n=a("4ea4");a("a9e3"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("a4d0")),r={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=r},a4d0:function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};t.default=n},a790:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("0050"),i={data:function(){return{model:{},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],phone:[{required:!0,validator:this.phoneRule,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],newPassword:[{required:!0,validator:this.passWordRule,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},tips:""}},methods:{phoneRule:function(e,t,a){t&&(0,n.checkStr)(t,"mobile")||a(new Error("请输入正确的手机号码")),a()},passWordRule:function(e,t,a){t&&(0,n.checkStr)(t,"pwd")||a(new Error("密码为8-16位，须包含数字、字母、符号")),a()},codeChange:function(e){this.tips=e},getCode:function(){this.$refs.uCode.canGetCode?(uni.$u.toast("验证码已发送"),this.$refs.uCode.start()):uni.$u.toast("倒计时结束后再发送")},submit:function(){var e=this;this.$refs.form.validate().then((function(t){delete e.model.password_,console.log(e.model)})).catch((function(e){}))}}};t.default=i},c8c7:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={"u-Form":a("7595").default,uFormItem:a("f58c").default,uInput:a("f76d").default,uCode:a("3abf").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"input_wrap"},[a("u--form",{ref:"form",attrs:{model:e.model,rules:e.rules}},[a("u-form-item",{attrs:{prop:"phone"}},[a("v-uni-view",{staticClass:"input_item "},[a("v-uni-view",{staticClass:"label"},[e._v("当前手机号码")]),a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入手机号码",border:"bottom"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1)],1),a("u-form-item",{attrs:{prop:"password"}},[a("v-uni-view",{staticClass:"input_item "},[a("v-uni-view",{staticClass:"label"},[e._v("新手机")]),a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入手机号码",border:"bottom"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1)],1),a("u-form-item",{attrs:{prop:"code"}},[a("v-uni-view",{staticClass:"input_item "},[a("v-uni-view",{staticClass:"label"},[e._v("验证码")]),a("u-input",{staticClass:"mt10",attrs:{placeholder:"请输入验证码",border:"bottom"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}},[a("template",{slot:"suffix"},[a("u-code",{ref:"uCode",attrs:{seconds:"60",changeText:"X秒重新获取"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"get_code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.tips))])],1)],2)],1)],1)],1)],1),a("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("确定")])],1)},r=[]},dd7f:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n',""]),e.exports=t},ed33:function(e,t,a){"use strict";a.r(t);var n=a("a790"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}}]);