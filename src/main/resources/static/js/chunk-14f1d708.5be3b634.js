(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f1d708","chunk-2d0ab309","chunk-2d0dddfb"],{"13e6":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("ceda");function s(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function u(e){s(i,n,a,u,c,"next",e)}function c(e){s(i,n,a,u,c,"throw",e)}u(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}var p=function(){function e(){c(this,e)}return l(e,null,[{key:"addCategory",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/category",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCategory",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/category/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCategory",value:function(){var e=u(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/category/".concat(t),r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteCategory",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/category/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCategories",value:function(){var e=u(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:10,e.next=4,Object(i["get"])("v1/category/page",{page:t,count:r});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getList",value:function(){var e=u(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/category/categories");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=p},6926:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("sticky-top",[r("div",{staticClass:"title"},[r("span",[e._v(e._s(e.isCreate?"创建商品":"更新商品"))]),r("span",{staticClass:"back",on:{click:e.back}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")]),r("el-divider")],1)]),r("div",{staticClass:"container"},[r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"副标题",prop:"subtitle"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写副标题"},model:{value:e.form.subtitle,callback:function(t){e.$set(e.form,"subtitle",t)},expression:"form.subtitle"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"折扣",prop:"discount_price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写折扣"},model:{value:e.form.discount_price,callback:function(t){e.$set(e.form,"discount_price",t)},expression:"form.discount_price"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[r("el-autocomplete",{staticClass:"inline-input",attrs:{"popper-class":"my-autocomplete","fetch-suggestions":e.queryCategorySearch,placeholder:"请填写所属分类"},on:{focus:e.loadCategorySuggestions,select:e.handleCategorySelect},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("span",{staticClass:"id"},[e._v(e._s(n.id))]),r("span",{staticClass:"name"},[e._v(e._s(n.name))])]}}]),model:{value:e.categoryState,callback:function(t){e.categoryState=t},expression:"categoryState"}})],1),r("el-form-item",{attrs:{label:"是否上架"}},[r("el-switch",{attrs:{size:"medium","active-color":"#13ce66","inactive-color":"#ff4949","active-text":"上架","inactive-text":"下架"},model:{value:e.saled,callback:function(t){e.saled=t},expression:"saled"}})],1),r("el-form-item",{attrs:{label:"主图",prop:"img"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"主图，前端展示图片",placement:"top-start"}},[r("upload-imgs",{ref:"uploadEle",attrs:{multiple:"","max-num":e.mainMaxNun,value:e.initData}})],1)],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:["创建SPU","更新SPU"],type:"disabled"},expression:"{ permission: ['创建SPU', '更新SPU'], type: 'disabled' }"}],attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存\n              ")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])],1)},a=[],i=r("a34a"),s=r.n(i),u=r("82f1"),c=r("13e6"),o=r("9053");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){d(i,n,a,s,u,"next",e)}function u(e){d(i,n,a,s,u,"throw",e)}s(void 0)})}}var v={components:{UploadImgs:o["default"]},name:"spu-edit",props:{isCreate:{type:Boolean,default:!1},spuId:{type:String,default:null}},data:function(){return{form:{title:"",subtitle:"",category_id:null,online:1,price:null,discount_price:null,img:null,description:null},rules:{minWidth:100,minHeight:100,maxSize:5},initData:[],maxNum:5,mainMaxNun:1,saled:!0,categorySuggestions:[],categoryState:""}},watch:{saled:function(e){this.form.online=e?1:0}},mounted:function(){var e=m(s.a.mark(function e(){var t,r,n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isCreate){e.next=12;break}return e.next=3,u["default"].getSpu(this.spuId);case 3:return t=e.sent,this.form=t,r=[{id:t.id,display:t.img}],this.saled=1===t.online,this.initData=r,e.next=10,c["default"].getCategory(t.category_id);case 10:n=e.sent,this.categoryState=n.name;case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{submitForm:function(){var e=m(s.a.mark(function e(t){var r,n,a=this;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getValue();case 2:if(r=p({},this.form),r.title){e.next=6;break}return this.$message.error("请填写标题！"),e.abrupt("return");case 6:if(r.price){e.next=9;break}return this.$message.error("请填写价格信息！"),e.abrupt("return");case 9:if(r.category_id){e.next=12;break}return this.$message.error("请选择分类！"),e.abrupt("return");case 12:if(r.img){e.next=15;break}return this.$message.error("请添加图片信息！"),e.abrupt("return");case 15:if(!this.isCreate){e.next=21;break}return e.next=18,u["default"].addSpu(r);case 18:n=e.sent,e.next=24;break;case 21:return e.next=23,u["default"].editSpu(this.spuId,r);case 23:n=e.sent;case 24:console.log(n),n.code<window.MAX_SUCCESS_CODE&&(this.$message.success("".concat(n.message)),this.$confirm("是否返回上一页","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(m(s.a.mark(function e(){return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a.$emit("editClose");case 1:case"end":return e.stop()}},e)}))));case 26:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},queryCategorySearch:function(e,t){var r=this.categorySuggestions,n=e?r.filter(this.createCategoryFilter(e)):r;t(n)},createCategoryFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},handleCategorySelect:function(e){this.categoryState=e.name,this.form.category_id=e.id},getValue:function(){var e=m(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.uploadEle.getValue();case 2:t=e.sent,t&&t.length>0&&(this.form.img=t[0].display);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),back:function(){this.$emit("editClose")},loadCategorySuggestions:function(){var e=m(s.a.mark(function e(){return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.categorySuggestions.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c["default"].getList();case 5:this.categorySuggestions=e.sent,0===this.categorySuggestions.length&&this.$message.error("暂无分类，请先添加"),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](2),this.$message.error("获取分类建议信息失败"),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[2,9]])}));function t(){return e.apply(this,arguments)}return t}()}},h=v,g=(r("9e80"),r("2877")),b=Object(g["a"])(h,n,a,!1,null,"0d2ec921",null);t["default"]=b.exports},"82f1":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("ceda");function s(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function u(e){s(i,n,a,u,c,"next",e)}function c(e){s(i,n,a,u,c,"throw",e)}u(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}var p=function(){function e(){c(this,e)}return l(e,null,[{key:"addSpu",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spu",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpu",value:function(){var e=u(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spu/".concat(t),r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getSpu",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spu/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteSpu",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spu/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSpus",value:function(){var e=u(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:10,e.next=4,Object(i["get"])("v1/spu/page",{page:t,count:r});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getList",value:function(){var e=u(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spu/list");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=p},"9e80":function(e,t,r){"use strict";var n=r("b1de"),a=r.n(n);a.a},b1de:function(e,t,r){}}]);