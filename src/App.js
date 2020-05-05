import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  showContentMenus = (routes) => {
    let result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <Router>
        <div>
          <Menu/>
          { this.showContentMenus(routes) }
        </div>
      </Router>
    );
  }
}

export default App;
