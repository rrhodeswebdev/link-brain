import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
// import { editCampaign } from '../actions/campaignActions';
import CampaignForm from './CampaignForm';

class CampaignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }
  
  handleOpen = () => {
    console.log('CLICKED EDIT CAMPAIGN')
    this.setState({open: true})
    return <CampaignForm />
  };

  handleClose = () => {
    this.setState({open: false})
  };

  render(){
    return(
      <div>
        <Toolbar>
          <ToolbarTitle text='Campaign 1' />
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle className='campaign-detail-text' text='URL: rrhodes.com/blog/5-tips' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Created on: Date' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Number of Contacts: 12' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Successful Links: 4' style={{fontSize: '14px'}} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true} style={{marginRight: '20px'}}>
              <FontIcon
                className='far fa-edit'
                style={{margin: '0 5px', fontSize: '1.2em'}}
                onClick = {this.handleOpen}
              />
            </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default CampaignDetails;