import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CampaignForm from './CampaignForm';
import { editCampaign } from '../actions/campaignActions';

class CampaignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }
  
  handleOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  editCampaign = (values) => {
    this.props.editCampaign(values)
  };

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
              <CampaignForm 
                onSubmit = {values => this.editCampaign(values)} 
                className='far fa-edit' 
                backgroundColor='#1565C0' 
                hoverColor='#1E88E5' 
                style={{color: 'white', fontSize: '1.2em', paddingBottom: '5px'}}
                title = 'Edit Campaign'
              />
            </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default connect(null, { editCampaign })(CampaignDetails);