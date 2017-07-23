import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import 'index.css';
import routes from 'routes';
import registerServiceWorker from 'registerServiceWorker';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app-container">
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        )}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
