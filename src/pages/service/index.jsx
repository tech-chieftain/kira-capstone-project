import React from "react";
import Footer from "src/components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from 'react-bootstrap/Container'
import Servicediscription from "src/components/Servicediscription/Servicediscription";
const Service = ()=>
{
    return (
      <>
      <div>
        <Servicediscription />
        <Footer />
        </div>
     </>
         
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  });
export default Service; 