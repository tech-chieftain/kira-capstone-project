import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Serviceheader from "src/components/Serviceheader/Serviceheader";
import Servicedescription from "src/components/Servicedescription/Servicedescription";
import Container from 'react-bootstrap/Container'
const Description = ()=>
{
    return (
      <>
      <Container>
      
        <Serviceheader />
        <Servicedescription />
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