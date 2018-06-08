import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import SignUp from "./SignUp";
import { MuiThemeProvider } from "@material-ui/core";

describe("<SignUp />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <SignUp />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
