import React from "react";
import Button from "react-bootstrap/Button";
import firebase from "firebase";
import Firebase from "../Firebase/Firebase.js";

function  Addname () {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoRef = firebase.firestore().collection("Freelancers").add({
      name: "Dlzheen"
    });
  };
return (
  <div>
    <p>This is Addname component</p>
    <Button variant="primary" onClick={handleSubmit}>Add</Button>
    
  </div>
)
}

export default Addname;