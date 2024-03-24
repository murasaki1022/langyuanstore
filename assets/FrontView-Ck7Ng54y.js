import{c as u}from"./cartStore-1TopY6Uw.js";import{m as x,a as v,_ as l,o as r,c as _,b as t,d as e,w as a,e as c,t as w,F as d,r as n,f as y}from"./index-JFojWkfZ.js";import"./commonjsHelpers-4gQjN7DL.js";import"./axios-L6U4YIEh.js";const $="/langyuanstore/assets/langyuannavbar-FtstrYv4.svg",k={computed:{...x(u,["cart"])},methods:{...v(u,["getCart"])},mounted(){this.getCart()}},L=t("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},null,-1),F={class:"navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light sticky-top"},C={class:"container-fluid"},N={class:"container-fluid d-flex justify-content-between align-items-center"},R=t("img",{height:"80",src:$,alt:"logo"},null,-1),S=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse",id:"navbarSupportedContent",style:{width:"100vw"}},j={class:"navbar-nav me-auto mb-lg-0 cursor-pointer d-flex justify-content-center align-items-center"},z={class:"nav-item mx-1"},B=t("i",{class:"bi bi-house-door-fill me-1"},null,-1),T={class:"nav-item mx-1"},q=t("i",{class:"bi bi-bag-fill me-1"},null,-1),A={class:"nav-item mx-1"},D=t("i",{class:"bi bi-journal-check me-1"},null,-1),E={class:"d-flex justify-content-center align-items-center me-2"},G=t("p",{class:"fs-3 bi bi-cart4 mx-2 mt-2"},null,-1),H={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2"};function I(o,p,i,m,b,h){const s=n("RouterLink");return r(),_(d,null,[L,t("nav",F,[t("div",C,[t("div",N,[e(s,{class:"navbar-brand",to:"/"},{default:a(()=>[R]),_:1}),S]),t("div",V,[t("ul",j,[t("li",z,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/"},{default:a(()=>[B,c("回到首頁")]),_:1})]),t("li",T,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/products"},{default:a(()=>[q,c("商品專區")]),_:1})]),t("li",A,[e(s,{class:"nav-link fw-bold fs-6 text-change",to:"/q&a"},{default:a(()=>[D,c("常見問題")]),_:1})])]),t("div",E,[e(s,{to:"/cart",class:"position-relative"},{default:a(()=>[G,t("span",H,w(o.cart.length),1)]),_:1})])])])])],64)}const Y=l(k,[["render",I]]),J={},K={class:"bg-primary pt-4 pb-2 text-center"},M={class:"d-flex justify-content-center align-items-center"},O=y('<a href="https://github.com/murasaki1022/langyuanstore"><i class="bi bi-github text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">浪元</p></a><a href="https://www.facebook.com/"><i class="bi bi-facebook text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">Facebook</p></a><a href="https://www.instagram.com/"><i class="bi bi-instagram text-white fs-1 mx-3"></i><p class="text-white" style="font-size:12px;">Instagram</p></a>',3),P=t("i",{class:"bi bi-person-fill text-white fs-1 mx-3"},null,-1),Q=t("p",{class:"text-white",style:{"font-size":"12px"}},"後台",-1),U=t("p",{class:"text-center"},"本專題僅為學習用途・不做任何商業使用・圖片來源請見GitHub Repo",-1);function W(o,p){const i=n("RouterLink");return r(),_(d,null,[t("div",K,[t("div",M,[O,e(i,{to:"/login"},{default:a(()=>[P,Q]),_:1})])]),U],64)}const X=l(J,[["render",W]]),Z={components:{LangyuanNavbar:Y,LangyuanFooter:X}};function tt(o,p,i,m,b,h){const s=n("LangyuanNavbar"),f=n("RouterView"),g=n("LangyuanFooter");return r(),_(d,null,[e(s),e(f),e(g)],64)}const ot=l(Z,[["render",tt]]);export{ot as default};