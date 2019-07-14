import React from 'react';
import { closeSettings, openSettings, openAddSettings } from '../../Store/actions';
import { connect } from 'react-redux';
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

class TextSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      textBackgroundColor: '',
      textFontSize: '',
      textHeight: '',
      textWidth: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    };

  start = () => {
    const texts = this.props.currentText;

    const wordsPerSecond = this.state.number / 60;
    
    const resultForSetInterval = 1000 / wordsPerSecond 

    let i = 0;

    const increment = () => {

      if (texts[i] !== texts[texts.length]) {
        document.querySelector('.text').textContent = texts[i];
        i += 1;
      }
    };

    setInterval(increment, resultForSetInterval);

  };

  render() {

    const styleTextSection = {
      color: this.state.textColor,
      background: this.state.textBackgroundColor,
      fontSize: `${this.state.textFontSize}px`,
      height: `${this.state.textHeight}px`,
      width:  `${this.state.textWidth}px`,
  };

    return (
      <StyledTextSection>
        <div 
        className="word-section"
        style={styleTextSection}>
        <h1 
        className='text'>Start</h1>
        </div>
       <div className="menu">
        <i 
        onClick={this.start}
        className="fa fa-play" />
        <i 
        onClick={this.props.openSettings}
        className="fa fa-wrench"/>
        </div>
        <div className={this.props.settings ? "settings" : 'off'}>
          <div className="close">
          <i 
          onClick={this.props.closeSettings}
          className="fa fa-window-close"/>
          </div>
        <div className="row">
        <p>Words per minute</p>
        <input type="number"
         name="number" 
         value={this.state.number} 
         onChange={this.changeHandler}
         placeholder="number"
         min="60" />
         </div>
         <div className="row">
           <p>Background Color</p>
        <input type="text"
         name="textBackgroundColor" 
         value={this.state.textBackgroundColor} 
         onChange={this.changeHandler}
          placeholder="textBackgroundColor"
           />
            </div>
           <div className="row">
           <p>Fontsize</p>
        <input type="number"
         name="textFontSize" 
         value={this.state.textFontSize} 
         onChange={this.changeHandler}
          placeholder="Fontsize" />
           </div>
          <div className="row">
           <p>Height</p>
        <input type="number"
         name="textHeight" 
         value={this.state.textHeight} 
         onChange={this.changeHandler}
          placeholder="Height" />
          </div>
          <div className="row">
           <p>Width</p>
        <input type="number"
         name="textWidth" 
         value={this.state.textWidth} 
         onChange={this.changeHandler}
          placeholder="Width"/>
          </div>
        </div>
        <i
      onClick={this.props.openAddSettings}
      className="fa fa-plus-square"/>
      </StyledTextSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentText: state.currentText,
    settings: state.settings
  };
};

export default connect(mapStateToProps, { closeSettings, openSettings, openAddSettings })(TextSection);