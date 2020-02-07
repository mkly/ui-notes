import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormattedMessage,
  injectIntl,
  intlShape,
} from 'react-intl';
import { get } from 'lodash';

import { ControlledVocab } from '@folio/stripes/smart-components';
import { validate } from '../util';

class NoteTypesSettings extends Component {
  constructor(props) {
    super(props);
    this.connectedControlledVocab = props.stripes.connect(ControlledVocab);
  }

  validateName = (item, index, items) => {
    const label = this.props.intl.formatMessage({ id: 'ui-notes.settings.noteType' });

    return validate(item, index, items, 'name', label);
  }

  suppressDelete = (noteType) => get(noteType, 'usage.noteTotal') > 0
  suppressEdit = () => false

  render() {
    const {
      stripes,
      intl,
    } = this.props;

    const label = intl.formatMessage({ id: 'ui-notes.settings.noteType' });

    return (
      <this.connectedControlledVocab
        stripes={stripes}
        baseUrl="note-types"
        records="noteTypes"
        validate={this.validateName}
        label={intl.formatMessage({ id: 'ui-notes.settings.noteTypes' })}
        labelSingular={label}
        objectLabel={<FormattedMessage id="ui-notes.settings.notes" />}
        visibleFields={['name']}
        hiddenFields={['lastUpdated']}
        formatter={{ 'numberOfObjects': (item) => get(item, 'usage.noteTotal') }}
        actionSuppressor={{
          edit: this.suppressEdit,
          delete: this.suppressDelete
        }}
        columnMapping={{
          name: label
        }}
        nameKey="name"
        id="noteTypes"
        sortby="name"
      />
    );
  }
}

NoteTypesSettings.propTypes = {
  intl: intlShape.isRequired,
  stripes: PropTypes.shape({
    connect: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(NoteTypesSettings);
