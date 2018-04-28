import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function ContactTableEntry() {
  return(
    <TableRow>
      <TableRowColumn>Ryan Rhodes</TableRowColumn>
      <TableRowColumn>rrhodes.webdev@gmail.com</TableRowColumn>
      <TableRowColumn>ryanrhodeswebdev.com</TableRowColumn>
      <TableRowColumn>ryanrhodeswebdev.com/blog/cool-ideas</TableRowColumn>
      <TableRowColumn>Campaign 1</TableRowColumn>
      <TableRowColumn>New Contact</TableRowColumn>
      <TableRowColumn>04/28/18</TableRowColumn>
    </TableRow>
  )
}

export default ContactTableEntry;