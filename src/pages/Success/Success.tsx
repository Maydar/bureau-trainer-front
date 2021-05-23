import * as React from 'react';

import TaskDescription from 'components/common/TaskDescription';


import './Success.modules.scss';

const Success: React.FC = () => {
  return (
    <>
      <div className="task-description">
        <TaskDescription color='white' />
      </div>
      <div styleName="content">
      <div styleName="content__inner">
        <div styleName="next-message"/>
        <div styleName="text">Покажите упражнения знакомым, студентам или коллегам, если было полезно</div>
        <div styleName="share-icons">
          <div styleName="share share_tg"/>
          <div styleName="share share_twitter"/>
          <div styleName="share share_fb"/>
          <div styleName="share share_it"/>
        </div>
      </div>
      <div styleName="text text_bottom">Напишите, если у вас есть идеи упражнений: exercises.design@gmail.com</div>
    </div>
    </>)
};

export default Success;
