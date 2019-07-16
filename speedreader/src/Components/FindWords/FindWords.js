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

.words-to-find {
display: flex;
width: 100%;
justify-content: space-around;

p {
  color: white;
  font-size: 1.5rem;
}
}

.search-words {
  display: flex;
  flex-wrap: wrap;
}

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

.user-won {
  display: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  height: 30%;
  width: 30%;
}
`;

class FindWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      countFoundWords: 0,
      searchedWords: [],
    }
  }

  componentDidMount = () => {
   
let result = [];
let searchedWords = [];

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

    let letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnop';

    const splitAllLetters = letters.split('');
    // // .repeat(7)


const lengthOfWordsArray = words.length;

// const generateRandomNumber = Math.floor(Math.random() * lengthOfWords);

const arrayOfChoosenWord = [];

const pushRandomWordFromArrayWordsToNewArray = arrayOfChoosenWord.push(words[Math.floor(Math.random() * lengthOfWordsArray)]);

const pushChoosenWordToSearchedWordVar = searchedWords.push(arrayOfChoosenWord[0]);

let splitter =  shuffle(splitAllLetters);

splitter.splice(Math.floor(Math.random() * splitter.length),
 0, arrayOfChoosenWord.toString());

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

this.setState({
  letters: result,
  searchedWords: searchedWords
});
  };

  foundWord = (e) => {
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

playAgain = () => {

}

  render() {
if(this.state.countFoundWords === 5) {
  return (
    <div className="user-won">
      <h1>You found All words !!!</h1>
 <button onClick={this.playAgain}>Start</button>
    </div>
  )
}
    return (
      <StyledFindWords>
        <div className="words-to-find">
        {this.state.searchedWords.map(searchedWord => <p>{searchedWord}</p>)}
        </div>
        <div className="search-words">
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
        </div>
      </StyledFindWords>
    );
  }
}

export default FindWords;