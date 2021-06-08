import * as React from 'react';

import { useHistory } from 'react-router-dom';

import { LessonType } from 'config/constants';
import PageEdge from 'components/icons/ui/PageEdge';
import { useState } from 'react';

type Props = {
  nextPage?: string;
  children: React.ReactNode;
  onFlip?: () => void;
  type?: LessonType;
  previewColor: 'green' | 'yellow' | 'blue' | 'black';
  curveClass?: string;
};

const Pager: React.FC<Props> = ({
  nextPage,
  children,
  previewColor,
  curveClass,
  type,
}: Props) => {
  const [hidden, setHidden] = useState(false);
  const history = useHistory();
  const turnPage = () => {
    setHidden(true);
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      history.push(nextPage);
    }, 1000);
  };

  return (
    <>
      <div className="page-edge">
        <PageEdge
          onClick={turnPage}
          type={type}
          previewColor={previewColor}
          curveClass={curveClass}
          nextPage={nextPage}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: hidden ? -2 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
};

Pager.defaultProps = {
  previewColor: 'green',
  type: LessonType.fonts,
};

export default Pager;
