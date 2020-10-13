import { Element } from "./Element.js";
import { MultiElement } from "./MultiElement.js";
import { type, iterable } from "./Utility.js";

const excluded = ["html", "meta"];

export function _(el, at = document) {
  if (iterable(el) && type(el) != "String") {
    let x = ListProcessor(el, at);
    if (x.length === 1) return new Element(x[0]);
    if (x.length > 1) return new MultiElement(x);
  } else if (type(el) === "String") {
    let x = StringProcessor(el, at);
    if (x.length === 1) return new Element(x[0]);
    if (x.length > 1) return new MultiElement(x);
  } else if (el instanceof HTMLElement) {
    if (!excluded.includes(el.localName)) {
      return new Element(el);
    }
  }
}

function ListProcessor(obj, at = document) {
  let els = [];
  for (const i of obj) {
    if (i instanceof HTMLElement) {
      if (!excluded.includes(i.localName) && !els.includes(i)) {
        els.push(i);
      }
    } else if (type(i) === "String") {
      let temp = StringProcessor(i, at);
      if (temp.length !== 0) {
        els.push(
          ...temp.filter((x) => {
            return !els.includes(x);
          })
        );
      }
    } else if (type(i) === "MultiElement") {
      els.push(
        ...i.list.filter((x) => {
          return !els.includes(x);
        })
      );
    } else if (type(i) === "Element" && !els.includes(i.el)) {
      els.push(i.el);
    }
  }
  return els;
}

function StringProcessor(str, at = document) {
  let s = [...at.querySelectorAll(str)];
  s.filter((i) => {
    return !excluded.includes(i.localName);
  });

  return s;
}
