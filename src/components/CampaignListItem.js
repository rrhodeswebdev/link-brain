import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

function CampaignListItem(props) {
  
  function handleCampaignClick(event) {
    console.log('CLICKED ON A SPECIFIC CAMPAIGN')
  }

    return(
      <div className='campaign-boxes-list'>
        <Card className='campaign-card' onClick={handleCampaignClick}>
          <CardTitle 
            title={props.name}
            subtitle={props.url}
          />
          <CardText>
            <span>Created on: {props.date}</span>
          </CardText>
        </Card>
      </div>
    )
  }

export default CampaignListItem;