import { Element } from "./Element.js";
import { type, p, w, compare } from "./Utility.js";
import { _ } from "./Selector.js";



export class MultiElement {
  constructor(list) {
    this.length = list.length;
    let _styleValue = Symbol("style value");

    this[_styleValue] = {};

    for (let i = 0; i < list.length; i++) {
      this[i] = _(list[i]);
      this[_styleValue] = { ...this[_styleValue], ...list[i].style };
      
    }

    this.style = {};
    let st = document.createElement("div").style;

    for (let k of Object.keys(st)) {
      Object.defineProperty(this.style, k, {
        set: (value) => {
          for (let i of list) {
            i.style[k] = value;
          }
          this[_styleValue][k] = value;
        },
        get: () => {
          return this[_styleValue][k];
        },
      });
    }
    return;
  }

  get list() {
    return [...this].map((i) => {
      return i.el;
    });
  }

  set css(text) {
    [...this].forEach((i) => (i.style.cssText += text));
    return this;
  }

  get css() {
    return [...this].map((i) => {
      return i.style.cssText;
    });
  }

  get child(){
    let ls = [...this].map(i=> {return i.child})
    return _(ls.flat(Infinity))
  }

  get sibling(){
    let ls = [...this].map(i=> {return i.sibling})
    return _(ls.flat(Infinity))
  }

  get parent(){
    let ls = [...this].map(i=> {if(i.parent) return i.parent})
    return _(ls.flat(Infinity))
  }

  class = {
    add: (cls) => {
      [...this].forEach((i) => i.class.add(cls));
      return this;
    },
    remove: (cls) => {
      [...this].forEach((i) => i.class.remove(cls));
      return this;
    },
    toggle: (cls) => {
      [...this].forEach((i) => i.class.toggle(cls));
      return this;
    },
    replace: (cls1, cls2) => {
      [...this].forEach((i) => i.class.replace(cls1, cls2));
      return this;
    },
    list: () => {
      let holder = [];
      [...this].map((i) => {
        return i.class;
      });
      return holder;
    },
  };

  attr(prop, val) {
    [...this].forEach((i) => i.attr(prop, val));
    return this;
  }

  set(obj) {
    [...this].forEach((i) => i.set(obj));
    return this;
  }

  chain(el){
    return _(el)
  }

  get top(){
    return _([...this].map(i=>{return i.top}))
  }

  get bottom(){
    return _([...this].map(i=>{return i.bottom}))
  }

  get topChild(){
    return _([...this].map(i=>{return i.topChild}))
  }

  get bottomChild(){
    return _([...this].map(i=>{return i.bottomChild}))
  }

  get query(){
    let q = [...this].map(i=>{return i.query})
    let all = [...new Set(q.flat())]
    q.all = all
    return q
  }

  create = {
    top: (identity, classes, data)=>{
      return _([...this].map((i) => i.create.top(identity, classes, data)))
    },
    bottom: (identity, classes, data)=>{
      return _([...this].map((i) => i.create.bottom(identity, classes, data)))
    },
    inside:{
      top: (identity, classes, data)=>{
        return _([...this].map((i) => i.create.inside.top(identity, classes, data)))
      },
      bottom: (identity, classes, data)=>{
        return _([...this].map((i) => i.create.inside.bottom(identity, classes, data)))
      }
    }
  }

  filter(name){
    let e = [...this].filter(i=>{return i.query.includes(name)})
    return _(e)
  }

  exclude(el){
    let x = _(el)
    if(type(x)==="Element"){
      return _([...this].filter(i=>{return i.el !== x.el}))
    }
    else{
      x = [...x.list]
      return _([...this.list].filter(i=>{return !x.includes(i)}))
    }
  }

  anim(name, dur, on, option) {
    [...this].forEach((i) => i.anim(name, dur, option, on));
    return this;
  }

  steal(selector, on , option) {
    [...this].forEach((i) => i.steal(selector, on, option));
    return this;
  }

  glue(other) {
    return _([this, other]);
  }

  on(ev, callback) {
    [...this].forEach((i) => i.on(ev, callback));
    return this;
  }

  off(ev, callback) {
    [...this].forEach((i) => i.off(ev, callback));
    return this;
  }

  hide(speed = 0) {
    [...this].forEach((i) => i.hide(speed));
    return this;
  }

  show(speed = 0) {
    [...this].forEach((i) => i.show(speed));
    return this;
  }

  toggle(speed = 0) {
    [...this].forEach((i) => i.toggle(speed));
    return this;
  }

  cstyle(prop) {
    return [...this].map((i) => {
      let computed = i.el.currentStyle || window.getComputedStyle(i.el, false);
      return computed[prop];
    });
  }

  apply(pairs) {
    for (let i of this) {
      i.apply(pairs)
    }
    return this;
  }

  [Symbol.iterator]() {
    let current = 0;
    let end = this.length - 1;
    return {
      next: () => {
        if (current <= end) {
          let result = { value: this[current], done: false };
          current += 1;
          return result;
        } else return { done: true };
      },
    };
  }
}
