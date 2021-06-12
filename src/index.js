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
      title: 'The Theory of Everything',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Adwa: African Victory',
      category: 'History',
    },
  ],

};

const store = configureStore(initialState);

store.subscribe(() => {
  const {
    books,
  } = store.getState();
  console.log('books', books);
});

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
