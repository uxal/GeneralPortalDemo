import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

/**
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
*/


/*Import the components*/
import AppRouting from './router';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
    <Provider store={store}>
        <AppRouting />
    </Provider>,
    document.getElementById('app')
);
