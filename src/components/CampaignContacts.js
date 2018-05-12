import React, { Component } from 'react';
import CampaignDetails from './CampaignDetails';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import { fetchEntries } from '../actions/contactActions';

class CampaignContacts extends Component {
  render() {
    const contactCampaign = this.props.entries.map(entry => {
      return entry.campaign
    });
    // const filteredCampaign = campaignId.filter(campaign => {
    //   console.log(campaign)
    // })
    console.log(contactCampaign)

    return(
      <div>
        <CampaignDetails />
        <Contacts />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries
})

export default connect(mapStateToProps, { fetchEntries })(CampaignContacts);