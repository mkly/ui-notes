import React from 'react';
import PropTypes from 'prop-types';
import {
  FormattedMessage,
  FormattedDate,
} from 'react-intl';
import { Link } from 'react-router-dom';

import {
  MultiColumnList,
} from '@folio/stripes/components';


const COLUMN_NAMES = ['date', 'updateBy', 'title'];
const COLUMN_WIDTHS = {
  date: '30%',
  updatedBy: '30%',
  title: '40%',
};

const columnsMap = {
  date: <FormattedMessage id="ui-notes.date" />,
  updateBy: <FormattedMessage id="ui-notes.updatedBy" />,
  title: <FormattedMessage id="ui-notes.title" />,
};

const noteShape = PropTypes.shape({
  id: PropTypes.string,
  lastSaveDate: PropTypes.string,
  lastSavedUserName: PropTypes.string,
  title: PropTypes.string,
});

export default class NotesList extends React.Component {
  static propTypes = {
    notes: PropTypes.arrayOf(noteShape).isRequired,
  }

  rowFormatter = (row) => {
    const {
      rowClass,
      rowData: { id },
      rowProps,
      cells,
      labelStrings,
    } = row;

    const noteDetailsUrl = `/notes/view/${id}`;
    const ariaLabel = labelStrings && labelStrings.join('...');

    return (
      <div
        role="listitem"
        key={id}
      >
        <Link
          data-test-notes-list-item
          to={noteDetailsUrl}
          aria-label={ariaLabel}
          className={rowClass}
          {...rowProps}
        >
          {cells}
        </Link>
      </div>
    );
  };

  getResults() {
    return this.props.notes
      .map(note => {
        const {
          id,
          title,
          lastSavedDate,
          lastSavedUserName,
        } = note;

        return {
          id,
          updatedDate: (
            <FormattedDate
              value={lastSavedDate}
              year="numeric"
              month="numeric"
              day="numeric"
            />
          ),
          lastSavedUserName,
          title,
        };
      });
  }

  render() {
    return (
      <FormattedMessage id="ui-notes.notes">
        {
          (ariaLabel) => (
            <MultiColumnList
              id="notes-list"
              interactive
              ariaLabel={ariaLabel}
              contentData={this.getResults()}
              visibleColumns={COLUMN_NAMES}
              columnMapping={columnsMap}
              columnWidths={COLUMN_WIDTHS}
              isEmptyMessage={<FormattedMessage id="ui-notes.notFound" />}
              rowFormatter={this.rowFormatter}
            />
          )
        }
      </FormattedMessage>
    );
  }
}
