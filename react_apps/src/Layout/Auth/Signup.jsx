import React from 'react';
import {Link} from 'react-router-dom';
import './auth.css'

export default function Signup(){
    return(
        <div className="allWrapper fullHeight">
     
        <main className="loginMainArea clearfix fullHeight bgImage signUpBodyBg pb-3" id="loginArea">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText">
                      <Link to="/">LOGO</Link>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="loginBodyContent clearfix" id="loginBody">
                  <h2 className="headTitle">Sign up</h2>
                  <div className="socialLogin mb-4">
                    <ul className="socialList mt-4 mb-4">
                      <li className="googlePlus">
                          <Link to="#">
                              <i className="fab fa-google"></i>
                          </Link>
                      </li>
                      <li className="facebook">
                        <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </li>
                    </ul>
                    <h4>OR</h4>
                  </div>
                </div>
  
                <div className="formWrapper clearfix" id="formWrapper">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Select the category</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option>Secondary school</option>
                        <option>Secondary school 2</option>
                        <option>Secondary school 3</option>
                        <option>Secondary school 4</option>
                        <option>Secondary school 5</option>
                      </select>
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp"/>
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp"/>
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="password"> Password </label>
                      <input type="password" className="form-control" id="password"/>
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="new-password">Repeat password</label>
                      <input type="password" className="form-control" id="new-password"/>
                    </div>
  
                    <Link className="linkText mb-3" to="/forget-password">Forgot password?</Link>
  
                    <button type="submit" className="btn submitBtn mb-3">SIGN UP</button>
  
                    <p> I already have an account! 
                     <Link className="linkText mb-3" to="/login">Sign In</Link>
                   </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}