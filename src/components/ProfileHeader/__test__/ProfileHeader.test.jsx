import React from "react";
import renderer from "react-test-renderer";
import ProfileHeader from "../ProfileHeader";

test("properly renders the ServicesCard Component", () => {
  const tree = renderer.create(<ProfileHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
