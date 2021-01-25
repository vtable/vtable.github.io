import { i as ionicCoreGlobalScript } from './ionic-global-a718b22d.js';
import { s as setupConfig } from './index-9d36a8b7.js';

const appGlobalScript = () => {
  setupConfig({
  // mode: 'ios'
  });
};
class App {
  constructor() { }
}
App.instance = new App();
const app = App.instance;

const globalScripts = () => {
  appGlobalScript();
  ionicCoreGlobalScript();
};

export { globalScripts as g };
