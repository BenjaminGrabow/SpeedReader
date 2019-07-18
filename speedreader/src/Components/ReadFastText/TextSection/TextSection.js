import React from 'react';
import { closeSettings, openSettings, openAddSettings, makePause, showTextAfterPause } from '../../../Store/actions';
import { connect } from 'react-redux';
import StyledTextSection from './StyledTextSection';

class TextSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 240,
      textBackgroundColor: '',
      textFontSize: '',
      textHeight: '',
      textWidth: '',
      textColor: '',
      pause: false,
      pressedPlay: false,
      indexOfCurrentWord: 0
    }
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  start = () => {
  if(this.state.pause ) {
    this.props.showTextAfterPause();
    
  }  else if(!this.state.pressedPlay) {
  
    const wordsPerSecond = this.state.number / 60;
    
    const resultForSetInterval = 1000 / wordsPerSecond 
    
    let i = 0;

    const increment = () => {
      if (this.props.currentText[i] !== this.props.currentText[this.props.currentText.length]) {
        document.querySelector('.text').textContent = this.props.currentText[i];
        i += 1;

        this.setState({
          indexOfCurrentWord: i
        });
      }
    };

    setInterval(increment, resultForSetInterval);
  }

  this.setState({
    pause: false,
    pressedPlay: true,
  });
  };
  
  pause = () => {
    const currentWord = document.querySelector('.text').textContent;
    
    this.props.makePause(this.state.indexOfCurrentWord);
    
    this.setState({
      pause: true,
      pressedPlay: false,
    });
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
        className="fa fa-pause"
        onClick={this.pause}/>
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
        <p>Text Color</p>
        <input type="text"
         name="textColor" 
         value={this.state.textColor} 
         onChange={this.changeHandler}
         placeholder="Text Color"
         />
         </div>
         <div className="row">
           <p>Background Color</p>
        <input type="text"
         name="textBackgroundColor" 
         value={this.state.textBackgroundColor} 
         onChange={this.changeHandler}
         placeholder="Background Color"
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
    settings: state.settings,
  };
};

export default connect(mapStateToProps, { closeSettings, openSettings, openAddSettings, makePause, showTextAfterPause })(TextSection);