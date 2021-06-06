import * as React from 'react';
import { observer } from 'mobx-react';
import { SwiperSlide } from 'swiper/react';
import urls from 'config/urls';

import TaskDescription from 'components/common/TaskDescription';
import Pager from 'components/common/Pager';
import { useLocal } from 'utils/hooks';
import VerticalSlider from 'components/common/VerticalSlider/VerticalSlider';
import { LessonType, nbsp } from 'config/constants';

import ColorPicker from './ColorPicker';
import { Color, whiteColors } from './ColorPicker/config';
import ColorMoodStore from './store';

import './ColorMood.modules.scss';

const ColorMood: React.FC = () => {
  const colorMoodStore = useLocal(() => new ColorMoodStore());

  const pageColor =
    colorMoodStore.pages[colorMoodStore.currentTheme].currentColor;
  const textColor = React.useMemo(() => {
    return whiteColors.includes(pageColor) ? 'white' : 'black';
  }, [pageColor]);

  return (
    <div styleName={`content`}>
      <div styleName={`content__inner content_${pageColor}`}/>
      <div className="task-description">
        <TaskDescription
          title="Упражнение: цвет"
          color={textColor}
          text={`Подберите к${nbsp}слову цвет, чтобы${nbsp}усилить настроение`}
        />
      </div>
      <Pager
        type={LessonType.colors}
        previewColor="blue"
        nextPage={urls.composition}
        curveClass={`triangle-curve_colors_${pageColor}`}
      >
        <VerticalSlider
          onSlideChange={(swiper) => {
            colorMoodStore.setTheme(colorMoodStore.pageOrder[swiper.realIndex]);
          }}
        >
          {colorMoodStore.pageOrder.map((theme) => (
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
      </Pager>
    </div>
  );
};

export default observer(ColorMood);
