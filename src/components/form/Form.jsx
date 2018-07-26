import React from 'react';
import PropTypes from 'prop-types';

import './form.css';
import Button from './button/Button';

import Input from './input/Input';
import Label from './label/Label';
import noop from '../../utils/noop';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  handleReset(event) {
    event.preventDefault();
    this.props.onReset();
  }

  render() {
    const { children, className, autoComplete } = this.props;
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        onReset={e => this.handleReset(e)}
        className={`component-form ${className}`}
        formNoValidate
        autoComplete={autoComplete}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  className: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
};
Form.defaultProps = {
  children: null,
  onReset: noop,
  className: '',
  autoComplete: 'on',
};

export {
  Form,
  Button,
  Input,
  Label,
};
