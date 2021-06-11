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

  return (
    <>
      <Pager
        type={LessonType.fonts}
        nextPage={rootStore.isAllPagesVisited ? urls.success : urls.animals}
        previewColor="yellow"
        curveClass="triangle-curve_fonts"
      >
        <Content />
      </Pager>
    </>
  );
};

export default observer(FontsMood);
