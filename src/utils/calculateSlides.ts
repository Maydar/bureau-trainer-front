// @ts-ignore
const Breakpoint = {
  TABLET: 768,
  DESKTOP: 1024,
};

const transitionClass = 'h-frame_without-transition';

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
  const screenWidth = document.documentElement.clientWidth;
  const GAP = screenWidth > Breakpoint.TABLET ? 50 : 20;


  const frameWidth = frame.clientWidth;
  const framePicWidth = pic.clientWidth;

  return frameWidth / 2 - framePicWidth / 2 + GAP;
};

export const applyHorizontalShift = (themeClass: string, withoutTransition: boolean = false) => {
  const prevFrames = document.querySelectorAll(
    `.${themeClass} .swiper-slide-prev .h-frame`
  );
  const currentFrames = document.querySelectorAll(
    `.${themeClass} .swiper-slide-active .h-frame`
  );
  const nextFrames = document.querySelectorAll(
    `.${themeClass} .swiper-slide-next .h-frame`
  );

  if (prevFrames) {
    prevFrames.forEach((prevFrame) => {
      const shift = calculateHorizontalShift(
        prevFrame,
        prevFrame.querySelector('.h-frame-pic')
      );

      if (withoutTransition) {
        prevFrame.classList.add(transitionClass)
      } else {
        prevFrame.classList.remove(transitionClass);
      }

      // @ts-ignore
      prevFrame.style.transform = `translateX(${shift}px)`;
    })
  }

  if (currentFrames) {
    currentFrames.forEach((currentFrame) => {
      if (withoutTransition) {
        currentFrame.classList.add(transitionClass)
      } else {
        currentFrame.classList.remove(transitionClass);
      }
      // @ts-ignore
      currentFrame.style.transform = `translateX(0px)`;
    })
  }

  if (nextFrames) {
    nextFrames.forEach((nextFrame) => {
      const shift = calculateHorizontalShift(
        nextFrame,
        nextFrame.querySelector('.h-frame-pic')
      );

      if (withoutTransition) {
        nextFrame.classList.add(transitionClass)
      } else {
        nextFrame.classList.remove(transitionClass);
      }

      // @ts-ignore
      nextFrame.style.transform = `translateX(-${shift}px)`;
    })
  }
};
