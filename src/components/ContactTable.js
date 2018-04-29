import React from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow
} from 'material-ui/Table';

import ContactTableEntry from './ContactTableEntry';

function ContactTable() {
  return(
    <div className='contact-table-area'>
      <Table style={{ tableLayout: 'auto' }} fixedHeader={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
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
          <ContactTableEntry />
        </TableBody>
      </Table>
    </div>
  )
}

export default ContactTable;