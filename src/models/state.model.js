import { observable, action } from 'mobx';

export default class State {
  @observable id = ''
  @observable name = ''
  constructor(config) {
    this.update(config);
  }
  @action update(config) {
    this.id = config.state_abbreviation;
    this.name = config.state;
  }
}
