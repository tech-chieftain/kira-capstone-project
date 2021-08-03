import * as React from "react";
import * as renderer from "react-test-renderer";
import Navbar from "../Navbar";

it("renders Navbar correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
