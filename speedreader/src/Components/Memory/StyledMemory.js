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

export default StyledMemory;