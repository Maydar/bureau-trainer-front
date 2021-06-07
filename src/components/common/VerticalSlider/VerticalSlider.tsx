import * as React from 'react';
import { Swiper } from 'swiper/react';

import cn from 'classnames';

import SwiperCore, { Mousewheel, Navigation, Keyboard } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Mousewheel, Navigation, Keyboard]);

type Props = {
  slideChangeTransitionEnd?: (swiper: any) => void;
  children: React.ReactNode;
  className?: string;
  nextElClass?: string;
  beforeTransitionStart?: (swiper: any) => void;
  onSlideChange?: (swiper: any) => void;
};

const switchNextClass = () => {
  const slideWrapperCurrent = document.querySelector(
    `.swiper-container-v .swiper-slide-active .swiper-slide.swiper-slide-active .h-frame-wrapper`
  );
  const slidePicContainerCurrent = document.querySelector(
    `.swiper-container-v .swiper-slide-active .swiper-slide.swiper-slide-active .h-frame-pic`
  );

  const slideWrapperNext = document.querySelector(
    `.swiper-container-v .swiper-slide-next .swiper-slide.swiper-slide-active .h-frame-wrapper`
  );


  const slidePicContainerNext = document.querySelector(
    `.swiper-container-v .swiper-slide-next .swiper-slide.swiper-slide-active .h-frame-pic`
  );

  if (slideWrapperNext && slidePicContainerNext) {
    slideWrapperNext.classList.add('h-frame-wrapper-next-slide');
    slidePicContainerNext.classList.add('h-frame-pic-next-slide');
  }

  if (slideWrapperCurrent && slidePicContainerCurrent) {
    slideWrapperCurrent.classList.remove('h-frame-wrapper-next-slide');
    slidePicContainerCurrent.classList.remove('h-frame-pic-next-slide');
  }
};

export const VerticalSlider: React.FC<Props> = ({
  slideChangeTransitionEnd,
  children,
  beforeTransitionStart,
  className,
  onSlideChange: onSlideChangeTransitionStart,
  nextElClass,
}: Props) => {
  const onSlideChangeTransition = (swiper: any) => {
    slideChangeTransitionEnd(swiper);
    switchNextClass();
  };

  return (
    <Swiper
      direction={'vertical'}
      mousewheel={{
        sensitivity: 0.1,
      }}
      slidesPerView={'auto'}
      navigation={{
        nextEl: nextElClass,
      }}
      speed={700}
      centeredSlides={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      className={cn('swiper-container-v', className)}
      onSlideChangeTransitionEnd={onSlideChangeTransition}
      onSlideChangeTransitionStart={onSlideChangeTransitionStart}
      onAfterInit={switchNextClass}
      onBeforeTransitionStart={beforeTransitionStart}
    >
      {children}
    </Swiper>
  );
};

VerticalSlider.defaultProps = {
  slideChangeTransitionEnd: () => {},
  beforeTransitionStart: () => {},
  onSlideChange: () => {},
  nextElClass: '.swiper-next-el-v',
};

export default React.memo(VerticalSlider);
