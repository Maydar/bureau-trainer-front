import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import urls from 'config/urls';

import './styles.scss';
import {shareText, SITE_LINK} from "config/constants";
import FontMoodCover from "components/icons/covers/FontMoodCover";
import ColorMoodCover from "components/icons/covers/ColorMoodCover";
import VK from "components/icons/ui/Social/VK";
import FB from "components/icons/ui/Social/FB";
import TG from "components/icons/ui/Social/TG";
import Twitter from "components/icons/ui/Social/Twitter";

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
              <FontMoodCover/>
            </Link>
          </div>
          <div className="exercise__item exercise__item--color">
            <Link to={urls.colors} className="exercise__link">
              <ColorMoodCover/>
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

            </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="page-copyright">
        <p className="page-copyright__school">
          <a href="https://bureau.ru/school" className="bureau-school-link">
            Сделано в&nbsp;Школе&nbsp;Бюро&nbsp;Горбунова<span className="bureau-school-link-icon"/>
          </a>
        </p>
        <p className="page-copyright__school">
          <Link className={"bureau-school-link"} to={urls.greetings}>Шрифты и&nbsp;иконки<span className="bureau-school-link-icon"/></Link>
        </p>
      </div>

    </div>
  );
};

export default observer(Main);
