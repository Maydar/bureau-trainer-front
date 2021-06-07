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
  const refs = {
    [Theme.rage]: React.useRef(),
    [Theme.anorexy]: React.useRef(),
    [Theme.rumble]: React.useRef(),
  };
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: шрифт'}
          text={`Подберите шрифт, который подходит к${nbsp}слову`}
        />
      </div>
      <div styleName="bg" />
      <VerticalSlider>
        <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
            <FontSlider
              theme={Theme.rage}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.rageIndex}
              onChangeIndex={store.setRageIndex}
              forwardRef={refs[Theme.rage]}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
            <FontSlider
              theme={Theme.anorexy}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.anorexyIndex}
              onChangeIndex={store.setAnorexyIndex}
              forwardRef={refs[Theme.anorexy]}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
            <FontSlider
              theme={Theme.rumble}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              currentIndex={store.rumbleIndex}
              onChangeIndex={store.setRumbleIndex}
              forwardRef={refs[Theme.rumble]}
            />
          )}
        </SwiperSlide>
      </VerticalSlider>
    </>
  );
};

export default observer(Content);
