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
      name: 'Vast',
      description: `Медведь большой, толстый и${nbsp}злой, а${nbsp}тут тоненькие буквы. Какая${hyphen}то цапля, а${nbsp}не${nbsp}медведь`,
    },
    [BearFonts.kudryashev]: {
      key: 'kudryashev',
      name: 'Kudryashev Display',
      description: `А${nbsp}это${nbsp}медведь, который три года ничего не${nbsp}ел, а${nbsp}потом сходил в${nbsp}салон красоты, где из${nbsp}него сделали пуделя: слишком тонкие буквы и${nbsp}изящные засечки`,
    },
    [BearFonts.amalta]: {
      key: 'amalta',
      name: 'Amalta',
      description: `О да!${nbsp}Толстые штрихи, непрямоугольные засечки, грубые формы — этот шрифт так${nbsp}ипросится в${nbsp}берлогу`,
    },
    [BearFonts.misto]: {
      key: 'misto',
      name: 'Misto',
      description: `Геометричные формы подошли бы${nbsp}для${nbsp}неодушевлённого предмета. Например, если бы${nbsp}мы${nbsp}захотели выпускать журнал о${nbsp}ракетостроении «Медведь»`,
    },
    [BearFonts.playfair]: {
      key: 'playfair',
      name: 'Playfair Display',
      description: `Слишком тонко и${nbsp}элегантно для${nbsp}медведя`,
    },
    [BearFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет! Я${nbsp}один из${nbsp}самых нейтральных и${nbsp}безликих шрифтов на${nbsp}свете. 
      Какое слово мной ни${nbsp}набери, я${nbsp}ничего не${nbsp}буду выражать. 
      Поэтому оставьте меня для${nbsp}Андроида, а${nbsp}для${nbsp}выразительности выберите что${hyphen}то${nbsp}другое`,
    },
  },
  [Theme.elephant]: {
    [ElephantFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Ку${hyphen}ку`,
    },
    [ElephantFonts.harry]: {
      key: 'harry',
      name: 'Harry Plotter',
      description: `Засечки напоминают ноги слона, а${nbsp}ножка у${nbsp}буквы «л» — хобот, но${nbsp}шрифту не${nbsp}хватает массы, ведь слон толстый и${nbsp}большой`
    },
    [ElephantFonts.parmigiano]: {
      key: 'parmigiano',
      name: 'PARMIGIANO CAPTION PRO',
      description: `Жирное начертание — это${nbsp}хорошо, но${nbsp}элегантые засечки и${nbsp}контраст штрихов сводит ощущения слона на${nbsp}нет`
    },
    [ElephantFonts.peace]: {
      key: 'peace',
      name: 'Peace Sans',
      description: `Ту${hyphen}ту${hyphen}ру! Вот он,${nbsp}большой, толстый, округлый слон. А${nbsp}левая нога у${nbsp}«л»${nbsp}ещё и${nbsp}хобот напоминает`
    },
    [ElephantFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: `Слон большой и${nbsp}толстый, а${nbsp}шрифт — тонкий и${nbsp}высокий. Не слон`
    },
    [ElephantFonts.normalidad]: {
      key: 'normalidad',
      name: 'NORMALIDAD EXTENDED',
      description: `Широкие буквы — это${nbsp}хорошо, но${nbsp}для${nbsp}слоновьести им${nbsp}нужно быть жирнее раза в${nbsp}три`
    }
  },

  [Theme.tarakan]: {
    [TarakanFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет!...${nbsp}Ну${nbsp}вы${nbsp}поняли`,
    },
    [TarakanFonts.didona]: {
      key: 'didona',
      name: 'Didona',
      description: `Элегантный шрифт мог бы${nbsp}подойти, 
      если бы${nbsp}мы${nbsp}стали выпускать духи с${nbsp}таким названием, но${nbsp}в${nbsp}обычной ситуации совсем не ${nbsp}ссоциируется с${nbsp}грязным домашним вредителем`,
    },
    [TarakanFonts.displace]: {
      key: 'displace',
      name: 'Displace 2.0',
      description: `Лёгкое ощущение омерзения возникает, верно?`,
    },
    [TarakanFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: `Кажется, что${nbsp}буквы сложили из${nbsp}тараканьих усов. Б${hyphen}р${hyphen}р${hyphen}р${hyphen}р`,
    },
    [TarakanFonts.vast]: {
      key: 'vast',
      name: 'Vast',
      description: `Спокойный и${nbsp}дружелюбный шрифт. Как майский жук, который летит там себе в${nbsp}небе и${nbsp}никого не${nbsp}трогает`,
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
    },
    [GirafeFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: `Узкий вытянутый шрифт хорошо передает высокий рост и${nbsp}худобу жирафа`,
    },
    [GirafeFonts.circe]: {
      key: 'circe',
      name: 'Circe Contrast',
      description: `Из${hyphen}за${nbsp}высокого контраста штрихов и${nbsp}пропорций букв шрифт 
      больше подошёл бы какому${hyphen}нибудь красивому насекомому. Верхние штрихи — прямо как усики у${nbsp}бабочки`,
    },
    [GirafeFonts.austin]: {
      key: 'austin',
      name: 'Austin',
      description: `Жираф худой и${nbsp}высокий, а${nbsp}этот шрифт толстый и${nbsp}низкий, хотя и${nbsp}очень красивый`,
    },
    [GirafeFonts.vast]: {
      key: 'vast',
      name: 'Vast',
      description: `Жираф худ, высок и${nbsp}изящен, а${nbsp}этот шрифт толст, низок и${nbsp}слишком геометричен`,
    },
    [GirafeFonts.fence]: {
      key: 'fence',
      name: 'Fence',
      description: `Тонкие штрихи — это${nbsp}немного про жирафа, но${nbsp}шрифт слишком широкий и${nbsp}приземистый`,
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
   // mapWordData[Theme.tarakan][TarakanFonts.cstm],
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
