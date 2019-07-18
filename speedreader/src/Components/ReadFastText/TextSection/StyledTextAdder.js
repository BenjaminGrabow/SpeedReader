import styled from 'styled-components';

const StyledTextAdder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

.all-texts {
  display: flex;
  flex-wrap: wrap;

.text {
  width: 10rem;
  height: 8rem;
  background: white;
  color: black;
  text-align: center;
  margin: 1rem;

  .close {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  i {
    font-size: 2rem;

    &:hover {
      color: red;
    }
  }
}

p {
  width: 100%;
  height: 100%;
}
}
}

.input-plus {
display: flex;
justify-content: space-around;
align-items: center;
width: 30%;
}

i {
  font-size: 4rem;
  transition: .6s ease-in-out;

  &:hover {
    color: black;
  }
}

input {
font-size: 1.5rem;
text-align: center;
width: 70%;
height: 25rem;
border-radius: .5rem;
}
`;

export default StyledTextAdder;