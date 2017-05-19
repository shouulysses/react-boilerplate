import { Router, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/style.css';
import Routes from './route';

ReactDOM.render((
  <Router history={browserHistory} routes={Routes} />
), document.getElementById('root'));
