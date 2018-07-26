import { observable, computed, action } from 'mobx';

export default class StatesCollection {
  @observable states = []

  @action add() {
    this.states.push()
  }
  @action update() {

  }
  @computed get length() {
    return this.states.length;
  }
}
