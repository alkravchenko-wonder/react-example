import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import TrackingService from './services/tracking-service'
import { TrackingServiceProvider } from './tracking-service-context'
import store from './store'

const trackingService = new TrackingService();

ReactDOM.render(
  <Provider store={store}>
    <TrackingServiceProvider value={trackingService} >
      <Router>
        <App />
      </Router>
    </TrackingServiceProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
