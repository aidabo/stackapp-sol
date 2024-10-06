import{d as v,r,o as x,x as y,i as d,a as c,j as C,k as m,e as t,y as e,b as s,t as D,S as F,f as S}from"./index-CDODInC4.js";import{F as j,a as k,b as a}from"./FormKitConfig-VI6zoOVi.js";import{v as q}from"./PageLayoutStore-CqlQ4RXp.js";const I={class:"flex flex-col mx-4"},K=s("h1",{class:"text-2xl font-bold mb-2"},"Register!",-1),P=s("p",{class:"text-sm mb-4"}," You can put any type of element inside a form, not just FormKit inputs (although only FormKit inputs are included with the submission). ",-1),V={class:"double"},B={wrap:""},Y={key:0},N=s("h2",{class:"text-xl text-green-500"},"Submission successful!",-1),R=[N],z=v({__name:"FormExample",props:{itemId:String,cid:String,gsProps:{type:Object,required:!1},gsInitData:Object},emits:["remove","itemChanged","submit"],setup(u,{emit:p}){const o=r(!1),h=async()=>{await new Promise(n=>setTimeout(n,1e3)),o.value=!0},f=r(q()),i=u,l=r(null),_=()=>{i.gsInitData&&(l.value=i.gsInitData)};x(()=>{_()});const b=p;return y(l,(n,g)=>{b("itemChanged",i,l.value)},{deep:!0}),(n,g)=>(d(),c("div",I,[(d(),C(F,null,{default:m(()=>[t(e(j),{config:e(k)},{default:m(()=>[t(e(a),{type:"form",id:f.value,"form-class":o.value?"hide":"show","submit-label":"Register",onSubmit:h,actions:!1},{default:m(({value:w})=>[K,P,t(e(a),{type:"text",name:"name",label:"Your name",placeholder:"Jane Doe",help:"What do people call you?",validation:"required"}),t(e(a),{type:"text",name:"email",label:"Your email",placeholder:"jane@example.com",help:"What email should we use?",validation:"required|email"}),s("div",V,[t(e(a),{type:"password",name:"password",label:"Password",validation:"required|length:6|matches:/[^a-zA-Z]/","validation-messages":{matches:"Please include at least one symbol"},placeholder:"Your password",help:"Choose a password"}),t(e(a),{type:"password",name:"password_confirm",label:"Confirm password",placeholder:"Confirm password",validation:"required|confirm",help:"Confirm your password"})]),t(e(a),{type:"submit",label:"Register"}),s("pre",B,D(w),1)]),_:1},8,["id","form-class"])]),_:1},8,["config"])]),_:1})),o.value?(d(),c("div",Y,R)):S("",!0)]))}});export{z as default};
