import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import SignIn from "./SignIn";
import { MuiThemeProvider } from "@material-ui/core";

describe("<SignIn />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <SignIn />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
