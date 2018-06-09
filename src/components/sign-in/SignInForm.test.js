import React from "react";
import { shallow } from "enzyme";

import SignInForm from "./SignInForm";

describe("<SignInForm />", () => {
  it("Renders without crashing", () => {
    shallow(<SignInForm />);
  });
});
