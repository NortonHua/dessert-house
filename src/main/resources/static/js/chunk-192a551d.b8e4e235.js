(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-192a551d","chunk-2d0c4277","chunk-2d0ae96b"],{"0b69":function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return v});var n=t("a34a"),a=t.n(n),s=t("ceda"),u=t("283a"),i=t("4360");function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(t,!0).forEach(function(r){p(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r,t,n,a,s,u){try{var i=e[s](u),o=i.value}catch(c){return void t(c)}i.done?r(o):Promise.resolve(o).then(n,a)}function f(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var s=e.apply(r,t);function u(e){l(s,n,a,u,i,"next",e)}function i(e){l(s,n,a,u,i,"throw",e)}u(void 0)})}}function d(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function m(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,r,t){return r&&m(e.prototype,r),t&&m(e,t),e}var v=function(){function e(){d(this,e)}return h(e,null,[{key:"register",value:function(e){return Object(s["default"])({method:"post",url:"cms/user/register",data:e,handleError:!0})}},{key:"getToken",value:function(){var e=f(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["post"])("cms/user/login",{username:r,password:t});case 2:return n=e.sent,Object(u["saveTokens"])(n.access_token,n.refresh_token),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"getInformation",value:function(){var e=f(a.a.mark(function e(){var r,t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["get"])("cms/user/information");case 2:return r=e.sent,t=null===i["default"].getters.user?{}:i["default"].getters.user,e.abrupt("return",Object.assign(c({},t),r));case 5:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"getPermissions",value:function(){var e=f(a.a.mark(function e(){var r,t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["get"])("cms/user/permissions");case 2:return r=e.sent,t=null===i["default"].getters.user?{}:i["default"].getters.user,e.abrupt("return",Object.assign(c({},t),r));case 5:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"updatePassword",value:function(e){var r=e.old_password,t=e.new_password,n=e.confirm_password;return Object(s["put"])("cms/user/change_password",{new_password:t,confirm_password:n,old_password:r})}}]),e}()},"2db2":function(e,r,t){"use strict";var n=t("67ca"),a=t.n(n);a.a},"3a2e":function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return l});var n=t("a34a"),a=t.n(n),s=t("ceda");function u(e,r,t,n,a,s,u){try{var i=e[s](u),o=i.value}catch(c){return void t(c)}i.done?r(o):Promise.resolve(o).then(n,a)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var s=e.apply(r,t);function i(e){u(s,n,a,i,o,"next",e)}function o(e){u(s,n,a,i,o,"throw",e)}i(void 0)})}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,r,t){return r&&c(e.prototype,r),t&&c(e,t),e}var l=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;o(this,e),this.uPage=r,this.uCount=t,this.lPage=n,this.gCount=a}return p(e,[{key:"increaseUPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.uPage+=1;case 1:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"increaseGPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.lPage+=1;case 1:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"decreaseUPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.uPage-=1,this.uPage<0&&(this.uPage=0);case 2:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"decreaseGPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.lPage-=1,this.lPage<0&&(this.lPage=0);case 2:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"nextUsersPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.increaseUPage();case 2:return e.abrupt("return",this.getAdminUsers({}));case 3:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"preUsersPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.decreaseUPage();case 2:return e.abrupt("return",this.getAdminUsers({}));case 3:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"getGroupsWithPermissions",value:function(){var e=i(a.a.mark(function e(r){var t,n,u,i,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.count,n=void 0===t?this.uCount:t,u=r.page,i=void 0===u?this.uPag:u,e.next=3,Object(s["get"])("cms/admin/groups",{count:n,page:i});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"nextGroupsPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.increaseGPage();case 2:return e.abrupt("return",this.getGroupsWithPermissions({}));case 3:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()},{key:"preGroupsPage",value:function(){var e=i(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.decreaseGPage();case 2:return e.abrupt("return",this.getGroupsWithPermissions({}));case 3:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()}],[{key:"getAllPermissions",value:function(){return Object(s["get"])("cms/admin/permission")}},{key:"getAdminUsers",value:function(){var e=i(a.a.mark(function e(r){var t,n,u,i,o,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.group_id,n=r.count,u=void 0===n?this.uCount:n,i=r.page,o=void 0===i?this.uPag:i,!t){e.next=7;break}return e.next=4,Object(s["get"])("cms/admin/users",{count:u,page:o,group_id:t});case 4:c=e.sent,e.next=10;break;case 7:return e.next=9,Object(s["get"])("cms/admin/users",{count:u,page:o});case 9:c=e.sent;case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}},e,this)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getAllGroups",value:function(){var e=i(a.a.mark(function e(){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["get"])("cms/admin/group/all");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"getOneGroup",value:function(){var e=i(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["get"])("cms/admin/group/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"createOneGroup",value:function(){var e=i(a.a.mark(function e(r,t,n){var u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["post"])("cms/admin/group",{name:r,info:t,permission_ids:n});case 2:return u=e.sent,e.abrupt("return",u);case 4:case"end":return e.stop()}},e)}));function r(r,t,n){return e.apply(this,arguments)}return r}()},{key:"updateOneGroup",value:function(){var e=i(a.a.mark(function e(r,t,n){var u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["put"])("cms/admin/group/".concat(n),{name:r,info:t});case 2:return u=e.sent,e.abrupt("return",u);case 4:case"end":return e.stop()}},e)}));function r(r,t,n){return e.apply(this,arguments)}return r}()},{key:"deleteOneGroup",value:function(){var e=i(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["_delete"])("cms/admin/group/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteOneUser",value:function(){var e=i(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["_delete"])("cms/admin/user/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"updateOneUser",value:function(){var e=i(a.a.mark(function e(r,t,n){var u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["put"])("cms/admin/user/".concat(n),{email:r,group_ids:t});case 2:return u=e.sent,e.abrupt("return",u);case 4:case"end":return e.stop()}},e)}));function r(r,t,n){return e.apply(this,arguments)}return r}()},{key:"dispatchPermissions",value:function(){var e=i(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["post"])("cms/admin/permission/dispatch/batch",{group_id:r,permission_ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"changePassword",value:function(){var e=i(a.a.mark(function e(r,t,n){var u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["put"])("cms/admin/user/".concat(n,"/password"),{new_password:r,confirm_password:t});case 2:return u=e.sent,e.abrupt("return",u);case 4:case"end":return e.stop()}},e)}));function r(r,t,n){return e.apply(this,arguments)}return r}()},{key:"removePermissions",value:function(){var e=i(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["post"])("cms/admin/permission/remove",{group_id:r,permission_ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()}]),e}()},"5c4b":function(e,r,t){},"67ca":function(e,r,t){},cfbe:function(e,r,t){"use strict";var n=t("5c4b"),a=t.n(n);a.a},d4ac:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-position":e.labelPosition,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{size:"medium",clearable:"",disabled:e.isEdited},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{size:"medium",clearable:"",disabled:e.isEdited,"auto-complete":"new-password"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),"add"===e.pageType?t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{size:"medium",clearable:"",type:"password","auto-complete":"new-password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1):e._e(),"add"===e.pageType?t("el-form-item",{attrs:{label:"确认密码",prop:"confirm_password","label-position":"top"}},[t("el-input",{attrs:{size:"medium",clearable:"",type:"password",autocomplete:"off"},model:{value:e.form.confirm_password,callback:function(r){e.$set(e.form,"confirm_password",r)},expression:"form.confirm_password"}})],1):e._e(),"password"!==e.pageType?t("el-form-item",{attrs:{label:"选择分组"}},[t("el-checkbox-group",{staticStyle:{transform:"translateY(5px)"},attrs:{size:"small"},model:{value:e.form.group_ids,callback:function(r){e.$set(e.form,"group_ids",r)},expression:"form.group_ids"}},e._l(e.groups,function(r){return t("el-checkbox",{key:r.id,staticStyle:{"margin-left":"0"},attrs:{label:r.id,border:""}},[e._v(e._s(r.name))])}),1)],1):e._e(),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.submit,expression:"submit"}],staticClass:"submit"},[t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(r){return e.submitForm("form")}}},[e._v("保 存")]),t("el-button",{on:{click:function(r){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)},a=[],s=t("a34a"),u=t.n(s),i=t("3a2e"),o=t("0b69");function c(e,r,t,n,a,s,u){try{var i=e[s](u),o=i.value}catch(c){return void t(c)}i.done?r(o):Promise.resolve(o).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var s=e.apply(r,t);function u(e){c(s,n,a,u,i,"next",e)}function i(e){c(s,n,a,u,i,"throw",e)}u(void 0)})}}var l={props:{submit:{type:Boolean,default:!0},id:{type:Number,default:void 0},groups:{type:Array,default:function(){}},labelPosition:{type:String,default:"right"},info:{type:Object,default:function(){}},pageType:{type:String,default:"add"}},inject:["eventBus"],data:function(){var e=this,r=function(e,r,t){r||t(new Error("用户名不能为空")),t()},t=function(r,t,n){""===t?n(new Error("请输入密码")):t.length<6?n(new Error("密码长度不能少于6位数")):(""!==e.form.checkPassword&&e.$refs.form.validateField("confirm_password"),n())},n=function(r,t,n){""===t?n(new Error("请再次输入密码")):t!==e.form.password?n(new Error("两次输入密码不一致!")):n()};return{loading:!1,isEdited:!1,form:{username:"",password:"",confirm_password:"",email:"",group_ids:[]},rules:{username:[{validator:r,trigger:["blur","change"],required:!0}],password:[{validator:t,trigger:"blur",required:!0}],confirm_password:[{validator:n,trigger:"blur",required:!0}],email:[{type:"email",message:"请输入正确的邮箱地址或者不填",trigger:["blur","change"]}]}}},methods:{submitForm:function(){var e=p(u.a.mark(function e(r){var t=this;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[r].validate(function(){var e=p(u.a.mark(function e(n){var a;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=37;break}if("add"!==t.pageType){e.next=17;break}return e.prev=2,t.loading=!0,e.next=6,o["default"].register(t.form);case 6:a=e.sent,a.code<window.MAX_SUCCESS_CODE&&(t.loading=!1,t.$message.success("".concat(a.message)),t.eventBus.$emit("addUser",!0),t.resetForm(r)),e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](2),t.loading=!1,10073===e.t0.data.code?t.$message.error(e.t0.data.message):t.$message.error("新增用户失败"),console.log(e.t0);case 15:e.next=35;break;case 17:if(t.form.email!==t.info.email||t.form.group_ids.sort().toString()!==t.info.group_ids.sort().toString()){e.next=20;break}return t.$emit("handleInfoResult",!1),e.abrupt("return");case 20:if(e.prev=20,t.form.group_ids.length){e.next=24;break}return t.$message.error("至少选择一个分组"),e.abrupt("return");case 24:return t.loading=!0,e.next=27,i["default"].updateOneUser(t.form.email,t.form.group_ids,t.id);case 27:a=e.sent,e.next=34;break;case 30:e.prev=30,e.t1=e["catch"](20),t.loading=!1,console.log(e.t1);case 34:a.code<window.MAX_SUCCESS_CODE?(t.loading=!1,t.$message.success("".concat(a.message)),t.$emit("handleInfoResult",!0)):(t.loading=!1,t.$message.error("".concat(a.message)));case 35:e.next=39;break;case 37:console.log("error submit!!"),t.$message.error("请填写正确的信息");case 39:case"end":return e.stop()}},e,null,[[2,10],[20,30]])}));return function(r){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function r(r){return e.apply(this,arguments)}return r}(),resetForm:function(e){"edit"===this.pageType?this.setInfo():(this.form.group_ids=[],this.$refs[e].resetFields())},setInfo:function(){this.form.username=this.info.username,this.form.email=this.info.email;var e=[];this.info.group_ids.forEach(function(r){e.push(r.id)}),this.form.group_ids=e}},created:function(){"edit"===this.pageType&&(this.setInfo(),this.isEdited=!0)}},f=l,d=(t("2db2"),t("cfbe"),t("2877")),m=Object(d["a"])(f,n,a,!1,null,"70e13fe8",null);r["default"]=m.exports}}]);