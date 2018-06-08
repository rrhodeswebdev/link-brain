import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import EnhancedTable from "./EnhancedTable";
import { MuiThemeProvider } from "@material-ui/core";

describe("<EnhancedTable />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <EnhancedTable />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
