import * as React from 'react';
import {useState} from 'react';
import {SwiperSlide} from 'swiper/react';
import cn from 'classnames';

import Slide from '../Slide';
import {mapToArrayWordData, Theme} from '../config';

import {applyHorizontalShift, setPicWidth} from 'utils/calculateSlides';
import './FontSlider.modules.scss';
import HorizontalSlider from 'components/common/HorizontalSlider';

type Props = {
  theme: Theme;
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  isDuplicate: boolean;
  currentIndex: number;
  onChangeIndex: (idx: number) => void;
  forwardRef?: any;
  keyboardEnabled: boolean
};

const FontSlider: React.FC<Props> = ({
  theme,
  isActive: isActiveSlider,
  isNext: isNextSlider,
  isPrev: isPrevSlider,
  currentIndex,
  onChangeIndex,
  keyboardEnabled
}: Props) => {
  const [isNeedAnimation, setNeedAnimation] = useState(false);
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
        'vertical-slide',
        isActiveSlider && 'vertical-slide-active',
        isNextSlider && 'vertical-slide-next',
        isPrevSlider && 'vertical-slide-prev'
      )}
    >
      <HorizontalSlider
        keyboardEnabled={keyboardEnabled}
        forwardRef={sliderRef}
        isActive={isActiveSlider}
        initialSlide={currentIndex}
        navKey={theme}
        onInit={(swiper) => {
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
            swiper.slideToLoop(5, 0);
          }

          if (swiper.isEnd) {
            setNeedAnimation(false);
            swiper.slideToLoop(0, 0);
          }

          onChangeIndex(swiper.realIndex);
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
