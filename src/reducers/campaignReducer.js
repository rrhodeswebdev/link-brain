import { FETCH_CAMPAIGNS, NEW_CAMPAIGN, EDIT_CAMPAIGN, ACTIVE_CAMPAIGN, LOAD_CAMPAIGN } from '../actions/types';

const initialState = {
  campaigns: [
    {
      name: 'Campaign 1',
      url: 'funtimes.com/coding/tips-tricks',
      date: '04/15/2018',
      id: 1
    },
    {
      name: 'Audience Targeting',
      url: 'ryanrhodes.com/audience-targeting-facts',
      date: '05/04/2018',
      id: 2
    },
    {
      name: 'Tech Tools',
      url: 'toptools.com/techs-best',
      date: '04/25/2018',
      id: 3
    }
  ],
  campaign: null,
  data: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload
      };
    case NEW_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.campaign]
      }
    case EDIT_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload
      }
    case ACTIVE_CAMPAIGN:
      return {
        ...state, 
        campaign: action.campaign
      }
    case LOAD_CAMPAIGN:
      return {
        ...state, 
        data: action.data
      }
    default:
      return state;
  }
}