import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./Containers/MainPage/MainPage";
import SecondPage from "./Containers/SecondPage/SecondPage";
import ThirdPage from "./Containers/ThirdPage/ThirdPage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/page2' component={SecondPage} />
        <Route path='/page3' component={ThirdPage} />
        <Route  render={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
