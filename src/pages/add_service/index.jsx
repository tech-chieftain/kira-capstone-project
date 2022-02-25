import React, { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AddService from "../../components/AddServicePage/AddService";
import userContext from "../../context/context";

const addService = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useContext(userContext);
  return <AddService user={user} />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "addService", "card", "navbar", "footer"])),
  },
});

export default addService;
