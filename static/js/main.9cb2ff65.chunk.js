(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,r){"use strict";r.r(t);var a,n,o=r(0),i=r.n(o),l=r(28),s=r.n(l),c=(r(32),r(18)),p=r(5),u=r(6),h=r(9),d=r(7),y=r(8),f=r(2),m=r(29),v=r.n(m),b=r(48);function g(e,t,r,a,n,o){if(O(e))return t.searchOptions.evaluationFunction(e,t,r);if(0==a)return t.searchOptions.evaluationFunction(e,t,r);var i=Number.MAX_SAFE_INTEGER,l=k(e);for(var s in l){var c=C(P(j(e),l[s],r),t,r,a-1,n,o);if(i=Math.min(i,c),c<=n)return c;o=Math.min(o,c)}return i}function C(e,t,r,a,n,o){if(O(e))return t.searchOptions.evaluationFunction(e,t,r);if(0==a)return t.searchOptions.evaluationFunction(e,t,r);var i=Number.MIN_SAFE_INTEGER,l=k(e);for(var s in l){var c=g(P(j(e),l[s],t),t,r,a-1,n,o);if((i=Math.max(i,c))>=o)return i;n=Math.max(n,i)}return i}function O(e){if(w(a.player1,e)||w(a.player2,e))return!0;for(var t=0,r=0;r<B;r++)e[0][r]!=a.nobody&&t++;return t===B}function k(e){for(var t=[],r=0;r<B;r++)e[0][r]===a.nobody&&t.push(r);return t}function P(e,t,r){for(var n=G-1,o=0;o<G;o++)e[o][t]!=a.nobody&&n--;if(n<0)throw console.error(n,e),new Error("Illegal move");return e[n][t]=r.label,e}function j(e){for(var t=[],r=0;r<G;r++){t[r]=[];for(var a=0;a<B;a++)t[r][a]=e[r][a]}return t}function x(e,t,r){return w(t.label,e)?1:w(r.label,e)?-1:0}function E(e,t,r){return 0}function w(e,t){for(var r=0,a=0;a<G;a++)for(var n=0;n<=B-S;n++){for(var o=0;o<S;o++)t[a][n+o]===e&&r++;if(r===S)return{x1:n,y1:a,x2:n+S-1,y2:a};r=0}for(var i=0;i<=G-S;i++)for(var l=0;l<B;l++){for(var s=0;s<S;s++)t[i+s][l]===e&&r++;if(r===S)return{x1:l,y1:i,x2:l,y2:i+S-1};r=0}for(var c=0;c<=G-S;c++)for(var p=0;p<=B-S;p++){for(var u=0;u<S;u++)t[c+u][p+u]===e&&r++;if(r===S)return{x1:p,y1:c,x2:p+S-1,y2:c+S-1};r=0}for(var h=G-1;h>=S;h--)for(var d=0;d<=B-S;d++){for(var y=0;y<S;y++)t[h-y][d+y]===e&&r++;if(r===S)return{x1:d,y1:h,x2:d+S-1,y2:h-S+1};r=0}return!1}(n=a||(a={})).nobody="nobody",n.player1="Player1",n.player2="Player2";var B=7,G=6,S=4,I=70,N=I-7,R=5,A="white",M=["red","orange","green","blue","aqua","purple","deepPink","black"],W=["1","2","3","4","5","6","7","8","9","10"],F=["simple","complex"],T={simple:x,complex:E},X=r(46),_=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).overlayPiece=function(e){if(!r.props.winner){var t=r.getColumn(e);if(!(t>=B)){var a=r.props.turn%2===1?r.props.player1:r.props.player2;a.computer?X.select("#inputOverlay").attr("fill",A):X.select("#inputOverlay").attr("fill",a.color).transition().duration(150).ease(X.easeElastic).attr("cx",t*I+I/2+R).attr("cy",I/2).attr("r",N/2)}}},r.clickToPlacePiece=function(e){if(!r.props.winner){var t=r.getColumn(e);if(!(t>=B)){var a=r.props.turn%2===1?r.props.player1:r.props.player2;a.computer||r.placePiece(t,a)}}},r.getColumn=function(e){var t=document.getElementById("Board").getBoundingClientRect(),r=e.clientX-t.left;e.clientY,t.top;return(r-R-(r-R)%I)/I},r.onBoardChange=r.onBoardChange.bind(Object(f.a)(Object(f.a)(r))),r.onWin=r.onWin.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onBoardChange",value:function(e,t){this.props.onBoardChange(e,t)}},{key:"onWin",value:function(e){this.props.onWin(e)}},{key:"placePiece",value:function(e,t){for(var r=this,n=G-1,o=0;o<G;o++)this.props.board[o][e]!=a.nobody&&n--;if(!(n<0)){X.select("#Board").append("circle").attr("id","piece"+this.props.turn).attr("class",t.label).attr("fill",t.color).attr("cx",e*I+I/2+R).attr("cy",I/2).attr("r",N/2);var i=this.props.board;i[n][e]=t.label,X.select("#inputOverlay").attr("fill",A),X.select("#piece"+this.props.turn).transition().duration(400).ease(X.easeBounce).attr("cx",e*I+I/2+R).attr("cy",n*I+I/2+I+R).attr("r",N/2).on("end",function(){r.piecePlaced(t,i)})}}},{key:"piecePlaced",value:function(e,t){var r=w(e.label,t);r?(this.onWin(e),this.showWinner(r,e),this.onBoardChange(t,this.props.turn)):this.onBoardChange(t,this.props.turn+1)}},{key:"showWinner",value:function(e,t){X.select("#inputOverlay").attr("fill",A),X.select("#Board").append("line").attr("id","winLineOuter").attr("stroke-width","8").attr("stroke-linecap","round").attr("stroke","black").attr("x1",this.getPieceXCoordinates(e.x1)).attr("y1",this.getPieceYCoordinates(e.y1)).attr("x2",this.getPieceXCoordinates(e.x1)).attr("y2",this.getPieceYCoordinates(e.y1)),X.select("#Board").append("line").attr("id","winLineInner").attr("stroke-width","5").attr("stroke-linecap","round").attr("stroke","white").attr("x1",this.getPieceXCoordinates(e.x1)).attr("y1",this.getPieceYCoordinates(e.y1)).attr("x2",this.getPieceXCoordinates(e.x1)).attr("y2",this.getPieceYCoordinates(e.y1)),X.select("#winLineOuter").transition().ease(X.easeExp).duration(200*S).attr("x2",this.getPieceXCoordinates(e.x2)).attr("y2",this.getPieceYCoordinates(e.y2)),X.select("#winLineInner").transition().ease(X.easeExp).duration(200*S).attr("x2",this.getPieceXCoordinates(e.x2)).attr("y2",this.getPieceYCoordinates(e.y2))}},{key:"getPieceXCoordinates",value:function(e){return e*I+I/2+R}},{key:"getPieceYCoordinates",value:function(e){return e*I+I+I/2+R}},{key:"drawBoard",value:function(){var e=this,t=0,r=0;this.props.board.forEach(function(a){a.forEach(function(a){X.select("#Board").append("circle").attr("cx",e.getPieceXCoordinates(r)).attr("cy",e.getPieceYCoordinates(t)).attr("r",N/2).attr("fill",A),r++}),r=0,t++})}},{key:"resetBoard",value:function(){X.selectAll("."+this.props.player1.label).remove(),X.selectAll("."+this.props.player2.label).remove(),X.selectAll("#winLineOuter").remove(),X.selectAll("#winLineInner").remove()}},{key:"componentDidUpdate",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.started){e.next=3;break}return this.resetBoard(),e.abrupt("return");case 3:if(X.selectAll("."+this.props.player1.label).attr("fill",this.props.player1.color),X.selectAll("."+this.props.player2.label).attr("fill",this.props.player2.color),!this.props.winner){e.next=7;break}return e.abrupt("return");case 7:t=this.props.turn%2===1?this.props.player1:this.props.player2,X.select("#inputOverlay").attr("fill",t.computer?A:t.color),t.computer&&(r=this.computerMove(t),this.placePiece(r,t));case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"computerMove",value:function(e){return function(e,t,r){var a=k(r),n=0,o=Number.MIN_SAFE_INTEGER,i=e.searchOptions;if(!i)throw Error("getting result for human player");var l=i.depth;for(var s in a){var c=g(P(j(r),a[s],e),e,t,l,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);c>o&&(o=c,n=a[s])}return n}(e,e.label===a.player1?this.props.player2:this.props.player1,this.props.board)}},{key:"componentDidMount",value:function(){X.select("#Board").append("rect").attr("x",0).attr("y",1*I).attr("width",I*B+2*R).attr("height",I*G+2*R).attr("fill","yellow");for(var e=0;e<=B;e++)X.select("#Board").append("line").attr("x1",e*I+R).attr("x2",e*I+R).attr("y1",7).attr("y2",1*I-7).attr("stroke-width","2").attr("stroke-linecap","round").attr("stroke","SteelBlue");this.drawBoard(),X.select("#Board").append("circle").attr("id","inputOverlay").attr("cx",I/2+R).attr("cy",I/2).attr("r",N/2).attr("fill",A)}},{key:"render",value:function(){return i.a.createElement("div",{id:"boardContainer"},i.a.createElement("svg",{id:"Board",onPointerMove:this.overlayPiece,onMouseOver:this.overlayPiece,onClick:this.clickToPlacePiece,width:I*B+2*R,height:I*(G+1)+2*R}))}}]),t}(o.Component),Y=r(46),D=r(64),L=r(65),H=function(e){function t(e){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"getImageAndPlayer",value:function(){var e,t=this.props.turn%2;switch(t){case 1:e=this.props.player1;break;default:e=this.props.player2,t=2}return{currentPlayer:e,playerNum:t,image:e.computer?D:L}}},{key:"componentDidUpdate",value:function(){var e=this.getImageAndPlayer();if(this.props.winner){var t=e.image;Y.select("#headingText").attr("fill",e.currentPlayer.color).text(this.props.winner.label+" Wins!"),Y.select("#leftImage").attr("xlink:href",t),Y.select("#rightImage").attr("xlink:href",t)}else Y.select("#headingText").attr("fill",e.currentPlayer.color).text("Player "+e.playerNum+"'s turn"),Y.select("#leftImage").attr("xlink:href",e.image),Y.select("#rightImage").attr("xlink:href",e.image)}},{key:"componentDidMount",value:function(){var e=this.getImageAndPlayer();Y.select("#Heading").append("text").attr("id","headingText").attr("x",I*B/2).attr("y",I/2).attr("font-family","sans-serif").attr("font-size","30px").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("fill",e.currentPlayer.color).text("Player "+e.playerNum+"'s turn"),Y.select("#Heading").append("svg:image").attr("id","leftImage").attr("xlink:href",e.image).attr("x",110).attr("y",I/2-15).attr("width",30).attr("height",30),Y.select("#Heading").append("svg:image").attr("id","rightImage").attr("xlink:href",e.image).attr("x",I*B-30-110).attr("y",I/2-15).attr("width",30).attr("height",30)}},{key:"render",value:function(){return i.a.createElement("div",{id:"headingContainer"},i.a.createElement("svg",{id:"Heading",width:I*B,height:I}))}}]),t}(o.Component),z=r(105),J=r(102),U=r(47),V=(r(33),r(17)),q=r.n(V),$=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.manageColors({value:r.props.player.color}),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"manageColors",value:function(e){var t=e.value,r=this.props.player===this.props.player1?this.props.player2:this.props.player1,n=r.color,o=M.filter(function(e){return e!=n}),i=M.filter(function(e){return e!=t});r=Object(c.a)({},r,{color:n,colorOptions:i});var l=Object(c.a)({},this.props.player,{color:t,colorOptions:o});l.label==a.player1?this.onPlayerChange(l,r):this.onPlayerChange(r,l)}},{key:"render",value:function(){var e=this;return i.a.createElement(q.a,{options:this.props.player.colorOptions,onChange:function(t){return e.manageColors(t)},value:this.props.player.color,placeholder:"Choose a color"})}}]),t}(o.Component),K=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"onDepthChange",value:function(e){var t=+e.value,r=this.props.player;r.searchOptions.depth=t,r.label==a.player1?this.onPlayerChange(r,this.props.player2):this.onPlayerChange(this.props.player1,r)}},{key:"onEvalChange",value:function(e){var t=e.value,r=this.props.player;r.searchOptions.evaluationFunction=T[t],r.label==a.player1?this.onPlayerChange(r,this.props.player2):this.onPlayerChange(this.props.player1,r)}},{key:"render",value:function(){var e=this;return this.props.player.computer?i.a.createElement("div",{className:"computerOptions"},i.a.createElement("div",{className:"option"},"Search depth",i.a.createElement(q.a,{options:W,onChange:function(t){return e.onDepthChange(t)},value:this.props.player.searchOptions.depth.toString(),placeholder:"Search depth"})),i.a.createElement("div",{className:"option"},"Evaluation Function",i.a.createElement(q.a,{options:F,onChange:function(t){return e.onEvalChange(t)},value:"simple",placeholder:"Evaluation Function"}))):null}}]),t}(o.Component),Q=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.onGameStart=r.onGameStart.bind(Object(f.a)(Object(f.a)(r))),r.onGameReset=r.onGameReset.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"onGameStart",value:function(){this.props.onGameStart()}},{key:"onGameReset",value:function(){this.props.onGameReset()}},{key:"onPlayerTypeChange",value:function(e,t){var r=e.target;r.name;t.computer="computer"===r.value,t.computer?t.searchOptions={depth:7,evaluationFunction:T.simple}:t.searchOptions=void 0,t.label===a.player1?this.onPlayerChange(t,this.props.player2):this.onPlayerChange(this.props.player1,t)}},{key:"playerControls",value:function(e){var t=this;return i.a.createElement("div",{id:e.label},e.label+":",i.a.createElement("form",null,i.a.createElement($,Object.assign({},this.props,{player:e})),i.a.createElement(z.a,{onChange:function(){return t.onPlayerTypeChange(event,e)},bsStyle:"primary",type:"radio",name:e.label+"t",defaultValue:e.computer?"computer":"human"},i.a.createElement(J.a,{value:"human",disabled:1!=this.props.turn},"Human"),i.a.createElement(J.a,{value:"computer",disabled:1!=this.props.turn},"Computer")),i.a.createElement(K,Object.assign({},this.props,{player:e}))))}},{key:"gameControls",value:function(e){var t=this;return e.computer?i.a.createElement("div",{id:"gameControls"},i.a.createElement(U.a,{disabled:1!=this.props.turn,onClick:function(){return t.onGameStart()}},"Start Game"),i.a.createElement(U.a,{disabled:1==this.props.turn,onClick:function(){return t.onGameReset()}},"Reset Game")):i.a.createElement("div",{id:"gameControls"},i.a.createElement(U.a,{disabled:1==this.props.turn,onClick:function(){return t.onGameReset()}},"Reset Game"))}},{key:"render",value:function(){return i.a.createElement("div",{id:"controlContainer"},this.gameControls(this.props.player1),this.playerControls(this.props.player1),this.playerControls(this.props.player2))}}]),t}(o.Component);function Z(){for(var e=[],t=0;t<G;t++){e[t]=[];for(var r=0;r<B;r++)e[t][r]=a.nobody}return e}var ee={board:Z(),player1:{computer:!1,label:a.player1,color:"red",colorOptions:M},player2:{computer:!1,label:a.player2,color:"black",colorOptions:M},turn:1,started:!1,winner:!1},te=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state=void 0,r.state=Object(c.a)({},e),r.onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.onBoardChange=r.onBoardChange.bind(Object(f.a)(Object(f.a)(r))),r.onWin=r.onWin.bind(Object(f.a)(Object(f.a)(r))),r.onGameStart=r.onGameStart.bind(Object(f.a)(Object(f.a)(r))),r.onGameReset=r.onGameReset.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.setState({player1:e,player2:t})}},{key:"onBoardChange",value:function(e,t){this.setState({board:e,turn:t,started:!0})}},{key:"onWin",value:function(e){this.setState({winner:e})}},{key:"onGameStart",value:function(){this.setState({started:!0})}},{key:"onGameReset",value:function(){this.setState({board:Z(),turn:this.props.turn,started:this.props.started,winner:!1})}},{key:"render",value:function(){return i.a.createElement("div",{id:"App"},i.a.createElement(H,this.state),i.a.createElement(_,Object.assign({},this.state,{onBoardChange:this.onBoardChange,onWin:this.onWin})),i.a.createElement(Q,Object.assign({},this.state,{onPlayerChange:this.onPlayerChange,onGameStart:this.onGameStart,onGameReset:this.onGameReset})),i.a.createElement("div",{id:"Vizualization"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(te,ee),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,r){},55:function(e,t,r){e.exports=r(103)},64:function(e,t,r){e.exports=r.p+"static/media/computer.724e3bc3.png"},65:function(e,t,r){e.exports=r.p+"static/media/human.e23fb818.png"}},[[55,2,1]]]);
//# sourceMappingURL=main.9cb2ff65.chunk.js.map