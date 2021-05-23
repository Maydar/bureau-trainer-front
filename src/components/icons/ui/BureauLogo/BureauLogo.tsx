import * as React from 'react';
import cn from 'classnames';

type Props = {
  onClick?: () => void;
};

import './BureauLogo.modules.scss';

const BureauLogo: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} styleName="content">
      <div styleName="content__bureau">Сделано<br/>в Школе Бюро Горбунова<span styleName="arrow"/></div>
      <div styleName="content__fonts">
        Шрифтовые магазины <span styleName="link">typetoday</span> и&nbsp;<span styleName="link">paratype</span>
      </div>
    </div>
  );
};

export default React.memo(BureauLogo);
