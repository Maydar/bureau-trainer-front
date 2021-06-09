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
  loop?: boolean;
};

const switchNextClass = () => {
  const slideWrapperCurrent = document.querySelectorAll(
    `.swiper-container-v .swiper-slide-active .swiper-slide.swiper-slide .h-frame-wrapper`
  );
  const slidePicContainerCurrent = document.querySelectorAll(
    `.swiper-container-v .swiper-slide-active .swiper-slide.swiper-slide .h-frame-pic`
  );

  const slideWrapperNext = document.querySelectorAll(
    `.swiper-container-v .swiper-slide-next .swiper-slide.swiper-slide .h-frame-wrapper`
  );


  const slidePicContainerNext = document.querySelectorAll(
    `.swiper-container-v .swiper-slide-next .swiper-slide.swiper-slide .h-frame-pic`
  );

  if (slideWrapperNext && slidePicContainerNext) {
    slideWrapperNext.forEach(slide => {
      slide.classList.add('h-frame-wrapper-next-slide')
    });
    slidePicContainerNext.forEach(slide => {
      slide.classList.add('h-frame-pic-next-slide');
    })
  }

  if (slideWrapperCurrent && slidePicContainerCurrent) {
    slideWrapperCurrent.forEach(slide => {
      slide.classList.remove('h-frame-wrapper-next-slide');
    });
    slidePicContainerCurrent.forEach(slide => {
      slide.classList.remove('h-frame-pic-next-slide');
    });
  }
};

export const VerticalSlider: React.FC<Props> = ({
  slideChangeTransitionEnd,
  children,
  beforeTransitionStart,
  className,
  onSlideChange: onSlideChangeTransitionStart,
  nextElClass,
  loop
}: Props) => {
  const onSlideChangeTransition = (swiper: any) => {
    slideChangeTransitionEnd(swiper);
  };

  const slideChangeTransitionStart = (swiper: any) => {
    onSlideChangeTransitionStart(swiper);
    switchNextClass();
  };

  return (
    <Swiper
      direction={'vertical'}
      mousewheel={{
        sensitivity: 0.1,
        thresholdDelta: 10,
        forceToAxis: true
      }}
      slidesPerView={'auto'}
      navigation={{
        nextEl: nextElClass,
      }}
      loop={loop}
      loopedSlides={loop ? 1 : null}
      speed={700}
      centeredSlides={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      className={cn('swiper-container-v', className)}
      onSlideChangeTransitionEnd={onSlideChangeTransition}
      onSlideChangeTransitionStart={slideChangeTransitionStart}
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
  loop: false
};

export default React.memo(VerticalSlider);
