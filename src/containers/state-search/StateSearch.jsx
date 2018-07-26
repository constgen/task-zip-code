import { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import SelectionList from '../../components/selection-list/SelectionList';
import { Form, Label, Input, Button } from '../../components/form/Form';
import zip from '../../services/zip.service';
import './state-search.css';

export const MODES = {
  CREATION: 0,
  EDITING: 1,
};

@observer
export default class StateSearch extends Component {
  constructor() {
    super();
    this.state = {
      mode: MODES.CREATION,
      code: '',
    };
  }
  handleSelect() {
    this.setState({});
  }
  handleSubmit() {
    this.setState({});
  }
  handleCodeChange(code) {
    this.setState({ code });
    zip.getState(code).then(console.log);
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

        <SelectionList className="results" onSelect={e => this.handleSelect(e)} />
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
