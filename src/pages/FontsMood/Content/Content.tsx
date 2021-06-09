import * as React from 'react';
import { observer } from 'mobx-react';

//@ts-ignore
import { SwiperSlide } from 'swiper/react';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import { nbsp } from 'config/constants';
import VerticalSlider from 'components/common/VerticalSlider/VerticalSlider';

import FontSlider from 'pages/FontsMood/FontSlider/FontSlider';
import { Theme } from 'pages/FontsMood/config';
import { useLocal } from 'utils/hooks';
import FontsMoodStore from 'pages/FontsMood/store';

import './Content.modules.scss';

const Content: React.FC = () => {
  const store = useLocal(() => new FontsMoodStore());
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: шрифт'}
          text={`Подберите шрифт, который подходит к${nbsp}слову`}
        />
      </div>
      <div styleName="bg" />
      <VerticalSlider loop={true} slideChangeTransitionEnd={(swiper => {
        if (swiper.isBeginning) {
          swiper.slideToLoop(2, 0);
        }

        if (swiper.isEnd) {
          swiper.slideToLoop(0, 0);
        }
      })}>
        <SwiperSlide>
          {({ isActive, isNext, isPrev, isDuplicate }) => (
            <FontSlider
              theme={Theme.rage}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.rageIndex}
              onChangeIndex={store.setRageIndex}
              isDuplicate={isDuplicate}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive, isNext, isPrev, isDuplicate }) => (
            <FontSlider
              theme={Theme.anorexy}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.anorexyIndex}
              onChangeIndex={store.setAnorexyIndex}
              isDuplicate={isDuplicate}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive, isNext, isPrev, isDuplicate }) => (
            <FontSlider
              theme={Theme.rumble}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.rumbleIndex}
              onChangeIndex={store.setRumbleIndex}
              isDuplicate={isDuplicate}
            />
          )}
        </SwiperSlide>
      </VerticalSlider>
    </>
  );
};

export default observer(Content);
