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

export const VerticalSlider: React.FC<Props> = ({
  slideChangeTransitionEnd,
  children,
  beforeTransitionStart,
  className,
  onSlideChange,
  nextElClass,
}: Props) => {
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
      loop={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true
      }}
      className={cn('swiper-container-v', className)}
      onSlideChangeTransitionEnd={slideChangeTransitionEnd}
      onSlideChangeTransitionStart={onSlideChange}
      onBeforeTransitionStart={beforeTransitionStart}
      //preventClicks={true}

      //touchEventsTarget={'wrapper'}
      //touchMoveStopPropagation={true}
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
