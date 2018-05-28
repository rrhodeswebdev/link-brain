import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './campaigns.css';

class CampaignListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleCampaignClick(e) {
    this.setState({
      clicked: true
    })
  }

  render() {
    if(!this.state.clicked) {
      return(
        <div className='campaign-boxes-list'>
          <Card className='campaign-card' onClick={() => this.handleCampaignClick()}>
            <CardContent>
              <Typography variant='headline' gutterBottom={true}>
                {this.props.name}
              </Typography>
              <Typography variant='subheading' gutterBottom={true}>
                {this.props.url}
              </Typography>
              <Typography>
                <Moment format='MMM DD, YYYY'>
                  {this.props.created}
                </Moment>
              </Typography>
            </CardContent>
          </Card>
        </div>
      )
    } else {
      return(<Redirect to={`/dashboard/campaign/${this.props._id}`} />)
    }
  }
}

export default CampaignListItem;
