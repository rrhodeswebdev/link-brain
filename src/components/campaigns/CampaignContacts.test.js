import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import CampaignContacts from "./CampaignContacts";
import { MuiThemeProvider } from "@material-ui/core";

describe("<CampaignContacts />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <CampaignContacts />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
