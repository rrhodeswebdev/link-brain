import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newEntry, editEntry, deleteEntries, activeContactRemove } from '../../actions/contactActions';

import ContactForm from './ContactForm';
import EnhancedTable from './EnhancedTable';

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
    this.setState({open: true, edit: edit, title: edit ? 'Edit Contact': 'New Contact'})
  };

  handleClose = () => {
    this.setState({open: false, edit: false})
    this.props.activeContactRemove()
  };

  createNewEntry(entry) {
    const campaignIdEntry = this.props.campaign._id;
    entry.campaignId = campaignIdEntry;

    if(this.state.edit) {
      this.props.editEntry(entry)
      console.log(entry)
    } else {
      this.props.newEntry(entry);
    }
  };

  handleDelete(selected) {
    this.props.deleteEntries(selected)
  }

  render() {
    return(
      <div>
        <ContactForm 
          onSubmit={values => this.createNewEntry(values)}
          open={this.state.open}
          handleOpen={() => this.handleOpen(false)}
          handleClose={() => this.handleClose()}
          title={this.state.title}
        />
        <EnhancedTable 
          contacts={this.props.entries} 
          handleDelete={(selected) => {this.handleDelete(selected)}} 
          handleOpen={() => this.handleOpen(true)}
        />
      </div>
    )
  }
}

  const mapStateToProps = state => ({
    entries: state.entries.entries,
    entry: state.entries.entry,
    campaign: state.campaigns.campaign
  })
  
  export default connect(mapStateToProps, { newEntry, editEntry, deleteEntries, activeContactRemove })(Contacts);