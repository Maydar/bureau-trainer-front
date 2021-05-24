import * as React from 'react';
import { observer } from 'mobx-react';
import { SwiperSlide } from 'swiper/react';

import Pager from 'components/common/Pager';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import VerticalSlider from 'components/common/VerticalSlider';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';

import AnimalSlider from './AnimalSlider';
import { Theme } from './config';

import './FontsAnimals.modules.scss';

const FontsAnimals: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: животные'}
          text={`Выберите шрифт, который подходит животному.`}
        />
      </div>
      <Pager
        type={LessonType.animals}
        nextPage={urls.composition}
        previewColor="blue"
      >
        <div styleName="content">
          <VerticalSlider>
            <SwiperSlide>
              {({ isActive, isNext, isPrev }) => (<AnimalSlider isActive={isActive} theme={Theme.bear} />)}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive, isNext, isPrev }) => (<AnimalSlider isActive={isActive} theme={Theme.girafe} />)}
            </SwiperSlide>
          </VerticalSlider>
        </div>
      </Pager>
    </>
  );
};

export default observer(FontsAnimals);
