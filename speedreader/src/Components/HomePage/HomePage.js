import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHomePage = styled.div`

`;

const HomePage = () => {
  return ( 
  <StyledHomePage>
  <NavLink to="/login">Login</NavLink>
  <NavLink to="/register">Register</NavLink> 
  </StyledHomePage>
  );
}
 
export default HomePage;
