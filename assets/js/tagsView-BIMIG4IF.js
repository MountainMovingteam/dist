function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./contextmenu-BFCPVTvD.js","./@vue-HrMasQv8.js","./index-Db6VnN3C.js","./pinia-KM1LF1CQ.js","./vue-demi-Dq6ymT-8.js","./vue-router-CNO1fUVn.js","./vue-i18n-BvBBS3QZ.js","./@intlify-COHHyPI8.js","./vue-CE7TxhWI.js","./js-cookie-Cz0CWeBA.js","./@element-plus-e7foqBra.js","./nprogress-Bx-CsPDi.js","../css/nprogress-BUMXTAWU.css","./axios-Cm0UX6qg.js","./element-plus-CXqQ8W6I.js","./lodash-es-WEemOz_S.js","./@vueuse-D31sEaKM.js","./@popperjs-D9SI2xQl.js","./@ctrl-r5W6hzzQ.js","./dayjs-CphgU6An.js","./async-validator-DKvM95Vc.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-FEUMNzka.js","./qs-Bc-_vL76.js","./side-channel-nON-R0av.js","./get-intrinsic-B1Ut8WxJ.js","./es-errors-DzOT6E3C.js","./has-symbols-eVqrYdw7.js","./has-proto-JnoBQRdH.js","./function-bind-B8G-TZ45.js","./hasown-B9bXSDSU.js","./call-bind-Aj7T_c8u.js","./set-function-length-Ct5B6P4y.js","./define-data-property-CUxyvwXF.js","./es-define-property-28jGrh5V.js","./gopd-O61WwtTx.js","./has-property-descriptors-Cvfij9iw.js","./object-inspect-CZY0DhK8.js","./mitt-DJ65BbbF.js","./vue-grid-layout-CDkJeOvw.js","../css/index-GNeqaqKp.css","../css/contextmenu-CVovc6-D.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as G,u as Te,l as be,k as Re,o as J,e as d,b as xe,S as y,q as Q,_ as qe}from"./index-Db6VnN3C.js";import{d as te,b as D,Z as Se,j as $,E as De,Y as _e,ai as Ae,i as Ie,e as ke,ah as ee,o as h,c as C,U as O,O as Pe,a as se,I as E,F as ae,a7 as Ue,a2 as T,R as b,M,T as $e,u as Oe,aU as Ee,n as j}from"./@vue-HrMasQv8.js";import{u as Me,b as je,o as Ne}from"./vue-router-CNO1fUVn.js";import{S as Be}from"./sortablejs-BS5toX6s.js";import{s as N}from"./pinia-KM1LF1CQ.js";import{E as Fe}from"./element-plus-CXqQ8W6I.js";import"./vue-i18n-BvBBS3QZ.js";import"./@intlify-COHHyPI8.js";import"./vue-CE7TxhWI.js";import"./js-cookie-Cz0CWeBA.js";import"./@element-plus-e7foqBra.js";import"./nprogress-Bx-CsPDi.js";import"./axios-Cm0UX6qg.js";import"./qs-Bc-_vL76.js";import"./side-channel-nON-R0av.js";import"./get-intrinsic-B1Ut8WxJ.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-B8G-TZ45.js";import"./hasown-B9bXSDSU.js";import"./call-bind-Aj7T_c8u.js";import"./set-function-length-Ct5B6P4y.js";import"./define-data-property-CUxyvwXF.js";import"./es-define-property-28jGrh5V.js";import"./gopd-O61WwtTx.js";import"./has-property-descriptors-Cvfij9iw.js";import"./object-inspect-CZY0DhK8.js";import"./mitt-DJ65BbbF.js";import"./vue-grid-layout-CDkJeOvw.js";import"./vue-demi-Dq6ymT-8.js";import"./lodash-es-WEemOz_S.js";import"./@vueuse-D31sEaKM.js";import"./@popperjs-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-CphgU6An.js";import"./async-validator-DKvM95Vc.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-FEUMNzka.js";const He=["data-url","onContextmenu","onMousedown","onClick"],We={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},ve=te({name:"layoutTagsView"}),ze=te({...ve,setup(Ke){const ie=Ee(()=>xe(()=>import("./contextmenu-BFCPVTvD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url)),f=D([]),R=D(),B=D(),re=D(),ne=G(),le=Te(),ue=G(),oe=be(),{themeConfig:F}=N(le),{tagsViewRoutes:H}=N(ue),{routesList:ce}=N(oe),w=Re(),m=Me(),c=je(),t=Se({routeActive:"",routePath:m.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),me=$(()=>F.value.tagsStyle),u=$(()=>F.value),fe=$(()=>s=>J.setTagsViewNameI18n(s)),x=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,p=s=>{y.set("tagsViewList",s)},W=async()=>{t.routeActive=await g(m),t.routePath=await m.meta.isDynamic?m.meta.isDynamicPath:m.path,t.tagsViewList=[],t.tagsViewRoutesList=H.value,pe()},pe=async()=>{y.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await y.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}),w.addCachedView(s))}),await _(m.path,m)),X(u.value.isShareTagsView?t.routePath:t.routeActive)},v=async(s,e)=>{var i,l;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(n=>{var o,L;return n.path===a&&Q((o=e==null?void 0:e.meta)!=null&&o.isDynamic?n.params?n.params:null:n.query?n.query:null,(L=e==null?void 0:e.meta)!=null&&L.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let n=t.tagsViewRoutesList.find(o=>o.path===a);if(!n||n.meta.isAffix||n.meta.isLink&&!n.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?n.params=e.params:n.query=e==null?void 0:e.query,n.url=g(n),t.tagsViewList.push({...n}),await w.addCachedView(n),p(t.tagsViewList)}},z=(s,e)=>{var r;let a=(r=e==null?void 0:e.meta)!=null&&r.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(i=>{var l,n,o;i.path===a&&!Q((l=e==null?void 0:e.meta)!=null&&l.isDynamic?i.params?i.params:null:i.query?i.query:null,(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((o=e==null?void 0:e.meta)!=null&&o.isDynamic?i.params=e.params:i.query=e==null?void 0:e.query,i.url=g(i),p(t.tagsViewList))})},_=(s,e)=>{j(async()=>{var r,i,l;let a;if((r=e==null?void 0:e.meta)!=null&&r.isDynamic){if(u.value.isShareTagsView?await z(s,e):await v(s,e),t.tagsViewList.some(n=>{var o;return n.path===((o=e==null?void 0:e.meta)==null?void 0:o.isDynamicPath)}))return p(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(n=>{var o;return n.path===((o=e==null?void 0:e.meta)==null?void 0:o.isDynamicPath)})}else{if(u.value.isShareTagsView?await z(s,e):await v(s,e),t.tagsViewList.some(n=>n.path===s))return p(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(n=>n.path===s)}if(!a||(i=a==null?void 0:a.meta)!=null&&i.isLink&&!a.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?a.params=e!=null&&e.params?e==null?void 0:e.params:m.params:a.query=e!=null&&e.query?e==null?void 0:e.query:m.query,a.url=g(a),await w.addCachedView(a),await t.tagsViewList.push({...a}),await p(t.tagsViewList)})},K=async s=>{var r;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(i=>{i.transUrl=V(i),i.transUrl?i.transUrl===V(i)&&(a=i):i.path===e&&(a=i)}),!a)return!1;await w.delCachedView(a),d.emit("onTagsViewRefreshRouterView",s),(r=a.meta)!=null&&r.isKeepAlive&&w.addCachedView(a)},A=s=>{t.tagsViewList.map((e,a,r)=>{var i;(i=e.meta)!=null&&i.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(w.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?r[r.length-1].meta.isDynamic?a!==r.length?c.push({name:r[a].name,params:r[a].params}):c.push({name:r[r.length-1].name,params:r[r.length-1].params}):a!==r.length?c.push({path:r[a].path,query:r[a].query}):c.push({path:r[r.length-1].path,query:r[r.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(r[a].meta.isDynamic?c.push({name:r[a].name,params:r[a].params}):c.push({path:r[a].path,query:r[a].query}))},0))}),p(t.tagsViewList)},ge=s=>{y.get("tagsViewList")&&(t.tagsViewList=[],y.get("tagsViewList").map(e=>{var a;(a=e.meta)!=null&&a.isAffix&&!e.meta.isHide&&(e.url=g(e),w.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),_(s,m),p(t.tagsViewList))},we=()=>{y.get("tagsViewList")&&(w.delAllCachedViews(),t.tagsViewList=[],y.get("tagsViewList").map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}),c.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),p(t.tagsViewList))},he=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await c.push({name:e.name,params:e.params}):await c.push({name:e.name,query:e.query}),ne.setCurrenFullscreen(!0)},Y=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=V(a),a.transUrl?a.transUrl===V(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},I=async s=>{if(s.commonUrl=V(s),!Y(s))return Fe({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:r,query:i,meta:l,url:n}=Y(s);switch(s.contextMenuClickId){case 0:l.isDynamic?await c.push({name:a,params:r}):await c.push({path:e,query:i}),K(m.fullPath);break;case 1:A(u.value.isShareTagsView?e:n);break;case 2:l.isDynamic?await c.push({name:a,params:r}):await c.push({path:e,query:i}),ge(e);break;case 3:we();break;case 4:he(u.value.isShareTagsView?e:n);break}},de=(s,e)=>{const{clientX:a,clientY:r}=e;t.dropdown.x=a,t.dropdown.y=r,B.value.openContextmenu(s)},ye=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const r=Object.assign({},{contextMenuClickId:1,...s});I(r)}},Ve=(s,e)=>{t.tagsRefsIndex=e,c.push(s),u.value.layout==="columns"&&(ce.value.find(r=>r.path.indexOf(`/${s.path.split("/")[1]}`)>-1).children?u.value.isCollapse=!1:u.value.isCollapse=!0)},V=s=>{var r,i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[l,n]of Object.entries(e))(r=s.meta)!=null&&r.isDynamic?a+=`/${n}`:a+=`&${l}=${n}`;return(i=s.meta)!=null&&i.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},g=s=>{var r;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let i in e)a+=e[i];return`${(r=s.meta)!=null&&r.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Le=s=>{R.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},Ce=()=>{j(()=>{if(f.value.length<=0)return!1;let s=f.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=f.value.length,r=f.value[0],i=f.value[f.value.length-1],l=R.value.$refs.wrapRef,n=l.scrollWidth,o=l.offsetWidth,L=l.scrollLeft,U=f.value[t.tagsRefsIndex-1],Z=f.value[t.tagsRefsIndex+1],q=0,S=0;s===r?l.scrollLeft=0:s===i?l.scrollLeft=n-o:(e===0?q=r.offsetLeft-5:q=(U==null?void 0:U.offsetLeft)-5,e===a?S=i.offsetLeft+i.offsetWidth+5:S=Z.offsetLeft+Z.offsetWidth+5,S>L+o?l.scrollLeft=S-o:q<L&&(l.scrollLeft=q)),R.value.update()})},X=s=>{j(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),Ce()})},k=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=Be.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(r=>{r.url===a&&e.push({...r})})}),p(e)}})},P=async()=>{await k(),J.isMobile()&&t.sortable.el&&t.sortable.destroy()};return De(()=>{P(),window.addEventListener("resize",P),d.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,I(s)}),d.on("openOrCloseSortable",()=>{k()}),d.on("openShareTagsView",()=>{u.value.isShareTagsView&&(c.push("/home"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=g(s),t.tagsViewList.push({...s}))}))})}),_e(()=>{d.off("onCurrentContextmenuClick",()=>{}),d.off("openOrCloseSortable",()=>{}),d.off("openShareTagsView",()=>{}),window.removeEventListener("resize",P)}),Ae(()=>{f.value=[]}),Ie(()=>{W(),k()}),Ne(async s=>{t.routeActive=g(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await _(s.path,s),X(u.value.isShareTagsView?t.routePath:t.routeActive)}),ke(()=>H.value,s=>{if(s.length===t.tagsViewRoutesList.length)return!1;W()},{deep:!0}),(s,e)=>{const a=ee("SvgIcon"),r=ee("el-scrollbar");return h(),C("div",{class:E(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":u.value.layout==="classic"}])},[O(r,{ref_key:"scrollbarRef",ref:R,onWheel:T(Le,["prevent"])},{default:Pe(()=>[se("ul",{class:E(["layout-navbars-tagsview-ul",me.value]),ref_key:"tagsUlRef",ref:re},[(h(!0),C(ae,null,Ue(t.tagsViewList,(i,l)=>(h(),C("li",{key:l,class:E(["layout-navbars-tagsview-ul-li",{"is-active":x(i)}]),"data-url":i.url,onContextmenu:T(n=>de(i,n),["prevent"]),onMousedown:n=>ye(i,n),onClick:n=>Ve(i,l),ref_for:!0,ref:n=>{n&&(f.value[l]=n)}},[x(i)?(h(),C("i",We)):b("",!0),!x(i)&&u.value.isTagsviewIcon?(h(),M(a,{key:1,name:i.meta.icon,class:"pr5"},null,8,["name"])):b("",!0),se("span",null,$e(fe.value(i)),1),x(i)?(h(),C(ae,{key:2},[O(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=T(n=>K(s.$route.fullPath),["stop"]))}),i.meta.isAffix?b("",!0):(h(),M(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:T(n=>A(u.value.isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],64)):b("",!0),i.meta.isAffix?b("",!0):(h(),M(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:T(n=>A(u.value.isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],42,He))),128))],2)]),_:1},512),O(Oe(ie),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:B,onCurrentContextmenuClick:I},null,8,["dropdown"])],2)}}}),Us=qe(ze,[["__scopeId","data-v-eac8b2d0"]]);export{Us as default};