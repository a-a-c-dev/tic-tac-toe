(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(8),r=c.n(i),s=c(0),j=function(){return Object(s.jsxs)("header",{children:[Object(s.jsxs)("h1",{children:["Tic Tac Toe",Object(s.jsx)("br",{})," game"]}),Object(s.jsx)("h3",{children:" Enjoy playing! "})]})},l=c(4),o=c(9),u=c(2),b=c.p+"static/media/circle.1020cec2.svg",O=c.p+"static/media/x-icon.a474c10e.svg",d=function(e){var t=e.squareDet,c=e.squareClicked;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:c,children:"x"===t?Object(s.jsx)("img",{alt:"x",className:null===t?"not-acitve":" active",src:O}):Object(s.jsx)("img",{alt:"o",className:null===t?"not-active":" active",src:b})})})},x=function(e){var t=e.initializeGame;return Object(s.jsx)("button",{onClick:t,type:"reset",className:"new-game-btn",children:"New Game"})},m=function(e){var t=e.score,c=e.turn,n=e.initializeGame;return Object(s.jsxs)("div",{className:"game-manage",children:[Object(s.jsxs)("div",{className:"contestant-score",children:[Object(s.jsx)("h3",{children:"Total score:"}),Object(s.jsx)("p",{children:"X:".concat(t.x," Circle:").concat(t.o)}),Object(s.jsx)("p",{children:" Next Player:  ".concat(c?"X":"O"," ")})]}),Object(s.jsx)(x,{initializeGame:n})]})},h=function(e){var t=e.score,c=e.initializeGame,n=e.winner,a=e.turn;return Object(s.jsxs)("div",{className:"winner-container",children:[n?Object(s.jsxs)("h2",{children:[(a?"O":"X")+" Is the winner Well done ","     "]}):Object(s.jsx)("h2",{children:"It`s a draw!"}),Object(s.jsxs)("h3",{children:["Total Score","X:".concat(t.x," Circle:").concat(t.o)]}),Object(s.jsx)("p",{children:"Would you like to play another one?"}),Object(s.jsx)(x,{initializeGame:c})]})},f=function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)({x:0,o:0}),r=Object(u.a)(i,2),j=r[0],b=r[1],O=Object(n.useState)(!1),x=Object(u.a)(O,2),f=x[0],v=x[1],g=Object(n.useState)(1),p=Object(u.a)(g,2),N=p[0],w=p[1],y=Object(n.useState)(!0),k=Object(u.a)(y,2),G=k[0],z=k[1],S=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(u.a)(t[c],3),a=n[0],i=n[1],r=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[r])return e[a]}return null}(c),C=function(){a(Array(9).fill(null)),v(!1),w(1)};return Object(n.useEffect)((function(){w((function(e){return e+1})),N>9&&v(!0)}),[c]),Object(n.useEffect)((function(){1!==N&&b(G?function(e){return Object(l.a)(Object(l.a)({},e),{},{o:e.o+1})}:function(e){return Object(l.a)(Object(l.a)({},e),{},{x:e.x+1})})}),[S]),Object(s.jsxs)("div",{className:"board-container",children:[f||S?Object(s.jsx)(h,{score:j,winner:S,turn:G,initializeGame:C}):Object(s.jsx)(m,{score:j,winner:S,turn:G,initializeGame:C}),Object(s.jsx)("div",{className:"squares",children:c.map((function(e,t){return Object(s.jsx)(d,{squareDet:e,squareClicked:function(e){return function(e,t){e.preventDefault();var n=Object(o.a)(c);S||n[t]||(n[t]=G?"x":"O",a(n),z(!G),console.log(N))}(e,t)}},t)}))})]})},v=c.p+"static/media/tic-tac-toe-bg.a8f6cff3.jpg",g=(c(7),function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"background-container",children:Object(s.jsx)("img",{src:v})}),Object(s.jsxs)("div",{className:"game-container",children:[Object(s.jsx)(j,{}),Object(s.jsx)(f,{})]})]})});r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.c7fd092b.chunk.js.map