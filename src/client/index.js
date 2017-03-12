import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
require('./stylesheets/styles.scss');

render(
  <App />,
  document.getElementById('root')
);
