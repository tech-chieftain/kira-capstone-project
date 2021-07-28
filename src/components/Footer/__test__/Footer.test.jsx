import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

test("properly renders the Footer Component", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
