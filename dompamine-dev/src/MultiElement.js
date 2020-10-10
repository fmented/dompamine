import { Element } from "./Element.js";
import { type, p, w } from "./Utility.js";
import { _ } from "./Selector.js";

let blacklist = "style previousSibling previousElementSibling part parentNode parentElement ownerDocument offsetParent nextSibling nextElementSibling lastChild firstChild dataset classList children childNotes attributes attributeStyleMap".split(
  " "
);

export class MultiElement {
  constructor(list) {
    this.length = list.length;
    let _styleValue = Symbol("style value");

    this[_styleValue] = {};
    let sp = false;
    let cp = undefined;
    for (let i = 0; i < list.length; i++) {
      this[i] = _(list[i]);
      this[_styleValue] = { ...this[_styleValue], ...list[i].style };
      if (cp === undefined) {
        cp = list[i].parentElement;
      } else if (cp !== list[i].parentElement) {
        sp = false;
      } else {
        sp = true;
      }
    }
    this.parent = sp == true ? _(cp) : null;

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

  anim(on, name, dur, iter) {
    [...this].forEach((i) => i.anim(on, name, dur, iter));
    return this;
  }

  mod(on, selector) {
    [...this].forEach((i) => i.mod(on, selector));
    return this;
  }

  glue(other) {
    return _([this, other]);
  }

  filter(query) {
    let holder = [...this].filter((i) => {
      let cl = [...i.el.classList];
      return query == i.el.id || cl.includes(query) || query == i.el.localName;
    });
    return _(holder);
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
    for (let i of this.list) {
      for (let x of Object.keys(pairs)) {
        if (!blacklist.includes(x)) {
          i[x] = pairs[x];
        }
      }
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
