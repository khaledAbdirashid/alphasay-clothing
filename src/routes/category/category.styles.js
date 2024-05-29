import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export const CategoryTitle = styled(Link)`
  font-family: "Open Sans";
  font-size: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
`;
