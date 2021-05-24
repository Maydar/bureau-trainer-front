import {hyphen, nbsp} from 'config/constants';

export enum ColorThemes {
  rage = 'rage',
  happiness = 'happiness',
  sadness = 'sadness',
  disgust = 'disgust',
}

export enum Color {
  white = 'white',
  darkred = 'darkred',
  yellow = 'yellow',
  green = 'green',
  lightblue = 'lightblue',

  olive = 'olive',
  darkblue = 'darkblue',
  brown = 'brown',
  orange = 'orange',
  darkgreen = 'darkgreen',
  hackie = 'hackie',

  pink = 'pink',
  mudgreen = 'mudgreen',
  grey = 'grey',
  sky = 'sky',
  blue = 'blue',

  fonk = 'fonk',
  darkbrown = 'darkbrown',
  lightyellow = 'lightyellow',
  lightgrey = 'lightgrey',
  acidorange = 'acidorange',
}

export const mapTypeColors = {
  [ColorThemes.rage]: [
    Color.green,
    Color.yellow,
    Color.darkred,
    Color.lightblue,
    Color.darkgreen,
  ],
  [ColorThemes.happiness]: [
    Color.olive,
    Color.darkblue,
    Color.brown,
    Color.orange,
    Color.hackie,
  ],
  [ColorThemes.sadness]: [
    Color.fonk,
    Color.darkbrown,
    Color.lightyellow,
    Color.lightgrey,
    Color.acidorange,
  ],
  [ColorThemes.disgust]: [
    Color.pink,
    Color.mudgreen,
    Color.grey,
    Color.sky,
    Color.blue,
  ],
};

export const mapTypeToFont = {
  [ColorThemes.rage]: 'AMALTA',
  [ColorThemes.happiness]: 'DISPLACE 2.0',
  [ColorThemes.sadness]: 'Ambidexter',
  [ColorThemes.disgust]: 'NORMALIDAD EXTENDED',
};

export const mapColorToDescription = {
  [Color.white]: `Можно позеленеть от злости, но этот цвет ассоциируется с мятной свежестью`,
  [Color.darkred]: `Насыщенный и${nbsp}агрессивный красный хорошо передаёт сильную эмоцию и${nbsp}подходит для${nbsp}злости`,
  [Color.yellow]: `Тёплый и${nbsp}дружелюбный жёлтый не${nbsp}дружит со${nbsp}злостью`,
  [Color.green]: `Недостаточно злой. Это цвет волшебной маски Стэнли Ипкиса`,
  [Color.darkgreen]: `Изумрудный цвет — это${nbsp}роскошь, а${nbsp}не${nbsp}злость`,
  [Color.lightblue]: `Цвет открытки на${nbsp}день рождения младенца. Только замените шрифт`,

  [Color.olive]: `Цвет засохшей жвачки на${nbsp}парте`,
  [Color.darkblue]: `Цвет спокойный и${nbsp}холодный, а${nbsp}не${nbsp}теплый и${nbsp}радостный`,
  [Color.brown]: `Загадочный цвет. Какое${hyphen}то колдунство`,
  [Color.orange]: `Вот это${nbsp}радость и${nbsp}веселье!`,
  [Color.hackie]: `Подойдет для${nbsp}болотной Кикиморы. В${nbsp}любом настроении`,

  [Color.pink]: `Нежный ягодный цвет — слишком мило для${nbsp}отвращения`,
  [Color.mudgreen]: `Отталкивающий цвет — ассоциируется с${nbsp}болотом и${nbsp}грязью`,
  [Color.grey]: `Бетон и${nbsp}пыль. Мрачно, но${nbsp}не${nbsp}противно`,
  [Color.sky]: `Лёгкий и${nbsp}наивный цвет — не${nbsp}про отвращение`,
  [Color.blue]: `Кажется, это${nbsp}цвет платья диснеевской принцессы`,

  [Color.fonk]: `Лазурный, как${nbsp}цвет чистой морской воды, выглядит безупречным и${nbsp}жизнеутверждающим`,
  [Color.darkbrown]: `Шоколадка! От${nbsp}неё${nbsp}всегда теплей на${nbsp}душе`,
  [Color.lightyellow]: `Это${nbsp}цвет серединки ромашек в${nbsp}солнечный денёк`,
  [Color.lightgrey]: `Цвет пасмурного неба, меланхолии. Как${hyphen}то печально сразу стало...`,
  [Color.acidorange]: `Если${nbsp}бы${nbsp}у${nbsp}меня был гоночный болид, он${nbsp}был${nbsp}бы${nbsp}такого энергичного цвета!`,
};

export const whiteColors = [
  Color.darkbrown,
  Color.darkblue,
  Color.brown,
  Color.hackie,
  Color.mudgreen,
  Color.grey,
];
