import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { SwiperSlide } from 'swiper/react';

import { useLocal } from 'utils/hooks';
import HorizontalSlider from 'components/common/HorizontalSlider';
import { applyHorizontalShift, setPicWidth } from 'utils/calculateSlides';

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
  isPrev: isPrevSlider,
  isNext: isNextSlider,
}: Props) => {
  const fontsAnimalsStore = useLocal(() => new FontsAnimalStore());
  return (
    <div
      styleName={cn(
        'content',
        isPrevSlider && !isNextSlider && 'content_hidden'
      )}
    >
      <HorizontalSlider
        initialSlide={fontsAnimalsStore.currentIndex}
        isActive={isActive}
        onSlideChange={(swiper) => {
          fontsAnimalsStore.setIndex(swiper.realIndex);
        }}
        navKey={theme}
        onInit={() => {
          setPicWidth(theme);
          applyHorizontalShift(theme);
        }}
        onResize={() => {
          setPicWidth(theme);
          applyHorizontalShift(theme);
        }}
        onSlideChangeTransitionStart={() => {
          applyHorizontalShift(theme);
        }}
        className={theme}
      >
        {mapToArrayWordData[theme].map((wordData) => {
          return (
            <SwiperSlide key={wordData.key}>
              {({ isActive, isNext, isPrev }) => (
                <Slide
                  key={wordData.key}
                  theme={theme}
                  font={wordData.key}
                  name={wordData.name}
                  description={wordData.description}
                  slideStates={{ isActive, isNext, isPrev }}
                  isPrevSlider={isPrevSlider}
                  isNextSlider={isNextSlider}
                  horizontal={true}
                  width={wordData.width}
                />
              )}
            </SwiperSlide>
          );
        })}
      </HorizontalSlider>
    </div>
  );
};

export default observer(AnimalSlider);
