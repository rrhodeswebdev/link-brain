import React, { Component } from "react";
import { connect } from "react-redux";

import DataCard from "./DataCard";
import DataChart from "./DataChart";
import DataTable from "./DataTable";
import DataChartLinks from "./DataChartLinks";
import { fetchCampaigns } from "../../actions/campaignActions";
import { fetchAllContacts } from "../../actions/contactActions";

class DashboardData extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
    this.props.fetchAllContacts();
  }

  render() {
    const liveCampaignCard = (
      <DataCard count={this.props.campaigns.length} title="Live Campaigns" />
    );
    const archivedCampaignCard = (
      <DataCard count={this.props.archived.length} title="Archived Campaigns" />
    );
    const linksApprovedCard = (
      <DataCard
        count={
          this.props.usercontacts.filter(
            contact => contact.status === "Link Approved"
          ).length
        }
        title="Links Approved"
      />
    );
    const guestPostsApprovedCard = (
      <DataCard
        count={
          this.props.usercontacts.filter(
            contact => contact.status === "Guest Post Approved"
          ).length
        }
        title="Guest Posts Approved"
      />
    );
    const newContactTable = <DataTable data={this.props.usercontacts} />;

    const totalContacts = (
      <DataChart
        data={this.props.usercontacts}
        title="Contacts Added in the Past Week"
      />
    );
    const totalLinks = (
      <DataChartLinks
        data={this.props.usercontacts}
        title="Links Earned in the Past Week"
      />
    );

    return (
      <div className="data-area">
        <div className="data-card-area">
          {liveCampaignCard}
          {archivedCampaignCard}
          {linksApprovedCard}
          {guestPostsApprovedCard}
        </div>
        <div className="data-graph-area">
          {totalContacts}
          {totalLinks}
        </div>
        <div className="data-table-area">{newContactTable}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns,
  archived: state.campaigns.archived,
  usercontacts: state.entries.usercontacts
});

export default connect(
  mapStateToProps,
  { fetchCampaigns, fetchAllContacts }
)(DashboardData);
