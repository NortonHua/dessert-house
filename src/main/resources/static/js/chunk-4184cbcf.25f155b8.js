(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4184cbcf","chunk-2d22e189"],{"064f":function(t,e,r){},"3f5e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("stick-top",[r("div",{staticClass:"title"},[r("span",[t._v("订单详情")]),r("span",{staticClass:"back",on:{click:t.back}},[r("i",{staticClass:"iconfont icon-fanhui"}),t._v(" 返回 ")]),r("el-divider")],1)]),r("div",{staticClass:"container"},[r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{ref:"form",attrs:{model:t.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",{attrs:{label:"订单号",prop:"order_no"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:t.form.order_no,callback:function(e){t.$set(t.form,"order_no",e)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"图片",prop:"snap_img"}},[r("el-image",{staticStyle:{height:"100px",width:"100px"},attrs:{src:t.form.snap_img}})],1),r("el-form-item",{attrs:{label:"标题",prop:"snap_title"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:t.form.snap_title,callback:function(e){t.$set(t.form,"snap_title",e)},expression:"form.snap_title"}})],1),r("el-form-item",{attrs:{label:"预付编号",prop:"prepay_id"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:t.form.prepay_id,callback:function(e){t.$set(t.form,"prepay_id",e)},expression:"form.prepay_id"}})],1),r("el-form-item",{attrs:{label:"总价格",prop:"total_price"}},[r("el-input-number",{attrs:{disabled:"",precision:2,step:.1},model:{value:t.form.total_price,callback:function(e){t.$set(t.form,"total_price",e)},expression:"form.total_price"}})],1),r("el-form-item",{attrs:{label:"交易价格",prop:"final_total_price"}},[r("el-input-number",{attrs:{disabled:"",precision:2,step:.1},model:{value:t.form.total_price,callback:function(e){t.$set(t.form,"total_price",e)},expression:"form.total_price"}})],1),r("el-form-item",{attrs:{label:"总数量",prop:"total_count"}},[r("el-input-number",{attrs:{disabled:"",step:1,"step-strictly":""},model:{value:t.form.total_count,callback:function(e){t.$set(t.form,"total_count",e)},expression:"form.total_count"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("div",{staticClass:"tags"},[r("el-tag",{attrs:{type:t.computeTagType(t.form.status)}},[t._v(t._s(t.orderStatus(t.form.status)))])],1)]),r("el-form-item",{attrs:{label:"地址",prop:"snap_address"}},[t.form.snap_address?r("div",{staticClass:"address"},[r("div",{staticClass:"header"},[r("span",{staticClass:"name"},[t._v(t._s(JSON.parse(t.form.snap_address).userName))]),r("span",{staticClass:"mobile"},[t._v(t._s(JSON.parse(t.form.snap_address).mobile))])]),r("div",{staticClass:"detail"},[t._v("\n                  "+t._s(JSON.parse(t.form.snap_address).province)+" "+t._s(JSON.parse(t.form.snap_address).city)+t._s(JSON.parse(t.form.snap_address).county)+"\n                  **************\n                  "+t._s(JSON.parse(t.form.snap_address).detail)+"\n                ")])]):t._e()]),r("el-form-item",{attrs:{label:"详情",prop:"snap_items"}},[t.form.snap_items?r("el-table",{attrs:{stripe:"",data:JSON.parse(t.form.snap_items)}},[r("el-table-column",{attrs:{fixed:"left",prop:"id",label:"id",width:"100"}}),r("el-table-column",{attrs:{prop:"img",label:"图片",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return t.row.img?[r("img",{staticClass:"display_img",attrs:{src:t.row.img,alt:t.row.img}})]:void 0}}],null,!0)}),r("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),r("el-table-column",{attrs:{prop:"cartItemPrice",label:"交易价","min-width":"100"}}),r("el-table-column",{attrs:{fixed:"right",prop:"count",label:"数量",width:"100"}})],1):t._e()],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:["更新订单状态"],type:"disabled"},expression:"{ permission: ['更新订单状态'], type: 'disabled' }"}],attrs:{disabled:t.actionDisabled,type:"primary"},on:{click:t.changeOrderStatus}},[t._v(t._s(t.actionName))])],1)],1)],1)],1)],1)])],1)},a=[],s=r("a34a"),i=r.n(s),o=r("f9ff"),c=r("4144");function u(t,e,r,n,a,s,i){try{var o=t[s](i),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function i(t){u(s,n,a,i,o,"next",t)}function o(t){u(s,n,a,i,o,"throw",t)}i(void 0)})}}var p={components:{StickTop:c["default"]},props:{orderId:{type:String,default:null}},data:function(){return{form:{}}},computed:{actionName:function(){if(!this.form.status)return"不可操作";switch(this.form.status){case 2:return"发货";case 3:return"完成";default:return"不可操作"}},actionDisabled:function(){return!this.form.status||2!==this.form.status&&3!==this.form.status}},created:function(){var t=l(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$nextTick(l(i.a.mark(function t(){return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.getOrder();case 1:case"end":return t.stop()}},t)})));case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{changeOrderStatus:function(){var t=l(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["default"].changeOrderStatus(this.orderId,this.form.status+1);case 2:e=t.sent,e.code<window.MAX_SUCCESS_CODE&&this.$message.success("".concat(e.message)),this.getOrder();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getOrder:function(){var t=l(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["default"].getOrder(this.orderId);case 2:e=t.sent,this.form=e;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),submitForm:function(){var t=l(i.a.mark(function t(e){return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),resetForm:function(t){this.$refs[t].resetFields()},back:function(){this.$emit("editClose")},computeTagType:function(t){switch(t){case 0:return"";case 1:return"info";case 2:return"success";case 3:return"success";case 4:return"success";case 5:return"warning";default:return""}},orderStatus:function(t){switch(t){case 0:return"全部";case 1:return"待支付";case 2:return"已支付";case 3:return"已发货";case 4:return"已完成";case 5:return"已取消";default:return"全部"}}},filters:{}},f=p,d=(r("e686"),r("2877")),m=Object(d["a"])(f,n,a,!1,null,"092f52d0",null);e["default"]=m.exports},e686:function(t,e,r){"use strict";var n=r("064f"),a=r.n(n);a.a},f9ff:function(t,e,r){"use strict";r.r(e);var n=r("a34a"),a=r.n(n),s=r("ceda");function i(t,e,r,n,a,s,i){try{var o=t[s](i),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function o(t){i(s,n,a,o,c,"next",t)}function c(t){i(s,n,a,o,c,"throw",t)}o(void 0)})}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),t}var p=function(){function t(){c(this,t)}return l(t,null,[{key:"addOrder",value:function(){var t=o(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["post"])("v1/wx-order",e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getOrder",value:function(){var t=o(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["get"])("v1/wx-order/detail/".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"editOrder",value:function(){var t=o(a.a.mark(function t(e,r){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["put"])("v1/wx-order/".concat(e),r);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"changeOrderStatus",value:function(){var t=o(a.a.mark(function t(e,r){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["put"])("v1/wx-order/status?id=".concat(e,"&status=").concat(r));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"getOrders",value:function(){var t=o(a.a.mark(function t(){var e,r,n,i=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:10,t.next=4,Object(s["get"])("v1/wx-order/page",{page:e,count:r});case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"search",value:function(){var t=o(a.a.mark(function t(e){var r,n,i,o,c,u;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.keyword,n=e.page,i=e.count,o=e.start,c=e.end,t.next=3,Object(s["get"])("v1/wx-order/search",{keyword:r,page:n,count:i,start:o,end:c});case 3:return u=t.sent,t.abrupt("return",u);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"deleteOrder",value:function(){var t=o(a.a.mark(function t(e){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["_delete"])("v1/wx-order/".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["default"]=p}}]);