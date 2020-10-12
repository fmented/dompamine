import { w, e, type } from "./Utility.js";

const Cookie = {
  set: function (cname, cvalue, exdays = 1) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },

  get: function (cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  },

  remove: function (cname) {
    this.set(cname, "", -1);
  },

  clear: function () {
    let x = document.cookie.split("; ");
    let y = [];
    x.forEach((i) => y.push(i.split("=")[0]));
    y.forEach((i) => this.remove(i));
  },
};


export function cs(key, value=undefined, ex=1) {
  if(key === null){
    Cookie.clear()
    return
  }
  else if (value === null){
    Cookie.remove(key)
  }
  else if(value===undefined){
    return JSON.parse(Cookie.get(key))
  }
  else{
    Cookie.set(key, JSON.stringify(value), ex)
  }  
}

export function ls(key, value=undefined){
  if (key===null){
    localStorage.clear()
  }
  else if (value===null){
    localStorage.removeItem(key)
  }
  else if (value===undefined){
    return JSON.parse(localStorage.getItem(key))
  }
  else{
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export function ss(key, value=undefined){
  if (key===null){
    sessionStorage.clear()
  }
  else if (value===null){
    sessionStorage.removeItem(key)
  }
  else if (value===undefined){
    return JSON.parse(sessionStorage.getItem(key))
  }
  else{
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}