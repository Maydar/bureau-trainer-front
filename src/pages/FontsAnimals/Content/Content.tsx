import * as React from 'react';
import { SwiperSlide } from 'swiper/react';

import VerticalSlider from 'components/common/VerticalSlider';
import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import AnimalSlider from '../AnimalSlider';
import { Theme } from '../config';

import './Content.modules.scss';
import { useLocal } from 'utils/hooks';
import FontsAnimalStore from 'pages/FontsAnimals/store/FontsAnimalsStore';
import { observer } from 'mobx-react';

type Props = {
  keyboardEnabled: boolean
}


const Content: React.FC<Props> = ({ keyboardEnabled}: Props) => {
  const fontsAnimalsStore = useLocal(() => new FontsAnimalStore());

  return (
    <>
      <div className="task-description">
        <TaskDescription
          title={'Упражнение: животные'}
          text={`Выберите шрифт, который подходит животному`}
        />
      </div>
      <div styleName="content_bg" />
      <div styleName="content">
        <VerticalSlider keyboardEnabled={keyboardEnabled} loop={true} slideChangeTransitionEnd={(swiper) => {
          if (swiper.isBeginning) {
            swiper.slideToLoop(3, 0);
          }

          if (swiper.isEnd) {
            swiper.slideToLoop(0, 0);
          }
        }}>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                keyboardEnabled={keyboardEnabled}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.bear}
                currentIndex={fontsAnimalsStore.bearIndex}
                setIndex={fontsAnimalsStore.setBearIndex}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                keyboardEnabled={keyboardEnabled}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.girafe}
                currentIndex={fontsAnimalsStore.giraffeIndex}
                setIndex={fontsAnimalsStore.setGiraffeIndex}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                keyboardEnabled={keyboardEnabled}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.tarakan}
                currentIndex={fontsAnimalsStore.tarakanIndex}
                setIndex={fontsAnimalsStore.setTarakanIndex}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isNext, isPrev }) => (
              <AnimalSlider
                keyboardEnabled={keyboardEnabled}
                isActive={isActive}
                isPrev={isPrev}
                isNext={isNext}
                theme={Theme.elephant}
                currentIndex={fontsAnimalsStore.elephantIndex}
                setIndex={fontsAnimalsStore.setElephantIndex}
              />
            )}
          </SwiperSlide>
        </VerticalSlider>
      </div>
    </>
  );
};

Content.defaultProps = {
  keyboardEnabled: false
}


export default observer(Content);
