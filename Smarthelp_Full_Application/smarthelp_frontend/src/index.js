import React from 'react';

// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { AuthContextProvider } from './context/AuthContext';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>);