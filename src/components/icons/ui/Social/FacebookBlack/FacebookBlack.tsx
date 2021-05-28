import * as React from 'react';

import './FacebookBlack.modules.scss';

type Props = {
  color: 'colored' | 'white' | 'black';
  size: 'm' | 'mc';
};

const FacebookBlack: React.FC<Props> = ({ color, size }: Props) => {
  return (
    <div className={`icon-wrapper_${size}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 47 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        styleName={`icon-fb_${color}`}
      >
        <rect
          styleName={'icon__background'}
          width="46"
          height="43"
          //fill="black"
        />
        <path
          styleName={'icon__symbol'}
          d="M31.551 23.4783L32.383 17.8256H27.182V14.1574C27.182 12.6112 27.9083 11.1031 30.2379 11.1031H32.602V6.29084C32.602 6.29084 30.4569 5.90918 28.4053 5.90918C24.1225 5.90918 21.3231 8.61693 21.3231 13.518V17.8266H16.562V23.4793H21.3231V37.1449H27.182V23.4793L31.551 23.4783Z"
         // fill="white"
        />
      </svg>
    </div>
  );
};

export default React.memo(FacebookBlack);
