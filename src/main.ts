import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Md2BeerWeekAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Md2BeerWeekAppComponent);

