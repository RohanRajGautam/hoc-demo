(this["webpackJsonphoc-demo"]=this["webpackJsonphoc-demo"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(10),n(11),n(3)),i=n(4),s=function(e){return function(t){var n=t.dataSource,r=Object(i.a)(t,["dataSource"]),o=Object(a.useState)([]),s=Object(l.a)(o,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){return m(e.slice(0,5))}))}),[n]),c.a.createElement(e,Object.assign({data:u},r))}},u=s((function(e){var t=e.data,n=e.name,a=e.email;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,n),c.a.createElement("h2",null,a),"Posts:",t.map((function(e){return c.a.createElement("div",{className:"post"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.body))})))})),m=s((function(e){var t=e.data;return c.a.createElement("div",{className:"container user-list"},c.a.createElement("h1",null,"User List:"),t.map((function(e){return c.a.createElement("div",{className:"post",key:e.id},c.a.createElement("h1",null,e.name),c.a.createElement("h2",null,e.email," "))})))}));var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{dataSource:"https://jsonplaceholder.typicode.com/users"}),c.a.createElement(u,{name:"Rohan Gautam",email:"rohan@rrg.com.np",dataSource:"https://jsonplaceholder.typicode.com/posts"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a13c757f.chunk.js.map