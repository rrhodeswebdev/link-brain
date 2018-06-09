import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import DashboardData from "./DashboardData";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

describe("<DashboardData />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <DashboardData />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
