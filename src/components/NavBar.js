import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';

function NavBar() {
  return(
    <div>
      <AppBar title='LinkBrain' showMenuIconButton={false} style={{backgroundColor: '#42A5F5'}}>
        <IconMenu
          iconButtonElement={<FontIcon className='fas fa-link' style={{marginTop: '10px', fontSize: '1.2em', color: 'white'}} />}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          style={{marginTop: '10px'}}
        >
          <Link to='/' style={{textDecoration: 'none'}}><MenuItem primaryText='Log Out' /></Link>
        </IconMenu>
      </AppBar>
      <Paper className='left-menu' zDepth={2}>
        <Menu>
          <Link to='/dashboard' style={{textDecoration: 'none'}}><MenuItem primaryText='Home' leftIcon={<FontIcon className='material-icons'>home</FontIcon>} /></Link>
          <Link to='/dashboard/campaigns' style={{textDecoration: 'none'}}><MenuItem primaryText='Campaigns' leftIcon={<FontIcon className='material-icons'>public</FontIcon>} /></Link>
          <Link to='/dashboard/contacts' style={{textDecoration: 'none'}}><MenuItem primaryText='Contacts' leftIcon={<FontIcon className='material-icons'>supervisor_account</FontIcon>} /></Link>
          <Link to='/dashboard/reporting' style={{textDecoration: 'none'}} ><MenuItem primaryText='Reporting' leftIcon={<FontIcon className='material-icons'>trending_up</FontIcon>} /></Link>
        </Menu>
      </Paper>
    </div>
  )
}

export default NavBar;