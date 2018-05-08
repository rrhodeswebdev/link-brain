import { FETCH_CAMPAIGNS, NEW_CAMPAIGN, EDIT_CAMPAIGN } from '../actions/types';

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
  campaign: {}
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
    default:
      return state;
  }
}