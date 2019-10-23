import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Forgotpass from './pages/auth/Forgotpass';
import Changepass from './pages/auth/Changepass';
import VerifyCode from './pages/auth/VerifyCode';
import UserProfile from './pages/users/UserProfile';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/login">
          <Login/>
       </Route>
       <Route path="/signup">
          <Signup/>
       </Route>
       <Route path="/forgotpass">
          <Forgotpass />
       </Route>
       <Route path="/changepass">
          <Changepass />
       </Route>
       <Route path="/verify-code">
        <VerifyCode />
       </Route>
       <Route path="/user-profile">
        <UserProfile />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
