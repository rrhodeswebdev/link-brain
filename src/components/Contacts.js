import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactTable from './ContactTable';
import ContactsForm from './ContactsForm';
import { newEntry } from '../actions/contactActions';

class Contacts extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false,
      edit: false
    };
  }

  handleOpen = (edit) => {
    this.setState({open: true, edit: edit})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  createNewEntry(entry) {
    console.log(this.state.edit)
    if(this.state.edit) {
      // this.props.editEntry(entry)
    }
    this.props.newEntry(entry);
  }

  render() {
    return(
      <div>
        <ContactsForm 
          onSubmit = {values => this.createNewEntry(values)} 
          open={this.state.open} 
          handleOpen={() => this.handleOpen(false)} 
          handleClose={() => this.handleClose()}  
        />
        <ContactTable 
          handleOpen={() => this.handleOpen(true)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { newEntry })(Contacts);

