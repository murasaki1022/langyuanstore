import{a as g}from"./axios-L6U4YIEh.js";import{M as w}from"./bootstrap.esm-owtkFIww.js";import{_ as M,o as i,c as n,b as t,e as U,t as m,A as c,B as u,F as y,u as x,D as L,E as V,d as h,r as b}from"./index-952WuPKQ.js";import{P as I}from"./PaginationComponent-eQrzvSKX.js";import{L as E}from"./LangyuanLoading-Iigl8Enj.js";import"./commonjsHelpers-4gQjN7DL.js";const C={data(){return{delProductModal:null}},methods:{openModal(){this.delProductModal.show()},hideModal(){this.delProductModal.hide()}},props:["tempProduct","deleteProduct"],mounted(){this.delProductModal=new w(this.$refs.delProductModal,{keyboard:!1,backdrop:"static"})}},N={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},D={class:"modal-dialog"},T={class:"modal-content border-0"},R=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},$={class:"text-danger"},F={class:"modal-footer"},B=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function O(l,o,d,_,e,r){return i(),n("div",N,[t("div",D,[t("div",T,[R,t("div",S,[U(" 是否刪除 "),t("strong",$,m(d.tempProduct.title),1),U(" 商品(刪除後將無法恢復)。 ")]),t("div",F,[B,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...s)=>d.deleteProduct&&d.deleteProduct(...s))}," 確認刪除 ")])])])],512)}const q=M(C,[["render",O]]);var j={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:z,VITE_APP_API_NAME:G}=j,H={data(){return{productModal:null,editProduct:{},newImageUrl:[]}},props:["tempProduct","updateProduct","isNew"],methods:{openModal(){this.productModal.show()},hideModal(){this.productModal.hide()},uploadFile(){const l=`${z}/api/${G}/admin/upload`,o=document.querySelector("#formFileSm"),d=o.files[0],_=new FormData;_.append("file-to-upload",d),g.post(l,_).then(e=>{this.newImageUrl=e.data.imageUrl,o.value=null}).catch(e=>{console.log(e)})},copyUrl(){const l=document.querySelector("#newImage");navigator.clipboard.writeText(l.value).then(()=>{this.newImageUrl=""}).catch(o=>{console.error("複製失敗",o)})}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.productModal=new w(this.$refs.productModal,"productModal",{keyboard:!1,backdrop:"static"}),this.editProduct=this.tempProduct}},J={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-xl"},Q={class:"modal-content border-0"},W={class:"modal-header bg-dark text-white"},X={id:"productModalLabel",class:"modal-title"},Y={key:0},Z={key:1},tt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ot={class:"modal-body"},et={class:"row"},st={class:"col-sm-4"},dt={class:"mb-3"},lt=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),it=["src"],nt=t("h3",null,"上傳圖片",-1),rt={action:"/api/thisismycourse2/admin/upload",enctype:"multipart/form-data",method:"post"},at={class:"input-group mb-3"},ct=t("input",{class:"form-control form-control-sm",id:"formFileSm",type:"file","aria-describedby":"button-addon2"},null,-1),ut={class:"input-group mb-3"},pt=t("h3",{class:"mb-3"},"多圖新增",-1),mt={key:0},_t={class:"mb-3"},ht=["for"],bt=["id","onUpdate:modelValue"],Pt=["src"],ft={key:0},gt={key:1},vt={class:"col-sm-8"},yt={class:"mb-3"},Mt=t("label",{for:"title",class:"form-label"},"標題",-1),Ut={class:"row"},wt={class:"mb-3 col-md-6"},xt=t("label",{for:"category",class:"form-label"},"分類",-1),At={class:"mb-3 col-md-6"},kt=t("label",{for:"unit",class:"form-label"},"單位",-1),Lt={class:"row"},Vt={class:"mb-3 col-md-6"},It=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Et={class:"mb-3 col-md-6"},Ct=t("label",{for:"price",class:"form-label"},"售價",-1),Nt=t("hr",null,null,-1),Dt={class:"mb-3"},Tt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Rt={class:"mb-3"},St=t("label",{for:"content",class:"form-label"},"說明內容",-1),$t={class:"mb-3"},Ft={class:"form-check"},Bt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Ot={class:"modal-footer"},qt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function jt(l,o,d,_,e,r){return i(),n("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("h5",X,[d.isNew?(i(),n("span",Y,"新增產品")):(i(),n("span",Z,"編輯產品"))]),tt]),t("div",ot,[t("div",et,[t("div",st,[t("div",dt,[lt,c(t("input",{id:"imageUrl","onUpdate:modelValue":o[0]||(o[0]=s=>e.editProduct.imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[u,e.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.editProduct.imageUrl},null,8,it)]),nt,t("form",rt,[t("div",at,[ct,t("button",{class:"btn btn-outline-primary btn-sm",type:"button",id:"button-addon2",onClick:o[1]||(o[1]=(...s)=>r.uploadFile&&r.uploadFile(...s))},"上傳")]),t("div",ut,[c(t("input",{class:"form-control form-control-sm",type:"text",id:"newImage","onUpdate:modelValue":o[2]||(o[2]=s=>e.newImageUrl=s)},null,512),[[u,e.newImageUrl]]),t("button",{class:"btn btn-outline-primary btn-sm",type:"button",id:"btn",onClick:o[3]||(o[3]=(...s)=>r.copyUrl&&r.copyUrl(...s))}," 複製URL ")])]),pt,Array.isArray(e.editProduct.imagesUrl)?(i(),n("div",mt,[(i(!0),n(y,null,x(e.editProduct.imagesUrl,(s,p)=>(i(),n("div",{class:"mb-1",key:p+456},[t("div",_t,[t("label",{for:s[p],class:"form-label"},"圖片網址"+m(p+1),9,ht),c(t("input",{id:s[p],"onUpdate:modelValue":v=>e.editProduct.imagesUrl[p]=v,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,bt),[[u,e.editProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:s},null,8,Pt)]))),128)),!e.editProduct.imagesUrl.length||e.editProduct.imagesUrl[e.editProduct.imagesUrl.length-1]?(i(),n("div",ft,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[4]||(o[4]=s=>e.editProduct.imagesUrl.push(""))}," 新增圖片 ")])):(i(),n("div",gt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[5]||(o[5]=s=>e.editProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):L("",!0)]),t("div",vt,[t("div",yt,[Mt,c(t("input",{id:"title","onUpdate:modelValue":o[6]||(o[6]=s=>e.editProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[u,e.editProduct.title]])]),t("div",Ut,[t("div",wt,[xt,c(t("input",{id:"category","onUpdate:modelValue":o[7]||(o[7]=s=>e.editProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[u,e.editProduct.category]])]),t("div",At,[kt,c(t("input",{id:"unit","onUpdate:modelValue":o[8]||(o[8]=s=>e.editProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[u,e.editProduct.unit]])])]),t("div",Lt,[t("div",Vt,[It,c(t("input",{id:"origin_price","onUpdate:modelValue":o[9]||(o[9]=s=>e.editProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[u,e.editProduct.origin_price,void 0,{number:!0}]])]),t("div",Et,[Ct,c(t("input",{id:"price","onUpdate:modelValue":o[10]||(o[10]=s=>e.editProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[u,e.editProduct.price,void 0,{number:!0}]])])]),Nt,t("div",Dt,[Tt,c(t("textarea",{id:"description","onUpdate:modelValue":o[11]||(o[11]=s=>e.editProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
              `,512),[[u,e.editProduct.description]])]),t("div",Rt,[St,c(t("textarea",{id:"content","onUpdate:modelValue":o[12]||(o[12]=s=>e.editProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
              `,512),[[u,e.editProduct.content]])]),t("div",$t,[t("div",Ft,[c(t("input",{id:"is_enabled","onUpdate:modelValue":o[13]||(o[13]=s=>e.editProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[V,e.editProduct.is_enabled]]),Bt])])])])]),t("div",Ot,[qt,t("button",{type:"button",class:"btn btn-primary",onClick:o[14]||(o[14]=(...s)=>d.updateProduct&&d.updateProduct(...s))}," 確認 ")])])])],512)}const zt=M(H,[["render",jt]]);var Gt={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:P,VITE_APP_API_NAME:f}=Gt,Ht={data(){return{isLoading:!0,products:[],isNew:!1,tempProduct:{imagesUrl:[]},pages:{}}},methods:{getProductList(l=1){const o=`${P}/v2/api/${f}/admin/products?page=${l}`;g.get(o).then(d=>{this.products=d.data.products,this.pages=d.data.pagination,this.isLoading=!1}).catch(d=>{console.log(d)})},openModal(l,o){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):l==="edit"?(this.tempProduct={...o},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.pModal.openModal()):l==="delete"&&(this.tempProduct={...o},this.$refs.removeModal.openModal())},updateProduct(){let l=`${P}/v2/api/${f}/admin/product/${this.tempProduct.id}`,o="put";this.isNew&&(l=`${P}/v2/api/${f}/admin/product`,o="post"),g[o](l,{data:this.tempProduct}).then(d=>{alert(d.data.message),this.$refs.pModal.hideModal(),this.getProductList()}).catch(d=>{alert(d.data.message)})},deleteProduct(){const l=`${P}/v2/api/${f}/admin/product/${this.tempProduct.id}`;g.delete(l).then(o=>{alert(o.data.message),this.$refs.removeModal.hideModal(),this.getProductList()}).catch(o=>{alert(o.data.message)})}},components:{DeleteProductModal:q,PaginationComponent:I,ProductsModal:zt,LangyuanLoading:E},mounted(){this.getProductList()}},Jt={class:"text-end"},Kt={class:"table mt-4"},Qt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",{width:"120"},"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"100"},"編輯")])],-1),Wt={class:"text-end"},Xt={class:"text-end"},Yt={key:0,class:"text-success"},Zt={key:1},to={class:"btn-group"},oo=["onClick"],eo=["onClick"];function so(l,o,d,_,e,r){const s=b("LangyuanLoading"),p=b("PaginationComponent"),v=b("ProductsModal"),A=b("DeleteProductModal");return i(),n(y,null,[h(s,{active:e.isLoading,"onUpdate:active":o[0]||(o[0]=a=>e.isLoading=a)},null,8,["active"]),t("div",Jt,[t("button",{class:"btn btn-primary mt-4",onClick:o[1]||(o[1]=a=>r.openModal("new"))}," 建立新的產品 ")]),t("table",Kt,[Qt,t("tbody",null,[(i(!0),n(y,null,x(e.products,a=>(i(),n("tr",{key:a.id},[t("td",null,m(a.category),1),t("td",null,m(a.title),1),t("td",Wt,"$"+m(a.origin_price),1),t("td",Xt,"$"+m(a.price),1),t("td",null,[a.is_enabled?(i(),n("span",Yt,"啟用")):(i(),n("span",Zt,"未啟用"))]),t("td",null,[t("div",to,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>r.openModal("edit",a)}," 編輯 ",8,oo),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>r.openModal("delete",a)}," 刪除 ",8,eo)])])]))),128))])]),h(p,{pages:e.pages,onChangePages:r.getProductList},null,8,["pages","onChangePages"]),h(v,{"update-product":r.updateProduct,"temp-product":e.tempProduct,isNew:e.isNew,ref:"pModal"},null,8,["update-product","temp-product","isNew"]),h(A,{"temp-product":e.tempProduct,"delete-product":r.deleteProduct,ref:"removeModal"},null,8,["temp-product","delete-product"])],64)}const uo=M(Ht,[["render",so]]);export{uo as default};
