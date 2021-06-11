import * as React from 'react';
import cn from 'classnames';

import { Theme } from '../config';

import './Slide.modules.scss';

type Props = {
  theme: Theme;
  font: string;
  name: string;
  description: string;

  slideStates?: {
    isActive: boolean;
    isNext: boolean;
    isPrev: boolean;
  };

  isNextSlider: boolean;
  isPrevSlider: boolean;
  horizontal?: boolean;
  width: {
    default: number;
    mobile: number;
    tablet: number;
    desktop: number;
  };
};

const Slide: React.FC<Props> = ({
  theme,
  font,
  name,
  description,
  slideStates,
  isNextSlider,
  horizontal,
  width
}: Props) => {

  const isNextSliderCurrentSlide = isNextSlider && slideStates.isActive;
  return (
    <div
      className={cn('slide h-frame', slideStates.isActive && 'h-frame_active')}
    >
      <div className="h-frame-wrapper" styleName="slide__wrapper">
        <div
          styleName={cn(
            `slide__theme slide__${theme}`,
            isNextSliderCurrentSlide && 'slide__theme_hidden'
          )}
        />
        <div
          className="h-frame-pic"
          styleName={cn(
            `slide__word slide__${theme}_word slide__${theme}_word_${font}`,
            isNextSlider && horizontal && slideStates.isNext && `slide__hidden`,
            isNextSlider && horizontal && slideStates.isPrev && `slide__hidden`
          )}

          style={{
            width: width.default,
          }}
          data-width-mobile={width.mobile}
          data-width-tablet={width.tablet}
          data-width-desktop={width.desktop}
        />
        <div className={'h-frame-content'}>
          <div styleName="font-description">
            <p styleName="font-description__name">{name}</p>
            <p styleName="font-description__text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Slide.defaultProps = {
  theme: Theme.bear,
  font: 'roboto',
};

export default React.memo(Slide);
