import * as React from 'react';
import { observer } from 'mobx-react';
import { SwiperSlide } from 'swiper/react';

import Pager from 'components/common/Pager';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import VerticalSlider from 'components/common/VerticalSlider';
import { LessonType } from 'config/constants';
import urls from 'config/urls';

import AnimalSlider from './AnimalSlider';
import { Theme } from './config';

import './FontsAnimals.modules.scss';

const FontsAnimals: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: животные'}
          text={`Выберите шрифт, который подходит животному`}
        />
      </div>
      <div styleName="content_bg"/>
      <Pager
        type={LessonType.animals}
        nextPage={urls.colors}
        previewColor="green"
      >
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

      </Pager>
    </>
  );
};

export default observer(FontsAnimals);
