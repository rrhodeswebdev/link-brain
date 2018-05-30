import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { editCampaign, archivedCampaign } from '../../actions/campaignActions';
import CampaignForm from './CampaignForm';

class CampaignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  editCampaign = (values) => {
    this.props.editCampaign(values)
  };

  archivedCampaign = () => {
    const campaign = this.props.campaign;
    const archived = !campaign.archived;
    console.log(archived);

    this.props.archivedCampaign(campaign)
  };

  render() {
    return(
       <div className='campaign-details-panel'>
        <ExpansionPanel style={{ width: '100%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='headline'>
              {this.props.campaign.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Typography variant='body2' style={{ paddingBottom: '20px'}}>
                URL:
                <Typography>
                  {this.props.campaign.url} 
                </Typography>
              </Typography>
              <Typography variant='body2' style={{ paddingBottom: '20px'}}>
                Created: 
                <Typography>
                <Moment format='MMM DD, YYYY'>
                  {this.props.campaign.created}
                </Moment>
                </Typography>
              </Typography>
              <Typography variant='body2' style={{ paddingBottom: '20px'}}>
                Successful Links:
                <Typography>
                  5
                </Typography>
              </Typography>
              <Typography variant='body2' style={{ paddingBottom: '20px'}}>
                Number of Contacts:
                <Typography>
                  45 
                </Typography>
              </Typography>
            </div>
              <div>
              <CampaignForm 
                onSubmit={values => this.editCampaign(values)}
                className='fas fa-plus'
                style={{fontSize: '1.2em', marginRight: '1em'}} 
                title='Edit Campaign'
                button='Edit Campaign'
              />
              <div className='campaign-editing-area'>
                <Button variant='outlined' color='secondary' onClick={this.archivedCampaign}>
                  <Icon style={{fontSize: '1.2em', marginRight: '1em'}} className='fas fa-archive' />
                  Archive Campaign
                </Button>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default connect(null, { editCampaign, archivedCampaign })(CampaignDetails);