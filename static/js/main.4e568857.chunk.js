(this.webpackJsonptarta=this.webpackJsonptarta||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),l=n.n(r),j=(n(58),n(12)),i=(n(59),n(112)),d=n(109),s=n(113),b=n(110),o=n(116),u=n(114),h=n(115),O=n(111),x=n(105),g=(n(67),n(117),n(4));Object(x.a)({root:{width:300}});function v(e){var t=e.h\u00f6jd,n=e.bredd,a=e.l\u00e4ngd;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Sm\xe5 Bitar: ",t*n*a/175," "]}),Object(g.jsxs)("h2",{children:["Mellan Bitar: ",t*n*a/200," "]}),Object(g.jsxs)("h2",{children:["Stora Bitar: ",t*n*a/225," "]})]})}function m(e){var t=e.h\u00f6jd,n=e.radie;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Sm\xe5 Bitar: ",t*n*n*3.141592/175," "]}),Object(g.jsxs)("h2",{children:["Mellan Bitar: ",t*n*n*3.141592/200," "]}),Object(g.jsxs)("h2",{children:["Stora Bitar: ",t*n*n*3.141592/225," "]})]})}function f(e){return Object(g.jsx)("div",{children:e.ber\u00e4knaRek?Object(g.jsx)(v,{"h\xf6jd":e.h\u00f6jd,bredd:e.bredd,"l\xe4ngd":e.l\u00e4ngd}):Object(g.jsx)(m,{"h\xf6jd":e.h\u00f6jd,radie:e.radie})})}f.defaultProps={"h\xf6jd":0,bredd:0,"l\xe4ngd":0,radie:0,"ber\xe4knaRek":!0};var p=f;var k=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),l=Object(j.a)(r,2),x=l[0],v=l[1],m=Object(a.useState)(0),f=Object(j.a)(m,2),k=f[0],B=f[1],S=Object(a.useState)(0),C=Object(j.a)(S,2),R=C[0],P=C[1],y=Object(a.useState)(0),H=Object(j.a)(y,2),w=H[0],F=H[1],L=Object(a.useState)(0),M=Object(j.a)(L,2),A=M[0],I=M[1],J=Object(a.useState)("storlek"),T=Object(j.a)(J,2),V=T[0],D=T[1],E=Object(a.useState)(0),N=Object(j.a)(E,2),q=(N[0],N[1],Object(a.useState)(!1)),z=Object(j.a)(q,2),G=z[0],K=z[1];function Q(){return Object(g.jsx)(p,{"h\xf6jd":k,bredd:R,"l\xe4ngd":w,radie:A,"ber\xe4knaRek":"Rektangular"===n})}return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(d.a,{container:!0,spacing:1,children:[Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsxs)(o.a,{component:"fieldset",children:[Object(g.jsx)(b.a,{component:"div",children:Object(g.jsx)("div",{align:"center",children:"Form p\xe5 t\xe5rtan"})}),Object(g.jsxs)(h.a,{row:!0,defaultValue:"true",onChange:function(e){"true"===e.target.value?c("Rektangular"):c("Rund")},children:[Object(g.jsx)(O.a,{value:"true",control:Object(g.jsx)(u.a,{color:"primary"}),label:"Rektangul\xe4r",labelPlacement:"bottom"}),Object(g.jsx)(O.a,{value:"false",control:Object(g.jsx)(u.a,{color:"secondary"}),label:"Rund",labelPlacement:"bottom"})]})]})}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsxs)(o.a,{component:"fieldset",children:[Object(g.jsx)(b.a,{component:"div",children:Object(g.jsx)("div",{align:"center",children:"Ber\xe4kna utifr\xe5n storlek eller bitar"})}),Object(g.jsxs)(h.a,{row:!0,defaultValue:"true",onChange:function(e){"true"===e.target.value?D("storlek"):D("Bitar")},children:[Object(g.jsx)(O.a,{value:"true",control:Object(g.jsx)(u.a,{color:"primary"}),label:"storlek",labelPlacement:"bottom"}),Object(g.jsx)(O.a,{value:"false",control:Object(g.jsx)(u.a,{color:"secondary"}),label:"Bitar",labelPlacement:"bottom"})]})]})}),Object(g.jsxs)(d.a,{item:!0,xs:12,align:"center",children:["Bitar"===V&&Object(g.jsx)("div",{children:Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"Bitar",placeholder:"Antalet Bitar",value:x,variant:"outlined",onChange:function(e){v(e.target.value)}})})}),"storlek"===V&&Object(g.jsx)("div",{children:"Rund"===n?Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"H\xf6jden"}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"H\xf6jd",placeholder:"H\xf6jden",value:k,variant:"outlined",onChange:function(e){B(e.target.value)}})}),Object(g.jsx)("h3",{children:"Radien"}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"Radie",placeholder:"Radie",value:A,variant:"outlined",onChange:function(e){I(e.target.value)}})})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"H\xf6jden"}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"H\xf6jd",placeholder:"H\xf6jden",value:k,variant:"outlined",onChange:function(e){B(e.target.value)}})}),Object(g.jsx)("h3",{children:"Bredden"}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"Bredd",placeholder:"Bredd",value:R,variant:"outlined",onChange:function(e){P(e.target.value)}})}),Object(g.jsx)("h3",{children:"L\xe4ngden"}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(s.a,{lable:"L\xe4ngd",placeholder:"L\xe4ngd",value:w,variant:"outlined",onChange:function(e){F(e.target.value)}})})]})})]}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:Object(g.jsx)(i.a,{variant:"contained",color:"secondary",onClick:function(){K(!0)},children:"Ber\xe4kna Storleken"})}),Object(g.jsx)(d.a,{item:!0,xs:12,align:"center",children:G&&"storlek"===V?Object(g.jsx)(Q,{}):null})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),B()}},[[66,1,2]]]);
//# sourceMappingURL=main.4e568857.chunk.js.map