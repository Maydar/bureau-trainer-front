export enum Theme {
  bear = 'bear',
  girafe = 'girafe'
};

export enum BearFonts {
  kudryashev = 'kudryashev',
  amalta = 'amalta',
  misto = 'misto',
  roboto = 'roboto',
  vast = 'vast',
  playfair = 'playfair'
};

export enum GirafeFonts {
  roboto = 'roboto',
  circe = 'circe',
  austin = 'austin',
  fence = 'fence',
  norbert = 'norbert',
  venus = 'venus'
};

export const mapWordData = {
  [Theme.bear]: {
    [BearFonts.vast] : {
      key: 'vast',
      name: 'Vast',
      description: 'Тонкие линии шрифта меньше всего передают облик медведя.'
    },
    [BearFonts.kudryashev] : {
      key: 'kudryashev',
      name: 'Kudryashev Display',
      description: 'Тонкие линии и проработанные детали придают шрифту изящность и непринужденность.'
    },
    [BearFonts.amalta] : {
      key: 'amalta',
      name: 'Amalta',
      description: 'Жирные, мягкие и слегка наклонные буквы передают округлость и нерасторопность, а засечки напоминают лапы.'
    },
    [BearFonts.misto] : {
      key: 'misto',
      name: 'Misto',
      description: 'Жирные геометричные линии шрифта больше подходят к неодушевленным предметам.'
    },
    [BearFonts.playfair] : {
      key: 'playfair',
      name: 'Playfair Display',
      description: 'Элегантный шрифт с засечками не подходит косолапому медведю.'
    },
    [BearFonts.roboto] : {
      key: 'roboto',
      name: 'Roboto',
      description: 'Шрифт не поддерживает внешность и характер слова и ничего не выражает.'
    }
  },
  [Theme.girafe]: {
    [GirafeFonts.roboto] : {
      key: 'roboto',
      name: 'Roboto',
      description: 'Шрифт не поддерживает внешность и характер слова и ничего не выражает.'
    },
    [GirafeFonts.norbert] : {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: 'Узкий вытянутый шрифт хорошо передает высокий рост жирафа.'
    },
    [GirafeFonts.circe] : {
      key: 'circe',
      name: 'Circe Contrast',
      description: 'Геометрический шрифт с опасным характером.'
    },
    [GirafeFonts.austin] : {
      key: 'austin',
      name: 'Austin',
      description: 'Крупные жирные буквы недостаточно высоки для жирафа.'
    },
    [GirafeFonts.venus] : {
      key: 'venus',
      name: 'Venus Rising',
      description: 'Тонкие широкие буквы с интересными изгибами выглядят скорее технологично.'
    },
    [GirafeFonts.fence] : {
      key: 'fence',
      name: 'Fence',
      description: 'Шрифт широкий, насыщенный и приземистый.'
    }
  }
};

export const mapToArrayWordData = {
  [Theme.bear]: [
    mapWordData[Theme.bear][BearFonts.roboto],
    mapWordData[Theme.bear][BearFonts.vast],
    mapWordData[Theme.bear][BearFonts.kudryashev],
    mapWordData[Theme.bear][BearFonts.amalta],
    mapWordData[Theme.bear][BearFonts.misto],
    mapWordData[Theme.bear][BearFonts.playfair],
  ],
  [Theme.girafe]: [
    mapWordData[Theme.girafe][GirafeFonts.roboto],
    mapWordData[Theme.girafe][GirafeFonts.norbert],
    mapWordData[Theme.girafe][GirafeFonts.circe],
    mapWordData[Theme.girafe][GirafeFonts.austin],
    mapWordData[Theme.girafe][GirafeFonts.fence],
    mapWordData[Theme.girafe][GirafeFonts.venus]
  ]
};
