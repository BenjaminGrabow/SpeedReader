import React from 'react';
import StyledFindWords from './StyledFindWords';
import axios from 'axios';

const words = [
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

const createNewLettersWithSearchedWord = classNameForSearchedWord => {
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

createNewLettersWithSearchedWord('searchedWordOne');
createNewLettersWithSearchedWord('searchedWordTwo');
createNewLettersWithSearchedWord('searchedWordThree');
createNewLettersWithSearchedWord('searchedWordFour');
createNewLettersWithSearchedWord('searchedWordFive');

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
 this.setState({
   countFoundWords: 0
 });

 this.componentDidMount();
};

  render() {
if(this.state.countFoundWords === 5) {
  return (
    <StyledFindWords>
    <div className="user-won">
      <h1>You found All words !!!</h1>
 <button onClick={this.playAgain}>Start</button>
    </div>
    </StyledFindWords>
  )
}
    return (
      <StyledFindWords>
        <div className="words-to-find">
        {this.state.searchedWords.map((searchedWord, index) => <p key={index}>{searchedWord}</p>)}
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