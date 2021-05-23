export enum Theme {
  car = 'car',
  rocket = 'rocket',
  bomb = 'bomb',
};

export enum Position {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
}

export enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export const mapOrientationData = {
  [Theme.car]: {
    [Orientation.horizontal]: {
      [Position.middle]: 'Ничего не происходит — машинка зависла посреди формата. Очень статичная композиция без истории.',
      [Position.left]: 'Иллюзия движения создается, если оставить больше воздуха в направлении следования. Теперь машинка едет вперед.',
      [Position.right]: 'Машина уперлась в край формата и движение пропало. Она приехала и остановилась',
      [Position.top]: '',
      [Position.bottom]: '',
    },
    [Orientation.vertical]: {
      [Position.middle]: '',
      [Position.top]: '',
      [Position.bottom]: '',
      [Position.left]: '',
      [Position.right]: '',
    }
  },
  [Theme.rocket]: {
    [Orientation.vertical]: {
      [Position.middle]: 'Ракета зависла посреди формата. Выглядит неубедительно.',
      [Position.top]: 'Появилась динамика. Ракета взлетела в космос!',
      [Position.bottom]: 'Ракета стоит на земле и готовится к пуску. Cкучная статичная композиция.',
      [Position.left]: '',
      [Position.right]: '',

    },
    [Orientation.horizontal]: {
      [Position.middle]: '',
      [Position.top]: '',
      [Position.bottom]: '',
      [Position.left]: '',
      [Position.right]: '',
    }
  },
  [Theme.bomb]: {
    [Orientation.vertical]: {
      [Position.middle]: 'Бомба зависла посреди формата. Выглядит неубедительно.',
      [Position.top]: 'Появилась динамика. На бомбу действуют силы гравитации и она вот-вот упадёт.',
      [Position.bottom]: 'Бомба уже упала — нет напряжения и истории.',
      [Position.left]: '',
      [Position.right]: '',
    },
    [Orientation.horizontal]: {
      [Position.middle]: '',
      [Position.top]: '',
      [Position.bottom]: '',
      [Position.left]: '',
      [Position.right]: '',
    }
  }
};
