import { nbsp } from 'config/constants';

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
  [Color.yellow]: `Тёплый идружелюбный жёлтый не${nbsp}дружит со${nbsp}злостью`,
  [Color.green]: `Можно позеленеть от${nbsp}злости, но${nbsp}этот цвет ассоциируется с${nbsp}мятной свежестью`,
  [Color.darkgreen]: `Изумрудный цвет придает роскоши и${nbsp}не${nbsp}напоминает злость`,
  [Color.lightblue]: `От${nbsp}цвета легко на${nbsp}душе — он${nbsp}не${nbsp}злой`,

  [Color.olive]: `Малонасыщенный и${nbsp}лёгкий цвет. Радости не${nbsp}хватает яркости`,
  [Color.darkblue]: `Цвет спокойный и${nbsp}холодный, а${nbsp}не${nbsp}теплый и${nbsp}радостный`,
  [Color.brown]: `Цвет очень темный для${nbsp}радости`,
  [Color.orange]: `Яркий и${nbsp}дружелюбный цвет. Подходит!`,
  [Color.hackie]: `Вызывает неприятные ощущения. Не${nbsp}радостно`,

  [Color.pink]: `Нежный ягодный цвет приятен для${nbsp}глаз`,
  [Color.mudgreen]: `Отталкивающий цвет — ассоциируется с${nbsp}болотом и${nbsp}грязью`,
  [Color.grey]: `Бетон и${nbsp}пыль. Мрачно, но${nbsp}не${nbsp}противно`,
  [Color.sky]: `Лёгкий и${nbsp}наивный цвет — не${nbsp}про отвращение`,
  [Color.blue]: `Цвет неба в${nbsp}хорошую погоду совсем не${nbsp}передает настроение слова`,

  [Color.fonk]: `Лазурный, как${nbsp}цвет чистой моркой воды, выглядит безупречным и${nbsp}жизнеутверждающим`,
  [Color.darkbrown]: `Красивый цвет, но${nbsp}совсем не${nbsp}про${nbsp}печаль. Лучше подойдут холодные оттенки`,
  [Color.lightyellow]: `Позитивный и${nbsp}солнечный жёлтый совсем не${nbsp}грустит`,
  [Color.lightgrey]: `Пыльный, похожий на${nbsp}пасмурное небо цвет подчеркивает меланхолию`,
  [Color.acidorange]: `Оранжевый — цвет энергии и${nbsp}жизнелюбия, а${nbsp}не${nbsp}печали`,
};

export const whiteColors = [
  Color.darkgreen,
  Color.darkbrown,
  Color.darkblue,
  Color.brown,
  Color.hackie,
  Color.mudgreen,
  Color.grey,
  Color.blue,
];
