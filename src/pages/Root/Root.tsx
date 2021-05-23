import * as React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { observer } from 'mobx-react';

import urls from 'config/urls';
import Main from 'pages/Main';
import FontsMood from 'pages/FontsMood';
import ColorMood from 'pages/ColorMood';
import FontsAnimals from 'pages/FontsAnimals';
import Composition from 'pages/Composition';
import Success from 'pages/Success';

const Root: React.FC = () => {
  return (
    <Switch>
      <Route path={urls.fonts} component={FontsMood} />
      <Route path={urls.colors} component={ColorMood} />
      <Route path={urls.animals} component={FontsAnimals} />
      <Route path={urls.composition} component={Composition} />
      <Route path={urls.success} component={Success} />
      <Route path={urls.root} component={Main} />
    </Switch>
  );
};

export default observer(Root);
