import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Serviceheader from "src/components/Serviceheader/Serviceheader";

import Container from 'react-bootstrap/Container'
const Service = ()=>
{
    return (
      <>
      <Container>
       
        <Serviceheader />
        <h5>Overview component will go here</h5>
      </Container>
     </>
          
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  });
export default Service; 
