import * as React from 'react';
import { observer } from 'mobx-react';
import { SwiperSlide } from 'swiper/react';

import VerticalSlider from 'components/common/VerticalSlider';
import TaskDescription from 'components/common/TaskDescription';
import Pager from 'components/common/Pager';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';
import { useLocal } from 'utils/hooks';
import FontsMoodStore from 'pages/FontsMood/store';

import FontSlider from './FontSlider';
import { Theme } from './config';

import './FontsMood.modules.scss';

const FontsMood: React.FC = () => {
  const store = useLocal(() => new FontsMoodStore());
  const refs = {
    [Theme.rage] : React.useRef(),
    [Theme.anorexy] : React.useRef(),
    [Theme.rumble] : React.useRef(),

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
      <Pager
        type={LessonType.fonts}
        nextPage={urls.animals}
        previewColor="yellow"
        curveClass="triangle-curve_fonts"
      >
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
      </Pager>
    </>
  );
};

export default observer(FontsMood);
