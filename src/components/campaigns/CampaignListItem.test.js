import React from "react";
import { shallow } from "enzyme";

import CampaignListItem from "./CampaignListItem";

describe("<CampaignListItem />", () => {
  it("Renders without crashing", () => {
    shallow(<CampaignListItem />);
  });
});
