import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, handlePageClick, ariaLabel }) => (
  <nav aria-label={ariaLabel}>
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed="1"
      pageRangeDisplayed="2"
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => handlePageClick(data.selected)}
    />
  </nav>
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

Pagination.defaults = {
  ariaLabel: "Page navigation",
};

export default Pagination;
