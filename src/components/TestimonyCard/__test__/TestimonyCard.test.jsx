import * as React from "react";
import * as renderer from "react-test-renderer";
import TestimonyCard from "../TestimonyCard";

it("renders TestimonyCard without props correctly", () => {
  const tree = renderer.create(<TestimonyCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders TestimonyCard with props correctly", () => {
  const tree = renderer
    .create(
      <TestimonyCard
        imgSrc="https://picsum.photos/300/200"
        quote="To be or not to be?"
        rating={3.5}
        color="#008080"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
