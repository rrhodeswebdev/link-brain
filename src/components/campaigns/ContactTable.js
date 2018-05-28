import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import { selectRows, loadEntry } from '../../actions/contactActions';

const columnData = [
  {id: 'name', label: 'Name'},
  {id: 'email', label: 'Email'},
  {id: 'website', label: 'Website'},
  {id: 'linkurl', label: 'Linking URL'},
  {id: 'status', label: 'Status'},
  {id: 'notes', label: 'Notes'},
  {id: 'lastupdate', label: 'Last Updated'},
]

class ContactTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  handleRowSelection(selectedRows) {
    this.props.selectRows(selectedRows);
  }

  handleEditClick = (entry) => {
    this.props.loadEntry(entry)
    this.props.handleOpen()
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  handleClick = (event, id) => {
    const { selected } = this.props.selectedRows;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.handleRowSelection(newSelected);
  }

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    const tableEntries = this.props.entries.map(entry => {
      const isSelected = this.props.selectedRows;
      return (
      <TableRow
        hover
        onClick={event => this.handleClick(entry)}
        role='checkbox'
        aria-checked={isSelected}
        tabIndex={-1}
        key={entry.id}
        selected={isSelected}
      >
        <TableCell><Checkbox checked={isSelected} /></TableCell>
        <TableCell>{entry.name}</TableCell>
        <TableCell>{entry.email}</TableCell>
        <TableCell>{entry.website}</TableCell>
        <TableCell>{entry.linkurl}</TableCell>
        <TableCell>{entry.status}</TableCell>
        <TableCell>{entry.notes}</TableCell>
        <TableCell><Moment format={'MMM DD, YYYY'}>{entry.lastupdate}</Moment></TableCell>
      </TableRow>
      )
  });

    return(
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox 
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  color='primary'
                  checked={numSelected === rowCount}
                  onChange={onSelectAllClick}
                />
              </TableCell>
              {columnData.map(column => {
                return (
                  <TableCell
                    key={column.id}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={order}
                      onClick={this.createSortHandler}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                );
              }, this)}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableEntries}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries,
})

export default connect(mapStateToProps, { selectRows, loadEntry })(ContactTable);