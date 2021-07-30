import Login from 'components/Login';
import NotFound from 'components/NotFound';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />

        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
