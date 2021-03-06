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
import LargeProfileCard from "../../components/LargeProfileCard/LargeProfileCard";
import { getAllProviders } from "../../firebase/utilities";

const Freelancers = ({ query, results }) => {
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
        <title>{t("search.freelancerSearch")} </title>
      </Head>
      <Container className="my-5">
        <Row className="mb-3">
          <Col>
            <h3>
              {t("search.results")} "{query}"
            </h3>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} xxl={5} className="g-4">
          {results &&
            results.slice(pageInfo.start, pageInfo.end).map((freelancer) => (
              <Col>
                <LargeProfileCard {...freelancer} />
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

Freelancers.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
};

export const getServerSideProps = async (context) => {
  let providers = await getAllProviders();
  providers = providers.map((provider) => {
    provider.changedAt = provider.changedAt.toDate().toJSON();
    provider.createdAt = provider.createdAt.toDate().toJSON();
    return provider;
  });

  const query = context.query.q;
  let results = [];

  if (query) {
    const search = new JsSearch.Search("uid");
    Object.keys(providers[0]).forEach((key) => search.addIndex(key));
    search.addDocuments(providers);
    results = search.search(query);
  }

  return {
    props: {
      results,
      query,
      ...(await serverSideTranslations(context.locale, ["common", "search", "navbar", "footer"])),
    },
  };
};

export default Freelancers;
