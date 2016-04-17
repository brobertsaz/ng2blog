import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ng2blog-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ng2blog.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
])

export class Ng2blogApp {
  constructor(public af:AngularFire) {

  }
}
