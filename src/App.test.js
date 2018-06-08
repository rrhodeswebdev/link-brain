import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

describe("<App />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
