import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHomePage = styled.div`

header {
  display: flex;
justify-content: space-between;
/* background-color: #FFFFFF; */

h1 {
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  color: white;
}
}
`;

const HomePage = () => {
  return ( 
  <StyledHomePage>
    <header>
    <h1>SpeedReader</h1>
  <NavLink to="/account">Account</NavLink>
  <NavLink to="/text">Main App</NavLink>
  </header>
  </StyledHomePage>
  );
}
 
export default HomePage;
