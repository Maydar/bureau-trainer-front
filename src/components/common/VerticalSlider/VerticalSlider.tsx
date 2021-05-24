import * as React from 'react';
import { Swiper } from 'swiper/react';

import cn from 'classnames';

import SwiperCore, { Mousewheel, Navigation } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Mousewheel, Navigation]);

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
      slidesPerView={1}
      navigation={{
        nextEl: nextElClass,
      }}
      speed={700}
      centeredSlides={true}
      loop={true}
      className={cn('swiper-container-v', className)}
      onSlideChangeTransitionEnd={slideChangeTransitionEnd}
      onSlideChangeTransitionStart={onSlideChange}
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
