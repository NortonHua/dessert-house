(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231031"],{ef71:function(t,e,n){"use strict";n.r(e);var r=n("a34a"),a=n.n(r),u=n("ceda");function c(t,e,n,r,a,u,c){try{var i=t[u](c),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=t.apply(e,n);function i(t){c(u,r,a,i,o,"next",t)}function o(t){c(u,r,a,i,o,"throw",t)}i(void 0)})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var p=function(){function t(){o(this,t)}return v(t,null,[{key:"addActivity",value:function(){var t=i(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["post"])("v1/activity",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getActivity",value:function(){var t=i(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/activity/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"editActivity",value:function(){var t=i(a.a.mark(function t(e,n){var r;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["put"])("v1/activity/".concat(e),n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"deleteActivity",value:function(){var t=i(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["_delete"])("v1/activity/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getActivities",value:function(){var t=i(a.a.mark(function t(){var e,n,r,c=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:0,n=c.length>1&&void 0!==c[1]?c[1]:10,t.next=4,Object(u["get"])("v1/activity/page",{page:e,count:n});case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}]),t}();e["default"]=p}}]);