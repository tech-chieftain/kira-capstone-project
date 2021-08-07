import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Serviceheader from "src/components/Serviceheader/Serviceheader";
import ServiceSeller from "src/components/ServiceSeller/ServiceSeller";
import Container from 'react-bootstrap/Container'
import firebase from "src/Firebase/Firebase";
import getAllFreelancers from "src/Utilities/FirebaseUtilities";
import {useState} from "react";

const Seller = ()=>
{ 
  
  const [SellerName,setSellerName] = useState("John doe");
  const [SellerLocation,setSellerLocation] = useState("Erbil");
  const [SellerDescription,setSellerDescription] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nulla mollitia nobis facere expedita officia vero ipsa, fugit deserunt velit quos corporis corrupti consequuntur quis rem sapiente. Nostrum, quos ducimus!");
  const [SellerProfilePic,setSellerProfilePic,] = useState("profilepic.jpg");
    return (
      <>
  
      <Container>
      
        <Serviceheader />
        
       <ServiceSeller Name={SellerName} Location={SellerLocation} Description={SellerDescription} ProfilePic={SellerProfilePic}/>
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

