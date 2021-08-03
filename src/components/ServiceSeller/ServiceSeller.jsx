import Container from 'react-bootstrap/Container'
import Row  from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import Col  from "react-bootstrap/Col";
import { Btndiv,Styleimg, Styleimg2} from "./Serviceseller.styled";


import Firebase from "src/Firebase";
import { useState, useEffect} from "react";
const ServiceSeller = () =>{
    const [sellers, setSellers]= useState([]);
    const sellerRef = Firebase.firestore().collection("users");
    const getSellers =()=>{
    sellerRef.onSnapshot((querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((item) => items.push(item.data()));
      setSellers(items);
       
    });
    }
useEffect(()=>{
    getSellers();
},[]);

return (
    <Container>
      <Row>
      <h2>About The Seller</h2>
       
      
    </Row>
    <br/><br/>
      
    <Row>
    <Styleimg>
        <div>
    <Image src="/profilepic.jpg"  roundedCircle width="80px"
        height="80px" />
        </div>
        <Styleimg2>
         <div>
         {
               sellers.map((seller)=>(
                 <h5>
                   {seller.fullname}
                   </h5>
               ))
            }
            </div>
            <div>
             <Btndiv>
                Contact Me
             </Btndiv>
           </div>
     </Styleimg2>
     
     </Styleimg>    
    </Row>
    <br/><br/>
    <Row>
    <span>From</span>
    <br/>
    {
               sellers.map((seller)=>(
                 <span>
                   {seller.location}
                   </span>
               ))
            }
    </Row>
    <br/><br/>
    <Row>
    {
               sellers.map((seller)=>(
                 <p>
                   {seller.description}
                   </p>
               ))
            }
    </Row>

    </Container>
 
);
}
export default ServiceSeller;