import { nbsp, hyphen } from 'config/constants';

export enum Theme {
  bear = 'bear',
  girafe = 'girafe',
  tarakan = 'tarakan',
  elephant = 'elephant',
}

export enum BearFonts {
  kudryashev = 'kudryashev',
  amalta = 'amalta',
  misto = 'misto',
  roboto = 'roboto',
  vast = 'vast',
  playfair = 'playfair',
}

export enum GirafeFonts {
  roboto = 'roboto',
  circe = 'circe',
  austin = 'austin',
  fence = 'fence',
  norbert = 'norbert',
  vast = 'vast',
}

export enum TarakanFonts {
  roboto = 'roboto',
  didona = 'didona',
  displace = 'displace',
  norbert = 'norbert',
  //cstm = 'cstm',
  vast = 'vast'
}

export enum ElephantFonts {
  roboto = 'roboto',
  harry = 'harry',
  parmigiano = 'parmigiano',
  peace = 'peace',
  norbert = 'norbert',
  normalidad = 'normalidad'
}

export const mapWordData = {
  [Theme.bear]: {
    [BearFonts.vast]: {
      key: 'vast',
      name: 'VAST',
      description: `Медведь большой, толстый и${nbsp}злой, а${nbsp}тут тоненькие${nbsp}буквы. Какая${hyphen}то цапля, а${nbsp}не${nbsp}медведь`,

      width: {
        default: 438,
        mobile: 250,
        tablet: 437,
        desktop: 438
      }
    },
    [BearFonts.kudryashev]: {
      key: 'kudryashev',
      name: 'Kudryashev Display',
      description: `А${nbsp}это${nbsp}медведь, который три года ничего не${nbsp}ел, а${nbsp}потом сходил в${nbsp}салон красоты, где из${nbsp}него сделали пуделя: слишком тонкие буквы и${nbsp}изящные засечки`,

      width: {
        default: 363,
        mobile: 200,
        tablet: 363,
        desktop: 363
      }
    },
    [BearFonts.amalta]: {
      key: 'amalta',
      name: 'AMALTA',
      description: `О да!${nbsp}Толстые штрихи, непрямоугольные засечки, грубые формы — этот шрифт так${nbsp}и${nbsp}просится в${nbsp}берлогу`,

      width: {
        default: 397,
        mobile: 200,
        tablet: 397,
        desktop: 397
      }
    },
    [BearFonts.misto]: {
      key: 'misto',
      name: 'Misto',
      description: `Геометричные формы подошли бы${nbsp}для${nbsp}неодушевлённого предмета. Например, если бы${nbsp}мы${nbsp}захотели выпускать журнал о${nbsp}ракетостроении «Медведь»`,

      width: {
        default: 377,
        mobile: 200,
        tablet: 377,
        desktop: 377
      }
    },
    [BearFonts.playfair]: {
      key: 'playfair',
      name: 'Playfair Display',
      description: `Слишком тонко и${nbsp}элегантно для${nbsp}медведя`,

      width: {
        default: 369,
        mobile: 200,
        tablet: 369,
        desktop: 369
      }
    },
    [BearFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет! Я${nbsp}один из${nbsp}самых нейтральных и${nbsp}безликих шрифтов на${nbsp}свете. 
      Какое слово мной ни${nbsp}набери, я${nbsp}ничего не${nbsp}буду выражать. 
      Поэтому оставьте меня для${nbsp}Андроида, а${nbsp}для${nbsp}выразительности выберите что${hyphen}то${nbsp}другое`,

      width: {
        default: 404,
        mobile: 200,
        tablet: 404,
        desktop: 404
      }
    },
  },
  [Theme.elephant]: {
    [ElephantFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Ку${hyphen}ку`,

      width: {
        default: 226,
        mobile: 150,
        tablet: 226,
        desktop: 226
      }
    },
    [ElephantFonts.harry]: {
      key: 'harry',
      name: 'Harry Plotter',
      description: `Засечки напоминают ноги слона, а${nbsp}ножка у${nbsp}буквы «л» — хобот, но${nbsp}шрифту не${nbsp}хватает массы, ведь слон толстый и${nbsp}большой`,

      width: {
        default: 235,
        mobile: 159,
        tablet: 235,
        desktop: 235
      }
    },
    [ElephantFonts.parmigiano]: {
      key: 'parmigiano',
      name: 'PARMIGIANO CAPTION PRO',
      description: `Жирное начертание — это${nbsp}хорошо, но${nbsp}элегантые засечки и${nbsp}контраст штрихов сводит ощущения слона на${nbsp}нет`,
      width: {
        default: 245,
        mobile: 150,
        tablet: 245,
        desktop: 245
      }
    },
    [ElephantFonts.peace]: {
      key: 'peace',
      name: 'Peace Sans',
      description: `Ту${hyphen}ту${hyphen}ру! Вот он,${nbsp}большой, толстый, округлый слон. А${nbsp}левая нога у${nbsp}«л»${nbsp}ещё и${nbsp}хобот напоминает`,

      width: {
        default: 263,
        mobile: 150,
        tablet: 263,
        desktop: 263
      }

    },
    [ElephantFonts.norbert]: {
      key: 'norbert',
      name: 'NORBERT SCHMAL',
      description: `Слон большой и${nbsp}толстый, а${nbsp}шрифт — тонкий и${nbsp}высокий. Не слон`,

      width: {
        default: 101,
        mobile: 75,
        tablet: 101,
        desktop: 101
      }
    },
    [ElephantFonts.normalidad]: {
      key: 'normalidad',
      name: 'NORMALIDAD EXTENDED',
      description: `Широкие буквы — это${nbsp}хорошо, но${nbsp}для${nbsp}слоновьести им${nbsp}нужно быть жирнее раза в${nbsp}три`,
      width: {
        default: 296,
        mobile: 150,
        tablet: 296,
        desktop: 296
      }
    }
  },

  [Theme.tarakan]: {
    [TarakanFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет!...${nbsp}Ну${nbsp}вы${nbsp}поняли`,

      width: {
        default: 366,
        mobile: 200,
        tablet: 366,
        desktop: 366
      }
    },
    [TarakanFonts.didona]: {
      key: 'didona',
      name: 'Didona',
      description: `Элегантный шрифт мог бы${nbsp}подойти, 
      если бы${nbsp}мы${nbsp}стали выпускать духи с${nbsp}таким названием, но${nbsp}в${nbsp}обычной ситуации совсем не ${nbsp}ссоциируется с${nbsp}грязным домашним вредителем`,

      width: {
        default: 439,
        mobile: 200,
        tablet: 439,
        desktop: 439
      }
    },
    [TarakanFonts.displace]: {
      key: 'displace',
      name: 'DISPLACE 2.0',
      description: `Лёгкое ощущение омерзения возникает, верно?`,

      width: {
        default: 363,
        mobile: 200,
        tablet: 363,
        desktop: 363
      }

    },
    [TarakanFonts.norbert]: {
      key: 'norbert',
      name: 'NORBERT SCHMAL',
      description: `Кажется, что${nbsp}буквы сложили из${nbsp}тараканьих усов. Б${hyphen}р${hyphen}р${hyphen}р${hyphen}р`,

      width: {
        default: 166,
        mobile: 120,
        tablet: 166,
        desktop: 166
      }

    },
    [TarakanFonts.vast]: {
      key: 'vast',
      name: 'Vast',
      description: `Спокойный и${nbsp}дружелюбный шрифт. Как майский жук, который летит там себе в${nbsp}небе и${nbsp}никого не${nbsp}трогает`,

      width: {
        default: 413,
        mobile: 200,
        tablet: 413,
        desktop: 413
      }
    },
    // [TarakanFonts.cstm]: {
    //   key: 'cstm',
    //   name: 'CSTM Xprmntl 01',
    //   description: `Из${hyphen}за необычных плавных скруглений букв и${nbsp}топорной «к»${nbsp}передается характер слова и${nbsp}появляется ощущение неприязни.`,
    // },
  },
  [Theme.girafe]: {
    [GirafeFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет! Это снова я,${nbsp}один из самых нейтральных и${nbsp}безликих шрифтов на${nbsp}свете`,

      width: {
        default: 315,
        mobile: 193,
        tablet: 315,
        desktop: 315
      }
    },
    [GirafeFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: `Узкий вытянутый шрифт хорошо передает высокий${nbsp}рост и${nbsp}худобу жирафа`,

      width: {
        default: 169,
        mobile: 125,
        tablet: 169,
        desktop: 169
      }
    },
    [GirafeFonts.circe]: {
      key: 'circe',
      name: 'Circe Contrast',
      description: `Из${hyphen}за${nbsp}высокого контраста штрихов и${nbsp}пропорций букв шрифт 
      больше подошёл бы какому${hyphen}нибудь красивому насекомому. Верхние штрихи — прямо как усики у${nbsp}бабочки`,

      width: {
        default: 323,
        mobile: 193,
        tablet: 323,
        desktop: 323
      }
    },
    [GirafeFonts.austin]: {
      key: 'austin',
      name: 'AUSTIN',
      description: `Жираф худой и${nbsp}высокий, а${nbsp}этот шрифт толстый и${nbsp}низкий, хотя и${nbsp}очень красивый`,

      width: {
        default: 369,
        mobile: 193,
        tablet: 369,
        desktop: 369
      }
    },
    [GirafeFonts.vast]: {
      key: 'vast',
      name: 'VAST',
      description: `Жираф худ, высок и${nbsp}изящен, а${nbsp}этот шрифт толст, низок и${nbsp}слишком геометричен`,

      width: {
        default: 440,
        mobile: 200,
        tablet: 440,
        desktop: 440
      }
    },
    [GirafeFonts.fence]: {
      key: 'fence',
      name: 'Fence',
      description: `Тонкие штрихи — это${nbsp}немного про жирафа, но${nbsp}шрифт слишком широкий и${nbsp}приземистый`,

      width: {
        default: 429,
        mobile: 200,
        tablet: 429,
        desktop: 429
      }

    },
  },
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
    mapWordData[Theme.girafe][GirafeFonts.vast],
  ],
  [Theme.tarakan]: [
    mapWordData[Theme.tarakan][TarakanFonts.roboto],
    mapWordData[Theme.tarakan][TarakanFonts.didona],
    mapWordData[Theme.tarakan][TarakanFonts.displace],
    mapWordData[Theme.tarakan][TarakanFonts.norbert],
    mapWordData[Theme.tarakan][TarakanFonts.vast],
  ],
  [Theme.elephant]: [
    mapWordData[Theme.elephant][ElephantFonts.roboto],
    mapWordData[Theme.elephant][ElephantFonts.harry],
    mapWordData[Theme.elephant][ElephantFonts.parmigiano],
    mapWordData[Theme.elephant][ElephantFonts.peace],
    mapWordData[Theme.elephant][ElephantFonts.norbert],
    mapWordData[Theme.elephant][ElephantFonts.normalidad],
  ]
};
