import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import urls from 'config/urls';

import './styles.scss';

import CommonCover from 'components/icons/covers/CommonCover';

const Main: React.FC = () => {
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
          <a href="https://bureau.ru/school" className="bureau-school-link">
            Сделано в&nbsp;Школе&nbsp;Бюро&nbsp;Горбунова
            <span className="bureau-school-link-icon" />
          </a>
        </p>
        <p className="page-copyright__school">
          <Link className={'bureau-school-link'} to={urls.greetings}>
            Шрифты и&nbsp;иконки
            <span className="bureau-school-link-icon" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default observer(Main);
