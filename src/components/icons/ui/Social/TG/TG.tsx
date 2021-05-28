import * as React from 'react';

import './TG.modules.scss';

type Props = {
  color: 'colored' | 'white' | 'black';
  size: 'm' | 'mc'
};

const TG: React.FC<Props> = ({ color, size }: Props) => {
  return (
    <div className={`icon-wrapper_${size}`}>
      <svg
        styleName={`icon-tg_${color}`}
        width="100%"
        height="100%"
        viewBox="0 0 69 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          styleName={'icon__background'}
          width="68.6923"
          height="64.3077"
          //fill="#1F5DFE"
        />
        <path
          styleName={'icon__symbol'}
          d="M52.5508 14.2575L11.1807 30.2105C8.35741 31.3445 8.37375 32.9195 10.6627 33.6219L21.2841 36.9352L45.8588 21.4302C47.0208 20.7232 48.0824 21.1035 47.2098 21.8782L27.2994 39.8472H27.2948L27.2994 39.8495L26.5668 50.7975C27.6401 50.7975 28.1137 50.3052 28.7157 49.7242L33.8748 44.7075L44.6058 52.6339C46.5844 53.7235 48.0054 53.1635 48.4978 50.8022L55.5421 17.6035C56.2631 14.7125 54.4384 13.4035 52.5508 14.2575Z"
          //fill="white"
        />
      </svg>
    </div>
  );
};

export default React.memo(TG);
