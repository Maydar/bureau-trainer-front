import * as React from 'react';
import { observer } from 'mobx-react';
import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import { nbsp } from 'config/constants';
import VerticalSlider from 'components/common/VerticalSlider/VerticalSlider';
import { SwiperSlide } from 'swiper/react';
import ColorPicker from 'pages/ColorMood/ColorPicker';
import {
  Color,
  ColorThemes,
  whiteColors,
} from 'pages/ColorMood/ColorPicker/config';
import { useLocal } from 'utils/hooks';
import ColorMoodStore from 'pages/ColorMood/store';

import './Content.modules.scss';

type Props = {
  store?: any;
  keyboardEnabled: boolean
};

const Content: React.FC<Props> = ({ store, keyboardEnabled }: Props) => {
  const colorMoodStore = !store ? useLocal(() => new ColorMoodStore()) : store;

  const pageColor =
    colorMoodStore.pages[colorMoodStore.currentTheme].currentColor;
  const textColor = React.useMemo(() => {
    return whiteColors.includes(pageColor) ? 'white' : 'black';
  }, [pageColor]);
  return (
    <>
      <div styleName={`content__inner content_${pageColor}`} />
      <div className="task-description">
        <TaskDescription
          title="Упражнение: цвет"
          color={textColor}
          text={`Подберите к${nbsp}слову цвет, чтобы${nbsp}усилить настроение`}
        />
      </div>
      <VerticalSlider
        keyboardEnabled={true}
        onSlideChange={(swiper) => {
          colorMoodStore.setTheme(colorMoodStore.pageOrder[swiper.realIndex]);
        }}
        slideChangeTransitionEnd={(swiper) => {
          if (swiper.isBeginning) {
            swiper.slideToLoop(3, 0);
          }

          if (swiper.isEnd) {
            swiper.slideToLoop(0, 0);
          }
        }}
        loop={true}
      >
        {colorMoodStore.pageOrder.map((theme: ColorThemes) => (
          <SwiperSlide key={theme}>
            {({ isActive, isNext, isPrev }) => {
              return (
                <ColorPicker
                  type={theme}
                  textColor={textColor}
                  color={pageColor}
                  isNext={isNext}
                  isPrev={isPrev}
                  setBgColor={(color: Color) =>
                    colorMoodStore.setThemeColor(theme, color)
                  }
                />
              );
            }}
          </SwiperSlide>
        ))}
      </VerticalSlider>
    </>
  );
};

Content.defaultProps = {
  keyboardEnabled: false
};

export default observer(Content);
