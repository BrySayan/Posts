import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Asegúrate de que App sea el componente predeterminado exportado en App.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);