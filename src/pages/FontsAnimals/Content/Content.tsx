import * as React from 'react';
import { SwiperSlide } from 'swiper/react';

import VerticalSlider from 'components/common/VerticalSlider';

import AnimalSlider from '../AnimalSlider';
import { Theme } from '../config';

import './Content.modules.scss';

const Content: React.FC = () => {
  return (
    <>
      <div styleName="content_bg" />
      <div styleName="content">
        <VerticalSlider>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.bear}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.girafe}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.tarakan}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.elephant}
              />
            )}
          </SwiperSlide>
        </VerticalSlider>
      </div>
    </>
  );
};

export default React.memo(Content);
