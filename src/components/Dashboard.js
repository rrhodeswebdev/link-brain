import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Campaigns from './Campaigns';

function Dashboard({match}) {
  return(
    <div>
      <NavBar />
      <Route exact path={`${match.url}/campaigns`} component={Campaigns} />
    </div>
  )
}

export default Dashboard;