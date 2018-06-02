import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataCard from './DataCard';
import { fetchCampaigns } from '../../actions/campaignActions';

class DashboardData extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }
  
  render() {
    const liveCampaignCard = <DataCard count={this.props.campaigns.length} title='Live Campaigns' />;
    const archivedCampaignCard = <DataCard count={this.props.archived.length} title='Archived Campaigns' />;

    return(
      <div>
        <div className='data-card-area'>
          {liveCampaignCard}
          {archivedCampaignCard}
        </div>
        <div className='data-graph-area'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns,
  archived: state.campaigns.archived
});

export default connect(mapStateToProps, { fetchCampaigns })(DashboardData);