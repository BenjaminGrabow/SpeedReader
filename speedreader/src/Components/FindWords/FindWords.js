import React from 'react';
import styled from 'styled-components';

const StyledFindWords = styled.div`

`;

class FindWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      letters: [],
     }
  }

  componentDidMount = () => {
    const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    };
    
    let letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv';

    const splitAllLetters = letters.split('');
    
    this.setState({
      letters: shuffle(splitAllLetters), 
    });  
  };

  render() { 
    return ( 
      <StyledFindWords>
{this.state.letters.map(letter => {
  return <div>
    <p>{letter}</p>
  </div>
})}
      </StyledFindWords>
     );
  }
}
 
export default FindWords;