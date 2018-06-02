import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newEntry, editEntry, deleteEntries } from '../../actions/contactActions';

import ContactForm from './ContactForm';
// import ContactTable from './ContactTable';
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
  };

  createNewEntry(entry) {
    const campaignIdEntry = this.props.campaign._id;
    entry.campaignId = campaignIdEntry;

    if(this.state.edit) {
      this.props.editEntry(entry)
    } else {
      this.props.newEntry(entry);
    }
  };

  handleDelete(selected) {
    console.log(selected)
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
        {/* <ContactTable
          handleOpen={() => this.handleOpen(true)}
        /> */}
        <EnhancedTable contacts={this.props.entries} handleDelete={(selected) => {this.handleDelete(selected)}}/>
      </div>
    )
  }
}

  const mapStateToProps = state => ({
    entries: state.entries.entries,
    campaign: state.campaigns.campaign
  })
  
  export default connect(mapStateToProps, { newEntry, editEntry, deleteEntries })(Contacts);