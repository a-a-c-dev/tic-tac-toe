(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{26:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(7),a=c.n(i),s=c(0),j=r.a.memo((function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Tic Tac Toe"}),Object(s.jsx)("h3",{children:" Enjoy playing! "})]})})),o=c.p+"static/media/tic-tac-toe-bg-memo.860fd460.jpg",u=c(10),l=c.n(u),b=r.a.memo((function(){return Object(s.jsx)("div",{className:"background-container",children:Object(s.jsx)(l.a,{children:Object(s.jsx)("img",{src:o})})})})),O=c(4),x=c(11),m=c(2),d=c.p+"static/media/circle.1020cec2.svg",h=c.p+"static/media/x-icon.a474c10e.svg",f=r.a.memo((function(e){var t=e.squareDet;return Object(s.jsx)(s.Fragment,{children:"x"===t?Object(s.jsx)("img",{alt:"x",className:null===t?"not-acitve":" active",src:h}):Object(s.jsx)("img",{alt:"o",className:null===t?"not-active":" active",src:d})})})),v=function(e){var t=e.squareDet,c=e.squareClicked;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:c,children:Object(s.jsx)(f,{squareDet:t})})})},g=function(e){var t=e.squareClicked,c=e.squares;return Object(s.jsx)("div",{className:"squares",children:c.map((function(e,c){return Object(s.jsx)(v,{squareDet:e,squareClicked:function(e){return t(e,c)}},c)}))})},p=function(e){var t=e.initializeGame,c=e.value;return Object(s.jsx)("button",{onClick:t,type:"reset",className:"new-game-btn",children:c})},S=r.a.memo((function(e){var t=e.xScore,c=e.oScore;return Object(s.jsxs)("div",{className:"score",children:[Object(s.jsx)("h3",{children:"Total score:"}),Object(s.jsx)("p",{children:"X: ".concat(t," Circle: ").concat(c)})]})})),w=r.a.memo((function(e){var t=e.turn;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("p",{children:"Next Player: ".concat(t?"X":"O"," ")})})})),G=r.a.memo((function(e){var t=e.xScore,c=e.oScore,n=e.turn;return Object(s.jsxs)("div",{className:"contestant-score",children:[Object(s.jsx)(S,{xScore:t,oScore:c}),Object(s.jsx)(w,{turn:n})]})})),N=function(e){var t=e.score,c=e.turn,n=e.initializeGame;return Object(s.jsxs)("div",{className:"game-manage",children:[Object(s.jsx)(G,{xScore:t.x,oScore:t.o,turn:c}),Object(s.jsx)(p,{value:"Reset Game",initializeGame:n})]})},q=function(e){var t=e.initializeGame;return Object(s.jsxs)("div",{className:"winner-foter",children:[Object(s.jsx)("p",{children:"Would you like to play another one?"}),Object(s.jsx)(p,{value:"New Game",initializeGame:t})]})},z=r.a.memo((function(e){var t=e.turn,c=e.winner;return Object(s.jsx)("div",{children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"The Winner is ".concat(t?"Circle":"X"," ")}),Object(s.jsx)("h2",{children:"Well done ".concat(t?"Circle!":"X!")})]}):Object(s.jsx)("h2",{children:"It`s a draw!"})})})),k=function(e){var t=e.score,c=e.initializeGame,n=e.winner,r=e.turn;return Object(s.jsxs)("div",{className:"winner-container",children:[Object(s.jsx)(S,{xScore:t.x,oScore:t.o}),Object(s.jsx)(z,{winner:n,turn:r}),Object(s.jsx)(q,{initializeGame:c})]})},y=function(e){var t=e.score,c=e.isGameOver,n=e.winner,r=e.turn,i=e.initializeGame;return Object(s.jsx)(s.Fragment,{children:c||n?Object(s.jsx)(k,{score:t,winner:n,turn:r,initializeGame:i}):Object(s.jsx)(N,{score:t,winner:n,turn:r,initializeGame:i})})},C=function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(m.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)({x:0,o:0}),a=Object(m.a)(i,2),j=a[0],o=a[1],u=Object(n.useState)(!1),l=Object(m.a)(u,2),b=l[0],d=l[1],h=Object(n.useState)(1),f=Object(m.a)(h,2),v=f[0],p=f[1],S=Object(n.useState)(!0),w=Object(m.a)(S,2),G=w[0],N=w[1],q=Object(n.useMemo)((function(){return function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(m.a)(t[c],3),r=n[0],i=n[1],a=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[a])return e[r]}return null}(c)}),[c]);return Object(n.useEffect)((function(){p((function(e){return e+1})),v>9&&d(!0)}),[c]),Object(n.useEffect)((function(){1!==v&&o(G?function(e){return Object(O.a)(Object(O.a)({},e),{},{o:e.o+1})}:function(e){return Object(O.a)(Object(O.a)({},e),{},{x:e.x+1})})}),[q]),Object(s.jsxs)("div",{className:q?"board-container win":"board-container",children:[Object(s.jsx)(y,{score:j,isGameOver:b,winner:q,turn:G,initializeGame:function(){r(Array(9).fill(null)),d(!1),p(1)}}),Object(s.jsx)(g,{squareClicked:function(e,t){e.preventDefault();var n=Object(x.a)(c);q||n[t]||(n[t]=G?"x":"O",r(n),N(!G))},squares:c})]})},F=(c(9),function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{className:"game-container",children:[Object(s.jsx)(j,{}),Object(s.jsx)(C,{})]})]})});a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[26,1,2]]]);
//# sourceMappingURL=main.d214a4d0.chunk.js.map