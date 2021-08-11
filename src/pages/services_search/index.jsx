import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import * as JsSearch from "js-search";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Pagination from "../../components/Pagination/Pagination";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { getAllServices } from "../../Utilities/FirebaseUtilities";

const Services = ({ query, results }) => {
  const [pageInfo, setPageInfo] = useState({
    limit: 6,
    get pageCount() {
      return results.length > this.limit ? Math.ceil(results.length / this.limit) : 0;
    },
    get start() {
      return this.end - this.limit;
    },
    get end() {
      return this.limit;
    },
  });
  const handlePageClick = (selectedPage) =>
    setPageInfo((prev) => ({
      ...prev,
      start: prev.end,
      end: prev.limit * selectedPage,
    }));

  const { t } = useTranslation("search");

  return (
    <>
      <Head>
        <title>{t("search.servicesSearch")} </title>
      </Head>
      <Container className="my-5">
        <Row className="mb-3">
          <Col>
            <h3>
              {t("search.results")} "{query}"
            </h3>
          </Col>
        </Row>
        <Row sm={1} md={2} lg={3} className="g-4">
          {results &&
            results.slice(pageInfo.start, pageInfo.end).map((service) => (
              <Col>
                <ServicesCard
                  width={18}
                  person
                  freelancerUID={service.freelancerUID}
                  profilePic={service.photoURL}
                  name={service.displayName}
                  uid={service.uid}
                  photo={service.images[0]}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                />
              </Col>
            ))}
        </Row>
        {!!pageInfo.pageCount && (
          <Row className="mt-5">
            <Pagination pageCount={pageInfo.pageCount} handlePageClick={handlePageClick} />
          </Row>
        )}
      </Container>
    </>
  );
};

Services.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
};

export const getServerSideProps = async (context) => {
  const services = await getAllServices();

  console.log(services.length);

  const query = context.query.q;
  let results = [];

  if (query) {
    const search = new JsSearch.Search("uid");
    Object.keys(services[0]).forEach((key) => search.addIndex(key));
    search.addDocuments(services);
    results = search.search(query);
  }

  console.log("results", results);

  return {
    props: {
      results,
      query,
      ...(await serverSideTranslations(context.locale, [
        "common",
        "search",
        "card",
        "footer",
        "navbar",
      ])),
    },
  };
};

export default Services;
