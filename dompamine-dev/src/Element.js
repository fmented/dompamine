import { _ } from "./Selector.js";
import { type, p } from "./Utility.js";

export class Element {
  constructor(element) {
    this.element = element;
    this.events = {};
    return;
  }

  get el() {
    return this.element;
  }

  set css(text) {
    this.style.cssText += text;
    return this;
  }

  get css() {
    return this.style.cssText;
  }

  get style() {
    return this.el.style;
  }

  get attr() {
    return this.el.attributes;
  }

  get class() {
    return this.el.classList;
  }

  get query() {
    let n = "";
    this.el.classList.forEach((i) => {
      n += "." + i;
    });
    let id = this.el.id != "" ? "#" + this.el.id : "";
    return [this.el.localName + id + n, id, n, this.el.localName];
  }

  anim(on, animation, dur = 5, loop = 1) {
    const prefix = ["-webkit-", "-moz-", "-ms-", "-o-"];
    let base = document.querySelector("style[name=dompamine]");
    on = on === "" ? "" : ":" + on;
    let txt = `\n${this.query[0]}${on} {`;
    if (type(animation) === "Object") {
      txt += "\n" + k + " : " + animation[k] + ";";
      for (let k of Object.keys(animation)) {
        for (let pre of prefix) {
          txt += "\n" + pre + k + " : " + animation[k] + ";";
        }
      }
      txt += "\n}";
    } else if (type(animation) === "String") {
      txt += `\nanimation : ${animation} ${dur}s ${loop};`;
      for (let pre of prefix) {
        txt += `\n${pre}animation : ${animation} ${dur}s ${loop};`;
      }
      txt += "\n}";
    }

    if (base !== null) {
      if (!base.innerHTML.includes(txt)) base.innerHTML += `${txt}\n`;
    } else {
      let st = document.createElement("style");
      st.setAttribute("name", "dompamine");
      st.innerHTML = `${txt}\n`;
      document.head.appendChild(st);
    }
    return this;
  }

  mod(on, selector) {
    let base = document.querySelector("style[name=dompamine]");
    let css = [...document.styleSheets]
      .map((i) => {
        return [...i.cssRules];
      })
      .flat()
      .filter((i) => {
        return type(i) === "CSSStyleRule" && i.selectorText === selector;
      })[0];
    on = on === "" ? "" : ":" + on;
    let txt = css.cssText.replace(selector, this.query[0] + on);
    if (base !== null) {
      if (!base.innerHTML.includes(txt)) base.innerHTML += `\n${txt}\n`;
    } else {
      let st = document.createElement("style");
      st.setAttribute("name", "dompamine");
      st.innerHTML = `\n${txt}\n`;
      document.head.appendChild(st);
    }
    return this;
  }

  attr(prop, val = undefined) {
    if (val === null) {
      this.el.removeAttribute(prop);
    } else if (val === undefined) {
      return {
        exist: this.el.hasAttribute(prop),
        value: this.el.getAttribute(prop),
      };
    } else {
      this.el.setAttribute(prop, val);
    }
    return this;
  }

  get parent() {
    return this.el.parentElement.localName === "html"
      ? undefined
      : _(this.el.parentElement);
  }

  get child() {
    return _(this.el.children);
  }

  get sibling() {
    let sibs = [...this.el.parentElement.children].filter((i) => {
      return i !== this.el;
    });
    return _(sibs);
  }

  get cstyle() {
    let computed =
      this.el.currentStyle || window.getComputedStyle(this.el, false);
    return computed;
  }

  get text() {
    return this.el.innerText;
  }

  set text(txt) {
    this.el.innerText = txt;
    return this;
  }

  get html() {
    return this.el.innerHTML;
  }

  set html(html) {
    this.el.innerHTML = html;
    return this;
  }

  hide(speed = 0) {
    setTimeout(() => {
      this.style.visibility = "hidden";
    }, speed * 1000);
    return this;
  }

  psuedo(p) {
    let computed = this.el.currentStyle || window.getComputedStyle(this.el, p);
    return computed;
  }

  show(speed = 0) {
    setTimeout(() => {
      this.style.visibility = "visible";
    }, speed * 1000);
    return this;
  }

  toggle(speed = 0) {
    this.style.visibility === "hidden" ? this.show(speed) : this.hide(speed);
    return this;
  }

  find(element) {
    return _(element, this.el);
  }

  glue(other) {
    return _([this, other]);
  }

  off(ev) {
    let e = ev.split(" ");
    e.forEach((c) => {
      this.el["on" + c] = "";
    });
    return this;
  }

  on(ev, callback) {
    let e = ev.split(" ");
    e.forEach((c) => {
      this.el["on" + c] = callback;
    });
    return this;
  }

  click(option = {}) {
    let evt = new MouseEvent("click", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  mousedown(option = {}) {
    let evt = new MouseEvent("mousedown", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  mouseup(option = {}) {
    let evt = new MouseEvent("mouseup", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  dblclick(option = {}) {
    let evt = new MouseEvent("dblclick", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  keypress(keyCode = 13, option = {}) {
    option.keyCode = keyCode;
    let evt = new KeyboardEvent("keypress", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  keydown(keyCode = 13, option = {}) {
    option.keyCode = keyCode;
    let evt = new KeyboardEvent("keydown", option);
    this.el.dispatchEvent(evt);
    return this;
  }

  keyup(keyCode = 13, option = {}) {
    option.keyCode = keyCode;
    let evt = new KeyboardEvent("keyup", option);
    this.el.dispatchEvent(evt);
    return this;
  }
}
