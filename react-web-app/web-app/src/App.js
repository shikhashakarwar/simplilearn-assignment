import './App.scss';
import ReactDom from 'react-dom';

import {Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './appStore';
import { createBrowserHistory } from 'history';
import SignupComponent from './components/signup/signup';
import LoginComponent from './components/login/login';
import DashboardComponent from './components/dashboard/dashboard';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Provider store={configureStore()}>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/sign-up"><SignupComponent/> </Route>
          <Route exact path="/login"><LoginComponent/> </Route>
          <Route exact path="/dashboard"><DashboardComponent/> </Route>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
