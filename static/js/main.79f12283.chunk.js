(this["webpackJsonptimer-hook"]=this["webpackJsonptimer-hook"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(6),u=a(23),i=a.n(u),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.model,a=void 0===t?"":t,n=e.brand,r=void 0===n?"":n,c=e.price,l=void 0===c?0:c,o=e.createdAt,u=void 0===o?0:o;return{type:"ADD_CAR",car:{id:i()(),model:a,brand:r,price:l,createdAt:u}}},m=a(30),E=a(49),s=a(24),p=a.n(s),f=a(26),v=(a(21),Object(o.b)()((function(e){var t=e.dispatch,a=e.id,c=e.brand,l=e.model,o=e.createdAt,u=e.price,i=Object(n.useState)(!0),d=Object(m.a)(i,2),s=d[0],v=d[1];return r.a.createElement("tr",null,r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,u),r.a.createElement("td",null,o),r.a.createElement("td",null,s?r.a.createElement(E.a,{onClick:function(){v(!1),setTimeout((function(){t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return{type:"REMOVE_CAR",id:t}}({id:a})),p.a.create("Hello world!",{body:"REMOVED!'?",timeout:4e3,onClick:function(){window.focus(),this.close()}})}),1e3)},variant:"danger"},"REMOVE"):r.a.createElement(f.a,{animation:"border",variant:"danger"})))}))),h=a(27),b=function(e,t){var a=t.text,n=t.sortBy,r=t.startDate,c=t.endDate;return e.filter((function(e){var t="number"!==typeof r||e.createdAt>=r,n="number"!==typeof c||e.createdAt<=r,l=e.model.toLowerCase().includes(a.toLowerCase());return t&&n&&l})).sort((function(e,t){return"date"===n?e.createdAt<t.createdAt?1:-1:"amount"===n?e.price<t.price?1:-1:void 0}))},A=Object(o.b)((function(e){return{cars:b(e.cars,e.filters)}}))((function(e){return r.a.createElement("div",null,r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Created At"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,e.cars.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))})))))})),O=Object(o.b)((function(e){return{filters:e.filters}}))((function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("select",{value:e.filters.sortBy,onChange:function(t){"date"===t.target.value?e.dispatch({type:"SORT_BY_DATE"}):"amount"===t.target.value&&e.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Price"))),r.a.createElement("p",null,"Sort BY"),r.a.createElement("input",{type:"text",value:e.filters.text,onChange:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_TEXT_FILTER",text:e}}(t.target.value))}}))})),T=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(A,null))},y=a(47),_=function(){return r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("h1",null,"404! "),r.a.createElement(y.a,{to:"/"},"Back home!"))},D=function(){return r.a.createElement("h1",{style:{textAlign:"center"}},"CarYab")},g=a(48),R=a(50),j=a(51),B=a(10),C=a(7),x=a(29),S=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAR":return[].concat(Object(x.a)(e),[t.car]);case"REMOVE_CAR":return e.filter((function(e){return e.id!==t.id}));case"EDIT_CAR":return e.map((function(e){return e.id===t.id?Object(C.a)({},e,{},t.updates):e}));default:return e}},k={text:"",sortBy:"date",startDate:void 0,endDate:void 0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(C.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(C.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(C.a)({},e,{sortBy:"amount"});case"SET_START_DATE":return Object(C.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(C.a)({},e,{endDate:t.endDate});default:return e}},Y=Object(B.c)(Object(B.b)({cars:w,filters:M}));Y.dispatch(d({brand:"saipa",model:"111",price:66e6,createdAt:88})),Y.dispatch(d({model:"141",price:6e7,createdAt:98,brand:"saipa"}));var I=r.a.createElement(o.a,{store:Y},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(R.a,null,r.a.createElement(j.a,{path:"/",component:T,exact:!0}),r.a.createElement(j.a,{path:"/home",component:function(){return r.a.createElement("h1",null,"hello")},exact:!0}),r.a.createElement(j.a,{component:_})))));l.a.render(I,document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.79f12283.chunk.js.map