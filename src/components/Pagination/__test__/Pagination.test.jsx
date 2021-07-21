import * as React from "react";
import * as renderer from "react-test-renderer";
import Pagination from "../Pagination";

it("renders Pagination", () => {
  const tree = renderer
    .create(
      <Pagination pageCount={10} handlePageClick={(pageNum) => pageNum} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
