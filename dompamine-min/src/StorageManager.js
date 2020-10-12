import{w,e}from"./Utility.js";const Cookie={set:function(cname,cvalue,exdays=1){let d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";},get:function(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return null;},remove:function(cname){this.set(cname,"",-1);},clear:function(){let x=document.cookie.split("; ");let y=[];x.forEach((i)=>y.push(i.split("=")[0]));y.forEach((i)=>this.remove(i));},};export function ls(key,val=undefined){let k=localStorage.getItem(key)!==null;let v=val!==undefined;if(typeof key=="object"&&key!==null){e("Key parameter can not be an object");}else if(!k&&v){if(val!==null){if(typeof val!=="string"){localStorage.setItem(key,JSON.stringify(val));}else{localStorage.setItem(key,val);}}else{w(`${key} does not exist in local storage, can not remove it`);return null;}}else if(k&&!v){try{return JSON.parse(localStorage.getItem(key));}catch(error){return localStorage.getItem(key);}}else if(!k&&!v&&key!==null){w(`can not find ${key} in local storage`);return null;}else if(k&&JSON.parse(localStorage.getItem(key))!==val){if(val!==null){if(typeof val!=="string"){localStorage.setItem(key,JSON.stringify(val));}else{localStorage.setItem(key,val);}}else{localStorage.removeItem(key);}}else if(key===null){localStorage.clear();}}
export function ss(key,val=undefined){let k=sessionStorage.getItem(key)!==null;let v=val!==undefined;if(typeof key=="object"&&key!==null){e("Key parameter can not be an object");return null;}else if(!k&&v){if(val!==null){if(typeof val!=="string"){sessionStorage.setItem(key,JSON.stringify(val));}else{sessionStorage.setItem(key,val);}}else{w(`${key} does't exist in session storage, can not remove it`);return null;}}else if(k&&!v){try{return JSON.parse(sessionStorage.getItem(key));}catch(error){return sessionStorage.getItem(key);}}else if(!k&&!v&&key!==null){w(`can not find ${key} in session storage`);return null;}else if(k&&JSON.parse(sessionStorage.getItem(key))!==val){if(val!==null){if(typeof val!=="string"){sessionStorage.setItem(key,JSON.stringify(val));}else{sessionStorage.setItem(key,val);}}else{sessionStorage.removeItem(key);}}else if(key===null){sessionStorage.clear();}}
export function cs(key,val=undefined,ex=1){let k=Cookie.get(key)!==null;let v=val!==undefined;if(typeof key=="object"&&key!==null){e("Key parameter can not be an object");return null;}else if(!k&&v){if(val!==null){if(typeof val!=="string"){Cookie.set(key,JSON.stringify(val),ex);}else{Cookie.set(key,val,ex);}}else{w(`${key} does't exist in cookie storage, can not remove it`);return null;}}else if(k&&!v){try{return JSON.parse(Cookie.get(key));}catch(error){return Cookie.get(key);}}else if(!k&&!v&&key!==null){w(`can not find ${key} in cookie storage`);return null;}else if(k&&JSON.parse(Cookie.get(key))!==val){if(val!==null){if(typeof val!=="string"){Cookie.set(key,JSON.stringify(val),ex);}else{Cookie.set(key,val,ex);}}else{Cookie.remove(key);}}else if(key===null){Cookie.clear();}}
import{w,e,type}from"./Utility.js";const Cookie={set:function(cname,cvalue,exdays=1){let d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";},get:function(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return null;},remove:function(cname){this.set(cname,"",-1);},clear:function(){let x=document.cookie.split("; ");let y=[];x.forEach((i)=>y.push(i.split("=")[0]));y.forEach((i)=>this.remove(i));},};export function cs(key,value=undefined,ex=1){if(key===null){Cookie.clear()
return}
else if(value===null){Cookie.remove(key)}
else if(value===undefined){return JSON.parse(Cookie.get(key))}
else{Cookie.set(key,JSON.stringify(value),ex)}}
export function ls(key,value=undefined){if(key===null){localStorage.clear()}
else if(value===null){localStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(localStorage.getItem(key))}
else{localStorage.setItem(key,JSON.stringify(value))}}
export function ss(key,value=undefined){if(key===null){sessionStorage.clear()}
else if(value===null){sessionStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(sessionStorage.getItem(key))}
else{sessionStorage.setItem(key,JSON.stringify(value))}}
import{w,e,type}from"./Utility.js";const Cookie={set:function(cname,cvalue,exdays=1){let d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";},get:function(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return null;},remove:function(cname){this.set(cname,"",-1);},clear:function(){let x=document.cookie.split("; ");let y=[];x.forEach((i)=>y.push(i.split("=")[0]));y.forEach((i)=>this.remove(i));},};export function cs(key,value=undefined,ex=1){if(key===null){Cookie.clear()
return}
else if(value===null){Cookie.remove(key)}
else if(value===undefined){return JSON.parse(Cookie.get(key))}
else{Cookie.set(key,JSON.stringify(value),ex)}}
export function ls(key,value=undefined){if(key===null){localStorage.clear()}
else if(value===null){localStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(localStorage.getItem(key))}
else{localStorage.setItem(key,JSON.stringify(value))}}
export function ss(key,value=undefined){if(key===null){sessionStorage.clear()}
else if(value===null){sessionStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(sessionStorage.getItem(key))}
else{sessionStorage.setItem(key,JSON.stringify(value))}}
import{w,e,type}from"./Utility.js";const Cookie={set:function(cname,cvalue,exdays=1){let d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";},get:function(cname){let name=cname+"=";let ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return null;},remove:function(cname){this.set(cname,"",-1);},clear:function(){let x=document.cookie.split("; ");let y=[];x.forEach((i)=>y.push(i.split("=")[0]));y.forEach((i)=>this.remove(i));},};export function cs(key,value=undefined,ex=1){if(key===null){Cookie.clear()
return}
else if(value===null){Cookie.remove(key)}
else if(value===undefined){return JSON.parse(Cookie.get(key))}
else{Cookie.set(key,JSON.stringify(value),ex)}}
export function ls(key,value=undefined){if(key===null){localStorage.clear()}
else if(value===null){localStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(localStorage.getItem(key))}
else{localStorage.setItem(key,JSON.stringify(value))}}
export function ss(key,value=undefined){if(key===null){sessionStorage.clear()}
else if(value===null){sessionStorage.removeItem(key)}
else if(value===undefined){return JSON.parse(sessionStorage.getItem(key))}
else{sessionStorage.setItem(key,JSON.stringify(value))}}
