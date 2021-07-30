import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";

const freelancers = ({ query }) => {
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
          <Col>placeholder for cards</Col>
        </Row>
        <Row>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Row>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default freelancers;
