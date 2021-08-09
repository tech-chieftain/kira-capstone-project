import { useTranslation } from "next-i18next";
import { ServiceHead } from "./ServiceHeader.styled";

// eslint-disable-next-line arrow-body-style
const Serviceheader = () => {
  const { t } = useTranslation("service");

  return (
    <ServiceHead>
      <ul>
        <li>
          <a href="#overview">
            <span>{t("service.overview")}</span>
          </a>
        </li>
        <li>
          <a href="#description">
            <span>{t("service.description")}</span>
          </a>
        </li>
        <li>
          <a href="#seller">
            <span>{t("service.seller")}</span>
          </a>
        </li>
      </ul>
    </ServiceHead>
  );
};
export default Serviceheader;
