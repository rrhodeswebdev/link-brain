import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form';
import { newCampaign } from '../actions/campaignActions';

class CampaignForm extends Component {
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
    const submit = this.props.handleSubmit(this.props.onSubmit);
    const renderTextField = ({
      input,
      label,
    }) => (
      <TextField
        floatingLabelText={label}
        style={{margin: '0 10px'}}
        {...input}
      />
          )

    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={() => {submit(); this.props.reset(); this.handleClose();}}
      />
    ];
    return(
      <div className='campaign-editing-area'>
        <FlatButton
          backgroundColor='#4CAF50'
          hoverColor='#81C784'
          icon={<FontIcon style={{color: 'white', fontSize: '1.2em'}}className='fas fa-plus' />}
          onClick={this.handleOpen}
        />
         <div>
            <Dialog
              title='Create a new campaign'
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
                name='url'
                label='URL'
                component={renderTextField}
              />
              </form>
            </Dialog>
          </div>
      </div>
    )
  }
  
}

export default reduxForm({
  form: 'CampaignForm'
}, null, { newCampaign })(CampaignForm)