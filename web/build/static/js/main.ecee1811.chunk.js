(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{42:function(t,n,e){t.exports=e(80)},77:function(t,n){},80:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(35),i=e.n(o),c=e(5),s=e(6),l=e(7),u=e(8),f=e(1),h=e(36),g=e.n(h),v=e(2);function p(){var t=Object(f.a)(["\n  padding-top: 10px;\n"]);return p=function(){return t},t}function b(){var t=Object(f.a)(["\n  list-style-type: none;\n"]);return b=function(){return t},t}var j=v.a.ul(b()),O=v.a.li(p()),m=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(t){var r;return Object(c.a)(this,e),(r=n.call(this,t)).state={logs:t.logs},r}return Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(t){var n=this,e=t.logs;this.setState((function(t){return n.state.logs=e,n.state}))}},{key:"render",value:function(){return a.a.createElement(j,{class:"nonBulletList"},this.state.logs.map((function(t){return a.a.createElement(O,null,a.a.createElement(g.a,{src:t}))})))}}]),e}(a.a.Component),d=e(10);function E(){var t=Object(f.a)(["\n  margin: 10px;\n  font-size: 20px;\n"]);return E=function(){return t},t}function k(){var t=Object(f.a)(["\n  margin: 20px 0;\n"]);return k=function(){return t},t}function y(){var t=Object(f.a)(["\n  margin: 0 10px;\n  border: none;\n  background-color: lightgray;\n  font-size: 15px;\n"]);return y=function(){return t},t}function C(){var t=Object(f.a)(["\n  padding: 8px;\n  background-color: black;\n  color: white;\n"]);return C=function(){return t},t}function L(){var t=Object(f.a)(["\n  margin: 0 10px\n"]);return L=function(){return t},t}function S(){var t=Object(f.a)(["\n  margin: 10px;\n"]);return S=function(){return t},t}var x=v.a.label(S()),T=v.a.input(L()),F=v.a.div(C()),w=v.a.button(y()),_=v.a.div(k()),J=v.a.textarea(E()),N=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(t){var r;return Object(c.a)(this,e),(r=n.call(this,t)).filtercb=t.filtercb,r.state={isOpen:!1,jsonFilter:""},r.clickEvent=r.clickEvent.bind(Object(d.a)(r)),r.jsonTransformationChange=r.jsonTransformationChange.bind(Object(d.a)(r)),r}return Object(s.a)(e,[{key:"stringFilterChange",value:function(t){var n=t.currentTarget.value;this.filtercb({type:"string",value:n})}},{key:"jsonFilterChange",value:function(t){this.setState({jsonFilter:t.currentTarget.value})}},{key:"clickEvent",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"jsonTransformationChange",value:function(){this.filtercb({type:"object",value:this.state.jsonFilter})}},{key:"render",value:function(){return a.a.createElement(F,null,a.a.createElement(x,null,"Filter:"),a.a.createElement(T,{onChange:this.stringFilterChange.bind(this)}),a.a.createElement(w,{onClick:this.clickEvent},"More"),this.state.isOpen&&a.a.createElement(_,null,a.a.createElement("div",null,a.a.createElement(x,null,"Log transformation:"),a.a.createElement("br",null),a.a.createElement(J,{value:this.state.jsonFilter,onChange:this.jsonFilterChange.bind(this),rows:"10",cols:"30"}),a.a.createElement(w,{onClick:this.jsonTransformationChange},"Apply"))))}}]),e}(a.a.Component),D=e(40),P=e.n(D);function W(){var t=Object(f.a)(["\n  text-align: left;\n  font-size: 15px;\n"]);return W=function(){return t},t}var z=v.a.div(W()),B=function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(t){var r;return Object(c.a)(this,e),(r=n.call(this,t)).port=t.port,r.startLogListener(),r.state={logs:[],shownLogs:[],filter:{string:"",object:""}},r}return Object(s.a)(e,[{key:"filterCallback",value:function(t){var n=this;this.setState((function(e){return n.state.filter[t.type]=t.value,n.state.shownLogs=n.processLogs({logs:n.state.logs,filter:n.state.filter}),e}))}},{key:"processLogs",value:function(t){var n=t.logs,e=t.filter,r=n;if(e.string.length>0&&(r=n.filter((function(t){return JSON.stringify(t).indexOf(e.string)>-1}))),e.object.length>0)try{var a=new Function("log","return ".concat(e.object));r=r.map((function(t){try{return a(t)}catch(n){return console.error("The transsformation function is invalid"),console.error({err:n}),t}}))}catch(o){}return r}},{key:"startLogListener",value:function(){var t=this,n=P()("http://localhost:".concat(this.port)),e=this;n.on("log",(function(n){try{var r=JSON.parse(n);e.state.logs.push(r),t.setState({shownLogs:e.processLogs({logs:e.state.logs,filter:e.state.filter})})}catch(a){console.error("Invalid JSON")}}))}},{key:"render",value:function(){return a.a.createElement(z,null,a.a.createElement(N,{filtercb:this.filterCallback.bind(this)}),a.a.createElement(m,{logs:this.state.shownLogs}))}}]),e}(a.a.Component);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),fetch("/port").then((function(t){return t.json()})).then((function(t){i.a.render(a.a.createElement(B,{port:t.port}),document.getElementById("root"))}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ecee1811.chunk.js.map