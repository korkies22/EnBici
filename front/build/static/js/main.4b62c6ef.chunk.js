(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(3),r=t.n(c),i=(t(9),t(1));t(10);var s=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1];return Object(o.useEffect)((function(){var e=window.location.origin.replace(/^http/,"ws"),n=new WebSocket(e);n.onopen=function(){console.log("Connected to ws"),n.onmessage=function(e){c(JSON.parse(e.data)),console.log("Got ws data",e)}},fetch("data").then((function(e){return e.json()})).then((function(e){e.err?u(JSON.stringify(e.msg)):c(e)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Reacctive"),a.a.createElement("div",null,l),t.map((function(e){return a.a.createElement("div",{key:e.name},e.name," ")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4b62c6ef.chunk.js.map