(this["webpackJsonplacanian-discourse-combinator"]=this["webpackJsonplacanian-discourse-combinator"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},18:function(e){e.exports=JSON.parse('{"b":[["S\u2082","a","$","S\u2081"],["S\u2081","S\u2082","a","$"],["$","S\u2081","S\u2082","a"],["a","$","S\u2081","S\u2082"]],"a":["University Discourse","Master\'s Discourse","Hysteric\'s Discourse","Analyst\'s Discourse"],"c":["Four Discourses"],"d":[["S\u2081","S\u2082","a","$"]]}')},239:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(42),i=n.n(c),r=(n(108),n(5)),o=n(23),l=n(7),u=n(22),d=n(6),m=n(12),j=(n(109),n(0)),b=function(e){var t=e.index,n=e.selectedMathemes,s=e.setSelectedMathemes,a=e.selectedValue,c=e.className;return Object(j.jsx)("select",{className:c,name:"mathemeInput",onChange:function(e){var a=e.target.value,c=n;c[t]="\xa0"===a?"\xa0":e.target.value,s(Object.assign([],Object(d.a)(c)))},children:[{value:"\xa0",displayValue:"\xa0"},{value:"S\u2081",displayValue:"S\u2081"},{value:"S\u2082",displayValue:"S\u2082"},{value:"$",displayValue:"$"},{value:"a",displayValue:"a"}].map((function(e){return Object(j.jsx)("option",{value:e.value,selected:e.value===a,disabled:"\xa0"!==e.value&&n.includes(e.value),children:e.value},e.value)}))})},O=(n(111),function(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e||!t||n.includes("\xa0"))return s;var a=e.find((function(e){return e.every((function(e,t){return e===n[t]}))})),c=t[e.indexOf(a)];return void 0!==a?c:"Unknown Discourse"}),h=n.p+"static/media/tavarish.24013285.jpg",g=(n.p,n.p,n.p+"static/media/cwarrow.93b3e505.svg"),f=n.p+"static/media/linarrow.3ebd577b.svg",p=(n.p,n.p+"static/media/bar.8e38f429.svg"),N=n.p+"static/media/impossibility.495c2197.svg",x=n.p+"static/media/impotence.0124c1b5.svg",v=n.p+"static/media/necessity.4853de1a.svg",S=n.p+"static/media/contingency.0251d6d8.svg",y=n.p+"static/media/README.3cd2f4bc.md",D=(n(112),function(e){var t=e.selectedMathemes,n=e.setSelectedMathemes,s=e.namedDiscourses,a=e.discourseNames,c=e.quickAdd;return Object(j.jsxs)("div",{className:"discourse-container",children:[Object(j.jsxs)("div",{className:"discourse-header",children:[Object(j.jsxs)("div",{className:"name-display",children:[O(s,a,t,"Input Discourse: ")," "]}),Object(j.jsx)("button",{className:"text-button quick-add-button",onClick:function(){return c(t)},title:"Quick add this discourse",children:"[+]"})]}),Object(j.jsxs)("form",{className:"discourse-selector",children:[t.map((function(e,s){return Object(j.jsx)(b,{className:"matheme-selector",index:s,selectedMathemes:t,setSelectedMathemes:n,selectedValue:t[s]},s)})),Object(j.jsx)("div",{className:"image-container bar-image-container",children:Object(j.jsx)("img",{className:"bar",alt:"bar",src:p,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container bar-image-container",children:Object(j.jsx)("img",{className:"bar",alt:"bar",src:p,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container impossibility-image-container",children:Object(j.jsx)("img",{className:"impossibility",alt:"impossibility",title:"impossibility",src:N,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container impotence-image-container",children:Object(j.jsx)("img",{className:"impotence",alt:"impotence",title:"impotence",src:x,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container necessity-image-container",children:Object(j.jsx)("img",{className:"necessity",alt:"necessity",title:"necessity",src:v,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container contingency-image-container",children:Object(j.jsx)("img",{className:"contingency",alt:"contingency",title:"contingency",src:S,draggable:"false"})})]})]})}),w=(n(113),n(114),function(e){var t=e.displayValue,n=void 0===t?"-":t;return Object(j.jsx)("p",{className:"matheme-display",children:n})}),k=function(e){var t=e.displayValues,n=e.namedDiscourses,s=e.discourseNames,a=e.quickAdd,c=e.ringNameDisplay,i=void 0!==c&&c;return Object(j.jsxs)("div",{className:"discourse-container",children:[Object(j.jsxs)("div",{className:"discourse-header",children:[Object(j.jsxs)("div",{children:[O(n,s,t," "),i?"\t("+i+")":null]}),a?Object(j.jsx)("button",{className:"text-button quick-add-button",onClick:function(){return a(t)},title:"Quick add this discourse",children:"[+]"}):null]}),Object(j.jsxs)("form",{className:"discourse-display",children:[Object(j.jsx)(w,{displayValue:t[0]}),Object(j.jsx)(w,{displayValue:t[1]}),Object(j.jsx)(w,{displayValue:t[2]}),Object(j.jsx)(w,{displayValue:t[3]}),Object(j.jsx)("div",{className:"image-container bar-image-container",children:Object(j.jsx)("img",{className:"bar",alt:"bar",src:p,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container bar-image-container",children:Object(j.jsx)("img",{className:"bar",alt:"bar",src:p,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container impossibility-image-container",children:Object(j.jsx)("img",{className:"impossibility",alt:"impossibility",title:"impossibility",src:N,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container impotence-image-container",children:Object(j.jsx)("img",{className:"impotence",alt:"impotence",title:"impotence",src:x,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container necessity-image-container",children:Object(j.jsx)("img",{className:"necessity",alt:"necessity",title:"necessity",src:v,draggable:"false"})}),Object(j.jsx)("div",{className:"image-container contingency-image-container",children:Object(j.jsx)("img",{className:"contingency",alt:"contingency",title:"contingency",src:S,draggable:"false"})})]})]})},C=n(43),I=n.n(C),A=(n(121),function(e,t,n,s){if(n.includes("\xa0"))return!1;var a=s(n);return e[t.indexOf(t.find((function(e){return e.every((function(e,t){return e===a[t]}))})))]||"Unknown Ring"}),q=(n(122),function(e){var t=e.displayValues,n=e.namedDiscourses,s=e.discourseNames,a=e.rotateDiscourse,c=e.setSelectedMathemes,i=e.ringNames,r=e.ringSequences,o=e.reorder,l=e.handleRenameRing;return Object(j.jsxs)("div",{className:"ring-display",children:[Object(j.jsx)("div",{className:"ring-title",title:"Click to rename ring",onClick:function(){return l(t)},children:A(i,r,t,o)}),Object(j.jsx)("div",{className:"in-ring-name",onClick:function(){return c(t)},children:O(n,s,t," ")}),Object(j.jsx)("div",{className:"in-ring-name",onClick:function(){return c(a(t,1))},children:O(n,s,a(t,1)," ")}),Object(j.jsx)("div",{className:"in-ring-name",onClick:function(){return c(a(t,3))},children:O(n,s,a(t,3)," ")}),Object(j.jsx)("div",{className:"in-ring-name",onClick:function(){return c(a(t,2))},children:O(n,s,a(t,2)," ")})]})}),J=(n(123),function(e){var t=e.discourseList,n=e.rotateDiscourse,s=e.setSelectedMathemes,c=e.handleCloseOverview,i=e.ringNames,r=e.ringSequences,o=e.customOperation,l=e.reorder,u=e.handleRenameRing;return Object(j.jsx)(I.a,{handle:".overview-title",bounds:".main-container",children:Object(j.jsxs)("div",{className:"overview",children:[Object(j.jsxs)("div",{className:"overview-title",children:["Overview (All Rings)",Object(j.jsxs)("button",{className:"text-button close-overview-button",onClick:c,children:["[",Object(j.jsx)("b",{children:"\u2613"}),"]"]})]}),Object(j.jsx)("div",{className:"overview-body",children:function(){var e=["S\u2082","a","$","S\u2081"];return Object(j.jsx)(a.a.Fragment,{children:Object(d.a)(Array(6).keys()).map((function(a){return Object(j.jsx)(q,Object(m.a)(Object(m.a)({displayValues:0===a?e:5===a?o(o(e),2):o(e,a%4),rotateDiscourse:n,setSelectedMathemes:s},t),{},{ringNames:i,ringSequences:r,reorder:l,handleRenameRing:u}))}))})}()})]})})}),R=["S\u2082","a","$","S\u2081"],T=["salmon","plum","darkblue","teal","green"],V=["swAT","swOA","swPO","swTP"],M=["magenta","lime","turquoise","yellow"],G=function(e){var t=e.tableOpen,n=e.setTableOpen,a=e.discourseNames,c=e.namedDiscourses,i=e.setNewDiscourse,o=e.setOverviewOpen,l=e.ringNames,m=e.ringSequences,j=e.selectedOperation,b=(e.setSelectedOperation,e.setGraphData),h=e.graphInfo,g=Object(s.useState)(["\xa0","\xa0","\xa0","\xa0"]),f=Object(r.a)(g,2),p=f[0],N=f[1],x=function(e,t){var n=Object(d.a)(e);t=t%4+4;for(var s=0;s<t;s++){var a=n.pop();n.unshift(a)}return n},v=function(e,t){var n=Object(d.a)(e),s=function(e,t,n){var s;return s=[n[t],n[e]],n[e]=s[0],n[t]=s[1],s};switch(t){case 1:s(0,1,n);break;case 2:s(1,2,n);break;case 3:s(2,3,n);break;case 0:default:s(3,0,n)}return n},S=function(e){e((function(e){return!e}))},y=function(e){var t=Object(d.a)(e);return t.splice(t.findIndex((function(e){return"S\u2081"===e}))).concat(t)},D=function(){var e=function(e){e.selectedOperation;var t=e.namedDiscourses,n=e.discourseNames,s=e.rotateDiscourse,a=e.customOperation,c=e.ringNames,i=e.ringSequences,r=e.reorder,o=e.graphInfo,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;return Object(d.a)(Array(4).keys()).map((function(o){var l=s(a,o);return{discourse:l,name:O(t,n,l),id:JSON.stringify(l),color:e,ringName:A(c,i,a,r)}}))},u=o.map((function(e){return V.indexOf(e.opname)})).filter((function(e){return e>=0})),m=function(){var e=l(),t=e.map((function(e,t){var n=a(e.discourse,0);return l(T[t],n)}));return t.push(function(){var t=a(a(e[0].discourse),2);return l(T[4],t)}()),t.push(e),t.flat().map((function(e){return{id:e.id,name:e.name,color:e.color,ringName:e.ringName}}))}(),j=function(e,t){return[].concat(Object(d.a)(function(){if(!o.find((function(e){return"rotation"===e.opname})))return[];var t=o.find((function(e){return"rotation"===e.opname})).length;return e.map((function(n){var a=JSON.stringify(s(JSON.parse(n.id),1));return{name:"rotation",sourceName:n.name,targetName:e.find((function(e){return e.id===a})).name,color:"red",source:n.id,target:a,length:t}}))}()),Object(d.a)(Object(d.a)(t).flatMap((function(t){if(-1!==t)return e.map((function(n){var s=JSON.stringify(a(JSON.parse(n.id),t)),c=o.find((function(e){return e.opname===V[t]})).length;return{name:V[t],sourceName:n.name,targetName:e.find((function(e){return e.id===s})).name,color:M[t],source:n.id,target:s,length:c}}))}))))}(m,Object(d.a)(u));return{nodes:m,links:j}}({selectedOperation:j,namedDiscourses:c,discourseNames:a,rotateDiscourse:x,customOperation:v,ringNames:l,ringSequences:m,reorder:y,graphInfo:h});b(e)},w={selectedMathemes:p,setSelectedMathemes:N},k={namedDiscourses:c,discourseNames:a};return Object(s.useEffect)((function(){h&&D()}),[h]),{selectorProps:w,discourseList:k,quickAdd:function(e){e.includes("\xa0")||(t||n(!0),i(e))},selectedMathemes:p,setSelectedMathemes:N,rotateDiscourse:x,customOperation:v,handleRotate:function(e){var t;switch(e){case"cw":t=-1;break;case"ccw":t=1;break;default:console.log("handleRotate Exception FCUK")}N(Object.assign([],x(p,t)))},handleClear:function(e){N(Object.assign([],["\xa0","\xa0","\xa0","\xa0"]))},handleCloseOverview:function(e){o(!1)},handleRenameRing:function(e){var t=new u.a,n=prompt("Enter New Ring Name: ","");if(n&&""!==n){var s=y(e),a=m.indexOf(m.find((function(e){return e.every((function(e,t){return e===s[t]}))}))),c=Object(d.a)(l),i=Object(d.a)(m);-1===a?c.push(n)&&i.push(s):c.splice(a,1,n),t.set("ringNames",JSON.stringify(c),{path:"/"}),t.set("ringSequences",JSON.stringify(i),{path:"/"}),S(o)}},reorder:y,handleToggle:S,handleCreateGraph:D}},P=(n(124),function(e){var t=e.selectedOperation,n=e.setSelectedOperation,s=["Agent \u2194 Truth","Other \u2194 Agent","Product \u2194 Other","Truth \u2194 Product"];return Object(j.jsxs)("div",{className:"operations-box",children:[Object(j.jsx)("h4",{className:"operations-list-title",children:"\xa0\xa0Selected Operation:"}),Object(j.jsx)("div",{className:"operations-list",children:s.map((function(e,s){var a=t===s?"operation-name-selected":"operation-name";return Object(j.jsxs)("div",{className:a,onClick:function(){return n(s)},children:[t===s?"\u2611 ":"\u2610 ",e]})}))})]})}),E=(n(125),n(126),function(e){var t=e.graphInfo,n=e.setGraphInfo,s=["Agent \u2194 Truth","Other \u2194 Agent","Product \u2194 Other","Truth \u2194 Product"],a=["swAT","swOA","swPO","swTP"],c=function(e){switch(e){case"rotation":var s=Object(d.a)(t),c=s.find((function(e){return"rotation"===e.opname})),i=s.findIndex((function(e){return e===c}));if(c){s.splice(i,1);n(s)}else s.push({opname:"rotation",length:20}),n(s);break;default:var r=t.find((function(t){return t.opname===a[e]})),o=t.findIndex((function(e){return e===r}));if(r){var l=Object(d.a)(t);l.splice(o,1),n(l)}else{var u=Object(d.a)(t);u.push({opname:a[e],length:100}),n(u)}}},i=function(e,s){var c=Object(d.a)(t);switch(s){case"rotation":c.find((function(e){return"rotation"===e.opname})).length=e.target.value,n(c);break;default:c.find((function(e){return e.opname===a[s]})).length=e.target.value,n(c)}},r=t.find((function(e){return"rotation"===e.opname}));return Object(j.jsxs)("div",{className:"graph-settings-box",children:[Object(j.jsx)("h4",{children:"3D Graph Settings:"}),Object(j.jsxs)("div",{className:"settings-list-header",children:[Object(j.jsx)("span",{children:"Operations"}),Object(j.jsx)("span",{children:"Length"})]}),Object(j.jsxs)("div",{className:"settings-list",children:[Object(j.jsxs)("div",{className:r?"graph-operation-selected":"graph-operation",children:[Object(j.jsxs)("div",{className:"operation-name-box",onClick:function(){return c("rotation")},children:[r?"\u2611 ":"\u2610 ","Rotation"]}),Object(j.jsx)("input",{className:"length-input",type:"number",min:"1",defaultValue:r?r.length:null,disabled:!r,onChange:function(e){return i(e,"rotation")}})]}),a.map((function(e,n){var a=t.find((function(t){return t.opname===e})),r=a?"graph-operation-selected":"graph-operation",o=a?a.length:null;return Object(j.jsxs)("div",{className:r,children:[Object(j.jsxs)("div",{className:"operation-name-box",onClick:function(){return c(n)},children:[a?"\u2611 ":"\u2610 ",s[n]]}),Object(j.jsx)("input",{className:"length-input",type:"number",min:"1",defaultValue:o,disabled:!a,onChange:function(e){return i(e,n)}})]})}))]}),Object(j.jsxs)("div",{className:"graph-button-box",children:[Object(j.jsx)("button",{className:"graph-reset-button generic-button",onClick:function(){return n([])},children:"Reset"}),Object(j.jsx)(o.b,{to:"/3d-graph",children:Object(j.jsx)("button",{className:"graph-button generic-button",children:"View 3D Graph"})})]})]})}),F=function(e){var t=e.setTableOpen,n=e.namedDiscourses,s=e.discourseNames,c=e.setNewDiscourse,i=e.tableOpen,r=e.overviewOpen,o=e.setOverviewOpen,l=e.graphSettingsOpen,u=e.setGraphSettingsOpen,b=e.ringNames,O=e.ringSequences,p=e.selectedOperation,N=e.setSelectedOperation,x=(e.graphData,e.setGraphData),v=e.graphInfo,S=e.setGraphInfo,y=G({tableOpen:i,setTableOpen:t,discourseNames:s,namedDiscourses:n,setNewDiscourse:c,overviewOpen:r,setOverviewOpen:o,ringNames:b,ringSequences:O,selectedOperation:p,setSelectedOperation:N,setGraphData:x,graphInfo:v,setGraphInfo:S}),w=y.selectorProps,C=y.discourseList,I=y.quickAdd,q=y.selectedMathemes,R=y.setSelectedMathemes,T=y.rotateDiscourse,V=y.customOperation,M=y.handleRotate,F=y.handleClear,L=y.handleRenameRing,$=(y.handleCreateGraph,y.reorder),B=y.handleToggle,H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,Object(m.a)(Object(m.a)(Object(m.a)({},w),C),{},{quickAdd:I})),[1,2,3].map((function(e){return Object(j.jsx)(k,Object(m.a)(Object(m.a)({displayValues:T(q,e)},C),{},{setNewDiscourse:c,quickAdd:I}))}))]}):Object(d.a)(Array(4).keys()).map((function(e){return Object(j.jsx)("div",{className:"custom-operation".concat(0===e?"":e+1),children:Object(j.jsx)(k,Object(m.a)(Object(m.a)({displayValues:T(V(q,p),e)},C),{},{quickAdd:I}))})}))},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,2,3,4];return t.map((function(t){return Object(j.jsx)("div",{className:"image-container ".concat(e,"-image-container"),children:Object(j.jsx)("img",{className:"".concat(e,"-").concat(t),src:g,alt:"clockwise arrow",draggable:"false"})})}))};return Object(j.jsxs)("div",{className:"outer-grid",children:[Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("button",{className:"nametable-open",onClick:function(){return B(t)},children:"Custom Discourses"}),Object(j.jsx)("button",{className:"overview-open",onClick:function(){return B(o)},children:"Overview"}),Object(j.jsx)("button",{className:"graph-settings-open",onClick:function(){return B(u)},children:"3D Graph"})]}),H(),Object(j.jsx)("div",{className:"image-container linarrow-image-container",children:Object(j.jsx)("img",{className:"linarrow1",src:f,alt:"arrow",draggable:"false"})}),U("cwarrowout"),Object(j.jsxs)("div",{className:"discourse-grid",children:[H(!0),Object(j.jsx)("div",{className:"image-container stalin-image-container",children:Object(j.jsx)("img",{className:"stalin",src:h,alt:"comrade stalin ripping it",title:"comrade stalin ripping it",draggable:"false"})}),U("cwarrow",[1,2,4,3])]}),q.includes("\xa0")?null:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"outer-ring-title",title:"Click to rename ring",onClick:function(){return L(V(q,p))},children:["Outer ring:",Object(j.jsx)("h2",{children:A(b,O,V(q,p),$)})]}),Object(j.jsxs)("div",{className:"inner-ring-title",title:"Click to rename ring",onClick:function(){return L(q)},children:["Inner ring:",Object(j.jsx)("h2",{children:A(b,O,q,$)})]})]}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsx)("button",{className:"ccw-button generic-button",title:"rotate counterclockwise (previous outer ring)",onClick:function(){return M("ccw")},children:"\u27f2"}),Object(j.jsx)("button",{className:"cw-button generic-button",title:"rotate clockwise (next outer ring)",onClick:function(){return M("cw")},children:"\u27f3"}),Object(j.jsx)("button",{className:"clear-button generic-button",onClick:F,children:"Clear Input"})]}),r?Object(j.jsx)(J,{discourseList:C,rotateDiscourse:T,setSelectedMathemes:R,handleCloseOverview:function(){return B(o)},ringNames:b,ringSequences:O,customOperation:V,reorder:$,handleRenameRing:L}):null,Object(j.jsx)(P,{selectedOperation:p,setSelectedOperation:N}),l?Object(j.jsx)(E,{graphInfo:v,setGraphInfo:S}):null]})},L=(n(133),function(e){var t=e.row,n=e.discourseName,s=e.removeDiscourse;return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("span",{className:"discourse-name",children:n}),t.map((function(e,t){return Object(j.jsx)("span",{className:"matheme-cell",children:e},t)})),Object(j.jsx)("button",{className:"remove-button text-button",onClick:function(){return s(n)},children:"[-]"})]})}),$=(n(134),function(e){var t=e.nameInput,n=e.handleSubmit,s=e.handleNameInputChange,a=e.newDiscourse,c=e.setNewDiscourse;return Object(j.jsxs)("form",{className:"input-form",onSubmit:n,children:[Object(j.jsx)("input",{className:"discourse-input",placeholder:"New Discourse",value:t,onChange:s,required:!0}),a.map((function(e,t){return Object(j.jsx)(b,{className:"new-discourse-selector",index:t,selectedMathemes:a,setSelectedMathemes:c,selectedValue:a[t]},t)})),Object(j.jsx)("button",{className:"add-button text-button",children:"[+]"})]})}),B=(n(135),function(e){var t=e.handleCloseTable;return Object(j.jsxs)("div",{className:"name-table-title",children:[Object(j.jsx)("p",{children:"Add Custom Discourses: "}),Object(j.jsxs)("div",{className:"close-button text-button",onClick:t,children:["[",Object(j.jsx)("b",{children:"\u2613"}),"]"]})]})}),H=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("span",{children:"Agent"}),Object(j.jsx)("span",{children:"Other"}),Object(j.jsx)("span",{children:"Product"}),Object(j.jsx)("span",{children:"Truth"}),Object(j.jsx)("span",{children:"\xa0"})]})},U=function(e){var t=e.namedDiscourses,n=e.discourseNames,s=e.removeDiscourse;return t.map((function(e,t){return Object(j.jsx)(L,{row:e,discourseName:n[t],removeDiscourse:s})}))},z=function(e){var t=e.handleCloseTable,n=e.handleTableReset,a=e.newDiscourse,c=e.setNewDiscourse,i=new u.a,o=Object(s.useState)(i.get("namedDiscourses")||[]),l=Object(r.a)(o,2),m=l[0],b=l[1],O=Object(s.useState)(i.get("discourseNames")||[]),h=Object(r.a)(O,2),g=h[0],f=h[1],p=Object(s.useState)(""),N=Object(r.a)(p,2),x=N[0],v=N[1],S=Object(s.useState)(""),y=Object(r.a)(S,2),D=y[0],w=y[1],k=Object(s.useState)("Paste data here to import. Or click export to get your data."),C=Object(r.a)(k,2),A=C[0],q=C[1];Object(s.useEffect)((function(){R({nextDiscourseNames:i.get("discourseNames"),nextNamedDiscourses:i.get("namedDiscourses")})}),[n]);var J=function(){var e=JSON.parse(D);w(e)};Object(s.useEffect)((function(){420===D&&(w(""),q("Blaze it faggot!")),D&&D.discourseNames&&D.namedDiscourses&&D.ringNames&&D.ringSequences&&(i.set("discourseNames",JSON.stringify(D.discourseNames),{path:"/"}),i.set("namedDiscourses",JSON.stringify(D.namedDiscourses),{path:"/"}),i.set("ringNames",JSON.stringify(D.ringNames),{path:"/"}),i.set("ringSequences",JSON.stringify(D.ringSequences),{path:"/"}),w(""),q("Imported successfully. Close and reopen this window to refresh the table."))}),[J]);var R=function(e){var t=e.nextDiscourseNames,n=e.nextNamedDiscourses;f(Object.assign([],t)),b(Object.assign([],n)),i.set("discourseNames",JSON.stringify(t),{path:"/"}),i.set("namedDiscourses",JSON.stringify(n),{path:"/"})};return Object(j.jsx)(I.a,{handle:".name-table-title",bounds:".main-container",children:Object(j.jsxs)("div",{className:"name-table",children:[Object(j.jsx)(B,{handleCloseTable:t}),Object(j.jsx)("div",{className:"name-table-inner",children:Object(j.jsxs)("div",{className:"name-table-container",children:[Object(j.jsx)(H,{}),m&&g?Object(j.jsx)(U,{namedDiscourses:m,discourseNames:g,removeDiscourse:function(e){var t=g.indexOf(e),n=g,s=m;n.splice(t,1),s.splice(t,1),R({nextDiscourseNames:n,nextNamedDiscourses:s})}}):null,Object(j.jsx)($,{nameInput:x,handleNameInputChange:function(e){v(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),!a.includes("\xa0")&&!m.some((function(e){return g.includes(x)||e.every((function(e,t){return e===a[t]}))}))){var t=[].concat(Object(d.a)(g),[x]),n=[].concat(Object(d.a)(m),[a]);R({nextDiscourseNames:t,nextNamedDiscourses:n}),v(""),c(["\xa0","\xa0","\xa0","\xa0"])}},newDiscourse:a,setNewDiscourse:c})]})}),Object(j.jsxs)("div",{className:"table-footer",children:[Object(j.jsx)("button",{className:"generic-button",onClick:J,children:"Import"}),Object(j.jsx)("button",{className:"generic-button",onClick:function(){var e=JSON.stringify(i.getAll());w(e)},children:"Export"}),Object(j.jsx)("button",{className:"generic-button",onClick:n,children:"Reset"}),Object(j.jsx)("textarea",{className:"textbox",value:D,onChange:function(e){return w(e.target.value)},placeholder:A,onClick:function(e){e.target.value&&(e.target.select(),document.execCommand("copy"),w(""),q("Copied into clipboard."))}})]})]})})},Q=n(18),K=(n(136),n(98)),W=n.n(K),Z=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){fetch(y).then((function(e){return e.text()})).then((function(e){return a(e)}))}),[]),Object(j.jsx)("div",{className:"info-box",children:Object(j.jsx)(W.a,{className:"info-text",children:n})})},X=(n(239),function(e){var t=e.graphData,n=e.setGraphData,a=e.graphInfo,c=e.setGraphInfo,i=new u.a,o=Object(s.useState)("nodisplay"),l=Object(r.a)(o,2),d=l[0],m=l[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),h=O[0],g=O[1],f=Object(s.useState)(!1),p=Object(r.a)(f,2),N=p[0],x=p[1],v=Object(s.useState)(!1),S=Object(r.a)(v,2),y=S[0],D=S[1],w=Object(s.useState)(!1),k=Object(r.a)(w,2),C=k[0],I=k[1],A=Object(s.useState)([" "," "," "," "]),q=Object(r.a)(A,2),J=q[0],R=q[1],T=Object(s.useState)(0),V=Object(r.a)(T,2),M=V[0],G=V[1],P=i.get("discourseNames"),E=i.get("namedDiscourses"),L=i.get("ringNames"),$=i.get("ringSequences"),B=function(){P||i.set("discourseNames",JSON.stringify(Q.a),{path:"/"}),E||i.set("namedDiscourses",JSON.stringify(Q.b),{path:"/"}),L||i.set("ringNames",JSON.stringify(Q.c),{path:"/"}),$||i.set("ringSequences",JSON.stringify(Q.d),{path:"/"})};B(),Object(s.useEffect)((function(){B()}),[]);Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date,t=e.getHours(),n=e.getMinutes();m(4===t&&20===n?"display":"nodisplay")}()}),1e3);return function(){clearInterval(e)}}),[]);var H=function(){g(!1)};return Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsxs)("div",{className:"blaze-".concat(d),children:[Object(j.jsx)("p",{children:"420"}),Object(j.jsx)("p",{children:"BLAZE IT!!!"})]}),Object(j.jsx)(F,{setTableOpen:g,tableOpen:h,namedDiscourses:E,discourseNames:P,ringNames:L,ringSequences:$,setNewDiscourse:R,overviewOpen:N,setOverviewOpen:x,graphSettingsOpen:y,setGraphSettingsOpen:D,selectedOperation:M,setSelectedOperation:G,graphData:t,setGraphData:n,graphInfo:a,setGraphInfo:c}),h?Object(j.jsx)(z,{handleCloseTable:H,handleTableReset:function(){window.confirm("Do you wish to reset all data?")&&(i.set("discourseNames",JSON.stringify(Q.a),{path:"/"}),i.set("namedDiscourses",JSON.stringify(Q.b),{path:"/"}),i.set("ringNames",JSON.stringify(Q.c),{path:"/"}),i.set("ringSequences",JSON.stringify(Q.d),{path:"/"}),H())},setNewDiscourse:R,newDiscourse:J}):null,Object(j.jsx)("button",{title:"Readme",className:"info-toggle",onClick:function(){return I((function(e){return!e}))},children:"[v1.0]"}),C?Object(j.jsx)(Z,{infoBoxState:C,setInfoBoxState:I}):null]})}),Y=n(102),_=(n(259),function(e){var t=Object(d.a)(e);return t.splice(t.findIndex((function(e){return"S\u2081"===e}))).concat(t)}),ee=function(e){var t=e.graphData,n=Object(s.useRef)();Object(s.useEffect)((function(){n.current.d3Force("link").distance((function(e){return e.length}))}),[]);var a=new u.a,c=a.get("discourseNames"),i=a.get("namedDiscourses"),l=a.get("ringNames"),d=a.get("ringSequences"),m=null,b=null,O=null,h=null,g=Object(s.useState)(["\xa0","\xa0","\xa0","\xa0"]),p=Object(r.a)(g,2),N=p[0],x=p[1],v=Object(s.useState)(!1),S=Object(r.a)(v,2),y=S[0],D=S[1],w=Object(s.useState)(),C=Object(r.a)(w,2),I=C[0],q=C[1],J=Object(s.useState)(),R=Object(r.a)(J,2),T=R[0],V=R[1],M=function(e){switch(e){case"clear":D(!1);break;default:x(JSON.parse(e)),D(!0)}};return Object(j.jsxs)("div",{className:"graph-view-container",children:[Object(j.jsx)(o.b,{className:"link home-link",to:"/",children:"Home"}),y?Object(j.jsx)("div",{className:"discourse-info",children:Object(j.jsx)(k,{namedDiscourses:i,discourseNames:c,displayValues:N,quickAdd:!1,ringNameDisplay:A(l,d,N,_)})}):null,I?Object(j.jsx)("div",{className:"discourse-info-focused",children:Object(j.jsx)(k,{namedDiscourses:i,discourseNames:c,displayValues:JSON.parse(I.id),quickAdd:!1,ringNameDisplay:A(l,d,N,_)})}):null,T?Object(j.jsxs)("div",{className:"link-info-focused",children:[Object(j.jsx)("div",{className:"link-info-source",children:Object(j.jsx)(k,{namedDiscourses:i,discourseNames:c,displayValues:JSON.parse(T.source.id),quickAdd:!1,ringNameDisplay:A(l,d,N,_)})}),Object(j.jsxs)("div",{className:"link-info-operation",children:[Object(j.jsx)("div",{className:"link-info-name",children:["Agent \u2194 Truth","Other \u2194 Agent","Product \u2194 Other","Truth \u2194 Product"][["swAT","swOA","swPO","swTP"].indexOf(T.name)]||"Rotation"}),Object(j.jsx)("img",{src:f,className:"link-info-arrow"})]}),Object(j.jsx)("div",{className:"link-info-target",children:Object(j.jsx)(k,{namedDiscourses:i,discourseNames:c,displayValues:JSON.parse(T.target.id),quickAdd:!1,ringNameDisplay:A(l,d,N,_)})})]}):null,Object(j.jsx)(Y.a,{graphData:t,backgroundColor:"#aaaaaa",nodeOpacity:.8,linkOpacity:.9,linkWidth:function(e){return"rotation"===e.name?1.2:.6},linkDirectionalArrowLength:function(e){return"rotation"===e.name?8:5},linkDirectionalArrowRelPos:1,ref:n,onNodeHover:function(e){return M(e?e.id:"clear")},onNodeClick:function(e){!function(e){switch(e){case I:q();break;default:q(e),m=e.color,b=e.id}}(e)},onLinkClick:function(e){!function(e){switch(e){case T:V();break;default:V(e),h=e.color,O=e.index,console.log({tempLinkIndex:O})}}(e)},nodeColor:function(e){return e===I?"gold":e.id===b?m:e.color},linkColor:function(e){return e===T?"gold":e.index===O?h:e.color}})]})},te=(n(260),function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),i=Object(r.a)(c,2),u=i[0],d=i[1];return Object(j.jsx)(o.a,{basename:"/",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/420",children:Object(j.jsx)("h1",{children:"Blaze It Faggot"})}),Object(j.jsx)(l.a,{path:"/3d-graph",children:Object(j.jsx)(ee,{graphData:n})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(X,{graphData:n,setGraphData:a,graphInfo:u,setGraphInfo:d})})]})})});i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(te,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.fb574a26.chunk.js.map