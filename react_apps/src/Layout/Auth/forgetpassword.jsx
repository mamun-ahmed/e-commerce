import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

export default function ForgetPassword() {
  return (
    <>
      <div className="allWrapper fullHeight">
        <header className="header clearfix" id="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <div className="logoWrapper mt-4 mb-4">
                  <h1 className="logoText">
                    <Link to="/"> LOGO </Link>
                  </h1>
                </div>
                {/* logo wrapper */}
              </div>
              {/* Col close */}
            </div>
            {/* Row close */}
          </div>
          {/* container fluid close */}
        </header>
        {/* header tag close */}

        <main
          className="loginMainArea clearfix fullHeight bgImage loginBodyBg pb-4"
          id="loginArea"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className="loginBodyContent clearfix mb-4" id="loginBody">
                  <h2 className="headTitle mb-3">Forgot password?</h2>
                  {/* h2 close */}
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </h5>
                  {/* h5 close */}
                </div>
                {/* login body content close */}

                <div className="formWrapper clearfix" id="formWrapper">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      {/* input close */}
                    </div>
                    {/* form group close */}
                    <button type="submit" className="btn mt-2 mb-3 submitBtn">
                      Send code
                    </button>
                    {/* Button close */}
                  </form>
                  {/* Form close */}
                </div>
                {/* from wrapper close */}
              </div>
              {/*Col-sm close  */}
            </div>
            {/* Row */}
          </div>
          {/* container fluid */}
        </main>
        {/* main tag close */}
      </div>
      {/* all wrapper clone */}
    </>
  );
}
