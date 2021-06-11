import {action, computed, observable} from 'mobx';

export class RootStore {
  @observable
  visitCounter = 0;

  @observable
  fontsVisited = false;

  @observable
  animalsVisited = false;

  @observable
  colorsVisited = false;

  @observable
  compositionVisited = false;

  @computed
  get isAllPagesVisited () {
    return this.animalsVisited &&
      this.colorsVisited &&
      this.fontsVisited &&
      this.compositionVisited;
  };

  @action.bound
  flush = () => {
    this.animalsVisited = false;
    this.colorsVisited = false;
    this.fontsVisited = false;
    this.compositionVisited = false;
  };

  @action.bound
  visitFonts = () => {
    this.fontsVisited = true;
  };

  @action.bound
  visitAnimals = () => {
    this.animalsVisited = true;
  };

  @action.bound
  visitColors = () => {
    this.colorsVisited = true;
  };

  @action.bound
  visitComposition = () => {
    this.compositionVisited = true;
  }
}

export default new RootStore();
