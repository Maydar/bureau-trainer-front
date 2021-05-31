import * as React from 'react';
import SwiperCore, { Navigation, Keyboard, Mousewheel } from 'swiper';
import cn from 'classnames';
import { Swiper } from 'swiper/react';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  children: React.ReactNode;
  navKey: string;
};

SwiperCore.use([Navigation, Keyboard, Mousewheel]);

export const HorizontalSlider: React.FC<Props> = ({
  isActive,
  initialSlide,
  onSlideChange,
  navKey,
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
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        loopedSlides={2}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
        keyboard={{
          enabled: true,
          onlyInViewport: true
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {}
};

export default React.memo(HorizontalSlider);
