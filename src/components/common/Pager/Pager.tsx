import * as React from 'react';

import HTMLFlipBook from 'react-pageflip';
import { useHistory } from 'react-router-dom';

import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import PageEdge from 'components/icons/ui/PageEdge/PageEdge';
import { LessonType } from 'config/constants';

type Props = {
  nextPage?: string;
  children: React.ReactNode;
  onFlip?: () => void;
  type?: LessonType;
  previewColor: 'white' | 'yellow' | 'blue' | 'black';
};

const Pager: React.FC<Props> = ({
  nextPage,
  children,
  previewColor,
  type,
}: Props) => {
  const book = React.useRef();
  const history = useHistory();
  const { height, width } = useWindowDimensions();
  const turnPage = React.useCallback((e) => {
    // @ts-ignore
    book.current.pageFlip().flipNext();
  }, []);

  const onFlip = React.useCallback((e) => {
    history.push(nextPage);
  }, []);

  return (
    <>
      <div className="page-edge">
        <PageEdge onClick={turnPage} type={type} />
      </div>
      <HTMLFlipBook
        ref={book}
        width={width}
        height={height}
        size="stretch"
        minWidth={width}
        drawShadows={false}
        usePortrait={true}
        maxShadowOpacity={0}
        useMouseEvents={false}
        flippingTime={500}
        onFlip={onFlip}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        >
          {children}
        </div>
        <div className={`page-preview page-preview_${previewColor}`} />
      </HTMLFlipBook>
    </>
  );
};

Pager.defaultProps = {
  previewColor: 'white',
  type: LessonType.fonts,
};

export default Pager;
