import React, { Component } from 'react';
import CampaignListItem from './CampaignListItem';
import CampaignForm from './CampaignForm';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { connect } from 'react-redux';
import { fetchCampaigns } from '../actions/campaignActions';

class CampaignList extends Component {
  componentDidMount() {
    this.props.fetchCampaigns()
  }

  render(){
    const campaign = this.props.campaigns.map(campaign => (
      <CampaignListItem {...campaign}/>
    ));
    return(
      <div className='campaign-list-area'>
        <CampaignForm />
        {campaign}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
})

export default connect(mapStateToProps, { fetchCampaigns })(CampaignList);