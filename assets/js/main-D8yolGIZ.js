function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./parent-CWf9nN-v.js","./index-Db6VnN3C.js","./@vue-HrMasQv8.js","./pinia-KM1LF1CQ.js","./vue-demi-Dq6ymT-8.js","./vue-router-CNO1fUVn.js","./vue-i18n-BvBBS3QZ.js","./@intlify-COHHyPI8.js","./vue-CE7TxhWI.js","./js-cookie-Cz0CWeBA.js","./@element-plus-e7foqBra.js","./nprogress-Bx-CsPDi.js","../css/nprogress-BUMXTAWU.css","./axios-Cm0UX6qg.js","./element-plus-CXqQ8W6I.js","./lodash-es-WEemOz_S.js","./@vueuse-D31sEaKM.js","./@popperjs-D9SI2xQl.js","./@ctrl-r5W6hzzQ.js","./dayjs-CphgU6An.js","./async-validator-DKvM95Vc.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-FEUMNzka.js","./qs-Bc-_vL76.js","./side-channel-nON-R0av.js","./get-intrinsic-B1Ut8WxJ.js","./es-errors-DzOT6E3C.js","./has-symbols-eVqrYdw7.js","./has-proto-JnoBQRdH.js","./function-bind-B8G-TZ45.js","./hasown-B9bXSDSU.js","./call-bind-Aj7T_c8u.js","./set-function-length-Ct5B6P4y.js","./define-data-property-CUxyvwXF.js","./es-define-property-28jGrh5V.js","./gopd-O61WwtTx.js","./has-property-descriptors-Cvfij9iw.js","./object-inspect-CZY0DhK8.js","./mitt-DJ65BbbF.js","./vue-grid-layout-CDkJeOvw.js","../css/index-GNeqaqKp.css","./index-Tta6_wHL.js","../css/index-Bky9TZVV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as L,u as M,N as E,b as m}from"./index-Db6VnN3C.js";import{u as H}from"./vue-router-CNO1fUVn.js";import{s as p}from"./pinia-KM1LF1CQ.js";import{d as v,b as u,j as t,i as N,ah as r,o as c,M as _,O as d,U as a,u as f,R as P,J as A,aU as y}from"./@vue-HrMasQv8.js";import"./vue-i18n-BvBBS3QZ.js";import"./@intlify-COHHyPI8.js";import"./vue-CE7TxhWI.js";import"./js-cookie-Cz0CWeBA.js";import"./@element-plus-e7foqBra.js";import"./nprogress-Bx-CsPDi.js";import"./axios-Cm0UX6qg.js";import"./element-plus-CXqQ8W6I.js";import"./lodash-es-WEemOz_S.js";import"./@vueuse-D31sEaKM.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CphgU6An.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-FEUMNzka.js";import"./qs-Bc-_vL76.js";import"./side-channel-nON-R0av.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CZY0DhK8.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-CDkJeOvw.js";import"./vue-demi-Dq6ymT-8.js";const B=v({name:"layoutMain"}),ke=v({...B,setup(O,{expose:w}){const h=y(()=>m(()=>import("./parent-CWf9nN-v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url)),b=y(()=>m(()=>import("./index-Tta6_wHL.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,43]),import.meta.url)),i=u();H();const g=L(),x=M(),{themeConfig:e}=p(x),{isTagsViewCurrenFull:k}=p(g),o=u(!1),C=t(()=>e.value.isFixedHeader),R=t(()=>e.value.isFixedHeader?".layout-backtop-header-fixed .el-scrollbar__wrap":".layout-backtop .el-scrollbar__wrap"),s=t(()=>{if(k.value)return"0px";const{isTagsview:l,layout:n}=e.value;return l&&n!=="classic"?"85px":"51px"});return N(()=>{E.done(600),o.value=window.innerWidth<=767}),window.addEventListener("resize",()=>{o.value=window.innerWidth<=767}),w({layoutMainScrollbarRef:i}),(l,n)=>{const T=r("el-scrollbar"),V=r("el-backtop"),F=r("el-main");return c(),_(F,{class:"layout-main",style:A(C.value?`height: calc(100% - ${s.value})`:`minHeight: calc(100% - ${s.value})`)},{default:d(()=>[a(T,{ref_key:"layoutMainScrollbarRef",ref:i,class:"layout-main-scroll layout-backtop-header-fixed","wrap-class":"layout-main-scroll","view-class":"layout-main-scroll"},{default:d(()=>[a(f(h))]),_:1},512),o.value?(c(),_(f(b),{key:0})):P("",!0),a(V,{target:R.value},null,8,["target"])]),_:1},8,["style"])}}});export{ke as default};
