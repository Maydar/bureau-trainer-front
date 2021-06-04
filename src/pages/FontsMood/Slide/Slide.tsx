import * as React from 'react';
import cn from 'classnames';

import {AnorexyFonts, mapWordData, RageFonts, RumbleFonts, Theme} from '../config';

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
  width: {
    default: number,
    mobile: number,
    tablet: number,
    desktop: number
  }
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
  width
}: Props) => {

  return (
    <div
      className="h-frame"
    >
      <div
        className="h-frame-wrapper"
        styleName={cn(
          'slide__content',
        )}
      >
        <div styleName={cn('slide__image')}>
          <div
            className={'h-frame-pic'}
            styleName={cn(
              `slide__image_${theme}`,
              `slide__image_${theme}_${font}`
            )}
            style={{
              width: width.default
            }}
            data-width-mobile={width.mobile}
            data-width-tablet={width.tablet}
            data-width-desktop={width.desktop}
            // styleName={cn(
            //   `slide__image_${theme}`,
            //   `slide__image_${theme}_${font}`,
            //   isNextSlider &&
            //     horizontal &&
            //     slideStates.isNext &&
            //     `slide__hidden`,
            //   isNextSlider &&
            //     horizontal &&
            //     slideStates.isPrev &&
            //     `slide__hidden`
            // )}
          />
        </div>
        <div
          className={'h-frame-content'}
          styleName={cn(
            'font-description',
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
