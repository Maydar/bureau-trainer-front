import {hyphen, nbsp} from "config/constants";

export enum Theme {
  car = 'car',
  rocket = 'rocket',
  bomb = 'bomb',
}

export enum Position {
  topLeft = 'topLeft',
  middle = 'middle',
  rightBottom = 'rightBottom',
}

export enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export const mapPositionText = {
  [Theme.car]: {
    [Position.middle]:
      `Ничего не${nbsp}происходит — машинка зависла посреди формата. Cтатичная композиция без${nbsp}истории`,
    [Position.topLeft]:
      `А${nbsp}теперь машинка как${nbsp}бы${nbsp}находится в${nbsp}начале своего пути и${nbsp}собирается куда-то ехать. Простым изменением положения мы${nbsp}уже${nbsp}рассказываем историю`,
    [Position.rightBottom]:
      `А${nbsp}теперь машинка куда-то приехала`,
  },
  [Theme.rocket]: {
    [Position.middle]:
      `Ракета зависла посреди формата. Статичная композиция без${nbsp}истории`,
    [Position.topLeft]: `А${nbsp}теперь ракета улетает в${nbsp}космос!`,
    [Position.rightBottom]:
      `А${nbsp}теперь ракета как${nbsp}будто стоит на${nbsp}земле и${nbsp}готовится к${nbsp}взлёту`,
  },
  [Theme.bomb]: {
    [Position.middle]: `Бомба зависла посреди формата. Статичная композиция без${nbsp}истории`,
    [Position.topLeft]:
      `А${nbsp}теперь бомбу как${nbsp}будто только что${nbsp}сбросили с${nbsp}самолёта. Ещё${nbsp}есть время, чтобы${nbsp}убежать`,
    [Position.rightBottom]: `А${nbsp}теперь бомба почти достигла земли. Ещё${nbsp}секунда и${nbsp}бабах! Бежать уже${nbsp}поздно`,
  },
};
