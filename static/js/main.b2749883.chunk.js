(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,a){e.exports={message:"Message_message__3FG_E",avatar:"Message_avatar__1jx-M",content:"Message_content__1vT6S",angle:"Message_angle__2hpnW",text:"Message_text__36Zmm",name:"Message_name__15tmJ",time:"Message_time__3Bg2d"}},,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__2FvLo",error:"SuperInputText_error__ms9eA",errorInput:"SuperInputText_errorInput__8KEZe"}},,function(e,t,a){e.exports={default:"SuperButton_default__3yUaz",red:"SuperButton_red__kPfGz",disabled:"SuperButton_disabled__32cbx"}},function(e,t,a){e.exports={blue:"HW4_blue__18ctL",column:"HW4_column__1JtV7",testSpanError:"HW4_testSpanError__3O3IX"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2jHKE",spanClassName:"SuperCheckbox_spanClassName__3upUp"}},,function(e,t,a){e.exports={App:"App_App__Gd8T_"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),s=a.n(c),o=(a(20),a(14)),i=a.n(o),l=a(3),j=a.n(l),u=a(0);var d=function(e){return Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("img",{src:e.avatar,alt:"Avatar",className:j.a.avatar}),Object(u.jsx)("div",{className:j.a.angle}),Object(u.jsxs)("div",{className:j.a.content,children:[Object(u.jsx)("div",{className:j.a.name,children:e.name}),Object(u.jsx)("div",{className:j.a.text,children:e.message}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",m="some text",x="22:00";var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(d,{avatar:b,name:h,message:m,time:x}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=a(2),f=a(4),_=a(5),v=a(10),g=a.n(v),k=function(e){var t=e.red,a=e.className,n=Object(_.a)(e,["red","className"]),r="".concat(t?g.a.red:g.a.default," ").concat(a);return Object(u.jsx)("button",Object(f.a)({className:r},n))};var C=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[e.affair.name,e.affair.priority,Object(u.jsx)(k,{onClick:function(){e.deleteAffairCallback(e.affair.id)},children:"X"})]})})};var N=function(e){var t=e.data.map((function(t){return Object(u.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t.id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)(k,{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)(k,{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)(k,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)(k,{onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{id:1,name:"React",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:4,name:"work",priority:"high"},{id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(S),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(p.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,o);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(N,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e.id!==t}))}(a,e))},filter:o}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},w=a(15),A=a(8),T=a.n(A),E=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(T.a.error," ").concat(o||""),j="".concat(c?T.a.errorInput:T.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(f.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(u.jsx)("span",{className:l,children:c})]})},I=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers;return Object(u.jsxs)("div",{children:[Object(u.jsx)(E,{value:t,onChange:a,error:r}),Object(u.jsx)(k,{onClick:n,children:"add"}),Object(u.jsx)("span",{children:c})]})},M=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(p.a)(r,2),s=c[0],o=c[1],i=Object(n.useState)(""),l=Object(p.a)(i,2),j=l[0],d=l[1],b=t.length;return Object(u.jsx)(I,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:function(){""===s?d("Enter your name!"):(d(""),a(s),alert("Hello ".concat(s," !")),o(""))},error:j,totalUsers:b})},F=a(24);var U=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(M,{users:a,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};r([].concat(Object(w.a)(a),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},W=a(11),B=a.n(W),H=a(12),J=a.n(H),K=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(J.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(f.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(u.jsx)("span",{className:J.a.spanClassName,children:r})]})};var P=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},o=Object(n.useState)(!1),i=Object(p.a)(o,2),l=i[0],j=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:B.a.column,children:[Object(u.jsx)(E,{value:a,onChangeText:r,onEnter:s,error:c}),Object(u.jsx)(E,{className:B.a.blue}),Object(u.jsx)(k,{children:"default"}),Object(u.jsx)(k,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(k,{disabled:!0,children:"disabled"}),Object(u.jsx)(K,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(K,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var G=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(y,{}),Object(u.jsx)(U,{}),Object(u.jsx)(P,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.b2749883.chunk.js.map