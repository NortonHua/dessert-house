(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22e189"],{f9ff:function(e,r,t){"use strict";t.r(r);var n=t("a34a"),a=t.n(n),u=t("ceda");function c(e,r,t,n,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void t(s)}o.done?r(i):Promise.resolve(i).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var u=e.apply(r,t);function o(e){c(u,n,a,o,i,"next",e)}function i(e){c(u,n,a,o,i,"throw",e)}o(void 0)})}}function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}var f=function(){function e(){i(this,e)}return p(e,null,[{key:"addOrder",value:function(){var e=o(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/wx-order",r);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getOrder",value:function(){var e=o(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/wx-order/detail/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"editOrder",value:function(){var e=o(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/wx-order/".concat(r),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"changeOrderStatus",value:function(){var e=o(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/wx-order/status?id=".concat(r,"&status=").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"getOrders",value:function(){var e=o(a.a.mark(function e(){var r,t,n,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,t=c.length>1&&void 0!==c[1]?c[1]:10,e.next=4,Object(u["get"])("v1/wx-order/page",{page:r,count:t});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"search",value:function(){var e=o(a.a.mark(function e(r){var t,n,c,o,i,s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.keyword,n=r.page,c=r.count,o=r.start,i=r.end,e.next=3,Object(u["get"])("v1/wx-order/search",{keyword:t,page:n,count:c,start:o,end:i});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteOrder",value:function(){var e=o(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/wx-order/".concat(r));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()}]),e}();r["default"]=f}}]);