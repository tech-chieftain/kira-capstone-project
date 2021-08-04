import * as React from "react";
import * as renderer from "react-test-renderer";
import CustomCarousel from "../CustomCarousel";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const arrayOfImgs = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
].map((image) => <img src={image} alt="" />);

it("renders CustomCarousel with thumbnails", () => {
  const tree = renderer.create(<CustomCarousel thumbnail items={arrayOfImgs} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders CustomCarousel without thumbnails", () => {
  const tree = renderer.create(<CustomCarousel items={arrayOfImgs} slides={3} />).toJSON();
  expect(tree).toMatchSnapshot();
});
