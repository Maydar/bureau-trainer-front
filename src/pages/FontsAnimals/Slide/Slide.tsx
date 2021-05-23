import * as React from 'react';

import { Theme } from '../config';

import './Slide.modules.scss';

type Props = {
  theme: Theme
  font: string,
};

const Slide: React.FC<Props> = ({ theme, font }: Props) => {
  return <div styleName="slide">
    <div styleName="slide__wrapper">
      <div styleName={`slide__${theme}`}/>
      <div styleName={`slide__${theme}_word slide__${theme}_word_${font}`}/>
    </div>
  </div>
};

Slide.defaultProps = {
  theme: Theme.bear,
  font: 'roboto'
};

export default React.memo(Slide);
