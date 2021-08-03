import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Serviceheader from "src/components/Serviceheader/Serviceheader";

import Navbar from "src/components/Navbar/Navbar";
import Container from 'react-bootstrap/Container'
const Description = ()=>
{
    return (
      <>
      <Container>
        <Navbar/>
        <Serviceheader />
        <h5>Description component will go here</h5>
      </Container>
     </>
          
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  });
export default Description; 