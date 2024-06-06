import styled from "styled-components";

const subColor = "rgba(0, 0, 0, 0.8)";

export const FormLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${subColor};
  color: ${subColor};
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  width: 100%;
  margin-top: 5px;
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
