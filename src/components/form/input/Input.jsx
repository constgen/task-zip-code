import React from 'react';
import PropTypes from 'prop-types';

import './input.css';
import noop from '../../../utils/noop';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    const {
      value,
      valid,
    } = props;
    this.state = {
      value,
      valid,
    };
  }
  componentWillReceiveProps(props) {
    const { value, valid } = props;
    this.setState({ value, valid });
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
    this.props.onChange(value);
  }
  render() {
    const {
      name,
      maxLength,
      disabled,
      className,
      placeholder,
      onFocus,
      onBlur,
      onKeyPress,
      autoComplete,
    } = this.props;
    const { value = '', valid } = this.state;
    const validClassName = valid ? '' : 'invalid';

    return (
      <input
        name={name}
        className={`component-input ${className} ${validClassName}`}
        type="text"
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={e => this.handleChange(e)}
        autoComplete={autoComplete}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  autoComplete: PropTypes.oneOf(['on', 'off']),
};
Input.defaultProps = {
  className: '',
  name: '',
  value: undefined,
  maxLength: Infinity,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onKeyPress: noop,
  disabled: false,
  valid: true,
  autoComplete: 'on',
};
