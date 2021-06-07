// @ts-ignore
const Breakpoint = {
  TABLET: 768,
  DESKTOP: 1024,
};

export const setPicWidth = (themeClass: string) => {
  const pics = document.querySelectorAll(`.${themeClass} .h-frame-pic`);
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth > Breakpoint.DESKTOP) {
    pics.forEach((pic) => {
      // @ts-ignore
      pic.style.width = `${pic.dataset.widthDesktop}px`;
    });
  } else if (screenWidth > Breakpoint.TABLET) {
    pics.forEach((pic) => {
      // @ts-ignore
      pic.style.width = `${pic.dataset.widthTablet}px`;
    });
  } else {
    pics.forEach((pic) => {

      // @ts-ignore
      pic.style.width = `${pic.dataset.widthMobile}px`;
    });
  }
};

export const calculateHorizontalShift = (frame: any, pic: any) => {
  const GAP = 20;

  const frameWidth = frame.clientWidth;
  const framePicWidth = pic.clientWidth;

  return frameWidth / 2 - framePicWidth / 2 + GAP;
};

export const applyHorizontalShift = (themeClass: string) => {
  const prevFrame = document.querySelector(
    `.${themeClass} .swiper-slide-prev .h-frame`
  );
  const currentFrame = document.querySelector(
    `.${themeClass} .swiper-slide-active .h-frame`
  );
  const nextFrame = document.querySelector(
    `.${themeClass} .swiper-slide-next .h-frame`
  );

  if (prevFrame) {
    const shift = calculateHorizontalShift(
      prevFrame,
      prevFrame.querySelector('.h-frame-pic')
    );
    // @ts-ignore
    prevFrame.style.transform = `translateX(${shift}px)`;
  }

  if (currentFrame) {
    // @ts-ignore
    currentFrame.style.transform = `translateX(0px)`;
  }

  if (nextFrame) {
    const shift = calculateHorizontalShift(
      nextFrame,
      nextFrame.querySelector('.h-frame-pic')
    );
    // @ts-ignore
    nextFrame.style.transform = `translateX(-${shift}px)`;
  }
};
