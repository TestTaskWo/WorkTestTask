import styled from "styled-components";

export const TabsBlock = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const Tab = styled.span`
  color: black;
  text-align:center;
  background-color: ${(props) => (props.active ? "white" : "lightgrey")};
  border: ${(props) => (props.active ? "1px solid black" : "1px solid grey")};
  padding: 10px;
  width: 100px;
`;
