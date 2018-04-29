import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

function NavBar() {
  return(
    <div>
      <AppBar title='LinkBrain' showMenuIconButton={false} style={{backgroundColor: '#42A5F5'}}>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon color='#FAFAFA'/></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          style={{marginTop: '8px'}}
        >
          <Link to='/sign-in' style={{textDecoration: 'none'}}><MenuItem primaryText='Sign In' /></Link>
          <Link to='/sign-up' style={{textDecoration: 'none'}}><MenuItem primaryText='Sign Up' /></Link>
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