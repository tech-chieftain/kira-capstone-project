import * as React from "react";
import * as renderer from "react-test-renderer";
import LargeProfileCard from "../LargeProfileCard";

it("renders LargeProfileCard with correctly", () => {
  const tree = renderer
    .create(
      <LargeProfileCard
        displayName="John Doe"
        uid="12345"
        username="john"
        name="John Doe"
        profilePicture="https://picsum.photos/100/100"
        job="Web Developer"
        location="Baghdad"
        about="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        tags={["Front-End Development", "Website", "Wordpress", "PWA"]}
        topRated
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
