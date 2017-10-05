import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import './iconfont'

const IconFont = ({ type, onClick }) => (
  <svg className="icon" aria-hidden="true" onClick={onClick}>
    <use xlinkHref={`#icon-${type}`} />
  </svg>
)


IconFont.propTypes = {
  type    : PropTypes.string.isRequired,
  onClick : PropTypes.func,
}

IconFont.defaultProps = {
  onClick: () => {},
}


export default IconFont
