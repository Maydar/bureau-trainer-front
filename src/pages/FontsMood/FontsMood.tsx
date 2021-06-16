import * as React from 'react';
import { observer } from 'mobx-react';

import Pager from 'components/common/Pager';
import { LessonType } from 'config/constants';
import urls from 'config/urls';
import Content from 'pages/FontsMood/Content';
import rootStore from 'store/RootStore';

import './FontsMood.modules.scss';


const FontsMood: React.FC = () => {
  rootStore.visitFonts();

  React.useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.classList.remove('overflow-auto');
  });

  return (
    <>
      <Pager
        type={LessonType.fonts}
        nextPage={rootStore.isAllPagesVisited ? urls.success : urls.animals}
        previewColor="yellow"
        curveClass="triangle-curve_fonts"
      >
        <Content keyboardEnabled={true}/>
      </Pager>
    </>
  );
};

export default observer(FontsMood);
