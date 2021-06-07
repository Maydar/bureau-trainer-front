//  https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
import 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import stores from 'store';

import App from './App';

import './styles/styles.scss';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
