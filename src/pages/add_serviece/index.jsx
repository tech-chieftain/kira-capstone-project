import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AddServiece from "../../components/AddServiecePage/AddService";

const catagories = () => (
  <div>
    <AddServiece />
  </div>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default catagories;
