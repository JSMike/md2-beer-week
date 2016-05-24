import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { Brewery } from '../shared/brewery.model';
import { BreweryService } from '../shared/brewery.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-breweries',
  templateUrl: 'breweries.component.html',
  styleUrls: ['breweries.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdButton
  ]
})
export class BreweriesComponent implements OnActivate {
  breweries: Brewery[];
  router: Router;
  breweryService: BreweryService;

  constructor(breweryService: BreweryService, router: Router) {
    this.breweryService = breweryService;
    this.router = router;
  }

  routerOnActivate(route: RouteSegment): void {
    let id: number = +route.getParam('id');
    this.breweryService.getBreweries()
      .then(breweries => this.breweries = breweries);
  }

  viewBrewer(id: number): void {
    this.router.navigate(['/brewery', id]);
  }


}
