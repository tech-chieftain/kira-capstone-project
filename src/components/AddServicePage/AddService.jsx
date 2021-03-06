import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { Container, MainContainer, Bubbles } from "./AddService.styled";
import { addService } from "../../firebase/utilities";

const AddService = ({ user }) => {
  const [serviceData, setServiceData] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setServiceData({ ...serviceData, [name]: value });
  };

  const parseAndHandleChange =
    (splitter) =>
    ({ target: { name, value } }) => {
      setServiceData({ ...serviceData, [name]: value.split(splitter) });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const images = form.getAll("images");
    addService(user, images, serviceData);
  };

  const arrayToString = (arr, joiner) => arr && arr.join(joiner);

  const { t } = useTranslation("addService");

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <MainContainer>
        <h1 className="text-primary m-3">{t("addService.buildService")} </h1>
        <Card className="card shadow">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>{t("addService.serviceTitle")} </Form.Label>
                <Form.Control
                  className="mb-4"
                  name="title"
                  placeholder={t("addService.title")}
                  value={serviceData.title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t("addService.imgService")}</Form.Label>
                <p className="small text-muted">{t("addService.image")}</p>

                <Form.Control
                  type="file"
                  id="files"
                  name="images"
                  accept="image/png, image/jpeg, image/webp"
                  className="custom-file-input"
                  multiple
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t("addService.price")}</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={serviceData.price}
                  onChange={handleChange}
                  placeholder={t("addService.setPrice")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t("addService.description")}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={serviceData.description}
                  onChange={handleChange}
                  placeholder={t("addService.describeService")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{t("addService.details")}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="details"
                  placeholder={t("addService.serviceDetails")}
                  value={serviceData.details}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("addService.deliveryTime")}</Form.Label>
                  <Form.Control
                    type="number"
                    name="etd"
                    value={serviceData.etd}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("addService.revisions")}</Form.Label>
                  <Form.Control
                    type="number"
                    name="revisions"
                    value={serviceData.revisions}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>{t("addService.perks")}</Form.Label>
                <Form.Control
                  as="textarea"
                  value={arrayToString(serviceData.perks, "\n")}
                  onChange={parseAndHandleChange("\n")}
                  name="perks"
                  placeholder={t("addService.intresting")}
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>{t("addService.tags")} </Form.Label>
                <Form.Control
                  className="mb-4"
                  name="tags"
                  placeholder={t("addService.tags")}
                  value={arrayToString(serviceData.tags, ", ")}
                  onChange={parseAndHandleChange(", ")}
                />
              </Form.Group>

              <div className="d-flex justify-content-end mt-4">
                <Button variant="primary" type="submit" className="px-5 m-2">
                  {t("addService.save")}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </MainContainer>
      <Bubbles>
        <div className="uper-big" />
        <div className="uper-small" />
        <div className="left-small" />
        <div className="right-small" />
        <div className="bottom-big" />
        <div className="bottom-small" />
      </Bubbles>
    </Container>
  );
};

export default AddService;
