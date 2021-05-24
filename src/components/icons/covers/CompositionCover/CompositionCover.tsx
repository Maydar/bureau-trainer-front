import * as React from 'react';
import cn from 'classnames';

type Props = {
  onClick?: () => void;
};

import './CompositionCover.modules.scss';

const CompositionCover: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div onClick={onClick} styleName="cover-composition">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 647 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip49)">
          <path
            d="M458.926 69.2194L631.938 0.111395L599.784 106.587L639.483 118.979L639.164 172.775C635.003 174.543 596.187 189.031 596.187 189.031L628.374 290.263L453.153 233.261C412.088 243.684 408.453 245.239 376.92 252.114L299.886 268.539C246.102 277.359 133.637 297.374 62.7327 254.077C-8.17152 210.779 1.96865 145.47 18.0166 119.816C37.1853 89.1731 82.4844 34.9921 192.815 33.7635C302.572 32.5413 415.923 57.4562 458.926 69.2194Z"
            className="fig-rocket"
            fill="currentColor"
          />
          <path
            d="M94.7609 151.065L57.544 172.045L61.9769 217.664L42.8568 207.563L39.602 172.876L31.5416 168.618L17.9257 194.393L1.99231 185.976L36.6509 120.368L52.5843 128.785L38.9684 154.56L47.0288 158.818L77.2342 141.807L94.7609 151.065Z"
            fill="black"
          />
          <path
            d="M76.0171 217.235C71.3163 210.891 69.6146 203.708 70.9121 195.686C72.2096 187.663 76.0831 181.417 82.5327 176.948C89.0633 172.421 96.4794 170.829 104.781 172.171C113.082 173.514 119.583 177.357 124.284 183.701C129.066 189.986 130.808 197.14 129.511 205.163C128.213 213.185 124.299 219.46 117.769 223.988C111.319 228.457 103.943 230.02 95.642 228.677C87.3405 227.334 80.7989 223.52 76.0171 217.235ZM93.1202 189.828C90.493 191.909 88.8804 194.798 88.2824 198.495C87.6844 202.192 88.2985 205.477 90.1247 208.349C92.0319 211.163 94.6946 212.847 98.1128 213.4C101.531 213.952 104.554 213.189 107.181 211.108C109.889 208.969 111.542 206.051 112.14 202.353C112.738 198.656 112.084 195.401 110.177 192.587C108.35 189.714 105.728 188.002 102.31 187.449C98.8917 186.896 95.8284 187.689 93.1202 189.828Z"
            fill="black"
          />
          <path
            d="M204.356 173.291L207.825 228.302L191.957 229.303L190.049 199.047L179.262 230.103L166.567 230.904L151.964 201.448L153.872 231.704L138.004 232.705L134.535 177.694L156.434 176.313L171.976 207.196L183.516 174.605L204.356 173.291Z"
            fill="black"
          />
          <path
            d="M237.42 222.453L220.787 225.767L210.017 171.71L263.034 161.146L273.805 215.204L257.172 218.518L249.301 179.014L229.549 182.949L237.42 222.453Z"
            fill="black"
          />
          <path
            d="M289.244 203.767C282.27 200.064 277.642 194.313 275.36 186.514C273.077 178.714 273.885 171.409 277.782 164.599C281.728 157.702 287.736 153.072 295.807 150.71C303.878 148.348 311.4 149.019 318.374 152.721C325.396 156.336 330.048 162.043 332.33 169.843C334.613 177.642 333.781 184.991 329.836 191.889C325.938 198.699 319.954 203.285 311.883 205.646C303.812 208.008 296.266 207.382 289.244 203.767ZM292.883 171.667C291.407 174.676 291.195 177.977 292.247 181.572C293.299 185.167 295.268 187.867 298.152 189.674C301.085 191.393 304.213 191.766 307.536 190.793C310.86 189.821 313.259 187.83 314.735 184.821C316.259 181.725 316.494 178.379 315.443 174.784C314.391 171.19 312.398 168.533 309.466 166.814C306.581 165.008 303.477 164.591 300.153 165.563C296.83 166.536 294.407 168.57 292.883 171.667Z"
            fill="black"
          />
          <path
            d="M376.566 153.436C383.189 154.214 387.4 157.021 389.199 161.856C390.973 166.624 390.246 171.155 387.018 175.447C383.789 179.74 378.764 183.155 371.942 185.693C366.908 187.566 361.89 188.566 356.885 188.694C351.856 188.755 347.401 187.925 343.518 186.203L348.07 172.295C351.019 173.535 354.235 174.072 357.718 173.908C361.266 173.718 364.332 173.143 366.915 172.182C371.22 170.58 372.954 168.654 372.116 166.402C371.599 165.011 370.558 164.342 368.995 164.396C367.431 164.45 365.226 165.007 362.378 166.066L354.629 168.949L349.824 156.034L357.573 153.151C360.421 152.092 362.454 151.071 363.672 150.09C364.891 149.109 365.241 147.923 364.724 146.532C363.886 144.281 361.314 143.955 357.009 145.557C354.426 146.518 351.73 148.087 348.921 150.263C346.177 152.415 344.095 154.924 342.673 157.79L330.137 150.239C331.95 146.398 334.792 142.89 338.663 139.716C342.509 136.475 346.949 133.919 351.982 132.046C358.804 129.508 364.84 128.808 370.089 129.946C375.338 131.085 378.849 134.038 380.624 138.807C382.423 143.642 381.07 148.518 376.566 153.436Z"
            fill="black"
          />
          <path
            d="M410.66 141.978L419.033 105.16L434.006 98.3948L456.702 148.625L441.246 155.609L428.851 128.175L420.478 164.993L405.505 171.758L382.809 121.528L398.265 114.544L410.66 141.978Z"
            fill="black"
          />
          <path
            d="M508.04 123.369L465.991 143.548L442.144 93.854L457.434 86.5162L474.861 122.831L493.974 113.659L476.547 77.344L491.838 70.0063L509.265 106.321L515.954 103.111L529.254 130.825L514.919 137.704L508.04 123.369Z"
            fill="black"
          />
          <path
            d="M535.575 84.4096L549.274 49.2248L565.079 44.7364L580.137 97.7597L563.822 102.393L555.598 73.434L541.899 108.619L526.094 113.107L511.036 60.0839L527.351 55.4507L535.575 84.4096Z"
            fill="black"
          />
          <path
            d="M608.057 40.3435L637.992 42.2867L634.421 97.291L617.497 96.1923L618.527 80.3257L613.449 79.9961L600.572 95.0937L581.109 93.8302L595.591 76.9248C592.095 75.1399 589.423 72.665 587.575 69.4999C585.731 66.2644 584.942 62.6016 585.208 58.5115C585.583 52.729 587.862 48.1677 592.045 44.8277C596.302 41.4216 601.64 39.9269 608.057 40.3435ZM620.106 55.9969L608.047 55.2141C606.496 55.1134 605.232 55.4917 604.256 56.3489C603.35 57.2107 602.852 58.3468 602.76 59.7571C602.673 61.097 603.023 62.2528 603.81 63.2244C604.671 64.1302 605.878 64.6334 607.429 64.7341L619.488 65.5169L620.106 55.9969Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip49">
            <rect
              width="645.491"
              height="314.789"
              fill="white"
              transform="translate(0.782349)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default React.memo(CompositionCover);
