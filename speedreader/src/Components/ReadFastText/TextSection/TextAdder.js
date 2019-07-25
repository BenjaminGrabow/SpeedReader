import React from 'react';
import StyledTextAdder from './StyledTextAdder';
import { connect } from 'react-redux';
import { fetchTexts, addText, chooseThisText, deleteText } from '../../../Store/actions';

class TextAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      name: '',
     }
  }

  componentDidMount = () => {
   this.props.fetchTexts();

   localStorage.setItem('id', 1);
  };

  changeHandler = (e) => {
this.setState({
  [e.target.name]: e.target.value
});
};

  addTextToRedux = () => {
    // this.props.addText(this.state.name, this.state.text.split(' '));
    this.props.addText(this.state.name, this.state.text);

    this.setState({
      text: '',
      name: ''
    });
  };

  chooseThisText = (textId) => {
    this.props.chooseThisText(textId);
  };

  render() {
    
    return ( 
      <StyledTextAdder>
     { this.props.savedTexts.toString() ?
      (<div className="all-texts">
      {this.props.savedTexts.map((item, index) => {
         return <div
         key={index} 
         className="text"> 
          <div className="close">
          <i 
          onClick={() => this.props.deleteText(item.id)}
          className="fa fa-window-close"/>
          </div>
         <p
          onClick={() => this.chooseThisText(item.id)}>
         {item.name}
        </p>
        </div>
       })}
        </div>
        ) : null
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
 
export default connect(mapStateToProps, { fetchTexts, addText, chooseThisText, deleteText })(TextAdder);