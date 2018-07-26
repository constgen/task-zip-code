import React from 'react';
import PropTypes from 'prop-types';

import './button.css';
import noop from '../../../utils/noop';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    const { name } = props;
    this.state = { name };
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps;
    this.setState({ name });
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(event, this.state.name);
  }

  render() {
    const {
      children,
      type,
      className,
      disabled,
      name = null,
    } = this.props;

    return (
      <button
        name={name}
        type={type}
        disabled={disabled}
        className={`component-button ${className}`}
        onClick={(e) => { this.handleClick(e); }}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  name: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  children: null,
  name: undefined,
  className: '',
  type: 'button',
  onClick: noop,
  disabled: false,
};
