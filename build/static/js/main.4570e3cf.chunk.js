(this["webpackJsonpmem-extension"]=this["webpackJsonpmem-extension"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(14),s=n.n(c),r=(n(52),n(53),n(27)),o=n.n(r),l=n(38),d=n(24),j=n(95),m=n(101),h=n(97),u=n(102),b=n(100),p=n(99),O=n(98),x=n(39),f=n.n(x),g=n(3),v=Object(j.a)((function(e){return{inputs:{marginBottom:20},heading:{marginBottom:10}}})),y=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),s=Object(d.a)(c,2),r=s[0],j=s[1],x=Object(a.useState)(""),y=Object(d.a)(x,2),A=y[0],N=y[1],k=Object(a.useState)(!1),w=Object(d.a)(k,2),C=w[0],W=w[1],S=v(),T=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.post("https://api.mem.ai/v0/mems",{content:n},{headers:{"Content-Type":"application/json",Authorization:"ApiAccessToken ".concat(r)}}).then((function(e){i(""),j(""),W(!1),console.log(e.status)})).catch((function(e){console.log(e.response.status)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){W(""!==r&&""!==n)}),[n,r]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(m.a,{style:{padding:30,minWidth:250,maxWidth:250},children:[Object(g.jsx)(h.a,{variant:"h6",className:S.heading,children:"Mem from anywhere!"}),Object(g.jsxs)(u.a,{id:"form-key",fullWidth:!0,variant:"outlined",children:[Object(g.jsx)(b.a,{children:"API Key"}),Object(g.jsx)(p.a,{id:"mem-key",label:"Mem Key",variant:"outlined",size:"small",color:"primary",value:r,className:S.inputs,multiline:!0,onChange:function(e){j(e.target.value.trim()),N("")}})]}),Object(g.jsxs)(u.a,{id:"form-mem",fullWidth:!0,variant:"outlined",children:[Object(g.jsx)(b.a,{children:"Mem"}),Object(g.jsx)(p.a,{id:"mem-text",label:"Mem",variant:"outlined",multiline:!0,size:"small",color:"primary",value:n,className:S.inputs,onChange:function(e){i(e.target.value),N("")}}),Object(g.jsx)(O.a,{variant:"contained",color:"primary",disabled:!C,onClick:T,children:"Mem It!"}),Object(g.jsx)(h.a,{variant:"caption",display:"box",children:"".concat(A)})]})]})})},A=Object(j.a)((function(e){return{a:{color:"black"}}})),N=function(){var e=A();return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(m.a,{style:{padding:30,minWidth:250,maxWidth:250,marginBottom:20,marginTop:25},children:Object(g.jsxs)(h.a,{variant:"body1",children:["This is not affiliated in any way with",Object(g.jsx)("a",{className:e.a,href:"https://mem.ai",children:"mem.ai"}),". We only use their API and we do not store your API Key whatsoever."]})})})},k=function(){var e=Object(g.jsxs)(h.a,{variant:"body1",children:[Object(g.jsx)("i",{children:"Desktop Reactive"}),", ",Object(g.jsx)("i",{children:"Error Handling"})," and ",Object(g.jsx)("i",{children:"Scheduled For"})," features coming soon... & ",Object(g.jsx)("i",{children:"Chrome Extension"})," too."]});return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(m.a,{style:{padding:30,minWidth:250,maxWidth:250,marginBottom:20,marginTop:20},children:e})})},w=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(N,{}),Object(g.jsx)(y,{}),Object(g.jsx)(k,{})]}),Object(g.jsxs)("footer",{className:"App-footer",children:["\xa9 Copyright 2021 |",Object(g.jsx)("a",{href:"https://diegonunez.dev",children:"Diego Nunez"})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),C()}},[[78,1,2]]]);
//# sourceMappingURL=main.4570e3cf.chunk.js.map