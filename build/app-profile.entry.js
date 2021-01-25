import { r as registerInstance, j as h } from './index-9719ee72.js';

const appProfileCss = "";

const AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.state = false;
  }
  formattedName() {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    return [
      h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, this.name))),
      h("ion-content", { class: "ion-padding" }, h("p", null, "My name is ", this.formattedName(), ". My name was passed in through a route param!"), h("ion-item", null, h("ion-label", null, "Setting (", this.state.toString(), ")"), h("ion-toggle", { checked: this.state, onIonChange: ev => (this.state = ev.detail.checked) }))),
    ];
  }
};
AppProfile.style = appProfileCss;

export { AppProfile as app_profile };
