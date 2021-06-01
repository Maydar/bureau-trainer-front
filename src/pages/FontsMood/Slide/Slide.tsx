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
  text,
}: Props) => {
  return (
    <div styleName={'slide'}>
      <div
        styleName={cn(
          'slide__content',
          !(isPrevSlider && isNextSlider) &&
            horizontal &&
            slideStates.isNext &&
            `slide__content_horizontal_next`,
          !(isPrevSlider && isNextSlider) &&
            horizontal &&
            slideStates.isPrev &&
            `slide__content_horizontal_prev`,

          isNextSlider && slideStates.isActive && 'slide__content_next-active',
          isPrevSlider && slideStates.isActive && 'slide__content_prev-active',
        )}
      >
        <div styleName={cn('slide__image')}>
          <div
            styleName={cn(
              `slide__image_${theme}`,
              `slide__image_${theme}_${font}`,
              'slide__preview slide__preview_default',
              isNextSlider &&
                horizontal &&
                slideStates.isNext &&
                `slide__hidden`,
              isNextSlider &&
                horizontal &&
                slideStates.isPrev &&
                `slide__hidden`
            )}
          />
        </div>
        <div
          styleName={cn(
            'font-description',
            `slide__image_${theme}__description`,
            isPrevSlider &&
              slideStates.isActive &&
              horizontal &&
              `font-description_inactive`,
            !(isPrevSlider && isNextSlider) &&
              horizontal &&
              slideStates.isNext &&
              `font-description_inactive`,
            !(isPrevSlider && isNextSlider) &&
              horizontal &&
              slideStates.isPrev &&
              `font-description_inactive`
          )}
        >
          <p styleName="font-description__name">{name}</p>
          <p styleName="font-description__text">{text}</p>
        </div>
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
