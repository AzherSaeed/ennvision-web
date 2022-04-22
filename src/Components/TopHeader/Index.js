import React from 'react';
import {Container} from './style';
import {Link} from 'react-router-dom';

const Index = ({name = null , icon = null   , heading }) => {
  return (
    <Container>
      <Link to={name} >{icon}</Link>
      <p>{heading}</p>
    </Container>
  )
}

export default Index