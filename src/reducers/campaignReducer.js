import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  EDIT_CAMPAIGN,
  ACTIVE_CAMPAIGN,
  LOAD_CAMPAIGN,
  ARCHIVED_CAMPAIGN,
  UNARCHIVE_CAMPAIGN
} from "../actions/types";

const initialState = {
  campaigns: [],
  campaign: null,
  data: {},
  archived: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.active,
        archived: action.archived
      };
    case NEW_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.campaign]
      };
    case EDIT_CAMPAIGN:
      return {
        ...state,
        campaign: action.campaign
      };
    case ACTIVE_CAMPAIGN:
      return {
        ...state,
        campaign: action.campaign
      };
    case ARCHIVED_CAMPAIGN:
      const campaigns = [...state.campaigns];
      const index = campaigns.findIndex(campaign => {
        return campaign._id === action.campaign._id;
      });
      campaigns.splice(index, 1);
      return {
        ...state,
        archived: [...state.archived, action.campaign],
        campaigns: campaigns
      };
    case UNARCHIVE_CAMPAIGN:
      const archived = [...state.archived];
      const archiveIndex = archived.findIndex(campaign => {
        return campaign._id === action.campaign._id;
      });
      archived.splice(archiveIndex, 1);
      return {
        ...state,
        campaigns: [...state.campaigns, action.campaign],
        archived: archived
      };
    case LOAD_CAMPAIGN:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
