import{_ as n,r as _,f as i,c as d,a as o,t as l,o as p,p as r,e as h}from"./index-deS2ZShs.js";const u=e=>(r("data-v-10d61b00"),e=e(),h(),e),v={class:"container"},f={class:"small_container"},j=u(()=>o("div",{class:"title"},"Don't Laugh Challenge",-1)),k={class:"text"},m={__name:"Project10",setup(e){const s=_("");async function a(){await fetch("https://icanhazdadjoke.com",{headers:{Accept:"application/json"}}).then(c=>{c.json().then(t=>{console.log(t),s.value=t.joke})})}return i(()=>{a()}),(c,t)=>(p(),d("div",v,[o("div",f,[j,o("div",k,l(s.value),1),o("button",{class:"btn",onClick:t[0]||(t[0]=g=>a())},"Get A New Joke")])]))}},b=n(m,[["__scopeId","data-v-10d61b00"]]);export{b as default};