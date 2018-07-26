import { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';
import noop from '../../utils/noop';
import './selection-list.css';

@observer
export default class SelectionList extends Component {
  constructor(props) {
    super(props);
    this.collection = props.collection;
  }
  handleSelect(event, item, index) {
    const shouldDeselectIndex = (this.collection.selectedIndex === index);
    event.preventDefault();
    if (shouldDeselectIndex) {
      this.collection.selectedIndex = -1;
      this.props.onSelect(null, -1);
    } else {
      this.collection.selectedIndex = index;
      this.props.onSelect(item, index);
    }
  }
  render() {
    const { className, Item } = this.props;
    const SELECTED_CLASS_NAME = 'selected';
    return (
      <ul className={`component-selection-list ${className}`}>
        {this.collection.items.map((item, index) => (
          <li
            className={item.selected ? SELECTED_CLASS_NAME : ''}
            key={item.id}
          >
            <a href="/" onClick={event => this.handleSelect(event, item, index)}>
              <Item value={item.value} />
            </a>
          </li>
        ))}
      </ul >
    );
  }
}

SelectionList.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  collection: MobxPropTypes.observableObject,
  Item: PropTypes.func,
};
SelectionList.defaultProps = {
  className: '',
  onSelect: noop,
  Item() { return null; },
  collection: { items: [] },
};
