import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Redirect to='/home' />;
            }}
          />
          <Route path='/login' render={()=>{return(<Login/>)}} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/home' exact component={Home} />
        </Switch>
      </>
    );
  }
}
