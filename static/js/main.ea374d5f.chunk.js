(this["webpackJsonpmobile-typing-test"]=this["webpackJsonpmobile-typing-test"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(13),n(4)),i=n(5),l=n(1),h=n(7),u=n(6);n(14);var g=function(e,t){for(var n=Math.min(t.length,e.length),a=Math.min(t.length,e.length),r=0;r<t.length;r++)if(e.charAt(r)!==t.charAt(r)){n=r;break}return{right:n,wrong:a}},m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={text:"",userText:"",right:"",normal:"",wrong:"",errors:0},a.handleUserTextChange=a.handleUserTextChange.bind(Object(l.a)(a)),a.handleBackspace=a.handleBackspace.bind(Object(l.a)(a)),a.ref=r.a.createRef(),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/text.txt").then((function(e){return e.text()})).then((function(t){return e.setState({text:t,normal:t})}))}},{key:"handleUserTextChange",value:function(e){var t=e.target.value;this.setState((function(e){var n={};n.userText=t;var a=g(e.text,t),r=a.right,o=a.wrong;return n.right=e.text.slice(0,r),n.wrong=e.text.slice(r,o),n.wrong.length>e.wrong.length&&(n.errors=e.errors+1,console.log(n.errors)),n.normal=e.text.slice(o),n}))}},{key:"handleBackspace",value:function(e){8===e.keyCode&&(e.preventDefault(),console.log("delete"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("p",{ref:this.ref},r.a.createElement("span",{className:"right"},this.state.right),r.a.createElement("span",{className:"wrong"},this.state.wrong),r.a.createElement("span",{className:"normal"},this.state.normal)),r.a.createElement("input",{type:"text",value:this.state.userText,onChange:this.handleUserTextChange,onKeyDown:this.handleBackspace}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ea374d5f.chunk.js.map