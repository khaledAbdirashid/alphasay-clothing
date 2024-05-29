import styled from "styled-components";

// Define colors
const mainColor = "#2196F3"; // Main color for highlights
const subColor = "rgba(0, 0, 0, 0.8)"; // Subdued color for labels and text

// Styled FormLabel
export const FormLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
`;

// Styled Input
export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${mainColor};
  color: ${subColor};
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  width: 100%;
  margin-top: 5px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${mainColor}; // Highlight color on focus
  }
`;

// Styled FormGroup
export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

// Styled ErrorMessage
export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
