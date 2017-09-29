import React, { Component } from 'react'
import Nprogress from 'nprogress'


export default function nProgress(WrappedComponent) {
  return class PP extends Component {
    constructor(props) {
      super(props)
      Nprogress.start()
    }

    componentWillMount() {
      Nprogress.start()
    }

    componentDidMount() {
      Nprogress.done()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
