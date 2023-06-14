import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);