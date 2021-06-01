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
                    Бёртон&nbsp;Хасебе • Юрий&nbsp;Остроменцкий • Илья&nbsp;Рудерман •
                    Commercial Type
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">STAG</div>
                  <div styleName="section__item-text">
                    Илья&nbsp;Рудерман • Commercial Type • Кристиан&nbsp;Шварц
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">PILAR</div>
                  <div styleName="section__item-text">
                    Илья&nbsp;Рудерман • Юрий&nbsp;Остроменцкий • CSTM Fonts
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">AUSTIN</div>
                  <div styleName="section__item-text">
                    Пол&nbsp;Барнс • Commercial Type • Илья&nbsp;Рудерман
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORBERT SCHMAL</div>
                  <div styleName="section__item-text">
                    Филипп&nbsp;Ноймайер, TypeMates
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">GIORGIO SANS</div>
                  <div styleName="section__item-text">
                    Илья&nbsp;Рудерман • Винсент&nbsp;Чан • Кристиан&nbsp;Шварц • Commercial
                    Type
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">
                    PARMIGIANO CAPTION PRO
                  </div>
                  <div styleName="section__item-text">
                    Илья&nbsp;Рудерман • Рикардо&nbsp;Олоку • Джонатан&nbsp;Пьерини •
                    Typotheque • Irina&nbsp;Smirnova&nbsp;(cyr) • Irene&nbsp;Vlachou&nbsp;(greek)
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">CSTM Xprmntl 01</div>
                  <div styleName="section__item-text">
                    Илья&nbsp;Рудерман • CSTM Fonts • Юрий&nbsp;Остроменцкий
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORMALIDAD EXTENDED</div>
                  <div styleName="section__item-text">
                    CSTM Fonts • Илья&nbsp;Рудерман • Юрий&nbsp;Остроменцкий • Анна&nbsp;Данилова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">NORMALIDAD EXTENDED</div>
                  <div styleName="section__item-text">
                    CSTM Fonts • Илья&nbsp;Рудерман • Юрий&nbsp;Остроменцкий • Анна&nbsp;Данилова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">KARLOFF NEUTRAL</div>
                  <div styleName="section__item-text">
                    Никола&nbsp;Джурек • Петер&nbsp;Билак • Петер&nbsp;ван&nbsp;Росмален •
                    Typotheque • Maria&nbsp;Doreuli&nbsp;(cyr&greek)
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">DISPLACE 2.0</div>
                  <div styleName="section__item-text">Денис&nbsp;Серебряков</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">AMALTA</div>
                  <div styleName="section__item-text">Вера&nbsp;Евстафьева</div>
                </div>
              </div>
            </div>
            <div styleName="section section_desktop">
              <a href="http://sergeychikin.ru/365/" styleName="section__title">
                Иконки Сергея&nbsp;Чикина
              </a>
            </div>
          </div>
          <div styleName="column">
            <div styleName="section">
              <a href="https://www.paratype.ru/" styleName="section__title">
                от&nbsp;PARATYPE
              </a>
              <div styleName="section__items">
                <div styleName="section__item">
                  <div styleName="section__item-title">Kudryashev Display</div>
                  <div styleName="section__item-text">
                    Ольга&nbsp;Умпелева • Изабелла&nbsp;Чаева • Александра&nbsp;Королькова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">VAST</div>
                  <div styleName="section__item-text">
                    Манвел&nbsp;Шмавонян • Александр&nbsp;Любовенко
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Circe Contrast</div>
                  <div styleName="section__item-text">
                    Александра&nbsp;Королькова • Изабелла&nbsp;Чаева
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Fence</div>
                  <div styleName="section__item-text">
                    Александра&nbsp;Королькова
                  </div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Fatum</div>
                  <div styleName="section__item-text">Светлана&nbsp;Морозова</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Didona</div>
                  <div styleName="section__item-text">Владимир&nbsp;Ефимов</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Ambidexter</div>
                  <div styleName="section__item-text">Егор&nbsp;Белозёров</div>
                </div>
                <div styleName="section__item">
                  <div styleName="section__item-title">Harry plotter</div>
                  <div styleName="section__item-text">Захар&nbsp;Ящин</div>
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
                    Mr&nbsp;Palkerson
                  </a>
                  <div styleName="section__item-text">Юрий&nbsp;Гордон</div>
                </div>
                <div styleName="section__item">
                  <a
                    href="https://thenorthernblock.co.uk/fonts/p/eldwin"
                    styleName="section__item-title section__item-title_link"
                  >
                    Eldwin
                  </a>
                  <div styleName="section__item-text">The&nbsp;Northern&nbsp;Block</div>
                </div>
                <div styleName="section__item">
                  <a
                    href="https://www.behance.net/gallery/84911751/Misto-Font-Free-(Cyrillic-and-Latin)"
                    styleName="section__item-title section__item-title_link"
                  >
                    Misto
                  </a>
                  <div styleName="section__item-text">
                    Katerina&nbsp;Korolevtseva
                  </div>
                </div>
              </div>
            </div>
            <section styleName="section section_mobile">
              <a href="http://sergeychikin.ru/365/" styleName="section__title">
                Иконки Сергея&nbsp;Чикина
              </a>
            </section>
          </div>
        </div>
        <div styleName="shares shares_mob">
          <div styleName="shares__text">
            Поделиться упражнениями:
          </div>
          <div styleName="shares__items">
            <a
              target={'_blank'}
              href={`https://telegram.me/share/url?url=${SITE_LINK}`}
              styleName="share"
            >
              <TG size="mc" color={"colored"}/>
            </a>
            <a
              target={'_blank'}
              href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
              styleName="share"
            >
              <Twitter size="mc" color={"colored"}/>
            </a>
            <a
              target={'_blank'}
              href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
              styleName="share"
            >
              <FacebookBlack size="mc" color={"colored"}/>
            </a>
            <a target={'_blank'} href={`https://vk.com/share.php?url=${SITE_LINK}`} styleName="share">
              <VK size="mc" color={"colored"}/>
            </a>
          </div>
        </div>
      </div>
      <div styleName="shares shares_desktop">
        <div styleName="shares__text">
          Поделиться упражнениями:
        </div>
        <div styleName="shares__items">
          <a
            target={'_blank'}
            href={`https://telegram.me/share/url?url=${SITE_LINK}`}
            styleName="share"
          >
            <TG size="mc" color={"colored"}/>
          </a>
          <a
            target={'_blank'}
            href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
            styleName="share"
          >
            <Twitter size="mc" color={"colored"}/>
          </a>
          <a
            target={'_blank'}
            href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
            styleName="share"
          >
            <FacebookBlack size="mc" color={"colored"}/>
          </a>
          <a target={'_blank'} href={`https://vk.com/share.php?url=${SITE_LINK}`} styleName="share">
            <VK size="mc" color={"colored"}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Greetings;
