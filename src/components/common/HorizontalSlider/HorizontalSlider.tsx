import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  isActive: boolean;
  initialSlide: number;
  onSlideChange?: (swiper: any) => void;
  children: React.ReactNode;
};

export const HorizontalSlider: React.FC<Props> = ({
  isActive,
  initialSlide,
  onSlideChange,
  children
}) => {
  return (
    <Swiper
      className={cn(
        'swiper-slider swiper-slider_default swiper-container-h',
        isActive && 'swiper-slider_active'
      )}
      slidesPerView={'auto'}
      speed={700}
      centeredSlides={true}
      loop={true}
      initialSlide={initialSlide}
      onSlideChange={onSlideChange}
    >
      {children}
    </Swiper>
  );
};

HorizontalSlider.defaultProps = {
  onSlideChange: () => {}
};

export default React.memo(HorizontalSlider);
