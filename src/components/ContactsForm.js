import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import { newEntry } from '../actions/contactActions';
import { Field, reduxForm } from 'redux-form';

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
    ];

    const renderTextField = ({
      input,
      label,
      meta: {touched, error }, ...custom
    }) => (
      <TextField
        floatingLabelText={label}
        {...input}
        {...custom}
      />
    )

    const renderSelectField = ({
      input,
      label,
      meta: { touched, error },
      children,
      ...custom
    }) => (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />
    )

    const fake = ['fake', 'data', 'inserted', 'here', 'until', 'the', 'real', 'data', 'is', 'available'];
    
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
          <AutoComplete
            floatingLabelText='Search Contacts'
            filter={AutoComplete.fuzzyFilter}
            maxSearchResults={5}
            dataSource={fake}
            className='contact-search-bar'
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
            <form>
              <Field 
                name='name'
                label='Name'
                component={renderTextField}
              />
              <Field 
                name='email'
                label='Email'
                component={renderTextField}
              />
              <Field 
                name='website'
                label='Website'
                component={renderTextField}
              />
              <Field 
                name='linkurl'
                label='Linking URL'
                component={renderTextField}
              />
              <Field 
                name='campaign'
                label='Campaign'
                component={renderTextField}
              />
              <Field
                  name="status"
                  component={renderSelectField}
                  label="Status"
                >
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
                </Field>
              <Field 
                name='notes'
                label='Notes'
                component={renderTextField}
                multiLine={true}
                rowsMax={4}
                className='add-contact-text-field'
              />
            </form>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'ContactsForm'
}, null, { newEntry })(ContactsForm)