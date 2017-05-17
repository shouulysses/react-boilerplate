import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/style.css';
import { Router, browserHistory } from 'react-router';
import Routes from './route';

ReactDOM.render((
  <Router history={browserHistory} routes={Routes}/>
), document.getElementById('root'));
