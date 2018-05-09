import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';

class CampaignDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }
  
  handleOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  handleClick(event) {
    console.log('clicked on edit button')
  }

  render(){
    return(
      <div>
        <Toolbar>
          <ToolbarTitle text='Campaign 1' />
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle className='campaign-detail-text' text='URL: rrhodes.com/blog/5-tips' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Created on: Date' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Number of Contacts: 12' style={{fontSize: '14px'}} />
                <ToolbarSeparator className='toolbar-separator-campaign-detail' />
              <ToolbarTitle className='campaign-detail-text' text='Successful Links: 4' style={{fontSize: '14px'}} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true} style={{marginRight: '20px'}}>
              <FontIcon
                className='far fa-edit'
                style={{margin: '0 5px', fontSize: '1.2em'}}
                onClick = {this.handleClick}
              />
            </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default CampaignDetails;