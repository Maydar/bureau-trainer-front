import * as React from 'react';
import { observer } from 'mobx-react';

import { Orientation, Theme } from '../config';

import './ObjectPage.modules.scss';

type Props = {
  theme: Theme;
  orientation: Orientation;
  position: number;
  objectHeight: number;
  objectWidth: number;
};

const ObjectPage: React.FC<Props> = ({
  theme,
  orientation,
  position,
  objectHeight,
  objectWidth,
}) => {
  const isVertical = orientation === Orientation.vertical;
  const positionPercentage = (position / 1000) * 100;

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
    </div>
  );
};

export default observer(ObjectPage);
