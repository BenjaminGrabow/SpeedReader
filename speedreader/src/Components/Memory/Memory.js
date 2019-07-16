import React from 'react';
import styled from 'styled-components';

const pictures = ['https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];


const StyledMemory = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
align-items: center;

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
  width: 10rem;
  height: 10rem;
  position: relative;

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

img {
  width: 10rem;
  height: 10rem;
}
`;

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures: pictures,
      firstPickedPicture: '',
     }
  }

  safePicture = (e) => {
    if(!this.state.firstPickedPicture){
     this.setState({
       firstPickedPicture: e.target.src
     }); 
    } else {
      if(this.state.firstPickedPicture === e.target.src){
        const deleteFoundPicturePair = this.state.pictures.filter(picture => picture !== e.target.src);

        this.setState({
          pictures: deleteFoundPicturePair,
          firstPickedPicture: '',
        });
      } else {
        this.setState({
          firstPickedPicture: e.target.src
        });
      }
    }
  };

  render() { 
    return ( 
<StyledMemory>
{this.state.pictures.map(picture => {
  return     <div className="card">
  <div className="front">
    <p>Yeeeeah</p>
  </div>
  <div className="back" >
  <img 
  src={picture} 
  alt="memory"
  onClick={this.safePicture}/>
  </div>
</div>
})}
</StyledMemory>
     );
  }
}
 
export default Memory;