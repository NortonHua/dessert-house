(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb13d318","chunk-2f46a176","chunk-0dc79393","chunk-363a65a2","chunk-30a80799","chunk-25061360","chunk-2d0c4bbc","chunk-2d0c9709"],{"3ba8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"line"}})},r=[],i=n("99af"),u={name:"Line",data:function(){return{data:[{month:"1月",value:100,type:"蛋糕"},{month:"2月",value:80,type:"蛋糕"},{month:"3月",value:100,type:"蛋糕"},{month:"4月",value:70,type:"蛋糕"},{month:"5月",value:120,type:"蛋糕"},{month:"6月",value:80,type:"蛋糕"},{month:"7月",value:60,type:"蛋糕"},{month:"1月",value:50,type:"小甜品"},{month:"2月",value:186,type:"小甜品"},{month:"3月",value:180,type:"小甜品"},{month:"4月",value:160,type:"小甜品"},{month:"5月",value:167,type:"小甜品"},{month:"6月",value:90,type:"小甜品"},{month:"7月",value:100,type:"小甜品"},{month:"1月",value:90,type:"团子"},{month:"2月",value:136,type:"团子"},{month:"3月",value:140,type:"团子"},{month:"4月",value:123,type:"团子"},{month:"5月",value:87,type:"团子"},{month:"6月",value:90,type:"团子"},{month:"7月",value:112,type:"团子"}]}},mounted:function(){new i["b"]("line",{title:{visible:!0,text:"各品类趋势分析"},data:this.data,forceFit:!0,seriesField:"type",xField:"month",yField:"value",smooth:!0,color:["#4577FF","#00C292","#FEC108"],legend:{visible:!0,position:"top-right"}}).render()},methods:{}},o=u,l=n("2877"),s=Object(l["a"])(o,a,r,!1,null,"e4d51c8c",null);e["default"]=s.exports},4402:function(t,e,n){"use strict";var a=n("5cab"),r=n.n(a);r.a},"58c3":function(t,e,n){"use strict";n.r(e);var a=n("a34a"),r=n.n(a),i=n("ceda");function u(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function o(t){u(i,a,r,o,l,"next",t)}function l(t){u(i,a,r,o,l,"throw",t)}o(void 0)})}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var v=function(){function t(){l(this,t)}return c(t,null,[{key:"getThisMonthOrderCountInfo",value:function(){var t=o(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/analysis/this-month-orders");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getLastMonthOrderCountInfo",value:function(){var t=o(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/analysis/last-month-orders");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getSalesInfo",value:function(){var t=o(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/analysis/sales-comparision");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getSalesCountInfo",value:function(){var t=o(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/analysis/count-comparision");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getCategoryCountInfo",value:function(){var t=o(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/analysis/category-orders");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}]),t}();e["default"]=v},"59ba":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("div",{staticClass:"l-side"},[n("div",{staticClass:"title"},[t._v(t._s(t.month)+"月订单数量")]),n("div",{staticClass:"num-box"},[n("div",{staticClass:"shape"}),n("div",{staticClass:"num"},[t._v(t._s(t.count))]),n("i",{staticClass:"iconfont icon-jiantou up"}),n("div",{staticClass:"percent"},[t._v("-10%")])])]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"r-side"},[n("canvas",{attrs:{id:"circle1",height:"70px",width:"70px"}})])}],i=n("a34a"),u=n.n(i),o=n("58c3");function l(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){l(i,a,r,u,o,"next",t)}function o(t){l(i,a,r,u,o,"throw",t)}u(void 0)})}}var c={name:"TinyArea",data:function(){return{month:"",count:0}},mounted:function(){var t=s(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getData(),this.circle();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=s(u.a.mark(function t(){var e;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["default"].getLastMonthOrderCountInfo();case 2:e=t.sent,this.month=e.month_string,this.count=e.count_info;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),circle:function(){var t=document.getElementById("circle1"),e=t.getContext("2d");e.fillStyle="#4577FF";var n="31%",a=e.measureText(n);e.fillText(n,(70-a.width)/2,39);var r={ctx:e,x:35,y:35,radius:32,lineWidth:5};r.startAngle=.1*Math.PI,r.endAngle=2*Math.PI,r.color="#e9e9e9",this.drawCircle(r),r.startAngle=1.5*Math.PI,r.endAngle=.1*Math.PI,r.color="#4577FF",this.drawCircle(r)},drawCircle:function(t){var e=t.ctx;e.beginPath(),e.arc(t.x,t.y,t.radius,t.startAngle,t.endAngle,!1),e.lineWidth=t.lineWidth,e.strokeStyle=t.color,e.lineCap="round",e.stroke(),e.closePath()}}},v=c,h=(n("4402"),n("2877")),f=Object(h["a"])(v,a,r,!1,null,"37c5bc84",null);e["default"]=f.exports},"5cab":function(t,e,n){},"6e9f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("div",{staticClass:"l-side"},[n("div",{staticClass:"title"},[t._v(t._s(t.month)+"月订单数量")]),n("div",{staticClass:"num-box"},[n("div",{staticClass:"shape"}),n("div",{staticClass:"num"},[t._v(t._s(t.count))]),n("i",{staticClass:"iconfont icon-jiantou up"}),n("div",{staticClass:"percent"},[t._v("+"+t._s(t.count%80)+"%")])])]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"r-side"},[n("canvas",{attrs:{id:"circle",height:"70px",width:"70px"}})])}],i=n("a34a"),u=n.n(i),o=n("58c3");function l(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){l(i,a,r,u,o,"next",t)}function o(t){l(i,a,r,u,o,"throw",t)}u(void 0)})}}var c={name:"TinyArea",data:function(){return{month:"",count:0}},mounted:function(){var t=s(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getData(),this.circle();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=s(u.a.mark(function t(){var e;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["default"].getThisMonthOrderCountInfo();case 2:e=t.sent,this.month=e.month_string,this.count=e.count_info;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),circle:function(){var t=document.getElementById("circle"),e=t.getContext("2d");e.fillStyle="#4577FF";var n="50%",a=e.measureText(n);e.fillText(n,(70-a.width)/2,39);var r={ctx:e,x:35,y:35,radius:32,lineWidth:5};r.startAngle=10.5*Math.PI,r.endAngle=1.5*Math.PI,r.color="#e9e9e9",this.drawCircle(r),r.startAngle=1.5*Math.PI,r.endAngle=.5*Math.PI,r.color="#4577FF",this.drawCircle(r)},drawCircle:function(t){var e=t.ctx;e.beginPath(),e.arc(t.x,t.y,t.radius,t.startAngle,t.endAngle,!1),e.lineWidth=t.lineWidth,e.strokeStyle=t.color,e.lineCap="round",e.stroke(),e.closePath()}}},v=c,h=(n("8f9d"),n("2877")),f=Object(h["a"])(v,a,r,!1,null,"82df2020",null);e["default"]=f.exports},8310:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"grouped-column"}})},r=[],i=n("a34a"),u=n.n(i),o=n("99af"),l=n("58c3");function s(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){s(i,a,r,u,o,"next",t)}function o(t){s(i,a,r,u,o,"throw",t)}u(void 0)})}}var v={name:"GroupedColumn",data:function(){return{data:[{title:"杨枝甘露胖胖杯",month:"2021-1",value:90},{title:"合情咖啡",month:"2020-12",value:192},{title:"杨枝甘露胖胖杯",month:"2020-12",value:90},{title:"合情咖啡",month:"2021-1",value:64},{title:"奥特曼与怪兽",month:"2020-12",value:450},{title:"淤泥巴斯克",month:"2020-12",value:480},{title:"香蕉可可",month:"2020-12",value:240},{title:"温暖城堡",month:"2020-12",value:960},{title:"烛火",month:"2020-12",value:800},{title:"烛火",month:"2021-1",value:200},{title:"奥特曼与怪兽",month:"2021-1",value:90},{title:"千层蜜柚",month:"2021-1",value:25},{title:"好吃",month:"2021-1",value:56},{title:"桃胶玫瑰",month:"2020-12",value:352}]}},mounted:function(){var t=c(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.paintChart();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{paintChart:function(){var t=c(u.a.mark(function t(){var e;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=o["a"],t.t1={text:"各商品每月销售额对比",visible:!0},t.next=4,l["default"].getSalesInfo();case 4:t.t2=t.sent,t.t3={title:{alias:"甜品名称"},value:{alias:"销售额"}},t.t4=["#4577FF","#00C292","#234DFD"],t.t5={visible:!0,position:"top-right"},t.t6={title:t.t1,data:t.t2,groupField:"month",xField:"title",yField:"value",meta:t.t3,forceFit:!0,color:t.t4,columnSize:12,legend:t.t5},e=new t.t0("grouped-column",t.t6),e.render();case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},h=v,f=n("2877"),d=Object(f["a"])(h,a,r,!1,null,"f3520dfe",null);e["default"]=d.exports},"8f9d":function(t,e,n){"use strict";var a=n("a918"),r=n.n(a);r.a},a7c5:function(t,e,n){},a918:function(t,e,n){},df01:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Radar"}})},r=[],i=n("a34a"),u=n.n(i),o=n("99af"),l=n("58c3");function s(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){s(i,a,r,u,o,"next",t)}function o(t){s(i,a,r,u,o,"throw",t)}u(void 0)})}}var v={name:"Radar",data:function(){return{data:[{title:"杨枝甘露胖胖杯",month:"2021-1",value:3},{title:"合情咖啡",month:"2020-12",value:6},{title:"杨枝甘露胖胖杯",month:"2020-12",value:3},{title:"合情咖啡",month:"2021-1",value:2},{title:"奥特曼与怪兽",month:"2020-12",value:5},{title:"淤泥巴斯克",month:"2020-12",value:16},{title:"香蕉可可",month:"2020-12",value:8},{title:"温暖城堡",month:"2020-12",value:12},{title:"烛火",month:"2020-12",value:8},{title:"烛火",month:"2021-1",value:2},{title:"奥特曼与怪兽",month:"2021-1",value:1},{title:"千层蜜柚",month:"2021-1",value:1},{title:"好吃",month:"2021-1",value:1},{title:"桃胶玫瑰",month:"2020-12",value:11}]}},mounted:function(){this.paintChart()},methods:{paintChart:function(){var t=c(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=o["c"],t.t1={text:"各商品每月销售量对比分析",visible:!0},t.next=4,l["default"].getSalesCountInfo();case 4:t.t2=t.sent,t.t3=["#4577FF","#FEC108","#FF5733"],t.t4={visible:!0,position:"top-right"},t.t5={title:t.t1,data:t.t2,radiusField:"value",angleField:"type",seriesField:"mark",color:t.t3,legend:t.t4},new t.t0("Radar",t.t5).render();case 9:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},h=v,f=n("2877"),d=Object(f["a"])(h,a,r,!1,null,"196a0136",null);e["default"]=d.exports},e1ad:function(t,e,n){"use strict";var a=n("a7c5"),r=n.n(a);r.a},eff1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rose"}})},r=[],i=n("a34a"),u=n.n(i),o=n("99af"),l=n("58c3");function s(t,e,n,a,r,i,u){try{var o=t[i](u),l=o.value}catch(s){return void n(s)}o.done?e(l):Promise.resolve(l).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){s(i,a,r,u,o,"next",t)}function o(t){s(i,a,r,u,o,"throw",t)}u(void 0)})}}var v={name:"Rose",data:function(){return{data:[{type:"蛋糕",value:2700},{type:"小甜品",value:2500},{type:"千层",value:1898},{type:"三明治",value:2376},{type:"团子",value:1760},{type:"吐司",value:1500}]}},mounted:function(){var t=c(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.paintChart();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{paintChart:function(){var t=c(u.a.mark(function t(){return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,l["default"].getCategoryCountInfo();case 3:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.t2=o["d"],t.t3={text:"品类订单数分析",visible:!0},t.next=9,l["default"].getCategoryCountInfo();case 9:t.t4=t.sent,t.t5={title:t.t3,data:t.t4,radiusField:"value",categoryField:"category",colorField:"category"},new t.t2("rose",t.t5).render();case 12:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}},h=v,f=n("2877"),d=Object(f["a"])(h,a,r,!1,null,"ff00bc2a",null);e["default"]=d.exports},f588:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content bg-purple"},[n("group-column")],1)]),n("el-col",{staticClass:"none",attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("radar")],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:16}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple"},[n("tiny-area-july")],1)]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple"},[n("tiny-area-june")],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple"},[n("line-charts")],1)])],1)],1),n("el-col",{staticClass:"none",attrs:{span:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("rose")],1)])],1)],1)},r=[],i=n("8310"),u=n("df01"),o=n("6e9f"),l=n("59ba"),s=n("3ba8"),c=n("eff1"),v={components:{Rose:c["default"],GroupColumn:i["default"],Radar:u["default"],TinyAreaJuly:o["default"],TinyAreaJune:l["default"],LineCharts:s["default"]},data:function(){return{list1:[{type:1,value:100},{type:2,value:120},{type:3,value:230},{type:4,value:150},{type:5,value:280},{type:6,value:190},{type:7,value:130},{type:8,value:150},{type:9,value:160},{type:10,value:140},{type:11,value:190}],list2:[{type:1,value:80},{type:2,value:120},{type:3,value:210},{type:4,value:120},{type:5,value:130},{type:6,value:190},{type:7,value:130},{type:8,value:150},{type:9,value:160},{type:10,value:140},{type:11,value:190}]}}},h=v,f=(n("e1ad"),n("2877")),d=Object(f["a"])(h,a,r,!1,null,"e745fbfa",null);e["default"]=d.exports}}]);