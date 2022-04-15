import styled from "styled-components";

export const InputStyleContainer = styled.div`
    .ant-input{
       background: white;
       border: 0.5px solid #D6D6E0;
       border-radius: 3px;
       height: 47px;
       width: 100%;
    }
    .ant-input-suffix span{
        color: red;
        font-size: 12px;
        font-weight: 600;
    }
    .ant-input-affix-wrapper.ant-input-password{
        padding: 0 10px;
    }
`;

export const SelectStyleContainer = styled.div`
    .ant-select{
        background: white;
       border: 0.5px solid #D6D6E0;
       border-radius: 3px;
       height: 48px;
       width: 100%;
    }
    .ant-select-selector{
        border: none !important;  
        padding: 8px !important;
        height: 47px !important;
        margin-bottom: 15px;
    }
   
`

export const InputErrorMessage = styled.div`
    color: red;
    text-align: start;
    margin-left: 10px;
    font-size: 12px;
`