(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{25:function(e,a,t){e.exports=t(43)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),o=(t(30),t(18)),i=(t(31),t(6)),s=(t(32),function(){return l.a.createElement("div",{className:"NavBar"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(i.b,{to:"/"},"Tu Mejor Ruta")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(i.b,{to:"/grupos"},"Grupos")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(i.b,{to:"/crear"},"Nuevo Grupo")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(i.b,{to:"/login"},"Login")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"})))}),u=t(5),m=(t(38),t(17)),d=t.n(m),p=t(24),E=t(9),v=t(10),b=t(12),f=t(11),g=t(13),h=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(b.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(l)))).state={loading:!0,calidadActual:null},t}return Object(g.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.waqi.info/feed/bogota/?token=dff319f47044fe2a774b924e794aead02b2d5e12",e.next=3,fetch("https://api.waqi.info/feed/bogota/?token=dff319f47044fe2a774b924e794aead02b2d5e12");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,console.log(t.data.aqi),this.setState({calidadActual:t.data}),this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,this.state.loading?l.a.createElement("div",null,"Se esta cargando la informacion de la calidad del aire"):l.a.createElement("div",null,this.state.calidadActual.aqi))}}]),a}(n.Component),N=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron"}),l.a.createElement("h1",null,"Bienvenidos a EnBici"),l.a.createElement(h,null))},w=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Se esta mostrando Login"))},j=(t(40),function(e){return l.a.createElement("div",{className:"container",id:"TablaPaseo"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null," ",e.nombre," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",null," Ruta: ",e.ruta," ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null," Participantes: ",e.numInscritas," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null," Punto de Encuentro: ",e.puntoEncuentro," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",null," Fecha: ",e.fecha," ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{id:"BotonInscribirse"}," Inscribirse "))))}),k=(t(41),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"titulo"},l.a.createElement("h1",null,"Rutas Actuales"),l.a.createElement("br",null)),l.a.createElement("ul",{class:"ListaPaseos"},e.paseos.map((function(e){return l.a.createElement("div",null,l.a.createElement(j,{key:e.nombre,nombre:e.nombre,ruta:e.ruta,fecha:e.fecha,puntoEncuentro:e.puntoEncuentro,numInscritas:e.numInscritas}),l.a.createElement("br",null))}))))}),O=(t(42),function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(v.a)(a,[{key:"formatDate",value:function(){var e=new Date,a=""+(e.getMonth()+1),t=""+e.getDate(),n=e.getFullYear();return a.length<2&&(a="0"+a),t.length<2&&(t="0"+t),[n,a,t].join("-")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," Ingrese la informaci\xf3n de su nuevo paseo "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ingrese una peque\xf1a descripci\xf3n:"),l.a.createElement("input",{className:"form-control",placeholder:" Ingrese descripci\xf3n"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ingrese un punto de encuentro:"),l.a.createElement("input",{className:"form-control",placeholder:" Ingrese punto de encuentro"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ingrese la descripci\xf3n de la ruta:"),l.a.createElement("input",{className:"form-control",placeholder:" Ingrese descripci\xf3n de ruta"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Seleccione la cantidad m\xe1xima de personas:"),l.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"productName"},"Seleccione la fecha de inicio: "),l.a.createElement("input",{className:"form-control",type:"date",min:this.formatDate(),ref:"finishDate",required:!0}))))}}]),a}(n.Component)),y=function(){return l.a.createElement("div",null,l.a.createElement(O,null))};var A=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),d=(m[0],m[1]);return Object(n.useEffect)((function(){var e=window.location.origin.replace(/^http/,"ws"),a=new WebSocket(e);a.onopen=function(){console.log("Connected to ws"),a.onmessage=function(e){r(JSON.parse(e.data)),console.log("Got ws data",e)}},fetch("paseos").then((function(e){return e.json()})).then((function(e){e.err?d(JSON.stringify(e.msg)):r(e)}))}),[]),l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(s,null)),l.a.createElement(u.a,{path:"/",component:N,exact:!0}),l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{path:"/grupos",render:function(e){return l.a.createElement(k,Object.assign({},e,{paseos:t}))}}),l.a.createElement(u.a,{path:"/login",component:w}),l.a.createElement(u.a,{path:"/crear",component:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5918ecec.chunk.js.map