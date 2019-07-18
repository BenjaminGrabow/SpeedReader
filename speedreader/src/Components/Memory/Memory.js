import React from 'react';
import styled from 'styled-components';



const StyledMemory = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
align-items: center;

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 15rem;
  height: 15rem;
  position: relative;
  margin: 1.5rem;


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
  width: 15rem;
  height: 15rem;
}

.user-won {
width: 20%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-50%, -50%);
background: white;
}

.off {
  display: none;
}

.game-start {position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 15rem;
  height: 15rem;
  position: relative;
  margin: 1.5rem;
  transform: rotateY(180deg);
}
`;

const shuffle = (array) => {

  let copyOfArray = [...array];

  let currentIndex = copyOfArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = copyOfArray[currentIndex];
    copyOfArray[currentIndex] = copyOfArray[randomIndex];
    copyOfArray[randomIndex] = temporaryValue;
  }

  return array;
};

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      firstPickedPicture: '',
      userFoundAllPictures: false,
      isGameStarting: true,
    }
  }

  componentDidMount = () => {
    const pictures = [
      {
        back: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/34106/zebra-wild-animal-africa-stripes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/60506/indian-elephant-elephant-jumbo-strongest-60506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/1827212/pexels-photo-1827212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/2625782/pexels-photo-2625782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        back: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        front: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }];

    const mixedPictures = shuffle(pictures);

    this.setState({
      pictures: mixedPictures
    });

    if (this.state.isGameStarting) {
      setTimeout(() => {
        this.setState({
          isGameStarting: false,
        });
      }, 3000)
    }
  };

  safeChoosenPicture = (e) => {
    if (!this.state.firstPickedPicture) {
      this.setState({
        firstPickedPicture: e.target.src
      });
    } else {
      if (this.state.firstPickedPicture === e.target.src) {
        const deleteFoundPicturePair = this.state.pictures.map(picture => {
          if (picture.back === e.target.src) {
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

    if (!checkIfAllPitcuresWasFound.toString()) {
      this.setState({
        userFoundAllPictures: true
      });
    }
  };

  playAgain = () => {

    this.setState({
      userFoundAllPictures: false,
      isGameStarting: true,
    });


    setTimeout(() => {
      this.componentDidMount();
    }, 3000)

  };

  render() {
    return (
      <StyledMemory>
        {this.state.pictures.map((picture, index) => {
          return <div
            className={this.state.isGameStarting ? "game-start" : "card"}
            key={index}>
            <div className="front">
              <img src={picture.front} alt="front" />
            </div>
            <div className="back" >
              <img
                src={picture.back}
                alt="memory"
                onClick={this.safeChoosenPicture} />
            </div>
          </div>
        })}
        <div className={this.state.userFoundAllPictures ? 'user-won' : 'off'}>
          <h1>You found all pairs !!!</h1>
          <button onClick={this.playAgain}>Play again</button>
        </div>
      </StyledMemory>
    );
  }
}

export default Memory;