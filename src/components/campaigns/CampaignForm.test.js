import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import CampaignForm from "./CampaignForm";
import { MuiThemeProvider } from "@material-ui/core";

describe("<CampaignForm />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <CampaignForm />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
