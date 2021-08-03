import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Serviceheader from "src/components/Serviceheader/Serviceheader";
import ServiceSeller from "src/components/ServiceSeller/ServiceSeller";
import Navbar from "src/components/Navbar/Navbar";
import Container from 'react-bootstrap/Container'
const Seller = ()=>
{
    return (
      <>
      <Container>
        <Navbar/>
        <Serviceheader />
       <ServiceSeller />
      </Container>
     </>
          
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  });
export default Seller; 