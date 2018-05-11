import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Redirect } from 'react-router-dom';

class CampaignListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }
  
  handleCampaignClick(event) {
    this.setState({
      clicked: true
    })
  }
    render(){
      if(!this.state.clicked) {
        return(
          <div className='campaign-boxes-list'>
            <Card className='campaign-card' onClick={() => this.handleCampaignClick()}>
              <CardTitle 
                title={this.props.name}
                subtitle={this.props.url}
              />
              <CardText>
                <span>Created on: {this.props.date}</span>
              </CardText>
            </Card>
          </div>
        )
      } else {
        return(<Redirect to={`/dashboard/campaign/${this.props.id}`} />)
      }
  }
}

export default CampaignListItem;