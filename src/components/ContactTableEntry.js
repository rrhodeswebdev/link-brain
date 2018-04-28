import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

function ContactTableEntry() {
  return(
    <div>
      <FloatingActionButton>
        <ContentAdd />
        </FloatingActionButton>
    <TableRow>
      <TableRowColumn>Ryan Rhodes</TableRowColumn>
      <TableRowColumn>rrhodes.webdev@gmail.com</TableRowColumn>
      <TableRowColumn>ryanrhodeswebdev.com</TableRowColumn>
      <TableRowColumn>ryanrhodeswebdev.com/blog/cool-ideas</TableRowColumn>
      <TableRowColumn>Campaign 1</TableRowColumn>
      <TableRowColumn>New Contact</TableRowColumn>
      <TableRowColumn>04/28/18</TableRowColumn>
    </TableRow>
    </div>
  )
}

export default ContactTableEntry;