import { observable, action } from 'mobx';

export default class State {
  @observable id = ''
  @observable stateName = ''
  @observable cityName = ''
  @observable zipCode = ''
  constructor(config) {
    this.update(config);
  }
  @action update(config) {
    this.id = config['state abbreviation'];
    this.stateName = config.state;
    this.cityName = config['place name'];
    this.zipCode = config['post code'];
  }
}
