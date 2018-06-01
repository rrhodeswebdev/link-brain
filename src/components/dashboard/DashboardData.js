import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataCard from './DataCard';
import { fetchCampaigns } from '../../actions/campaignActions';

class DashboardData extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }
  
  render() {
    const liveCampaignCard = <DataCard liveCampaigns={this.props.campaigns} />;
    const archivedCampaignCard = <DataCard archivedCampaigns={this.props.archived} />;

    return(
      <div>
        <div className='data-card-area'>
          {liveCampaignCard}
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