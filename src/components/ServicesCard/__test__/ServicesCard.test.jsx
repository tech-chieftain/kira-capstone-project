import React from "react";
import renderer from "react-test-renderer";
import ServicesCard from "../ServicesCard";

test("properly renders the ServicesCard Component", () => {
  const tree = renderer.create(<ServicesCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
