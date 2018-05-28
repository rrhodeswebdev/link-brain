import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../../actions/contactActions';
import { setActiveCampaign } from '../../actions/campaignActions';

import CampaignDetails from './CampaignDetails';
import Contacts from './Contacts';

class CampaignContacts extends Component {
  componentDidMount() {
    let campaignId = this.props.match.params.id;
    let campaign = this.props.campaigns.find((campaign) => {
      return campaign._id === campaignId
    });
    this.props.setActiveCampaign(campaign)
    this.props.fetchEntries(campaign._id)
  }

  render() {
    // const contactCampaign = this.props.entries.map(entry => {
    //   return entry.campaign
    // });
    // const filteredCampaign = campaignId.filter(campaign => {
    //   console.log(campaign)
    // })

    if(!this.props.campaign){
      return <div>Loading</div>
    }

    return(
      <div>
        <CampaignDetails campaign={this.props.campaign} />
        <Contacts />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries,
  campaigns: state.campaigns.campaigns,
  campaign: state.campaigns.campaign
});

export default connect(mapStateToProps, { fetchEntries, setActiveCampaign })(CampaignContacts);