import { action, observable } from 'mobx';

export default class FontsMoodStore {
  @observable
  rageIndex = 0;

  @observable
  anorexyIndex = 0;

  @observable
  rumbleIndex = 0;

  @action.bound
  setRageIndex(idx: number) {
    this.rageIndex = idx;
  }

  @action.bound
  setAnorexyIndex(idx: number) {
    this.anorexyIndex = idx;
  }

  @action.bound
  setRumbleIndex(idx: number) {
    this.rumbleIndex = idx;
  }
}
