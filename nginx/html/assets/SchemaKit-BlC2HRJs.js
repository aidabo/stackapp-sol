import{d as s,r as u,b as i,e as d,l as c,m as l,i as t,u as e,C as f,f as p,A as h,F as b}from"./index-wkNrGTcD.js";import{F as _,a as E,b as F,c as k}from"./FormKitConfig-IHfnBGKs.js";const g=s({__name:"SchemaKit",setup(v){const n=[{$formkit:"text",name:"name",label:"Full Name",placeholder:"Enter your name..."},{$formkit:"checkbox",name:"hasEmail",label:"Has Email?"},{$el:"p",children:["Email enabled? ","$hasEmail"]},{$formkit:"email",name:"email",label:"Email",if:"$hasEmail",validation:"required|email"}],a=u({name:null,email:null,hasEmail:!1}),o=()=>alert("Valid submit!");return(S,m)=>(i(),d(b,null,[(i(),c(f,null,{default:l(()=>[t(e(_),{config:e(E)},{default:l(()=>[t(e(F),{type:"form",modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=r=>a.value=r),onSubmit:o},{default:l(()=>[t(e(k),{schema:n,data:a.value},null,8,["data"])]),_:1},8,["modelValue"])]),_:1},8,["config"])]),_:1})),p("pre",null,h(a.value)+`
`,1)],64))}});export{g as default};
