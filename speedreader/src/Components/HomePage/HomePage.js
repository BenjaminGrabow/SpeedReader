import React from 'react';
import book from './book.jpg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHomePage = styled.div`
text-align: center;

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
}

a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.image-section {
img {
  width: 100%;
  height: 30rem;
}

.text-on-image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  bottom: 28rem;
  width: 100%;
  height: 20rem;

  h2, a, p {
    /* color: white; */
    font-weight: 600;
  }

  a {
    background: #F15A29;
    border-radius: 0.25rem;
    width: 25%;
    height: 2rem;
    /* font-size: 2rem; */
  }
}
}

`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {
    localStorage.setItem('id', 1);
  };
  
  render() { 
    return ( 
  <StyledHomePage>
    <header>
    <h1>SpeedReader</h1>
 <NavLink to="/account">Account</NavLink>
  <NavLink to="/text">App</NavLink>
  </header>
  <div
  className="image-section">
  <img src={book} alt="book on grass"/>
  <div className="text-on-image">
  <h2>The free and easy way to train your speed in reading</h2>
  <p>Track your achievements all from one place</p>
  <a href="/account">Sign up now</a>
  <p>Completely free - Get setup in minutes</p>
  </div>
  </div>
  </StyledHomePage>
     );
  }
}
 
export default HomePage;