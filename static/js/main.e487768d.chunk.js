(this["webpackJsonpproject-react-certification"]=this["webpackJsonpproject-react-certification"]||[]).push([[0],{10:function(e,t,n){e.exports={maindiv:"MedCRUD_maindiv__2tSBy",mnginvnav:"MedCRUD_mnginvnav__1BaRd",desdiv:"MedCRUD_desdiv__3NCHg",formdiv:"MedCRUD_formdiv__3RSTN",stock1:"MedCRUD_stock1__2jIqB",medName1:"MedCRUD_medName1__QYwst",mafName1:"MedCRUD_mafName1__1EDv3",price1:"MedCRUD_price1__M0KPU",discount1:"MedCRUD_discount1__1dMex",buttonDiv:"MedCRUD_buttonDiv__1P5BD",buttonClass4:"MedCRUD_buttonClass4__3X14i"}},13:function(e,t,n){e.exports={homeLogin:"logins_homeLogin__2K8F_",header:"logins_header__BQk6W",loginPage:"logins_loginPage__3z9Jd",form:"logins_form__fsk8a",login:"logins_login__jmgbT",container:"logins_container__3jIIn"}},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),d=n.n(s),i=(n(26),n(2)),r=n(3),l=n(4),o=(n(27),n(0)),j=function(){var e=JSON.parse(localStorage.getItem("orderStock"));return Object(o.jsxs)("div",{id:"maindiv",children:[Object(o.jsxs)("nav",{id:"manageordnav",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"content",children:[Object(o.jsx)("h1",{children:"Manage Orders"}),Object(o.jsx)(i.b,{to:"/neworder",children:Object(o.jsx)("button",{class:"buttonClass3",children:"NEW ORDER"})}),Object(o.jsx)("div",{id:"ordercontainer",children:e.map((function(e){return Object(o.jsx)(m,Object(l.a)({},e))}))})]})]})},m=function(e){var t=e.id,n=e.name,a=e.mobile,c=e.products,s=e.total,d=(e.createdby,"/CRUDorder?id="+t);return Object(o.jsxs)(i.b,{to:d,children:["  ",Object(o.jsxs)("div",{id:"orderDetail",children:[Object(o.jsxs)("h3",{children:["Order No -",Object(o.jsx)("span",{children:t})]}),Object(o.jsxs)("h3",{children:["Customer Name - ",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("h3",{children:["Mob: ",a]}),c.map((function(e){return Object(o.jsx)(b,Object(l.a)({},e))})),Object(o.jsxs)("h3",{children:["Total-",Object(o.jsxs)("span",{children:["Rs. ",s]})]})]})," "]})},b=function(e){var t=e.mediName,n=e.quantity;return Object(o.jsxs)("h3",{id:"product",children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{children:n})]})},h=(n(37),function(e){var t=Object(r.g)().search,n=new URLSearchParams(t).get("id");console.log(n);var a,c=JSON.parse(localStorage.getItem("TeamStock"));console.log(a);return Object(o.jsxs)("div",{id:"maindiv",children:[function(){for(var e=0;e<c.length;e++)if(c[e].id==n){a=c[e];break}}(),";",Object(o.jsxs)("nav",{id:"teammemnav",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"formdiv",children:[Object(o.jsx)("h1",{children:"Manage Sales Executive"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{id:"fName",contentEditable:"true",children:a.First_name}),Object(o.jsxs)("p",{id:"sName",contentEditable:!0,children:[a.Second_name," "]}),Object(o.jsx)("p",{id:"dob",contentEditable:"true",children:a.DOB}),Object(o.jsx)("p",{id:"gender",contentEditable:!0,children:a.Gender}),Object(o.jsx)("p",{id:"exp",contentEditable:!0,children:a.Exp}),Object(o.jsx)("p",{id:"pass",contentEditable:!0,children:a.Password})]}),Object(o.jsxs)("div",{id:"buttonDiv",children:[Object(o.jsx)(i.b,{to:"/myteam",onClick:function(){return function(){var e,t;for(t=0;t<c.length;t++)if(c[t].id==n){e=c[t];break}var a={id:e.id,First_name:document.getElementById("fName").innerText,Second_name:document.getElementById("sName").innerText,DOB:document.getElementById("dob").innerText,Gender:document.getElementById("gender").innerText,Exp:document.getElementById("exp").innerText,Password:document.getElementById("pass").innerText,Avatar:"fas fa-user-tie",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};c[t]=a,localStorage.setItem("TeamStock",JSON.stringify(c))}()},children:Object(o.jsx)("button",{class:"buttonClass4",id:"update",children:"Update"})}),Object(o.jsx)(i.b,{to:"/myteam",onClick:function(){return function(){for(var e,t=0;t<c.length;t++)if(c[t].id==n){e=t;break}localStorage.setItem("TeamStock",JSON.stringify(c.slice(0,e).concat(c.slice(e+1))))}()},children:Object(o.jsx)("button",{class:"buttonClass4",id:"delete",children:"Delete"})})]})]})]})}),u=n(8),O=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),s=Object(u.a)(c,2),d=s[0],r=s[1],j=JSON.parse(localStorage.getItem("MedicineStock")),m=function(){for(var e=0,t=0;t<d.length;t++){for(var n=0,a=0;a<j.length;a++)if(d[t].mediName===j[a].Name){n=parseInt(j[t].Price);break}e+=parseInt(d[t].quantity)*n}return e};return Object(o.jsxs)("div",{id:"maindiv",children:[Object(o.jsxs)("nav",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"formdiv",children:[Object(o.jsx)("h1",{children:"Manage Order"}),Object(o.jsxs)("h4",{children:["Order Number ",Object(o.jsx)("span",{id:"orderNo"})]}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:Text,id:"Name",placeholder:"Name"}),Object(o.jsx)("input",{type:Text,id:"moblie",placeholder:"Mobile"}),d.map((function(e){return Object(o.jsx)(p,Object(l.a)({},e))})),Object(o.jsxs)("p",{id:"total",children:["Rs.",m()]})]}),Object(o.jsxs)("div",{id:"buttonDiv",children:[Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add Medicine "}),Object(o.jsxs)(i.b,{to:"/order",children:[" ",Object(o.jsx)("button",{id:"Confirm Order",className:"buttonClass4",onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("orderStock")),t={id:(new Date).getTime(),name:document.getElementById("Name").value,mobile:document.getElementById("moblie").value,products:d,total:document.getElementById("total").innerText};e.push(t),localStorage.setItem("orderStock",JSON.stringify(e))}()},children:" Confirm"})]})]})]}),Object(o.jsxs)("div",{id:"addMed",children:[Object(o.jsx)("h2",{children:"MEDICINE LIST"}),Object(o.jsx)("div",{id:"hold",children:j.map((function(e){return Object(o.jsx)(x,Object(l.a)({},e))}))}),Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){return function(){for(var e=document.getElementsByClassName("dataget"),t=e.length,n=[],a=0;a<t;a++)n.push({mediName:e[a].children[0].innerHTML,quantity:e[a].children[3].innerHTML});r(n),alert("after render of hook"),m(),document.getElementById("addMed").style.display="none"}()},children:" ADD"})]})]})},x=function(e){e.id;var t=e.Name,n=e.Price;return Object(o.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(o.jsx)("span",{children:"0"}),Object(o.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t},children:"+"})]})},p=function(e){var t=e.mediName,n=e.quantity;return Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{children:n})]})},g=n(13),v=n.n(g),f=function(){var e,t="test-admin",n="test-admin",c={First_name:"test-sales",Password:"test-sales",Avatar:"fas fa-user-tie",DOB:"12/12/12",Exp:"5",Gender:"male",Second_name:"mary",id:1631540396845,img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};!function(){if(JSON.parse(localStorage.getItem("TeamStock")))e=JSON.parse(localStorage.getItem("TeamStock"));else{var t=[];t.push(c),localStorage.setItem("TeamStock",JSON.stringify(t))}}(),console.log(e);var s=Object(a.useState)(!1),d=Object(u.a)(s,2),i=d[0],l=d[1],j=Object(a.useState)(!1),m=Object(u.a)(j,2),b=m[0],h=m[1];return Object(o.jsxs)("div",{className:v.a.homeLogin,children:[i&&Object(o.jsx)(r.a,{to:"/storemanager"}),b&&Object(o.jsx)(r.a,{to:"/sales"}),Object(o.jsx)("div",{className:v.a.loginPage,children:Object(o.jsxs)("div",{className:v.a.form,children:[Object(o.jsx)("div",{className:v.a.login,children:Object(o.jsxs)("div",{className:v.a.loginHeader,children:[Object(o.jsx)("h3",{children:"STORE MANAGER LOGIN"}),Object(o.jsx)("p",{children:"Please enter your credentials to login."})]})}),Object(o.jsxs)("form",{className:v.a.loginForm,children:[Object(o.jsx)("input",{id:"storeManagerid",type:"text",placeholder:"username"}),Object(o.jsx)("input",{id:"storeManagerpass",type:"password",placeholder:"password"}),Object(o.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("storeManagerid").value,a=document.getElementById("storeManagerpass").value;console.log(e,a),""===e||""===a?alert("please fill all the fields"):e.toLowerCase()===t&&a===n?l(!0):alert("Either username or password is wrong")}()},children:"login"})]})]})}),Object(o.jsx)("div",{className:v.a.loginPage,children:Object(o.jsxs)("div",{className:v.a.form,children:[Object(o.jsx)("div",{className:v.a.login,children:Object(o.jsxs)("div",{className:v.a.loginHeader,children:[Object(o.jsx)("h3",{children:"SALES EXECUTIVE LOGIN"}),Object(o.jsx)("p",{children:"Please enter your credentials to login."})]})}),Object(o.jsxs)("form",{className:v.a.loginForm,children:[Object(o.jsx)("input",{id:"salesExecutiveid",type:"text",placeholder:"username"}),Object(o.jsx)("input",{id:"salesExecutivepass",type:"password",placeholder:"password"}),Object(o.jsx)("button",{onClick:function(){return function(){var t=0,n=document.getElementById("salesExecutiveid").value.toLowerCase(),a=document.getElementById("salesExecutivepass").value;if(""==n||""==a)alert("please fill all the fields");else{for(var c=0;c<e.length;c++){if(console.log("ch",e[c].First_name,n,e[c].Password,a),e[c].First_name.toLowerCase()==n&&a==e[c].Password){t=1,h(!0);break}t=0}0==t&&alert("Either username or password is wrong")}}()},children:"login"})]})]})})]})},N=function(){var e=JSON.parse(localStorage.getItem("orderStock"));return Object(o.jsxs)("div",{id:"maindiv",children:[Object(o.jsxs)("nav",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Akash Gupta"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Sales Executive"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"content",children:[Object(o.jsx)("h1",{children:"Orders"}),Object(o.jsx)(i.b,{to:"/exeordupexe",children:Object(o.jsx)("button",{class:"buttonClass3",children:"NEW ORDER"})}),Object(o.jsx)("div",{id:"ordercontainer",children:e.map((function(e){return Object(o.jsx)(S,Object(l.a)({},e))}))})]})]})},S=function(e){var t=e.id,n=e.name,a=e.mobile,c=e.products,s=e.total;e.createdby;return Object(o.jsxs)("div",{id:"orderDetail",children:[Object(o.jsxs)("h3",{children:["Order No -",Object(o.jsx)("span",{children:t})]}),Object(o.jsxs)("h3",{children:["Customer Name - ",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("h3",{children:["Mob: ",a]}),c.map((function(e){return Object(o.jsx)(y,Object(l.a)({},e))})),Object(o.jsxs)("h3",{children:["Total-",Object(o.jsxs)("span",{children:["Rs. ",s]})]})]})},y=function(e){var t=e.mediName,n=e.quantity;return Object(o.jsxs)("h3",{id:"product",children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{children:n})]})},_=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),s=Object(u.a)(c,2),d=s[0],r=s[1],j=JSON.parse(localStorage.getItem("MedicineStock")),m=function(){for(var e=0,t=0;t<d.length;t++){for(var n=0,a=0;a<j.length;a++)if(d[t].mediName===j[a].Name){n=parseInt(j[t].Price);break}e+=parseInt(d[t].quantity)*n}return e};return Object(o.jsxs)("div",{id:"maindiv",children:[Object(o.jsxs)("nav",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Akash Gupta"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Sales Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"formdiv",children:[Object(o.jsx)("h1",{children:"Create Order"}),Object(o.jsxs)("h4",{children:["Order Number ",Object(o.jsx)("span",{id:"orderNo"})]}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:Text,id:"Name",placeholder:"Name"}),Object(o.jsx)("input",{type:Text,id:"moblie",placeholder:"Mobile"}),d.map((function(e){return Object(o.jsx)(I,Object(l.a)({},e))})),Object(o.jsxs)("p",{id:"total",children:["Rs.",m()]})]}),Object(o.jsxs)("div",{id:"buttonDiv",children:[Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add Medicine "}),Object(o.jsxs)(i.b,{to:"/sales",children:[" ",Object(o.jsx)("button",{id:"Confirm Order",className:"buttonClass4",onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("orderStock")),t={id:(new Date).getTime(),name:document.getElementById("Name").value,mobile:document.getElementById("moblie").value,products:d,total:document.getElementById("total").innerText};e.push(t),localStorage.setItem("orderStock",JSON.stringify(e))}()},children:" Confirm"})]})]})]}),Object(o.jsxs)("div",{id:"addMed",children:[Object(o.jsx)("h2",{children:"MEDICINE LIST"}),Object(o.jsx)("div",{id:"hold",children:j.map((function(e){return Object(o.jsx)(M,Object(l.a)({},e))}))}),Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){return function(){for(var e=document.getElementsByClassName("dataget"),t=e.length,n=[],a=0;a<t;a++)n.push({mediName:e[a].children[0].innerHTML,quantity:e[a].children[3].innerHTML});r(n),alert("after render of hook"),m(),document.getElementById("addMed").style.display="none"}()},children:" ADD"})]})]})},M=function(e){e.id;var t=e.Name,n=e.Price;return Object(o.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(o.jsx)("span",{children:"0"}),Object(o.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t},children:"+"})]})},I=function(e){var t=e.mediName,n=e.quantity;return Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{children:n})]})},E=(n(38),function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],s=n[1],d=Object(a.useState)([]),j=Object(u.a)(d,2),m=j[0],b=j[1],h=JSON.parse(localStorage.getItem("MedicineStock")),O=Object(r.g)().search,x=new URLSearchParams(O).get("id");console.log(x);var p,g=JSON.parse(localStorage.getItem("orderStock"));console.log(p);return Object(o.jsxs)("div",{id:"maindiv",children:[function(){for(var e=0;e<g.length;e++)if(g[e].id==x){p=g[e];break}}(),Object(o.jsxs)("nav",{id:"crudordnav",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"formdiv",children:[Object(o.jsx)("h1",{children:"Manage Order"}),Object(o.jsxs)("h4",{children:["Order Number ",Object(o.jsx)("span",{id:"orderNo",children:p.id})]}),Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{id:"Name",contentEditable:"true",children:p.name}),Object(o.jsx)("p",{id:"mobile",contentEditable:"true",children:p.mobile}),p.products.map((function(e){return Object(o.jsx)(C,Object(l.a)({},e))})),Object(o.jsx)("p",{id:"total",children:p.total})]}),Object(o.jsxs)("div",{id:"buttonDiv",children:[Object(o.jsx)(i.b,{to:"/order",onClick:function(){return function(){var e,t;for(t=0;t<g.length;t++)if(g[t].id==x){e=g[t];break}var n={id:e.id,createdby:e.createdby,products:m,mobile:document.getElementById("mobile").innerText,name:document.getElementById("Name").innerText,total:document.getElementById("total").innerText};g[t]=n,localStorage.setItem("orderStock",JSON.stringify(g))}()},children:Object(o.jsx)("button",{className:"buttonClass4",id:"update",children:"Update"})}),Object(o.jsx)(i.b,{to:"/order",onClick:function(){return function(){for(var e,t=0;t<g.length;t++)if(g[t].id==x){e=t;break}localStorage.setItem("orderStock",JSON.stringify(g.slice(0,e).concat(g.slice(e+1))))}()},children:Object(o.jsx)("button",{className:"buttonClass4",id:"delete",children:"Delete"})}),Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add more "})]})]}),Object(o.jsxs)("div",{id:"addMed",children:[Object(o.jsx)("h2",{children:"MEDICINE LIST"}),Object(o.jsx)("div",{id:"hold",children:h.map((function(e){return Object(o.jsx)(k,Object(l.a)({},e))}))}),Object(o.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){return function(){for(var e,t=document.getElementsByClassName("dataget"),n=t.length,a=[],d=0;d<n;d++)a.push({mediName:t[d].children[0].innerHTML,quantity:t[d].children[3].innerHTML});console.log(a),b(a);for(var i=0;i<g.length;i++)if(g[i].id==x){e=i;break}g[e].products=a,localStorage.setItem("orderStock",JSON.stringify(g)),s(c+1),document.getElementById("addMed").style.display="none"}()},children:" Done"})]})]})}),C=function(e){var t=e.mediName,n=e.quantity;return Object(o.jsxs)("h3",{id:"product",children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{children:n})]})},k=function(e){e.id;var t=e.Name,n=e.Price;return Object(o.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(o.jsx)("span",{children:"0"}),Object(o.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t,console.log(document.getElementsByClassName("dataget")),console.log(document.getElementsByClassName("dataget")[0].children[0].innerHTML),console.log(document.getElementsByClassName("dataget")[0].children[3].innerHTML)},children:"+"})]})},D=(n(39),function(){var e=[{id:1,Name:"A",MafName:"z",Price:2500,Stock:100,Discount:20},{id:2,Name:"B",MafName:"z",Price:2500,Stock:100,Discount:20},{id:3,Name:"C",MafName:"z",Price:2500,Stock:100,Discount:20},{id:4,Name:"D",MafName:"z",Price:2500,Stock:100,Discount:20},{id:5,Name:"E",MafName:"z",Price:2500,Stock:100,Discount:20}],t=[{id:1,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:2,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:3,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:4,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"}],n=[{id:1,name:"User1",mobile:8966919189,products:[{mediName:"abxxx",quantity:40},{mediName:"zxsaaa",quantity:88e3}],total:2e9,createdby:"Manager"},{id:2,name:"User2",mobile:8966919189,products:[{mediName:"paracetamol",quantity:1e3},{mediName:"wix",quantity:5e3}],total:500555500,createdby:"test-sales"}],a=[],c=[],s=[];localStorage.getItem("MedicineStock")?a=JSON.parse(localStorage.getItem("MedicineStock")):(a=e,localStorage.setItem("MedicineStock",JSON.stringify(a))),localStorage.getItem("TeamStock")?c=JSON.parse(localStorage.getItem("TeamStock")):(c=t,localStorage.setItem("TeamStock",JSON.stringify(c))),localStorage.getItem("orderStock")?s=JSON.parse(localStorage.getItem("orderStock")):(s=n,localStorage.setItem("orderStock",JSON.stringify(s)));var d=function(e,t){for(var n=[],a=0;a<t;a++)n.push(e.pop());return n};return Object(o.jsxs)("div",{id:"maindiv",children:[Object(o.jsxs)("nav",{id:"navbar",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(o.jsxs)("div",{id:"desdiv",children:[Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)("i",{class:"fas fa-user-tie"})]})]}),Object(o.jsxs)("div",{id:"contentDiv",children:[Object(o.jsxs)("div",{id:"manageInventory",children:[Object(o.jsx)("h1",{children:"Manage Inventory"}),Object(o.jsx)("div",{id:"inventory",children:d(a,4).map((function(e){return Object(o.jsx)(w,Object(l.a)({},e))}))}),Object(o.jsxs)(i.b,{to:"/medInv",children:[" ",Object(o.jsx)("button",{id:"manageInvButton",class:"buttonClass",children:"Manage More"})]})]}),Object(o.jsxs)("div",{id:"ManageTeam",children:[Object(o.jsx)("h1",{children:"Manage Team"}),Object(o.jsx)("div",{id:"Team",children:d(c,1).map((function(e){return Object(o.jsx)(T,Object(l.a)({},e))}))}),Object(o.jsxs)(i.b,{to:"/myteam",children:["  ",Object(o.jsx)("button",{id:"manageTeamButton",class:"buttonClass",children:"Manage More"})]})]}),Object(o.jsxs)("div",{id:"manageOrders",children:[Object(o.jsx)("h1",{children:"Manage Orders"}),Object(o.jsx)("div",{id:"orders",children:d(s,1).map((function(e){return Object(o.jsx)(B,Object(l.a)({},e))}))}),Object(o.jsxs)(i.b,{to:"/order",children:[" ",Object(o.jsx)("button",{id:"manageOrderButton",class:"buttonClass",children:"Manage More"})," "]})]})]})]})}),w=function(e){var t=e.Name,n=e.MafName,a=e.Stock;return Object(o.jsxs)("div",{id:"meddetails",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("h3",{children:n}),Object(o.jsxs)("h4",{children:["In Stock",Object(o.jsxs)("span",{class:"ml",children:[a," Units"]})]})]})},T=function(e){var t=e.First_name,n=(e.Second_name,e.Avatar);return Object(o.jsxs)("div",{id:"TeamDetails",children:[Object(o.jsx)("i",{class:n}),Object(o.jsx)("h4",{children:t})]})},B=function(e){var t=e.name,n=e.id,a=(e.createdby,e.total);return Object(o.jsxs)("div",{id:"orderdetails",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("h4",{children:["Order No.",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("h4",{children:["Total ",Object(o.jsxs)("span",{children:["Rs. ",a]})]})]})},P=n(7),U=n.n(P),R=function(){var e=JSON.parse(localStorage.getItem("MedicineStock")),t=Object(a.useState)(e.length),n=Object(u.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)("div",{className:U.a.maindiv,children:[Object(o.jsxs)("nav",{className:U.a.mnginvnav,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Admin"})]}),Object(o.jsx)("h2",{children:"Inventory Management"})]}),Object(o.jsx)("div",{className:U.a.head,children:Object(o.jsx)("button",{className:U.a.buttonClassbz,onClick:function(){return document.getElementById("Medadditem").style.display="flex"},children:"ADD ITEM"})}),Object(o.jsxs)("div",{className:U.a.desdiv,children:[Object(o.jsxs)(i.b,{to:"/start",children:[" ",Object(o.jsx)("button",{className:U.a.buttonClassbz,children:"Log Out"})," "]}),Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)(i.b,{to:"/storemanager",style:{fontSize:"50px",color:"yellow"},children:Object(o.jsx)("i",{class:"fas fa-user-tie"})})]})]}),Object(o.jsxs)("div",{className:U.a.contentArea,children:[Object(o.jsxs)("div",{id:"Medadditem",className:U.a.Medadditem,children:[Object(o.jsx)("input",{id:"addMediname",type:Text,placeholder:"Name",className:U.a.addform}),Object(o.jsx)("input",{id:"addMediManufacturer",type:Text,placeholder:"Manufacturer",className:U.a.addform}),Object(o.jsx)("input",{id:"addMediPrice",type:Text,placeholder:"Price",className:U.a.addform}),Object(o.jsx)("input",{id:"addMediDiscount",type:Text,placeholder:"Discount",className:U.a.addform}),Object(o.jsx)("input",{id:"addMediStock",type:Text,placeholder:"Stock",className:U.a.addform}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:U.a.buttonClass1,onClick:function(){!function(){var t=document.getElementById("addMediname").value,n=document.getElementById("addMediManufacturer").value,a=document.getElementById("addMediPrice").value,d=document.getElementById("addMediDiscount").value,i=document.getElementById("addMediStock").value,r=new Date;if(""===t||""===n||""===a||""===d||""===i)alert("please fill all fields");else{var l={id:r.getTime(),Name:t,MafName:n,Price:a,Discount:d,Stock:i};e.push(l),localStorage.setItem("MedicineStock",JSON.stringify(e)),s(c+1),document.getElementById("Medadditem").style.display="none"}}()},children:"ADD ITEM"}),Object(o.jsx)("button",{className:U.a.buttonClass1,onClick:function(){return document.getElementById("Medadditem").style.display="none"},children:"close"})]})]}),Object(o.jsx)("div",{className:U.a.medHolder,children:e.map((function(e){return Object(o.jsx)(J,Object(l.a)({},e))}))})]})]})},J=function(e){var t=e.id,n=e.Name,a=e.MafName,c=e.Price,s=e.Discount,d=e.Stock,r="/CRUDmed?id="+t;return Object(o.jsx)(i.b,{to:r,style:{width:"22%",margin:"0 15px"},children:Object(o.jsxs)("div",{className:U.a.itemDetail,children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("h3",{children:a}),Object(o.jsxs)("h3",{children:["Rs ",Object(o.jsx)("span",{children:c}),",    ",Object(o.jsxs)("span",{class:"margining",id:"discount",children:[s,Object(o.jsx)("span",{children:"% off"})]})]}),Object(o.jsxs)("p",{children:["Stock: ",Object(o.jsx)("span",{children:d})]})]})})},A=n(10),H=n.n(A),L=function(e){var t=Object(r.g)().search,n=new URLSearchParams(t).get("id");console.log(n);var a,c=JSON.parse(localStorage.getItem("MedicineStock"));console.log(a);return Object(o.jsxs)("div",{className:H.a.maindiv,children:[function(){for(var e=0;e<c.length;e++)if(c[e].id==n){a=c[e];break}}(),Object(o.jsxs)("nav",{className:H.a.mnginvnav,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Admin"})]}),Object(o.jsx)("h2",{children:"Inventory Management"})]}),Object(o.jsxs)("div",{className:H.a.desdiv,children:[Object(o.jsxs)(i.b,{to:"/start",children:[" ",Object(o.jsx)("button",{className:H.a.buttonClass4,children:"Log Out"})," "]}),Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)(i.b,{to:"/storemanager",style:{fontSize:"50px",color:"yellow"},children:Object(o.jsx)("i",{class:"fas fa-user-tie"})})]})]}),Object(o.jsxs)("div",{className:H.a.formdiv,children:[Object(o.jsx)("h1",{children:"Manage Medicine"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{id:"medName1",className:H.a.medName1,contentEditable:"true",children:a.Name}),Object(o.jsxs)("p",{id:"mafName1",className:H.a.mafName1,contentEditable:!0,children:[a.MafName," "]}),Object(o.jsx)("p",{id:"stock1",className:H.a.stock1,contentEditable:"true",children:a.Stock}),Object(o.jsx)("p",{id:"price1",className:H.a.price1,contentEditable:!0,children:a.Price}),Object(o.jsx)("p",{id:"discount1",className:H.a.discount1,contentEditable:!0,children:a.Stock})]}),Object(o.jsxs)("div",{className:H.a.buttonDiv,children:[Object(o.jsx)(i.b,{to:"/medInv",onClick:function(){return function(){var e,t;for(t=0;t<c.length;t++)if(c[t].id==n){e=c[t];break}var a={id:e.id,Name:document.getElementById("medName1").innerText,MafName:document.getElementById("mafName1").innerText,Price:document.getElementById("price1").innerText,Discount:document.getElementById("discount1").innerText,Stock:document.getElementById("stock1").innerText};c[t]=a,localStorage.setItem("MedicineStock",JSON.stringify(c))}()},children:Object(o.jsx)("button",{className:H.a.buttonClass4,id:"update",children:"Update"})}),Object(o.jsx)(i.b,{to:"/medInv",onClick:function(){return function(){for(var e,t=0;t<c.length;t++)if(c[t].id==n){e=t;break}localStorage.setItem("MedicineStock",JSON.stringify(c.slice(0,e).concat(c.slice(e+1))))}()},children:Object(o.jsx)("button",{className:H.a.buttonClass4,id:"delete",children:"Delete"})})]})]})]})},F=n(5),z=n.n(F),G=function(){var e=JSON.parse(localStorage.getItem("TeamStock")),t=Object(a.useState)(e.length),n=Object(u.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)("div",{className:z.a.maindiv,children:[Object(o.jsxs)("nav",{className:z.a.mnginvnav,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(o.jsx)("h3",{id:"name",children:"Admin"})]}),Object(o.jsx)("h2",{children:"Team Management"})]}),Object(o.jsx)("div",{className:z.a.head,children:Object(o.jsx)("button",{className:z.a.buttonClassaz,onClick:function(){return document.getElementById("addMember").style.display="flex"},children:"ADD ITEM"})}),Object(o.jsxs)("div",{className:z.a.desdiv,children:[Object(o.jsxs)(i.b,{to:"/start",children:[" ",Object(o.jsx)("button",{className:z.a.buttonClassaz,children:"Log Out"})," "]}),Object(o.jsx)("h3",{id:"des",children:"Store Manager"}),Object(o.jsx)(i.b,{to:"/storemanager",style:{fontSize:"50px",color:"yellow"},children:Object(o.jsx)("i",{class:"fas fa-user-tie"})})]})]}),Object(o.jsxs)("div",{className:z.a.contentArea,children:[Object(o.jsxs)("div",{id:"addMember",className:z.a.addMember,children:[Object(o.jsx)("input",{type:Text,placeholder:"First Name",className:z.a.addform,id:"firstname"}),Object(o.jsx)("input",{type:Text,placeholder:"Second Name",className:z.a.addform,id:"secondname"}),Object(o.jsx)("input",{type:Text,placeholder:"Gender",className:z.a.addform,id:"gender"}),Object(o.jsx)("input",{type:Text,placeholder:"Date of Birth",className:z.a.addform,id:"dob"}),Object(o.jsx)("input",{type:Text,placeholder:"Experience",className:z.a.addform,id:"experience"}),Object(o.jsx)("input",{type:"password",placeholder:"Password",className:z.a.addform,id:"pass"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return function(){var t={id:(new Date).getTime(),First_name:document.getElementById("firstname").value,Second_name:document.getElementById("secondname").value,Avatar:"fas fa-user-tie",DOB:document.getElementById("dob").value,Gender:document.getElementById("gender").value,Exp:document.getElementById("experience").value,Password:document.getElementById("pass").value,img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};e.push(t),localStorage.setItem("TeamStock",JSON.stringify(e)),s(c+1),document.getElementById("addMember").style.display="none"}()},className:z.a.buttonClass2,children:"ADD MEMBER"}),Object(o.jsx)("button",{className:z.a.buttonClass2,onClick:function(){return document.getElementById("addMember").style.display="none"},children:"close"})]})]}),Object(o.jsx)("div",{className:z.a.TeamHolder,children:e.map((function(e){return Object(o.jsx)(W,Object(l.a)({},e))}))})]})]})},W=function(e){var t=e.id,n=e.First_name,a=e.Second_name,c=e.Gender,s=e.Exp,d=e.img,r=e.Password,l=e.DOB,j="/CRUDteam?id="+t;return Object(o.jsx)(i.b,{to:j,style:{width:"24%",margin:"3% 15px"},children:Object(o.jsxs)("div",{className:z.a.TeamDetail,children:[Object(o.jsx)("div",{className:z.a.teamImg,children:Object(o.jsx)("img",{src:d})}),Object(o.jsxs)("div",{className:z.a.memdetail,children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{id:"firstName",className:z.a.firstName,children:n}),Object(o.jsx)("span",{children:a})]}),Object(o.jsx)("h4",{children:c}),Object(o.jsxs)("h4",{children:["DOB: ",l]}),Object(o.jsxs)("h4",{children:["Exp Years:  ",s," "]}),Object(o.jsx)("h4",{children:r})]})]})})},q=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/storemanager",component:D}),Object(o.jsx)(r.b,{path:"/sales",component:N}),Object(o.jsx)(r.b,{path:"/medInv",component:R}),Object(o.jsx)(r.b,{path:"/myteam",component:G}),Object(o.jsx)(r.b,{path:"/order",component:j}),Object(o.jsx)(r.b,{path:"/CRUDmed",component:L}),Object(o.jsx)(r.b,{path:"/CRUDteam",component:h}),Object(o.jsx)(r.b,{path:"/CRUDorder",component:E}),Object(o.jsx)(r.b,{path:"/NewOrder",component:O}),Object(o.jsx)(r.b,{path:"/exeordupexe",component:_}),Object(o.jsx)(r.b,{path:"/start",component:f}),Object(o.jsx)(f,{})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,d=t.getTTFB;n(e),a(e),c(e),s(e),d(e)}))};d.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root")),Y()},5:function(e,t,n){e.exports={maindiv:"teamHome_maindiv__2odO0",mnginvnav:"teamHome_mnginvnav__3_KiO",head:"teamHome_head__1_SGv",desdiv:"teamHome_desdiv__3gN9I",teamImg:"teamHome_teamImg__15Z7_",firstName:"teamHome_firstName__jjPDk",contentArea:"teamHome_contentArea__lRpcm",TeamHolder:"teamHome_TeamHolder__aDX_B",TeamDetail:"teamHome_TeamDetail__27V78",memdetail:"teamHome_memdetail__3A-wJ",buttonClassaz:"teamHome_buttonClassaz__lpa9E",buttonClass2:"teamHome_buttonClass2__23cQD",addMember:"teamHome_addMember__2cGcM",addform:"teamHome_addform__2X8UY"}},7:function(e,t,n){e.exports={maindiv:"medicineStore_maindiv__3SRpD",mnginvnav:"medicineStore_mnginvnav__2WgS3",head:"medicineStore_head__1Y9UW",desdiv:"medicineStore_desdiv__3scbW",contentArea:"medicineStore_contentArea__3KBF6",medHolder:"medicineStore_medHolder__34q41",itemDetail:"medicineStore_itemDetail__3Rb6j",invNo:"medicineStore_invNo__2tIel",buttonClassbz:"medicineStore_buttonClassbz__2e3eY",buttonClass1:"medicineStore_buttonClass1__3gvkv",Medadditem:"medicineStore_Medadditem__2hgvB",addform:"medicineStore_addform__52ThW"}}},[[40,1,2]]]);
//# sourceMappingURL=main.e487768d.chunk.js.map