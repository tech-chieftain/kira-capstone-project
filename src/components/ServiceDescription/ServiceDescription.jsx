/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "next-i18next";

const ServiceDescription = ({ description }) => {
  const { t } = useTranslation("service");
  return (
    <Card className="p-4 my-5 shadow">
      <Card.Title as="h2">{t("service.aboutServices")} </Card.Title>
      <ReactMarkdown>{description}</ReactMarkdown>
    </Card>
  );
};

export default ServiceDescription;
