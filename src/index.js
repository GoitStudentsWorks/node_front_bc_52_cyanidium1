import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from './modules/shared/container/container';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/node_front_bc_54_cyanidium1">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <Container> */}
        <ToastContainer autoClose="1000" theme="light" />
        <App />
        {/* </Container> */}
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
