import{c as h}from"./cartStore-HFf51WNg.js";import{m as x,a as w,_ as c,o as l,c as r,b as t,d as e,w as a,e as i,t as y,F as _,r as n,f as $}from"./index--dmRUGp_.js";import{b as f}from"./bootstrap.esm-bUYV0ftw.js";import"./axios-L6U4YIEh.js";const k="/langyuanstore/assets/langyuannavbar-FtstrYv4.svg";window.bootstrap=f;const F={computed:{...x(h,["cart"])},methods:{...w(h,["getCart"])},mounted(){this.getCart()}},C=t("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},null,-1),N={class:"navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light sticky-top"},S={class:"container-fluid"},j={class:"container-fluid d-flex justify-content-between align-items-center"},L=t("img",{height:"80",src:k,alt:""},null,-1),V=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),z={class:"collapse navbar-collapse",id:"navbarSupportedContent",style:{width:"100vw"}},B={class:"navbar-nav me-auto mb-lg-0 cursor-pointer d-flex justify-content-center align-items-center"},T={class:"nav-item mx-1"},q=t("i",{class:"bi bi-house-door-fill me-1"},null,-1),A={class:"nav-item mx-1"},D=t("i",{class:"bi bi-bag-fill me-1"},null,-1),E={class:"nav-item mx-1"},G=t("i",{class:"bi bi-journal-check me-1"},null,-1),H={class:"d-flex justify-content-center align-items-center me-2"},I=t("p",{class:"fs-3 bi bi-cart4 mx-2 mt-2"},null,-1),R={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2"};function Y(o,d,p,u,b,m){const s=n("router-link");return l(),r(_,null,[C,t("nav",N,[t("div",S,[t("div",j,[e(s,{class:"navbar-brand",to:"/"},{default:a(()=>[L]),_:1}),V]),t("div",z,[t("ul",B,[t("li",T,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/"},{default:a(()=>[q,i("回到首頁")]),_:1})]),t("li",A,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/products"},{default:a(()=>[D,i("商品專區")]),_:1})]),t("li",E,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/q&a"},{default:a(()=>[G,i("常見問題")]),_:1})])]),t("div",H,[e(s,{to:"/cart",class:"position-relative"},{default:a(()=>[I,t("span",R,y(o.cart.length),1)]),_:1})])])])])],64)}const J=c(F,[["render",Y]]);window.bootstrap=f;const K={},M={class:"bg-primary pt-4 pb-2 text-center"},O={class:"d-flex justify-content-center align-items-center"},P=$('<a href="https://github.com/murasaki1022/langyuanstore"><i class="bi bi-github text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">浪元</p></a><a href="https://www.facebook.com/"><i class="bi bi-facebook text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">Facebook</p></a><a href="https://www.instagram.com/"><i class="bi bi-instagram text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">Instagram</p></a>',3),Q=t("i",{class:"bi bi-person-fill text-white fs-1 mx-3"},null,-1),U=t("p",{class:"text-white",style:{"font-size":"12px"}},"後台",-1),W=t("p",{class:"text-center"},"本專題僅為學習用途・不做任何商業使用・圖片來源請見GitHub Repo",-1);function X(o,d,p,u,b,m){const s=n("router-link");return l(),r(_,null,[t("div",M,[t("div",O,[P,e(s,{to:"/login"},{default:a(()=>[Q,U]),_:1})])]),W],64)}const Z=c(K,[["render",X]]),tt={components:{LangyuanNavbar:J,LangyuanFooter:Z}};function st(o,d,p,u,b,m){const s=n("LangyuanNavbar"),g=n("router-view"),v=n("LangyuanFooter");return l(),r(_,null,[e(s),e(g),e(v)],64)}const it=c(tt,[["render",st]]);export{it as default};
