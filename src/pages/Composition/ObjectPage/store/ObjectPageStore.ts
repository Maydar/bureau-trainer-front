import { action, observable } from 'mobx';

export default class ObjectPageStore {
  @observable
  currentPosition: number = 1;

  @action.bound
  setPosition(position: number) {
    this.currentPosition = position;
  }
}
