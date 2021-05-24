export const nbsp = String.fromCharCode(
  160
);

export const hyphen = String.fromCharCode(0x2011);

export enum LessonType {
  fonts = 'fonts',
  colors = 'colors',
  animals = 'animals',
  composition = 'composition'
}

const shareText = 'Посмотрите, как шрифт, цвет и композиция влияют на восприятие и настроение';

export const SITE_LINK = 'http://design-exercises.ru/';

export const TWIITER_LINK = `http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`;
export const FACEBOOK_LINK = `https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`;
