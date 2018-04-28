import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

function CampaignListItem() {
  return(
    <div>
      <Card>
        <CardTitle 
          title='Campaign 1'
          subtitle='Blog Post'
        />
        <CardText>
          <span>Created on: Date</span><span>Number of Opportunities: #</span>
        </CardText>
      </Card>
    </div>
  )
}

export default CampaignListItem;