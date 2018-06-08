import React from "react";
import { shallow } from "enzyme";

import DataTable from "./DataTable";

describe("<DataTable />", () => {
  it("Renders without crashing", () => {
    shallow(
      <DataTable
        data={["test", "test"]}
        updated={["test", { campaign: "hello" }]}
      />
    );
  });
});
