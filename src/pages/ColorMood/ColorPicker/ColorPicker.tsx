import * as React from 'react';
import cn from 'classnames';

import {
  Color,
  ColorThemes,
  mapColorToDescription,
  mapTypeColors,
  mapTypeToFont,
} from './config';

import Picker from './Picker';

import './ColorPicker.modules.scss';

type Props = {
  type: ColorThemes;
  color: Color;
  isNext: boolean,
  textColor: 'white' | 'black';
  setBgColor: (color: Color) => void;
};

const ColorPicker: React.FC<Props> = ({
  type,
  color,
  setBgColor,
  isNext,
  textColor,
}: Props) => {
  return (
    <div styleName={cn('content', isNext && `content_next-slide`)}>
      <div styleName="content__inner">
        <div
          styleName={cn(
            `word-image word-image_${type}`,
            textColor === 'white' && `word-image_${type}_white`
          )}
        />
        <p styleName="description__font">{mapTypeToFont[type]}</p>
        <div styleName="pickers">
          {mapTypeColors[type].map((mapColor) => {
            return (
              <div key={`${type}_${mapColor}`} styleName="pickers__item">
                <Picker
                  selected={color === mapColor}
                  color={mapColor}
                  onClick={() => {
                    setBgColor(mapColor);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div styleName="description">
          <p styleName="description__text">{mapColorToDescription[color]}</p>
        </div>
      </div>
    </div>
  );
};

ColorPicker.defaultProps = {
  type: ColorThemes.rage,
};

export default ColorPicker;
