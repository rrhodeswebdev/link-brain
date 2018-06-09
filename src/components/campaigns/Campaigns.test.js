import React from "react";
import { shallow } from "enzyme";

import Campaigns from "./Campaigns";

describe("<Campaigns />", () => {
  it("Renders without crashing", () => {
    shallow(<Campaigns />);
  });
});
