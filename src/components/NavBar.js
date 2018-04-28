import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';

function NavBar() {
  const rightButtons = (
    <div>
      <Link to='/sign-up'><FlatButton label="Sign Up" /></Link>
      <Link to='/sign-in'><FlatButton label="Sign In" /></Link>
    </div>
  );

  return(
    <div>
      <AppBar 
        title='LinkBrain'
        showMenuIconButton = {false}
        iconElementRight = {rightButtons}
      />
      <Paper className='left-menu'>
        <Menu>
          <Link to='/dashboard'><MenuItem primaryText='Home' leftIcon={<FontIcon className='material-icons'>home</FontIcon>} /></Link>
          <Link to='/dashboard/campaigns'><MenuItem primaryText='Campaigns' leftIcon={<FontIcon className='material-icons'>public</FontIcon>} /></Link>
          <Link to='/dashboard/contacts'><MenuItem primaryText='Contacts' leftIcon={<FontIcon className='material-icons'>supervisor_account</FontIcon>} /></Link>
          <Link to='/dashboard/reporting'><MenuItem primaryText='Reporting' leftIcon={<FontIcon className='material-icons'>trending_up</FontIcon>} /></Link>
        </Menu>
      </Paper>
    </div>
  )
}

export default NavBar;