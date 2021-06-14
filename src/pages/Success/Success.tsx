import * as React from 'react';

import TaskDescription from 'components/common/TaskDescription';

import { shareText, SITE_LINK } from 'config/constants';
import TG from 'components/icons/ui/Social/TG';
import Twitter from 'components/icons/ui/Social/Twitter';
import FBIcon from 'components/icons/ui/Social/FB';
import VK from 'components/icons/ui/Social/VK';
import {shareFB, ymReachGoal} from 'utils/metrika';

import './Success.modules.scss';

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
              styleName={'share'}
              onClick={() => {
                ymReachGoal('tg-share');
              }}
            >
              <TG size="m" color={'colored'} />
            </a>
            <a
              target={'_blank'}
              href={`http://twitter.com/share?url=${SITE_LINK}&text=${shareText}&image=${SITE_LINK}/static/train-image.png`}
              styleName={'share'}
              onClick={() => {
                ymReachGoal('tw-share');
              }}
            >
              <Twitter size="m" color={'colored'} />
            </a>
            <div
              // target={'_blank'}
              // href={`https://www.facebook.com/sharer/sharer.php?u=#${SITE_LINK}`}
              styleName={'share'}
              onClick={() => {//@ts-ignore
                shareFB();
                ymReachGoal('fb-share');
              }}
            >
              <FBIcon size="m" color={'colored'} />
            </div>
            <a
              target={'_blank'}
              href={`https://vk.com/share.php?url=${SITE_LINK}`}
              styleName={'share'}
              onClick={() => {
                ymReachGoal('vk-share');
              }}
            >
              <VK size="m" color={'colored'} />
            </a>
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
