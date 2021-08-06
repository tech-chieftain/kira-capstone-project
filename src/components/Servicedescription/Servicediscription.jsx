import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import { getFreelancers } from "src/Utilities/FirebaseUtilities";
import { useState, useEffect} from "react";
import Firebase from "src/Firebase";
import { useSpringRef } from '@react-spring/core';

const Servicediscription = ({discussion=("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid accusamus animi nulla cupiditate! Non nihil ducimus sapiente laudantium optio, reiciendis excepturi libero sunt, voluptates sequi suscipit saepe numquam natus?"),
question1=("Lorem ipsum dolor sit amet consectetur"), question2=("Lorem ipsum dolor sit amet consectetur"), question3=("Lorem ipsum dolor sit amet consectetur"),  question4=("Lorem ipsum dolor sit amet consectetur"), condition1=("Lorem ipsum dolor sit amet consectetur"),condition2=("Lorem ipsum dolor sit amet consectetur")}) =>{

return(
    <Container>
        <Row>
        <h2 >About Services</h2> 
        </Row>
        <Row>
          <h5>Please discuss first and then buy services:</h5>
          
         <p>{}</p>
        
       </Row>
       <Row>
            <h5>Please contact with the following information:</h5>
            <p>
            <p><ol>
        
             
        <li>question1</li>
        <li>question2</li>
        <li>question3</li>
        <li>question4</li>
          
          
      </ol>
      </p>              
            </p>
      </Row>
       <Row>
       <h5>For buying this service you will have to agree on the followings:</h5>
         <p><ol>
        
             <li>{condition1}</li>
             <li>{condition2}</li>
          
             
         </ol>
         </p>
       </Row>

      </Container>
 )

};
   
   
   export default Servicediscription;