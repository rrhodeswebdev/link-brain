import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

import ContactForm from "./ContactForm";
import { MuiThemeProvider } from "@material-ui/core";

describe("<ContactForm />", () => {
  it("Render a contact area", () => {
    shallow(
      <Provider store={store}>
        <MuiThemeProvider>
          <ContactForm />
        </MuiThemeProvider>
      </Provider>
    );
  });
});
