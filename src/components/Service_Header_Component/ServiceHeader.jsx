import React from "react";
import Data from "./HeaderData";

function Header() {
  return (
    <div>
      <Data SeviceName="Vintage And Minimalist" />
      <Data img="" />
      <Data NameOfPerson="Hasar Ali" />
      <Data stars="" reviews="(23)" />
      <Data queues="6 Orders in Queue" />
    </div>
  );
}
export default Header;
