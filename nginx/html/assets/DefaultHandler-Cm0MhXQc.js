/* empty css              *//* empty css              *//* empty css              */import{d as _,r as y,x as $,i as C,j as B,k as g,m as x,e as w,H as N,C as S,M as L,J as I,s as O}from"./index-B4CC65jv.js";import{a as r,v as U,w as b,b as h}from"./PageLayoutStore-BBWcVjuV.js";const G=_({__name:"PageInfoDialog",props:{show:{type:Boolean,default:!1},items:{type:Object,default:[]}},setup(a){const e=a,n=y(!1),o=y("");$(e,()=>{n.value=e.show,o.value=JSON.stringify(e.items||[],null,"  ")});const c=async()=>{n.value=!1};return(u,l)=>{const p=N,m=S,H=L;return C(),B(H,{visible:n.value,"onUpdate:visible":l[1]||(l[1]=f=>n.value=f),onOk:c,draggable:"","unmount-on-close":"","hide-cancel":!0},{title:g(()=>[x(" Page Layout Info ")]),default:g(()=>[w(m,{direction:"vertical",size:"large",fill:""},{default:g(()=>[w(p,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=f=>o.value=f),class:"h-80","allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["visible"])}}}),d=`${b}/comp_data`,J=I("defaultComponentStore",{state:()=>({dataList:[]}),getters:{get:a=>e=>a.dataList.find(n=>n.id===e)},actions:{async getDataList(){return await r.get(`${d}`).then(a=>(this.dataList=a.data,a.data)).catch(a=>(console.log(a),!1))},async getDataById(a){return await r.get(`${d}/${a}`).then(e=>e.data).catch(e=>(console.log(e),!1))},async getDataByName(a){return await r.get(`${d}?cname=${a}`).then(e=>e.data).catch(e=>(console.log(e),!1))},async getDataByCid(a){return await r.get(`${d}?cid=${a}`).then(e=>e.data).catch(e=>(console.log(e),!1))},async getDataByAliasName(a){return await r.get(`${d}?cname=${a}`).then(e=>e.data).catch(e=>(console.log(e),!1))},async exists(a){return await this.getDataById(a)!=null},async saveData(a,e,n){try{return!a.id||!await this.exists(a.id)?await this.insertData(a,e,n):await this.updateData(a,e,n)}catch{return!1}},async insertData(a,e,n){const o="POST";a.id||(a.id=U()),n&&(a.cname=n),e&&(a.cid=e);const c=JSON.stringify(a),u=h;return await r.post(`${d}`,c,{method:o,headers:u}).then(l=>l.data).catch(l=>(console.log(l),!1))},async updateData(a,e,n){const o="PUT";n&&(a.cname=n),e&&(a.cid=e);const c=JSON.stringify(a),u=h;return await r.patch(`${d}/${a.id}`,c,{method:o,headers:u}).then(l=>l.data).catch(l=>(console.log(l),!1))},async deleteData(a){const e="DELETE",n=h;return await r.delete(`${d}/${a}`,{method:e,headers:n}).then(o=>o.data).catch(o=>(console.log(o),!1))}}}),K=(a,e,n,o,c,u)=>{const{getDataById:l,getDataByName:p,getDataByCid:m,getDataList:H,saveData:f,deleteData:D}=J(),v=O({invoke:(t,s,i)=>{}});return{loadHandler:async(t,s)=>{if(console.log("default loadHandler event called",t.data),t.data.id){const i=await l(t.data.id)||m(t.data.cid);s&&s(i)}},saveHandler:async(t,s)=>{console.log("default saveHandler event called",t.data),t.data.cname=t.cname,t.data.aliasName=t.aliasName;const i=await f(t.data,t.cid);s&&s(i)},itemChangedHandler:async(t,s)=>{console.log("default itemChangedHandler event received: ",t.cid,t.data),s&&s(!0)},deleteHandler:async(t,s)=>{console.log("default deleteHandler event called",t.data);const i=await D(t.data.id);s&&s(i)},uploadHandler:(t,s)=>{console.log("default uploadHandler event called",t.data),s&&s(!0)},callHandler:(t,s)=>{console.log("default optionHandler event called",t.data),s&&s(!0)},fns:v}};export{G as _,K as u};
