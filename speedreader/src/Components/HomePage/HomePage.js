import React from 'react';
import book from './book.jpg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHomePage = styled.div`

header {
  display: flex;
justify-content: space-around;
align-items: center;
/* background-color: #FFFFFF; */

h1 {
  font-family: 'Permanent Marker', cursive;
  /* font-size: 3rem; */
  color: #F15A29;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}
}

img {
  width: 100%;
  height: 30rem;
}
`;

const HomePage = () => {
  return ( 
  <StyledHomePage>
    <header>
    <h1>SpeedReader</h1>
 <NavLink to="/account">Account</NavLink>
  <NavLink to="/text">App</NavLink>
  </header>
  <img src={book} alt="book on grass"/>
  </StyledHomePage>
  );
}
 
export default HomePage;
