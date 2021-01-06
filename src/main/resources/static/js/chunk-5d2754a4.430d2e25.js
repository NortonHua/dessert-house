(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d2754a4","chunk-593dd3d0","chunk-2d0ab309"],{"10bd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("分类列表")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:"创建分类",type:"disabled"},expression:"{ permission: '创建分类', type: 'disabled' }"}],staticStyle:{"margin-left":"30px"},attrs:{type:"primary",plain:"",size:"medium"},on:{click:function(t){return t.preventDefault(),e.handleAdd(t)}}},[e._v("创建分类\n    ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"id",width:"100"}}),n("el-table-column",{attrs:{prop:"img",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.img?[n("el-image",{staticStyle:{"max-height":"50px","max-width":"100px"},attrs:{src:t.row.img,"preview-src-list":e.imgSrcList}})]:void 0}}],null,!0)}),n("el-table-column",{attrs:{prop:"name",label:"名称",width:"150"}}),n("el-table-column",{attrs:{prop:"online",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("onlineFormat")(t.row.online)))]}}])}),n("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"200","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{fixed:"right",width:"220",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(n){return n.preventDefault(),e.handleEdit(t.row)}}},[e._v("编辑")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:"删除分类",type:"disabled"},expression:"{ permission: '删除分类', type: 'disabled' }"}],attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(n){return n.preventDefault(),e.handleDelete(t.row)}}},[e._v("删除\n        ")])]}}])})],1),n("div",{staticClass:"pagination"},[e.refreshPagination?n("el-pagination",{attrs:{background:!0,"page-size":e.pageCount,"current-page":e.currentPage,layout:"prev, pager, next, jumper",total:e.totalNums},on:{"current-change":e.handleCurrentChange}}):e._e()],1),e.dialogFormVisible?n("category-edit",{attrs:{isCreate:e.isCreate,dialogFormVisible:e.dialogFormVisible,categoryId:e.categoryId},on:{dialogClose:e.dialogClose}}):e._e()],1)},a=[],i=n("a34a"),o=n.n(i),s=n("13e6"),c=n("673c");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)})}}var d=u({name:"category",methods:{},components:{CategoryEdit:c["default"]},data:function(){return{display:!0,tableData:[],categoryId:0,imgSrcList:[],totalNums:0,currentPage:1,pageCount:10,refreshPagination:!0,dialogFormVisible:!1,isCreate:!1,root:1,form:{name:"",is_root:0,description:"",online:1,index:null}}},created:function(){this.loading=!0,this.getCategories(),this.loading=!1},filters:{onlineFormat:function(e){return 1===e?"显示":"不显示"}},watch:{display:function(e){this.form.online=e?1:0}}},"methods",{getCategories:function(){var e=p(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentPage-1,n=this.pageCount,e.next=4,s["default"].getCategories(t,n);case 4:r=e.sent,this.tableData=r.items,this.totalNums=r.total,this.initImgSrcList();case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCurrentChange:function(e){this.imgSrcList=[],this.currentPage=e,this.loading=!0,this.getCategories(),this.loading=!1},initImgSrcList:function(){var e=this;this.tableData.forEach(function(t){t.img&&e.imgSrcList.push(t.img)})},handleAdd:function(){this.dialogFormVisible=!0,this.isCreate=!0},handleEdit:function(e){this.categoryId=e.id,this.isCreate=!1,this.dialogFormVisible=!0},handleDelete:function(e){var t,n=this;this.$confirm("此操作将永久删除该分类，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p(o.a.mark(function r(){return o.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,n.loading=!0,r.next=4,s["default"].deleteCategory(e.id);case 4:t=r.sent,r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](0),n.loading=!1,console.error(r.t0);case 11:t.code<window.MAX_SUCCESS_CODE?(n.loading=!1,n.totalNums%n.pageCount===1&&1!=n.currentPage&&n.currentPage--,n.getCategories(),n.$message({type:"success",message:"".concat(t.message)})):(n.loading=!1,n.$message.error("".concat(t.message)));case 12:case"end":return r.stop()}},r,null,[[0,7]])})))},dialogClose:function(){this.dialogFormVisible=!1,this.loading=!0,this.getCategories(),this.loading=!1}}),f=d,m=(n("ef16"),n("2877")),g=Object(m["a"])(f,r,a,!1,null,"14db6aff",null);t["default"]=g.exports},"13e6":function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),i=n("ceda");function o(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var p=function(){function e(){c(this,e)}return l(e,null,[{key:"addCategory",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/category",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCategory",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/category/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCategory",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/category/".concat(t),n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteCategory",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/category/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCategories",value:function(){var e=s(a.a.mark(function e(){var t,n,r,o=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,n=o.length>1&&void 0!==o[1]?o[1]:10,e.next=4,Object(i["get"])("v1/category/page",{page:t,count:n});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getList",value:function(){var e=s(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/category/categories");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=p},"329f":function(e,t,n){},"673c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"append-to-body":!0,"before-close":e.handleClose,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("div",{staticStyle:{"margin-top":"-25px"}},[n("div",{staticClass:"dialog-title"},[n("span",[e._v(e._s(e.isCreate?"创建分类":"更新分类"))])]),n("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写分类名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"显示上线",prop:"online"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"上线","inactive-text":"下线"},model:{value:e.display,callback:function(t){e.display=t},expression:"display"}})],1),n("el-form-item",{attrs:{label:"图片",prop:"img"}},[n("upload-imgs",{ref:"uploadEle",attrs:{"max-num":e.maxNum,value:e.initData}})],1),n("el-form-item",{attrs:{label:"描述",prop:"description"}},[n("el-input",{attrs:{size:"medium",type:"textarea",rows:1,placeholder:"请填写描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),n("div",{staticClass:"dialog-footer",staticStyle:{"padding-left":"5px"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:"更新分类",type:"disabled"},expression:"{ permission: '更新分类', type: 'disabled' }"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")]),n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")])],1)])},a=[],i=n("a34a"),o=n.n(i),s=n("13e6"),c=n("9053");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){d(i,r,a,o,s,"next",e)}function s(e){d(i,r,a,o,s,"throw",e)}o(void 0)})}}var m={name:"category-edit",components:{UploadImgs:c["default"]},props:{dialogFormVisible:{type:Boolean,default:!1},isCreate:{type:Boolean,default:!1},categoryId:{type:Number,default:0},isSub:{type:Boolean,default:!1}},computed:{visible:{get:function(){return this.dialogFormVisible},set:function(){}}},data:function(){return{display:!0,initData:[],maxNum:1,form:{name:"",is_root:0,parent_id:null,description:"",online:1,index:null}}},watch:{display:function(e){this.form.online=e?1:0}},mounted:function(){var e=f(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isCreate){e.next=7;break}return e.next=3,s["default"].getCategory(this.categoryId);case 3:t=e.sent,this.form=t,this.display=1===t.online,this.initData=[{display:t.img}];case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{submitForm:function(){var e=f(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getValue();case 2:if(t=l({},this.form),!this.isCreate){e.next=9;break}return e.next=6,s["default"].addCategory(t);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,s["default"].editCategory(this.categoryId,t);case 11:n=e.sent;case 12:n.code<window.MAX_SUCCESS_CODE&&(this.$message.success("".concat(n.message)),this.$emit("dialogClose"));case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getValue:function(){var e=f(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.uploadEle.getValue();case 2:t=e.sent,t&&t.length>0&&(this.form.img=t[0].display);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},handleClose:function(e){e(),this.$emit("dialogClose")}}},g=m,h=(n("b310"),n("2877")),v=Object(h["a"])(g,r,a,!1,null,"18b4ea59",null);t["default"]=v.exports},b151:function(e,t,n){},b310:function(e,t,n){"use strict";var r=n("329f"),a=n.n(r);a.a},ef16:function(e,t,n){"use strict";var r=n("b151"),a=n.n(r);a.a}}]);