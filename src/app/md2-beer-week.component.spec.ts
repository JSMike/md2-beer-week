import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Md2BeerWeekAppComponent } from '../app/md2-beer-week.component';

beforeEachProviders(() => [Md2BeerWeekAppComponent]);

describe('App: Md2BeerWeek', () => {
  it('should create the app',
      inject([Md2BeerWeekAppComponent], (app: Md2BeerWeekAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'md2-beer-week works!\'',
      inject([Md2BeerWeekAppComponent], (app: Md2BeerWeekAppComponent) => {
    expect(app.title).toEqual('md2-beer-week works!');
  }));
});
