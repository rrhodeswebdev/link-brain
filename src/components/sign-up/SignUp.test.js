import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import SignUp from "./SignUp";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

describe("<SignUp />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <SignUp />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
