import * as React from 'react';
import { observer } from 'mobx-react';

import { mapPositionText, Orientation, Position, Theme } from '../config';

import cn from 'classnames';
import { Direction, getTrackBackground, Range } from 'react-range';
import { useLocal } from 'utils/hooks';
import CompositionStore from 'pages/Composition/store';

import Car from 'pages/Composition/ObjectPage/Car';
import Rocket from 'pages/Composition/ObjectPage/Rocket';
import Bomb from 'pages/Composition/ObjectPage/Bomb';

import './ObjectPage.modules.scss';

type Props = {
  theme: Theme;
  orientation: Orientation;
  position?: number;
  objectHeight: number;
  objectWidth: number;
  isNext: boolean;
  isPrev: boolean;
};

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

const ObjectPage: React.FC<Props> = ({
  theme,
  objectHeight,
  objectWidth,
  isNext,
  isPrev,
}) => {
  const compositionStore = useLocal(() => new CompositionStore());
  const position = compositionStore.pages[theme].position;
  const orientation = compositionStore.pages[theme].orientation;

  const isVertical = orientation === Orientation.vertical;
  const positionPercentage = (position / 1000) * 100;

  const text = getPositionText((position / 1000) * 100, theme);
  const verticalStylePosition = {
    left: '50%',
    top: isNext
      ? 0
      : `calc(${positionPercentage}% - ${(position / 1000) * objectHeight}px)`,
    transform: 'translateX(-50%)',
  };
  const horizontalStylePosition = {
    top: isNext ? 0 : '50%',
    left: `calc(${positionPercentage}% - ${(position / 1000) * objectWidth}px)`,
    transform: isNext ? 'translateY(0%)' : 'translateY(-50%)',
  };
  // @ts-ignore
  return (
    <div styleName="content" className="composition-slide">
      <div styleName="content__wrapper">
        <div
          className="composition-slide__image"
          styleName={cn(
            `image image_${theme}`,
            isNext ? 'image_blue' : 'image_white',
            isPrev && 'image_hidden'
          )}
          style={isVertical ? verticalStylePosition : horizontalStylePosition}
        >
          {theme === Theme.car && <Car />}
          {theme === Theme.rocket && <Rocket />}
          {theme === Theme.bomb && <Bomb />}
        </div>
      </div>
      <div
        styleName={cn(
          `range-wrapper`,
          orientation === Orientation.vertical && 'range-wrapper_vertical'
        )}
        className={'swiper-no-swiping'}
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
            compositionStore.setPosition(theme, values[0]);
          }}
          renderTrack={({ props, children }) => {
            return (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height:
                    orientation === Orientation.vertical ? `100%` : `50px`,
                  width: orientation === Orientation.vertical ? `50px` : `100%`,
                  display: 'flex',
                  justifyContent: 'center',
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
                    position: 'relative',
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
                transform: 'translate(117.5px, -17.5px)'
              }}
            />
          )}
        />
      </div>
      <p styleName={cn('content__description', (isPrev || isNext) && 'hidden')}>{text}</p>
    </div>
  );
};

export default observer(ObjectPage);
