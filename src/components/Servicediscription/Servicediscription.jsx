import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import { getFreelancers } from "src/Utilities/FirebaseUtilities";
import { useState, useEffect} from "react";
import Firebase from "src/Firebase";
import { useSpringRef } from '@react-spring/core';

const Servicediscription = () =>{

    const [services, setServices]= useState([]);
    const serviceRef = Firebase.firestore().collection("Services");
    const getServices =()=>{
    serviceRef.onSnapshot((querySnapshot)=>{
      const items = [];
      querySnapshot.forEach((item) => items.push(item.data()));
      setServices(items);
      
    });
    }
useEffect(()=>{
    getServices();
},[]);
return(
    <Container>
        <Row>
        <h2 >About Services</h2> 
        </Row>
        <Row>
          <h5>Please discuss first and then buy services:</h5>
          
             {
               services.map((service)=>(
                 <p>
                   {service.discussion}
                   </p>
               ))
            }
        
       </Row>
       <Row>
            <h5>Please contact with the following information:</h5>
            <p>
            <p><ol>
        
             
        {
            services.map((service)=>(
             <li>
                {service.question1}
             </li>
            ))
         }
          {
            services.map((service)=>(
             <li>
                {service.question2}
             </li>
            ))
         }
         {
            services.map((service)=>(
             <li>
                {service.question3}
             </li>
            ))
         }
         {
            services.map((service)=>(
             <li>
                {service.question4}
             </li>
            ))
         }
          
      </ol>
      </p>              
            </p>
      </Row>
       <Row>
       <h5>For buying this service you will have to agree on the followings:</h5>
         <p><ol>
        
             
           {
               services.map((service)=>(
                <li>
                   {service.condition1}
                </li>
               ))
            }
             {
               services.map((service)=>(
                <li>
                   {service.condition2}
                </li>
               ))
            }
             
         </ol>
         </p>
       </Row>

      </Container>
 )

};
   
   
   export default Servicediscription;