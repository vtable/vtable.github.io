import { i as ionicCoreGlobalScript } from './ionic-global-4ed1374e.js';
import './utils-caa3aff8.js';
import './animation-582baced.js';
import './index-40a014d0.js';
import './ios.transition-691917fc.js';
import './md.transition-0d901ac6.js';
import './cubic-bezier-ed243a9b.js';
import './index-da9ada32.js';
import './index-cc97b114.js';
import './index-4f4e7344.js';
import './overlays-c9a37290.js';

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

const appGlobalScript = () => {
  setupConfig({
  // mode: 'ios'
  });
};

const globalScripts = () => {
  appGlobalScript();
  ionicCoreGlobalScript();
};

export { globalScripts as g };
