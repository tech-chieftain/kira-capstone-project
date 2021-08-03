import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Pagination from "../../components/Pagination/Pagination";
import LargeProfileCard from "../../components/LargeProfileCard/LargeProfileCard";
import { getAllServices } from "../../Utilities/FirebaseUtilities";

const Freelancers = ({ query, data }) => {
  const pageCount = 10;
  const handlePageClick = (selectedPage) => "";

  return (
    <>
      <Head>
        <title>Freelancer Search</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h3>Results for "{query}"</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <DropdownButton title="Sort by">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <LargeProfileCard name="john" username="john" />
          </Col>
        </Row>
        <Row>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Row>
      </Container>
    </>
  );
};

Freelancers.propTypes = {
  query: PropTypes.string,
  data: PropTypes.array,
};

export const getServerSideProps = async (context) => {
  // const res = await fetch("<YOUR_API>");
  // const data = await res.json();

  const data = await getAllServices(); // delete this when you fetch the data from API like above

  console.log(data);

  // some data filtering here maybe

  return {
    props: {
      data,
      query: context.query.q,
      ...(await serverSideTranslations(context.locale, ["common"])),
    }, // will be passed to the page component as props
  };
};

export default Freelancers;
