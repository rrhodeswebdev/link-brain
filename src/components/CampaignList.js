import React, { Component } from 'react';
import CampaignListItem from './CampaignListItem';
import CampaignForm from './CampaignForm';
import Divider from 'material-ui/Divider';

import { connect } from 'react-redux';
import { fetchCampaigns, newCampaign } from '../actions/campaignActions';

class CampaignList extends Component {
  componentDidMount() {
    this.props.fetchCampaigns()
  }

  createNewCampaign(campaign) {
    this.props.newCampaign(campaign);
  }

  render(){
    const campaign = this.props.campaigns.map(campaign => (
      <CampaignListItem {...campaign} />
    ));

    const headerDivider = <Divider style={{marginLeft: '40px', marginRight: '40px'}}/>;

    return(
      <div className='campaign-list-area'>
        <CampaignForm onSubmit = {values => this.createNewCampaign(values)} 
          className='fas fa-plus' 
          backgroundColor='#4CAF50' 
          hoverColor='#81C784' 
          style={{color: 'white', fontSize: '1.2em'}} 
          title = 'Create A New Campaign'
        />
        <h2 className='campaign-h2'>Live Campaigns</h2>
          {headerDivider}
        <div className='campaign-list-group'>
          {campaign}
        </div>
        <h2 className='campaign-h2'>Archived Campaigns</h2>
          {headerDivider}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
})

export default connect(mapStateToProps, { fetchCampaigns, newCampaign })(CampaignList);