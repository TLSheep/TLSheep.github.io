import{_ as b,e as a,c as i,d as e,f as d,u as t,F as v,r as f,i as _,o as c,t as g}from"./index-CuU9_U-M.js";const m={class:"P2"},y={class:"progress"},k={class:"progress_line_container"},h={class:"btn_group"},B=["disabled"],C=["disabled"],E={__name:"Project2",props:{points:{type:Number,default:4},line_color:{type:String,default:"#3498DB"}},setup(p){const o=p;let u=a(o.points>10?10:o.points),l=a(o.points-1),s=a(0);return(P,r)=>(c(),i("div",m,[e("div",y,[e("div",k,[e("div",{class:"progress_line",style:d({width:100/t(l)*t(s)+"%",backgroundColor:o.line_color})},null,4)]),(c(!0),i(v,null,f(t(u),n=>(c(),i("div",{class:"point",style:d({borderColor:t(s)>=n-1?o.line_color:"#E0E0E0"}),key:n},g(n),5))),128))]),e("div",h,[e("button",{class:"btn",disabled:t(s)===0,onClick:r[0]||(r[0]=n=>t(s)===0?0:_(s)?s.value--:s--)},"Prev",8,B),e("button",{class:"btn",disabled:t(s)===t(l),onClick:r[1]||(r[1]=n=>t(s)===t(l)?t(s):_(s)?s.value++:s++)},"Next",8,C)])]))}},S=b(E,[["__scopeId","data-v-2aabc599"]]);export{S as default};
