import * as React from 'react';
import { Swiper } from 'swiper/react';
import cn from 'classnames';

import SwiperCore, { Mousewheel } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Mousewheel]);

type Props = {
  slideChangeTransitionEnd?: (swiper: any) => void;
  children: React.ReactNode;
  className?: string,
};

export const VerticalSlider: React.FC<Props> = ({
  slideChangeTransitionEnd,
  children,
  className
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
      loop={true}
      className={cn(
        "swiper-container-v",
        className
      )}
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
