import{u as k,o as B}from"./vue-router-CNO1fUVn.js";import{s as m}from"./pinia-KM1LF1CQ.js";import{l as A,u as L,e as R,_ as S}from"./index-Db6VnN3C.js";import{d,Z as M,j as D,E as H,ah as O,o as a,c,a as u,F as T,a7 as j,M as x,O as z,T as F,I as $}from"./@vue-HrMasQv8.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-i18n-BvBBS3QZ.js";import"./@intlify-COHHyPI8.js";import"./vue-CE7TxhWI.js";import"./js-cookie-Cz0CWeBA.js";import"./@element-plus-e7foqBra.js";import"./nprogress-Bx-CsPDi.js";import"./axios-Cm0UX6qg.js";import"./element-plus-CXqQ8W6I.js";import"./lodash-es-WEemOz_S.js";import"./@vueuse-D31sEaKM.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CphgU6An.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-FEUMNzka.js";import"./qs-Bc-_vL76.js";import"./side-channel-nON-R0av.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CZY0DhK8.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-CDkJeOvw.js";const w={class:"el-menu-horizontal-warp"},E={class:"mobile-bottom-nav"},I=d({name:"navMenuHorizontal"}),N=d({...I,props:{menuList:{type:Array,default:()=>[]}},setup(f){const h=f,_=A(),v=L(),{routesList:C}=m(_),{themeConfig:n}=m(v),g=k(),s=M({defaultActive:""}),y=D(()=>h.menuList.filter(o=>o.meta.isBottom).sort((o,t)=>o.meta.bottomOrder-t.meta.bottomOrder)),p=o=>o.filter(t=>{var e;return!((e=t.meta)!=null&&e.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=p(t.children)),t)),b=o=>{const t=o.split("/");let e={children:[]};return p(C.value).map((r,i)=>{r.path===`/${t[1]}`&&(r.k=i,e.item={...r},e.children=[{...r}],r.children&&(e.children=r.children))}),e},l=o=>{const{path:t,meta:e}=o;if(n.value.layout==="classic")s.defaultActive=`/${t==null?void 0:t.split("/")[1]}`;else{const r=e!=null&&e.isDynamic?e.isDynamicPath.split("/"):t.split("/");r.length>=4&&(e!=null&&e.isHide)?s.defaultActive=r.splice(0,3).join("/"):s.defaultActive=t}};return H(()=>{l(g)}),B(o=>{l(o);let{layout:t,isClassicSplitMenu:e}=n.value;t==="classic"&&e&&R.emit("setSendClassicChildren",b(o.path))}),(o,t)=>{const e=O("router-link");return a(),c("div",w,[u("div",E,[(a(!0),c(T,null,j(y.value,(r,i)=>(a(),x(e,{key:i,to:r.path,class:$(["nav-item",{active:r.path===s.defaultActive}])},{default:z(()=>[u("span",null,F(o.$t(r.meta.bottomName)),1)]),_:2},1032,["to","class"]))),128))])])}}}),St=S(N,[["__scopeId","data-v-933f5115"]]);export{St as default};