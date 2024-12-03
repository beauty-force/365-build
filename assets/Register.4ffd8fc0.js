import{u as p,o as c,i as _,w as n,a,G as e,H as w,b as r,g as d,L as g,n as V,d as b}from"./app.8e100c5e.js";import{_ as v}from"./GuestLayout.039a0b61.js";import{_ as t,a as m,b as i}from"./TextInput.8c81c0b7.js";import{_ as y}from"./PrimaryButton.9b9c9d1e.js";import"./ApplicationLogo.2ae515bb.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=["onSubmit"],k={class:"mt-4"},$={class:"mt-4"},h={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},L={__name:"Register",setup(N){const s=p({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(f,o)=>(c(),_(v,null,{default:n(()=>[a(e(w),{title:"Register"}),r("form",{onSubmit:b(u,["prevent"])},[r("div",null,[a(t,{for:"name",value:"Name"}),a(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(s).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),r("div",k,[a(t,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[1]||(o[1]=l=>e(s).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",$,[a(t,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[2]||(o[2]=l=>e(s).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",h,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>e(s).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",q,[a(e(g),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{L as default};
