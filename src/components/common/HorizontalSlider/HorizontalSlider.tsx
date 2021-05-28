import * as React from 'react';
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import cn from 'classnames';
import { Swiper } from 'swiper/react';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  children: React.ReactNode;
  navKey: string;
};

SwiperCore.use([Navigation, Keyboard]);

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
        slidesPerView={1}
        speed={700}
        navigation={{
          nextEl: `.swiper-nav-next_${navKey}`,
          prevEl: `.swiper-nav-prev_${navKey}`
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
        keyboard={{
          enabled: true,
          onlyInViewport: true
        }}
      >
        {children}
      </Swiper>
      <div className={`swiper-nav-prev swiper-nav-prev_${navKey}`}/>
      <div className={`swiper-nav-next swiper-nav-next_${navKey}`}/>
    </>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {}
};

export default React.memo(HorizontalSlider);
