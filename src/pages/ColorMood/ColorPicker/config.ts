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
  [ColorThemes.sadness]: 'NORMALIDAD EXTENDED',
  [ColorThemes.disgust]: 'Ambidexter',
};

export const mapColorToDescription = {
  [Color.white]: `Можно позеленеть от${nbsp}злости, но${nbsp}этот цвет ассоциируется с${nbsp}мятной свежестью`,
  [Color.darkred]: `Вот${nbsp}яркий красный, который ассоциируется со${nbsp}взрывом эмоций и${nbsp}лицом злого человека`,
  [Color.yellow]: `Тёплый и${nbsp}дружелюбный жёлтый не${nbsp}дружит со${nbsp}злостью`,
  [Color.green]: `Можно позеленеть от${nbsp}злости, но${nbsp}этот цвет ассоциируется с${nbsp}мятной свежестью`,
  [Color.darkgreen]: `Изумрудный цвет — это${nbsp}роскошь, а${nbsp}не${nbsp}злость`,
  [Color.lightblue]: `Тут${nbsp}чистое безоблачное небо, которое совсем не${nbsp}про${nbsp}злость`,

  [Color.olive]: `Цвет засохшей жвачки на${nbsp}парте`,
  [Color.darkblue]: `Цвет спокойный и${nbsp}холодный, а${nbsp}не${nbsp}теплый и${nbsp}радостный`,
  [Color.brown]: `Загадочный цвет. Какое${hyphen}то колдунство`,
  [Color.orange]: `Солнышко, ромашки, радость!`,
  [Color.hackie]: `Подойдет для${nbsp}болотной Кикиморы. В${nbsp}любом настроении`,

  [Color.pink]: `Это цвет умиления и${nbsp}розовых соплей, но${nbsp}не${nbsp}отвращения`,
  [Color.mudgreen]: ` У${nbsp}вас${nbsp}из${nbsp}крана течёт болотная жижа. Вы${nbsp}испытываете отвращение!`,
  [Color.grey]: `Бетон и${nbsp}пыль. Мрачно, но${nbsp}не${nbsp}противно`,
  [Color.sky]: `Лёгкий и${nbsp}наивный цвет — не${nbsp}про отвращение`,
  [Color.blue]: `Кажется, это${nbsp}цвет платья диснеевской принцессы`,

  [Color.fonk]: `Цвет идеального моря в${nbsp}идеальный солнечный день. Тут не${nbsp}до${nbsp}печали`,
  [Color.darkbrown]: `Шоколадка! От${nbsp}неё${nbsp}всегда теплей на${nbsp}душе`,
  [Color.lightyellow]: `Это${nbsp}цвет серединки ромашек в${nbsp}солнечный денёк`,
  [Color.lightgrey]: `Пасмурное небо, дождь, плохое настроение, печаль`,
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
