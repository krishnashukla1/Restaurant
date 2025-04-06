// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RestaurantProvider } from './contexts/RestaurentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RestaurantProvider>
        <App />
    </RestaurantProvider>
);
