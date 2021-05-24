import { hot } from "react-hot-loader/root";
import * as React from "react";
import {useEffect, useMemo} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

import Root from "pages/Root";
import ScrollToTop from "utils/scrollToTop";

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Root} />
      </Switch>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default hot(observer(App));
