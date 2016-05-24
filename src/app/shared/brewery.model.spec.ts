import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Brewery} from './brewery.model';

describe('Brewery', () => {
  it('should create an instance', () => {
    expect(new Brewery()).toBeTruthy();
  });
});
