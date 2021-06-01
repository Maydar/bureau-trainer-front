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
};

const Slide: React.FC<Props> = ({
  theme,
  font,
  name,
  description,
  slideStates,
  isPrevSlider,
  isNextSlider,
  horizontal,
}: Props) => {
  const isNextSlide =
    !(isPrevSlider && isNextSlider) && horizontal && slideStates.isNext;

  const isPrevSlide =
    !(isPrevSlider && isNextSlider) &&
    horizontal &&
    slideStates.isPrev;

  const isNextSliderCurrentSlide = isNextSlider && slideStates.isActive;
  const isPrevSliderCurrentSlide = isPrevSlider && slideStates.isActive;
  return (
    <div styleName="slide">
      <div
        styleName={cn(
          'slide__wrapper',
          isNextSlide && `slide__wrapper_horizontal_next`,
          isPrevSlide && `slide__wrapper_horizontal_prev`,
          isNextSliderCurrentSlide && 'slide__wrapper_next-active',
          isPrevSliderCurrentSlide && 'slide__wrapper_prev-active'
        )}
      >
        <div styleName={cn(`slide__theme slide__${theme}`, isNextSliderCurrentSlide && 'slide__theme_hidden')} />
        <div
          styleName={cn(
            `slide__${theme}_word slide__${theme}_word_${font}`,
            isNextSlider && horizontal && slideStates.isNext && `slide__hidden`,
            isNextSlider && horizontal && slideStates.isPrev && `slide__hidden`
          )}
        />

        <div styleName="font-description">
          <p styleName="font-description__name">{name}</p>
          <p styleName="font-description__text">{description}</p>
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
