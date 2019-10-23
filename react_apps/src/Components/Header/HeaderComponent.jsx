import React from 'react';
import {Link} from 'react-router-dom';



function HeaderComponent() {
    return(<>
    <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i><span>Delivery region: Nairobi</span>
              </div>
            </div>

            <div className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <header className="header clearfix" id="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="headerNav clearfix" id="headerNav">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="#">Kindergarten <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Primary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Secondary school</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Stationery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">Bibles</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            

            <div className="col-sm-4">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between">
                  <li><Link to="#"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="#"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="#"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li><Link to="#"><i className="far fa-user"></i> Login</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>)
}

export default HeaderComponent;