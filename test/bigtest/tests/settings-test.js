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

    it('has general settings', () => {
      expect(settings.hasGeneralSettings).to.be.true;
    });
  });
});
