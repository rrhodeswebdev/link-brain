import { FETCH_CAMPAIGNS, NEW_CAMPAIGN, EDIT_CAMPAIGN, ACTIVE_CAMPAIGN, LOAD_CAMPAIGN, ARCHIVED_CAMPAIGN } from '../actions/types';

const initialState = {
  campaigns: [],
  campaign: null,
  data: {},
  archived: []
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
        campaign: action.campaign
      }
    case ACTIVE_CAMPAIGN:
      return {
        ...state, 
        campaign: action.campaign
      }
    case ARCHIVED_CAMPAIGN:
      return {
        ...state,
        archived: [...state.archived, action.campaign]
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