import React from "react";
import { Button } from "antd";
import { ButtonContainer } from "./Style";

const CustomButton = ({ title, type, bkColor, width, color, padding , clicked , form , key }) => {
  return (
    <ButtonContainer
      bkColor={bkColor}
      color={color}
      width={width}
      padding={padding}
    >
      <Button form={form} key={key} onClick={clicked} htmlType={type}>{title}</Button>
    </ButtonContainer>
  );
};

export default CustomButton;
