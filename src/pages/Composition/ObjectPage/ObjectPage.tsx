import * as React from 'react';
import { observer } from 'mobx-react';

import {mapPositionText, Orientation, Position, Theme} from '../config';


import cn from 'classnames';
import { Direction, getTrackBackground, Range } from 'react-range';
import {useLocal} from "utils/hooks";
import CompositionStore from "pages/Composition/store";

import './ObjectPage.modules.scss';

type Props = {
  theme: Theme;
  orientation: Orientation;
  position?: number;
  objectHeight: number;
  objectWidth: number;
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
}) => {
  const compositionStore = useLocal(() => new CompositionStore());
  const position =
    compositionStore.pages[theme].position;
  const orientation =
    compositionStore.pages[theme].orientation;

  const isVertical = orientation === Orientation.vertical;
  const positionPercentage = (position / 1000) * 100;

  const text = getPositionText(
    (position / 1000) * 100,
    compositionStore.currentTheme
  );
  const verticalStylePosition = {
    left: '50%',
    top: `calc(${positionPercentage}% - ${(position / 1000) * objectHeight}px)`,
    transform: 'translateX(-50%)',
  };
  const horizontalStylePosition = {
    top: '50%',
    left: `calc(${positionPercentage}% - ${(position / 1000) * objectWidth}px)`,
    transform: 'translateY(-50%)',
  };
  // @ts-ignore
  return (
    <div styleName="content">
      <div styleName="content__wrapper">
        <div
          styleName={`image image_${theme}`}
          style={isVertical ? verticalStylePosition : horizontalStylePosition}
        />
      </div>
      <div
        styleName={cn(
          `range-wrapper`,
          orientation === Orientation.vertical && 'range-wrapper_vertical'
        )}
        className={"swiper-no-swiping"}
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
              theme,
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
                    orientation === Orientation.vertical ? `100%` : `50px`,
                  width: orientation === Orientation.vertical ? `50px` : `100%`,
                  display: 'flex',
                  justifyContent: 'center'
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
        {text}
      </p>
    </div>
  );
};

export default observer(ObjectPage);
