import { r as registerInstance, j as h, k as Host } from './index-9719ee72.js';
import { g as getIonMode } from './ionic-global-a718b22d.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
