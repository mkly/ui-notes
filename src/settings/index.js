import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';
import NoteTypesSettings from './note-types-settings';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.pages = [
      {
        route: 'general',
        label: <FormattedMessage id="ui-notes.settings.general" />,
        component: NoteTypesSettings,
      },
    ];
  }

  render() {
    const { location, match, stripes } = this.props;

    return (
      <Settings
        location={location}
        match={match}
        stripes={stripes}
        pages={this.pages}
        paneTitle={<FormattedMessage id="ui-notes.settings.index.paneTitle" />}
      />
    );
  }
}

Notes.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  stripes: PropTypes.object.isRequired
};
