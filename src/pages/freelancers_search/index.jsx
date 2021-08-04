import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import firebase from "../../Firebase";

import Pagination from "../../components/Pagination/Pagination";
import LargeProfileCard from "../../components/LargeProfileCard/LargeProfileCard";
import { getAllFreelancers } from "../../Utilities/FirebaseUtilities";

const Freelancers = ({ query, freelancers }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log(freelancers);
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
          {freelancers &&
            freelancers.map((freelancer) => (
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
  freelancers: PropTypes.array,
};

export const getServerSideProps = async (context) => {
  // const res = await fetch("<YOUR_API>");
  // const freelancers = await res.json();

  const freelancers = await getAllFreelancers(); // delete this when you fetch the data from API like above

  // some data filtering here maybe

  return {
    props: {
      freelancers,
      query: context.query.q,
      ...(await serverSideTranslations(context.locale, ["common"])),
    }, // will be passed to the page component as props
  };
};

export default Freelancers;
