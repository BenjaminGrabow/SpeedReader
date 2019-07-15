import React from 'react';
import TextAdder from '../TextSection/TextAdder';
import TextSection from '../TextSection/TextSection';
import { connect } from 'react-redux';

class TextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      this.props.addText ? <TextAdder/> : <TextSection/>
     );
  }
}

const mapStateToProps = state => {
  return {
    addText: state.addText,
  }
};
 
export default connect(mapStateToProps)(TextContainer);