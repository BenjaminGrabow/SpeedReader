import React from 'react';
import styled from 'styled-components';

const pictures = ['https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];


const StyledMemory = styled.div`

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
  width: 70%;
  height: 30rem;
  position: relative;
  margin: 1rem;

&:hover {
  transform: rotateY(180deg);
}
}

.front {
display: flex;
justify-content: space-between;
position: absolute;
backface-visibility: hidden;
width: 100%; 
height: 100%;
box-shadow: 5px 5px 4px 5px white;
}

.back {
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  color: white;
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 4px 5px black;
}
`;

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures: pictures,
     }
  }

  render() { 
    return ( 
<StyledMemory>
{this.state.pictures.map(picture => {
  return     <div className="card">
  <div className="front">
    <p>Yeeeeah</p>
  </div>
  <div className="back" >
  <img src={picture} alt="memory"/>
  </div>
</div>
})}
</StyledMemory>
     );
  }
}
 
export default Memory;