/* eslint-disable react/prop-types */
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="shadow bg-white p-3 rounded-circle border-0 position-absolute top-50 start-0 translate-middle"
    style={{ zIndex: "1" }}
  >
    <FaChevronLeft size="25px" />
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="shadow bg-white p-3 rounded-circle border-0 position-absolute top-50 start-100 translate-middle"
  >
    <FaChevronRight size="25px" />
  </button>
);
