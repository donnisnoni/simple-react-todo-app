import{r as e,a as t}from"./vendor.de62f314.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const c=new URL(e,n);if(self[t].moduleMap[c])return a(self[t].moduleMap[c]);const r=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){l(new Error(`Failed to import: ${e}`)),o(s)},onload(){a(self[t].moduleMap[c]),o(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");function a({todo:t,index:a,onActiveChange:n,onRemoveClicked:o}){return e.createElement("li",{className:"flex p-2 border-b items-center"},e.createElement("input",{className:"mr-2",type:"checkbox",onChange:({target:e})=>n(a,e.checked),checked:t.active,style:{transform:"scale(1.3)"}}),e.createElement("span",{className:"todo--text "+(t.active?"todo--inactive":""),style:{textDecoration:t.active&&"line-through"}},t.text),e.createElement("button",{"aria-label":"Delete todo",className:"ml-auto",onClick:()=>o(a),title:"Delete todo"},"❎"))}const n=new class{constructor(e,t){this.name=e,!localStorage.getItem(this.name)&&localStorage.setItem(this.name,JSON.stringify(t))}setData(e){localStorage.setItem(this.name,JSON.stringify(e))}getData(){return JSON.parse(localStorage.getItem(this.name))}}("todos",[]);function o(){const[t,o]=e.useState(n.getData()),[l,c]=e.useState({text:"",active:!1});function r(e,a){const n=[...t];n[e].active=a,o(n)}function s(e){const a=[...t];a.splice(e,1),o(a)}function m(){if(l.text){const e=[...t];e.push(l),o(e),c({text:"",active:!1})}else alert("Todo can't be empty")}function i(){return t.length?e.createElement("ul",null,t.map(((t,n)=>e.createElement(a,{index:n,key:n,todo:t,onActiveChange:r,onRemoveClicked:s})))):e.createElement("div",{className:"text-gray-500 flex flex-col text-center py-5"},"Hmm ... There's nothing to do now 🤔")}return e.useEffect((()=>{n.setData(t)}),[t]),e.createElement("div",{id:"app",className:"min-h-full flex-1 border rounded-md shadow-sm"},e.createElement("div",{className:"py-1"},e.createElement("h4",{className:"text-2xl"},"My Todo Lists")),e.createElement("div",{className:"flex flex-col flex-1 min-h-full"},e.createElement("form",{onSubmit:e=>{e.preventDefault(),m()}},e.createElement("input",{className:"border p-1 rounded-sm w-full my-2",onChange:({target:e})=>c({text:e.value,active:!1}),type:"text",value:l.text})),e.createElement(i,null)))}t.render(e.createElement(e.StrictMode,null,e.createElement(o,null)),document.getElementById("root"));
