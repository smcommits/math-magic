import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/Home';
import QuotePage from './components/Quote';
import Nav from './components/Nav';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <div>
          <Nav />
          <Route path="/" exact component={HomePage} />
          <Route path="/calculator" component={App} />
          <Route path="/quotes" component={QuotePage} />
        </div>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
