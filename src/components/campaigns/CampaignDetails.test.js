import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import CampaignDetails from "./CampaignDetails";
import { MuiThemeProvider } from "@material-ui/core";

describe("<CampaignDetails />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <CampaignDetails />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
