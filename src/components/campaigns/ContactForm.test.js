import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import ContactForm from "./ContactForm";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

describe("<ContactForm />", () => {
  it("Render a contact area", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ContactForm />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
