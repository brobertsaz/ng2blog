import {bootstrap} from 'angular2/platform/browser';
import {Ng2blogApp} from './app/ng2blog';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {
  FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire
  } from 'angularfire2';
  
bootstrap(Ng2blogApp, [
  FIREBASE_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('angblog.firebaseIO.com')
]);
