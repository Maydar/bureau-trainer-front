import * as React from 'react';
import cn from 'classnames';

import {LessonType} from 'config/constants';
import './PageEdge.modules.scss';
import urls from "config/urls";

type Props = {
  onClick?: (e: any) => void;
  to?: string;
  type?: LessonType;
};

const PageEdge: React.FC<Props> = ({ onClick, type, to }: Props) => {
  return (
    <div className="icon-wrapper" styleName="corner" onClick={onClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path styleName={cn(`above_${type}`)} d="M0 0H84V84L0 0Z" />
        <path
          styleName={cn(`under_${type}`)}
          d="M0 0L84 84C84 84 39.8462 60.3273 0 84C0 38.9455 0 0 0 0Z"
        />
      </svg>
    </div>
  );
};

PageEdge.defaultProps = {
  type: LessonType.fonts,
  to: urls.colors,
};

export default React.memo(PageEdge);
