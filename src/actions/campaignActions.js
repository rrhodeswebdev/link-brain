import { FETCH_CAMPAIGNS, NEW_CAMPAIGN, EDIT_CAMPAIGN, ACTIVE_CAMPAIGN, LOAD_CAMPAIGN, ARCHIVED_CAMPAIGN } from './types';

const token = window.localStorage.getItem('token');

export const fetchCampaigns = () => dispatch => {
    fetch('http://localhost:5000/api/campaigns', {
      method: 'GET',
      headers: new Headers ({
        'content-type': 'application/json',
        'authorization': 'Bearer ' + token
      })
    })
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
    .then(campaigns =>{
      const archived = [];
      const active = [];
      campaigns.forEach(campaign => {
        if(campaign.archived) {
          archived.push(campaign)
        } else {
          active.push(campaign)
        }
      })
      dispatch ({
        type: FETCH_CAMPAIGNS,
        archived, active
    })
  })
  };

export const newCampaign = (campaign) => dispatch => {
    fetch('http://localhost:5000/api/campaigns', {
      method: 'POST',
      body: JSON.stringify(campaign),
      headers: new Headers ({
        'content-type': 'application/json',
        'authorization': 'Bearer ' + token
      })
    })
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
    .then(campaign => dispatch({
      type: NEW_CAMPAIGN,
      campaign
    }))
};

export const editCampaign = (campaign) => dispatch => {
  fetch('http://localhost:5000/api/campaign/:id', {
    method: 'PUT',
    body: JSON.stringify(campaign),
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(campaign => dispatch({
    type: EDIT_CAMPAIGN,
    campaign
  }))
}

export const setActiveCampaign = campaign => ({
  type: ACTIVE_CAMPAIGN,
  campaign
})

export const archivedCampaign = campaign => dispatch => {
  fetch(`http://localhost:5000/api/campaign/${campaign._id}`, {
    method: 'PUT',
    body: JSON.stringify(campaign),
    headers: new Headers ({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + token
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(campaign => dispatch({
    type: ARCHIVED_CAMPAIGN,
    campaign
  }))
}

export const loadCampaign = data => ({
  type: LOAD_CAMPAIGN,
  data
})