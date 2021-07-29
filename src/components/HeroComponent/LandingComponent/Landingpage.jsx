import React from "react";
import Head from "next/head";
import Image from 'next/image';
import { Container, Row } from "react-Bootstrap";
import { Background, Form, MianContainer,ModalBubbles, Button, Header } from "./Landing.styled";






const Landingpage = () => {
   <div>
<Head>
  <title> Home Page</title>
</Head>
</div>

 return (
<Background>                
      <MianContainer >
                  <Image
                      width={750}
                          height={550}    
                               sizes="(max-width: 731px) 100px"
                          src="/img.png"
                       alt="image"
                    fluid={true}
                  />      
      </MianContainer >    
        <Container> 
                <Row xs={3} md={2}>
                      <div>
                         <Header>
                               <div>
                                    <p className="text">Find the perfect <span> freelance </span> services for your business</p>
                              </div>
                         </Header>
                      </div>                             
                 </Row>
         </Container>
      <div >  
           <Form>
             <input  md={4}  
                  size="lg"
                     type="text"
                          id="name"
                       autocomplete="name"
                    required
                placeholder=  "       try “build a website” " 
              />
           </Form>
                <div>
                  <Button xs={6} md={4} className=" text-white ">
                           <sub> Search</sub> 
                   </Button>
             </div> 
       </div>
       <ModalBubbles>
              <Image
                width={20}
                     height={20}   
                         src="/icon.png"
                  alt=""
               />  
       </ModalBubbles> 
</Background>
    );
  
};


export default Landingpage;