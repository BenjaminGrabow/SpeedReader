import styled from 'styled-components';

const StyledTextSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.word-section {
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
 background-blend-mode: multiply,multiply;
 color: white;
 width: 400px;
 height: 400px;
display: flex;
justify-content: center;
align-items: center;
}

.off {
  display: none;
}


.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #DCD9D4; 
 background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%); 
 background-blend-mode: soft-light,screen;
  width: 400px;
  height: 3rem;
}

.close {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  i {
    font-size: 2rem;
    color: white;

    &:hover {
      color: black;
    }
  }
}

.settings {
width: 20%;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(0%, 0%);
background: lightgrey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: bold;


input {
/* border-radius: 6rem;
margin: 0 0 .5rem 0;
box-shadow: 1rem .5rem .5rem black;
width: 40%;
height: 4rem;
text-align: center;
font-size: 3rem; */
}
 
button {
/* background-color: white;
border-radius: 20%;
width: 40%;
height: 6rem;
box-shadow: 1rem .5rem .5rem black;
font-size: 2.5rem;
cursor: pointer; */
}
}

.row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
`; 

export default StyledTextSection;