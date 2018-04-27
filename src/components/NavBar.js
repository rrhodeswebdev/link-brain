import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

function NavBar() {
  const rightButtons = (
    <div>
      <Link to='/sign-up'><FlatButton label="Sign Up" /></Link>
      <Link to='/sign-in'><FlatButton label="Sign In" /></Link>
    </div>
  );

  return(
    <AppBar 
      title='LinkBrain'
      showMenuIconButton = {false}
      iconElementRight = {rightButtons}
    />
  )
}

export default NavBar;