import * as React from 'react';

import {mapToArrayWordData, Theme} from '../config';

import './Slide.modules.scss';

type Props = {
  theme: Theme
  font: string,
  name: string,
  description: string
};

const Slide: React.FC<Props> = ({ theme, font, name, description }: Props) => {
  return <div styleName="slide">
    <div styleName="slide__wrapper">
      <div styleName={`slide__${theme}`}/>
      <div styleName={`slide__${theme}_word slide__${theme}_word_${font}`}/>

      <div styleName="font-description">
        <p styleName="font-description__name">
          {name}
        </p>
        <p styleName="font-description__text">
          {description}
        </p>
      </div>
    </div>
  </div>
};

Slide.defaultProps = {
  theme: Theme.bear,
  font: 'roboto'
};

export default React.memo(Slide);
