import * as React from 'react';
import { observer } from 'mobx-react';
import Content from 'pages/Composition/Content';
import Pager from 'components/common/Pager';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';
import rootStore from 'store/RootStore';

import './Composition.modules.scss';

const Composition: React.FC = () => {
  rootStore.visitComposition();
  React.useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.classList.remove('overflow-auto');
  });

  return (
    <Pager
      nextPage={rootStore.isAllPagesVisited ? urls.success : urls.fonts}
      type={LessonType.composition}
      previewColor="black"
      curveClass="triangle-curve_composition"
    >
      <Content visibleControls={true} keyboardEnabled={true} />
    </Pager>
  );
};

export default observer(Composition);
