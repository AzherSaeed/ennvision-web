import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 500px;
  height: auto;
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;

  .login-input-fields {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    width: 100%;
    img {
      width: 30%;
      align-self: center;
    }
    p {
      color: #c7112b;
      font-weight: 600;
      font-size: 14px;
      text-align: end;
    }
  }
`;
