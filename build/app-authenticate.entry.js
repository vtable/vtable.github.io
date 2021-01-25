import { r as registerInstance, j as h, k as Host } from './index-9719ee72.js';

const appAuthenticateCss = ":host{display:block}";

const AppAuthenticate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
AppAuthenticate.style = appAuthenticateCss;

export { AppAuthenticate as app_authenticate };
