import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import LogAndRegi from './Components/Login/LogAndRegi';
import PrivateRoute from './Components/Login/PrivateRoute';
import TextContainer from './Components/ReadFastText/TextContainer/TextContainer';
import FindWords from './Components/FindWords/FindWords';
import Memory from './Components/Memory/Memory';
import books from './books.jpg'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const StyledDiv = styled.div`
/* background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${books});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
height: 100vh; */
`;


// ADD LOCALSTORAGE FOR FREE USERS !!!
function App() {
  return (
    <StyledDiv>
      <Route exact path="/" component={HomePage} />
        <Route path="/account" component={LogAndRegi} />
        <Route path="/text" component={TextContainer} />
        <PrivateRoute path="/protected/find_words" component={FindWords} />
        <PrivateRoute path="/protected/memory" component={Memory} />
    </StyledDiv>
  );
}

export default App;
