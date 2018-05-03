import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import { connect } from 'react-redux';
import { fetchEntries } from '../actions/contactActions';

class ContactTable extends Component() {
  componentDidMount() {
    this.props.fetchEntries();
  }
  render(){
    const tableEntries = this.props.entries.map(entry => (
      <TableRow hoverable={true}>
        <TableRowColumn>Ryan Rhodes</TableRowColumn>
        <TableRowColumn>rrhodes.webdev@gmail.com</TableRowColumn>
        <TableRowColumn>ryanrhodeswebdev.com</TableRowColumn>
        <TableRowColumn>ryanrhodeswebdev.com/blog/cool-ideas</TableRowColumn>
        <TableRowColumn>Campaign 1</TableRowColumn>
        <TableRowColumn>New Contact</TableRowColumn>
        <TableRowColumn style={{ whiteSpace: 'normal', wordWrap: 'break-word'}}>Adding a simple note for the contact</TableRowColumn>
        <TableRowColumn>04/28/18</TableRowColumn>
      </TableRow>
    ))
    return(
      <div className='contact-table-area'>
        <Table style={{ tableLayout: 'auto' }} fixedHeader={false}>
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
          <TableBody>
            {tableEntries}
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries
})

export default connect(mapStateToProps, { fetchEntries })(ContactTable);