import * as React from 'react';
import { observer } from 'mobx-react';

import Pager from 'components/common/Pager';

import TaskDescription from 'components/common/TaskDescription/TaskDescription';
import { LessonType } from 'config/constants';
import urls from 'config/urls';
import rootStore from 'store/RootStore';

import Content from "./Content";

import './FontsAnimals.modules.scss';


const FontsAnimals: React.FC = () => {
  rootStore.visitAnimals();

  React.useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.classList.remove('overflow-auto');
  });

  return (
    <>
      <Pager
        type={LessonType.animals}
        nextPage={rootStore.isAllPagesVisited ? urls.success : urls.colors}
        previewColor="green"
        curveClass="triangle-curve_animals"
      >
        <Content keyboardEnabled={true} />
      </Pager>
    </>
  );
};

export default observer(FontsAnimals);
