import { mapPositionText, Position, Theme } from 'pages/Composition/config';

export const getPositionText = (percentage: number, theme: Theme) => {
  if (percentage <= 35) {
    return mapPositionText[theme][Position.topLeft];
  }

  if (percentage > 30 && percentage <= 65) {
    return mapPositionText[theme][Position.middle];
  }

  if (percentage > 65) {
    return mapPositionText[theme][Position.rightBottom];
  }

  return mapPositionText[theme][Position.topLeft];
};

export const STEP = 1;
export const MIN = 0;
export const MAX = 1000;
