(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=n(1),u=n(4);n(14);function i(e){var t=e.todo,n=e.toggleTodo;return o.a.createElement("div",{className:"main__div-checkBox"},o.a.createElement("label",{className:"main__label-checkBox"},o.a.createElement("input",{className:"main__checkBox",type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name))}function m(e){var t=e.todos,n=e.toggleTodo;return t.map(function(e){return o.a.createElement(i,{key:e.id,toggleTodo:n,todo:e})})}var s=n(17),d="todoApp.todos";var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)();return Object(a.useEffect)(function(){var e=JSON.parse(localStorage.getItem(d));e&&c(e)},[]),Object(a.useEffect)(function(){localStorage.setItem(d,JSON.stringify(n))},[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:"main__input-text",ref:r,type:"text"}),o.a.createElement("button",{className:"main__button-add shadow-pop-tr",onClick:function(e){var t=r.current.value;""!==t&&(c(function(e){return[].concat(Object(l.a)(e),[{id:Object(s.a)(),name:t,complete:!1}])}),r.current.value=null)}},"Ajouter"),o.a.createElement("button",{className:"main__button-delete shadow-pop-tr",onClick:function(){var e=n.filter(function(e){return!e.complete});c(e)}},"Supprimer"),o.a.createElement("div",{className:"main__nbToDo"},n.filter(function(e){return!e.complete}).length," \xe0 faire"),o.a.createElement(m,{todos:n,toggleTodo:function(e){var t=Object(l.a)(n),a=t.find(function(t){return t.id===e});a.complete=!a.complete,c(t)}}))};r.a.createRoot(document.querySelector(".main")).render(o.a.createElement(f,null))},5:function(e,t,n){e.exports=n(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.4102ae4a.chunk.js.map