import{d as f,r,i as u,j as p,k as o,e as a,y as e,b as m,t as c,S as d}from"./index-B4CC65jv.js";import{F as _,a as g,b as l}from"./FormKitConfig-BAm_Pd1X.js";const F=f({__name:"FileUpload",setup(y){const n=r({another_file:[{name:"pizza.jpg"}]});function i(){alert("@change event fired")}return(h,t)=>(u(),p(d,null,{default:o(()=>[a(e(_),{config:e(g)},{default:o(()=>[a(e(l),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),type:"form"},{default:o(()=>[a(e(l),{type:"file",name:"files",label:"Your files",help:"You can select as many files as you want",multiple:"",value:[{name:"foobar.jpg"},{name:"potato.png"}]}),a(e(l),{type:"file",name:"single_file",label:"Single file",help:"You can only select one file",onChange:i}),a(e(l),{type:"file",name:"another_file",label:"Another file",help:"You can only select one file"})]),_:1},8,["modelValue"]),m("pre",null,c(n.value),1)]),_:1},8,["config"])]),_:1}))}});export{F as default};
