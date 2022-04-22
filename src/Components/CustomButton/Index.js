import React from "react";
import { Button } from "antd";
import { CustormButtonContainer } from "./style";

const CustomButton = ({ title, type, bgcolor, width, color, padding , clicked , form , key }) => {
  return (
    <CustormButtonContainer
    bgcolor={bgcolor}
      color={color}
      width={width}
      padding={padding}
    >
      <Button form={form} key={key} onClick={clicked} htmlType={type}>{title}</Button>
    </CustormButtonContainer>
  );
};

export default CustomButton;
