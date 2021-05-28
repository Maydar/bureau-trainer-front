import * as React from 'react';

import './FB.modules.scss';

type Props = {
  color: 'colored' | 'white' | 'black';
  size: 'm' | 'mc';
};

const FB: React.FC<Props> = ({ color, size }: Props) => {
  return (
    <div className={`icon-wrapper_${size}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 69 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        styleName={`icon-fb_${color}`}
      >
        <rect
          styleName={'icon__background'}
          width="68.6923"
          height="64.3077"
          //fill="#FF9CF5"
        />
        <path
          styleName={'icon__symbol'}
          d="M55.1803 40.647L56.6208 30.8608H47.6166V24.5102C47.6166 21.8333 48.874 19.2224 52.907 19.2224H57V10.8912C57 10.8912 53.2862 10.2305 49.7344 10.2305C42.3198 10.2305 37.4734 14.9183 37.4734 23.4033V30.8625H29.2307V40.6487H37.4734V64.3074H47.6166V40.6487L55.1803 40.647Z"
          //fill="#0066FF"
        />
      </svg>
    </div>
  );
};

export default React.memo(FB);
