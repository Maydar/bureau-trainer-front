import { nbsp } from 'config/constants';

export enum Theme {
  rage = 'rage',
  anorexy = 'anorexy',
  // innovation = 'innovation',
  // action = 'action',
  rumble = 'rumble',
  // joke = 'joke',
  // elegant = 'elegant',
}

export enum RageFonts {
  austin = 'austin',
  //edwin = 'edwin',
  pilar = 'pilar',
  roboto = 'roboto',
  vast = 'vast',
  druk = 'druk',
}

export enum AnorexyFonts {
  roboto = 'roboto',
  faturn = 'faturn',
  fence = 'fence',
  palkerson = 'palkerson',
  norbert = 'norbert',
  parmigiano = 'parmigiano',
}

export enum RumbleFonts {
  roboto = 'roboto',
  cstm = 'cstm',
  didona = 'didona',
  druk = 'druk',
  karloff = 'karloff',
  stag = 'stag',
}

export const mapWordData = {
  [Theme.rage]: {
    [RageFonts.austin]: {
      key: 'austin',
      name: 'Austin',
      description: `Насыщенность букв хорошо передает настроение слова, 
      но${nbsp}элегантность шрифта перетягивает 
      на${nbsp}себя${nbsp}внимание.`,
    },
    [RageFonts.pilar]: {
      key: 'pilar',
      name: 'Pilar',
      description: `Плотные темные буквы ассоциируются с гневом, 
      но${nbsp}из-за${nbsp}забавных скруглений 
      и${nbsp}элементов внутри букв ощущение сходит на${nbsp}нет.`,
    },
    [RageFonts.vast]: {
      key: 'vast',
      name: 'Vast',
      description: `Широкие буквы с${nbsp}тонкими линиями выглядит спокойно и${nbsp}не${nbsp}подходят гневу.`,
    },
    [RageFonts.druk]: {
      key: 'druk',
      name: 'Druk',
      description: `Слово выглядит массивным 
      и${nbsp}мрачным, 
      как${nbsp}потемневший от${nbsp}гнева человек.`,
    },
    [RageFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Шрифт 
      не${nbsp}поддерживает настроение слова 
      и${nbsp}ничего не${nbsp}выражает.`,
    },
  },
  [Theme.anorexy]: {
    [AnorexyFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Шрифт 
      не${nbsp}поддерживает настроение слова 
      и${nbsp}ничего 
      не${nbsp}выражает.`,
    },
    [AnorexyFonts.faturn]: {
      key: 'fatum',
      name: 'Fatum',
      description: `Очень массивный шрифт для${nbsp}анорексии.`,
    },
    [AnorexyFonts.palkerson]: {
      key: 'palkerson',
      name: 'Mr Palkerson',
      description: `Узкие буквы и${nbsp}тончайшие штрихи — это${nbsp}то,${nbsp}что${nbsp}надо для${nbsp}передачи ощущения болезненной худобы.`,
    },
    [AnorexyFonts.fence]: {
      key: 'fence',
      name: 'Fence',
      description: `Толстенные буквы — это${nbsp}совсем не${nbsp}прохудобу.`,
    },
    [AnorexyFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description:
        'Узкие буквы с вытянутыми вверх линиями равномерной толщины подчеркивают худобу',
    },
    [AnorexyFonts.parmigiano]: {
      key: 'parmigiano',
      name: 'Parmigiano Caption Pro',
      description: `Шрифт слишком правильный и${nbsp}аккуратный, чтобы быть про${nbsp}анорексию.`,
    },
  },
  [Theme.rumble]: {
    [RumbleFonts.cstm]: {
      key: 'cstm',
      name: 'CSTM Xprmntl 01',
      description: `У букв разная ширина и${nbsp}они${nbsp}отличаются 
      по стилю,${nbsp}как-будто собраны из${nbsp}разных шрифтов.`,
    },

    [RumbleFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Шрифт 
      не${nbsp}поддерживает настроение слова 
      и${nbsp}ничего 
      не${nbsp}выражает.`,
    },

    [RumbleFonts.didona]: {
      key: 'didona',
      name: 'Didona',
      description: `Шрифт с${nbsp}засечками выглядит классическим и${nbsp}опрятным.`,
    },

    [RumbleFonts.druk]: {
      key: 'druk',
      name: 'Druk',
      description: `Уравновешенный шрифт с${nbsp}ровными буквами — это${nbsp}скорее про${nbsp}порядок.`,
    },

    [RumbleFonts.karloff]: {
      key: 'karloff',
      name: 'KARLOFF NEUTRAL',
      description: `Шрифт как${nbsp}у${nbsp}пишущей машинки выглядит немного старомодно и${nbsp}не${nbsp}поддерживает ощущение бардака.`,
    },

    [RumbleFonts.stag]: {
      key: 'stag',
      name: 'STAG',
      description: `Шрифт массивный и${nbsp}жирный, но${nbsp}аккуратный.`,
    },
  },
};

export const mapToArrayWordData = {
  [Theme.anorexy]: [
    mapWordData[Theme.anorexy][AnorexyFonts.roboto],
    mapWordData[Theme.anorexy][AnorexyFonts.faturn],
    mapWordData[Theme.anorexy][AnorexyFonts.palkerson],
    mapWordData[Theme.anorexy][AnorexyFonts.fence],
    mapWordData[Theme.anorexy][AnorexyFonts.norbert],
    mapWordData[Theme.anorexy][AnorexyFonts.parmigiano],
  ],
  [Theme.rage]: [
    mapWordData[Theme.rage][RageFonts.roboto],
    mapWordData[Theme.rage][RageFonts.austin],
    //mapWordData[Theme.rage][RageFonts.edwin],
    mapWordData[Theme.rage][RageFonts.pilar],
    mapWordData[Theme.rage][RageFonts.vast],
    mapWordData[Theme.rage][RageFonts.druk],
  ],
  [Theme.rumble]: [
    mapWordData[Theme.rumble][RumbleFonts.roboto],
    mapWordData[Theme.rumble][RumbleFonts.cstm],
    mapWordData[Theme.rumble][RumbleFonts.druk],
    mapWordData[Theme.rumble][RumbleFonts.didona],
    mapWordData[Theme.rumble][RumbleFonts.stag],
    mapWordData[Theme.rumble][RumbleFonts.karloff],
  ],
};
