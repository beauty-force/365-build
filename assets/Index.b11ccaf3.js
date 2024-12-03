import{H as _,u as d,r as c,o as m,c as b,a as u,w as p,F as g,b as e,n as s,f,g as v,t as x}from"./app.8e100c5e.js";import{A as D}from"./Admin.f9778680.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as k,d as w,U as S,o as L,f as O}from"./toastify.1b7770a4.js";const T={components:{Head:_,AdminLayout:D,Dialog:k,DialogPanel:w,DialogTitle:S,TransitionChild:L,TransitionRoot:O},props:{errors:Object,maintainance:String,testOrLive:String,is3DSecure:String,has3DChallenge:String},data(){return{}},methods:{changeMaintainance(n){this.form.maintainance=n},changeTestOrLive(n){this.form_payment.testOrLive=n},change3DSecure(n){this.form_payment.is3DSecure=n},change3DChallenge(n){this.form_payment.has3DChallenge=n},submit(){this.form.post(route("admin.settings.maintenance_store"),{onFinish:()=>{}})},submit_payment(){this.form_payment.post(route("admin.settings.payment_store"),{onFinish:()=>{}})}},setup(n){let t={maintainance:n.maintainance};const i=d(t);let r={testOrLive:n.testOrLive,is3DSecure:n.is3DSecure,has3DChallenge:n.has3DChallenge};const l=d(r);return{form:i,form_payment:l}},mounted(){}},N={class:"mt-6 px-5"},F=e("h3",{class:"mb-2 text-lg font-bold"},"\u6C7A\u6E08\u306E\u8A2D\u5B9A",-1),A=e("hr",{class:"mb-4"},null,-1),H={class:"mb-6"},V=e("td",null,"\u6C7A\u6E08\u30E2\u30FC\u30C9",-1),B={class:"px-3 text-cyan-500 text-sm"},U={class:"mb-6"},j=e("td",null,"3D\u30BB\u30AD\u30E5\u30A2",-1),z={class:"px-3 text-cyan-500 text-sm"},E={key:0,class:"mb-6"},I=e("td",null,"3D\u30C1\u30E3\u30EC\u30F3\u30B8\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8",-1),M={class:"px-3 text-cyan-500 text-sm"},P={class:"mb-6 text-center"},R=["href"],q={class:"text-center mb-6"};function G(n,t,i,r,l,o){const y=c("Head"),h=c("AdminLayout");return m(),b(g,null,[u(y,{title:"\u8A2D\u5B9A"}),u(h,null,{default:p(()=>[e("div",N,[F,A,e("div",H,[e("table",null,[e("tbody",null,[e("tr",null,[V,e("td",B,[e("div",{onClick:t[0]||(t[0]=a=>o.changeTestOrLive("live")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-l-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.testOrLive=="live"}])},"\u30E9\u30A4\u30D6",2),e("div",{onClick:t[1]||(t[1]=a=>o.changeTestOrLive("test")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-r-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.testOrLive!="live"}])},"\u30C6\u30B9\u30C8",2)])])])])]),e("div",U,[e("table",null,[e("tbody",null,[e("tr",null,[j,e("td",z,[e("div",{onClick:t[2]||(t[2]=a=>o.change3DSecure("1")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-l-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.is3DSecure=="1"}])},"\u9069\u7528",2),e("div",{onClick:t[3]||(t[3]=a=>o.change3DSecure("0")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-r-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.is3DSecure!="1"}])},"\u975E\u9069\u7528",2)])])])])]),r.form_payment.is3DSecure=="1"&&r.form_payment.is3DSecure=="0"?(m(),b("div",E,[e("table",null,[e("tbody",null,[e("tr",null,[I,e("td",M,[e("div",{onClick:t[4]||(t[4]=a=>o.change3DChallenge("1")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-l-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.has3DChallenge=="1"}])},"On",2),e("div",{onClick:t[5]||(t[5]=a=>o.change3DChallenge("0")),class:s(["cursor-pointer border border-1 border-cyan-500 inline-block text-center rounded-r-md w-16 py-1 border border-transparent",{"bg-cyan-500 text-white":r.form_payment.has3DChallenge!="1"}])},"Off",2)])])])])])):f("",!0),e("div",P,[v(" \u30C6\u30B9\u30C8\u7528\u6C7A\u6E08\u30DA\u30FC\u30B8: "),e("a",{target:"_blank",href:n.route("test.user.point"),class:"text-cyan-600 hover:text-cyan-900"},x(n.route("test.user.point")),9,R)]),e("div",q,[e("button",{type:"button",onClick:t[6]||(t[6]=a=>o.submit_payment()),class:"inline-block items-center px-10 py-2.5 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150 mr-2"}," \u4FDD\u5B58\u3059\u308B ")])])]),_:1})],64)}const X=C(T,[["render",G]]);export{X as default};
