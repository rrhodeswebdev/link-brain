import React from "react";
import { shallow } from "enzyme";

import SignUpForm from "./SignUpForm";

describe("<SignUpForm />", () => {
  it("Renders without crashing", () => {
    shallow(<SignUpForm />);
  });
});
