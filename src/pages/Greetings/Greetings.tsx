import * as React from 'react';

import { NavLink } from 'react-router-dom';
import urls from 'config/urls';

import './Greetings.modules.scss';
import { shareText, SITE_LINK } from 'config/constants';
import TG from 'components/icons/ui/Social/TG/TG';
import Twitter from 'components/icons/ui/Social/Twitter';
import FB from 'components/icons/ui/Social/FB';
import VK from 'components/icons/ui/Social/VK';
import FacebookBlack from 'components/icons/ui/Social/FacebookBlack';
import { shareFB, ymReachGoal } from 'utils/metrika';

const Greetings: React.FC = () => {
  return (
    <>
      <div styleName="content">
        <NavLink to={urls.root} styleName="root-link">
          Упражнения для дизайнеров
        </NavLink>
        <h1 styleName="header">Авторы, шрифты и&nbsp;иконки</h1>
        <div styleName="authors">
          <p styleName="authors__site">
            Арт-директор проекта&nbsp;Михаил&nbsp;Нозик,
            дизайнер&nbsp;Наталия&nbsp;Порохина,
            редактор&nbsp;Ксения&nbsp;Павлова,
            разработчики&nbsp;Майдар&nbsp;Эрдынеев и&nbsp;Александр&nbsp;Сушко
          </p>
        </div>
        <div styleName="content__inner">
          <div styleName="section">
            <a
              href="http://sergeychikin.ru/365/"
              target="_blank"
              styleName="section__title"
            >
              Иконки Сергея&nbsp;Чикина
            </a>
          </div>
          <div styleName="section">
            <a href="https://type.today/" styleName="section__title">
              Шрифты от&nbsp;Тайп тудей
            </a>
            <div styleName="section__items">
              <div styleName="section__item">
                <div styleName="section__item-title">DRUK WIDE</div>
                <div styleName="section__item-text">
                  Бёртон&nbsp;Хасебе, Юрий&nbsp;Остроменцкий,
                  Илья&nbsp;Рудерман, Commercial Type
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">STAG</div>
                <div styleName="section__item-text">
                  Илья&nbsp;Рудерман, Commercial Type, Кристиан&nbsp;Шварц
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">PILAR</div>
                <div styleName="section__item-text">
                  Илья&nbsp;Рудерман, Юрий&nbsp;Остроменцкий, CSTM&nbsp;Fonts
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">AUSTIN</div>
                <div styleName="section__item-text">
                  Пол&nbsp;Барнс, Commercial&nbsp;Type, Илья&nbsp;Рудерман
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
                  Илья&nbsp;Рудерман, Винсент&nbsp;Чан, Кристиан&nbsp;Шварц,
                  Commercial&nbsp;Type
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">
                  PARMIGIANO&nbsp;CAPTION&nbsp;PRO
                </div>
                <div styleName="section__item-text">
                  Илья&nbsp;Рудерман, Рикардо&nbsp;Олоку,
                  Джонатан&nbsp;Пьерини, Typotheque,
                  Irina&nbsp;Smirnova&nbsp;(cyr),
                  Irene&nbsp;Vlachou&nbsp;(greek)
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">CSTM Xprmntl 01</div>
                <div styleName="section__item-text">
                  Илья&nbsp;Рудерман, CSTM&nbsp;Fonts, Юрий&nbsp;Остроменцкий
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">NORMALIDAD EXTENDED</div>
                <div styleName="section__item-text">
                  CSTM&nbsp;Fonts, Илья&nbsp;Рудерман, Юрий&nbsp;Остроменцкий, Анна&nbsp;Данилова
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">KARLOFF NEUTRAL</div>
                <div styleName="section__item-text">
                  Никола&nbsp;Джурек, Петер&nbsp;Билак,
                  Петер&nbsp;ван&nbsp;Росмален, Typotheque,
                  Maria&nbsp;Doreuli&nbsp;(cyr&greek)
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">DISPLACE&nbsp;2.0</div>
                <div styleName="section__item-text">Денис&nbsp;Серебряков</div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">AMALTA</div>
                <div styleName="section__item-text">Вера&nbsp;Евстафьева</div>
              </div>
            </div>
          </div>
          <div styleName="section">
            <a href="https://www.paratype.ru/" styleName="section__title">
              От&nbsp;Паратайпа
            </a>
            <div styleName="section__items">
              <div styleName="section__item">
                <div styleName="section__item-title">Kudryashev Display</div>
                <div styleName="section__item-text">
                  Ольга&nbsp;Умпелева, Изабелла&nbsp;Чаева,
                  Александра&nbsp;Королькова
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">VAST</div>
                <div styleName="section__item-text">
                  Манвел&nbsp;Шмавонян, Александр&nbsp;Любовенко
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">Circe Contrast</div>
                <div styleName="section__item-text">
                  Александра&nbsp;Королькова, Изабелла&nbsp;Чаева
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
            </div>
          </div>
          <div styleName="section">
            <p styleName="section__title-without-link">Другие шрифты</p>
            <div styleName="section__items">
              <div styleName="section__item">
                <div styleName="section__item-title">Atyp</div>
                <div styleName="section__item-text">
                  Tomáš&nbsp;Brousil
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">TT Bluescreens</div>
                <div styleName="section__item-text">
                  Type Type
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">Eldwin</div>
                <div styleName="section__item-text">
                  The&nbsp;Northern&nbsp;Block
                </div>
              </div>
              <div styleName="section__item">
                <a styleName="section__item-title">
                  Misto
                </a>
                <div styleName="section__item-text">
                  Katerina&nbsp;Korolevtseva
                </div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">Harry plotter</div>
                <div styleName="section__item-text">Захар&nbsp;Ящин</div>
              </div>
              <div styleName="section__item">
                <div styleName="section__item-title">Ambidexter</div>
                <div styleName="section__item-text">Егор&nbsp;Белозёров</div>
              </div>
            </div>
          </div>
        </div>
        <div styleName="shares shares_mob">
          <div styleName="shares__text">Поделиться упражнениями:</div>
          <div styleName="shares__items">
            <a
              target={'_blank'}
              href={`https://telegram.me/share/url?url=${SITE_LINK}`}
              styleName="share"
              onClick={() => {
                ymReachGoal('telegram-share');
              }}
            >
              <TG size="mc" color={'colored'} />
            </a>
            <a
              target={'_blank'}
              href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
              styleName="share"
              onClick={() => {
                ymReachGoal('tw-share');
              }}
            >
              <Twitter size="mc" color={'colored'} />
            </a>
            <a
              target={'_blank'}
              href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
              styleName="share"
              onClick={() => {
                shareFB();
                ymReachGoal('fb-share');
              }}
            >
              <FacebookBlack size="mc" color={'colored'} />
            </a>
            <a
              target={'_blank'}
              href={`https://vk.com/share.php?url=${SITE_LINK}`}
              styleName="share"
              onClick={() => {
                ymReachGoal('vk-share');
              }}
            >
              <VK size="mc" color={'colored'} />
            </a>
          </div>
        </div>
      </div>
      <div styleName="shares shares_desktop">
        <div styleName="shares__text">Поделиться упражнениями:</div>
        <div styleName="shares__items">
          <a
            target={'_blank'}
            href={`https://telegram.me/share/url?url=${SITE_LINK}`}
            styleName="share"
            onClick={() => {
              ymReachGoal('tg-share');
            }}
          >
            <TG size="mc" color={'colored'} />
          </a>
          <a
            target={'_blank'}
            href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
            styleName="share"
            onClick={() => {
              ymReachGoal('tw-share');
            }}
          >
            <Twitter size="mc" color={'colored'} />
          </a>
          <div
            //target={'_blank'}
            //href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
            styleName="share"
            onClick={() => {
              shareFB();
              ymReachGoal('fb-share');
            }}
          >
            <FacebookBlack size="mc" color={'colored'} />
          </div>
          <a
            target={'_blank'}
            href={`https://vk.com/share.php?url=${SITE_LINK}`}
            styleName="share"
            onClick={() => {
              ymReachGoal('vk-share');
            }}
          >
            <VK size="mc" color={'colored'} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Greetings;
