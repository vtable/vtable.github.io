import { r as registerInstance, j as h, k as Host, n as getElement } from './index-9719ee72.js';
import { g as getIonMode } from './ionic-global-a718b22d.js';

const selectOptionCss = ":host{display:none}";

const SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    /**
     * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
     */
    this.disabled = false;
  }
  render() {
    return (h(Host, { role: "option", id: this.inputId, class: getIonMode(this) }));
  }
  get el() { return getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

export { SelectOption as ion_select_option };
