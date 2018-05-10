import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import ContactsForm from './ContactsForm';

import { connect } from 'react-redux';
import { fetchEntries, newEntry, selectRows } from '../actions/contactActions';

class ContactTable extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  createNewEntry(entry) {
    this.props.newEntry(entry);
  }

  handleRowSelection(selectedRows) {
    this.props.selectRows(selectedRows);
  }
  
  render(){
    const tableEntries = this.props.entries.map(entry => (
      <TableRow hoverable={true} key={entry.id}>
        <TableRowColumn>{entry.name}</TableRowColumn>
        <TableRowColumn>{entry.email}</TableRowColumn>
        <TableRowColumn>{entry.website}</TableRowColumn>
        <TableRowColumn>{entry.linkurl}</TableRowColumn>
        <TableRowColumn>{entry.campaign}</TableRowColumn>
        <TableRowColumn>{entry.status}</TableRowColumn>
        <TableRowColumn style={{ whiteSpace: 'normal', wordWrap: 'break-word'}}>{entry.notes}</TableRowColumn>
        <TableRowColumn>{entry.date}</TableRowColumn>
      </TableRow>
    ))
    return(
      <div>
        <ContactsForm onSubmit = {values => this.createNewEntry(values)} />
        <div className='contact-table-area'>
          <Table style={{ tableLayout: 'auto' }} fixedHeader={false} multiSelectable={true} onRowSelection={selected => this.handleRowSelection(selected)}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Website</TableHeaderColumn>
                <TableHeaderColumn>Linking URL</TableHeaderColumn>
                <TableHeaderColumn>Campaign</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn>Notes</TableHeaderColumn>
                <TableHeaderColumn>Last Updated</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
              {tableEntries}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries
})

export default connect(mapStateToProps, { fetchEntries, newEntry, selectRows })(ContactTable);