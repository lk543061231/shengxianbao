(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Login-Login"],{1508:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={"u-Form":n("7595").default,uFormItem:n("f58c").default,uInput:n("f76d").default,uCode:n("3abf").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page_wrap"},[n("v-uni-view",{staticClass:"input_wrap"},[n("u--form",{ref:"form",attrs:{model:e.model,rules:e.rules}},["account"==e.loginType?[n("u-form-item",{attrs:{prop:"account"}},[n("v-uni-view",{staticClass:"input_item"},[n("u-input",{attrs:{placeholder:"请输入账号",border:"bottom"},model:{value:e.model.account,callback:function(t){e.$set(e.model,"account",t)},expression:"model.account"}},[n("template",{slot:"prefix"},[n("v-uni-text",{staticClass:"label"},[e._v("账号")])],1)],2)],1)],1),n("u-form-item",{attrs:{prop:"password"}},[n("v-uni-view",{staticClass:"input_item "},[n("u-input",{attrs:{type:"password",placeholder:"请输入密码",border:"none"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}},[n("template",{slot:"prefix"},[n("v-uni-text",{staticClass:"label"},[e._v("密码")])],1),n("template",{slot:"suffix"},[n("v-uni-text",{staticClass:"forget",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("./find")}}},[e._v("忘记密码？")])],1)],2)],1)],1)]:[n("u-form-item",{attrs:{prop:"phone"}},[n("v-uni-view",{staticClass:"input_item"},[n("u-input",{attrs:{max:!0,placeholder:"请输入手机号",border:"bottom"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}},[n("template",{slot:"prefix"},[n("v-uni-text",{staticClass:"label"},[e._v("手机号")])],1)],2)],1)],1),n("u-form-item",{attrs:{prop:"code"}},[n("v-uni-view",{staticClass:"input_item "},[n("u-input",{attrs:{placeholder:"请输入验证码",border:"none"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}},[n("template",{slot:"prefix"},[n("v-uni-text",{staticClass:"label"},[e._v("验证码")])],1),n("template",{slot:"suffix"},[n("u-code",{ref:"uCode",attrs:{seconds:"60",changeText:"X秒重新获取"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"get_code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.tips))])],1)],2)],1)],1)]],2),n("v-uni-view",{staticClass:"agreement row"},[n("v-uni-image",{attrs:{src:e.isAgree?"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png":"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.agreeHandle.apply(void 0,arguments)}}}),n("v-uni-text",[e._v("我已阅读并同意以下条款"),n("v-uni-text",{staticClass:"link"},[e._v("《好运来服务协议及隐私政策》》")])],1)],1)],1),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")]),n("v-uni-view",{staticClass:"btn code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeLogin.apply(void 0,arguments)}}},[e._v(e._s("account"==e.loginType?"验证码登录":"账号登录"))]),n("v-uni-view",{staticClass:"btn code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("./register")}}},[e._v("没有账号？去注册")])],1)},o=[]},"209a":function(e,t,n){var a=n("91c2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("78c1b43a",a,!0,{sourceMap:!1,shadowMode:!1})},2685:function(e,t,n){var a=n("dd7f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("169c3780",a,!0,{sourceMap:!1,shadowMode:!1})},"3abf":function(e,t,n){"use strict";n.r(t);var a=n("84e2"),i=n("82dd");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("7731");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"46d908eb",null,!1,a["a"],s);t["default"]=u.exports},7731:function(e,t,n){"use strict";var a=n("2685"),i=n.n(a);i.a},"7ad0":function(e,t,n){"use strict";n.r(t);var a=n("1508"),i=n("caa7");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("a9b9");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"146167fa",null,!1,a["a"],s);t["default"]=u.exports},"82dd":function(e,t,n){"use strict";n.r(t);var a=n("a066"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"84e2":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-code"})},o=[]},"91c2":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-146167fa]{margin-top:%?30?%}.page_wrap .input_wrap[data-v-146167fa]{padding:%?30?%;background-color:#fff}.page_wrap .input_wrap[data-v-146167fa] .u-input{padding:%?12?% 0!important}.page_wrap .input_wrap[data-v-146167fa] .input_item{width:100%!important}.page_wrap .input_wrap[data-v-146167fa] .u-form-item__body__right__message{margin:0!important}.page_wrap .input_wrap .input_item .label[data-v-146167fa]{color:#333;font-size:%?32?%;margin-right:%?80?%}.page_wrap .input_wrap .input_item .forget[data-v-146167fa]{color:#fe5b07;font-size:%?28?%}.page_wrap .input_wrap .input_item .get_code[data-v-146167fa]{color:#fd4d00;font-size:%?28?%}.page_wrap .agreement[data-v-146167fa]{margin-top:%?80?%;color:#666;font-size:%?24?%}.page_wrap .agreement uni-image[data-v-146167fa]{width:%?34?%;margin-right:%?10?%}.page_wrap .agreement .link[data-v-146167fa]{color:#fe5b07}.page_wrap .btn[data-v-146167fa]{height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?36?%;border-radius:%?50?%;background:-webkit-linear-gradient(314deg,#f87523,#fd1d20);background:linear-gradient(136deg,#f87523,#fd1d20);margin:auto;margin-top:%?50?%;width:90%}.page_wrap .code[data-v-146167fa]{color:#f87523;background:#fff;border:%?2?% solid #f87523}',""]),e.exports=t},a066:function(e,t,n){"use strict";var a=n("4ea4");n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a4d0")),o={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=o},a4d0:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}};t.default=a},a9b9:function(e,t,n){"use strict";var a=n("209a"),i=n.n(a);i.a},caa7:function(e,t,n){"use strict";n.r(t);var a=n("d324"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},d324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isAgree:!1,model:{},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},tips:"",loginType:"account"}},methods:{agreeHandle:function(){this.isAgree=!this.isAgree},login:function(){this.$refs.form.validate().then((function(e){uni.$u.toast("校验通过")})).catch((function(e){}))},changeLogin:function(){this.loginType="account"==this.loginType?"phone":"account",console.log(this.loginType)},codeChange:function(e){this.tips=e},getCode:function(){this.$refs.uCode.canGetCode?(uni.$u.toast("验证码已发送"),this.$refs.uCode.start()):uni.$u.toast("倒计时结束后再发送")}}};t.default=a},dd7f:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n',""]),e.exports=t}}]);