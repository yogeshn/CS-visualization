import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {SideMenuComponent} from "./components/side-menu/side-menu"
import {HomeComponent} from "./components/home/home"


import {StackedBarChartComponent} from "./components/bar-charts-stacked-bar-chart/component"
import {HierarchicalBarChartComponent} from "./components/bar-charts-hierarchical-bar-chart/component"



@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, SideMenuComponent],
    templateUrl: "./app/app.html"
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault : true },
  
 
  { path: '/Course-Section', name: 'StackedBarChart', component: StackedBarChartComponent },
  { path: '/WIU-CS-Department', name: 'HierarchicalBarChart', component: HierarchicalBarChartComponent },
  

  { path: '**', redirectTo: ['/Home'] }
])
export class App { 

    constructor(){

    } 
    
}


