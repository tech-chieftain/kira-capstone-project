import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import * as JsSearch from "js-search";
import firebase from "../../Firebase";

import Pagination from "../../components/Pagination/Pagination";
import LargeProfileCard from "../../components/LargeProfileCard/LargeProfileCard";
import { getAllFreelancers } from "../../Utilities/FirebaseUtilities";

const Freelancers = ({ query, results }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log(results);
  const pageCount = 10;
  const handlePageClick = (selectedPage) => "";

  return (
    <>
      <Head>
        <title>Freelancer Search</title>
      </Head>
      <Container className="my-5">
        <Row className="mb-3">
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
        <Row xs={1} sm={2} md={3} lg={4} xxl={5} className="g-4">
          {results &&
            results.map((freelancer) => (
              <Col>
                <LargeProfileCard {...freelancer} />
              </Col>
            ))}
        </Row>
        <Row className="mt-5">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Row>
      </Container>
    </>
  );
};

Freelancers.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
};

export const getServerSideProps = async (context) => {
  const freelancers = await getAllFreelancers();

  const query = context.query.q;
  let results = [];

  if (query) {
    const search = new JsSearch.Search("uid");
    Object.keys(freelancers[0]).forEach((key) => search.addIndex(key));
    search.addDocuments(freelancers);
    results = search.search(query);
  }

  return {
    props: {
      results,
      query,
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
};

export default Freelancers;
