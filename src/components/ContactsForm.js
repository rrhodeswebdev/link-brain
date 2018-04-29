import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class ContactsForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  render(){
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />
    ]
    return(
      <div>
        <div className='contact-btns'>
          <RaisedButton 
            className='add-new-contact-btn' 
            label='Add New Contact' 
            labelColor='#FAFAFA'
            onClick={this.handleOpen}
            backgroundColor='#7CB342'
          />
          <RaisedButton 
            className='delete-contact-btn' 
            label='Delete Contacts' 
            labelColor='#FAFAFA'
            backgroundColor='#EF5350'
          />
        </div>
        <div>
          <Dialog
            title='Create a new contact'
            actions={actions}
            modal={true}
            open={this.state.open}
            bodyClassName='add-new-contact-modal'
          >
            <TextField
              floatingLabelText='Name'
              className='add-contact-text-field'
            />
            <TextField
              floatingLabelText='Email'
              className='add-contact-text-field'
            />
            <TextField
              floatingLabelText='Website'
              className='add-contact-text-field'
            />
            <TextField
              floatingLabelText='Linking URL'
              className='add-contact-text-field'
            />
            <TextField
              floatingLabelText='Campaign'
              className='add-contact-text-field'
            />
            <SelectField floatingLabelText='Status'>
              <MenuItem value={1} primaryText='New Contact' />
              <MenuItem value={2} primaryText='Needs More Research' />
              <MenuItem value={3} primaryText='Awaiting Response' />
              <MenuItem value={4} primaryText='Response Recieved' />
              <MenuItem value={5} primaryText='Follow Up Needed' />
              <MenuItem value={6} primaryText='Link Approved' />
              <MenuItem value={7} primaryText='Link Denied' />
              <MenuItem value={8} primaryText='Link Recieved' />
              <MenuItem value={9} primaryText='Guest Post Approved' />
              <MenuItem value={10} primaryText='Guest Post Denied' />
            </SelectField>
            <TextField
              floatingLabelText='Notes'
              multiLine={true}
              rowsMax={4}
              className='add-contact-text-field'
            />
          </Dialog>
        </div>
      </div>
    )
  }
}

export default ContactsForm;