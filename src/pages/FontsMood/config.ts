import { hyphen, nbsp } from 'config/constants';

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
  edwin = 'edwin',
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
      description: `Жирное начертание ассоциируется с${nbsp}гневом, но${nbsp}эту ассоциацию побеждает элегантность форм`,
    },
    [RageFonts.pilar]: {
      key: 'pilar',
      name: 'Pilar',
      description: `Плотные темные буквы могли бы${nbsp}ассоциироваться с${nbsp}гневом, но${nbsp}из${hyphen}за${nbsp}забавных скруглений ощущение сходит на${nbsp}нет`,
    },
    [RageFonts.vast]: {
      key: 'vast',
      name: 'Vast',
      description: `Набранное супертонким шрифтом слово выглядит спокойным и${nbsp}расслабленным. Расслабься и${nbsp}ты,${nbsp}бро`,
    },

    [RageFonts.edwin]: {
      key: 'edwin',
      name: 'Eldwin',
      description: `Никто не${nbsp}злится. Как будто написанное от${nbsp}руки слово ассоциируется с${nbsp}пироженками, детскими книгами и${nbsp}праздником`,
    },
    [RageFonts.druk]: {
      key: 'druk',
      name: 'Druk',
      description: `О да!${nbsp}Слово выглядит массивным и${nbsp}насупленным, как${nbsp}очень разозлённый человек`,
    },
    [RageFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет! Я${nbsp}один из${nbsp}самых нейтральных и${nbsp}безликих шрифтов на свете. 
      Какое слово мной ни${nbsp}набери, я${nbsp}ничего не${nbsp}буду выражать. Поэтому оставьте меня для${nbsp}Андроида, а${nbsp}для${nbsp}выразительности выберите что${hyphen}то${nbsp}другое`,
    },
  },
  [Theme.anorexy]: {
    [AnorexyFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет! Это снова я,${nbsp}один из${nbsp}самых нейтральных и${nbsp}безликих шрифтов на${nbsp}свете`,
    },
    [AnorexyFonts.faturn]: {
      key: 'fatum',
      name: 'Fatum',
      description: `Не${hyphen}не,${nbsp}тут${nbsp}кто${hyphen}то${nbsp}наоборот переел`,
    },
    [AnorexyFonts.palkerson]: {
      key: 'palkerson',
      name: 'Mr Palkerson',
      description: `О${nbsp}да! Скорее дайте${nbsp}ему${nbsp}бургер`,
    },
    [AnorexyFonts.fence]: {
      key: 'fence',
      name: 'Fence',
      description: `Толстенные буквы — это${nbsp}совсем не${nbsp}про${nbsp}худобу`,
    },
    [AnorexyFonts.norbert]: {
      key: 'norbert',
      name: 'Norbert Schmal',
      description: `Да, узкие буквы напоминают об${nbsp}очень худом человеке, но${nbsp}штрихи могли бы${nbsp}быть и${nbsp}тоньше`,
    },
    [AnorexyFonts.parmigiano]: {
      key: 'parmigiano',
      name: 'Parmigiano Caption Pro',
      description: `Шрифт слишком правильный и${nbsp}обычный, чтобы${nbsp}напоминать анорексию. Тут у${nbsp}нас просто какой${hyphen}то средний в${nbsp}меру упитанный и${nbsp}аккуратно одетый человечек`,
    },
  },
  [Theme.rumble]: {
    [RumbleFonts.cstm]: {
      key: 'cstm',
      name: 'CSTM Xprmntl 01',
      description: `У${nbsp}букв разная ширина и${nbsp}они стараются выглядеть разнообразно, будто хаотично разбросанные в${nbsp}комнате вещи. Барда${hyphen}а${hyphen}ак`,
    },

    [RumbleFonts.roboto]: {
      key: 'roboto',
      name: 'Roboto',
      description: `Привет!... Ну вы поняли`,
    },

    [RumbleFonts.didona]: {
      key: 'didona',
      name: 'Didona',
      description: `Слишком аккуратно и${nbsp}элегантно. Выглядит как${nbsp}название дома моды «Бардак»`,
    },

    [RumbleFonts.druk]: {
      key: 'druk',
      name: 'Druk',
      description: `Всё слишком стройно, ровно и${nbsp}упорядоченно. Порядок, а${nbsp}не${nbsp}бардак`,
    },

    [RumbleFonts.karloff]: {
      key: 'karloff',
      name: 'KARLOFF NEUTRAL',
      description: `Шрифт как${nbsp}у${nbsp}пишущей машинки выглядит немного старомодно и${nbsp}небардачно`,
    },

    [RumbleFonts.stag]: {
      key: 'stag',
      name: 'STAG',
      description: `Массивно и${nbsp}не${nbsp}слишком строго, но${nbsp}всё${hyphen}таки чересчур аккуратно для${nbsp}бардака`,
    },
  },
};

export const mapToArrayWordData = {
  [Theme.anorexy]: [
    mapWordData[Theme.anorexy][AnorexyFonts.roboto],
    mapWordData[Theme.anorexy][AnorexyFonts.norbert],
    mapWordData[Theme.anorexy][AnorexyFonts.fence],
    mapWordData[Theme.anorexy][AnorexyFonts.parmigiano],
    mapWordData[Theme.anorexy][AnorexyFonts.faturn],
    mapWordData[Theme.anorexy][AnorexyFonts.palkerson],
  ],
  [Theme.rage]: [
    mapWordData[Theme.rage][RageFonts.roboto],
    mapWordData[Theme.rage][RageFonts.edwin],
    mapWordData[Theme.rage][RageFonts.druk],
    mapWordData[Theme.rage][RageFonts.vast],
    mapWordData[Theme.rage][RageFonts.pilar],
    mapWordData[Theme.rage][RageFonts.austin],
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
