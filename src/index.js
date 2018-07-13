import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

export const router = (
    <BrowserRouter>
        {Routes}
    </BrowserRouter>
)



ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
