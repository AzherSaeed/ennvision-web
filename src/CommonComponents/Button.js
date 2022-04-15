import React from "react";
import { Button } from "antd";
import { ButtonContainer } from "./Style";

const CustomButton = ({ title, type, bkColor, width, color, padding , clicked }) => {
  return (
    <ButtonContainer
      bkColor={bkColor}
      color={color}
      width={width}
      padding={padding}
    >
      <Button onClick={clicked} htmlType={type}>{title}</Button>
    </ButtonContainer>
  );
};

export default CustomButton;
