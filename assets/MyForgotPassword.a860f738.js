import{A as p}from"./Admin.f9778680.js";import{b as _,_ as b,a as x}from"./TextInput.8c81c0b7.js";import{_ as h}from"./PrimaryButton.9b9c9d1e.js";import{H as g,L as y,u as w,r as i,o as r,i as v,w as k,a as L,b as t,c as m,t as d,f as l,d as B,e as A,v as C,n as F}from"./app.8e100c5e.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.1b7770a4.js";const V={components:{Head:g,AdminLayout:p,InputError:_,InputLabel:b,TextInput:x,Link:y,PrimaryButton:h},data:()=>({passwordFieldType:"password"}),props:{status:String},methods:{submit(){this.form.post(route("password.email"),{onFinish:()=>{}})}},setup(){return{form:w({email:""})}},mounted(){}},I={class:"pt-6 md:px-20 px-4 bg-custom"},M=t("h1",{class:"mb-10 text-xl text-center font-bold"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8",-1),N={key:0,class:"mb-4 font-medium text-sm w-full text-center text-green-600"},S=t("div",{class:"pl-4 mb-3 text-lg font-bold text-gray-600"}," \u767B\u9332\u6642\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01 ",-1),T={class:"mb-6"},D={key:0,class:"text-red-500 text-sm mt-1"},E={class:"flex items-center justify-center mt-4 pb-7"},P=["disabled"];function j(c,o,a,e,z,n){const u=i("Head"),f=i("AdminLayout");return r(),v(f,null,{default:k(()=>[L(u,{title:"\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8"}),t("div",I,[M,a.status?(r(),m("div",N,d(a.status),1)):l("",!0),S,t("form",{onSubmit:o[1]||(o[1]=B((...s)=>n.submit&&n.submit(...s),["prevent"]))},[t("div",T,[A(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.email=s),id:"email",type:"email",class:"h-12 shadow-xl rounded-xl w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@365.inc"},null,512),[[C,e.form.email]]),e.form.errors.email?(r(),m("div",D,d(e.form.errors.email),1)):l("",!0)]),t("div",E,[t("button",{type:"submit",class:F([{"opacity-25":e.form.processing},"inline-block items-center px-10 py-2.5 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"]),disabled:e.form.processing}," \u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30E1\u30FC\u30EB\u3092\u9001\u4FE1 ",10,P)])],32)])]),_:1})}const Q=H(V,[["render",j]]);export{Q as default};
