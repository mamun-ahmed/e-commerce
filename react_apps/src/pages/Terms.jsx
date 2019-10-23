import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

function Terms() {
    return(
        <div class="allWrapper">
        <HeaderComponent/>
        <main class="mainContent clearfix" id="mainContent">
  
          <section class="helpContentArea secGap clearfix" id="helpContentArea">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card helpNavBar">
                    <div class="card-body">
                      <h3 class="sectionTitle">Help</h3>
                      <ul class="helpNavList mt-3">
                        <li class="nav-item active">
                          <Link class="nav-link" to="#">Terms & conditions</Link>
                        </li>
  
                        <li class="nav-item ">
                          <Link class="nav-link" to="#">Privacy Policy</Link>
                        </li>
  
                        <li class="nav-item ">
                          <Link class="nav-link" to="#">Refunds</Link>
                        </li>
  
                        <li class="nav-item">
                          <Link class="nav-link" to="#">Delivery details</Link>
                        </li>
  
                        <li class="nav-item">
                          <Link class="nav-link" to="#">How to place an order</Link>
                        </li>
  
                      </ul>
                    </div>
                  </div>
                </div>
  
                <div class="col">
                  <div class="helpContentArea">
                    <h2>Terms and conditions</h2>
                    <div class="helpPara mt-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Minima veniam, quis nostrum exercitationem ullam corporis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section class="mailSubscribe clearfix bgImage bgImg01 secGap" id="mailSubscribe">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-sm-10">
                  <div class="card subscribeCard border-0 rounded-0">
                    <div class="card-body text-center pt-5 pb-5">
                      <h1>Subscribe to our newsletter</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> enim ipsam voluptatem quia voluptas quia non numquam eius</p>
                      <form class="d-flex subscribeForm justify-content-center mt-3">
  
                        <div class="form-group mb-2">
                          <input type="text" class="form-control" id="email" />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterComponent/>
      </div>
    )
}

export default Terms;