import { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '../../utils/noop';
import './selection-list.css';

export default class SelectionList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSelect() {
    this.props.onSelect({});
  }
  render() {
    const { className } = this.props;
    return (
      <ul className={`component-selection-list ${className}`}>
        {[].map(text => <li>{text}</li>)}
      </ul >
    );
  }
}

SelectionList.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
};
SelectionList.defaultProps = {
  className: '',
  onSelect: noop,
};
