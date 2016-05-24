import { Component } from '@angular/core';
import { BreweriesComponent } from './+breweries';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {MD_SIDENAV_DIRECTIVES, MdSidenav} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

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
    ROUTER_PROVIDERS,
    MdIconRegistry,
    MdRadioDispatcher
  ]
})
@Routes([
  {path: '/breweries', component: BreweriesComponent}
])
export class Md2BeerWeekAppComponent {
  title = 'Philly Beer Week 2016';
}
