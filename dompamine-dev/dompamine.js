import * as utility from "./src/Utility.js";
import * as element from "./src/Element.js";
import * as selector from "./src/Selector.js";
import * as multielement from "./src/MultiElement.js";
import * as storagemanager from "./src/StorageManager.js";

(function () {
  let modules = {
    ...utility,
    ...element,
    ...selector,
    ...multielement,
    ...storagemanager,
  };
  for (let ex in modules) {
    window[ex] = modules[ex];
  }
})();
