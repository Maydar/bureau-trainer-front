import { action, observable } from 'mobx';

export default class FontsAnimalsStore {
  @observable
  bearIndex = 0;

  @observable
  giraffeIndex = 0;

  @observable
  tarakanIndex = 0;

  @observable
  elephantIndex = 0;

  @action.bound
  setBearIndex(idx: number) {
    this.bearIndex = idx;
  }

  @action.bound
  setGiraffeIndex(idx: number) {
    this.giraffeIndex = idx;
  }

  @action.bound
  setTarakanIndex(idx: number) {
    this.tarakanIndex = idx;
  }

  @action.bound
  setElephantIndex(idx: number) {
    this.elephantIndex = idx;
  }
}
