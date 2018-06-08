import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import DashboardData from "./DashboardData";
import { MuiThemeProvider } from "@material-ui/core";

describe("<DashboardData />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <DashboardData />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
