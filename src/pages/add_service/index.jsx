import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AddService from "../../components/AddServicePage/AddService";

const addService = () => <AddService />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "addService", "card", "navbar", "footer"])),
  },
});

export default addService;
