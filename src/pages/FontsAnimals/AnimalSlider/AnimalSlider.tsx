import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { SwiperSlide } from 'swiper/react';

import { useLocal } from 'utils/hooks';
import HorizontalSlider from 'components/common/HorizontalSlider';

import Slide from '../Slide';
import { Theme, mapToArrayWordData } from '../config';

import './AnimalSlider.modules.scss';

import FontsAnimalStore from '../store';

type Props = {
  theme: Theme;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
};

const AnimalSlider: React.FC<Props> = ({
  theme,
  isActive,
  isPrev,
  isNext,
}: Props) => {
  const fontsAnimalsStore = useLocal(() => new FontsAnimalStore());
  return (
    <div styleName={cn('content', isPrev && !isNext && 'content_hidden')}>
      <HorizontalSlider
        initialSlide={fontsAnimalsStore.currentIndex}
        isActive={isActive}
        onSlideChange={(swiper) => {
          fontsAnimalsStore.setIndex(swiper.realIndex);
        }}
      >
        {mapToArrayWordData[theme].map((wordData) => {
          return (
            <SwiperSlide key={wordData.key}>
              <Slide
                key={wordData.key}
                theme={theme}
                font={wordData.key}
                name={wordData.name}
                description={wordData.description}
              />
            </SwiperSlide>
          );
        })}
      </HorizontalSlider>
    </div>
  );
};

export default observer(AnimalSlider);
