import React from "react";

function Data(props) {
  return (
    <>
      <h1>{props.SeviceName}</h1>
      <div>{props.img}</div>
      <p>{props.NameOfPerson}</p>
      <p>{props.stars}</p>
      <p>{props.reviews}</p>
      <p>{props.queues}</p>
    </>
  );
}
export default Data;
