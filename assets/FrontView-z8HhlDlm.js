import{c as m}from"./cartStore-ojgiscXD.js";import{m as x,a as w,_ as c,o as u,c as b,b as s,d as t,w as o,e,t as y,F as v,r as n,f as $}from"./index-QHj10APE.js";import{b as f}from"./bootstrap.esm-owtkFIww.js";import"./sweetalert2.all-LHpgrSOc.js";import"./commonjsHelpers-4gQjN7DL.js";import"./axios-L6U4YIEh.js";const k="/langyuanstore/assets/langyuannavbar-FtstrYv4.svg";window.bootstrap=f;const F={computed:{...x(m,["cart"])},methods:{...w(m,["getCart"])},mounted(){this.getCart()}},C=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},null,-1),N={class:"navbar navbar-expand-lg navbar-light bg-light"},S={class:"container-fluid"},L=s("img",{height:"80",src:k,alt:""},null,-1),V=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse",id:"navbarSupportedContent"},B={class:"navbar-nav mx-auto mb-2 mb-lg-0"},T={class:"nav-item"},A={class:"nav-item"},E={class:"nav-item"},q=s("p",{class:"fs-2 bi bi-search text-primary mx-2"},null,-1),z=s("p",{class:"fs-2 bi bi-clipboard2-check text-primary mx-2"},null,-1),D=s("p",{class:"fs-2 bi bi-cart4 mx-2"},null,-1),G={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},H=s("span",{class:"visually-hidden"},"unread messages",-1);function Q(l,i,r,d,p,_){const a=n("router-link");return u(),b(v,null,[C,s("nav",N,[s("div",S,[t(a,{class:"navbar-brand",to:"/"},{default:o(()=>[L]),_:1}),V,s("div",j,[s("ul",B,[s("li",T,[t(a,{class:"nav-link fw-bold text-change",to:"/"},{default:o(()=>[e("回到首頁")]),_:1})]),s("li",A,[t(a,{class:"nav-link fw-bold text-change",to:"/products"},{default:o(()=>[e("商品專區")]),_:1})]),s("li",E,[t(a,{class:"nav-link fw-bold text-change",to:"/q&a"},{default:o(()=>[e("常見問題")]),_:1})])])]),q,t(a,{to:"/search-order"},{default:o(()=>[z]),_:1}),t(a,{to:"/cart",class:"position-relative"},{default:o(()=>[D,s("span",G,[e(y(l.cart.length)+" ",1),H])]),_:1})])])],64)}const R=c(F,[["render",Q]]);window.bootstrap=f;const W={},Y=$('<div class="bg-primary mt-5 pt-5 pb-5"><div class="d-flex justify-content-center"><div class="fw-bold"><div class="row g-0"><div class="col col-sm-3"><ul class="fs-5">浪圓集團 <li class="fs-6">浪元小賣店</li><li class="fs-6">浪圓</li></ul></div><div class="col col-sm-3"><ul class="fs-5">常見問題 <li class="fs-6">FAQ</li></ul></div><div class="col col-sm-4"><ul class="fs-5">聯絡我們 <li class="fs-6">營業時間：<br>周一至周五 09:30 - 18:00</li><li class="fs-6">客服電話：<br>02-1234-6789</li><li class="fs-6">E-mail：<br>service@gmail.com</li></ul></div><div class="col col-sm-1 ms-sm-3"><a href="https://www.facebook.com/?locale=zh_TW"><i class="bi bi-facebook fs-1 mx-2 text-white"></i></a><a href="https://www.instagram.com/"><i class="bi bi-instagram fs-1 mx-2 text-white"></i></a></div></div></div></div></div><div class="d-flex justify-content-center mt-1"><h5 class="fs-6"> 本專題僅為學習用途・不做任何商業使用・圖片來源請見GitHub Repo </h5></div>',2);function I(l,i,r,d,p,_){return Y}const J=c(W,[["render",I]]),K={components:{LangyuanNavbar:R,LangyuanFooter:J}};function M(l,i,r,d,p,_){const a=n("LangyuanNavbar"),h=n("router-view"),g=n("LangyuanFooter");return u(),b(v,null,[t(a),t(h),t(g)],64)}const ts=c(K,[["render",M]]);export{ts as default};