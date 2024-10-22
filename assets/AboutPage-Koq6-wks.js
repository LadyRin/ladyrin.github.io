import{d as g,o as u,c as h,a as t,t as n,n as $,_ as v,r as d,b as w,e as _,F as y,f as L,g as P,p as C,h as S,i as j}from"./index-CePbmtHX.js";const M={class:"container"},A={class:"bar"},B=g({__name:"LanguageBar",props:{language:{type:Object,required:!0}},setup(l){return(m,c)=>(u(),h("div",M,[t("span",null,n(l.language.name)+" - "+n(l.language.text)+" - "+n(l.language.percent)+"% ",1),t("div",A,[t("div",{class:"progress",style:$({width:l.language.percent+"%",backgroundColor:l.language.color})},null,4)])]))}}),T=v(B,[["__scopeId","data-v-57a9df90"]]),o=l=>(C("data-v-358ada43"),l=l(),S(),l),D={class:"container",id:"about-page"},H=o(()=>t("li",null,[t("a",{href:"https://github.com/LadyRin",target:"_blank"},[t("svg",{height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",class:"octicon octicon-mark-github v-align-middle color-fg-default"},[t("path",{fill:"#e0e1dd",d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})])])],-1)),I={class:"wrapper"},O={class:"intro"},V=["innerHTML"],E={class:"skills"},F=o(()=>t("ul",null,[t("li",null,"Java"),t("li",null,"C#"),t("li",null,"C et C++"),t("li",null,"Python"),t("li",null,"HTML / CSS"),t("li",null,"TypeScript"),t("li",null,"PHP"),t("li",null,"SQL (PostgreSQL & Oracle)")],-1)),G=o(()=>t("ul",null,[t("li",null,"Django"),t("li",null,"Vue.js"),t("li",null,"Symfony"),t("li",null,"API Platform"),t("li",null,"OpenGL")],-1)),N=o(()=>t("li",null,"Git",-1)),Q=o(()=>t("li",null,"Linux",-1)),R=o(()=>t("li",null,"Unity",-1)),W=o(()=>t("li",null,"Docker",-1)),q={class:"wakatime-header"},z=o(()=>t("a",{href:"https://wakatime.com/",target:"_blank"},"Wakatime",-1)),J=o(()=>t("img",{src:j,alt:""},null,-1)),U=[J],Z={class:"languages"},K=o(()=>t("figure",{class:"wakatime"},[t("embed",{class:"wakatime-embed",src:"https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/44c684ad-791d-4d1c-8dfb-dc78867276c6.svg"})],-1)),X=g({__name:"AboutPage",emits:{openPage:l=>!0},setup(l,{emit:m}){const c=d("Loading..."),p=d("Loading..."),f=m,r=e=>{f("openPage",e)},k=e=>{const a=Math.floor(e/3600),s=Math.floor(e%3600/60);return`${a}hrs ${s}min`},i=d([]),b=()=>{fetch("https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/799796cc-7c0f-4814-832d-cec25324fcb9.json").then(e=>e.json()).then(e=>{c.value=e.data.grand_total.human_readable_total,p.value=e.data.grand_total.human_readable_daily_average}).then(()=>{fetch("https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/1ff55c75-beed-49c4-9fe4-84a9f2a94aa2.json").then(e=>e.json()).then(e=>{i.value=e.data.map(a=>({name:a.name,text:a.text,percent:a.percent,seconds:a.total_seconds,color:a.color}))}).then(()=>{const e={name:"Others",text:"Others",percent:0,seconds:0,color:"#000000"};i.value.forEach(a=>{a.percent<2&&(e.percent+=a.percent,e.seconds+=a.seconds)}),e.percent=Math.round(e.percent*100)/100,i.value=i.value.filter(a=>a.percent>=2),e.text=k(e.seconds),i.value.push(e)})})};return w(()=>{b()}),(e,a)=>(u(),h("div",D,[t("nav",null,[t("ul",null,[t("li",null,[t("span",{onClick:a[0]||(a[0]=s=>r("?path=/home/shark/Desktop/About.html"))},n(e.$t("about.navAbout")),1)]),t("li",null,[t("span",{onClick:a[1]||(a[1]=s=>r("?path=/home/shark/Documents/Projects.html"))},n(e.$t("about.navProjects")),1)]),t("li",null,[t("span",{onClick:a[2]||(a[2]=s=>r("?path=/home/shark/Documents/Contact.html"))},n(e.$t("about.navContact")),1)]),H])]),t("main",null,[t("div",I,[t("h1",null,n(e.$t("about.title")),1),t("div",O,[t("p",{innerHTML:e.$t("about.intro")},null,8,V)]),t("h2",null,n(e.$t("about.skillsTitle"))+" :",1),t("div",E,[t("div",null,[t("h3",null,n(e.$t("about.languages")),1),F]),t("div",null,[t("h3",null,n(e.$t("about.frameworks")),1),G]),t("div",null,[t("h3",null,n(e.$t("about.tools")),1),t("ul",null,[N,Q,R,W,t("li",null,n(e.$t("about.tongues")),1),t("li",null,n(e.$t("about.projectManagement")),1)])])]),t("div",q,[t("h2",null,[_(n(e.$t("about.wakatimeStats"))+" ",1),z,_(") ")]),t("button",{onClick:b,id:"refresh-button"},U)]),t("h4",null,n(e.$t("about.codingHours"))+" : "+n(c.value),1),t("h4",null,n(e.$t("about.dailyAverage",[p.value])),1),t("div",Z,[(u(!0),h(y,null,L(i.value,s=>(u(),P(T,{language:s,key:s.name},null,8,["language"]))),128))]),t("h3",null,n(e.$t("about.activity")),1),K])])]))}}),x=v(X,[["__scopeId","data-v-358ada43"]]);export{x as default};