import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect } from 'chai';

import setupApplication from '../helpers/setup-application';
import SettingsInteractor from '../interactors/settings';

describe('Settings', () => {
  const settings = new SettingsInteractor();

  setupApplication();

  describe('general', () => {
    beforeEach(function () {
      this.visit('/settings/notes/general');
    });

    it('has a general settings message', () => {
      expect(settings.generalMessage).to.equal('These are your general app settings.');
    });
  });
});
