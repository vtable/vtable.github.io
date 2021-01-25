import { r as registerInstance, j as h, k as Host } from './index-9719ee72.js';
import { g as getIonMode } from './ionic-global-a718b22d.js';
import { c as createColorClasses } from './theme-12606872.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };
