import * as React from 'react';

import './VK.modules.scss';

type Props = {
  color: 'colored' | 'white' | 'black';
  size: 'm' | 'mc';
};

const VK: React.FC<Props> = ({ color, size }: Props) => {
  return (
    <div className={`icon-wrapper icon-wrapper_${size}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 69 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        styleName={`icon-vk_${color}`}
      >
        <rect
          styleName={'icon__background'}
          width="68.6923"
          height="64.3077"
          //fill="#8C3FED"
        />
        <path
          styleName={'icon__symbol'}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.7533 19.0145C59.106 17.8542 58.7533 17 57.0639 17H51.4859C50.0665 17 49.412 17.7374 49.0571 18.5512C49.0571 18.5512 46.2203 25.3426 42.202 29.754C40.9015 31.0332 40.3108 31.4391 39.601 31.4391C39.2462 31.4391 38.7128 31.0332 38.7128 29.8709V19.0145C38.7128 17.6205 38.3218 17 37.1403 17H28.3685C27.4824 17 26.9491 17.646 26.9491 18.2601C26.9491 19.5797 28.9593 19.8857 29.1654 23.6001V31.6707C29.1654 33.4408 28.8403 33.7616 28.1305 33.7616C26.2393 33.7616 21.6388 26.9384 18.9082 19.1313C18.3791 17.612 17.8436 17 16.4178 17H10.8355C9.24181 17 8.92307 17.7374 8.92307 18.5512C8.92307 20.0004 10.8143 27.1998 17.731 36.7217C22.3422 43.2241 28.8339 46.7494 34.7476 46.7494C38.2942 46.7494 38.7319 45.9674 38.7319 44.618V39.703C38.7319 38.1369 39.0677 37.8246 40.1918 37.8246C41.0205 37.8246 42.4379 38.2326 45.7485 41.3669C49.531 45.0834 50.1536 46.7494 52.2828 46.7494H57.8608C59.4545 46.7494 60.2535 45.9674 59.7945 44.4204C59.2888 42.882 57.4825 40.6486 55.0877 37.9988C53.7872 36.4901 51.8365 34.8645 51.2437 34.0506C50.4171 33.0073 50.6529 32.5419 51.2437 31.6133C51.2437 31.6133 58.0435 22.2083 58.7511 19.0145H58.7533Z"
          //fill="white"
        />
      </svg>
    </div>
  );
};

export default React.memo(VK);
