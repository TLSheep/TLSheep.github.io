import{_ as c,c as s,F as i,a as u,o as a,t as p}from"./index-BsnbJHZM.js";const _={class:"container"},l=["onClick"],m={__name:"SoundBoard",props:{sounds:{type:Array,required:!0,default:()=>[{id:1,name:"我"},{id:2,name:"是"},{id:3,name:"帅"},{id:4,name:"逼"}]}},setup(t){const r=t,n=new Audio,d=o=>{n.src=`src/asset/sounds/${o}.mp3`,n.play()};return(o,y)=>(a(),s("div",_,[(a(!0),s(i,null,u(r.sounds,e=>(a(),s("div",{key:e.id,onClick:f=>d(e.name),class:"sound-board"},p(e.name),9,l))),128))]))}},v=c(m,[["__scopeId","data-v-348ea313"]]);export{v as default};