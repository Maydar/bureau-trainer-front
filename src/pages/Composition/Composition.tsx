import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Direction, getTrackBackground, Range } from 'react-range';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import Pager from 'components/common/Pager';
import { SwiperSlide } from 'swiper/react';
import VerticalSlider from 'components/common/VerticalSlider';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';
import { useLocal, useSize } from 'utils/hooks';

import ObjectPage from './ObjectPage';
import { Orientation, Theme, mapPositionText, Position } from './config';

import CompositionStore from './store';

import './Composition.modules.scss';

const STEP = 1;
const MIN = 0;
const MAX = 1000;

//todo вынести отсюда
const getPositionText = (percentage: number, theme: Theme) => {
  if (percentage <= 35) {
    return mapPositionText[theme][Position.topLeft];
  }

  if (percentage > 30 && percentage <= 65) {
    return mapPositionText[theme][Position.middle];
  }

  if (percentage > 65) {
    return mapPositionText[theme][Position.rightBottom];
  }

  return mapPositionText[theme][Position.topLeft];
};

const Composition: React.FC = () => {
  const compositionStore = useLocal(() => new CompositionStore());
  const { isMobile } = useSize();
  const position =
    compositionStore.pages[compositionStore.currentTheme].position;

  return (
    <>
      <div className="task-description">
        <TaskDescription
          color="black"
          title={'Упражнение: композиция'}
          text={`Подвигайте объект на${nbsp}странице и${nbsp}посмотрите, как${nbsp}меняется восприятие.`}
        />
      </div>
      <div styleName="content_bg"/>
      <Pager
        nextPage={urls.success}
        type={LessonType.composition}
        previewColor="black"
      >
        <div styleName="content">
          <VerticalSlider
            className={'swiper-container-composition'}
            slideChangeTransitionEnd={(swiper) => {
              compositionStore.setTheme(
                compositionStore.order[swiper.realIndex]
              );
            }}
          >
            <SwiperSlide>
              <ObjectPage
                theme={Theme.car}
                position={compositionStore.pages[Theme.car].position}
                orientation={compositionStore.pages[Theme.car].orientation}
                objectHeight={isMobile ? 121 : 163}
                objectWidth={isMobile ? 270 : 364}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.bomb}
                position={compositionStore.pages[Theme.bomb].position}
                orientation={compositionStore.pages[Theme.bomb].orientation}
                objectHeight={isMobile ? 175 : 235}
                objectWidth={isMobile ? 176 : 236}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.rocket}
                position={compositionStore.pages[Theme.rocket].position}
                orientation={compositionStore.pages[Theme.rocket].orientation}
                objectHeight={isMobile ? 200 : 270}
                objectWidth={isMobile ? 100 : 150}
              />
            </SwiperSlide>
          </VerticalSlider>
          <p styleName="content__description">
            {getPositionText(
              (position / 1000) * 100,
              compositionStore.currentTheme
            )}
          </p>
        </div>
        <div className={'swiper-next-el-v'}>Дальше</div>
      </Pager>
    </>
  );
};

export default observer(Composition);
