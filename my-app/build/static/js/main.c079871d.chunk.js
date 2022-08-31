(this["webpackJsonpplanter-ui"]=this["webpackJsonpplanter-ui"]||[]).push([[0],{164:function(e,a,t){e.exports=t.p+"static/media/logo.6d505e4b.svg"},208:function(e,a,t){e.exports=t(398)},398:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(34),c=t.n(o),i=t(174),l=t(427),m=t(9),E=t(428),s=(t(213),t(163)),d=t(73),_={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MEASUREMENT_ID},u=t(420),p=t(422),S=t(402),O=t(429),T=t(164),v=t.n(T);var g=Object(m.a)((function(e){return{secondaryBar:{zIndex:0},icon:{marginRight:e.spacing(2),marginBottom:e.spacing(2)}}}))((function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{component:"div",className:a.secondaryBar,color:"primary",position:"relative"},r.a.createElement(p.a,null,r.a.createElement(O.a,{src:v.a,alt:"Planter",className:a.icon}),r.a.createElement(S.a,{color:"inherit",variant:"h5",component:"h1"},"Planter"))))})),h=t(75),D=t.n(h),P=t(400),b=t(423);var f=Object(m.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",marginBottom:40},bar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"16px"}}}))((function(e){var a=e.classes,t=e.icon,n=e.label,o=e.children;return r.a.createElement(P.a,{className:a.paper},r.a.createElement(u.a,{className:a.bar,position:"static",color:"default",elevation:0},r.a.createElement(p.a,null,r.a.createElement(b.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(b.a,{item:!0},r.a.createElement("div",{className:a.block},t)),r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(S.a,{color:"textSecondary",align:"left"},n))))),r.a.createElement("div",{className:a.contentWrapper},o))})),C=t(424);function A(){return r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(C.a,{color:"secondary"})))}var K=t(20);function y(e){return new Date(1e3*e)}function R(e){return y(e).toLocaleDateString()}function N(e){return y(e).toLocaleString()}var W=t(425);var x=Object(W.a)((function(e){var a=e.theme,t=e.data,n=e.dataXAxisKey,o=e.dataYAxisKey;return r.a.createElement(K.e,{width:"100%",height:225},r.a.createElement(K.d,{data:t,margin:{right:32}},r.a.createElement(K.a,{strokeDasharray:"3 3"}),r.a.createElement(K.g,{dataKey:n,tickFormatter:R}),r.a.createElement(K.h,null),r.a.createElement(K.f,{labelFormatter:N}),r.a.createElement(K.b,null),r.a.createElement(K.c,{type:"monotone",dataKey:o,stroke:a.palette.primary.main})))}));var I=function(){return r.a.createElement(d.a,{path:"planters/planter-1",orderByKey:"yes",limitToLast:25},(function(e){if(e.isLoading||!e.value)return r.a.createElement(A,null);var a=Object.values(e.value);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{label:"Moisture",icon:r.a.createElement(D.a,null)},r.a.createElement(x,{data:a,dataXAxisKey:"epoch",dataYAxisKey:"moisture"})),r.a.createElement(f,{label:"Temperature",icon:r.a.createElement(D.a,null)},r.a.createElement(x,{data:a,dataXAxisKey:"epoch",dataYAxisKey:"temperature"})),r.a.createElement(f,{label:"Humidity",icon:r.a.createElement(D.a,null)},r.a.createElement(x,{data:a,dataXAxisKey:"epoch",dataYAxisKey:"humidity"})))}))},L=t(426);var U=Object(m.a)((function(e){return{footer:{padding:e.spacing(2),background:"#eaeff1"}}}))((function(e){var a=e.classes;return r.a.createElement("footer",{className:a.footer},r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(L.a,{color:"inherit",href:"https://github.com/darkowl91/planter"},"Planter")," ",(new Date).getFullYear(),"."))})),H=Object(i.a)({palette:{type:"light",primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},mixins:{toolbar:{minHeight:65}}}),B={root:{display:"flex",minHeight:"100vh"},app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:H.spacing(6,4),background:"#eaeff1"}};var j=Object(m.a)(B)((function(e){var a=e.classes;return r.a.createElement(l.a,{theme:H},r.a.createElement("div",{className:a.root},r.a.createElement(E.a,null),r.a.createElement("div",{className:a.app},r.a.createElement(g,null),r.a.createElement("main",{className:a.main},r.a.createElement(d.b,Object.assign({firebase:s},_),r.a.createElement(I,null))),r.a.createElement(U,null))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.c079871d.chunk.js.map