import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { Brewery } from '../shared/brewery.model';
import { BreweryService } from '../shared/brewery.service';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-brewery',
  templateUrl: 'brewery.component.html',
  styleUrls: ['brewery.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    MdIcon
  ]
})
export class BreweryComponent implements OnActivate {
  brewery: Brewery;
  router: Router;
  breweryService: BreweryService;

  constructor(breweryService: BreweryService) {
    this.breweryService = breweryService;
  }

  routerOnActivate(route: RouteSegment): void {
    let id: number = +route.getParam('id');
    this.breweryService.getBrewery(id)
      .then(brewery => this.brewery = brewery);
  }

}
