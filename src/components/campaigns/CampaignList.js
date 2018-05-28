import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';

import { fetchCampaigns, newCampaign } from '../../actions/campaignActions';
import CampaignForm from './CampaignForm';
import CampaignListItem from './CampaignListItem';

import './campaigns.css'

class CampaignList extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  createNewCampaign(campaign) {
    this.props.newCampaign(campaign);
  }

  render() {
    const campaign = this.props.campaigns.map(campaign => (
      <CampaignListItem {...campaign} key={campaign._id} />
    ));

    const headerDivider = <Divider style={{ marginLeft: '40px', marginRight: '40px'}} />; 

    return(
      <div className='campaign-list-area'>
        <CampaignForm
          onSubmit={values => this.createNewCampaign(values)}
          className='fas fa-plus'
          style={{fontSize: '1.2em', marginRight: '1em'}} 
          title='Create A New Campaign'
          button='New Campaign'
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
});

export default connect(mapStateToProps, { fetchCampaigns, newCampaign })(CampaignList);
