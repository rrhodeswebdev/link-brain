import React from "react";
import { shallow } from "enzyme";

import DataCard from "./DataCard";

describe("<DataCard />", () => {
  it("Renders without crashing", () => {
    shallow(<DataCard />);
  });
});
