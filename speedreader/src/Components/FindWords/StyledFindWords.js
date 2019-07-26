import styled from 'styled-components';

const StyledFindWords = styled.div`

.words-to-find {
display: flex;
width: 100%;
justify-content: space-around;

p {
  color: black;
  font-size: 1.5rem;
}
}

.search-words {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }

.no {
    height: 3rem;
    width: 5%;
    margin: 0;
    border: .1rem solid black;
    text-align: center;
  p {
    width: 100%;
    height: 100%;
    font-weight: bolder;
    font-size: 1.5rem;
    color: black;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
`;

export default StyledFindWords;