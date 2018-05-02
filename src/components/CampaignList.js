import React from 'react';
import CampaignListItem from './CampaignListItem';
import CampaignEdit from './CampaignEdit';

function CampaignList() {
  return(
    <div className='campaign-list-area'>
      <CampaignEdit />
      <CampaignListItem />
      <CampaignListItem />
      <CampaignListItem />
    </div>
  )
}

export default CampaignList;