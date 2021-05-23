import { action, observable } from 'mobx';

export default class FontsAnimalsStore {
  @observable
  currentIndex = 0;

  @action.bound
  setIndex(idx: number) {
    this.currentIndex = idx;
  }
}
