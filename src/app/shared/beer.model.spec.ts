import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Beer} from './beer.model';

describe('Beer', () => {
  it('should create an instance', () => {
    expect(new Beer()).toBeTruthy();
  });
});
