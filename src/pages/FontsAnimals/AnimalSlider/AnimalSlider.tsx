import * as React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { SwiperSlide } from 'swiper/react';

import { useLocal } from 'utils/hooks';
import HorizontalSlider from 'components/common/HorizontalSlider';
import { applyHorizontalShift, setPicWidth } from 'utils/calculateSlides';

import Slide from '../Slide';
import { mapToArrayWordData, Theme } from '../config';

import './AnimalSlider.modules.scss';

type Props = {
  theme: Theme;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  currentIndex: number;
  setIndex: (idx: number) => void;
};

const AnimalSlider: React.FC<Props> = ({
  theme,
  isActive,
  isPrev: isPrevSlider,
  isNext: isNextSlider,
  currentIndex,
  setIndex,
}: Props) => {
  const [isNeedAnimation, setNeedAnimation] = useState(true);
  const sliderRef = React.useRef(null);
  let isIncorrectIndex = false;

  React.useEffect(() => {
    if (sliderRef.current) {
      const currentRealIndex = sliderRef.current.swiper.realIndex;
      if (currentRealIndex !== currentIndex) {
        isIncorrectIndex = true;
        sliderRef.current.swiper.slideToLoop(currentIndex, 0);
      }
    }
  }, [currentIndex]);

  return (
    <div
      styleName={cn(
        'content',
        isPrevSlider && !isNextSlider && 'content_hidden'
      )}
    >
      <HorizontalSlider
        forwardRef={sliderRef}
        initialSlide={currentIndex}
        isActive={isActive}
        onSlideChange={(swiper) => {
          setIndex(swiper.realIndex);
        }}
        navKey={theme}
        onInit={() => {
          setPicWidth(theme);
          applyHorizontalShift(theme, true);
        }}
        onResize={() => {
          setPicWidth(theme);
          applyHorizontalShift(theme);
        }}
        onSlideChangeTransitionStart={(swiper) => {
          applyHorizontalShift(theme, !isNeedAnimation || isIncorrectIndex);
          setNeedAnimation(true);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          if (swiper.isBeginning) {
            setNeedAnimation(false);
            swiper.slideToLoop(theme === Theme.tarakan ? 4 : 5, 0);
          }

          if (swiper.isEnd) {
            setNeedAnimation(false);
            swiper.slideToLoop(0, 0);
          }
        }}
        className={theme}
      >
        {mapToArrayWordData[theme].map((wordData, index) => {
          return (
            <SwiperSlide key={`${wordData.key}_${index}`}>
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
