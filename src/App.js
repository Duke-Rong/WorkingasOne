import React, { PureComponent } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login'
import Detail from './pages/detail';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
