import * as React from 'react';
import { NavLink } from "react-router-dom";

import './TaskDescription.modules.scss';

type Props = {
  title?: string;
  text?: string;
  color?: 'white' | 'black';
};

const TaskDescription: React.FC<Props> = ({ title, text, color } : Props) => {
  return <div styleName={`task-description task-description_${color}`}>
    <NavLink to="/" styleName="task-description__title">{ title }</NavLink>
    <p styleName="task-description__text">{ text }</p>
  </div>
};

TaskDescription.defaultProps = {
  color: 'black',
  title: 'Упражнения для дизайнеров'
};

export default React.memo(TaskDescription);
