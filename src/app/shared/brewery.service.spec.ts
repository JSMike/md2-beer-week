import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BreweryService } from './brewery.service';

describe('Brewery Service', () => {
  beforeEachProviders(() => [BreweryService]);

  it('should ...',
      inject([BreweryService], (service: BreweryService) => {
    expect(service).toBeTruthy();
  }));
});
