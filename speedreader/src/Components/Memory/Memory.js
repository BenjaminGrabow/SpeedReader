import React from 'react';
import styled from 'styled-components';

const pictures = [{back: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
{back: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'}];


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
      userFoundAllPictures: false,
     }
  }

  safeChoosenPicture = (e) => {
    if(!this.state.firstPickedPicture){
     this.setState({
       firstPickedPicture: e.target.src
     }); 
    } else {
      if(this.state.firstPickedPicture === e.target.src){
        const deleteFoundPicturePair = this.state.pictures.map(picture => {
          if(picture.back === e.target.src) {
           picture.front = 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
           picture.back = 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
          } 
          return picture;
        });

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

    const checkIfAllPitcuresWasFound = this.state.pictures.filter(picture =>
       picture.front !== 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

       if(!checkIfAllPitcuresWasFound.toString()){
         this.setState({
           userFoundAllPictures: true
         });
       }
  };

  render() {
    if(this.state.userFoundAllPictures){
      return (
        <StyledMemory>
        <h1>You found all pairs !!!</h1>
        <button onClick={this.playAgain}>Play again</button>
        </StyledMemory>
      )
    }
    return ( 
<StyledMemory>
{this.state.pictures.map((picture, index) => {
  return     <div 
  className="card"
  key={index}>
  <div className="front">
  <img src={picture.front} alt="front"/> 
  </div>
  <div className="back" >
  <img 
  src={picture.back} 
  alt="memory"
  onClick={this.safeChoosenPicture}/>
  </div>
</div>
})}
</StyledMemory>
     );
  }
}

export default Memory;