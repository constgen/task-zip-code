import React from 'react';
import PropTypes from 'prop-types';

import './label.css';

export default function Label(props) {
  const { children, className, title } = props;

  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <label className={`component-label ${className}`}>
      <span className="title">{title}</span>
      {children}
    </label>
  );
  /* eslint-enable */
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Label.defaultProps = {
  children: null,
  className: '',
};
