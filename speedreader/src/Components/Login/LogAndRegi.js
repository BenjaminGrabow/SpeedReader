import React from 'react';
import { connect } from 'react-redux'
import { login, register } from '../../Store/actions';
import Loader from 'react-loader-spinner';
import StyledDiv from './StyledDiv';

class LogAndRegi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
      },
      login: false,
      register: false,
    }
  }

  showInput = e => {
    if (e.target.textContent === 'Register') {
      this.setState({
        register: true,
        login: false,
      });
    } else {
      this.setState({
        register: false,
        login: true,
      });
    }

  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  register = e => {
    e.preventDefault();

    if (this.state.credentials.username.length > 5
      // &&
      // this.state.credentials.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
    ) {
      this.props.register(this.state.credentials);
      this.setState({
        login: true,
        register: false,
      });
    }
  };

  login = e => {
    e.preventDefault();

    this.props.login(this.state.credentials)
      .then(() => {
        this.props.history.push('/protected/find_words');
      });
  };


  render() {
    if (this.state.register) {
      return (
        <StyledDiv>
          <button onClick={this.showInput}>Go to Login</button>
          <div className="row">
            <form
              onSubmit={this.register}>
              <div
                className="inputs">
                <input
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  placeholder="Username"
                  type="text"
                />
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>

              <button
                type="submit">
                <i className="fa fa-user-plus"></i>
              </button>
            </form>
          </div>
        </StyledDiv>
      )
    }
    if (this.state.login) {
      return (
        <StyledDiv>
          <button onClick={this.showInput}>Go to Register</button>
          <div className="row">
            <form
              onSubmit={this.login}>

              <div
                className="inputs">
                <input
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  placeholder="Username"
                  type="text"
                />
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>
              <button
                type="submit">
                {this.props.isLoggingIn ? (<Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="12"
                  width="26" />) :
                  (<i className="fa fa-user-plus"></i>)}
              </button>
            </form>
          </div>
        </StyledDiv>)
    }
    return (
      <StyledDiv>
        <button onClick={this.showInput}>Register</button>
        <button onClick={this.showInput}>Login</button>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.loggingIn
  }
};

export default connect(mapStateToProps, { login, register })(LogAndRegi);