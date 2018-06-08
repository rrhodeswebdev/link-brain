import React from "react";
import { shallow } from "enzyme";

import DataChart from "./DataChart";

describe("<DataChart />", () => {
  it("Renders without crashing", () => {
    shallow(<DataChart data={["test", "test"]} />);
  });
});
