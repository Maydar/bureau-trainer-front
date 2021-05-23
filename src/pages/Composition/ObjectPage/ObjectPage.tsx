import * as React from 'react';
import {observer} from 'mobx-react';
import {useLocal} from 'utils/hooks';
import {Direction, getTrackBackground, Range} from 'react-range';

import {mapOrientationData, Orientation, Position, Theme} from '../config';

import ObjectPageStore from './store';

import './ObjectPage.modules.scss';

type Props = {
  theme: Theme;
  orientation: Orientation;
};

const STEP = 1;
const MIN = 0;
const MAX = 1000;

//todo убрать дискретность в слайдере

const ObjectPage: React.FC<Props> = ({ theme, orientation }) => {
  const objectPageStore = useLocal(() => new ObjectPageStore());
  const isHorizontal = orientation === Orientation.horizontal;
  const isVertical = orientation === Orientation.vertical;

  const verticalStylePosition = {
    top: `${(objectPageStore.currentPosition/1000)*100}%`
  };
  const horizontalStylePosition = {
    left: `${(objectPageStore.currentPosition/1000)*100}%`
  };
  // @ts-ignore
  return (
    <div styleName="content">
      <div styleName="content__wrapper">
        <div styleName={`image image_${theme}`}
             style={isVertical ? verticalStylePosition : horizontalStylePosition}
        />
        <div styleName={`range-wrapper ${isVertical ? "range-wrapper_vertical" : ""}`}>
          <Range
            values={[objectPageStore.currentPosition]}
            step={STEP}
            min={MIN}
            max={MAX}
            direction={isVertical ? Direction.Up : Direction.Right}
            onChange={(values) => objectPageStore.setPosition(values[0])}
            renderTrack={({ props, children }) => {
              return <div
                onMouseDown={(e) => console.log(e)}
                onTouchStart={(e) => console.log(e)}
                style={{
                  ...props.style,
                  height: `${isHorizontal ? '40px' : '100%'}`,
                  display: 'flex',
                  width: `${isVertical ? '40px' : '100%' }`,
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: `${isHorizontal ? '1px' : '100%'}`,
                    width: `${isHorizontal ? '100%' : '1px'}`,
                    borderRadius: '1px',
                    background: getTrackBackground({
                      values: [objectPageStore.currentPosition],
                      colors: ['#fff', '#fff'],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  { children }
                </div>
              </div>;
            }}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                  borderWidth: "2px",
                  borderColor: "#48AFC6",
                  borderStyle: "solid",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            )}
          />
        </div>

        {/*<p styleName="content__description">*/}
        {/*  {*/}
        {/*    mapOrientationData[theme]?.[orientation]?.[*/}
        {/*      mapValuesToPosition[objectPageStore.currentPosition]*/}
        {/*    ]*/}
        {/*  }*/}
        {/*</p>*/}
      </div>
    </div>
  );
};

export default observer(ObjectPage);
