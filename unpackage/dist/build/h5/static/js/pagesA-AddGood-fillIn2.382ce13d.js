(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-AddGood-fillIn2"],{"0532":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"jPicker"},[e.pickerVisable?a("v-uni-view",{staticClass:"pickerMask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerVisable=!1}}},[a("v-uni-view",{staticClass:"alertArea JAnimateBtmIn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.doNothing.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pickerTop"},[a("v-uni-view",{staticClass:"lefBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelSel.apply(void 0,arguments)}}},[e._v("取消")]),a("v-uni-view",{staticClass:"midInput"},[[a("v-uni-text",{staticClass:"title"},[e._v(e._s(e.title))])]],2),a("v-uni-view",{staticClass:"rigBtn",style:{color:e.sureColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sureSelect.apply(void 0,arguments)}}},[e._v("确定")])],1),a("v-uni-picker-view",{staticClass:"pickerView",attrs:{value:[e.nSel],"mask-style":"background-color:"+e.bgColor,"indicator-style":e.selStyle},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.selChange.apply(void 0,arguments)}}},[a("v-uni-picker-view-column",e._l(e.listData,(function(t,i){return a("v-uni-view",{key:i,staticClass:"opItem"},[e._v(e._s(t[e.showKey]||t))])})),1)],1)],1)],1):e._e()],1)},r=[]},"53af":function(e,t,a){"use strict";var i=a("5653"),n=a.n(i);n.a},5653:function(e,t,a){var i=a("ec27");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("1f1e9ab6",i,!0,{sourceMap:!1,shadowMode:!1})},"5a73":function(e,t,a){"use strict";a.r(t);var i=a("0532"),n=a("f48f");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("53af");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5e3670e4",null,!1,i["a"],s);t["default"]=l.exports},"65f6":function(e,t,a){"use strict";var i=a("4ea4");a("99af"),a("d81d"),a("a434"),a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5530"));a("96cf");var r=i(a("1da1")),s=a("3e0a"),o={data:function(){return{tips:"",canClick:!1,model:{},fileList:[],columns:[{label:"仓库1",value:1},{label:"仓库2",value:2}],isDefault:!0,rules:{account:[{required:!0,message:"请输入子账户名称",trigger:"blur"}],phone:[{required:!0,validator:this.phoneRule,trigger:"blur"}],password:[{required:!0,validator:this.passWordRule,trigger:"blur"}],name:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}]},isAgree:!1}},watch:{},methods:{phoneRule:function(e,t,a){t&&(0,s.checkStr)(t,"mobile")||a(new Error("请输入正确的手机号码")),a()},passWordRule:function(e,t,a){t&&(0,s.checkStr)(t,"pwd")||a(new Error("密码为8-16位，须包含数字、字母、符号")),a()},changeDefault:function(e){this.isDefault=e},submit:function(){this.navTo("./AddGood")},confirm:function(e){console.log(e)},deletePic:function(e){this["fileList".concat(e.name)].splice(e.index,1)},afterRead:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var i,r,s,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=[].concat(e.file),r=t.fileList.length,i.map((function(e){t.fileList.push((0,n.default)((0,n.default)({},e),{},{status:"uploading",message:"上传中"}))})),s=0;case 4:if(!(s<i.length)){a.next=14;break}return a.next=7,t.uploadFilePromise(i[s].thumb);case 7:o=a.sent,l=t.fileList[r],t.fileList.splice(r,1,Object.assign(l,{status:"success",message:"",url:o})),r++;case 11:s++,a.next=4;break;case 14:case"end":return a.stop()}}),a)})))()},uploadFilePromise:function(e){return new Promise((function(t,a){uni.uploadFile({url:"http://192.168.2.21:7001/upload",filePath:e,name:"file",formData:{user:"test"},success:function(e){setTimeout((function(){t(e.data.data)}),1e3)}})}))}}};t.default=o},"7a10":function(e,t,a){var i=a("cff3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("13a5f930",i,!0,{sourceMap:!1,shadowMode:!1})},"848f":function(e,t,a){"use strict";a("c975"),a("d3b7"),a("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"jPicker",data:function(){return{listData:this.options,nSel:-1,pickerVisable:!1,searchPosition:"middle",selStyle:"height:50px;"}},props:["options","showKey","valKey","val","position","disabled","bgColor","sureColor","title"],watch:{options:function(e){this.listData=e,this.selByValKey()},val:function(e){this.selByValKey()}},mounted:function(){this.selByValKey(),this.position&&(this.searchPosition=this.position)},methods:{showPicker:function(){this.disabled||(this.pickerVisable=!0,this.listData=this.options)},cancelSel:function(){if(this.pickerVisable=!1,this.val)if(this.valKey){for(var e=this.listData,t=0,a=e.length;t<a;t++)if(e[t][this.valKey]==this.val){this.nSel=t;break}}else this.nSel=this.val;else this.nSel=-1},sureSelect:function(){if(this.pickerVisable=!1,0==this.listData.length)this.$emit("sure",{});else{var e={pickerVal:this.nSel,pickerName:-1==this.nSel?this.listData[0]:this.listData[this.nSel]};this.valKey&&(-1!=this.nSel?(e=this.listData[this.nSel],e.pickerVal=e[this.valKey]):(e=this.listData[0],e.pickerVal=e[this.valKey])),this.$emit("sure",e)}},selChange:function(e){this.nSel=e.detail.value[0]},filterOp:function(e){var t=e.detail.value;if(""!=t){t=t.toLowerCase();var a=this.options;this.listData=[],this.nSel=0;for(var i=0;i<a.length;i++){var n=a[i];this.showKey&&(n=a[i][this.showKey]),n.toString().toLowerCase().indexOf(t)>-1&&this.listData.push(a[i])}}else this.listData=this.options,this.nSel=this.val?this.val:-1,this.selByValKey()},selByValKey:function(){var e=this.options;if(this.listData=e,this.valKey){for(var t=0,a=e.length;t<a;t++)if(e[t][this.valKey]==this.val){this.nSel=t;break}}else this.nSel=this.val},doNothing:function(){}}};t.default=i},"8ede":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var i={"u-Form":a("598c").default,uFormItem:a("b0af").default,uInput:a("5e42").default,"u-Textarea":a("ed83").default,uUpload:a("2314").default,jPicker:a("5a73").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page_wrap"},[a("v-uni-view",{staticClass:"input_wrap mt20"},[a("u--form",{ref:"form",attrs:{model:e.model,rules:e.rules}},[a("u-form-item",{attrs:{prop:"account"}},[a("v-uni-view",{staticClass:"input_item"},[a("u-input",{attrs:{max:!0,placeholder:"请填写商品品牌，例：百事",border:"bottom"},model:{value:e.model.account,callback:function(t){e.$set(e.model,"account",t)},expression:"model.account"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:" f28-c333"},[e._v("品牌")])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"account"}},[a("v-uni-view",{staticClass:"input_item"},[a("u-input",{attrs:{max:!0,placeholder:"请填写商品规格，例：250ml/瓶",border:"bottom"},model:{value:e.model.account,callback:function(t){e.$set(e.model,"account",t)},expression:"model.account"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:" f28-c333"},[e._v("规格")])],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"name"}},[a("v-uni-view",{staticClass:"input_item "},[a("u-input",{attrs:{placeholder:"请填写编码",border:"bottom"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:" f28-c333"},[e._v("编码")])],1),a("template",{slot:"suffix"},[a("v-uni-text",{staticClass:"iconfont icon-saoyisao"})],1)],2)],1)],1),a("u-form-item",{attrs:{prop:"account"}},[a("v-uni-view",{staticClass:"input_item"},[a("u-input",{attrs:{max:!0,placeholder:"请填写预计一个月的供货量",border:"none"},model:{value:e.model.account,callback:function(t){e.$set(e.model,"account",t)},expression:"model.account"}},[a("template",{slot:"prefix"},[a("v-uni-text",{staticClass:" f28-c333"},[e._v("月供货量")])],1)],2)],1)],1)],1)],1),a("v-uni-view",{staticClass:"list mt20"},[a("v-uni-view",{staticClass:"item "},[a("v-uni-view",{staticClass:"left "},[e._v("备注")]),a("u--textarea",{attrs:{placeholder:"请填写备注，例：品种、口味、产地等",border:"none"},model:{value:e.model.remark,callback:function(t){e.$set(e.model,"remark",t)},expression:"model.remark"}})],1)],1),a("v-uni-view",{staticClass:"list mt20"},[a("v-uni-view",{staticClass:"item "},[a("v-uni-view",{staticClass:"left "},[e._v("上传图片")]),a("u-upload",{staticClass:"mt20",attrs:{fileList:e.fileList,name:"photo",multiple:!0,maxCount:3,previewFullImage:!0},on:{afterRead:function(t){arguments[0]=t=e.$handleEvent(t),e.afterRead.apply(void 0,arguments)},delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deletePic.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"btn_default",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),a("jPicker",{ref:"jPicker",attrs:{title:"选择仓库",options:e.columns,valKey:"value",showKey:"label"},on:{sure:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}})],1)},r=[]},aea9:function(e,t,a){"use strict";a.r(t);var i=a("8ede"),n=a("eeac");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("febd");var s,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"626954e8",null,!1,i["a"],s);t["default"]=l.exports},cff3:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.page_wrap .input_wrap[data-v-626954e8]{background-color:#fff;padding:0 %?30?%}.page_wrap .input_wrap[data-v-626954e8] .u-input{padding:%?20?% 0!important;background-color:#fff!important}.page_wrap .input_wrap[data-v-626954e8] .u-input__content__prefix-icon{width:%?180?%!important}.page_wrap .input_wrap[data-v-626954e8] .input_item{width:100%!important}.page_wrap .input_wrap[data-v-626954e8] .u-form-item__body__right__message{margin:0!important}.page_wrap .input_wrap .input_item .label[data-v-626954e8]{color:#333;font-size:%?32?%}.page_wrap .input_wrap .input_item .iconfont[data-v-626954e8]{color:#d1d1d1}.page_wrap .input_wrap .input_item .get_code[data-v-626954e8]{color:#fd4d00;font-size:%?28?%}.page_wrap .input_wrap .input_item .xing[data-v-626954e8]{color:#fe5b07}.page_wrap .input_wrap .status[data-v-626954e8]{height:%?88?%}.page_wrap .list[data-v-626954e8]{background-color:#fff;padding:0 %?30?%}.page_wrap .list .item[data-v-626954e8]{padding:%?40?% 0;border-bottom:1px solid #e1e1e1;justify-content:space-between}.page_wrap .list .item .left[data-v-626954e8]{font-size:%?30?%;color:#333}.page_wrap .list .item[data-v-626954e8]:last-child{border:none}.page_wrap .btn_default[data-v-626954e8]{width:93%;margin:auto;margin-top:%?50?%;margin-bottom:%?20?%}',""]),e.exports=t},ec27:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.jPicker[data-v-5e3670e4]{width:100%}.jPicker .showLine[data-v-5e3670e4]{width:100%;display:inline-block}.pickerMask[data-v-5e3670e4]{background-color:rgba(0,0,0,.5);height:100vh;width:100vw;position:fixed;left:0;top:0;z-index:999}.alertArea[data-v-5e3670e4]{position:fixed;bottom:0;left:0;width:100vw}.alertArea .searchInput[data-v-5e3670e4]{width:100%;position:relative}.alertArea .searchInput .clickArea[data-v-5e3670e4]{width:100%;display:flex;align-items:center;justify-content:center;height:36px}.alertArea .searchInput .clickArea .jInput[data-v-5e3670e4]{text-align:left;width:90%;border:none;height:30px;font-size:17px;padding:2px 8px;box-sizing:border-box;color:#fff}.alertArea .searchInput .clickArea .searchLogo[data-v-5e3670e4]{width:30px;height:30px;line-height:30px;text-align:center}.alertArea .searchInput[data-v-5e3670e4]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#678699;-webkit-filter:blur(18px);filter:blur(18px);z-index:-1}.alertArea .pickerTop[data-v-5e3670e4]{background-color:#fff;height:52px;display:flex;align-items:center;font-size:18px;box-sizing:border-box;justify-content:space-around}.alertArea .pickerTop .lefBtn[data-v-5e3670e4],\r\n.alertArea .pickerTop .rigBtn[data-v-5e3670e4]{font-size:%?32?%;line-height:1rem}.alertArea .pickerTop .lefBtn[data-v-5e3670e4]{color:#aaa}.alertArea .pickerTop .rigBtn[data-v-5e3670e4]{color:#fe5b07}.alertArea .pickerTop .midInput[data-v-5e3670e4]{width:64%;height:30px;position:relative;text-align:center;line-height:30px}.alertArea .pickerTop .midInput .searchArea[data-v-5e3670e4]{text-align:left;background-color:#efefef;border-radius:20px;padding:4px 10px}.alertArea .pickerTop .midInput .title[data-v-5e3670e4]{font-size:%?36?%;color:#333;font-weight:700}.alertArea .pickerTop .midInput .searchIcon[data-v-5e3670e4]{position:absolute;right:5px;top:0;width:30px;height:30px;text-align:center;display:flex;align-items:center}.alertArea .pickerView[data-v-5e3670e4]{background-color:#fff;width:100%;height:300px;left:0}.alertArea .pickerView .opItem[data-v-5e3670e4]{line-height:50px;text-align:center;color:#000}.JAnimateBtmIn[data-v-5e3670e4]{-webkit-animation:btmIn-data-v-5e3670e4 .3s ease;animation:btmIn-data-v-5e3670e4 .3s ease}@-webkit-keyframes btmIn-data-v-5e3670e4{0%{-webkit-transform:translateY(666px);transform:translateY(666px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes btmIn-data-v-5e3670e4{0%{-webkit-transform:translateY(666px);transform:translateY(666px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}',""]),e.exports=t},eeac:function(e,t,a){"use strict";a.r(t);var i=a("65f6"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},f48f:function(e,t,a){"use strict";a.r(t);var i=a("848f"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},febd:function(e,t,a){"use strict";var i=a("7a10"),n=a.n(i);n.a}}]);