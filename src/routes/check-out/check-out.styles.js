import styled from "styled-components";

export const CheckOutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckOutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;
  &:last-child {
    width: 10%;
  }
`;
export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckOutTotal = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
