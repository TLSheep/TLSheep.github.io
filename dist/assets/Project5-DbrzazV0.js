import{_ as n,r as i,c as p,d as s,b as o,t as u,o as _}from"./index-NaYvFPzL.js";const d={class:"container"},m=["src"],v={__name:"Project5",props:{pic_src:{type:String,default:"imgs/6.png"},speed:{type:Number,default:30}},setup(r){const e=i(0),a=r;function l(){let t=0,c=setInterval(()=>{t++,t===100&&clearInterval(c),e.value=t},a.speed)}return l(),(t,c)=>(_(),p("div",d,[s("img",{class:"pic",src:a.pic_src},null,8,m),s("div",{class:"mask",style:o({"backdrop-filter":`blur(${40-e.value/2.5}px)`})},null,4),s("div",{class:"count_down",style:o({opacity:1-e.value/100})},u(e.value>95?99:e.value+5)+"%",5)]))}},y=n(v,[["__scopeId","data-v-7e2d9ab3"]]);export{y as default};