import React from "react";
import { shallow } from "enzyme";

import SideMenu from "./SideMenu";

describe("<SideMenu />", () => {
  it("Renders without crashing", () => {
    shallow(<SideMenu />);
  });
});
