import React from "react";
import Head from "next/head";
import Image from 'next/image'
import { Container } from "react-bootstrap";
import { Col, MianContainer } from "./Homepage.styled";




<div>
<Head>
  <title> Home Page</title>
</Head>
   
</div>

const Homepage = () => (

 
<Container>
   <MianContainer>
       <div>
           <p className="text">Find the services needed to get your business <span>growing.</span></p>
      </div>
    </MianContainer >
      <Col>
        <Image
            width={700}
                 height={540}
                     sizes="(max-width: 700px) 100px"
                  src="/imgOne.png"
             alt="image"
            fluid={true}
           />
       </Col>
    </Container >
    
  );

export default Homepage;
