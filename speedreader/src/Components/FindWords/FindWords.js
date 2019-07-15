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

    const splitAllLetters = letters.repeat(7).split('');

    this.setState({
      letters: shuffle(splitAllLetters),
    });
  };

  render() {
    return (
      <StyledFindWords>
        {this.state.letters.map(letter => {
          return <div className="letters">
            <p>{letter}</p>
          </div>
        })}
      </StyledFindWords>
    );
  }
}

export default FindWords;