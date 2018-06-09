import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import {
  editCampaign,
  archivedCampaign,
  unarchiveCampaign
} from "../../actions/campaignActions";
import CampaignForm from "./CampaignForm";

class CampaignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  editCampaign = values => {
    this.props.editCampaign(values);
  };

  archivedCampaign = () => {
    const campaign = this.props.campaign;
    const archived = !campaign.archived;

    campaign.archived = archived;

    if (campaign.archived) {
      this.props.unarchiveCampaign(campaign);
    }

    this.props.archivedCampaign(campaign);
    this.props.history.push("/dashboard/campaigns");
  };

  render() {
    const successfulLinks = [];

    this.props.contacts.map(contact => {
      if (contact.status === "Link Recieved") {
        successfulLinks.push(contact);
      }
      return successfulLinks;
    });

    return (
      <div className="campaign-details-panel">
        <ExpansionPanel style={{ width: "100%" }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">
              {this.props.campaign.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography variant="body2" style={{ paddingBottom: "20px" }}>
                URL:
                <Typography>{this.props.campaign.url}</Typography>
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: "20px" }}>
                Created:
                <Typography>
                  <Moment format="MMM DD, YYYY">
                    {this.props.campaign.created}
                  </Moment>
                </Typography>
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: "20px" }}>
                Successful Links:
                <Typography>{successfulLinks.length}</Typography>
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: "20px" }}>
                Number of Contacts:
                <Typography>{this.props.contacts.length}</Typography>
              </Typography>
            </div>
            <div>
              <CampaignForm
                onSubmit={values => this.editCampaign(values)}
                className="fas fa-plus"
                style={{ fontSize: "1.2em", marginRight: "1em" }}
                title="Edit Campaign"
                button="Edit Campaign"
              />
              <div className="campaign-editing-area">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={this.archivedCampaign}
                >
                  <Icon
                    style={{ fontSize: "1.2em", marginRight: "1em" }}
                    className="fas fa-archive"
                  />
                  {this.props.campaign.archived
                    ? "Unarchive Campaign"
                    : "Archive Capaign"}
                </Button>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default connect(
  null,
  { editCampaign, archivedCampaign, unarchiveCampaign }
)(withRouter(CampaignDetails));
