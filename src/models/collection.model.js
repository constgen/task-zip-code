import { observable, computed, action } from 'mobx';

export default class Collection {
  @observable items = []

  @computed get length() {
    return this.items.length;
  }
  @computed get selectedIndex() {
    let selectedIndex = -1;
    this.items.some((item, index) => {
      if (item.selected) {
        selectedIndex = index;
        return true;
      }
      return false;
    });
    return selectedIndex;
  }
  set selectedIndex(index) {
    const { selectedIndex } = this;

    if (this.items[selectedIndex]) {
      this.items[selectedIndex].selected = false;
    }
    this.items[index].selected = true;
  }
  @action add(item) {
    item.id = this.length; // eslint-disable-line no-param-reassign
    this.items.push(item);
  }
  @action get(index) {
    return this.items[index];
  }
}
