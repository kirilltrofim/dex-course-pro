import React, {useState} from 'react';
import {SignIn} from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';
// import {Link, Route, Router} from 'react-router';


function App() {
  return (

    <div className="App">

        {/*<Route component={SignIn} path="/"></Route>*/}
        {/*<Route component={SignUp} path="/signup"></Route>*/}

      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
