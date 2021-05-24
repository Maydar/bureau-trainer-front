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
import { useLocal } from 'utils/hooks';
import ObjectPage from './ObjectPage';
import { Orientation, Theme, mapPositionText, Position } from './config';

import CompositionStore from './store';

import './Composition.modules.scss';

const STEP = 1;
const MIN = 0;
const MAX = 1000;

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

  const position =
    compositionStore.pages[compositionStore.currentTheme].position;
  const orientation =
    compositionStore.pages[compositionStore.currentTheme].orientation;
  //todo свайпер перехватывает события мыши
  return (
    <>
      <div className="task-description">
        <TaskDescription
          color="black"
          title={'Упражнение: композиция'}
          text={`Подвигайте объект на${nbsp}странице и${nbsp}посмотрите, как${nbsp}меняется восприятие.`}
        />
      </div>
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
                objectHeight={163}
                objectWidth={364}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.bomb}
                position={compositionStore.pages[Theme.bomb].position}
                orientation={compositionStore.pages[Theme.bomb].orientation}
                objectHeight={235}
                objectWidth={236}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.rocket}
                position={compositionStore.pages[Theme.rocket].position}
                orientation={compositionStore.pages[Theme.rocket].orientation}
                objectHeight={270}
                objectWidth={150}
              />
            </SwiperSlide>
          </VerticalSlider>
          <div
            styleName={cn(
              `range-wrapper`,
              orientation === Orientation.vertical && 'range-wrapper_vertical'
            )}
          >
            <Range
              values={[position]}
              step={STEP}
              min={MIN}
              max={MAX}
              direction={
                orientation === Orientation.vertical
                  ? Direction.Down
                  : Direction.Right
              }
              onChange={(values) => {
                compositionStore.setPosition(
                  compositionStore.currentTheme,
                  values[0]
                );
              }}
              renderTrack={({ props, children }) => {
                return (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height:
                        orientation === Orientation.vertical ? `100%` : `40px`,
                      width:
                        orientation === Orientation.vertical ? `40px` : `100%`,
                      display: 'flex',
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height:
                          orientation === Orientation.vertical ? `100%` : `1px`,
                        width:
                          orientation === Orientation.vertical ? `1px` : `100%`,
                        borderRadius: '1px',
                        background: getTrackBackground({
                          values: [position], //objectPageStore.currentPosition],
                          colors: ['#fff', '#fff'],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: 'center',
                      }}
                    >
                      {children}
                    </div>
                  </div>
                );
              }}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '35px',
                    width: '35px',
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderColor: '#48AFC6',
                    borderStyle: 'solid',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
            />
          </div>
          <p styleName="content__description">
            {getPositionText(
              (position / 1000) * 100,
              compositionStore.currentTheme
            )}
          </p>
        </div>
        <div className={"swiper-next-el-v"}>другая фигура</div>
      </Pager>
    </>
  );
};

export default observer(Composition);
