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
    let archived = this.props.archived.find((archived) => {
      return archived._id === campaignId
    });

    if(campaign) {
      this.props.fetchEntries(campaign)
      this.props.setActiveCampaign(campaign)
    } else if(archived) {
      this.props.fetchEntries(archived)
      this.props.setActiveCampaign(archived)
    }
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
        <CampaignDetails campaign={this.props.campaign} contacts={this.props.entries} />
        <Contacts />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries,
  campaigns: state.campaigns.campaigns,
  campaign: state.campaigns.campaign,
  archived: state.campaigns.archived
});

export default connect(mapStateToProps, { fetchEntries, setActiveCampaign })(CampaignContacts);