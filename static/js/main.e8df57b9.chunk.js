(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),a=c(5),n=c.n(a),s=(c(10),c(3)),m=c(2),o=(c(11),c(12),c(0));var d=function(e){var t=e.card,c=e.handleChoice,i=e.flipped,r=e.disabled;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:i?"flipped":"",children:[Object(o.jsx)("img",{src:t.src,className:"front",alt:"card front"}),Object(o.jsx)("img",{src:"https://elixered.github.io/memory-magic/img/cover4.jpeg",className:"back",alt:"card back",onClick:function(){r||c(t)}})]})})},l=[{src:"https://elixered.github.io/memory-magic/img/helmet-1.png",matched:!1},{src:"https://elixered.github.io/memory-magic/img/potion-1.png",matched:!1},{src:"https://elixered.github.io/memory-magic/img/ring-1.png",matched:!1},{src:"https://elixered.github.io/memory-magic/img/scroll-1.png",matched:!1},{src:"https://elixered.github.io/memory-magic/img/shield-1.png",matched:!1},{src:"https://elixered.github.io/memory-magic/img/sword-1.png",matched:!1}];var u=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),c=t[0],r=t[1],a=Object(i.useState)(0),n=Object(m.a)(a,2),u=n[0],h=n[1],b=Object(i.useState)(null),j=Object(m.a)(b,2),g=j[0],p=j[1],O=Object(i.useState)(null),f=Object(m.a)(O,2),x=f[0],v=f[1],y=Object(i.useState)(!1),N=Object(m.a)(y,2),k=N[0],M=N[1],S=function(){p(null),v(null);var e=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Math.floor(Math.random())})}));r(e),h(0)},w=function(e){g?v(e):p(e)};Object(i.useEffect)((function(){g&&x&&(M(!0),g.src===x.src?(r(c.map((function(e){return e.src===g.src||e.src===x.src?Object(s.a)(Object(s.a)({},e),{},{matched:!0}):e}))),C()):setTimeout((function(){C()}),500))}),[g,x]),Object(i.useEffect)((function(){S()}),[]);var C=function(){p(null),v(null),h(u+1),M(!1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Magic Match"}),Object(o.jsx)("button",{onClick:S,children:"New Game"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(d,{card:e,handleChoice:w,flipped:e===g||e===x||e.matched,disabled:k},e.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",u]})]})};n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e8df57b9.chunk.js.map