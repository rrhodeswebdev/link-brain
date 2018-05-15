import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import { deleteEntries } from '../actions/contactActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class ContactsForm extends Component {

  handleDelete() {
    this.props.dispatch(deleteEntries())
  };

  render(){
    const submit = this.props.handleSubmit(this.props.onSubmit);

    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={() => {submit(); this.props.reset(); this.props.handleClose();}}
      />
    ];

    const renderTextField = ({
      input,
      label,
      meta: {touched, error }, ...custom
    }) => (
      <TextField
        style={{margin: '0 10px'}}
        floatingLabelText={label}
        {...input}
        {...custom}
      />
    )

    const renderAutoComplete = ({
      input,
      label
    }) => (
      <AutoComplete 
      floatingLabelText={label}
      filter={AutoComplete.caseSensitiveFilter} 
      dataSource={fake} 
      {...input}
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
        style={{margin: '0 10px'}}
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
            onClick={this.props.handleOpen}
            backgroundColor='#7CB342'
          />
          <RaisedButton 
            className='delete-contact-btn' 
            label='Delete Contacts' 
            labelColor='#FAFAFA'
            backgroundColor='#EF5350'
            onClick = {() => this.handleDelete()}
          />
          <div className='auto-search-area'>
            <form>
              <Field
                name='search'
                label='Search'
                component={renderAutoComplete}
              />
            </form>
          </div>
        </div>
        <div>
          <Dialog
            title='Create a new contact'
            actions={actions}
            modal={true}
            open={this.props.open}
            bodyClassName='add-new-contact-modal'
          >
            <form onSubmit = {this.props.handleSubmit}>
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
                <MenuItem value={'New Contact'} primaryText='New Contact' />
                <MenuItem value={'Needs More Research'} primaryText='Needs More Research' />
                <MenuItem value={'Awaiting Response'} primaryText='Awaiting Response' />
                <MenuItem value={'Response Recieved'} primaryText='Response Recieved' />
                <MenuItem value={'Follow Up Needed'} primaryText='Follow Up Needed' />
                <MenuItem value={'Link Approved'} primaryText='Link Approved' />
                <MenuItem value={'Link Denied'} primaryText='Link Denied' />
                <MenuItem value={'Link Recieved'} primaryText='Link Recieved' />
                <MenuItem value={'Guest Post Approved'} primaryText='Guest Post Approved' />
                <MenuItem value={'Guest Post Denied'} primaryText='Guest Post Denied' />
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

const mapStateToProps = state => ({
  
})

const connectedForm = connect(mapStateToProps)(ContactsForm);

const ReduxForm = reduxForm({
  form: 'ContactsForm'
}, null)(connectedForm)

export default ReduxForm;