import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import Slide from '../Slide';
import { Theme, mapToArrayWordData } from '../config';

import { setPicWidth, applyHorizontalShift } from 'utils/calculateSlides';
import './FontSlider.modules.scss';
import HorizontalSlider from 'components/common/HorizontalSlider';
import {useState} from "react";

type Props = {
  theme: Theme;
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  currentIndex: number;
  onChangeIndex: (idx: number) => void;
  forwardRef?: any;
};

const FontSlider: React.FC<Props> = ({
  theme,
  isActive: isActiveSlider,
  isNext: isNextSlider,
  isPrev: isPrevSlider,
  currentIndex,
  onChangeIndex,
  forwardRef,
}: Props) => {
  const [isNeedAnimation, setNeedAnimation] = useState(true);

  const slides = React.useMemo(() => {
    return mapToArrayWordData[theme].map((wordData, index) => {
      return (
        <SwiperSlide key={`${wordData.key}_${index}`}>
          {({ isActive, isNext, isPrev }) => {
            return (
              <Slide
                theme={theme}
                font={wordData.key}
                name={wordData.name}
                text={wordData.description}
                width={wordData.width}
                slideStates={{
                  isActive,
                  isNext,
                  isPrev,
                }}
                isPrevSlider={isPrevSlider}
                isNextSlider={isNextSlider}
                horizontal={true}
              />
            );
          }}
        </SwiperSlide>
      );
    });
  }, [isActiveSlider, isNextSlider, currentIndex]);

  return (
    <div
      styleName="content"
      className={cn(
        isActiveSlider && 'vertical-slide-active',
        isNextSlider && 'vertical-slide-next'
      )}
    >
      <HorizontalSlider
        forwardRef={forwardRef}
        isActive={isActiveSlider}
        initialSlide={currentIndex}
        onSlideChange={(swiper) => {
          onChangeIndex(swiper.realIndex);
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
        onSlideChangeTransitionStart={(swiper) => {
          applyHorizontalShift(theme, !isNeedAnimation);

          if (swiper.isBeginning) {
            setTimeout(() => {
              setNeedAnimation(false);
              swiper.slideToLoop(5, 0);
            }, 710);
          }

          if (swiper.isEnd) {
            setTimeout(() => {
              setNeedAnimation(false);
              swiper.slideToLoop(0, 0);
            }, 710);
          }
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setNeedAnimation(true);
        }}
        className={theme}
      >
        {slides}
      </HorizontalSlider>
    </div>
  );
};

FontSlider.defaultProps = {
  theme: Theme.rage,
  isActive: true,
};

export default React.memo(FontSlider);
