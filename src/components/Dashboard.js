import React from 'react';
import NavBar from './NavBar';
import { Route } from 'react-router-dom';

import Campaigns from './Campaigns';
import Contacts from './Contacts'
import Reporting from './Reporting';
import CampaignContacts from './CampaignContacts';

function Dashboard({match}) {
  return(
    <div>
      <NavBar />
      <Route exact path={`${match.url}/campaigns`} component={Campaigns} />
      <Route exact path={`${match.url}/contacts`} component={Contacts} />
      <Route exact path={`${match.url}/reporting`} component={Reporting} />
      <Route exact path={`${match.url}/campaign/:id`} component={CampaignContacts} />
    </div>
  )
}

export default Dashboard;