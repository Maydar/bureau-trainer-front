import * as React from 'react';
import { observer } from 'mobx-react';
import { SwiperSlide } from 'swiper/react';

import VerticalSlider from 'components/common/VerticalSlider';
import TaskDescription from 'components/common/TaskDescription';
import Pager from 'components/common/Pager';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';

import FontSlider from './FontSlider';
import { Theme } from './config';

import './FontsMood.modules.scss';


const FontsMood: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: шрифт'}
          text={`Посмотрите, как${nbsp}шрифты выражают характер и${nbsp}настроение слова`}
        />
      </div>
      <div styleName="bg"/>
      <Pager
        type={LessonType.fonts}
        nextPage={urls.animals}
        previewColor="yellow"
      >
        <VerticalSlider>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <FontSlider
                theme={Theme.rage}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}

              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <FontSlider
                theme={Theme.anorexy}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <FontSlider
                theme={Theme.rumble}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
              />
            )}
          </SwiperSlide>
        </VerticalSlider>
        <div className={"swiper-next-el-v"}>Дальше</div>
      </Pager>
    </>
  );
};

export default observer(FontsMood);
