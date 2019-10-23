import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Layout/Auth/Login';
import Signup from './Layout/Auth/Signup';
import ForgetPassword from './Layout/Auth/forgetpassword';
import ChangePassword from './Layout/Auth/ChangePassword';
import Verify from './Layout/Auth/verify';
import IndexPage from './pages/index';
import IndexPage2 from './pages/index2';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';
import Favaourite2 from './pages/favourite2';
import Favourite from './pages/favourite';
import UserIndex from './pages/user/Index';
import MailPage from './pages/user/Mail';
import OrderPage from './pages/user/Order';
import PaymentPage from './pages/user/Payment';
import PaymentPage2 from './pages/user/Payment2';
import ProfilePage from './pages/user/Profile';
import Shop from './pages/shop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/forget-password"><ForgetPassword /></Route>
        <Route path="/change-password"><ChangePassword /></Route>
        <Route path="/verfiy-account"><Verify /></Route>
        <Route path="/index"><IndexPage /></Route>
        <Route path="/index2"><IndexPage2 /></Route>
        <Route path="/products"><Product /></Route>
        <Route path="/shop"><Shop /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/cart2"><Checkout /></Route>
        <Route path="/terms"><Terms /></Route>
        <Route path="/favourite"><Favourite /></Route>
        <Route path="/favourite2"><Favaourite2 /></Route>
        <Route path="/user/index"><UserIndex /></Route>
        <Route path="/user/mail"><MailPage /></Route>
        <Route path="/user/order"><OrderPage /></Route>
        <Route path="/user/Payment"><PaymentPage /></Route>
        <Route path="/user/Payment2"><PaymentPage2 /></Route>
        <Route path="/user/profile"><ProfilePage /></Route>
        <Route path="/test"><usePyamentList/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
