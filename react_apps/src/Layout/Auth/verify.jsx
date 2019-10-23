import React from 'react';
import {Link} from 'react-router-dom'
import './auth.css';


export default function Verify(){
    return(
         
    <div className="allWrapper fullHeight">
    <header className="header clearfix" id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5">
            <div className="logoWrapper mt-4 mb-4">
              <h1 className="logoText"><Link to="/">LOGO</Link></h1>
            </div>
          </div>
        </div>
    </div>
    </header>

    <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg" id="loginArea">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="loginBodyContent clearfix mb-4" id="loginBody">
              <h2 className="headTitle mb-3">Verify code</h2>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h5>
            </div>

            <div className="formWrapper clearfix" id="formWrapper">
              <form>
                <div className="form-group">
                  <label htmlFor="verifyCode">Code</label>
                  <input type="text" className="form-control" id="verifyCode" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn mt-2 mb-3 submitBtn">Verify</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}