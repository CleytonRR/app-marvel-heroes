import React from "react";

import { Container } from "./styles";

import Marvel from "../../assets/icons/marvel.svg";
import Search from "../../assets/icons/search.svg";
import Menu from "../../assets/icons/menu.svg";

function CustomHeader() {
  return (
    <Container>
      <Menu />
      <Marvel />
      <Search stroke={"#000"} />
    </Container>
  );
}
export default CustomHeader;
