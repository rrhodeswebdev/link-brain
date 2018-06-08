import React from "react";
import { shallow } from "enzyme";

import DataTable from "./DataTable";

describe("<DataTable />", () => {
  const updated = {
    name: "test",
    email: "test@gmail.com",
    campaign: {
      name: "name"
    },
    website: "test.com",
    linkurl: "test.com/link",
    status: "approved",
    notes: "here are some notes"
  };

  it("Renders without crashing", () => {
    shallow(<DataTable data={["test", "test"]} updated={updated} />);
  });
});
