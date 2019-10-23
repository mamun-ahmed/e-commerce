import React from 'react';
import {Link} from 'react-router-dom'
import payPal from '../../assets/images/paypal_icon_img.png'
import visa from '../../assets/images/visa_icon_img.png'
import masterCard from '../../assets/images/master_card_icon_img.png'
const FooterComponent = () => {
    return (<>
     <footer className="footer clearfix bg-white pt-5 pb-5" id="footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footerWidget">
                  <div className="footerLogo">
                    <div className="logoWrapper">
                      <h1 className="logoText"><Link to="#">LOGO</Link></h1>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-sm-5">
                <div className="footerWidget">
                  <h4 className="footerWidgetHeader">Information</h4>
                  <ul className="footerLinksList">
                    <li><Link to="#">Order status</Link></li>
                    <li><Link to="#">How to place an order</Link></li>
                    <li><Link to="#">Return</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                    <li><Link to="#">Delivery details</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Our support center</Link></li>
                  </ul>
                </div>
              </div>
  
              <div className="col-sm-2">
                <div className="footerWidget">
                  <h4 className="footerWidgetHeader">Contact us</h4>
                  <ul className="getInTouchList">
                    <li>
                      <Link to="mailto:you@example.com" title="click to mail us">you@example.com</Link>
                    </li>
                    <li>
                      <Link to="tele:1234567890" title="click to call us">+(123) 456 7890</Link>
                    </li>
                    <li>
                      <p>Your long address, city, region, zip code</p>
                    </li>
                  </ul>
                </div>
              </div>
  
              <div className="col align-self-center">
                <div className="footerWidget">
                  <ul className="footerSocial">
                    <li className="facebook"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li className="facebook"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                    <li className="facebook"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  </ul>
                </div>
              </div>
  
            </div>
          </div>
        </footer>
        <div className="footerBottom clearfix pb-3" id="footerBottom">
          <div className="container">
            <hr className="hrBorder" />
            <div className="row align-items-center justify-content-between">
              <div className="col">
                <p className="copyrights">© 2019 All Rights Reserved</p>
              </div>
  
              <div className="col-sm-3">
                <ul className="paymentsNav d-flex justify-content-between">
                  <li className="paypal">
                    <Link to="#" title="paypal"><img alt="paypal" src={payPal} title="paypal"/></Link>
                  </li>
                  <li className="visa">
                    <Link to="#" title="visa"><img alt="visa card" src={visa} title="visa card"/></Link>
                  </li>
                  <li className="master">
                    <Link to="#" title="master card"><img alt="master card" src={masterCard} title="master card"/></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>);
}

export default FooterComponent;