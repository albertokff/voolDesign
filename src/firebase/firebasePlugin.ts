// src/firebasePlugin.ts
import { App as VueApp } from 'vue';
import { app as firebaseApp, db, auth } from './firebase';

const FirebasePlugin = {
  install(app: VueApp) {
    app.config.globalProperties.$firebase = firebaseApp;
    app.config.globalProperties.$db = db;
    app.config.globalProperties.$auth = auth;
  }
};

export default FirebasePlugin;

// Tipagem para Vue 3 com Firebase
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $firebase: typeof firebaseApp;
    $db: typeof db;
    $auth: typeof auth;
  }
}
