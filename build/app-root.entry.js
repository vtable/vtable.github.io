import { r as registerInstance, j as h } from './index-9719ee72.js';

const appRootCss = "";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    document.body.addEventListener('touchstart', (e) => {
      var width = window.innerWidth;
      var margin = width / 10;
      var touch = e.touches[0];
      if (touch) {
        var x = touch.pageX;
        if (x < margin || x > width - margin) {
          e.preventDefault();
        }
      }
    });
  }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "app-home" }), h("ion-route", { url: "/auth", component: "vt-auth" }), h("ion-route", { url: "/profile/:name", component: "app-profile" })), h("ion-nav", null)));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
