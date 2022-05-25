import React from "react";
import { ConfirmationContainer } from "./Style";
import { CenterDiv } from "../../Components/Global";
import Button from "../../Components/Button";
import {PrimaryColor} from '../../Components/Global';
import {useNavigate} from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const path = window.location.pathname

  const buttonHanler = () => {
    // if(path === '/confirmation'){
    //   navigate('/clientIntakeInterview/aaa')
    // }
    // else if(path === '/createuser'){
    //   navigate('/UserTable')
    // }
    navigate('/createuser')
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
