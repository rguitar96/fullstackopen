(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(14),o=n.n(c),a=n(3),u=n(0),i=function(e){var t=e.filter,n=e.setFilter;return Object(u.jsxs)("div",{children:["filter shown with: ",Object(u.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},s=function(e){var t=e.title;return Object(u.jsx)("h2",{children:t})},l=function(e){var t=e.onSubmit,n=e.newName,r=e.newNumber,c=e.handleNewNameChange,o=e.handleNewNumberChange;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:r,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var t=e.person,n=e.deletePerson;return Object(u.jsxs)("li",{children:[t.name," ",t.number,Object(u.jsx)("button",{onClick:n,id:t.id,children:"delete"})]})},b=function(e){var t=e.className,n=e.message,r={success:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},error:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}}[t];return null===n?null:Object(u.jsx)("div",{style:r,className:t,children:n})},j=n(4),f=n.n(j),h="https://fullstackopen-part3-rguitar96.herokuapp.com/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e){return f.a.put("".concat(h,"/").concat(e.id),e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),j=Object(a.a)(o,2),f=j[0],h=j[1],v=Object(r.useState)(""),x=Object(a.a)(v,2),w=x[0],N=x[1],S=Object(r.useState)(""),y=Object(a.a)(S,2),k=y[0],C=y[1],A=n.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})),B=Object(r.useState)(null),P=Object(a.a)(B,2),z=P[0],E=P[1],F=Object(r.useState)(null),J=Object(a.a)(F,2),L=J[0],R=J[1];Object(r.useEffect)((function(){m().then((function(e){c(e)}))}),[]);var T=function(e,t){console.log("Hi"),console.log(e),R(t),E(e),setTimeout((function(){E(null)}),5e3)},D=function(e){window.confirm("Are you sure to delete?")&&p(e.target.getAttribute("id")).then((function(t){c(n.filter((function(t){return t.id!=e.target.getAttribute("id")})))}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)(s,{title:"Phonebook"}),Object(u.jsx)(b,{className:L,message:z}),Object(u.jsx)(i,{filter:k,setFilter:C}),Object(u.jsx)(s,{title:"Add new"}),Object(u.jsx)(l,{onSubmit:function(e){e.preventDefault();var t={name:f,number:w},r=n.find((function(e){return e.name===f}));if(r){if(!window.confirm("".concat(t.name," is already in the phonebook, update?")))return;return t.id=r.id,void g(t).then((function(e){c(n.map((function(t){return t.name===f?e:t}))),h(""),N(""),T("Succesfully updated ".concat(t.name),"success")})).catch((function(e){T("There was an error, ".concat(t.name," does not exist anymore."),"error"),c(n.filter((function(e){return e.id!==t.id})))}))}O(t).then((function(e){c(n.concat(e)),h(""),N(""),T("Succesfully added ".concat(t.name),"success")}))},newName:f,newNumber:w,handleNewNameChange:function(e){h(e.target.value)},handleNewNumberChange:function(e){N(e.target.value)}}),Object(u.jsx)(s,{title:"Numbers"}),A.map((function(e){return Object(u.jsx)(d,{person:e,deletePerson:D},e.name)}))]})};o.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.4cfafad1.chunk.js.map