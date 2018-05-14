import { FETCH_CAMPAIGNS, NEW_CAMPAIGN, EDIT_CAMPAIGN, ACTIVE_CAMPAIGN, LOAD_CAMPAIGN } from './types';

export function fetchCampaigns() {
  return function(dispatch) {
    //Make call to API once built
    //fetch('url')
    //.then(res => res.json())
    //.then(campaigns => dispatch({
    //type: FETCH_CAMPAIGNS,
    //payload: campaigns
    //}));
  }
}

// export function newCampaign() {
//   return function(dispatch) {
//     //Make API call right here
//   }
// }

export const newCampaign = campaign => ({
  type: NEW_CAMPAIGN,
  campaign
});

export const editCampaign = campaign => ({
  type: EDIT_CAMPAIGN,
  campaign
})

export const setActiveCampaign = campaign => ({
  type: ACTIVE_CAMPAIGN,
  campaign
})

export const loadCampaign = data => ({
  type: LOAD_CAMPAIGN,
  data
})