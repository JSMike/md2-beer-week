// Angular2
import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Angular2-Material
import { MD_SIDENAV_DIRECTIVES, MdSidenav } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton } from '@angular2-material/radio';
import { MdRadioDispatcher } from '@angular2-material/radio/radio_dispatcher';
import { MdSpinner } from '@angular2-material/progress-circle';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

// Local
import { BreweriesComponent } from './+breweries';
import { BreweryComponent } from './+brewery';
import { BreweryService } from './shared/brewery.service';
import { Brewery } from './shared/brewery.model'

@Component({
  moduleId: module.id,
  selector: 'md2-beer-week-app',
  templateUrl: 'md2-beer-week.component.html',
  styleUrls: ['md2-beer-week.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdRadioButton,
    MdCheckbox,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdToolbar,
    MdIcon
  ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    MdIconRegistry,
    MdRadioDispatcher,
    BreweryService
  ]
})
@Routes([
  { path: '/', component: BreweriesComponent },
  { path: '/breweries', component: BreweriesComponent },
  { path: '/brewery/:id', component: BreweryComponent }
])
export class Md2BeerWeekAppComponent implements OnInit {
  router: Router;
  breweryService: BreweryService;
  breweries: Brewery[] = [];
  title: string = 'Philly Beer Week 2016';
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor ( breweryService: BreweryService, router: Router ) {
    this.breweryService = breweryService;
    this.router = router;
  }

  ngOnInit(): void {
    this.breweryService.getBreweries().then( breweries => {
      this.breweries = breweries;
    });
  }

  viewBrewer(id: number): void {
    this.router.navigate(['/brewery', id]);
    this.sidenav.close();
  }

  goHome():void {
    this.router.navigate(['/']);
  }
}
