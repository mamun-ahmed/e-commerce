import React from 'react';
import {Link} from 'react-router-dom';
import './auth.css';
export default function Login(){
    return (
      <div className="allWrapper fullHeight">
     
      <main className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4" id="loginArea">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5">
              <div className="logoWrapper mt-4 mb-4">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div> {/* end of  logoWrapper */}
            </div>{/* end of  col */}
          </div>{/* end of  row */}

          <div className="row">
            <div className="col-sm-5">
              <div className="loginBodyContent clearfix" id="loginBody">
                <h2 className="headTitle">Login to Your Account</h2>
                <div className="socialLogin mb-4">
                  <ul className="socialList mt-4 mb-4">
                    <li className="googlePlus"><Link target="_blank" to="//google.com"><i className="fab fa-google"></i></Link></li>
                    <li className="facebook"><Link target="_blank" to="//facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
                  </ul>
                  <h4>OR</h4>
                </div>
              </div>

              <div className="formWrapper clearfix" id="formWrapper">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <input type="password" className="form-control" id="password"/>
                  </div>
                  <Link className="linkText mb-3" to="/forget-password"> Forgot password? </Link>
                  <button type="submit" className="btn submitBtn mb-3"> LOGIN </button>
                  <p>Don’t have an account yet? <Link className="linkText" to="/signup"> Sign up</Link></p>
                </form> 
              </div>              
            </div>
          </div>
        </div>
      </main>
    </div> 
    )
}