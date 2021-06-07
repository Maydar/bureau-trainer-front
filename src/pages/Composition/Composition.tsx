import * as React from 'react';
import { observer } from 'mobx-react';
import Content from 'pages/Composition/Content';
import Pager from 'components/common/Pager';
import { LessonType, nbsp } from 'config/constants';
import urls from 'config/urls';

import './Composition.modules.scss';

const Composition: React.FC = () => {
  return (
    <Pager
      nextPage={urls.success}
      type={LessonType.composition}
      previewColor="black"
      curveClass="triangle-curve_composition"
    >
      <Content />
    </Pager>
  );
};

export default observer(Composition);
