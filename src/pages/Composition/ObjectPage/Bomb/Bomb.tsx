import * as React from 'react';

const Bomb: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 236 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M211.742 63.5421L232.366 75.1643L236 84.1412L192.077 104.684L211.742 63.5421ZM29.1177 133.472C52.5022 110.087 87.9452 86.7865 119.444 68.4386L150.858 0L159.845 3.63018L178.778 36.5831C184.695 33.7691 188.16 32.0243 188.16 32.0243L204.163 47.3048C204.163 47.3048 151.111 157.251 98.6513 207.483L29.1177 133.472ZM17.8481 146.192L83.6345 219.893C22.4968 262.948 -28.2448 206.301 17.8762 146.192H17.8481Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(Bomb);
