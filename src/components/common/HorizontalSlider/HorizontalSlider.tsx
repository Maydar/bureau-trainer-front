import * as React from 'react';
import SwiperCore, { Navigation, Keyboard, Mousewheel } from 'swiper';
import cn from 'classnames';
import { Swiper } from 'swiper/react';
import { useSize } from 'utils/hooks';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  onResize?: (swiper: any) => void;
  onSlideChangeTransitionStart?: (swiper: any) => void;
  onSlideChangeTransitionEnd?: (swiper: any) => void;
  keyboardEnabled: boolean;
  onInit?: (swiper: any) => void;
  children: React.ReactNode;
  navKey: string;
  forwardRef?: any;
  className?: string;
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
  onSlideChangeTransitionEnd,
  children,
  forwardRef,
  className,
  keyboardEnabled
}) => {
  const { isMobile } = useSize();
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
        mousewheel={{
          sensitivity: 0.1,
          //thresholdDelta: 10,
          forceToAxis: true
        }}
        grabCursor={true}
        followFinger={!isMobile}
        preventInteractionOnTransition={true}
        allowTouchMove={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={1}
        onInit={onInit}
        navigation={{
          nextEl: `.swiper-next-el_${navKey}`,
          prevEl: `.swiper-prev-el_${navKey}`,
        }}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
        onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onResize={onResize}
        keyboard={{
          enabled: keyboardEnabled,
          onlyInViewport: true,
        }}
        // @ts-ignore
        ref={forwardRef}
      >
        {children}
      </Swiper>
      <div className={`swiper-prev-el swiper-prev-el_${navKey}`} />
      <div className={`swiper-next-el swiper-next-el_${navKey}`} />
    </>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {},
  onSlideChangeTransitionEnd: () => {},
  onInit: () => {},
  keyboardEnabled: false,
  className: null,
};

export default React.memo(HorizontalSlider);
