import React from 'react';
import { connect } from 'react-redux';
import { addText, chooseThisText } from '../../Store/actions';
import styled from 'styled-components';

const StyledTextAdder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

.text {
  width: 10rem;
  height: 8rem;
  background: white;
  color: black;
  text-align: center;

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

class TextAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      name: '',
     }
  }

  changeHandler = (e) => {
this.setState({
  [e.target.name]: e.target.value
});
};

  addTextToRedux = () => {
    this.props.addText(this.state.name, this.state.text.split(' '));

    this.setState({
      text: '',
      name: ''
    });
  };

  chooseThisText = (textName) => {
    this.props.chooseThisText(textName[0]);
  };

  render() {
    
    return ( 
      <StyledTextAdder>
     { this.props.savedTexts.toString() ?
      (this.props.savedTexts.map(item => 
        item.name.map((text, index) => {
         return <div
         onClick={() => this.chooseThisText(item.name)}
         key={index} 
         className="text"> 
          <div className="close">
          <i 
          // onClick={this.props.closeSettings}
          className="fa fa-window-close"/>
          </div>
         <p>
         {text}
        </p>
        </div>
        }))) : null
    } 
        <h1>Add text to train your reading skills !</h1>
        <div className="input-plus">
        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name" />
      <input type="text" name="text" value={this.state.text} onChange={this.changeHandler} placeholder="Text" />
      <i
      onClick={this.addTextToRedux} 
      className="fa fa-plus-square"/>
      </div>
      </StyledTextAdder>
     );
  }
}

const mapStateToProps = state => {
  return {
    savedTexts: state.savedTexts,
  };
};
 
export default connect(mapStateToProps, { addText, chooseThisText })(TextAdder);