import {action, observable} from 'mobx';
import { Color, ColorThemes } from 'pages/ColorMood/ColorPicker/config';

export default class ColorMoodStore {
  @observable
  currentTheme: ColorThemes = ColorThemes.rage;

  @observable
  pageOrder: Array<ColorThemes> = [
    ColorThemes.rage,
    ColorThemes.happiness,
    ColorThemes.disgust,
    ColorThemes.sadness,
  ];

  @observable
  pages = {
    [ColorThemes.rage]: {
      theme: ColorThemes.rage,
      currentColor: Color.green,
    },

    [ColorThemes.happiness]: {
      theme: ColorThemes.happiness,
      currentColor: Color.olive,
    },

    [ColorThemes.disgust]: {
      theme: ColorThemes.disgust,
      currentColor: Color.pink,
    },

    [ColorThemes.sadness]: {
      theme: ColorThemes.sadness,
      currentColor: Color.fonk,
    },
  };

  @action.bound
  setThemeColor(theme: ColorThemes, color: Color) {
    this.pages = {
      ...this.pages,
      ...{
        [theme]: {
          theme: theme,
          currentColor: color
        }
      }
    };
  }

  @action.bound
  setTheme(theme: ColorThemes) {
    this.currentTheme = theme;
  }
}
