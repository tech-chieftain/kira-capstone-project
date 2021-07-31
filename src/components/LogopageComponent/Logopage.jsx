import React from "react";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import Card from 'react-bootstrap/Card'
import { Header } from "./Logopage.styled";
import { Container, Row} from "react-bootstrap";
import {  Background,MianContainer,Button,Col,ModalBubbles,Form,Footer} from "./Logopage.styled";


 

 
 
 const Logopage = () => {
  
  
     <div>
        <Head>
           <title> logo</title>
        </Head>
    </div>
     
  return (
  
  <Background>                
       <MianContainer >
          <Link href="/">
                   <Image
                       width={190}
                          height={170}    
                            sizes="(max-width: 200px) 100px"
                         src="/logoimg1.png"
                      alt="image"
                    fluid={true}
                   />    
           </Link>
       </MianContainer >  
       <Footer>
       <Link href="/">
                   <Image
                       width={160}
                          height={150}    
                            sizes="(max-width: 200px) 100px"
                         src="/logoimg3.png"
                      alt="image"
                    fluid={true}
                   />    
            </Link>
         </Footer> 
       <Col>
         <Link href="/">
                   <Image
                       width={160}
                          height={150}    
                            sizes="(max-width: 200px) 100px"
                         src="/logoimg5.png"
                      alt="image"
                    fluid={true}
                  />    
               </Link >   
             </Col>
             <Form>  
     <Link href="/"className="logo">
          <Image
                width={130}
                     height={130}    
                            sizes="(max-width: 200px) 100px"
                         src="/logoimg6.png"
                      alt="image"
                    fluid={true}
                   />    
               </Link>
               </Form>  
           <ModalBubbles>
           <Link href="/" className="newlogo">
                   <Image
                       width={100}
                          height={100}    
                            sizes="(max-width: 200px) 100px"
                         src="/img22.png"
                      alt="image"
                    fluid={true}
                   />    
               </Link>
           </ModalBubbles>
                <Container>
                   <Row xs={3} md={2}>
                          <Header>
                              <Card.Title> 
                                         <h2><div className="Header"></div> <b>Make an incredible logo</b></h2>
                                      </Card.Title>
                                       <Card.Title>
                                           <h5 className="text">Design your logo by top talents</h5>
                                    </Card.Title>
                           </Header>
                        </Row>
                 </Container>
           <Row>
              <Button  className="button">     
                          Try Kira Logo Services
                </Button>
           </Row>
      
 </Background>
   );
   
 };
 
 
 

export default Logopage;

