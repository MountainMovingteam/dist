import{J as s}from"./jsencrypt-D3I3x59l.js";import{s as c}from"./index-Db6VnN3C.js";function o(){return{getPubKey:()=>c({url:"/api/base/getPublicKey",method:"get"})}}const e=new s,y=async r=>{try{const n=(await o().getPubKey()).public_key;return e.setPublicKey(n),e.encrypt(r)}catch{return""}};export{y as e};
