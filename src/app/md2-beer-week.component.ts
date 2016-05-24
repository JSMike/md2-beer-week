import { Component } from '@angular/core';
import { BreweriesComponent } from './+breweries';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'md2-beer-week-app',
  templateUrl: 'md2-beer-week.component.html',
  styleUrls: ['md2-beer-week.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/breweries', component: BreweriesComponent}
])
export class Md2BeerWeekAppComponent {
  title = 'md2-beer-week works!';
}
