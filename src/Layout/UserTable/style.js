import styled from "styled-components";

export const UserTableContainer = styled.div`
  .userTableIcons {
    &-one {
      background-color: #c7112b;
      padding: 4px;
      width: 20px;
      height: 20px;
      border-radius: 3px;
    }
    &-two {
      background-color: #007aff;
      padding: 4px;
      margin-left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 3px;
    }
  }
  .ant-table-tbody > tr > td {
    padding: 8px;
  }
  .ant-table-thead > tr > th {
      padding: 8px;
      font-size: 14px;
      font-weight: 600;
      background-color: #F3F6F9;
  }
  .userTableLink{
    color: black;
  }
`;
