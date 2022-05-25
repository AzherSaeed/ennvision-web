import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  .ant-btn {
    background-color: ${(props) => props.bkColor};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    padding: ${(props) => props.padding};
    font-size: 16px;
    height: auto;
  }
`;
