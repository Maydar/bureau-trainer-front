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
    <div styleName={`content content_${pageColor}`}>
      <div className="task-description">
        <TaskDescription
          title="Упражнение: цвет"
          color={textColor}
          text={`Почувствуйте, как${nbsp}цвет усиливает характер шрифта и${nbsp}передает настроение слова`}
        />
      </div>
      <Pager
        type={LessonType.colors}
        previewColor="yellow"
        nextPage={urls.animals}
      >
        <VerticalSlider
          slideChangeTransitionEnd={(swiper) => {
            colorMoodStore.setTheme(colorMoodStore.pageOrder[swiper.realIndex])
            //todo change background on swiper slide
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
