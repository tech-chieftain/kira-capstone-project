import * as React from "react";
import * as renderer from "react-test-renderer";
import FPCard from "../FPCard";

it("renders FPCard with text overlay correctly", () => {
  const tree = renderer.create(<FPCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders FPCard with caption correctly", () => {
  const tree = renderer.create(<FPCard overlay={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
