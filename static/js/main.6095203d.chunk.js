(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,r){},52:function(e,t,r){e.exports=r(99)},59:function(e,t,r){e.exports=r.p+"static/media/computer.724e3bc3.png"},60:function(e,t,r){e.exports=r.p+"static/media/human.e23fb818.png"},99:function(e,t,r){"use strict";r.r(t);var a,n,o=r(0),i=r.n(o),l=r(28),s=r.n(l),c=(r(31),r(18)),p=r(7),u=r(8),h=r(12),d=r(9),y=r(11),f=r(2);function v(e,t,r,a,n,o){if(g(e))return t.searchOptions.evaluationFunction(e,t,r);if(0==a)return t.searchOptions.evaluationFunction(e,t,r);var i=Number.MAX_SAFE_INTEGER,l=b(e);for(var s in l){var c=m(C(O(e),l[s],r),t,r,a-1,n,o);if(i=Math.min(i,c),(o=Math.min(o,c))<=n)return c}return i}function m(e,t,r,a,n,o){if(g(e))return t.searchOptions.evaluationFunction(e,t,r);if(0==a)return t.searchOptions.evaluationFunction(e,t,r);var i=Number.MIN_SAFE_INTEGER,l=b(e);for(var s in l){var c=v(C(O(e),l[s],t),t,r,a-1,n,o);if(i=Math.max(i,c),(n=Math.max(n,i))>=o)return i}return i}function g(e){if(k(a.player1,e)||k(a.player2,e))return!0;for(var t=0,r=0;r<x;r++)e[0][r]!=a.nobody&&t++;return t===x}function b(e){for(var t=[],r=0;r<x;r++)e[0][r]===a.nobody&&t.push(r);return t}function C(e,t,r){for(var n=j-1,o=0;o<j;o++)e[o][t]!=a.nobody&&n--;if(n<0)throw console.error(n,e),new Error("Illegal move");return e[n][t]=r.label,e}function O(e){for(var t=[],r=0;r<j;r++){t[r]=[];for(var a=0;a<x;a++)t[r][a]=e[r][a]}return t}function P(e,t){var r=0;return r+=function(e,t){for(var r=0,n=0;n<x;n++){for(var o=0,i=0,l=j-1;l>=0;l--)e[l][n]===t.label?(o++,i++):e[l][n]!=a.nobody?(o=0,i=0):i++;i>=w&&(r+=Math.pow(o,F))}return r}(e,t),r+=function(e,t){for(var r=0,n=0;n<j;n++){for(var o=0,i=0,l=0;l<x;l++)e[n][l]===t.label?(o++,i++):e[n][l]!=a.nobody?(i>=w&&(r+=Math.pow(o,F)),o=0,i=0):i++;i>=w&&(r+=Math.pow(o,F))}return r}(e,t),r+=function(e,t){for(var r=0,n=0;n<j-w;n++)for(var o=0;o<x-w;o++){for(var i=0,l=0,s=0;s<w;s++)e[n+s][o+s]==t.label?(i++,l++):e[n+s][o+s]!=a.nobody?(i=0,l=0):l++;l>=w&&(r+=Math.pow(i,F))}return r}(e,t),r+=function(e,t){for(var r=0,n=j-1;n>w;n--)for(var o=0;o<x-w;o++){for(var i=0,l=0,s=0;s<w;s++)e[n-s][o+s]==t.label?(i++,l++):e[n-s][o+s]!=a.nobody?(i=0,l=0):l++;l>=w&&(r+=Math.pow(i,F))}return r}(e,t)}function k(e,t){for(var r=0,a=0;a<j;a++)for(var n=0;n<=x-w;n++){for(var o=0;o<w;o++)t[a][n+o]===e&&r++;if(r===w)return{x1:n,y1:a,x2:n+w-1,y2:a};r=0}for(var i=0;i<=j-w;i++)for(var l=0;l<x;l++){for(var s=0;s<w;s++)t[i+s][l]===e&&r++;if(r===w)return{x1:l,y1:i,x2:l,y2:i+w-1};r=0}for(var c=0;c<=j-w;c++)for(var p=0;p<=x-w;p++){for(var u=0;u<w;u++)t[c+u][p+u]===e&&r++;if(r===w)return{x1:p,y1:c,x2:p+w-1,y2:c+w-1};r=0}for(var h=j-1;h>=w;h--)for(var d=0;d<=x-w;d++){for(var y=0;y<w;y++)t[h-y][d+y]===e&&r++;if(r===w)return{x1:d,y1:h,x2:d+w-1,y2:h-w+1};r=0}return!1}(n=a||(a={})).nobody="nobody",n.player1="Player1",n.player2="Player2";var E,x=7,j=6,w=4,G=70,S=G-7,B=5,I="white",M=["red","orange","green","blue","aqua","purple","deepPink","black"],N=["1","2","3","4","5","6","7"],R=["Simple","Complex"],A={Simple:function(e,t,r){return k(t.label,e)?1:k(r.label,e)?-1:0},Complex:function(e,t,r){return k(t.label,e)?Number.MAX_SAFE_INTEGER:k(r.label,e)?Number.MIN_SAFE_INTEGER:P(e,t)-P(e,r)}},F=3,T=r(98),W=r(59),_=r(60),X=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).overlayPiece=function(e){if(!r.props.winner&&!E){var t=r.getColumn(e);if(!(t>=x)){var a=r.props.turn%2===1?r.props.player1:r.props.player2;a.computer?T.select("#inputOverlay").attr("fill",I):T.select("#inputOverlay").attr("fill",a.color).transition().duration(150).ease(T.easeElastic).attr("cx",t*G+G/2+B).attr("cy",G/2).attr("r",S/2)}}},r.clickToPlacePiece=function(e){if(!r.props.winner&&!E){var t=r.props.turn%2===1?r.props.player1:r.props.player2;if(!t.computer){var a=r.getColumn(e);a>=x||r.placePiece(a,t)}}},r.getColumn=function(e){var t=document.getElementById("Board").getBoundingClientRect(),r=e.clientX-t.left;e.clientY,t.top;return(r-B-(r-B)%G)/G},r.onBoardChange=r.onBoardChange.bind(Object(f.a)(Object(f.a)(r))),r.onWin=r.onWin.bind(Object(f.a)(Object(f.a)(r))),E=!1,r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"computerMove",value:function(){var e=this.props.turn%2==1?this.props.player1:this.props.player2;if(e.computer){var t=function(e,t,r){var a=b(r),n=[],o=Number.MIN_SAFE_INTEGER,i=e.searchOptions;if(!i)throw Error("getting move for human");var l=i.depth;for(var s in a){var c=v(C(O(r),a[s],e),e,t,l,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);c>o?(o=c,(n=[]).push(a[s])):c===o&&n.push(a[s])}return n[Math.floor(n.length*Math.random())]}(e,e.label===a.player1?this.props.player2:this.props.player1,this.props.board);if(null===t)throw Error("next move not calculated");this.placePiece(t,e)}}},{key:"onBoardChange",value:function(e,t){var r=this;this.props.onBoardChange(e,t,function(){return r.computerMove()})}},{key:"onWin",value:function(e,t){this.props.onWin(e,t)}},{key:"placePiece",value:function(e,t){for(var r=this,n=j-1,o=0;o<j;o++)this.props.board[o][e]!=a.nobody&&n--;if(!(n<0)){T.select("#Board").append("circle").attr("id","piece"+this.props.turn).attr("class",t.label).attr("fill",t.color).attr("cx",e*G+G/2+B).attr("cy",G/2).attr("r",S/2),E=!0;var i=this.props.board;i[n][e]=t.label,T.select("#inputOverlay").attr("fill",I),T.select("#piece"+this.props.turn).transition().duration(400).ease(T.easeBounce).attr("cx",e*G+G/2+B).attr("cy",n*G+G/2+G+B).attr("r",S/2).transition().duration(100).on("end",function(){r.piecePlaced(t,i)})}}},{key:"piecePlaced",value:function(e,t){var r=k(e.label,t);r?(this.onWin(e,t),this.showWinner(r,e)):this.onBoardChange(t,this.props.turn+1),E=!1}},{key:"showWinner",value:function(e,t){T.select("#inputOverlay").attr("fill",I),T.select("#Board").append("line").attr("id","winLineOuter").attr("stroke-width","8").attr("stroke-linecap","round").attr("stroke","black").attr("x1",this.getPieceXCoordinates(e.x1)).attr("y1",this.getPieceYCoordinates(e.y1)).attr("x2",this.getPieceXCoordinates(e.x1)).attr("y2",this.getPieceYCoordinates(e.y1)),T.select("#Board").append("line").attr("id","winLineInner").attr("stroke-width","5").attr("stroke-linecap","round").attr("stroke","white").attr("x1",this.getPieceXCoordinates(e.x1)).attr("y1",this.getPieceYCoordinates(e.y1)).attr("x2",this.getPieceXCoordinates(e.x1)).attr("y2",this.getPieceYCoordinates(e.y1)),T.select("#winLineOuter").transition().ease(T.easeExp).duration(200*w).attr("x2",this.getPieceXCoordinates(e.x2)).attr("y2",this.getPieceYCoordinates(e.y2)),T.select("#winLineInner").transition().ease(T.easeExp).duration(200*w).attr("x2",this.getPieceXCoordinates(e.x2)).attr("y2",this.getPieceYCoordinates(e.y2))}},{key:"getPieceXCoordinates",value:function(e){return e*G+G/2+B}},{key:"getPieceYCoordinates",value:function(e){return e*G+G+G/2+B}},{key:"drawBoard",value:function(){var e=this,t=0,r=0;this.props.board.forEach(function(a){a.forEach(function(a){T.select("#Board").append("circle").attr("cx",e.getPieceXCoordinates(r)).attr("cy",e.getPieceYCoordinates(t)).attr("r",S/2).attr("fill",I),r++}),r=0,t++})}},{key:"resetBoard",value:function(){T.selectAll("."+this.props.player1.label).remove(),T.selectAll("."+this.props.player2.label).remove(),T.selectAll("#winLineOuter").remove(),T.selectAll("#winLineInner").remove(),T.select("#inputOverlay").attr("fill",I)}},{key:"getImageAndPlayer",value:function(){var e,t=this.props.turn%2;switch(t){case 1:e=this.props.player1;break;default:e=this.props.player2,t=2}return{currentPlayer:e,playerNum:t,image:e.computer?W:_}}},{key:"updateHeading",value:function(){var e=this.getImageAndPlayer();if(this.props.winner){var t=e.image;T.select("#headingText").attr("fill",e.currentPlayer.color).text(this.props.winner.label+" Wins!"),T.select("#leftImage").attr("xlink:href",t),T.select("#rightImage").attr("xlink:href",t)}else this.props.turn>x*j?(T.select("#headingText").attr("fill","SteelBlue").text("Tie Game"),T.select("#leftImage").remove(),T.select("#rightImage").remove()):(T.select("#headingText").attr("fill",e.currentPlayer.color).text("Player "+e.playerNum+"'s turn"),T.select("#leftImage").attr("xlink:href",e.image),T.select("#rightImage").attr("xlink:href",e.image))}},{key:"componentDidUpdate",value:function(){if(this.updateHeading(),this.props.started){if(1===this.props.turn&&this.computerMove(),T.selectAll("."+this.props.player1.label).attr("fill",this.props.player1.color),T.selectAll("."+this.props.player2.label).attr("fill",this.props.player2.color),!this.props.winner){var e=this.props.turn%2===1?this.props.player1:this.props.player2;T.select("#inputOverlay").attr("fill",e.computer?I:e.color)}}else this.resetBoard()}},{key:"componentDidMount",value:function(){T.select("#Board").append("rect").attr("x",0).attr("y",1*G).attr("width",G*x+2*B).attr("height",G*j+2*B).attr("fill","yellow");for(var e=0;e<=x;e++)T.select("#Board").append("line").attr("x1",e*G+B).attr("x2",e*G+B).attr("y1",7).attr("y2",1*G-7).attr("stroke-width","2").attr("stroke-linecap","round").attr("stroke","SteelBlue");this.drawBoard(),T.select("#Board").append("circle").attr("id","inputOverlay").attr("cx",G/2+B).attr("cy",G/2).attr("r",S/2).attr("fill",I);var t=this.getImageAndPlayer();T.select("#Heading").append("text").attr("id","headingText").attr("x",G*x/2).attr("y",G/2).attr("font-family","sans-serif").attr("font-size","30px").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("fill",t.currentPlayer.color).text("Player "+t.playerNum+"'s turn"),T.select("#Heading").append("svg:image").attr("id","leftImage").attr("xlink:href",t.image).attr("x",110).attr("y",G/2-15).attr("width",30).attr("height",30),T.select("#Heading").append("svg:image").attr("id","rightImage").attr("xlink:href",t.image).attr("x",G*x-30-110).attr("y",G/2-15).attr("width",30).attr("height",30)}},{key:"render",value:function(){return i.a.createElement("div",{id:"boardContainer"},i.a.createElement("div",{id:"headingContainer"},i.a.createElement("svg",{id:"Heading",width:G*x,height:G})),i.a.createElement("svg",{id:"Board",onPointerMove:this.overlayPiece,onMouseOver:this.overlayPiece,onClick:this.clickToPlacePiece,width:G*x+2*B,height:G*(j+1)+2*B}))}}]),t}(o.Component),Y=r(101),H=r(97),L=r(45),D=(r(32),r(17)),z=r.n(D),J=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.manageColors({value:r.props.player.color}),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"manageColors",value:function(e){var t=e.value,r=this.props.player===this.props.player1?this.props.player2:this.props.player1,n=r.color,o=M.filter(function(e){return e!=n}),i=M.filter(function(e){return e!=t});r=Object(c.a)({},r,{color:n,colorOptions:i});var l=Object(c.a)({},this.props.player,{color:t,colorOptions:o});l.label==a.player1?this.onPlayerChange(l,r):this.onPlayerChange(r,l)}},{key:"render",value:function(){var e=this;return i.a.createElement(z.a,{options:this.props.player.colorOptions,onChange:function(t){return e.manageColors(t)},value:this.props.player.color,placeholder:"Choose a color"})}}]),t}(o.Component),V=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"onDepthChange",value:function(e){var t=+e.value,r=this.props.player;r.searchOptions.depth=t,r.label==a.player1?this.onPlayerChange(r,this.props.player2):this.onPlayerChange(this.props.player1,r)}},{key:"onEvalChange",value:function(e){var t=e.value,r=this.props.player;r.searchOptions.evaluationFunction=A[t],r.label==a.player1?this.onPlayerChange(r,this.props.player2):this.onPlayerChange(this.props.player1,r)}},{key:"render",value:function(){var e=this;return this.props.player.computer?i.a.createElement("div",{className:"computerOptions"},i.a.createElement("div",{className:"option"},"Search depth",i.a.createElement(z.a,{options:N,onChange:function(t){return e.onDepthChange(t)},value:this.props.player.searchOptions.depth.toString(),placeholder:"Search depth"})),i.a.createElement("div",{className:"option"},"Evaluation Function",i.a.createElement(z.a,{options:R,onChange:function(t){return e.onEvalChange(t)},value:this.props.player.searchOptions.evaluationFunction.name,placeholder:"Evaluation Function"}))):null}}]),t}(o.Component),q=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.onGameStart=r.onGameStart.bind(Object(f.a)(Object(f.a)(r))),r.onGameReset=r.onGameReset.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.props.onPlayerChange(e,t)}},{key:"onGameStart",value:function(){this.props.onGameStart()}},{key:"onGameReset",value:function(){this.props.onGameReset()}},{key:"onPlayerTypeChange",value:function(e,t){var r=e.target;r.name;t.computer="computer"===r.value,t.computer?t.searchOptions={depth:6,evaluationFunction:A.Complex}:t.searchOptions=void 0,t.label===a.player1?this.onPlayerChange(t,this.props.player2):this.onPlayerChange(this.props.player1,t)}},{key:"playerControls",value:function(e){var t=this;return i.a.createElement("div",{id:e.label},e.label+":",i.a.createElement("form",null,i.a.createElement(J,Object.assign({},this.props,{player:e})),i.a.createElement(Y.a,{onChange:function(){return t.onPlayerTypeChange(event,e)},bsStyle:"primary",type:"radio",name:e.label+"t",defaultValue:e.computer?"computer":"human"},i.a.createElement(H.a,{value:"human",disabled:1!=this.props.turn},"Human"),i.a.createElement(H.a,{value:"computer",disabled:1!=this.props.turn},"Computer")),i.a.createElement(V,Object.assign({},this.props,{player:e}))))}},{key:"gameControls",value:function(e){var t=this;return e.computer?i.a.createElement("div",{id:"gameControls"},i.a.createElement(L.a,{disabled:1!=this.props.turn,onClick:function(){return t.onGameStart()}},"Start Game"),i.a.createElement(L.a,{disabled:1==this.props.turn||!g(this.props.board),onClick:function(){return t.onGameReset()}},"Reset Game")):i.a.createElement("div",{id:"gameControls"},i.a.createElement(L.a,{disabled:1==this.props.turn,onClick:function(){return t.onGameReset()}},"Reset Game"))}},{key:"render",value:function(){return i.a.createElement("div",{id:"controlContainer"},this.gameControls(this.props.player1),this.playerControls(this.props.player1),this.playerControls(this.props.player2))}}]),t}(o.Component);function U(){for(var e=[],t=0;t<j;t++){e[t]=[];for(var r=0;r<x;r++)e[t][r]=a.nobody}return e}var $={board:U(),player1:{computer:!1,label:a.player1,color:"red",colorOptions:M},player2:{computer:!1,label:a.player2,color:"black",colorOptions:M},turn:1,started:!1,winner:!1},K=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state=void 0,r.state=Object(c.a)({},e),r.onPlayerChange=r.onPlayerChange.bind(Object(f.a)(Object(f.a)(r))),r.onBoardChange=r.onBoardChange.bind(Object(f.a)(Object(f.a)(r))),r.onWin=r.onWin.bind(Object(f.a)(Object(f.a)(r))),r.onGameStart=r.onGameStart.bind(Object(f.a)(Object(f.a)(r))),r.onGameReset=r.onGameReset.bind(Object(f.a)(Object(f.a)(r))),r}return Object(y.a)(t,e),Object(u.a)(t,[{key:"onPlayerChange",value:function(e,t){this.setState({player1:e,player2:t})}},{key:"onBoardChange",value:function(e,t,r){this.setState({board:e,turn:t,started:!0},function(){return r()})}},{key:"onWin",value:function(e){this.setState({winner:e})}},{key:"onGameStart",value:function(){this.setState({started:!0})}},{key:"onGameReset",value:function(){this.setState({board:U(),turn:this.props.turn,started:this.props.started,winner:!1})}},{key:"render",value:function(){return i.a.createElement("div",{id:"App"},i.a.createElement(X,Object.assign({},this.state,{onBoardChange:this.onBoardChange,onWin:this.onWin})),i.a.createElement(q,Object.assign({},this.state,{onPlayerChange:this.onPlayerChange,onGameStart:this.onGameStart,onGameReset:this.onGameReset})),i.a.createElement("div",{id:"Vizualization"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(K,$),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.6095203d.chunk.js.map