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
      `Ничего не${nbsp}происходит — машинка зависла посреди формата. Очень статичная композиция без${nbsp}истории`,
    [Position.topLeft]:
      `Иллюзия движения создается, если${nbsp}оставить больше воздуха в${nbsp}направлении следования. Теперь машинка едет вперед`,
    [Position.rightBottom]:
      `Машина уперлась в${nbsp}край формата и${nbsp}движение пропало. Она приехала и${nbsp}остановилась`,
  },
  [Theme.rocket]: {
    [Position.middle]:
      `Ракета зависла посреди формата. Выглядит неубедительно`,
    [Position.topLeft]: `Появилась динамика. Ракета взлетела в${nbsp}космос!`,
    [Position.rightBottom]:
      `Ракета стоит на${nbsp}земле и${nbsp}готовится к${nbsp}пуску. Cкучная статичная композиция`,
  },
  [Theme.bomb]: {
    [Position.middle]: `Бомба зависла посреди формата. Выглядит неубедительно`,
    [Position.topLeft]:
      `Появилась динамика. На${nbsp}бомбу действуют силы гравитации и${nbsp}она вот${hyphen}вот упадёт`,
    [Position.rightBottom]: `Бомба уже упала — нет${nbsp}напряжения и${nbsp}истории`,
  },
};
