import {
  interactor,
  isPresent,
} from '@bigtest/interactor';


export default @interactor class SettingsInteractor {
  hasGeneralSettings = isPresent('[data-test-application-settings-general]');
}
