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

.letters {

    width: 5%;
    margin: 0;
    border: .1rem solid white;
    text-align: center;
  p {
    font-weight: bolder;
    font-size: 1.5rem;
    color: white;
  }
}
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

    let letters = 'abcdefghijklmnopqrstuvwxyz';

    const splitAllLetters = letters.split('');
    // // .repeat(7)


    // this.setState({
    //   letters: shuffle(splitAllLetters),
    // });


 
// let copyArray =this.state.letters;

const lengthOfWords = words.length;

// const generateRandomNumber = Math.floor(Math.random() * lengthOfWords);

const arrayOfChoosenWords = [];

arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);
// arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);
// arrayOfChoosenWords.push(words[Math.floor(Math.random() * lengthOfWords)]);



let splitter =  shuffle(splitAllLetters);

// let words = [ 'goodbye'];

// let splitter = alphabet.split('');

let insertWord = splitter.splice(Math.floor(Math.random() * splitter.length),
 0, arrayOfChoosenWords.toString());


for(let i = 0; i < splitter.length; i++){
  if(splitter[i].length > 1 ) {
    splitter[i] = splitter[i].split('') ;
    let indexOfWord = splitter.indexOf(splitter[i]);
    splitter[indexOfWord].map((letter, index) =>  {
     return splitter[indexOfWord + index] = ({ letter , searchedWord: 'yes'});
      })
  } 
}

const all = splitter.map(letter => {
  if(typeof letter === 'string'){
    letter = ({ letter, searchedWord: 'no' })
  } return letter;
})



this.setState({
  letters: all
})

// works only for one Word (to insert in existing array(which is the state letter))
// easiest solution probably with setInterveral and call function so long all words inserted
// now add OnClick for all letters with searchWord with yes and try to add more words at once 
// make objects now to strings again and call only first sequence ([0])

// probably better to delete objects and make only array where first value is letter and 
// and second value is searchWord true or false
// if true onClick style linethrough if not null


  };

  foundWord = () => {
    console.log('yeeees')
  }

  render() {

    return (
      <StyledFindWords>
        {this.state.letters.map(letter => {
          return <div 
          onClick={letter.searchedWord === 'yes' ? this.foundWord : null}
          className="letters">
            <p>{letter.letter}</p>
          </div>
        })}
        {/* <button onClick={this.start}>Start</button> */}
      </StyledFindWords>
    );
  }
}

export default FindWords;