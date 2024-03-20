import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showMessage: false,
    isCheckedPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showMessage: true,
      errorMsg,
    })
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showMidPassword = () => {
    this.setState(prevState => ({
      isCheckedPassword: !prevState.isCheckedPassword,
    }))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {
      username,
      password,
      showMessage,
      errorMsg,
      isCheckedPassword,
    } = this.state

    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.onSubmitButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="logo-img"
          />

          <label htmlFor="username" className="form-label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input"
            placeholder="username"
            value={username}
            onChange={this.onChangeUserName}
          />

          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type={isCheckedPassword ? 'text' : 'password'}
            id="password"
            className="input"
            placeholder="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <br />
          <div>
            <div className="checkBox-card">
              <input
                type="checkbox"
                id="showPassword"
                onChange={this.showMidPassword}
              />
              <label htmlFor="showPassword" className="show-password">
                Show Password
              </label>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {showMessage && <p className="error_msg_text"> * {errorMsg}</p>}
      </div>
    )
  }
}

export default LoginRoute
