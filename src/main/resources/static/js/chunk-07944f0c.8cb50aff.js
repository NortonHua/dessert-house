(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07944f0c","chunk-4184cbcf","chunk-324ad02e","chunk-2d0baed6","chunk-2d22e189"],{"064f":function(e,t,r){},"38fa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right",size:"medium","popper-class":"date-box","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"picker-options":e.pickerOptions},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},n=[],s={data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]}}},watch:{value:function(e){this.$emit("dateChange",e)}},methods:{clear:function(){this.value=""}}},i=s,c=r("2877"),o=Object(c["a"])(i,a,n,!1,null,null,null);t["default"]=o.exports},"3f5e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("stick-top",[r("div",{staticClass:"title"},[r("span",[e._v("订单详情")]),r("span",{staticClass:"back",on:{click:e.back}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")]),r("el-divider")],1)]),r("div",{staticClass:"container"},[r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"订单号",prop:"order_no"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:e.form.order_no,callback:function(t){e.$set(e.form,"order_no",t)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"图片",prop:"snap_img"}},[r("el-image",{staticStyle:{height:"100px",width:"100px"},attrs:{src:e.form.snap_img}})],1),r("el-form-item",{attrs:{label:"标题",prop:"snap_title"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:e.form.snap_title,callback:function(t){e.$set(e.form,"snap_title",t)},expression:"form.snap_title"}})],1),r("el-form-item",{attrs:{label:"预付编号",prop:"prepay_id"}},[r("el-input",{attrs:{disabled:"",size:"medium"},model:{value:e.form.prepay_id,callback:function(t){e.$set(e.form,"prepay_id",t)},expression:"form.prepay_id"}})],1),r("el-form-item",{attrs:{label:"总价格",prop:"total_price"}},[r("el-input-number",{attrs:{disabled:"",precision:2,step:.1},model:{value:e.form.total_price,callback:function(t){e.$set(e.form,"total_price",t)},expression:"form.total_price"}})],1),r("el-form-item",{attrs:{label:"交易价格",prop:"final_total_price"}},[r("el-input-number",{attrs:{disabled:"",precision:2,step:.1},model:{value:e.form.total_price,callback:function(t){e.$set(e.form,"total_price",t)},expression:"form.total_price"}})],1),r("el-form-item",{attrs:{label:"总数量",prop:"total_count"}},[r("el-input-number",{attrs:{disabled:"",step:1,"step-strictly":""},model:{value:e.form.total_count,callback:function(t){e.$set(e.form,"total_count",t)},expression:"form.total_count"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("div",{staticClass:"tags"},[r("el-tag",{attrs:{type:e.computeTagType(e.form.status)}},[e._v(e._s(e.orderStatus(e.form.status)))])],1)]),r("el-form-item",{attrs:{label:"地址",prop:"snap_address"}},[e.form.snap_address?r("div",{staticClass:"address"},[r("div",{staticClass:"header"},[r("span",{staticClass:"name"},[e._v(e._s(JSON.parse(e.form.snap_address).userName))]),r("span",{staticClass:"mobile"},[e._v(e._s(JSON.parse(e.form.snap_address).mobile))])]),r("div",{staticClass:"detail"},[e._v("\n                  "+e._s(JSON.parse(e.form.snap_address).province)+" "+e._s(JSON.parse(e.form.snap_address).city)+e._s(JSON.parse(e.form.snap_address).county)+"\n                  **************\n                  "+e._s(JSON.parse(e.form.snap_address).detail)+"\n                ")])]):e._e()]),r("el-form-item",{attrs:{label:"详情",prop:"snap_items"}},[e.form.snap_items?r("el-table",{attrs:{stripe:"",data:JSON.parse(e.form.snap_items)}},[r("el-table-column",{attrs:{fixed:"left",prop:"id",label:"id",width:"100"}}),r("el-table-column",{attrs:{prop:"img",label:"图片",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return e.row.img?[r("img",{staticClass:"display_img",attrs:{src:e.row.img,alt:e.row.img}})]:void 0}}],null,!0)}),r("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),r("el-table-column",{attrs:{prop:"cartItemPrice",label:"交易价","min-width":"100"}}),r("el-table-column",{attrs:{fixed:"right",prop:"count",label:"数量",width:"100"}})],1):e._e()],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:["更新订单状态"],type:"disabled"},expression:"{ permission: ['更新订单状态'], type: 'disabled' }"}],attrs:{disabled:e.actionDisabled,type:"primary"},on:{click:e.changeOrderStatus}},[e._v(e._s(e.actionName))])],1)],1)],1)],1)],1)])],1)},n=[],s=r("a34a"),i=r.n(s),c=r("f9ff"),o=r("4144");function u(e,t,r,a,n,s,i){try{var c=e[s](i),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){u(s,a,n,i,c,"next",e)}function c(e){u(s,a,n,i,c,"throw",e)}i(void 0)})}}var d={components:{StickTop:o["default"]},props:{orderId:{type:String,default:null}},data:function(){return{form:{}}},computed:{actionName:function(){if(!this.form.status)return"不可操作";switch(this.form.status){case 2:return"发货";case 3:return"完成";default:return"不可操作"}},actionDisabled:function(){return!this.form.status||2!==this.form.status&&3!==this.form.status}},created:function(){var e=l(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$nextTick(l(i.a.mark(function e(){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.getOrder();case 1:case"end":return e.stop()}},e)})));case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{changeOrderStatus:function(){var e=l(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["default"].changeOrderStatus(this.orderId,this.form.status+1);case 2:t=e.sent,t.code<window.MAX_SUCCESS_CODE&&this.$message.success("".concat(t.message)),this.getOrder();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getOrder:function(){var e=l(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["default"].getOrder(this.orderId);case 2:t=e.sent,this.form=t;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(){var e=l(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){this.$emit("editClose")},computeTagType:function(e){switch(e){case 0:return"";case 1:return"info";case 2:return"success";case 3:return"success";case 4:return"success";case 5:return"warning";default:return""}},orderStatus:function(e){switch(e){case 0:return"全部";case 1:return"待支付";case 2:return"已支付";case 3:return"已发货";case 4:return"已完成";case 5:return"已取消";default:return"全部"}}},filters:{}},p=d,f=(r("e686"),r("2877")),h=Object(f["a"])(p,a,n,!1,null,"092f52d0",null);t["default"]=h.exports},5720:function(e,t,r){},"634c":function(e,t,r){},"63b8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lin-search"},[r("el-input",{staticClass:"input-with-select",attrs:{size:"medium",placeholder:e.placeholder,clearable:""},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)},n=[],s=r("0a2a"),i={props:{placeholder:{type:String,default:"请输入内容"}},data:function(){return{keyword:""}},created:function(){var e=this;this.$watch("keyword",s["default"].debounce(function(t){e.$emit("query",t)},1e3))},methods:{clear:function(){this.keyword=""}}},c=i,o=(r("deb5"),r("2877")),u=Object(o["a"])(c,a,n,!1,null,"4e9f5571",null);t["default"]=u.exports},a549:function(e,t,r){"use strict";var a=r("5720"),n=r.n(a);n.a},a951:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showEdit?r("order-detail",{attrs:{orderId:e.orderId},on:{editClose:e.editClose}}):r("div",{staticClass:"container"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("订单列表")]),r("div",{directives:[{name:"permission",rawName:"v-permission",value:"搜索订单",expression:"'搜索订单'"}],staticClass:"header-left"},[r("lin-search",{ref:"searchKeyword",on:{query:e.onQueryChange}}),r("lin-date-picker",{ref:"searchDate",staticClass:"date",on:{dateChange:e.handleDateChange}})],1)]),r("transition",{attrs:{name:"fade"}},[e.keyword?r("div",{staticClass:"search"},[r("p",{staticClass:"search-tip"},[e._v("\n          搜索“"),r("span",{staticClass:"search-keyword"},[e._v(e._s(e.keyword))]),e._v("”， 找到 "),r("span",{staticClass:"search-num"},[e._v(e._s(e.totalNums))]),e._v(" 条订单信息\n        ")]),r("button",{staticClass:"search-back",on:{click:e.backInit}},[e._v("返回全部订单")])]):e._e()]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.tableData}},[r("el-table-column",{attrs:{prop:"id",label:"id",width:"100"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"order_no",label:"订单号",width:"150"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"user_id",label:"用户id",width:"100"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"order_type",label:"订单类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order_type?"外卖":"堂食"))]}}],null,!1,1526700908)}),r("el-table-column",{attrs:{prop:"total_count",label:"单品数量",width:"100"}}),r("el-table-column",{attrs:{prop:"total_price",width:"200",label:"总价格"}}),r("el-table-column",{attrs:{prop:"placed_time",formatter:e.formatDate,"min-width":"200",label:"下单时间"}}),r("el-table-column",{attrs:{prop:"status","min-width":"100",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.status?[r("div",{staticClass:"tags"},[r("el-tag",{attrs:{type:e.computeTagType(t.row.status)}},[e._v(e._s(e.orderStatus(t.row.status)))])],1)]:void 0}}],null,!0)}),r("el-table-column",{attrs:{fixed:"right",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(r){return r.preventDefault(),e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:"删除订单",type:"disabled"},expression:"{ permission: '删除订单', type: 'disabled' }"}],attrs:{type:"danger",size:"mini",plain:""},on:{click:function(r){return r.preventDefault(),e.handleDelete(t.row)}}},[e._v("删除\n          ")])]}}],null,!1,3084773710)})],1),r("div",{staticClass:"pagination"},[e.refreshPagination?r("el-pagination",{attrs:{background:!0,"page-size":e.pageCount,"current-page":e.currentPage,layout:"prev, pager, next, jumper",total:e.totalNums},on:{"current-change":e.handleCurrentChange}}):e._e()],1)],1)],1)},s=[],i=r("a34a"),c=r.n(i),o=r("f9ff"),u=r("3f5e"),l=r("63b8"),d=r("38fa");function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t,r,a,n,s,i){try{var c=e[s](i),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(a,n)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){f(s,a,n,i,c,"next",e)}function c(e){f(s,a,n,i,c,"throw",e)}i(void 0)})}}var m=(a={name:"order",components:{LinSearch:l["default"],OrderDetail:u["default"],LinDatePicker:d["default"]},methods:{},data:function(){return{tableData:[],orderId:null,showEdit:!1,loading:!1,keyword:null,searchDate:[],searchKeyword:"",totalNums:0,currentPage:1,pageCount:10,refreshPagination:!0}},created:function(){var e=h(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0,this.getOrders(),this.loading=!1;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),watch:{searchKeyword:function(e){e?(this.keyword=e,this.searchUser&&(this.keyword="".concat(e)),this.searchDate.length&&(this.keyword="".concat(e," ").concat(this.searchDate))):(this.keyword="",this.searchDate.length&&(this.keyword="".concat(this.searchDate)),this.$refs.searchKeyword.clear()),this.currentPage=1,this.searchPage()},searchDate:function(e){e&&e.length?(this.keyword="".concat(e[0],"至").concat(e[1]),this.searchKeyword&&(this.keyword="".concat(this.searchKeyword," ").concat(e[0],"至").concat(e[1]))):(this.keyword="",this.searchUser&&(this.keyword="".concat(this.searchUser)),this.searchKeyword&&(this.keyword="".concat(this.searchUser," ").concat(this.searchKeyword)),this.$refs.searchDate.clear()),this.currentPage=1,this.searchPage()}}},p(a,"methods",{formatDate:function(e,t){var r=e[t.property];if(null==r)return null;var a=new Date(r);return"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate()," ").concat(a.getHours(),":").concat(a.getMinutes(),":").concat(a.getSeconds())},getOrders:function(){var e=h(c.a.mark(function e(){var t,r,a;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentPage-1,r=this.pageCount,e.next=4,o["default"].getOrders(t,r);case 4:a=e.sent,this.tableData=a.items,this.totalNums=a.total;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),searchPage:function(){var e=h(c.a.mark(function e(){var t,r,a;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentPage-1,r=this.pageCount,e.next=4,o["default"].search({keyword:this.searchKeyword,page:t,count:r,start:this.searchDate[0],end:this.searchDate[1]});case 4:a=e.sent,this.tableData=a.items,this.totalNums=a.total;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCurrentChange:function(){var e=h(c.a.mark(function e(t){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.currentPage=t,this.loading=!0,this.searchKeyword.length||this.searchDate.length?this.searchPage():this.getOrders(),this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleEdit:function(e){this.orderId="".concat(e.id),this.showEdit=!0},handleDateChange:function(e){this.searchDate=e},editClose:function(){this.showEdit=!1,this.getOrders()},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该项, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(h(c.a.mark(function r(){var a;return c.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o["default"].deleteOrder(e.id);case 2:a=r.sent,a.code<window.MAX_SUCCESS_CODE&&(t.getOrders(),t.$message({type:"success",message:"".concat(a.message)}));case 4:case"end":return r.stop()}},r)})))},backInit:function(){var e=h(c.a.mark(function e(){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.searchKeyword="",this.keyword="",this.searchDate=[],this.tableData=[],this.loading=!0,e.next=7,this.getOrders();case 7:this.loading=!1;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computeTagType:function(e){switch(e){case 0:return"";case 1:return"info";case 2:return"success";case 3:return"success";case 4:return"success";case 5:return"warning";default:return""}},onQueryChange:function(){var e=h(c.a.mark(function e(t){return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.searchKeyword=t.trim();case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),orderStatus:function(e){switch(e){case 0:return"全部";case 1:return"待支付";case 2:return"已支付";case 3:return"已发货";case 4:return"已完成";case 5:return"已取消";default:return"全部"}}}),p(a,"filter",{}),a),v=m,w=(r("a549"),r("2877")),b=Object(w["a"])(v,n,s,!1,null,"08c709ff",null);t["default"]=b.exports},deb5:function(e,t,r){"use strict";var a=r("634c"),n=r.n(a);n.a},e686:function(e,t,r){"use strict";var a=r("064f"),n=r.n(a);n.a},f9ff:function(e,t,r){"use strict";r.r(t);var a=r("a34a"),n=r.n(a),s=r("ceda");function i(e,t,r,a,n,s,i){try{var c=e[s](i),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function c(e){i(s,a,n,c,o,"next",e)}function o(e){i(s,a,n,c,o,"throw",e)}c(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}var d=function(){function e(){o(this,e)}return l(e,null,[{key:"addOrder",value:function(){var e=c(n.a.mark(function e(t){var r;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["post"])("v1/wx-order",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getOrder",value:function(){var e=c(n.a.mark(function e(t){var r;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["get"])("v1/wx-order/detail/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editOrder",value:function(){var e=c(n.a.mark(function e(t,r){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["put"])("v1/wx-order/".concat(t),r);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"changeOrderStatus",value:function(){var e=c(n.a.mark(function e(t,r){var a;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["put"])("v1/wx-order/status?id=".concat(t,"&status=").concat(r));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getOrders",value:function(){var e=c(n.a.mark(function e(){var t,r,a,i=arguments;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:10,e.next=4,Object(s["get"])("v1/wx-order/page",{page:t,count:r});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"search",value:function(){var e=c(n.a.mark(function e(t){var r,a,i,c,o,u;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.keyword,a=t.page,i=t.count,c=t.start,o=t.end,e.next=3,Object(s["get"])("v1/wx-order/search",{keyword:r,page:a,count:i,start:c,end:o});case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteOrder",value:function(){var e=c(n.a.mark(function e(t){var r;return n.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["_delete"])("v1/wx-order/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=d}}]);