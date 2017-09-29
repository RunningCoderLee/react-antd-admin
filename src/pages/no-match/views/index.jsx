import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { Nprogress } from '$components/decorators'

@Nprogress
class NoMatch extends Component {

  static contextTypes = {
    router: PropTypes.shape({}).isRequired,
  }

  // static propTypes = {
  //   location: PropTypes.shape({
  //     push: PropTypes.func.isRequired,
  //   }).isRequired,
  // }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log('nomatch: componentWillMount')
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    console.log('nomatch: componentWillUnmount')
    console.log('begin np')
  }

  handleClick = (e) => {
    // const { location } = this.props
    console.log(location)
    e.preventDefault()

    setTimeout(() => {
      this.context.router.history.push('/login')
    }, 2000)
  }

  render() {
    return (
      <div>
        <Link to="/login" onClick={this.handleClick}>
          <button >跳转到login</button>
        </Link>
        <p>404 未找到你要访问的页面</p>
      </div>
    )
  }
}

// const NoMatch = () => (
//   <div>404 未找到你要访问的页面</div>
// )

export default NoMatch
