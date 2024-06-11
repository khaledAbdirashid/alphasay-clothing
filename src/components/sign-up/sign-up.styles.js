import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  margin: 10px auto;
`;
export const Alert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
export const SignInLink = styled.p`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  a:hover {
    color: #0056b3;
  }
`;
