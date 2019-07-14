import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
/* background-color: #FFFFFF; */

h1 {
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  color: white;
}
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledHeader>
<h1>SpeedReader</h1>
<NavLink to="/app">App</NavLink>
      </StyledHeader>
     );
  }
}
 
export default Header;