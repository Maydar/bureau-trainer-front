import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import urls from 'config/urls';

import './styles.scss';
import {shareText, SITE_LINK} from "config/constants";

const Main: React.FC = () => {
  return (
    <div className="main-page">
      <div className="page-header">
        <h1 className="page-header__title">Упражнения для&nbsp;дизайнеров</h1>
        <p className="page-header__subtitle">
          Посмотрите, как&nbsp;шрифт, цвет и&nbsp;композиция влияют
          на&nbsp;восприятие и&nbsp;настроение
        </p>
      </div>
      <div className="main-page__content">
        <div className="exercise">
          <div className="exercise__item exercise__item--font">
            <Link to={urls.fonts} className="exercise__link">
              <svg
              viewBox="0 0 620 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="1.10449" width={620} height="170.895" fill="black" />
              <path
                className="letter-r"
                d="M196.445 128.104C192.107 128.011 188.003 127.101 184.132 125.375C180.307 123.603 177.205 120.851 174.827 117.12L167.83 155.739H159.575L177.765 50.9353H185.461L183.502 61.6396C190.079 53.2907 198.311 49.2562 208.199 49.5361C215.288 49.7226 220.815 52.3579 224.78 57.4418C228.744 62.5258 230.797 69.7319 230.937 79.0602C230.983 81.9987 230.843 84.8438 230.517 87.5957L230.237 89.5546C229.071 97.7169 226.879 104.76 223.661 110.683C220.442 116.607 216.524 121.038 211.907 123.976C207.289 126.868 202.135 128.244 196.445 128.104ZM222.191 87.5957L222.611 80.9492C222.751 73.4866 221.398 67.633 218.553 63.3886C215.708 59.1443 211.487 56.9288 205.89 56.7422C200.993 56.6489 196.538 57.8616 192.527 60.3803C188.563 62.8523 185.204 66.467 182.453 71.2244L176.226 107.675C177.718 111.966 180.074 115.231 183.292 117.47C186.557 119.708 190.452 120.898 194.976 121.038C201.739 121.271 207.453 118.752 212.117 113.482C216.828 108.165 219.999 100.772 221.632 91.3037L222.191 87.5957Z"
              />
              <path
                className="letter-t"
                d="M568.26 48.8233L475.575 49.2028L475.34 85.3954L502.347 85.457L502.412 102.772L495.293 102.918L495.511 132.956L548.467 132.667L548.249 102.629L541.636 102.728L541.57 85.413L568.072 85.5211L568.26 48.8233Z"
              />
              <path
                d="M501.802 90.6023L501.783 73.7922"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M542.082 90.9695L542.063 74.1593"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g className="letter-sh">
                <path
                  d="M34.9512 27.2324L64.3403 27.3049"
                  strokeWidth="2.01609"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M78.0322 27.4424L107.421 27.5148"
                  strokeWidth="2.01609"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M119.559 27.3027L148.948 27.3752"
                  strokeWidth="2.01609"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1553 139.774L148.151 139.917"
                  strokeWidth="2.01609"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M46.1924 136.737L46.2372 30.2199C46.2376 29.2882 45.5918 28.4808 44.6828 28.2765L55.315 28.2162L54.6204 28.2864C53.591 28.3903 52.8073 29.2567 52.8069 30.2914L52.762 136.809C52.7617 137.74 53.4074 138.548 54.3164 138.752L42.6813 138.914L44.3788 138.742C45.4083 138.638 46.1919 137.772 46.1924 136.737Z" />
                <path d="M87.7434 28.3189L87.2102 28.0362L97.893 28.4775L97.1984 28.5476C96.1689 28.6515 95.3853 29.5179 95.3848 30.5526L95.34 137.07C95.3396 138.002 95.9854 138.809 96.8944 139.013L85.2593 139.175L86.9568 139.004C87.9862 138.9 88.7699 138.033 88.7703 136.999L88.8153 30.101C88.8156 29.3543 88.4032 28.6686 87.7434 28.3189Z" />
                <path d="M129.608 28.6557L128.235 27.9461L139.921 28.2906L138.841 28.6185C137.992 28.8765 137.411 29.6598 137.411 30.5477L137.417 137.381C137.417 138.312 138.063 139.118 138.972 139.321L127.337 139.483L128.537 139.363C129.565 139.26 130.349 138.396 130.352 137.363L130.698 30.4533C130.701 29.697 130.28 29.0029 129.608 28.6557Z" />
              </g>
              <g className="letter-i">
                <rect
                  x="246.065"
                  y="49.0825"
                  width="23.7591"
                  height="76.5591"
                />
                <rect x="315.082" y="49.082" width="24.8905" height="76.5591" />
                <path d="M292.453 49.082L269.825 125.641H293.43L316.212 49.082H292.453Z" />
              </g>
              <path
                className="letter-f"
                d="M411.887 6V58.2053C416.645 53.6881 422.282 51.4294 428.798 51.4294C438.935 51.4294 447.002 54.9714 453.001 62.0553C459 69.0365 462 78.7897 462 91.3149C462 101.889 459.259 110.821 453.777 118.111C448.192 125.4 440.848 129.044 431.746 129.044C424.092 129.044 417.472 126.888 411.887 122.577V153.992C411.887 156.559 412.404 158.355 413.439 159.382C414.473 160.511 416.593 161.076 419.8 161.076H424.609V162H389.391V161.076H394.2C397.51 161.076 399.63 160.563 400.561 159.536C401.596 158.612 402.113 156.815 402.113 154.146V122.577C396.527 126.888 389.908 129.044 382.254 129.044C373.152 129.044 365.86 125.4 360.378 118.111C354.793 110.924 352 101.992 352 91.3149C352 78.7897 355 69.0365 360.999 62.0553C366.998 54.9714 375.065 51.4294 385.202 51.4294C391.718 51.4294 397.355 53.6881 402.113 58.2053V19.0898C402.113 16.4205 401.441 14.7266 400.096 14.0079C398.751 13.2892 395.286 12.8272 389.701 12.6219V11.6979C398.803 10.9793 406.198 9.07996 411.887 6ZM402.113 121.653V59.2833C397.562 55.074 391.925 52.9694 385.202 52.9694C376.72 52.9694 370.876 57.3327 367.67 66.0592C364.877 73.2458 363.481 81.4077 363.481 90.5449C363.481 114.363 371.652 126.272 387.994 126.272C393.269 126.272 397.976 124.732 402.113 121.653ZM411.887 59.2833V121.653C416.024 124.732 420.731 126.272 426.006 126.272C442.348 126.272 450.519 114.363 450.519 90.5449C450.519 81.5104 449.174 73.3485 446.485 66.0592C443.072 57.3327 437.176 52.9694 428.798 52.9694C422.075 52.9694 416.438 55.074 411.887 59.2833Z"
              />
            </svg>
            </Link>
          </div>
          <div className="exercise__item exercise__item--color">
            <Link to={urls.colors} className="exercise__link">
              <svg
              viewBox="0 0 328 284"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="fig-square"
                width={328}
                height="283.519"
                fill="url(#paint0_linear)"
              />
              <path
                d="M93.8061 171.958H36.4848V96.2507H54.8709V155.735H85.1538V96.2507H103.54V155.735H112.192V189.263H93.8061V171.958ZM165.76 143.081C171.312 145.749 174.088 150.255 174.088 156.6C174.088 161.143 172.285 164.856 168.68 167.74C165.147 170.552 160.461 171.958 154.62 171.958H120.768V115.718H152.025C157.793 115.718 162.479 117.196 166.085 120.153C169.69 123.037 171.492 126.75 171.492 131.292C171.492 136.34 169.582 140.269 165.76 143.081ZM150.943 129.778H136.991V136.808H150.943C152.025 136.808 152.89 136.484 153.539 135.835C154.26 135.186 154.62 134.321 154.62 133.239C154.62 132.158 154.26 131.328 153.539 130.752C152.89 130.103 152.025 129.778 150.943 129.778ZM136.991 157.898H153.539C154.62 157.898 155.486 157.574 156.134 156.925C156.855 156.276 157.216 155.375 157.216 154.221C157.216 153.211 156.855 152.418 156.134 151.841C155.486 151.193 154.62 150.868 153.539 150.868H136.991V157.898ZM208.656 114.637C218.389 114.637 226.14 118.17 231.909 125.236C237.677 132.302 239.623 140.594 237.749 150.111H196.975C197.984 152.635 199.607 154.653 201.842 156.168C204.149 157.61 206.781 158.331 209.737 158.331C215.001 158.331 218.93 156.24 221.526 152.058L235.586 158.547C232.918 162.945 229.313 166.478 224.77 169.146C220.228 171.742 215.037 173.04 209.196 173.04C200.616 173.04 193.406 170.264 187.566 164.712C181.797 159.088 178.913 152.13 178.913 143.838C178.913 135.546 181.761 128.625 187.458 123.073C193.154 117.449 200.22 114.637 208.656 114.637ZM208.656 129.346C206.132 129.346 203.861 130.067 201.842 131.509C199.823 132.879 198.273 134.753 197.191 137.133H220.228C218.137 131.941 214.28 129.346 208.656 129.346ZM276.665 171.958H259.36V130.86H241.731V115.718H294.294V130.86H276.665V171.958Z"
                fill="black"
              />
              <path
                className="fig-color"
                d="M93.8061 171.958H36.4848V96.2507H54.8709V155.735H85.1538V96.2507H103.54V155.735H112.192V189.263H93.8061V171.958ZM165.76 143.081C171.312 145.749 174.088 150.255 174.088 156.6C174.088 161.143 172.285 164.856 168.68 167.74C165.147 170.552 160.461 171.958 154.62 171.958H120.768V115.718H152.025C157.793 115.718 162.479 117.196 166.085 120.153C169.69 123.037 171.492 126.75 171.492 131.292C171.492 136.34 169.582 140.269 165.76 143.081ZM150.943 129.778H136.991V136.808H150.943C152.025 136.808 152.89 136.484 153.539 135.835C154.26 135.186 154.62 134.321 154.62 133.239C154.62 132.158 154.26 131.328 153.539 130.752C152.89 130.103 152.025 129.778 150.943 129.778ZM136.991 157.898H153.539C154.62 157.898 155.486 157.574 156.134 156.925C156.855 156.276 157.216 155.375 157.216 154.221C157.216 153.211 156.855 152.418 156.134 151.841C155.486 151.193 154.62 150.868 153.539 150.868H136.991V157.898ZM208.656 114.637C218.389 114.637 226.14 118.17 231.909 125.236C237.677 132.302 239.623 140.594 237.749 150.111H196.975C197.984 152.635 199.607 154.653 201.842 156.168C204.149 157.61 206.781 158.331 209.737 158.331C215.001 158.331 218.93 156.24 221.526 152.058L235.586 158.547C232.918 162.945 229.313 166.478 224.77 169.146C220.228 171.742 215.037 173.04 209.196 173.04C200.616 173.04 193.406 170.264 187.566 164.712C181.797 159.088 178.913 152.13 178.913 143.838C178.913 135.546 181.761 128.625 187.458 123.073C193.154 117.449 200.22 114.637 208.656 114.637ZM208.656 129.346C206.132 129.346 203.861 130.067 201.842 131.509C199.823 132.879 198.273 134.753 197.191 137.133H220.228C218.137 131.941 214.28 129.346 208.656 129.346ZM276.665 171.958H259.36V130.86H241.731V115.718H294.294V130.86H276.665V171.958Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="20.1525"
                  y1="25.3644"
                  x2="318.619"
                  y2="274.492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FE1F1F" />
                  <stop offset="0.301983" stopColor="#811FFE" />
                  <stop offset="0.302083" stopColor="#AEFF01" />
                  <stop offset="0.645833" stopColor="#EBFF00" />
                  <stop offset="0.859275" stopColor="#ADFF00" />
                  <stop offset="0.859375" stopColor="#FF0CBB" />
                  <stop offset={1} stopColor="#DB00FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="73.606"
                  y1="143.996"
                  x2="191.633"
                  y2="242.761"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="0.0001" stopColor="white" />
                  <stop offset="0.0002" />
                  <stop offset="0.4375" />
                  <stop offset={1} stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="20.1525"
                  y1="25.3644"
                  x2="318.619"
                  y2="274.492"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AEFF01" />
                  <stop offset="0.645833" stopColor="#EBFF00" />
                  <stop offset="0.942083" stopColor="#ADFF00" />
                </linearGradient>
              </defs>
            </svg>
            </Link>
          </div>
          <div className="exercise__item exercise__item--animal">
            <Link to={urls.animals} className="exercise__link">
              <svg
              viewBox="0 0 312 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="elephant">
                <circle
                  className="fig-circle"
                  id="Ellipse 34"
                  cx={148}
                  cy={148}
                  r={148}
                />
                <path
                  className="fig-animal"
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M257.28 240.701C220.577 236.95 217.141 202.411 219.907 175.349L165.412 169.78C79.9903 161.049 92.9163 34.3047 175.64 42.7592C183.434 43.6394 190.946 46.1918 197.661 50.2412C204.375 54.2906 210.134 59.7414 214.541 66.2197C260.699 70.937 263.727 96.8047 258.709 145.897L254.109 190.909C252.928 202.468 256.605 210.402 268.512 211.619C278.675 212.657 284.465 203.685 289.906 190.858C291.885 192.242 305.925 202.223 307.868 203.686C301.977 216.605 294.255 244.48 257.28 240.701ZM217.084 122.158C203.106 120.729 199.682 142.64 215.813 144.288C229.339 145.561 231.116 123.592 216.975 122.147L217.084 122.158ZM161.286 183.209C173.112 184.418 207.885 185.223 207.885 185.223L200.936 253.218L168.189 250.366L165.037 200.384L61.7045 187.762L53.4704 241.39L15.2736 237.98C15.2736 237.98 20.612 131.869 22.7774 110.681C26.7912 71.4078 45.8223 50.8726 83.7493 52.88C93.2515 53.384 105.784 52.796 114 53.2235C73.8434 94.8494 94.066 176.339 161.259 183.206L161.286 183.209ZM93.0786 204.05L86.2705 243.725L64.4223 241.987L71.2805 201.822L93.0786 204.05ZM157.24 249.741L135.394 247.976L133.95 208.227L153.024 210.176L157.24 249.741Z"
                />
              </g>
            </svg>
            </Link>
          </div>
          <div className="exercise__item exercise__item--composition">
            <Link to={urls.composition} className="exercise__link">
              <svg
              viewBox="0 0 634 289"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fig-rocket"
                d="M456.45 61.6464L630.593 0L594.535 104.225L633.379 118.069L630.941 171.356C626.749 172.944 587.72 185.767 587.72 185.767L615.616 287.335L444.26 223.947C403.163 232.654 399.5 234.051 367.986 239.62L291.015 252.855C237.379 259.472 125.162 274.866 56.6193 229.171C-11.9231 183.476 0.699561 119.17 17.6114 94.3852C37.812 64.781 84.8304 12.8865 194.192 16.0211C302.985 19.1394 414.308 48.2955 456.45 61.6464Z"
              />
              <g filter="url(#filter0_b)">
                <path
                  d="M91.9858 137.392L55.083 158.195L59.4784 203.429L40.5197 193.413L37.2923 159.019L29.2999 154.797L15.799 180.354L0 172.008L34.3661 106.954L50.1651 115.3L36.6641 140.857L44.6565 145.079L74.607 128.212L91.9858 137.392Z"
                  fill="black"
                />
                <path
                  d="M73.4001 203.004C68.739 196.713 67.0517 189.591 68.3383 181.636C69.6248 173.681 73.4657 167.488 79.8608 163.057C86.3363 158.568 93.6898 156.989 101.921 158.32C110.153 159.651 116.599 163.462 121.26 169.753C126.001 175.985 127.729 183.079 126.442 191.033C125.156 198.988 121.275 205.21 114.799 209.699C108.404 214.13 101.091 215.68 92.8595 214.349C84.628 213.018 78.1416 209.236 73.4001 203.004ZM90.359 175.828C87.7539 177.891 86.1549 180.755 85.562 184.422C84.9691 188.088 85.578 191.345 87.3887 194.193C89.2798 196.983 91.9201 198.652 95.3095 199.2C98.6989 199.749 101.696 198.991 104.301 196.928C106.987 194.807 108.626 191.914 109.219 188.248C109.812 184.581 109.163 181.353 107.271 178.563C105.461 175.715 102.861 174.017 99.4712 173.469C96.0818 172.92 93.0444 173.707 90.359 175.828Z"
                  fill="black"
                />
                <path
                  d="M200.657 159.43L204.096 213.977L188.361 214.969L186.47 184.969L175.774 215.763L163.186 216.557L148.707 187.35L150.598 217.35L134.864 218.343L131.424 163.796L153.138 162.427L168.549 193.049L179.992 160.734L200.657 159.43Z"
                  fill="black"
                />
                <path
                  d="M233.441 208.177L216.949 211.464L206.269 157.862L258.84 147.388L269.519 200.989L253.027 204.275L245.222 165.105L225.637 169.007L233.441 208.177Z"
                  fill="black"
                />
                <path
                  d="M284.828 189.649C277.913 185.978 273.324 180.275 271.061 172.542C268.797 164.808 269.598 157.565 273.463 150.812C277.375 143.973 283.333 139.382 291.336 137.04C299.338 134.698 306.797 135.363 313.712 139.034C320.675 142.618 325.288 148.277 327.551 156.011C329.814 163.745 328.989 171.031 325.077 177.871C321.212 184.624 315.279 189.171 307.276 191.513C299.273 193.855 291.79 193.233 284.828 189.649ZM288.436 157.82C286.973 160.803 286.763 164.077 287.806 167.642C288.849 171.206 290.801 173.884 293.661 175.675C296.569 177.379 299.671 177.749 302.966 176.785C306.261 175.821 308.64 173.847 310.104 170.863C311.615 167.793 311.848 164.475 310.805 160.911C309.762 157.347 307.787 154.713 304.879 153.008C302.018 151.217 298.941 150.804 295.645 151.768C292.35 152.732 289.947 154.749 288.436 157.82Z"
                  fill="black"
                />
                <path
                  d="M371.413 139.743C377.98 140.515 382.156 143.297 383.939 148.091C385.699 152.82 384.978 157.312 381.776 161.568C378.575 165.825 373.592 169.211 366.828 171.728C361.837 173.585 356.86 174.577 351.898 174.703C346.912 174.764 342.494 173.941 338.644 172.233L343.157 158.442C346.082 159.672 349.271 160.205 352.724 160.042C356.242 159.854 359.282 159.284 361.844 158.331C366.112 156.743 367.831 154.832 367.001 152.599C366.488 151.22 365.456 150.557 363.906 150.611C362.356 150.664 360.169 151.216 357.345 152.267L349.661 155.125L344.896 142.319L352.58 139.461C355.404 138.41 357.42 137.398 358.628 136.425C359.836 135.453 360.184 134.277 359.671 132.898C358.84 130.665 356.29 130.342 352.021 131.93C349.46 132.883 346.787 134.439 344.001 136.597C341.281 138.73 339.216 141.218 337.806 144.06L325.376 136.573C327.174 132.764 329.992 129.286 333.83 126.139C337.643 122.925 342.046 120.39 347.037 118.533C353.801 116.017 359.786 115.323 364.99 116.452C370.195 117.58 373.677 120.509 375.437 125.237C377.22 130.031 375.879 134.867 371.413 139.743Z"
                  fill="black"
                />
                <path
                  d="M405.22 128.381L413.522 91.8743L428.368 85.1661L450.873 134.973L435.548 141.897L423.257 114.695L414.955 151.202L400.108 157.91L377.604 108.104L392.929 101.179L405.22 128.381Z"
                  fill="black"
                />
                <path
                  d="M501.778 109.93L460.084 129.938L436.437 80.6636L451.599 73.3877L468.879 109.396L487.831 100.301L470.551 64.2929L485.712 57.0171L502.992 93.0256L509.625 89.8424L522.813 117.323L508.599 124.144L501.778 109.93Z"
                  fill="black"
                />
                <path
                  d="M529.08 71.2989L542.664 36.411L558.335 31.9605L573.266 84.5364L557.089 89.1305L548.934 60.416L535.351 95.3038L519.679 99.7544L504.748 47.1785L520.926 42.5844L529.08 71.2989Z"
                  fill="black"
                />
                <path
                  d="M600.951 27.6046L630.633 29.5315L627.092 84.0716L610.311 82.9822L611.332 67.2495L606.298 66.9227L593.529 81.8928L574.23 80.64L588.59 63.8773C585.124 62.1075 582.474 59.6534 580.642 56.5151C578.814 53.3068 578.031 49.6749 578.294 45.6194C578.667 39.8857 580.926 35.3629 585.073 32.051C589.295 28.6737 594.588 27.1916 600.951 27.6046ZM612.898 43.126L600.941 42.3498C599.403 42.2499 598.15 42.625 597.182 43.475C596.284 44.3295 595.789 45.456 595.698 46.8545C595.612 48.183 595.959 49.329 596.739 50.2925C597.594 51.1906 598.79 51.6896 600.328 51.7894L612.285 52.5656L612.898 43.126Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b"
                  x="-29.7469"
                  y="-2.20975"
                  width="690.127"
                  height="250.299"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="14.8734" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="page-copyright">
        <p className="page-copyright__school">
          <a href="https://bureau.ru/school" className="bureau-school-link">
            Сделано в&nbsp;Школе&nbsp;Бюро&nbsp;Горбунова
          </a>
        </p>
        <p className="page-copyright__school">
          <Link className={"bureau-school-link"} to={urls.greetings}>Шрифты и&nbsp;иконки</Link>
        </p>
      </div>
      <div className="main-page__social">
        <Link
          to={`https://telegram.me/share/url?url=${SITE_LINK}`}
          className="main-page__social-link main-page__social-link--telegram"
        >
          <img src="/static/tg.svg" alt="Telegram" />
        </Link>
        <Link to={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}>
          <img src="/static/tw.svg" alt="Twitter" />
        </Link>
        <Link to={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}>
          <img src="/static/fb.svg" alt="Facebook" />
        </Link>
        <Link to="#">
          <img src="/static/inst.svg" alt="Instagram" />
        </Link>
      </div>
    </div>
  );
};

export default observer(Main);
