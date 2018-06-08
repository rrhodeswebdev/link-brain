import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import Contacts from "./Contacts";
import { MuiThemeProvider } from "@material-ui/core";

describe("<Contacts />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <Contacts />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
