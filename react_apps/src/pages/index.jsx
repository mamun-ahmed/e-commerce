import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

import partnerLogo1 from '../assets/images/partners_logo_img_01.png';
import partnerLogo2 from '../assets/images/partners_logo_img_02.png';
import partnerLogo3 from '../assets/images/partners_logo_img_03.png';
import partnerLogo4 from '../assets/images/partners_logo_img_04.png';
import partnerLogo5 from '../assets/images/partners_logo_img_05.png';
import partnerLogo6 from '../assets/images/partners_logo_img_06.png';

import feature_icon_img_01 from '../assets/images/feature_icon_img_01.png';
import feature_icon_img_02 from '../assets/images/feature_icon_img_02.png';
import feature_icon_img_03 from '../assets/images/feature_icon_img_03.png';
import feature_icon_img_04 from '../assets/images/feature_icon_img_04.png';


import product_cat_img_01 from '../assets/images/product_cat_img_01.jpg';
import product_cat_img_02 from '../assets/images/product_cat_img_02.jpg';
import product_cat_img_03 from '../assets/images/product_cat_img_03.jpg';

function IndexPage() {
    return(
    <div className="allWrapper">     
        <HeaderComponent/>
        <main className="mainContent clearfix" id="mainContent">
          <section className="productCat secGap clearfix" id="productCat">
            <div className="container">
              <div className="row">
  
                <div className="col-sm-4">
                  <div className="card productCatCard">
                    <div className="productCatMedia">
                      <Link to="#"><img src={product_cat_img_01} alt=""/></Link>
                    </div>
                    <div className="card-body text-center">
                        <Link to="#"><h3 className="productCatTitle">Kindergarten</h3></Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-4">
                  <div className="card productCatCard">
                    <div className="productCatMedia">
                      <Link to="#"><img src={product_cat_img_02} alt=""/></Link>
                    </div>
                    <div className="card-body text-center">
                      <Link to="#"><h3 className="productCatTitle">Primary school</h3></Link>
                    </div>
                  </div>
                </div>
  
                <div className="col-sm-4">
                  <div className="card productCatCard">
                    <div className="productCatMedia">
                      <Link to="#"><img src={product_cat_img_03} alt=""/></Link>
                    </div>
                    <div className="card-body text-center">
                        <Link to="#"><h3 className="productCatTitle">Secondary school</h3></Link>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </section>
  
          <section className="ourBenefits clearfix secGap bgGray" id="ourBenefits">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h2 className="sectionTitle mb-5">Our <span>benefits</span></h2>
                </div>
              </div>
  
              <div className="row">
  
                <div className="col-sm-3">
                  <div className="card singleFeature pt-3 pb-3 border-0">
                    <div className="featureMedia text-center">
                      <img src={feature_icon_img_01} alt=""/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h4>Fast delivery</h4>
                      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-sm-3">
                  <div className="card singleFeature pt-3 pb-3 border-0">
                    <div className="featureMedia text-center">
                      <img src={feature_icon_img_02} alt=""/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-sm-3">
                  <div className="card singleFeature pt-3 pb-3 border-0">
                    <div className="featureMedia text-center">
                      <img src={feature_icon_img_03} alt=""/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h4>Dolor set amet</h4>
                      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-sm-3">
                  <div className="card singleFeature pt-3 pb-3 border-0">
                    <div className="featureMedia text-center">
                      <img src={feature_icon_img_04} alt=""/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h4>Adipiscing vero</h4>
                      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </section>
  
          <section className="ourPartners clearfix secGap" id="ourPartners">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="partnersCarousel">
                    <div className="owl-carousel partnerCarousel">
                      <div className="item"><img src={partnerLogo1} alt=""/></div>
                      <div className="item"><img src={partnerLogo2} alt=""/></div>
                      <div className="item"><img src={partnerLogo3} alt=""/></div>
                      <div className="item"><img src={partnerLogo4} alt=""/></div>
                      <div className="item"><img src={partnerLogo5} alt=""/></div>
                      <div className="item"><img src={partnerLogo6} alt=""/></div>
                      <div className="item"><img src={partnerLogo1} alt=""/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="mailSubscribe clearfix bgImage bgImg01 secGap" id="mailSubscribe">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <div className="card subscribeCard border-0 rounded-0">
                    <div className="card-body text-center pt-5 pb-5">
                      <h1>Subscribe to our newsletter</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> enim ipsam voluptatem quia voluptas quia non numquam eius</p>
                      
                      <form className="d-flex subscribeForm justify-content-center mt-3">
  
                        <div className="form-group mb-2">
                          <input type="email" className="form-control" id="email" placeholder="someone@someone.com"/>
                        </div>
  
                        <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
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

export default IndexPage;