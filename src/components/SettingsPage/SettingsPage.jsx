/* eslint-disable arrow-body-style */
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "next-i18next";
import { Container, MainContainer } from "./SettingsPage.styled";
import firebase from "../../Firebase/Firebase";
import { getUserInfo, updateUserInDB, uploadImage } from "../../Utilities/FirebaseUtilities";

const SettingsPage = () => {
  const [user] = useAuthState(firebase.auth());
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      getUserInfo(user).then((data) => setUserData(data));
    }
  }, [user]);

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const parseAndHandleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value.split("\n") });
  };

  const handleImgUpload = async ({ target: { files } }) => {
    if (files[0]) setUserData({ ...userData, photoURL: await uploadImage(files[0]) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserInDB(user, userData);
    await user.updateProfile(userData);
  };

  const arrayToString = (arr) => arr && arr.join("\n");

  const { t } = useTranslation("settings");

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <MainContainer>
        <h2 className="text-primary m-3">{t("settings.settings")}</h2>
        <Card className="shadow">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Card.Header className="text-muted bg-white h4 mb-4 header">
                {t("settings.personal")}
              </Card.Header>

              <Row>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.name")}</Form.Label>
                  <Form.Control
                    placeholder={t("settings.name")}
                    name="displayName"
                    value={userData.displayName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.location")}</Form.Label>
                  <Form.Control
                    placeholder={t("settings.location")}
                    name="location"
                    value={userData.location}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.email")}</Form.Label>
                  <Form.Control
                    placeholder={t("settings.email")}
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.phoneNumber")}</Form.Label>
                  <Form.Control
                    placeholder={t("settings.phoneNumber")}
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.about")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={t("settings.about")}
                    name="about"
                    value={userData.about}
                    onChange={handleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-5">
                <Form.Label>{t("settings.profileImage")} </Form.Label>
                <Form.Control
                  type="file"
                  name="photoURL"
                  accept="image/png, image/jpeg"
                  onChange={handleImgUpload}
                  className="custom-file-input"
                />
              </Form.Group>

              <Card.Header className="text-muted bg-white h4 my-4 header">
                {t("settings.professional")}
              </Card.Header>

              <Form.Group className="mb-4">
                <Form.Label>{t("settings.job")}</Form.Label>
                <Form.Control
                  placeholder={t("settings.job")}
                  name="job"
                  value={userData.job}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.skills")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={t("settings.skills")}
                    name="skills"
                    value={arrayToString(userData.skills)}
                    onChange={parseAndHandleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-4" xl>
                  <Form.Label>{t("settings.languages")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={t("settings.languages")}
                    name="languages"
                    value={arrayToString(userData.languages)}
                    onChange={parseAndHandleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>{t("settings.education")}</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder={t("settings.education")}
                  name="education"
                  value={arrayToString(userData.education)}
                  onChange={parseAndHandleChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-end mt-4">
                <Button variant="primary" type="submit" className="px-5 m-2">
                  {t("settings.save")}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </MainContainer>
    </Container>
  );
};

export default SettingsPage;
