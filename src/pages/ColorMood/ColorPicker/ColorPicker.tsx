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
  isNext: boolean;
  isPrev: boolean;
  textColor: 'white' | 'black';
  setBgColor: (color: Color) => void;
};

const ColorPicker: React.FC<Props> = ({
  type,
  color,
  setBgColor,
  isNext,
  isPrev,
  textColor,
}: Props) => {
  return (
    <div
      styleName={cn(
        'content',
        `content_${textColor}`,
        isPrev && !isNext && `content_prev-slide`
      )}
    >
      <div
        styleName={cn(
          'content__inner',
          isNext && 'content__inner_next-active',
          isPrev && 'content__inner_prev-active'
        )}
      >
        <div
          styleName={'word-image'}
          style={{
            background: `url('/static/img/${textColor === 'white' ? `${type}_white` : type}.svg') no-repeat center`,
          }}
        />
        <div styleName={cn('ui-elements', isPrev && 'ui-elements_hidden')}>
          <p styleName="description__font">{mapTypeToFont[type]}</p>
          <div styleName="pickers" className="swiper-no-swiping">
            {mapTypeColors[type].map((mapColor) => {
              return (
                <div
                  key={`${type}_${mapColor}`}
                  styleName="pickers__item"
                >
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
    </div>
  );
};

ColorPicker.defaultProps = {
  type: ColorThemes.rage,
};

export default ColorPicker;
