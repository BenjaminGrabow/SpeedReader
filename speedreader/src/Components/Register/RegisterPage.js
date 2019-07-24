import React from 'react';
import StyledDiv from './StyledDiv';
import { connect } from 'react-redux'
import { register } from '../../Store/actions';


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

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
      this.props.register(this.state.credentials)
        .then(() => {
          this.props.history.push('/login')
        })
    }
  };


  render() {
    return (
      <StyledDiv>

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
    );
  }
}

export default connect(null, { register })(RegisterPage);