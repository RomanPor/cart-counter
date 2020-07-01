import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {DataServiceProvider} from './components/data-service-context/data-service-context';
import DataService from "./data-service";
import store from './store';

const dataService = new DataService();


ReactDOM.render(
    <Provider store={store}>
        <DataServiceProvider value={dataService}>
            <Router>
                <App />
             </Router>
        </DataServiceProvider>
    </Provider>,
  document.getElementById('root')
);
