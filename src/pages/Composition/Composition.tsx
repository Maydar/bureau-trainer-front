import * as React from 'react';
import { observer } from 'mobx-react';
import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import Pager from 'components/common/Pager';
import { SwiperSlide } from 'swiper/react';
import VerticalSlider from 'components/common/VerticalSlider';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';

import ObjectPage from './ObjectPage';
import { Orientation, Theme } from './config';

import './Composition.modules.scss';

const Composition: React.FC = () => {
  //todo свайпер перехватывает события мыши
  return (
    <>
      <div className="task-description">
        <TaskDescription
          color="black"
          text={`Обратите внимание, как${nbsp}от${nbsp}расположения элемента на${nbsp}формате меняется восприятие.`}
        />
      </div>
      <Pager
        nextPage={urls.success}
        type={LessonType.composition}
        previewColor="black"
      >
        <div styleName="content">
          <VerticalSlider>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.car}
                orientation={Orientation.horizontal}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.bomb}
                orientation={Orientation.vertical}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ObjectPage
                theme={Theme.rocket}
                orientation={Orientation.vertical}
              />
            </SwiperSlide>
          </VerticalSlider>
        </div>
      </Pager>
    </>
  );
};

export default observer(Composition);
