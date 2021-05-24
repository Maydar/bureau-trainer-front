import { observable, action } from 'mobx';
import { Orientation, Theme } from 'pages/Composition/config';

const POSITION_MIDDLE = 500;

export default class CompositionStore {
  @observable
  currentTheme: Theme = Theme.car;

  @observable
  order: Array<Theme> = [Theme.car, Theme.bomb, Theme.rocket];

  @observable
  pages = {
    [Theme.car]: {
      theme: Theme.car,
      position: POSITION_MIDDLE,
      orientation: Orientation.horizontal,
    },

    [Theme.rocket]: {
      theme: Theme.rocket,
      position: POSITION_MIDDLE,
      orientation: Orientation.vertical,
    },

    [Theme.bomb]: {
      theme: Theme.bomb,
      position: POSITION_MIDDLE,
      orientation: Orientation.vertical,
    },
  };

  @action.bound
  setPosition(theme: Theme, position: number) {
    this.pages = {
      ...this.pages,
      ...{
        [theme]: {
          theme,
          position,
          orientation: this.pages[theme].orientation
        },
      },
    };
  }

  @action.bound
  setTheme(theme: Theme) {
    this.currentTheme = theme;
  }
}
