import * as React from 'react';
import SwiperCore, { Navigation, Keyboard, Mousewheel } from 'swiper';
import cn from 'classnames';
import { Swiper } from 'swiper/react';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  onResize?: (swiper: any) => void;
  onSlideChangeTransitionStart?: (swiper: any) => void;
  onInit?: (swiper: any) => void;
  children: React.ReactNode;
  navKey: string;
  forwardRef?: any;
  className?: string
};

SwiperCore.use([Navigation, Keyboard, Mousewheel]);

export const HorizontalSlider: React.FC<Props> = ({
  isActive,
  initialSlide,
  onSlideChange,
  onResize,
  navKey,
  onInit,
  onSlideChangeTransitionStart,
  children,
  forwardRef,
  className
}) => {
  return (
    <>
      <Swiper
        className={cn(
          'swiper-slider swiper-slider_default swiper-container-h',
          isActive && 'swiper-slider_active',
          'horizontal',
          className
        )}
        slidesPerView={1}
        speed={700}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        loopedSlides={3}
        onInit={onInit}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onResize={onResize}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        // @ts-ignore
        ref={forwardRef}
      >
        {children}
      </Swiper>
    </>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {},
  onInit: () => {},
  className: null
};

export default React.memo(HorizontalSlider);
