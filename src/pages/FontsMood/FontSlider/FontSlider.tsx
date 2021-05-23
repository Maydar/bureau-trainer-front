import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useLocal } from 'utils/hooks';

import Slide from '../Slide';
import { Theme, mapToArrayWordData } from '../config';
import FontsMoodStore from '../store';

import './FontSlider.modules.scss';
import HorizontalSlider from 'components/common/HorizontalSlider';

type Props = {
  theme: Theme;
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
};

const FontSlider: React.FC<Props> = ({
  theme,
  isActive: isActiveSlider,
  isNext: isNextSlider,
  isPrev: isPrevSlider,
}: Props) => {
  const fontsMoodStore = useLocal(() => new FontsMoodStore());

  return (
    <div styleName="content">
      <HorizontalSlider
        isActive={isActiveSlider}
        initialSlide={fontsMoodStore.currentIndex}
        // onSlideChange={(swiper) => {
        //   fontsMoodStore.setIndex(swiper.activeIndex);
        // }}
      >
        {mapToArrayWordData[theme].map((wordData) => {
          return (
            <SwiperSlide key={wordData.key}>
              {({ isActive, isNext, isPrev }) => {
                return (
                  <Slide
                    theme={theme}
                    font={wordData.key}
                    name={wordData.name}
                    text={wordData.description}
                    slideStates={{ isActive, isNext, isPrev }}
                    isPrevSlider={isPrevSlider}
                    isNextSlider={isNextSlider}
                    horizontal={true}
                  />
                );
              }}
            </SwiperSlide>
          );
        })}
      </HorizontalSlider>
    </div>
  );
};

FontSlider.defaultProps = {
  theme: Theme.rage,
  isActive: true,
};

export default observer(FontSlider);
