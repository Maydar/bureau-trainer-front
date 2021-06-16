import * as React from 'react';
import cn from 'classnames';

import { LessonType } from 'config/constants';
import { useSize } from 'utils/hooks';
import urls from 'config/urls';

import Animals from 'pages/FontsAnimals/Content';
import Fonts from 'pages/FontsMood/Content';
import Composition from 'pages/Composition/Content';
import Success from 'pages/Success';
import Colors from 'pages/ColorMood/Content';

import './PageEdge.modules.scss';

type Props = {
  onClick?: () => void;
  to?: string;
  type?: LessonType;
  hidden?: boolean;
  previewColor: string;
  curveClass: string;
  nextPage: string;
};

const PageEdge: React.FC<Props> = ({
  onClick,
  type,
  curveClass,
  nextPage,
}: Props) => {
  const cornerRef = React.useRef();
  const { isMobile } = useSize();

  const turnPage = React.useCallback((e) => {
    document.body.classList.add('overflow-hidden');

    // @ts-ignore
    cornerRef.current.style.width = isMobile ? '350vw' : '200vw';
    // @ts-ignore
    cornerRef.current.style.height = isMobile ? '350vw' : '200vw';
    // @ts-ignore
    cornerRef.current.style.pointerEvents = 'none';
    onClick();
  }, []);

  return (
    <div className={cn('next')} ref={cornerRef}>
      <div className="cover">
        <div styleName="cover__inner" style={{
          height: window.innerHeight,
          width: window.innerWidth,
        }}>
          {nextPage === urls.fonts && <Fonts keyboardEnabled={false}/>}
          {nextPage === urls.animals && <Animals keyboardEnabled={false}/>}
          {nextPage === urls.colors && <Colors keyboardEnabled={false}/>}
          {nextPage === urls.composition && <Composition visibleControls={false} keyboardEnabled={false}/>}
          {nextPage === urls.success && <Success />}
        </div>
      </div>
      <svg className="triangle" viewBox="0 0 10 10" onClick={turnPage}>
        <path
          className={cn('triangle-body', `triangle-body_${type}`)}
          d="M 0 0 L 10 10 C 6 9 3 9 0 10"
        />
        <path
          className={cn('triangle-curve', curveClass)}
          d="M 0 10 L 10 10 C 7 9 3 8.5 0 10"
        />
      </svg>
    </div>
  );
};

PageEdge.defaultProps = {
  type: LessonType.fonts,
  to: urls.colors,
  hidden: false,
};

export default React.memo(PageEdge);
