(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(n,e,t){"use strict";t.r(e);var r=t(12),o=(t(64),{name:"IndexPage",mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.init();case 1:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var n=this;Notification.requestPermission().then((function(e){"granted"===e&&n.$push.create("Hello, World!")}))},en:function(){Notification.requestPermission().then((function(n){console.log("permiss",n)}))}}}),c=t(61),component=Object(c.a)(o,(function(){var n=this,e=n._self._c;return e("div",[e("button",{on:{click:function(e){return n.en()}}},[n._v("VIBRA")])])}),[],!1,null,null,null);e.default=component.exports}}]);