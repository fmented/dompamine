import { _ } from "./Selector.js";
import { type, p } from "./Utility.js";
import Animation from "./Animation.js";

let blacklist = "style previousSibling previousElementSibling part parentNode parentElement ownerDocument offsetParent nextSibling nextElementSibling lastChild firstChild dataset classList children childNotes attributes attributeStyleMap".split(
  " "
);

export class Element {
  constructor(element) {
    this.element = element;
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

  get class() {
    return this.el.classList;
  }

  get query() {
    let classes = [...this.el.classList];
    classes = classes.map((i) => {
      return "." + i;
    });
    let parentclasses = [...this.parent.el.classList];
    parentclasses = parentclasses.map((i) => {
      return "." + i;
    });
    let allclass = classes.reduce((all, current) => {
      return all + current;
    }, "");

    let allparentclass = parentclasses.reduce((all, current) => {
      return all + current;
    }, "");

    let id = this.el.id != "" ? "#" + this.el.id : "";
    let parentid = this.parent.el.id != "" ? "#" + this.parent.el.id : "";
    let name = this.el.localName;
    let parentName = this.parent.el.localName;
    let idclass = classes.map((i) => {
      return id + i;
    });
    let nameclass = classes.map((i) => {
      return name + i;
    });

    let result = [
      parentName+parentid+allparentclass+">"+name + id + allclass,
      name + id + allclass,
      id + allclass,
      name + allclass,
      ...idclass,
      ...nameclass,
      id,
      name,
      allclass,
      ...classes,
    ].filter((i)=>{return i!=""});
    let value = [...new Set(result)]
    return value
  }

  set(obj) {
    for (let i of Object.keys(obj)) {
      this.style[i] = obj[i];
    }
    return this;
  }

  chain(el) {
    return _(el);
  }

  get top(){
    return _(this.el.previousElementSibling)
  }

  get botom(){
    return _(this.el.nextElementSibling)
  }

  get topChild(){
    return _(this.el.firstElementChild)
  }

  get bottomChild(){
    return _(this.el.lastElementChild)
  }

  create = {
    top: (identity, classes, data = {}) => {
      let nameId = identity.split("#");
      let cl = classes.split(" ");
      let x = document.createElement(nameId[0]);
      if (nameId[1] != undefined) _(x).apply({ id: nameId[1] });

      cl.forEach((i) => {
        if (i != "") _(x).class.add(i);
      });
      _(x).apply(data);
      this.el.parentNode.insertBefore(x, this.el);

      return _(x);
    },

    bottom: (identity, classes, data = {}) => {
      let nameId = identity.split("#");
      let cl = classes.split(" ");
      let x = document.createElement(nameId[0]);
      if (nameId[1] != undefined) _(x).apply({ id: nameId[1] });

      cl.forEach((i) => {
        if (i != "") _(x).class.add(i);
      });
      _(x).apply(data);
      if (this.el.nextElementSibling != null) {
        this.el.parentNode.insertBefore(x, this.el.nextElementSibling);
      } else {
        this.el.parentNode.appendChild(x);
      }
      return _(x);
    },

    inside: {
      top: (identity, classes, data = {}) => {
        let nameId = identity.split("#");
        let cl = classes.split(" ");
        let x = document.createElement(nameId[0]);
        if (nameId[1] != undefined) _(x).apply({ id: nameId[1] });

        cl.forEach((i) => {
          if (i != "") _(x).class.add(i);
        });
        _(x).apply(data);
        if (this.el.firstElementChild == null) {
          this.el.appendChild(x);
        } else {
          this.el.insertBefore(x, this.el.firstElementChild);
        }
        return _(x);
      },

      bottom: (identity, classes, data = {}) => {
        let nameId = identity.split("#");
        let cl = classes.split(" ");
        let x = document.createElement(nameId[0]);
        if (nameId[1] != undefined) _(x).apply({ id: nameId[1] });

        cl.forEach((i) => {
          if (i != "") _(x).class.add(i);
        });
        _(x).apply(data);
        if (this.el.lastElementChild == null) {
          this.el.appendChild(x);
        } else {
          this.el.insertBefore(x, this.el.lastElementChild);
        }
        return _(x);
      },
    },
  };

  anim(on, x, option = undefined) {
    let base = document.querySelector("style[name=dompamine]");
    on = on === "" ? "" : ":" + on;
    x = x.replaceAll(/\s/g, "")
    let select = this.query[0] + on;
    let txt = Animation[x](select);

    if (base != null) {
      if (option === null) {
        base.innerHTML = base.innerHTML.replace(txt, "");
        return this;
      }
      if (!base.innerHTML.includes(txt)) base.innerHTML += `${txt}`;
    } else {
      let st = document.createElement("style");
      st.setAttribute("name", "dompamine");
      st.innerHTML = `${txt}`;
      document.head.appendChild(st);
    }
    return this;
  }

  steal(on, selector, option=undefined) {
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
    if (css == undefined) {
      w("not found");
      return this;
    }
    let txt = css.cssText.replace(selector, this.query[0] + on);
    if (base !== null) {
      if (option === null) {
        base.innerHTML = base.innerHTML.replace(txt, "");
        return this;
      }
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
      this.style.display = "none";
    }, speed * 1000);
    return this;
  }

  cpstyle(p) {
    let computed = this.el.currentStyle || window.getComputedStyle(this.el, p);
    return computed;
  }

  show(speed = 0) {
    setTimeout(() => {
      this.style.display = "block";
    }, speed * 1000);
    return this;
  }

  toggle(speed = 0) {
    this.style.display === "none" ? this.show(speed) : this.hide(speed);
    return this;
  }

  find(element) {
    return _(element, this.el);
  }

  apply(pairs) {
    for (let x of Object.keys(pairs)) {
      if (!blacklist.includes(x)) {
        this.el[x] = pairs[x];
      }
    }
    return this;
  }

  glue(...other) {
    return _([this, ...other]);
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
