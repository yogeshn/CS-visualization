import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "./app/components/home/home.html"
})
export class HomeComponent {
}


