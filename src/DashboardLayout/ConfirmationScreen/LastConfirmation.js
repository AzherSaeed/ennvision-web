import React from "react";
import { ConfirmationContainer } from "./Style";
import { CenterDiv } from "../../CommonComponents/Global";
import Button from "../../CommonComponents/Button";
import {PrimaryColor} from '../../CommonComponents/Global';
import {useNavigate} from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const buttonHanler = () => {
    navigate('/UserTable')
  }
  return (
    <CenterDiv>
      <ConfirmationContainer>
        <h1>Successfully!</h1>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <Button clicked={buttonHanler}  bkColor={PrimaryColor} color='white' padding='8px' width='100%' type='text' title="Thanks" />
      </ConfirmationContainer>
    </CenterDiv>
  );
};

export default Index;
