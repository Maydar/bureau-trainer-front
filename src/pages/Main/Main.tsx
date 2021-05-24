import * as React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import urls from 'config/urls';
import FontMoodCover from 'components/icons/covers/FontMoodCover';
import ColorMoodCover from 'components/icons/covers/ColorMoodCover';
import SkeletonCover from 'components/icons/covers/SkeletonCover';
import CompositionCover from 'components/icons/covers/CompositionCover';
import Layout from 'components/common/Layout';
import BureauLogo from 'components/icons/ui/BureauLogo';

import './Main.modules.scss';


const Main: React.FC = () => {
  return (
    <Layout>
      <div styleName="main">
        <div styleName="sidebar">
          <div styleName="title-wrapper">
            <h1 styleName="main__header">Упражнения для&nbsp;дизайнеров</h1>
            <p styleName="main__lead">
              Посмотрите, как&nbsp;шрифт, цвет и&nbsp;композиция влияют
              на&nbsp;восприятие и&nbsp;настроение
            </p>
          </div>
        </div>
        <div styleName="covers">
          <NavLink to={urls.fonts} styleName="covers__item covers__font-mood">
            <FontMoodCover />
          </NavLink>
          <div styleName="covers__second">
            <NavLink
              to={urls.colors}
              styleName="covers__item covers__color-mood"
            >
              <ColorMoodCover />
            </NavLink>
            <NavLink
              to={urls.animals}
              styleName="covers__item covers__skeleton"
            >
              <SkeletonCover />
            </NavLink>
          </div>
          <NavLink
            to={urls.composition}
            styleName="covers__item covers__composition"
          >
            <CompositionCover />
          </NavLink>
        </div>
        <div styleName="copyright">
          <div styleName="copyright__item">
            <BureauLogo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default observer(Main);
