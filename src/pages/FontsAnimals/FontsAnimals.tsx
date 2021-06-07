import * as React from 'react';
import { observer } from 'mobx-react';

import Pager from 'components/common/Pager';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import { LessonType } from 'config/constants';
import urls from 'config/urls';

import Content from "./Content";

import './FontsAnimals.modules.scss';


const FontsAnimals: React.FC = () => {
  return (
    <>
      <Pager
        type={LessonType.animals}
        nextPage={urls.colors}
        previewColor="green"
        curveClass="triangle-curve_animals"
      >
        <Content/>
      </Pager>
    </>
  );
};

export default observer(FontsAnimals);
