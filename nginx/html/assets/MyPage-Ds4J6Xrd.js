import{d as E,r as s,o as M,n as h,a as c,b as a,t as N,w as y,e as x,f as w,F as b,g as R,u as V,h as $,i as n,j as F,k as L,S as z,p as D,l as G,I as H,_ as J}from"./index-CDODInC4.js";import{c as O,g as T,_ as W}from"./base64-CBs5qbV_.js";import{u as q}from"./PageLayoutStore-CqlQ4RXp.js";const P=u=>(D("data-v-d4b78650"),u=u(),G(),u),A={class:"flex justify-between align-items-center bg-blue-600 text-white"},K={class:"ml-4 flex-1"},Q={class:"text-lg font-bold"},U={class:"flex justify-between align-items-center"},X={class:"p-3"},Y=P(()=>a("i",{class:"fa fa-arrow-circle-left text-2xl","aria-hidden":"true"},null,-1)),Z=[Y],ee={class:"page-show"},te=P(()=>a("div",{class:"flex flex-col justify-end align-items-center mb-5"},[a("div")],-1)),ae=E({__name:"MyPage",setup(u){const d=s([]),p=s([]),o=s(O()),f=s(!0),l=V(),g=$(),S=e=>t=>{t&&(p.value[e]||(p.value[e]=t))},{getPageById:k}=q(),v=s(!1),_=s(!1),I=s(!0);M(async()=>{if(l.params.id&&l.fullPath.match(/\/page\/r/))o.value=await k(l.params.id),d.value=o.value.grids.map(e=>e.id),h(async()=>{await m(o.value.grids)}),v.value=!1;else if(l.params.id&&l.fullPath.match(/\/page\/p/)){let e=localStorage.getItem(l.params.id);if(e){let t=JSON.parse(T.decode(e));d.value=t.map(i=>i.id),h(async()=>{await m(t)}),_.value=!0}v.value=!1}else v.value=!0});const m=async e=>{p.value.forEach((t,i)=>{if(t){const r=e[i];t.load(r.items)}else t.load({id:1,x:2,y:1,h:2})})},B=async e=>{await g.push({name:"createpage",params:{id:e}})},C=e=>{g.go(e)};return(e,t)=>{const i=H;return n(),c(b,null,[a("div",A,[a("div",K,[a("h1",Q,N(o.value.title),1)]),a("div",U,[f.value&&!_.value&&I.value?(n(),c("button",{key:0,onClick:t[0]||(t[0]=y(r=>B(o.value.id),["prevent"]))},[a("span",X,[x(i,{size:"25"})])])):w("",!0),f.value&&_.value?(n(),c("button",{key:1,onClick:t[1]||(t[1]=y(r=>C(-1),["prevent"])),class:"text-stone-200 font-bold py-2 px-4 rounded hover:text-white"},Z)):w("",!0)])]),a("div",ee,[(n(!0),c(b,null,R(d.value,(r,j)=>(n(),c("div",null,[(n(),F(z,null,{default:L(()=>[x(W,{id:r,ref_for:!0,ref:S(j),pageProps:o.value,pageStatic:f.value},null,8,["id","pageProps","pageStatic"])]),_:2},1024))]))),256)),te])],64)}}}),ne=J(ae,[["__scopeId","data-v-d4b78650"]]);export{ne as default};
