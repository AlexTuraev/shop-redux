import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter } from 'react-router-dom';
import {DoorProvider} from './components/door-context';
import DoorServices from './services/door-services';

const doorServices = new DoorServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <DoorProvider value={doorServices}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DoorProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);