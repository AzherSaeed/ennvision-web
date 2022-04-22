import styled from "styled-components";

export const BasicColor = '#C0922E';
export const PrimaryColor = '#A8A8A8';

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`


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


export const InputErrorMessage = styled.div`
    color: red;
    text-align: start;
    margin-left: 3px;
    font-size: 12px;
    letter-spacing: 1px;
`