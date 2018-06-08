import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";

describe("<App />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
