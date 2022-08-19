import React from "react";
import styled from "styled-components";

const NotFoundBlock = styled.div`
  color: red;
  text-transform: capitalize;
  font-size: 20px;
`;

const NotFound = () => {
  return <NotFoundBlock>Страница не найдена!</NotFoundBlock>;
};

export default NotFound;
