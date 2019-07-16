import React from 'react';
import styled from 'styled-components';

const words = ["underheated",
  "underheating",
  "underheats",
  "underhonest",
  "underhung",
  "underinflated", "metrologic",
  "metrological",
  "metrologically",
  "metrologies",
  "metrologist",
  "metrologists", "defleaing",
  "defleas",
  "deflect",
  "deflectable",
  "deflected",
  "deflecting",
  "deflection",
  "deflectional",
  "deflections",
  "deflective",
  "deflector",
  "deflectors", "abhorrence",
  "abhorrences",
  "abhorrencies",
  "abhorrency",
  "abhorrent",
  "abhorrently",
  "abhorrer",
  "abhorrers", "insecurity",
  "inseem",
  "inseemed",
  "inseeming",
  "inseems",
  "inselberg",
  "inselberge",
  "inselbergs",
  "inseminate", "overchilled",
  "overchilling",
  "overchills",
  "overcivil",
  "overcivilised",
  "overcivilized",
  "overclad",
  "overclaim",
  "overclaimed",
  "overclaiming",
  "overclaims",
  "overclass",
  "overclasses",
  "overclassification"];

const StyledFindWords = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 85vh;

.no {
    height: 3rem;
    width: 5%;
    margin: 0;
    border: .1rem solid white;
    text-align: center;
  p {
    width: 100%;
    height: 100%;
    font-weight: bolder;
    font-size: 1.5rem;
    color: white;
    margin: 0;
  }
}

.found {
    width: 100%;
    height: 100%;
    font-weight: bolder;
    font-size: 1.5rem;
    color: black;
    background-color: red;
}
`;

class FindWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      countFoundWords: 0,
    }
  }

  componentDidMount = () => {
   
let result = [];

   function createNewLettersWithSearchedWord(classNameForSearchedWord) {
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

    let letters = 'abcdefghijklmnopqrstuvwxyz';

    const splitAllLetters = letters.split('');
    // // .repeat(7)


const lengthOfWords = words.length;

// const generateRandomNumber = Math.floor(Math.random() * lengthOfWords);

const arrayOfChoosenWords = [];

arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);
// arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);
// arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);

let splitter =  shuffle(splitAllLetters);


let insertWord = splitter.splice(Math.floor(Math.random() * splitter.length),
 0, arrayOfChoosenWords.toString());

for(let i = 0; i < splitter.length; i++){
  if(splitter[i].length > 1 ) {
    splitter[i] = splitter[i].split('') ;
    let indexOfWord = splitter.indexOf(splitter[i]);
    splitter[indexOfWord].map((letter, index) =>  {
     return splitter[indexOfWord + index] = ({ letter , searchedWord: classNameForSearchedWord });
      })
  } 
}

const all = splitter.map(letter => {
  if(typeof letter === 'string'){
    letter = ({ letter, searchedWord: 'no' })
  } return letter;
})

all.map(letter => result.push(letter));
}

createNewLettersWithSearchedWord('wordOne');
createNewLettersWithSearchedWord('wordTwo');
createNewLettersWithSearchedWord('wordThree');
createNewLettersWithSearchedWord('wordFour');
createNewLettersWithSearchedWord('wordFive');

console.log(result)

this.setState({
  letters: result
})
  };

  foundWord = (e) => {
    // document.getElementByClassName(`.${e.target.className}`).className.add("found");
    // // e.target.classList.add('found');
    const changeClassNameOfFoundWord = this.state.letters.map(letter => {
      if(letter.searchedWord === e.target.className){
        letter.searchedWord = 'found'
      } 
      return letter;
    });

    let oneCountMore = this.state.countFoundWords;

    this.setState({
      letter: changeClassNameOfFoundWord,
      countFoundWords: ++oneCountMore,
    });
  };

  render() {

    return (
      <StyledFindWords>
        {this.state.letters.map((letter, index) => {
          return <div
          key={index}
          className="no"
          >
            <p
            className={letter.searchedWord === 'no' ? null : letter.searchedWord} 
          onClick={letter.searchedWord === 'no' || letter.searchedWord === 'found' ? null : this.foundWord}>
          {letter.letter}</p>
          </div>
        })}
        {/* <button onClick={this.start}>Start</button> */}
      </StyledFindWords>
    );
  }
}

export default FindWords;