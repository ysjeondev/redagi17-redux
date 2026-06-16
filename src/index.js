import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './modules';

import { createStore } from 'redux';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

);

const root = createRoot(
    document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);