import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

function CampaignListItem() {
    return(
      <div className='campaign-boxes-list'>
        <Card className='campaign-card'>
          <CardTitle 
            title='Campaign 1'
            subtitle='Blog Post'
          />
          <CardText>
            <span>Created on: Date</span>
          </CardText>
        </Card>
      </div>
    )
  }

export default CampaignListItem;