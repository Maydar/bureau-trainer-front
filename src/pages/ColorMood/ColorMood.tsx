import * as React from 'react';
import { observer } from 'mobx-react';
import urls from 'config/urls';

import Pager from 'components/common/Pager';
import { useLocal } from 'utils/hooks';
import { LessonType } from 'config/constants';
import Content from 'pages/ColorMood/Content';

import ColorMoodStore from './store';

import './ColorMood.modules.scss';


const ColorMood: React.FC = () => {
  const colorMoodStore = useLocal(() => new ColorMoodStore());

  const pageColor =
    colorMoodStore.pages[colorMoodStore.currentTheme].currentColor;

  return (
    <div styleName={`content`}>
      <Pager
        type={LessonType.colors}
        previewColor="blue"
        nextPage={urls.composition}
        curveClass={`triangle-curve_colors_${pageColor}`}
      >
        <Content store={colorMoodStore}/>
      </Pager>
    </div>
  );
};

export default observer(ColorMood);
