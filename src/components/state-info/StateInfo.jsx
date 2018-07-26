import { Component } from 'react';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';

@observer
export default class StateInfo extends Component {
  render() {
    const { value } = this.props;
    return (
      <span>{value.stateName}, {value.cityName}, {value.id}</span>
    );
  }
}

StateInfo.propTypes = {
  value: MobxPropTypes.observableObject,
};
StateInfo.defaultProps = {
  value: {},
};
