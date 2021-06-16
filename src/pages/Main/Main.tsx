import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import urls from 'config/urls';

import './styles.scss';

import CommonCover from 'components/icons/covers/CommonCover';
import BureauLogo from "components/icons/ui/BureauLogo";
import FontsCopyright from "components/icons/ui/FontsCopyright";
import rootStore from 'store/RootStore';

const Main: React.FC = () => {
  rootStore.flush();
  React.useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    body.classList.add('overflow-auto');
  });

  return (
    <div className="main-page">
      <div className="page-header">
        <h1 className="page-header__title">Упражнения для&nbsp;дизайнеров</h1>
        <p className="page-header__subtitle">
          Посмотрите, как&nbsp;шрифт, цвет и&nbsp;композиция влияют
          на&nbsp;восприятие и&nbsp;настроение
        </p>
      </div>
      <div className="main-page__content">
        <div className="exercise">
          <CommonCover urls={{
            animals: urls.animals,
            colors: urls.colors,
            composition: urls.composition,
            fonts: urls.fonts
          }}/>
        </div>
      </div>
      <div className="page-copyright">
        <p className="page-copyright__school">
          <a href="https://bureau.ru/school/designers/12/" className="bureau-school-link">
            <BureauLogo/>
          </a>
        </p>
        <p className="page-copyright__school">
          <Link className={'bureau-school-link'} to={urls.greetings} target="_blank">
            <FontsCopyright/>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default observer(Main);
