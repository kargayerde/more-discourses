(this["webpackJsonplacanian-discourse-combinator"]=this["webpackJsonplacanian-discourse-combinator"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,c){},function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var i=c(1),s=c.n(i),t=c(6),n=c.n(t),r=(c(13),c(8)),l=c(3),o=c(7),m=(c(14),c(0)),j=function(e){var a=e.index,c=e.selectedMathemes,i=e.setSelectedMathemes,s=(e.placeholder,e.selectedValue);return Object(m.jsx)("select",{className:"matheme-selector",name:"mathemeInput",onChange:function(e){var s=e.target.value,t=c;t[a]="\xa0"===s?"\xa0":e.target.value,i(Object.assign([],Object(l.a)(t)))},children:(console.log("displayOptions"),[{value:"\xa0",displayValue:"\xa0"},{value:"S\u2081",displayValue:"S\u2081"},{value:"S\u2082",displayValue:"S\u2082"},{value:"$",displayValue:"$"},{value:"a",displayValue:"a"}].map((function(e){return Object(m.jsx)("option",{value:e.value,selected:e.value===s,disabled:"\xa0"!==e.value&&c.includes(e.value),children:e.value},e.value)})))})},d=(c(16),function(e){var a=[["S\u2082","a","$","S\u2081"],["S\u2081","S\u2082","a","$"],["$","S\u2081","S\u2082","a"],["a","$","S\u2081","S\u2082"]],c=a.find((function(a){return a.every((function(a,c){return a===e[c]}))})),i=["University Discourse","Master's Discourse","Hysteric's Discourse","Analyst's Discourse"][a.indexOf(c)];return void 0!==c?i:"Unknown Discourse"}),b=c.p+"static/media/tavarish.24013285.jpg",u=c.p+"static/media/bar.8e38f429.svg",g=c.p+"static/media/cwarrow.93b3e505.svg",O=(c.p,c.p+"static/media/impossibility.495c2197.svg"),p=c.p+"static/media/impotence.0124c1b5.svg",x=c.p+"static/media/necessity.4853de1a.svg",v=c.p+"static/media/contingency.0251d6d8.svg",h=c.p+"static/media/linarrow.3ebd577b.svg",y=(c(17),function(e){var a=e.selectedMathemes,c=e.setSelectedMathemes,i=["Agent","Other","Product","Truth"];return Object(m.jsxs)("div",{className:"discourse-container",children:[Object(m.jsx)("div",{children:d(a)}),Object(m.jsxs)("form",{className:"discourse-selector",children:[a.map((function(e,s){return Object(m.jsx)(j,{className:"matheme-selector",index:s,selectedMathemes:a,setSelectedMathemes:c,placeholder:i[s],selectedValue:a[s]},s)})),Object(m.jsx)("div",{className:"image-container bar-image-container",children:Object(m.jsx)("img",{className:"bar",alt:"bar",src:u})}),Object(m.jsx)("div",{className:"image-container bar-image-container",children:Object(m.jsx)("img",{className:"bar",alt:"bar",src:u})}),Object(m.jsx)("div",{className:"image-container impossibility-image-container",children:Object(m.jsx)("img",{className:"impossibility",alt:"impossibility",title:"impossibility",src:O})}),Object(m.jsx)("div",{className:"image-container impotence-image-container",children:Object(m.jsx)("img",{className:"impotence",alt:"impotence",title:"impotence",src:p})}),Object(m.jsx)("div",{className:"image-container necessity-image-container",children:Object(m.jsx)("img",{className:"necessity",alt:"necessity",title:"necessity",src:x})}),Object(m.jsx)("div",{className:"image-container contingency-image-container",children:Object(m.jsx)("img",{className:"contingency",alt:"contingency",title:"contingency",src:v})})]})]})}),N=(c(18),c(19),function(e){var a=e.displayValue,c=void 0===a?"-":a;return Object(m.jsx)("p",{className:"matheme-display",children:c})}),f=function(e){var a=e.displayValues;return Object(m.jsxs)("div",{className:"discourse-container",children:[Object(m.jsx)("div",{children:d(a)}),Object(m.jsxs)("form",{className:"discourse-display",children:[Object(m.jsx)(N,{displayValue:a[0]}),Object(m.jsx)(N,{displayValue:a[1]}),Object(m.jsx)(N,{displayValue:a[2]}),Object(m.jsx)(N,{displayValue:a[3]}),Object(m.jsx)("div",{className:"image-container bar-image-container",children:Object(m.jsx)("img",{className:"bar",alt:"bar",src:u})}),Object(m.jsx)("div",{className:"image-container bar-image-container",children:Object(m.jsx)("img",{className:"bar",alt:"bar",src:u})}),Object(m.jsx)("div",{className:"image-container impossibility-image-container",children:Object(m.jsx)("img",{className:"impossibility",alt:"impossibility",title:"impossibility",src:O})}),Object(m.jsx)("div",{className:"image-container impotence-image-container",children:Object(m.jsx)("img",{className:"impotence",alt:"impotence",title:"impotence",src:p})}),Object(m.jsx)("div",{className:"image-container necessity-image-container",children:Object(m.jsx)("img",{className:"necessity",alt:"necessity",title:"necessity",src:x})}),Object(m.jsx)("div",{className:"image-container contingency-image-container",children:Object(m.jsx)("img",{className:"contingency",alt:"contingency",title:"contingency",src:v})})]})]})},w=(c(20),function(){var e=Object(i.useState)(["\xa0","\xa0","\xa0","\xa0"]),a=Object(o.a)(e,2),c=a[0],s=a[1],t=function(e,a){for(var c=Object(l.a)(e),i=0;i<a;i++){var s=c.pop();c.unshift(s)}return c},n=function(e){var a=Object(l.a)(e),c=a[3];return a[3]=a[0],a[0]=c,a},j={selectedMathemes:c,setSelectedMathemes:s};return Object(m.jsxs)("div",{className:"outer-grid",children:[Object(m.jsx)("button",{onClick:function(e){s(Object.assign([],["\xa0","\xa0","\xa0","\xa0"]))},children:"Clear"}),Object(m.jsx)("div",{className:"custom-operation",children:Object(m.jsx)(f,{displayValues:n(c)})}),Object(m.jsx)("div",{className:"custom-operation2",children:Object(m.jsx)(f,{displayValues:t(n(c),1)})}),Object(m.jsx)("div",{className:"custom-operation3",children:Object(m.jsx)(f,{displayValues:t(n(c),2)})}),Object(m.jsx)("div",{className:"custom-operation4",children:Object(m.jsx)(f,{displayValues:t(n(c),3)})}),Object(m.jsx)("div",{className:"image-container linarrow-image-container",children:Object(m.jsx)("img",{className:"linarrow1",src:h,alt:"arrow"})}),Object(m.jsxs)("div",{className:"discourse-grid",children:[Object(m.jsx)(y,Object(r.a)({},j)),Object(m.jsx)(f,{displayValues:t(c,1)}),Object(m.jsx)(f,{displayValues:t(c,2)}),Object(m.jsx)(f,{displayValues:t(c,3)}),Object(m.jsx)("div",{className:"image-container stalin-image-container",children:Object(m.jsx)("img",{className:"stalin",src:b,alt:"comrade stalin ripping it",title:"comrade stalin ripping it"})}),Object(m.jsx)("div",{className:"image-container cwarrow-image-container",children:Object(m.jsx)("img",{className:"cwarrow1",src:g,alt:"clockwise arrow"})}),Object(m.jsx)("div",{className:"image-container cwarrow-image-container",children:Object(m.jsx)("img",{className:"cwarrow2",src:g,alt:"clockwise arrow"})}),Object(m.jsx)("div",{className:"image-container cwarrow-image-container",children:Object(m.jsx)("img",{className:"cwarrow4",src:g,alt:"clockwise arrow"})}),Object(m.jsx)("div",{className:"image-container cwarrow-image-container",children:Object(m.jsx)("img",{className:"cwarrow3",src:g,alt:"clockwise arrow"})})]})]})});c(21);var V=function(){return Object(m.jsx)("div",{className:"main-container",children:Object(m.jsx)(w,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(a){var c=a.getCLS,i=a.getFID,s=a.getFCP,t=a.getLCP,n=a.getTTFB;c(e),i(e),s(e),t(e),n(e)}))};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),S()}],[[22,1,2]]]);
//# sourceMappingURL=main.a1ccfd31.chunk.js.map