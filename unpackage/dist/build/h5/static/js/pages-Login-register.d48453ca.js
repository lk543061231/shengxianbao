(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Login-register"],{"0355":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap[data-v-818297e6]{margin-top:%?30?%}.page_wrap .input_wrap[data-v-818297e6]{padding:%?30?%;background-color:#fff}.page_wrap .input_wrap[data-v-818297e6] .u-input{padding:%?12?% 0!important}.page_wrap .input_wrap[data-v-818297e6] .u-input__content__prefix-icon{margin-right:%?40?%!important}.page_wrap .input_wrap[data-v-818297e6] .input_item{width:100%!important}.page_wrap .input_wrap[data-v-818297e6] .u-form-item__body__right__message{margin:0!important}.page_wrap .input_wrap .input_item .label[data-v-818297e6]{color:#333;font-size:%?32?%;margin-right:%?80?%}.page_wrap .input_wrap .input_item .iconfont[data-v-818297e6]{color:#d1d1d1}.page_wrap .input_wrap .input_item .get_code[data-v-818297e6]{color:#fd4d00;font-size:%?28?%}.page_wrap .agreement[data-v-818297e6]{margin-top:%?100?%;color:#666;font-size:%?24?%}.page_wrap .agreement uni-image[data-v-818297e6]{width:%?34?%;margin-right:%?10?%}.page_wrap .agreement .link[data-v-818297e6]{color:#fe5b07}.page_wrap .btn[data-v-818297e6]{height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-size:%?36?%;border-radius:%?50?%;background:-webkit-linear-gradient(314deg,#f87523,#fd1d20);background:linear-gradient(136deg,#f87523,#fd1d20);margin:auto;margin-top:%?50?%;width:90%}.page_wrap .code[data-v-818297e6]{color:#f87523;background:#fff;border:%?2?% solid #f87523}',""]),t.exports=e},"4b43":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("0050"),n={data:function(){return{tips:"",model:{},rules:{phone:[{required:!0,validator:this.phoneRule,trigger:"blur"}],password:[{required:!0,validator:this.passWordRule,trigger:"blur"}],password_:[{required:!0,validator:this.confirmPassWord,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},isAgree:!1}},methods:{phoneRule:function(t,e,a){e&&(0,r.checkStr)(e,"mobile")||a(new Error("请输入正确的手机号码")),a()},passWordRule:function(t,e,a){e&&(0,r.checkStr)(e,"pwd")||a(new Error("密码为8-16位，须包含数字、字母、符号")),a()},confirmPassWord:function(t,e,a){e?e!==this.model.password&&a(new Error("两次密码不一致")):a(new Error("请再次输入密码")),a()},agreeHandle:function(){this.isAgree=!this.isAgree},codeChange:function(t){this.tips=t},getCode:function(){this.$refs.uCode.canGetCode?(uni.$u.toast("验证码已发送"),this.$refs.uCode.start()):uni.$u.toast("倒计时结束后再发送")},submit:function(){var t=this;this.$refs.form.validate().then((function(e){delete t.model.password_,console.log(t.model)})).catch((function(t){}))}}};e.default=n},8304:function(t,e,a){"use strict";a.r(e);var r=a("b781"),n=a("b030");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("fa5d");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"818297e6",null,!1,r["a"],o);e["default"]=u.exports},b030:function(t,e,a){"use strict";a.r(e);var r=a("4b43"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},b781:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var r={"u-Form":a("7595").default,uFormItem:a("f58c").default,uInput:a("f76d").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"input_wrap"},[a("u--form",{ref:"form",attrs:{model:t.model,rules:t.rules}},[a("u-form-item",{attrs:{prop:"account"}},[a("v-uni-view",{staticClass:"input_item"},[a("u-input",{attrs:{placeholder:"请输入账号",border:"bottom"},model:{value:t.model.account,callback:function(e){t.$set(t.model,"account",e)},expression:"model.account"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[t._v("账号")])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"password"}},[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{attrs:{type:"password",placeholder:"请输入密码",border:"none"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:"label"},[t._v("密码")])],1)],2)],1)],1)],1),a("v-uni-view",{staticClass:"agreement row"},[a("v-uni-image",{attrs:{src:t.isAgree?"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png":"https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreeHandle.apply(void 0,arguments)}}}),a("v-uni-text",[t._v("我已阅读并同意以下条款"),a("v-uni-text",{staticClass:"link"},[t._v("《好运来服务协议及隐私政策》》")])],1)],1)],1),a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")]),a("v-uni-view",{staticClass:"btn code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("./Login")}}},[t._v("已有账号，去登录")])],1)},i=[]},e809:function(t,e,a){var r=a("0355");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("54a19793",r,!0,{sourceMap:!1,shadowMode:!1})},fa5d:function(t,e,a){"use strict";var r=a("e809"),n=a.n(r);n.a}}]);