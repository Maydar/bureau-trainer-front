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
      'Ничего не происходит — машинка зависла посреди формата. Очень статичная композиция без истории.',
    [Position.topLeft]:
      'Иллюзия движения создается, если оставить больше воздуха в направлении следования. Теперь машинка едет вперед.',
    [Position.rightBottom]:
      'Машина уперлась в край формата и движение пропало. Она приехала и остановилась',
  },
  [Theme.rocket]: {
    [Position.middle]:
      'Ракета зависла посреди формата. Выглядит неубедительно.',
    [Position.topLeft]: 'Появилась динамика. Ракета взлетела в космос!',
    [Position.rightBottom]:
      'Ракета стоит на земле и готовится к пуску. Cкучная статичная композиция.',
  },
  [Theme.bomb]: {
    [Position.middle]: 'Бомба зависла посреди формата. Выглядит неубедительно.',
    [Position.topLeft]:
      'Появилась динамика. На бомбу действуют силы гравитации и она вот-вот упадёт.',
    [Position.rightBottom]: 'Бомба уже упала — нет напряжения и истории.',
  },
};
