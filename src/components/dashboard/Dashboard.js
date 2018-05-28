import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Campaigns from '../campaigns/Campaigns';
import Reporting from '../reporting/Reporting';
import CampaignContacts from '../campaigns/CampaignContacts';

function Dashboard({match}) {
  return(
    <div>
      <div>
        <NavBar />
        <SideMenu />
      </div>
      <div>
        <Route exact path={`${match.url}/campaigns`} component={Campaigns} />
        <Route exact path={`${match.url}/reporting`} component={Reporting} />
        <Route exact path={`${match.url}/campaign/:id`} component={CampaignContacts} />
      </div>
    </div>
  )
}

export default Dashboard;
