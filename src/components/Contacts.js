import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactTable from './ContactTable';
import ContactsForm from './ContactsForm';
import { newEntry, editEntry } from '../actions/contactActions';

class Contacts extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false,
      edit: false,
      title: 'new'
    };
  }

  handleOpen = (edit) => {
    this.setState({open: true, edit: edit, title: edit ? 'Edit Contact': 'Add New Contact'})
  };

  handleClose = () => {
    this.setState({open: false, edit: false})
  };

  createNewEntry(entry) {
    if(this.state.edit) {
      this.props.editEntry(entry)
    } else {
      this.props.newEntry(entry);
    }
  };

  render() {
    return(
      <div>
        <ContactsForm 
          onSubmit = {values => this.createNewEntry(values)} 
          open={this.state.open} 
          handleOpen={() => this.handleOpen(false)} 
          handleClose={() => this.handleClose()}
          title = {this.state.title}
        />
        <ContactTable 
          handleOpen={() => this.handleOpen(true)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries
})

export default connect(mapStateToProps, { newEntry, editEntry })(Contacts);

