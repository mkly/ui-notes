import React from 'react';
import { FormattedMessage } from 'react-intl';

const NOTE_TYPES_MAX_COUNT = 20;
// eslint-disable-next-line import/prefer-default-export
export function validate(item, index, items, field, label) {
  const error = {};
  if (items.length > NOTE_TYPES_MAX_COUNT) {
    error[field] = (
      <FormattedMessage
        id="ui-notes.settings.maxAmout"
        values={{ amount: NOTE_TYPES_MAX_COUNT }}
      />
    );

    return error;
  }

  for (let i = 0; i < items.length; i++) {
    const obj = items[i];

    if ((index !== i) && ((obj[field] || '').localeCompare(item[field], undefined, { sensitivity: 'base' }) === 0)) {
      error[field] = (
        <FormattedMessage
          id="ui-notes.settings.duplicated"
          values={{ field: label }}
        />
      );
    }
  }

  return error;
}
