import { observable, action } from 'mobx';

export default class CollectionItem {
  @observable value = undefined
  @observable selected = false
  constructor(config) {
    this.update(config);
  }
  @action update(config) {
    this.selected = Boolean(config.selected);
    this.value = config.value;
  }
}
