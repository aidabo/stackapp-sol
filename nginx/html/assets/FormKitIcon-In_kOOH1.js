import{d as m,r as p,i as l,a as u,j as f,k as d,e as o,y as t,Z as _,b as n,F as v,g,t as w,ap as F,S as V}from"./index-CDODInC4.js";import{F as x,a as K,b as y,d as a}from"./FormKitConfig-VI6zoOVi.js";const I=n("h3",null,"Input and FormKitIcon w/ reactivity",-1),b=["value"],k=n("h3",null,"Remote icon from FormKit CDN",-1),B=n("h3",null,"Inline SVG",-1),C=n("h3",null,"custom loaderUrl",-1),S=n("h3",null,"custom loader",-1),M='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>',L=m({__name:"FormKitIcon",setup(j){const i=["happy","sad","heart"],r=p(i[0]),h=c=>fetch(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${c}.svg`).then(async s=>{const e=await s.text();if(e.startsWith("<svg"))return e}).catch(s=>console.error(s));return(c,s)=>(l(),u(v,null,[I,(l(),f(V,null,{default:d(()=>[o(t(x),{config:t(K)},{default:d(()=>[o(t(y),{type:"text",label:"FormKit Input","prefix-icon":r.value},null,8,["prefix-icon"]),o(t(a),{icon:r.value},null,8,["icon"]),_(n("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>r.value=e)},[(l(),u(v,null,g(i,e=>n("option",{key:e,value:e},w(e),9,b)),64))],512),[[F,r.value]]),k,o(t(a),{icon:"ethereum"}),B,o(t(a),{icon:M}),C,o(t(a),{"icon-loader-url":e=>`https://cdn.jsdelivr.net/npm/heroicons/outline/${e}.svg`,icon:"archive"},null,8,["icon-loader-url"]),S,o(t(a),{"icon-loader":h,icon:"lightbulb"})]),_:1},8,["config"])]),_:1}))],64))}});export{L as default};
