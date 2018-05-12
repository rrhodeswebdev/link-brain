import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import FontIcon from 'material-ui/FontIcon';
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

  editCampaign = (values) => {
    console.log('VALUES: ', values)
    //setup action and reducer
  }

  render(){
    return(
      <div>
        <Toolbar>
          <ToolbarTitle text={this.props.campaign.name} />
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle className='campaign-detail-text' text={this.props.campaign.url} style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text={this.props.campaign.date} style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Number of Contacts: 12' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Successful Links: 4' style={{fontSize: '14px'}} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true} style={{marginRight: '20px'}}>
            <CampaignForm onSubmit = {values => this.editCampaign(values)} className='far fa-edit' backgroundColor='#ffffff'/>
            </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default CampaignDetails;