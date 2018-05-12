import React, { Component } from 'react';
import CampaignListItem from './CampaignListItem';
import CampaignForm from './CampaignForm';

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
    return(
      <div className='campaign-list-area'>
        <CampaignForm onSubmit = {values => this.createNewCampaign(values)} className='fas fa-plus' backgroundColor='#4CAF50' />
        <div className='campaign-list-group'>
          {campaign}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
})

export default connect(mapStateToProps, { fetchCampaigns, newCampaign })(CampaignList);