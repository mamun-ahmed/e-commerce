import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';
import product_cat_img_01 from "../assets/images/product_cat_img_01.jpg"
import product_cat_img_02 from "../assets/images/product_cat_img_02.jpg"
const Checkout = () => {
    return (<>
    <div class="allWrapper">
        <HeaderComponent/>
      <main class="mainContent clearfix" id="mainContent">
        <section class="favoritesSection secGap clearfix" id="favoritesSection">
          <div class="container">
            <div class="row">
              <div class="col">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="#">Home </Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>

            <div class="row secGap pb-4">
              <div class="col">
                <div class="card table-responsive border-0 cardTableStyle2">
                  <div class="card-body">
                    <table class="table cardTable">
                      <thead>
                        <tr>
                          <th scope="col">Good</th>
                          <th scope="col">Price</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Total</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr>
                          <td>
                            <div class="cartProductDetails d-flex flex-fill align-items-center">
                              <div class="cartProductMedia bgGray ">
                                <img src={product_cat_img_01} alt=""/>
                              </div>
                              <div class="cartProductTitle">
                                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                              </div>
                            </div>
                          </td>
                          <td>$16.00</td>
                          <td class="cartQntN"><input type="number" class="productQut" placeholder="01"/></td>
                          <td>$16.00</td>
                          <td><button class="btn">Delete <i class="fas fa-times"></i></button></td>
                        </tr>
                        
                        <tr>
                          <td>
                            <div class="cartProductDetails d-flex flex-fill align-items-center">
                              <div class="cartProductMedia bgGray ">
                                <img src={product_cat_img_02} alt=""/>
                              </div>
                              <div class="cartProductTitle">
                                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                              </div>
                            </div>
                          </td>
                          <td>$16.00</td>
                          <td class="cartQntN"><input type="number" class="productQut" placeholder="01"/></td>
                          <td>$16.00</td>
                          <td><button class="btn">Delete <i class="fas fa-times"></i></button></td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <td><button class="btn btnGraySm">Delete all <i class="fas fa-times"></i></button></td>
                  </div>

                  <div class="col-sm-3">
                    <form class="form-inline cartPromo justify-content-end">
                      <div class="form-group mb-2">
                        <label for="staticEmail2" class="sr-only">Email</label>
                        <input type="text" class="form-control" id="staticEmail2" placeholder="Promo Code" />
                      </div>
                      <button type="submit" class="btn btn-primary mb-2 ml-2">Apply</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>

            <div class="row justify-content-end text-right">
              <div class="col-sm-3">
                <div class="cartProductPrice">
                  <ul class="cartPriceList">
                    <li>Price.....................................................<span class="pPrice">$50.00</span></li>
                    <li>Delivery.............................................<span class="pPrice">$00.00</span></li>
                    <li>Total.....................................................<span class="pPrice">$50.00</span></li>
                  </ul>

                  <button class="btn btn-primery mt-3">Checkout</button>
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
   </>);
}

export default Checkout;