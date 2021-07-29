import React from "react";
import renderer from "react-test-renderer";
import InformationSidebar from "../InformationSidbar";

test("properly renders the InformationSidebar Component", () => {
  const tree = renderer.create(<InformationSidebar />).toJSON();
  expect(tree).toMatchSnapshot();
});
