import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Firebase, { firebaseContext } from './components/Firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <firebaseContext.Provider value={new Firebase()}>
      <App />
    </firebaseContext.Provider>
  </React.StrictMode>
);
