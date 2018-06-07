import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import Campaigns from "../campaigns/Campaigns";
import CampaignContacts from "../campaigns/CampaignContacts";
import DashboardData from "./DashboardData";

function Dashboard({ match }) {
  return (
    <div>
      <NavBar />
      <SideMenu />
      <Route exact path={`${match.url}/`} component={DashboardData} />
      <Route exact path={`${match.url}/campaigns`} component={Campaigns} />
      <Route
        exact
        path={`${match.url}/campaign/:id`}
        component={CampaignContacts}
      />
    </div>
  );
}

export default Dashboard;
