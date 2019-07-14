import React from 'react';
import Header from './Components/Header/Header';
import TextContainer from './Components/TextContainer/TextContainer';
import books from './books.jpg'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const StyledDiv = styled.div`
background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${books});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
height: 100vh;
`;

function App() {
  return (
    <StyledDiv>
      <Header/>
      <Route path="/app" component={TextContainer} />
    </StyledDiv>
  );
}

export default App;
