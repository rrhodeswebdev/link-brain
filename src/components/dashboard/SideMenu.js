import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';

import './dashboard.css';

function SideMenu() {
  return(
    <Paper className='side-menu'>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to='/dashboard' className='side-menu-links'>
            <ListItemText primary='Dashboard' />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <Link to='/dashboard/campaigns' className='side-menu-links'>
            <ListItemText primary='Campaigns' />
          </Link>
        </ListItem>
      </List>
    </Paper>
  )
}

export default SideMenu;
