import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

class CampaignEdit extends Component {
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
              <TextField
                floatingLabelText='Name'
                className='add-contact-text-field'
              />
              <TextField
                floatingLabelText='URL'
                className='add-contact-text-field'
              />
            </Dialog>
          </div>
      </div>
    )
  }
  
}

export default CampaignEdit;