(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),o=t.n(l),c=(t(23),t(11)),i=(t(24),function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Tu Mejor Ruta"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement("a",{className:"navbar-brand",href:"/grupos"},"Grupos"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement("a",{className:"navbar-brand",href:"/login"},"Login"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"})))}),u=t(15),s=t(5),m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Se esta mostrando Home"))},v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Se esta mostrando Login"))},g=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Se esta mostrando Grupos"))};function d(){return r.a.createElement("div",null,r.a.createElement(g,null))}function p(){return r.a.createElement("div",null,r.a.createElement(v,null))}function b(){return r.a.createElement("div",null,r.a.createElement(m,null))}var E=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),m=Object(c.a)(o,2),v=m[0],g=m[1];return Object(n.useEffect)((function(){var e=window.location.origin.replace(/^http/,"ws"),a=new WebSocket(e);a.onopen=function(){console.log("Connected to ws"),a.onmessage=function(e){l(JSON.parse(e.data)),console.log("Got ws data",e)}},fetch("data").then((function(e){return e.json()})).then((function(e){e.err?g(JSON.stringify(e.msg)):l(e)}))}),[]),r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(s.a,{path:"/",component:b}),r.a.createElement(s.a,{path:"/grupos",component:d}),r.a.createElement(s.a,{path:"/login",component:p}),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Reacctive"),r.a.createElement("div",null,v),t.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ")}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5826588b.chunk.js.map