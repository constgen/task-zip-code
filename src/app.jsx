import { Component } from 'react';
import StateSearch from './containers/state-search/StateSearch';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <StateSearch />;
  }
}
