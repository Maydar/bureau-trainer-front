import * as React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import urls from 'config/urls';

type Props = {
  onClick?: () => void;
};

import './BureauLogo.modules.scss';

const BureauLogo: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} styleName="content">
      <a
        href={'https://bureau.ru/school/designers/12/'}
        styleName="content__bureau"
      >
        Сделано&nbsp;в&nbsp;Школе&nbsp;Бюро&nbsp;Горбунова
        <span styleName="arrow" />
      </a>
      <NavLink to={urls.greetings} styleName="content__fonts link">
        Шрифты и Иконки
      </NavLink>
    </div>
  );
};

export default React.memo(BureauLogo);
