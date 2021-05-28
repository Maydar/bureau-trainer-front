import * as React from 'react';

import { NavLink } from 'react-router-dom';
import urls from 'config/urls';

import './Greetings.modules.scss';
import { shareText, SITE_LINK } from 'config/constants';
import TG from "components/icons/ui/Social/TG/TG";
import Twitter from "components/icons/ui/Social/Twitter";
import FB from "components/icons/ui/Social/FB";
import VK from "components/icons/ui/Social/VK";
import FacebookBlack from "components/icons/ui/Social/FacebookBlack";

const Greetings: React.FC = () => {
  return (
    <>
      <div styleName="content">
        <NavLink to={urls.root} styleName="root-link">
          Упражнения для дизайнеров
        </NavLink>
        <h1 styleName="header">
          Благодарим компании
          <br />
          и&nbsp;дизайнеров
        </h1>
        <div styleName="content__inner columns">
          <div styleName="column">
            <div styleName="section">
              <a href="https://type.today/" styleName="section__title">
                Шрифты от TYPE TODAY
              </a>
              <div styleName="section__items">
                <div styleName="section__item">
                  <div styleName="section__item-title">Druk Wide</div>
                  <div styleName="section__item-text">
                    Бёртон Хасебе • Юрий Остроменцкий • Илья Рудерман •
                    Commercial Type
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">STAG</div>
                  <div styleName="section__item-text">
                    Илья Рудерман • Commercial Type • Кристиан Шварц
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">PILAR</div>
                  <div styleName="section__item-text">
                    Илья Рудерман • Юрий Остроменцкий • CSTM Fonts
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">AUSTIN</div>
                  <div styleName="section__item-text">
                    Пол Барнс • Commercial Type • Илья Рудерман
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORBERT SCHMAL</div>
                  <div styleName="section__item-text">
                    Филипп Ноймайер, TypeMates
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">GIORGIO SANS</div>
                  <div styleName="section__item-text">
                    Илья Рудерман • Винсент Чан • Кристиан Шварц • Commercial
                    Type
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">
                    PARMIGIANO CAPTION PRO
                  </div>
                  <div styleName="section__item-text">
                    Илья Рудерман • Рикардо Олоку • Джонатан Пьерини •
                    Typotheque • Irina Smirnova (cyr) • Irene Vlachou (greek)
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">CSTM Xprmntl 01</div>
                  <div styleName="section__item-text">
                    Илья Рудерман • CSTM Fonts • Юрий Остроменцкий
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORMALIDAD EXTENDED</div>
                  <div styleName="section__item-text">
                    CSTM Fonts • Илья Рудерман • Юрий Остроменцкий • Анна
                    Данилова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORMALIDAD EXTENDED</div>
                  <div styleName="section__item-text">
                    CSTM Fonts • Илья Рудерман • Юрий Остроменцкий • Анна
                    Данилова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">KARLOFF NEUTRAL</div>
                  <div styleName="section__item-text">
                    Никола Джурек • Петер Билак • Петер ван Росмален •
                    Typotheque • Maria Doreuli (cyr&greek)
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">DISPLACE 2.0</div>
                  <div styleName="section__item-text">Денис Серебряков</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">AMALTA</div>
                  <div styleName="section__item-text">Вера Евстафьева</div>
                </div>
              </div>
            </div>
            <div styleName="section section_desktop">
              <a href="http://sergeychikin.ru/365/" styleName="section__title">
                Иконки Сергея Чикина
              </a>
            </div>
          </div>
          <div styleName="column">
            <div styleName="section">
              <a href="https://www.paratype.ru/" styleName="section__title">
                от PARATYPE
              </a>
              <div styleName="section__items">
                <div styleName="section__item">
                  <div styleName="section__item-title">Kudryashev Display</div>
                  <div styleName="section__item-text">
                    Ольга Умпелева • Изабелла Чаева • Александра Королькова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">VAST</div>
                  <div styleName="section__item-text">
                    Манвел Шмавонян • Александр Любовенко
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Circe Contrast</div>
                  <div styleName="section__item-text">
                    Александра Королькова • Изабелла Чаева
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Fence</div>
                  <div styleName="section__item-text">
                    Александра Королькова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Fatum</div>
                  <div styleName="section__item-text">Светлана Морозова</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Didona</div>
                  <div styleName="section__item-text">Владимир Ефимов</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Ambidexter</div>
                  <div styleName="section__item-text">Егор Белозёров</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Harry plotter</div>
                  <div styleName="section__item-text">Захар Ящин</div>
                </div>
              </div>
            </div>
            <div styleName="section">
              <p styleName="section__title-without-link">Другие</p>
              <div styleName="section__items">
                <div styleName="section__item">
                  <a
                    href="https://yurigordon.com/ru/shop/fonts/mr-palkerson"
                    styleName="section__item-title section__item-title_link"
                  >
                    Mr Palkerson
                  </a>
                  <div styleName="section__item-text">Юрий Гордон</div>
                </div>
                <div styleName="section__item">
                  <a
                    href="https://thenorthernblock.co.uk/fonts/p/eldwin"
                    styleName="section__item-title section__item-title_link"
                  >
                    Eldwin
                  </a>
                  <div styleName="section__item-text">The Northern Block</div>
                </div>
                <div styleName="section__item">
                  <a
                    href="https://www.behance.net/gallery/84911751/Misto-Font-Free-(Cyrillic-and-Latin)"
                    styleName="section__item-title section__item-title_link"
                  >
                    Misto
                  </a>
                  <div styleName="section__item-text">
                    Katerina Korolevtseva
                  </div>
                </div>
              </div>
            </div>
            <section styleName="section section_mobile">
              <a href="http://sergeychikin.ru/365/" styleName="section__title">
                Иконки Сергея Чикина
              </a>
            </section>
          </div>
        </div>
        <div styleName="shares shares_mob">
          <a
            target={'_blank'}
            href={`https://telegram.me/share/url?url=${SITE_LINK}`}
            styleName="share"
          >
            <TG size="mc" color={"black"}/>
          </a>
          <a
            target={'_blank'}
            href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
            styleName="share share_twitter"
          >
            <Twitter size="mc" color={"black"}/>
          </a>
          <a
            target={'_blank'}
            href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
            styleName="share"
          >
            <FacebookBlack size="mc" color={"black"}/>
          </a>
          <a target={'_blank'} href={`https://vk.com/share.php?url=${SITE_LINK}`} styleName="share">
            <VK size="mc" color={"black"}/>
          </a>
        </div>
      </div>
      <div styleName="shares shares_desktop">
        <a
          target={'_blank'}
          href={`https://telegram.me/share/url?url=${SITE_LINK}`}
          styleName="share"
        >
          <TG size="mc" color={"black"}/>
        </a>
        <a
          target={'_blank'}
          href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
          styleName="share share_twitter"
        >
          <Twitter size="mc" color={"black"}/>
        </a>
        <a
          target={'_blank'}
          href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
          styleName="share"
        >
          <FacebookBlack size="mc" color={"black"}/>
        </a>
        <a target={'_blank'} href={`https://vk.com/share.php?url=${SITE_LINK}`} styleName="share">
          <VK size="mc" color={"black"}/>
        </a>
      </div>
    </>
  );
};

export default Greetings;
