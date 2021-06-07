import * as React from 'react';
import { SwiperSlide } from 'swiper/react';

import VerticalSlider from 'components/common/VerticalSlider';
import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import AnimalSlider from '../AnimalSlider';
import { Theme } from '../config';

import './Content.modules.scss';


const Content: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: животные'}
          text={`Выберите шрифт, который подходит животному`}
        />
      </div>
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
