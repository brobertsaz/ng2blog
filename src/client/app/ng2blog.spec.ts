import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2blogApp} from '../app/ng2blog';

beforeEachProviders(() => [Ng2blogApp]);

describe('App: Ng2blog', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2blogApp], (app: Ng2blogApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2blogApp], (app: Ng2blogApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

