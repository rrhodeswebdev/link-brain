import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function NavBar() {
  const rightButtons = (
    <div>
      <FlatButton label="Sign Up" />
      <FlatButton label="Sign In" />
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