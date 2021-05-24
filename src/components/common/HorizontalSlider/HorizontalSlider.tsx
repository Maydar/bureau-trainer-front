import * as React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import cn from 'classnames';
import { Swiper } from 'swiper/react';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  children: React.ReactNode;
};

SwiperCore.use([Navigation]);

export const HorizontalSlider: React.FC<Props> = ({
  isActive,
  initialSlide,
  onSlideChange,
  children
}) => {
  return (
    <>
      <Swiper
        className={cn(
          'swiper-slider swiper-slider_default swiper-container-h',
          isActive && 'swiper-slider_active'
        )}
        slidesPerView={'auto'}
        speed={700}
        navigation={{
          nextEl: '.swiper-nav-next',
          prevEl: '.swiper-nav-prev'
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
      >
        {children}
      </Swiper>
      <div className="swiper-nav-prev"/>
      <div className="swiper-nav-next"/>
    </>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {}
};

export default React.memo(HorizontalSlider);
