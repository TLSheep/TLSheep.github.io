import{_ as p,r as t,c as s,F as _,a as o,d as u,o as n,t as h}from"./index-Hi5t869m.js";const g={class:"container"},b=["id","src"],y={class:"buttons"},w=["onClick"],f={__name:"Project9",setup(k){const r=t("audios/"),d=t([{id:0,id_name:"mb",s_name:"Manbo",src:"mb-1.mp3"},{id:1,id_name:"amns",s_name:"Aminuosi",src:"amns.mp3"},{id:2,id_name:"hjm",s_name:"Hjimi",src:"hjm.mp3"},{id:3,id_name:"hhd",s_name:"Heh",src:"hhd.mp3"},{id:4,id_name:"www",s_name:"WHOOO~",src:"www.mp3"},{id:5,id_name:"redf",s_name:"Shy",src:"redf.mp3"},{id:6,id_name:"smallbaby",s_name:"littleBaby",src:"smallbaby.mp3"},{id:7,id_name:"swordB",s_name:"swordB",src:"swordB.mp3"},{id:8,id_name:"lookatum",s_name:"lookAtUM",src:"lookatum.mp3"},{id:9,id_name:"smallWallLight",s_name:"smallWallLight",src:"smallWallLight.mp3"},{id:10,id_name:"oldWallLight",s_name:"oldWallLight",src:"oldWallLight.mp3"},{id:11,id_name:"whySword",s_name:"whySword",src:"whySword.mp3"},{id:12,id_name:"LBW",s_name:"LBW",src:"LBW.mp3"},{id:13,id_name:"likeDog",s_name:"likeDog",src:"likeDog.mp3"},{id:14,id_name:"getFace",s_name:"getFace",src:"getFace.mp3"},{id:15,id_name:"loseFace",s_name:"loseFace",src:"loseFace.mp3"},{id:16,id_name:"fly",s_name:"fly",src:"fly.mp3"},{id:17,id_name:"dream",s_name:"dream",src:"dream.mp3"},{id:18,id_name:"bigMouth",s_name:"bigMouth",src:"bigMouth.mp3"},{id:19,id_name:"beSmart",s_name:"beSmart",src:"beSmart.mp3"},{id:20,id_name:"shit",s_name:"shit!!",src:"shit.mp3"},{id:21,id_name:"change",s_name:"change!!",src:"change.mp3"}]);let m=null;function c(e){l(),document.getElementById(e).play(),m=e}function l(){if(m){const e=document.getElementById(m);e.pause(),e.currentTime=0}}return(e,B)=>(n(),s("div",g,[(n(!0),s(_,null,o(d.value,(a,i)=>(n(),s("audio",{id:a.id_name,key:i,src:r.value+a.src},null,8,b))),128)),u("div",y,[(n(!0),s(_,null,o(d.value,(a,i)=>(n(),s("button",{class:"btn",key:i,onClick:L=>c(a.id_name)},h(a.s_name),9,w))),128))])]))}},W=p(f,[["__scopeId","data-v-c722889a"]]);export{W as default};