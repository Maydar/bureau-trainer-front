import * as React from 'react';
import cn from 'classnames';

import { Theme } from '../config';

import './Slide.modules.scss';

type Props = {
  theme: Theme;
  font: string;
  slideStates?: {
    isActive: boolean;
    isNext: boolean;
    isPrev: boolean;
  };

  isNextSlider: boolean;
  isPrevSlider: boolean;
  horizontal?: boolean;

  name: string;
  text: string;
};

const Slide: React.FC<Props> = ({
  theme,
  font,
  slideStates,
  horizontal,
  isNextSlider,
  isPrevSlider,
  name,
  text
}: Props) => {

  return (
    <div styleName={cn(
      'slide'
    )}>
      <div
        styleName={cn(
          'slide__image',
        )}
      >
        <div styleName={cn(
          `slide__image_${theme}`,
          `slide__image_${theme}_${font}`,
          'slide__preview slide__preview_default',

          (!(isPrevSlider && isNextSlider)) && horizontal && slideStates.isNext && `slide__preview_horizontal_next`,
          (!(isPrevSlider && isNextSlider)) && horizontal && slideStates.isPrev && `slide__preview_horizontal_prev`,

          (isNextSlider && horizontal && slideStates.isNext) && `slide__hidden slide__preview_vertical_next-slide-n`,
          (isNextSlider && horizontal && slideStates.isPrev) && `slide__hidden slide__preview_vertical_next-slide-p`,
        )}/>
      </div>
      <div styleName={cn(
        'font-description',
        (isPrevSlider && slideStates.isActive && horizontal && `font-description_inactive`),
        (!(isPrevSlider && isNextSlider)) && horizontal && slideStates.isNext && `font-description_inactive`,
        (!(isPrevSlider && isNextSlider)) && horizontal && slideStates.isPrev && `font-description_inactive`,
      )}>
        <p styleName="font-description__name">
          {name}
        </p>
        <p styleName="font-description__text">
          {text}
        </p>
      </div>

    </div>
  );
};

Slide.defaultProps = {
  theme: Theme.rage,
  font: 'roboto',
  slideStates: {
    isActive: true,
    isNext: false,
    isPrev: false,
  },
  horizontal: true,
};

export default React.memo(Slide);
