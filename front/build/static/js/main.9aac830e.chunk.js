(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{26:function(e,a,t){e.exports=t(47)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),o=t.n(r),s=(t(31),t(17)),c=(t(32),t(13)),i=(t(33),function(e){return l.a.createElement("div",{className:"NavBar"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(c.b,{to:"/"},"Tu Mejor Ruta")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(c.b,{to:"/grupos"},"Grupos")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(c.b,{to:"/crear"},"Nuevo Grupo")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),"No hay usuario"!==e.usuario?l.a.createElement("div",null,l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(c.b,{onClick:function(){fetch("/logout").then(console.log("Ya hizo logout"))}},"LogOut")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"})):l.a.createElement("div",null,l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(c.b,{to:"/login"},"LogIn")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}))))}),u=t(12),m=(t(39),t(9)),d=t.n(m),p=t(14),E=t(3),f=t(4),b=t(6),g=t(5),v=t(7),h=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(b.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(l)))).state={loading:!0,calidadActual:null},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.waqi.info/feed/bogota/?token=dff319f47044fe2a774b924e794aead02b2d5e12",e.next=3,fetch("https://api.waqi.info/feed/bogota/?token=dff319f47044fe2a774b924e794aead02b2d5e12");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,console.log(t.data.aqi),this.setState({calidadActual:t.data}),this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,this.state.loading?l.a.createElement("div",null,"Se esta cargando la informacion de la calidad del aire"):l.a.createElement("div",null,"Actualmente la calidad del aire en bogota es: ",this.state.calidadActual.aqi))}}]),a}(n.Component),N=t(10),k=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).state={loading:!0,calidadActual:null,latitud:null,longitud:null},t.showPosition=t.showPosition.bind(Object(N.a)(t)),t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):console.log("Geolocation is not supported by this browser.");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"showPosition",value:function(){var e=Object(p.a)(d.a.mark((function e(a){var t,n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Latitude: "+a.coords.latitude+" Longitude: "+a.coords.longitude),this.setState({latitud:a.coords.latitude}),this.setState({longitud:a.coords.longitude}),t="https://api.waqi.info/feed/geo:"+this.state.latitud+";"+this.state.longitud+"/?token=dff319f47044fe2a774b924e794aead02b2d5e12",console.log("url"+t),e.next=7,fetch(t);case 7:return n=e.sent,e.next=10,n.json();case 10:l=e.sent,console.log(l.data.aqi),this.setState({calidadActual:l.data}),this.setState({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,this.state.loading?l.a.createElement("div",null,"Se esta cargando la informacion de la calidad del aire"):l.a.createElement("div",null,"Actualmente la calidad en su lugar actual es: ",this.state.calidadActual.aqi))}}]),a}(n.Component),y=(t(41),n.Component,t(42),function(){return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ICA"),l.a.createElement("th",{scope:"col"},"Calidad del Aire"),l.a.createElement("th",{scope:"col"},"Proteja su salud"))),l.a.createElement("tbody",null,l.a.createElement("tr",{className:"uno"},l.a.createElement("td",null,"0-50"),l.a.createElement("td",null,"Buena"),l.a.createElement("td",null,"No se anticipan impactos a la salud cuando la calidad del aire se encuentra en este intervalo.")),l.a.createElement("tr",{className:"dos"},l.a.createElement("td",null,"51-100"),l.a.createElement("td",null,"Moderada"),l.a.createElement("td",null,"Las personas extraordinariamente sensitivas deben considerar limitaci\xf3n de los esfuerzos f\xedsicos excesivos y prolongados al aire libre.")),l.a.createElement("tr",{className:"tres"},l.a.createElement("td",null,"101-150"),l.a.createElement("td",null,"Da\xf1ina a la Salud de los Grupos Sensitivos"),l.a.createElement("td",null,"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos f\xedsicos excesivos y prolongados al aire libre.")),l.a.createElement("tr",{className:"cuatro"},l.a.createElement("td",null,"151-200"),l.a.createElement("td",null,"Da\xf1ina a la Salud"),l.a.createElement("td",null,"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos excesivos prolongados al aire libre; las dem\xe1s personas, especialmente los ni\xf1os, deben limitar los esfuerzos f\xedsicos excesivos y prolongados al aire libre.")),l.a.createElement("tr",{className:"cinco"},l.a.createElement("td",null,"201-300"),l.a.createElement("td",null,"Muy Da\xf1ina a la Salud"),l.a.createElement("td",null,"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar todos los esfuerzos excesivos al aire libre; las dem\xe1s personas, especialmente los ni\xf1os, deben limitar los esfuerzos f\xedsicos excesivos al aire libre.")),l.a.createElement("tr",{className:"seis"},l.a.createElement("td",null,"300+"),l.a.createElement("td",null,"Arriesgado"),l.a.createElement("td",null)))))}),w=function(e){return l.a.createElement("div",{class:"text-center"},l.a.createElement("h1",null,"Bienvenidos"),l.a.createElement("p",null,"Nos interesa su seguridad y su salud. Por esto hemos desarrollado la aplicaci\xf3n donde podr\xe1 consultar r\xe1pidamente el estado actual de la calidad del aire de Bogot\xe1 (inicialmente se desarrolla la app para esta ciudad) adem\xe1s de la medici\xf3n de la calidad de aire mas cercana a usted. "),l.a.createElement("p",null,"A todos ustedes que montan bicicleta les recomendamos siempre mirar el estado actual de donde est\xe9n. As\xed pueden tomar las medidas que consideren necesarias. Si van de paseo o si van al trabajo, siempre es mejor ir acompa\xf1ado y consciente de las condiciones externas. "),l.a.createElement("p",null,"Para utilizar nuestra aplicaci\xf3n simplemente ve a la pesta\xf1a de Login y reg\xedstrate. Luego ingresa y a continuaci\xf3n pon grupos para buscar un grupo de ciclistas que compartan tu misma ruta o pon crear grupo para crear tu propia ruta. Selecciona todos los campos necesarios en caso de crear un nuevo grupo y perm\xedtenos ayudarte a encontrar compa\xf1eros de ruta. "),l.a.createElement("p",null,"Recuerda siempre verificar las condiciones de tu entorno antes de salir (las generales y las m\xe1s cercanas a ti). Recuerda siempre llevar casco y viaja con precauci\xf3n."),l.a.createElement("h1",null,"Feliz d\xeda EnBici"))},I=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron"}),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"tituloHome"},"Bienvenidos a EnBici"),l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement(y,null),l.a.createElement(w,null)))},j=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).state={Login:!1},t.onClick=t.onClick.bind(Object(N.a)(t)),t.checkInput=t.checkInput.bind(Object(N.a)(t)),t.linkInput1=l.a.createRef(),t.linkInput2=l.a.createRef(),t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"onClick",value:function(){1==this.state.Login?this.setState({Login:!1}):this.setState({Login:!0})}},{key:"checkInput",value:function(){this.linkInput1.value!=this.linkInput2.value?this.linkInput2.setCustomValidity("Password Must be Matching."):this.linkInput2.setCustomValidity("")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Inicia sesi\xf3n para compartir tus paseos"),this.state.Login?l.a.createElement("div",null,l.a.createElement("form",{action:"/users",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"name"},"Ingrese su Usuario:"),l.a.createElement("input",{className:"form-control",name:"user",id:"name",placeholder:" Usuario"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Ingrese su contrase\xf1a:"),l.a.createElement("input",{className:"form-control",ref:function(a){return e.linkInput1=a},type:"password",name:"password",id:"passwordOriginal",placeholder:" Contrase\xf1a"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Repita su contrase\xf1a:"),l.a.createElement("input",{className:"form-control",ref:function(a){return e.linkInput2=a},onInput:this.checkInput,type:"password",name:"password",id:"password",placeholder:" Contrase\xf1a"})),l.a.createElement("input",{className:"btn",type:"submit",value:"Submit"}))):l.a.createElement("div",null,l.a.createElement("form",{action:"/loginUsuario",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"name"},"Ingrese su Usuario:"),l.a.createElement("input",{className:"form-control",name:"user",id:"name",placeholder:" Usuario"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Ingrese su contrase\xf1a:"),l.a.createElement("input",{className:"form-control",name:"password",id:"password",placeholder:" Contrase\xf1a"})),l.a.createElement("input",{className:"btn",type:"submit",value:"Submit"}))),l.a.createElement("div",{class:"text-center"},this.state.Login?l.a.createElement("div",null,l.a.createElement("button",{onClick:this.onClick},"Ir a Login")):l.a.createElement("div",null,l.a.createElement("button",{onClick:this.onClick},"Ir a registro"))))}}]),a}(l.a.Component),O=(t(43),function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(g.a)(a).call(this,e))).state={Login:!1},t.onClick=t.onClick.bind(Object(N.a)(t)),t.checkInput=t.checkInput.bind(Object(N.a)(t)),t.linkInput1=l.a.createRef(),t.linkInput2=l.a.createRef(),t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"onClick",value:function(){1==this.state.Login?this.setState({Login:!1}):this.setState({Login:!0})}},{key:"checkInput",value:function(){this.linkInput1.value!=this.linkInput2.value?this.linkInput2.setCustomValidity("Password Must be Matching."):this.linkInput2.setCustomValidity("")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Inicia sesi\xf3n para compartir tus paseos"),this.state.Login?l.a.createElement("div",null,l.a.createElement("form",{action:"/users",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"name"},"Ingrese su Usuario:"),l.a.createElement("input",{className:"form-control",name:"user",id:"name",placeholder:" Usuario"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Ingrese su contrase\xf1a:"),l.a.createElement("input",{className:"form-control",ref:function(a){return e.linkInput1=a},type:"password",name:"password",id:"passwordOriginal",placeholder:" Contrase\xf1a"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Repita su contrase\xf1a:"),l.a.createElement("input",{className:"form-control",ref:function(a){return e.linkInput2=a},onInput:this.checkInput,type:"password",name:"password",id:"password",placeholder:" Contrase\xf1a"})),l.a.createElement("input",{className:"btn",type:"submit",value:"Submit"}))):l.a.createElement("div",null,l.a.createElement("form",{action:"/loginUsuario",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"name"},"Ingrese su Usuario:"),l.a.createElement("input",{className:"form-control",name:"user",id:"name",placeholder:" Usuario"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{ref:"password"},"Ingrese su contrase\xf1a:"),l.a.createElement("p",{className:"passwordFail"},"La contrase\xf1a ingresada es incorrecta. Intente nuevamente."),l.a.createElement("input",{className:"form-control",name:"password",id:"password",placeholder:" Contrase\xf1a"})),l.a.createElement("input",{className:"btn",type:"submit",value:"Submit"}))),l.a.createElement("div",{class:"text-center"},this.state.Login?l.a.createElement("div",null,l.a.createElement("button",{onClick:this.onClick},"Ir a Login")):l.a.createElement("div",null,l.a.createElement("button",{onClick:this.onClick},"Ir a registro"))))}}]),a}(l.a.Component)),C=(t(44),function(e){return l.a.createElement("div",{className:"container",id:"TablaPaseo"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null," ",e.nombre," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",null," Ruta: ",e.ruta," ")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null," Participantes: ",e.numInscritas," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null," Punto de Encuentro: ",e.puntoEncuentro," "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",null," Fecha: ",e.fecha," ")),"No hay usuario"!==e.usuario?l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{id:"BotonInscribirse"}," Inscribirse ")):l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null," Debe iniciar sesi\xf3n para inscribirse "))))}),S=(t(45),function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"tituloGrupos"},"Rutas Actuales"),l.a.createElement("br",null)),l.a.createElement("ul",{class:"ListaPaseos"},e.paseos.map((function(a){return l.a.createElement("div",null,l.a.createElement(C,{key:a.nombre,usuario:e.usuario,nombre:a.nombre,ruta:a.ruta,fecha:a.fecha,puntoEncuentro:a.puntoEncuentro,numInscritas:a.numInscritas}),l.a.createElement("br",null))}))))}),x=(t(46),function(e){function a(e){return Object(E.a)(this,a),Object(b.a)(this,Object(g.a)(a).call(this,e))}return Object(v.a)(a,e),Object(f.a)(a,[{key:"formatDate",value:function(){var e=new Date,a=""+(e.getMonth()+1),t=""+e.getDate(),n=e.getFullYear();return a.length<2&&(a="0"+a),t.length<2&&(t="0"+t),[n,a,t].join("-")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"tituloForm"}," Ingrese la informaci\xf3n de su nuevo paseo "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{action:"/crearPaseo",method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"nombre"},"Ingrese el nombre del paseo:"),l.a.createElement("input",{className:"form-control",type:"text",name:"nombre",placeholder:" Ingrese nombre"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ingrese un punto de encuentro:"),l.a.createElement("input",{className:"form-control",type:"text",name:"puntoEncuentro",placeholder:" Ingrese punto de encuentro"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ingrese la descripci\xf3n de la ruta:"),l.a.createElement("input",{className:"form-control",type:"text",name:"ruta",placeholder:" Ingrese descripci\xf3n de ruta"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Seleccione la cantidad m\xe1xima de personas:"),l.a.createElement("select",{className:"form-control",name:"numInscritas",id:"exampleFormControlSelect1"},l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"productName"},"Seleccione la fecha de inicio: "),l.a.createElement("input",{className:"form-control",name:"fecha",type:"date",min:this.formatDate(),ref:"finishDate",required:!0})),l.a.createElement("input",{type:"hidden",name:"user",value:this.props.usuario}),l.a.createElement("input",{className:"btn",type:"submit",value:"Enviar"})))}}]),a}(n.Component)),L=function(e){return l.a.createElement("div",null,l.a.createElement(x,{usuario:e.usuario}))};var A=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),d=m[0],p=m[1],E=Object(n.useState)("null"),f=Object(s.a)(E,2),b=f[0],g=f[1];function v(e){console.log("Latitude: "+e.coords.latitude+" Longitude: "+e.coords.longitude)}return Object(n.useEffect)((function(){var e=window.location.origin.replace(/^http/,"ws"),a=new WebSocket(e);a.onopen=function(){console.log("Connected to ws"),a.onmessage=function(e){r(JSON.parse(e.data)),console.log("Got ws data",e)}},navigator.geolocation?navigator.geolocation.getCurrentPosition(v):console.log("Geolocation is not supported by this browser."),fetch("paseos").then((function(e){return e.json()})).then((function(e){e.err?p(JSON.stringify(e.msg)):r(e)})),fetch("actual").then((function(e){return e.json()})).then((function(e){if("No hay nada"!==e){var a=JSON.parse(e);g(a.actual)}else g("No hay usuario")}))}),[]),l.a.createElement(c.a,null,l.a.createElement(u.c,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(i,{usuario:b}),l.a.createElement(u.a,{path:"/",component:I,exact:!0}),l.a.createElement(u.a,{path:"logout",component:I}),l.a.createElement(u.a,{path:"/grupos",render:function(e){return l.a.createElement(S,Object.assign({},e,{usuario:b,paseos:t}))}}),l.a.createElement(u.a,{path:"/login",component:j}),l.a.createElement(u.a,{path:"/loginAgain",component:O}),l.a.createElement(u.a,{path:"/crear",render:function(e){return l.a.createElement(L,Object.assign({},e,{usuario:b}))}}),d,l.a.createElement("p",null,"Usuario: ",b)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.9aac830e.chunk.js.map