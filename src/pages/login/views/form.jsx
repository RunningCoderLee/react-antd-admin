import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Input, Icon } from 'antd'
import IconFont from '$components/iconFont'

const FormItem = Form.Item

class LogInBox extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator : PropTypes.func.isRequired,
      validateFields    : PropTypes.func.isRequired,
    }).isRequired,
    loading : PropTypes.bool.isRequired,
    onLogin : PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values)
      }
    })
  }
  toggleVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const {
      loading,
      form: {
        getFieldDecorator,
      },
    } = this.props


    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名！' }],
          })(
            <Input
              prefix={
                <Icon type="user" className="login-box_icon" />
              }
              placeholder="用户名：admin"
              size="large"
            />,
          )}
        </FormItem>
        <FormItem >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input
              prefix={
                <Icon type="lock" className="login-box_icon" />
              }
              suffix={
                <IconFont
                  type={this.state.showPassword ? 'show_price' : 'hide1'}
                  onClick={this.toggleVisibility}
                />
              }
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="密码：admin"
              size="large"
            />,
          )}
        </FormItem>
        <FormItem >
          <Button
            className="login-box_submit"
            type="primary"
            htmlType="submit"
            loading={loading}
          >登录</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(LogInBox)
