import{a as m}from"./axios-L6U4YIEh.js";import{_ as u,c as _,b as e,i as p,j as l,v as d,d as f,w as h,r as w,o as g}from"./index-pNsrxfov.js";import{_ as b}from"./langyuanstorelogo-qhIb6m_O.js";var v={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:x}=v,P={data(){return{user:{username:"",password:""}}},methods:{login(){const r=`${x}/v2/admin/signin`;m.post(r,this.user).then(s=>{alert(s.data.message);const{token:n,expired:a}=s.data;document.cookie=`hexToken=${n}; expires=${new Date(a)};`,this.$router.push("/admin/order")}).catch(s=>{alert(s.response.data.message)})}}},y={class:"container-fluid mt-5"},E={class:"row justify-content-center"},V=e("img",{class:"img-fluid",style:{width:"150px",height:"150px"},src:b,alt:""},null,-1),A=e("h1",{class:"h3 mb-3 font-weight-normal text-center"},"後台管理員登入",-1),k={class:"col-6 col-md-4"},I={class:"form-floating mb-3"},U=e("label",{for:"username"},"Email address",-1),D={class:"form-floating"},R=e("label",{for:"password"},"Password",-1),T=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),B=e("button",{type:"button",class:"btn btn-outline-primary btn-sm w-100 mt-3"}," 回到首頁 ",-1);function L(r,s,n,a,o,i){const c=w("router-link");return g(),_("div",y,[e("div",E,[V,A,e("div",k,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=p((...t)=>i.login&&i.login(...t),["prevent"]))},[e("div",I,[l(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=t=>o.user.username=t),class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,o.user.username]]),U]),e("div",D,[l(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=t=>o.user.password=t),class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[d,o.user.password]]),R]),T,f(c,{to:"/"},{default:h(()=>[B]),_:1})],32)])])])}const j=u(P,[["render",L]]);export{j as default};
