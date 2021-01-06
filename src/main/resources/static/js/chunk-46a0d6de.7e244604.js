(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a0d6de"],{6973:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showEdit?n("spu-edit",{attrs:{spuId:t.spuId,isCreate:t.isCreate},on:{editClose:t.editClose}}):n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[t._v("商品列表")]),n("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",plain:"",size:"medium"},on:{click:function(e){return e.preventDefault(),t.addSpu(e)}}},[t._v("添加商品\n      ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.tableData}},[n("el-table-column",{attrs:{fixed:"left",prop:"id",label:"id",width:"100"}}),n("el-table-column",{attrs:{prop:"img",width:"100",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.img?[n("el-image",{staticStyle:{"max-width":"200px"},attrs:{src:e.row.img,"preview-src-list":t.imgSrcList}})]:void 0}}],null,!0)}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"title",label:"标题",width:"200"}}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"subtitle",label:"副标题",width:"250"}}),n("el-table-column",{attrs:{prop:"category_id",label:"分类id",width:"100"}}),n("el-table-column",{attrs:{prop:"price",label:"价格(元)",width:"150"}}),n("el-table-column",{attrs:{prop:"online",label:"是否上架",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.onLine(e.row.online)))]}}],null,!1,2742382492)}),n("el-table-column",{attrs:{width:"150",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(n){return n.preventDefault(),t.handleEdit(e.row)}}},[t._v("编辑")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{permission:["删除商品"],type:"disabled"},expression:"{ permission: ['删除商品'], type: 'disabled' }"}],attrs:{type:"danger",size:"mini",plain:""},on:{click:function(n){return n.preventDefault(),t.handleDelete(e.row)}}},[t._v("删除\n          ")])]}}],null,!1,1405266190)})],1),n("div",{staticClass:"pagination"},[t.refreshPagination?n("el-pagination",{attrs:{background:!0,"page-size":t.pageCount,"current-page":t.currentPage,layout:"prev, pager, next, jumper",total:t.totalNums},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)],1)},a=[],r=n("a34a"),s=n.n(r),o=n("82f1"),l=n("6926");function u(t,e,n,i,a,r,s){try{var o=t[r](s),l=o.value}catch(u){return void n(u)}o.done?e(l):Promise.resolve(l).then(i,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function s(t){u(r,i,a,s,o,"next",t)}function o(t){u(r,i,a,s,o,"throw",t)}s(void 0)})}}var d={components:{SpuEdit:l["default"]},data:function(){return{spuId:null,isCreate:!1,imgSrcList:[],tableData:[],showEdit:!1,totalNums:0,currentPage:1,pageCount:10,refreshPagination:!0}},created:function(){var t=c(s.a.mark(function t(){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,this.getSpus(),this.loading=!1;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getSpus:function(){var t=c(s.a.mark(function t(){var e,n,i;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.currentPage-1,n=this.pageCount,t.next=4,o["default"].getSpus(e,n);case 4:i=t.sent,this.tableData=i.items,this.totalNums=i.total,this.initImgSrcList();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initImgSrcList:function(){var t=this;this.tableData.forEach(function(e){e.img&&t.imgSrcList.push(e.img)})},handleCurrentChange:function(){var t=c(s.a.mark(function t(e){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.imgSrcList=[],this.currentPage=e,this.loading=!0,this.getSpus(),this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),handleEdit:function(t){this.isCreate=!1,this.spuId="".concat(t.id),this.showEdit=!0},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该项, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c(s.a.mark(function n(){var i;return s.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o["default"].deleteSpu(t.id);case 2:i=n.sent,i.code<window.MAX_SUCCESS_CODE&&(e.getSpus(),e.$message({type:"success",message:"".concat(i.message)}));case 4:case"end":return n.stop()}},n)})))},addSpu:function(){this.isCreate=!0,this.spuId=null,this.showEdit=!0},editClose:function(){this.showEdit=!1,this.getSpus()},cellStyleCb:function(t){t.row,t.column,t.rowIndex,t.columnIndex;return"long-text-hidden"},onLine:function(t){return t?"是":"否"}},filters:{}},p=d,h=(n("dc0f"),n("2877")),f=Object(h["a"])(p,i,a,!1,null,"56b01cc6",null);e["default"]=f.exports},7663:function(t,e,n){},dc0f:function(t,e,n){"use strict";var i=n("7663"),a=n.n(i);a.a}}]);