import * as React from "react";
import * as renderer from "react-test-renderer";
import SmallProfileCard from "../SmallProfileCard";

it("renders SmallProfileCard with all props provided correctly", () => {
  const tree = renderer
    .create(
      <SmallProfileCard
        profilePicture="https://picsum.photos/50/50"
        name="Big J"
        job="Carpenter"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders SmallProfileCard with no props but name correctly", () => {
  const tree = renderer.create(<SmallProfileCard name="John Doe" />).toJSON();
  expect(tree).toMatchSnapshot();
});
