import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import EnhancedTable from "./EnhancedTable";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

describe("<EnhancedTable />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <EnhancedTable />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
