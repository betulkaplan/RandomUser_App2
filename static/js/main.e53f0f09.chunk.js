(this.webpackJsonprandom_users=this.webpackJsonprandom_users||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),o=(n(12),n(13),n(7)),r=n(2),j=n.p+"static/media/man.4b684e29.svg",l=n.p+"static/media/mail.42e0750e.svg",u=n.p+"static/media/growing-up-woman.a1585842.svg",d=n.p+"static/media/map.8e5a2a58.svg",b=n.p+"static/media/phone.d017e1ae.svg",m=n.p+"static/media/padlock.8d2c33d2.svg",O=n(0);function h(e){return Object(O.jsx)("div",{className:"contacts",children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("colgroup",{children:[Object(O.jsx)("col",{span:"1",style:{width:"25%"}}),Object(O.jsx)("col",{span:"1",style:{width:"25%"}}),Object(O.jsx)("col",{span:"1",style:{width:"25%"}}),Object(O.jsx)("col",{span:"1",style:{width:"25%"}})]}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{className:"tableHeader",children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Phone"}),Object(O.jsx)("th",{children:"Age"})]}),e.info.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:e.phone}),Object(O.jsx)("td",{children:e.age})]})}))]})]})})}function p(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(),a=Object(r.a)(i,2),p=a[0],x=a[1],f=Object(c.useState)({picture:j,title:"name",info:"Betul Kaplan"}),g=Object(r.a)(f,2),v=g[0],N=g[1],w=Object(c.useState)("name"),E=Object(r.a)(w,2),M=E[0],y=E[1],L=Object(c.useState)([]),S=Object(r.a)(L,2),k=S[0],C=S[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){x({picture:e.results[0].picture.medium,name:e.results[0].name.first+" "+e.results[0].name.last,age:e.results[0].dob.age,email:e.results[0].email,location:e.results[0].location.city,phone:e.results[0].cell,password:e.results[0].login.password})}))}),[n]),Object(c.useEffect)((function(){void 0!==p&&N({picture:p.picture,title:"name",info:p.name})}),[p]),Object(c.useEffect)((function(){void 0!==p&&N({picture:p.picture,title:M,info:p[M]})}),[M]),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"pp",children:Object(O.jsx)("img",{src:v.picture,alt:"Loading"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("p",{children:["My ",v.title," is"]}),Object(O.jsx)("h2",{children:v.info})]}),Object(O.jsxs)("div",{className:"options",children:[Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("name")},children:Object(O.jsx)("img",{src:j,alt:""})}),Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("email")},onMouseLeave:function(){return y("name")},children:Object(O.jsx)("img",{src:l,alt:""})}),Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("age")},onMouseLeave:function(){return y("name")},children:Object(O.jsx)("img",{src:u,alt:""})}),Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("location")},onMouseLeave:function(){return y("name")},children:Object(O.jsx)("img",{src:d,alt:""})}),Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("phone")},onMouseLeave:function(){return y("name")},children:Object(O.jsx)("img",{src:b,alt:""})}),Object(O.jsx)("button",{className:"option-icon",onMouseEnter:function(){return y("password")},children:Object(O.jsx)("img",{src:m,alt:""})})]}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsx)("button",{onClick:function(){return s(!n)},children:"new user"}),Object(O.jsx)("button",{onClick:function(){var e=!1;k.forEach((function(t){t.name===p.name&&(e=!0)})),console.log("Repeated:",e),e?alert("You cannot add existing contacts"):C([p].concat(Object(o.a)(k)))},children:"add user"})]}),0!==k.length?Object(O.jsx)(h,{info:k}):null]})}var x=n.p+"static/media/cw.22310668.svg",f=n.p+"static/media/design.9f215bce.svg";var g=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("img",{className:"cw-header",src:x,alt:""}),Object(O.jsx)(p,{}),Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("span",{className:"code",children:"<ed8en/>"})," ",Object(O.jsx)("img",{src:f,alt:""})," ",Object(O.jsx)("span",{children:"design"})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.e53f0f09.chunk.js.map