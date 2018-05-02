import React from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function ContactTable() {
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
        </TableBody>
      </Table>
    </div>
  )
}

export default ContactTable;