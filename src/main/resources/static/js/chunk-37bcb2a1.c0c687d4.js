(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37bcb2a1","chunk-2d21d841"],{"9ce5":function(e,t,r){},bccf:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("div",{staticClass:"nav-avatar"},[a("img",{attrs:{src:e.user.avatar||e.defaultAvatar,alt:"头像"}})])]),a("el-dropdown-menu",{staticClass:"user-box",attrs:{slot:"dropdown"},slot:"dropdown"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar",attrs:{title:"点击修改头像"}},[a("img",{attrs:{src:e.user.avatar||e.defaultAvatar,alt:"头像"}}),a("label",{staticClass:"mask"},[a("i",{staticClass:"iconfont icon-icon-test",staticStyle:{"font-size":"20px"}}),a("input",{ref:"avatarInput",attrs:{type:"file",accept:"image/*"},on:{change:e.fileChange}})])]),a("div",{staticClass:"text"},[e.nicknameChanged?a("el-input",{ref:"input",attrs:{placeholder:"请输入内容",size:"small"},on:{blur:e.blur},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}):a("div",{staticClass:"username",on:{click:e.changeNickname}},[e._v(e._s(e.nickname))])],1),a("img",{staticClass:"corner",attrs:{src:r("d241")}})]),a("ul",{staticClass:"dropdown-box"},[a("li",{staticClass:"password",on:{click:e.goToCenter}},[a("i",{staticClass:"iconfont icon-weibaoxitongshangchuanlogo-"}),a("span",[e._v("个人中心")])]),a("li",{staticClass:"account",on:{click:e.outLogin}},[a("i",{staticClass:"iconfont icon-tuichu"}),a("span",[e._v("退出账户")])])])])],1),a("el-dialog",{attrs:{title:"裁剪",visible:e.cropVisible,width:"300px","append-to-body":!0,"close-on-click-modal":!1,"custom-class":"croppa-dialog",center:""},on:{"update:visible":function(t){e.cropVisible=t}}},[a("div",{staticStyle:{"text-align":"center"}},[a("div",{staticClass:"avatar-croppa-container"},[a("croppa",{ref:"croppa",attrs:{width:e.cropRule.width,height:e.cropRule.height,placeholder:"loading","zoom-speed":30,"disable-drag-and-drop":!1,"show-remove-button":!1,"prevent-white-space":!0,"disable-click-to-choose":!1,"disable-scroll-to-zoom":!1,"show-loading":!0,quality:e.quality,"initial-image":e.cropImg}})],1),a("div",{staticStyle:{"margin-top":"1em"}},[e._v("通过鼠标滚轮调节头像大小")])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.cropVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleCrop}},[e._v("确 定")])],1)]),a("el-dialog",{staticClass:"user-dialog",attrs:{title:"修改密码","append-to-body":!0,"before-close":e.handleClose,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-position":"left","label-width":"90px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"原始密码",prop:"old_password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.old_password,callback:function(t){e.$set(e.form,"old_password",t)},expression:"form.old_password"}})],1),a("el-form-item",{attrs:{label:"新密码",prop:"new_password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.new_password,callback:function(t){e.$set(e.form,"new_password",t)},expression:"form.new_password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"confirm_password","label-position":"top"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.confirm_password,callback:function(t){e.$set(e.form,"confirm_password",t)},expression:"form.confirm_password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保存")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)],1)},n=[],o=r("a34a"),i=r.n(o),s=r("2f62"),c=r("2b0e"),l=r("2896"),u=r.n(l),p=r("0b69"),d=(r("40d9"),r("0ca5")),f=r.n(d);function m(e,t,r,a,n,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function i(e){m(o,a,n,i,s,"next",e)}function s(e){m(o,a,n,i,s,"throw",e)}i(void 0)})}}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){w(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}c["default"].use(u.a);var v=150,A=150,k={name:"user",components:{},data:function(){var e=this,t=function(e,t,r){if(!t)return r(new Error("原始密码不能为空"));r()},r=function(t,r,a){""===r?a(new Error("请输入密码")):r.length<6?a(new Error("密码长度不能少于6位数")):(""!==e.form.checkPassword&&e.$refs.form.validateField("confirm_password"),a())},a=function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.form.new_password?a(new Error("两次输入密码不一致!")):a()};return{username:null,dialogFormVisible:!1,nicknameChanged:!1,nickname:null,groupName:null,form:{old_password:"",new_password:"",confirm_password:""},rules:{old_password:[{validator:t,trigger:"blur",required:!0}],new_password:[{validator:r,trigger:"blur",required:!0}],confirm_password:[{validator:a,trigger:"blur",required:!0}]},cropRule:{width:v,height:A},imgRule:{minWidth:v,minHeight:A},cropVisible:!1,cropImg:"",croppa:{},imgInfo:null,quality:1,defaultAvatar:f.a}},computed:b({},Object(s["c"])(["user"])),watch:{cropVisible:function(e){e||(this.$refs.croppa.remove(),this.cropImg="",this.imgInfo=null)}},created:function(){this.init()},methods:b({},Object(s["b"])(["loginOut","setUserAndState"]),{fileChange:function(e){var t=this;if(1===e.target.files.length){var r=e.target.files[0];if(r.size>5242880)return this.$message.error("文件过大超过5M"),void this.clearFileInput(this.$refs.avatarInput);var a=window.URL.createObjectURL(r),n=new Image;n.src=a,n.onload=function(){var e=n.width,r=n.height;return e<50?(t.$message.error("图像宽度过小, 请选择大于50px的图像"),void t.clearFileInput(t.$refs.avatarInput)):r<50?(t.$message.error("图像高度过小, 请选择大于50px的图像"),void t.clearFileInput(t.$refs.avatarInput)):(t.cropImg=a,t.cropVisible=!0,void(t.$refs.croppa&&t.$refs.croppa.refresh()))},n.onerror=function(){t.$message.error("获取本地图片出现错误, 请重试"),t.clearFileInput(t.$refs.avatarInput)}}},handleCrop:function(){var e=h(i.a.mark(function e(){var t,r,a=this;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.croppa.promisedBlob("image/jpeg",.8);case 2:return t=e.sent,r=new File([t],"avatar.jpg",{type:"image/jpeg"}),e.abrupt("return",this.$axios({method:"post",url:"/cms/file",data:{file:r}}).then(function(e){return a.clearFileInput(a.$refs.avatarInput),Array.isArray(e)&&1===e.length?a.$axios({method:"put",url:"/cms/user",data:{avatar:e[0].path}}).then(function(e){return e.code<window.MAX_SUCCESS_CODE?(a.$message({type:"success",message:"更新头像成功"}),a.cropVisible=!1,p["default"].getInformation()):Promise.reject(new Error("更新头像失败"))}).then(function(e){var t=e;a.setUserAndState(t)}):(a.$message.error("头像上传失败, 请重试"),!1)}));case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeNickname:function(){var e=this;this.nicknameChanged=!0,setTimeout(function(){e.$refs.input.focus()},200)},blur:function(){var e=h(i.a.mark(function e(){var t,r=this;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.nickname&&(t=this.$store.state.user,this.nickname!==t.nickname&&"佚名"!==this.nickname&&this.$axios({method:"put",url:"/cms/user",data:{nickname:this.nickname},showBackend:!0}).then(function(e){if(e.code<window.MAX_SUCCESS_CODE)return r.$message({type:"success",message:"更新昵称成功"}),p["default"].getInformation()}).then(function(e){r.setUserAndState(e),r.nickname=e.nickname})),this.nicknameChanged=!1;case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),init:function(){var e=this.$store.state.user;this.username=e?e.username:"未登录",this.groupName=e.groupName?e.groupName:"超级管理员",this.nickname=e&&e.nickname?e.nickname:"佚名"},goToCenter:function(){this.$router.push("/center")},handleClose:function(e){this.dialogFormVisible=!1,e()},outLogin:function(){window.location.reload(!0),this.loginOut()},submitForm:function(e){var t=this;""!==this.form.old_password||""!==this.form.new_password||""!==this.form.confirm_password?this.form.old_password!==this.form.new_password?this.$refs[e].validate(function(){var r=h(i.a.mark(function r(a){var n;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=7;break}return r.next=3,p["default"].updatePassword(t.form);case 3:n=r.sent,n.code<window.MAX_SUCCESS_CODE&&(t.$message.success("".concat(n.message)),t.resetForm(e),t.dialogFormVisible=!1,setTimeout(function(){t.loginOut();var e=window.location.origin;window.location.href=e},1e3)),r.next=10;break;case 7:return console.log("error submit!!"),t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 10:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()):this.$message.error("新密码不能与原始密码一样"):this.dialogFormVisible=!1},resetForm:function(e){this.$refs[e].resetFields()},clearFileInput:function(e){e.value=""}})},C=k,y=(r("fe9d"),r("2877")),x=Object(y["a"])(C,a,n,!1,null,"61b9d816",null);t["default"]=x.exports},d241:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAVCAMAAADVYYZJAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAVFBMVEUAAABbb6BYaZhebqBic59bbZ9WappZbJxdbZ1gcp5Za5xdbqFebqBXapdVaJlabJ1YaplWa5pbbqFcbaFabJ1Xaplfb6NdbqNecKNhcaNbb6NjcqPkGGQ/AAAAE3RSTlMAurONXdN/6T8do3ivzo3NrXCWt2J7PgAAARhJREFUOMuVkuuWgyAMhLXVIm33mhBg9/3fc5NwEW1d7Rz948lHZga7bkPDybi3i+1e0zC6pPdXKHtyVWY6jE3GtbocxL7cSp+HsOuCQUSAcb8e+yHDBQLvQbQb0hqUHXkVUSDlgIadRhCxWiRWXgg/t/9uDVVpIYaWA/jexM5YpNlCYKpg3E6/gd0rVblmHaNPa7UjNpJ04tNTAjdrnQwf2ILCKTlzfJXrWm+p75ZknzNXdV147HP2BSe3x4+vNvXgxutgeBuRgjNMRYtu+M3/ub2zH6BI7UrQbJQqrWYx9yorz796KJSAoFSMkfgoMepVTUQe6KdOBniMuVg4CAmLpJ0ytMJYzCkpWNSMnCx9oRhCMurhgfwDhnY01GZ3WbcAAAAASUVORK5CYII="},fe9d:function(e,t,r){"use strict";var a=r("9ce5"),n=r.n(a);n.a}}]);