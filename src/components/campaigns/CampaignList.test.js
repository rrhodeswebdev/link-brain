import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import CampaignList from "./CampaignList";
import { MuiThemeProvider } from "@material-ui/core";

describe("<CampaignList />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <CampaignList />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
