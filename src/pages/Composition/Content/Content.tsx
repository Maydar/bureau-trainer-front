import * as React from 'react';
import { observer } from 'mobx-react';
import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import { nbsp } from 'config/constants';
import VerticalSlider from 'components/common/VerticalSlider/VerticalSlider';
import { SwiperSlide } from 'swiper/react';
import ObjectPage from 'pages/Composition/ObjectPage/ObjectPage';
import { Theme } from 'pages/Composition/config';
import { useLocal, useSize } from 'utils/hooks';
import CompositionStore from 'pages/Composition/store';

import './Content.modules.scss';

type Props = {
  visibleControls?: boolean;
}

const Content: React.FC<Props> = ({ visibleControls} : Props) => {
  const compositionStore = useLocal(() => new CompositionStore());
  const { isMobile } = useSize();

  return (
    <>
      <div className="task-description">
        <TaskDescription
          color="black"
          title={'Упражнение: композиция'}
          text={`Подвигайте объект на${nbsp}странице и${nbsp}посмотрите, как${nbsp}меняется восприятие`}
        />
      </div>
      <div styleName="content_bg" />
      <div styleName="content">
        <VerticalSlider
          slideChangeTransitionEnd={(swiper) => {
            compositionStore.setTheme(compositionStore.order[swiper.realIndex]);
            if (swiper.isBeginning) {
              swiper.slideToLoop(2, 0);
            }

            if (swiper.isEnd) {
              swiper.slideToLoop(0, 0);
            }
          }}
          loop={true}
        >
          <SwiperSlide>
            {({ isNext, isPrev, isDuplicate, isVisible }) => {
              return (
                <ObjectPage
                  theme={Theme.car}
                  position={compositionStore.pages[Theme.car].position}
                  orientation={compositionStore.pages[Theme.car].orientation}
                  objectHeight={isMobile ? 121 : 163}
                  objectWidth={isMobile ? 270 : 364}
                  isNext={isNext}
                  isPrev={isPrev}
                  isDuplicate={isDuplicate}
                  isVisible={isVisible}
                  visibleControls={visibleControls}
                  compositionStore={compositionStore}
                />
              );
            }}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext, isPrev, isDuplicate, isVisible }) => {
              return (
                <ObjectPage
                  theme={Theme.bomb}
                  position={compositionStore.pages[Theme.bomb].position}
                  orientation={compositionStore.pages[Theme.bomb].orientation}
                  objectHeight={isMobile ? 175 : 235}
                  objectWidth={isMobile ? 176 : 236}
                  isNext={isNext}
                  isPrev={isPrev}
                  isDuplicate={isDuplicate}
                  isVisible={isVisible}
                  visibleControls={visibleControls}
                  compositionStore={compositionStore}
                />
              );
            }}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext, isPrev, isDuplicate, isVisible }) => {
              return (
                <ObjectPage
                  theme={Theme.rocket}
                  position={compositionStore.pages[Theme.rocket].position}
                  orientation={compositionStore.pages[Theme.rocket].orientation}
                  objectHeight={isMobile ? 200 : 270}
                  objectWidth={isMobile ? 100 : 150}
                  isNext={isNext}
                  isPrev={isPrev}
                  isDuplicate={isDuplicate}
                  isVisible={isVisible}
                  visibleControls={visibleControls}
                  compositionStore={compositionStore}
                />
              );
            }}
          </SwiperSlide>
        </VerticalSlider>
      </div>
    </>
  );
};

Content.defaultProps = {
  visibleControls: false
};

export default observer(Content);
