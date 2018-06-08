import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("Renders without crashing", () => {
    shallow(<Dashboard match="http://localhost:3000/dashboard" />);
  });
});
