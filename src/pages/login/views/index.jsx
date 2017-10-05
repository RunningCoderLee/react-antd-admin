import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { message } from 'antd'
import logo from '$media/logo.svg'
import LogInForm from './form'
import * as actions from '../redux'


import './style.scss'

class Login extends Component {

  static propTypes = {
    login   : PropTypes.func.isRequired,
    loading : PropTypes.bool.isRequired,
    // message : PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      hideMessage: '',
    }
  }

  // componentWillReceiveProps(nextProps) {
  // }

  // showMessage = (content, type) => {
  //   const { hideMessage } = this.state

  //   if (!hideMessage && type === 'loading') {
  //     const hide = message.loading(content, 0)
  //     this.setState({ hideMessage: hide })
  //     return
  //   }

  //   if (typeof hideMessage === 'function') {
  //     hideMessage()
  //   }

  //   message[type](content)
  // }

  render() {
    const { login, loading } = this.props

    return (
      <div className="login-box">
        <h1 className="login-box_title">
          <img src={logo} alt="logo" />
          <span>react-antD-admin</span>
        </h1>
        <LogInForm onLogin={login} loading={loading} />
        <p className="login-box_prompt"><span>Username: admin</span><span>Password: admin</span></p>
      </div>
    )
  }
}


export default connect(state => ({
  loading : state.auth.loading,
  message : state.auth.message,
}), dispatch => ({
  login: bindActionCreators(actions.login, dispatch),
}))(Login)
