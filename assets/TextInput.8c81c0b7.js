import{e as c,Z as i,o as t,c as a,b as d,t as n,k as m,s as _,x as p}from"./app.8e100c5e.js";const f={class:"text-sm text-red-600"},k={__name:"InputError",props:["message"],setup(e){return(o,s)=>c((t(),a("div",null,[d("p",f,n(e.message),1)],512)),[[i,e.message]])}},v={class:"block font-medium text-sm text-gray-700"},g={key:0},h={key:1},y={__name:"InputLabel",props:["value"],setup(e){return(o,s)=>(t(),a("label",v,[e.value?(t(),a("span",g,n(e.value),1)):(t(),a("span",h,[m(o.$slots,"default")]))]))}},b=["value"],$={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const s=_(null);return p(()=>{s.value.hasAttribute("autofocus")&&s.value.focus()}),o({focus:()=>s.value.focus()}),(r,u)=>(t(),a("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:u[0]||(u[0]=l=>r.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:s},null,40,b))}};export{y as _,$ as a,k as b};
