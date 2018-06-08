import React from "react";
import { shallow } from "enzyme";

import DataChartLinks from "./DataChartLinks";

describe("<DataChartLinks />", () => {
  it("Renders without crashing", () => {
    shallow(<DataChartLinks data={["test", "test"]} />);
  });
});
