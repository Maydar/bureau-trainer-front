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

import { getPositionText, MAX, MIN, STEP } from './utils';

import './ObjectPage.modules.scss';

type Props = {
  theme: Theme;
  orientation: Orientation;
  position?: number;
  objectHeight: number;
  objectWidth: number;
  isNext: boolean;
  isPrev: boolean;
  isDuplicate: boolean;
  isVisible: boolean;
  visibleControls: boolean;
  compositionStore: CompositionStore;
};

const ObjectPage: React.FC<Props> = ({
  theme,
  objectHeight,
  objectWidth,
  isNext,
  isPrev,
  isVisible,
  visibleControls,
  compositionStore
}) => {
  const position = compositionStore.pages[theme].position;
  const orientation = compositionStore.pages[theme].orientation;
  const isVertical = orientation === Orientation.vertical;
  const positionPercentage = React.useMemo(() => (position / 1000) * 100, [
    position
  ]);

  const text = React.useMemo(
    () => getPositionText((position / 1000) * 100, theme),
    [position]
  );
  const verticalStylePosition = React.useMemo(
    () => ({
      left: '50%',
      top: isNext
        ? 0
        : `calc(${positionPercentage}% - ${
            (position / 1000) * objectHeight
          }px)`,
      transform: 'translateX(-50%)',
    }),
    [positionPercentage, isNext]
  );
  const horizontalStylePosition = React.useMemo(
    () => ({
      top: isNext ? 0 : '50%',
      left: `calc(${positionPercentage}% - ${
        (position / 1000) * objectWidth
      }px)`,
      transform: isNext ? 'translateY(0%)' : 'translateY(-50%)',
    }),
    [positionPercentage, isNext]
  );

  return (
    <div styleName="content" className="composition-slide">
      <div styleName="content__wrapper">
        <div
          className={isNext && 'image-animating'}
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
          orientation === Orientation.vertical && 'range-wrapper_vertical',
          //!visibleControls && 'range-wrapper_hidden'
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
                    position: 'relative',
                    alignSelf: 'center',
                    borderRadius: '1px',
                    height:
                      orientation === Orientation.vertical ? `100%` : `1px`,
                    width:
                      orientation === Orientation.vertical ? `1px` : `100%`,
                    background: getTrackBackground({
                      values: [position],
                      colors: ['#fff', '#fff'],
                      min: MIN,
                      max: MAX,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            );
          }}
          renderThumb={({ props }) => {
            return (
              <div {...props} styleName="thumb" style={{ ...props.style }} />
            );
          }}
        />
      </div>
      <p styleName={cn('content__description', (isPrev || isNext) && 'hidden')}>
        {text}
      </p>
    </div>
  );
};

export default observer(ObjectPage);
