import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';
import NoteTypesSettings from './note-types-settings';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {
        route: 'general',
        label: <FormattedMessage id="ui-notes.settings.general" />,
        component: NoteTypesSettings,
      }
    ];
  }

  render() {
    return (
      <Settings
        {...this.props}
        pages={this.pages}
        paneTitle={<FormattedMessage id="ui-notes.settings.index.paneTitle" />}
      />
    );
  }
}
