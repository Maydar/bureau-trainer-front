import * as React from 'react';

import TaskDescription from 'components/common/TaskDescription';

import './Success.modules.scss';
import {FACEBOOK_LINK, shareText, SITE_LINK, TWIITER_LINK} from 'config/constants';

const Success: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription color="white" />
      </div>
      <div styleName="content">
        <div styleName="content__inner">
          <div styleName="next-message" />
          <div styleName="text">
            Покажите упражнения знакомым, студентам или&nbsp;коллегам, если было
            полезно:
          </div>
          <div styleName="share-icons">
            <a
              target={'_blank'}
              href={`https://telegram.me/share/url?url=${SITE_LINK}`}
              styleName="share share_tg"
            />
            <a
              target={'_blank'}
              href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
              styleName="share share_twitter"
            />
            <a
              target={'_blank'}
              href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
              styleName="share share_fb"
            />
            <a target={'_blank'} href={'#'} styleName="share share_it" />
          </div>
        </div>
        <div styleName="text text_bottom">
          Напишите, если у&nbsp;вас есть идеи упражнений:{' '}
          <a href="mailto:exercises.design@gmail.com">
            exercises.design@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Success;
