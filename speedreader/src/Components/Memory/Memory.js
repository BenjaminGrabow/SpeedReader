import React from 'react';
import StyledMemory from './StyledMemory';
import Header from '../Header/Header';
import axios from 'axios';

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
    axios.get('http://localhost:3500/memory_game')
    .then(res => {
      this.setState({
        pictures: res.data
      });
    })
    .catch(err => console.log(err));
   
    const mixedPictures = shuffle(this.state.pictures);

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
          if (picture.back_picture === e.target.src) {
            picture.front_picture = 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
            picture.back_picture = 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
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
      picture.front_picture !== 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

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
      <div>
        <Header/>
      <StyledMemory>
        {this.state.pictures.map((picture, index) => {
          return <div
            className={this.state.isGameStarting ? "game-start" : "card"}
            key={index}>
            <div className="front">
              <img src={picture.front_picture} alt="front" />
            </div>
            <div className="back" >
              <img
                src={picture.back_picture}
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
      </div>
    );
  }
}

export default Memory;