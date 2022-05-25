import React from "react";
import { ConfirmationContainer } from "./Style";
import { CenterDiv, FlexRowContainer } from "../../Components/Global";
import Button from "../../Components/Button";
import ic_logo from "../../Assets/ic_logo.svg";
import {PrimaryColor} from '../../Components/Global';

const Index = () => {
  return (
    <CenterDiv>
      <ConfirmationContainer>
        <img src={ic_logo} alt="ic_logo" />
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <FlexRowContainer>
          <Button  bkColor={PrimaryColor} color='white' padding='8px' width='100%' type='text' title="Yes!" />
          <Button  bkColor={PrimaryColor} color='white' padding='8px' width='100%' type='text' title="Cancel" />
        </FlexRowContainer>
      </ConfirmationContainer>
    </CenterDiv>
  );
};

export default Index;
