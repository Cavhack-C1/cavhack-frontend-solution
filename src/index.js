import React from 'react';
import ReactDOM from 'react-dom';

import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory()

ReactDOM.render(<Router history={history}><App history={history} /></Router>, document.getElementById('root'));
registerServiceWorker();
