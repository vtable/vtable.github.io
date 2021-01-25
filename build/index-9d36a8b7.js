import './ionic-global-a718b22d.js';
import './utils-4590566c.js';
import './animation-138e595f.js';
import './index-5e750e55.js';
import './ios.transition-12c4032c.js';
import './md.transition-c21cb91b.js';
import './cubic-bezier-ed243a9b.js';
import './index-da9ada32.js';
import './index-cc97b114.js';
import './index-bc02785a.js';
import './overlays-4199b0b7.js';

const setupConfig = (config) => {
  const win = window;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    console.error('ionic config was already initialized');
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    }
    else {
      return config.get('mode');
    }
  }
  return 'md';
};

export { setupConfig as s };
