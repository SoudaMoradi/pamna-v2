import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "/node_modules/primeflex/primeflex.css";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HashRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</HashRouter>
);

