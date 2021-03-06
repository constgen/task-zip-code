import { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import SelectionList from '../../components/selection-list/SelectionList';
import { Form, Label, Input, Button } from '../../components/form/Form';
import StateInfo from '../../components/state-info/StateInfo';
import zip from '../../services/zip.service';
import Collection from '../../models/collection.model';
import CollectionItem from '../../models/collection-item.model';
import State from '../../models/state.model';
import './state-search.css';

export const MODES = {
  CREATION: 0,
  EDITING: 1,
};

@observer
export default class StateSearch extends Component {
  static isNotUniqueStateCode(collection, code) {
    return collection.items.some(item => item.value.zipCode === code);
  }
  constructor() {
    super();
    this.state = {
      mode: MODES.CREATION,
      code: '',
      selectedState: null,
    };
    this.statesCollection = new Collection();
  }
  handleSelect(item) {
    const code = item ? item.value.zipCode : '';
    const selectedState = item ? item.value : null;
    const mode = (code && selectedState) ? MODES.EDITING : MODES.CREATION;
    this.setState({ code, selectedState, mode });
  }
  handleSubmit() {
    let { code } = this.state;
    const { mode, selectedState } = this.state;

    if (!code) return;
    code = code.trim();
    if (mode === MODES.CREATION) {
      this.addState(code);
    } else {
      this.updateState(code, selectedState);
    }
  }
  updateState(code, state) {
    return zip.getState(code)
      .then(data => state.update(data))
      .then(() => {
        this.setState({ code: '' });
      });
  }
  addState(code) {
    const { isNotUniqueStateCode } = StateSearch;
    if (isNotUniqueStateCode(this.statesCollection, code)) {
      return Promise.resolve();
    }
    return zip.getState(code)
      .then(data => new State(data))
      .then(state => new CollectionItem({
        value: state,
      }))
      .then((item) => {
        this.statesCollection.add(item);
        this.setState({ code: '' });
      });
  }
  handleCodeChange(code) {
    const { selectedState } = this.state;
    const mode = (code && selectedState) ? MODES.EDITING : MODES.CREATION;
    this.setState({ code, mode });
  }
  render() {
    const { className } = this.props;
    const { mode, code } = this.state;
    return (
      <div className={`container-state-search ${className}`}>
        <Form onSubmit={() => this.handleSubmit()}>
          <a className="help-link" href="https://phaster.com/zip_code.html" rel="noopener noreferrer" target="_blank">List of codes</a>
          <hr />
          <Label title="Enter zip code">
            <Input
              name="zip-code"
              value={code}
              onChange={value => this.handleCodeChange(value)}
            />
          </Label>
          <Button type="submit">{mode === MODES.CREATION ? 'Add' : 'Save'}</Button>
        </Form>

        <SelectionList collection={this.statesCollection} Item={StateInfo} className="results" onSelect={item => this.handleSelect(item)} />
      </div >
    );
  }
}

StateSearch.propTypes = {
  className: PropTypes.string,
};
StateSearch.defaultProps = {
  className: '',
};
