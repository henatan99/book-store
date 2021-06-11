import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Sapiens: A Brief History of Humankind',
      category: 'History',
    },
  ],

};

const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
