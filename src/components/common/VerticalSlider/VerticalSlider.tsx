import * as React from 'react';
import { Swiper } from 'swiper/react';

import SwiperCore, { Mousewheel } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Mousewheel]);

type Props = {
  slideChangeTransitionEnd?: (swiper: any) => void;
  children: React.ReactNode;
};

export const VerticalSlider: React.FC<Props> = ({
  slideChangeTransitionEnd,
  children,
}: Props) => {
  return (
    <Swiper
      direction={'vertical'}
      mousewheel={{
        sensitivity: 0.1,
      }}
      slidesPerView={"auto"}
      speed={700}
      centeredSlides={true}
      loop={false}
      className="swiper-container-v"
      onSlideChangeTransitionEnd={slideChangeTransitionEnd}
    >
      {children}
    </Swiper>
  );
};

VerticalSlider.defaultProps = {
  slideChangeTransitionEnd: () => {},
};

export default React.memo(VerticalSlider);
