import{a as l}from"./axios-L6U4YIEh.js";import{_ as h,o as _,c as p,d as a,w as c,e as i,b as e,i as v,r as d,h as g,E as b}from"./index-ASzIBon2.js";var P={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:x}=P,A={methods:{signOut(){const o=`${x}/v2/logout`;l.post(o).then(t=>{alert(t.data.message),document.cookie="hexToken=; expires=; path=/",this.$router.push("/")}).catch(t=>{alert(t.response.data.message)})}}},$={class:"d-flex flex-column p-3 text-white bg-dark",style:{width:"250px",height:"100vh",position:"fixed"}},k=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},null,-1),E=e("hr",null,null,-1),I={class:"nav nav-pills flex-column mb-auto"},V={class:"nav-item"},R={class:"nav-item"},T=e("hr",null,null,-1),w={class:"col-3"};function D(o,t,m,f,u,n){const s=d("router-link");return _(),p("div",$,[a(s,{class:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fs-4",to:"/"},{default:c(()=>[i("返回前台")]),_:1}),k,E,e("ul",I,[e("li",V,[a(s,{class:"nav-link",to:"/admin/order"},{default:c(()=>[i("訂單列表")]),_:1})]),e("li",R,[a(s,{class:"nav-link",to:"/admin/products"},{default:c(()=>[i("產品列表")]),_:1})])]),T,e("div",w,[e("button",{type:"button",class:"btn btn-outline-light btn-sm",onClick:t[0]||(t[0]=v((...r)=>n.signOut&&n.signOut(...r),["prevent"]))},"登出")])])}const N=h(A,[["render",D]]);var y={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:S}=y,U={data(){return{status:!1}},components:{DashboardNavbar:N},methods:{checkAdmin(){const o=`${S}/v2/api/user/check`;l.post(o).then(t=>{this.status=!0,this.$router.push("/admin/order")}).catch(t=>{console.log(t),alert(t.response.data.message),this.$router.push("/login")})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.defaults.headers.common.Authorization=o,this.checkAdmin()}},L={class:"container-fluid"},O={class:"row"},B={class:"col-auto col-sm-3 g-0"},C={class:"col-auto col-sm-8"};function M(o,t,m,f,u,n){const s=d("DashboardNavbar"),r=d("router-view");return _(),p("div",L,[e("div",O,[e("div",B,[a(s)]),e("div",C,[u.status?(_(),g(r,{key:0})):b("",!0)])])])}const q=h(U,[["render",M]]);export{q as default};
