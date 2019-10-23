import React from 'react';
import {Link} from 'react-router-dom'
import FooterComponent from '../Components/Footer/FooterComponent';
import HeaderComponent from '../Components/Header/HeaderComponent';
import ListComponent from '../Components/ListCompoent';
const Cart = () => {
    return (
        <>
        <HeaderComponent/>
        <main className="mainContent clearfix" id="mainContent">
        <section className="favoritesSection secGap clearfix" id="favoritesSection">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#">Home </Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="contentArea text-center mt-5 mb-5">
                  <h2 className="sectionTitle mb-3">Your cart is <span>empty</span></h2>
                  <p>It’s not a problem. Just choose a category you’re intrested in and add goods to favorites list</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="cardContentDetails bgGray pt-5 pb-5">
                  <div className="row">

                    <div className="col-sm-3">
                      <h3 className="cardWidgetTitle mb-3">Kindergarten</h3>
                      <ul className="cardWidgetList text-center">
                      {[1,2,3].map(data=><ListComponent
                           title={"pre "+data}
                           url='/'
                           key={Math.abs(Math.random())}
                        />)}
                      </ul>
                    </div>

                    <div className="col-sm-3">
                      <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                      <ul className="cardWidgetList cardWidgetList2 text-center">
                        {[1,2,3,4,5,6,7,8].map(data=><ListComponent
                           title={"Class "+data}
                           url="/"
                           key={Math.abs(Math.random())}
                        />)}
                      </ul>
                    </div>

                    <div className="col-sm-3">
                      <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                      <ul className="cardWidgetList text-center">
                       {[1,2,3,4].map(data=><ListComponent
                           title={"From "+data}
                           url="/"
                           key={Math.abs(Math.random())}
                        />)}
                      </ul>
                    </div>

                    <div className="col-sm-3">
                      <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                      <ul className="cardWidgetList text-center">
                        {["Stationery","Stationery","Bibles","Bibles"].map(data=><ListComponent
                           title={"From "+data}
                           url="/"
                           key={Math.abs(Math.random())}
                        />)}
                      </ul>
                    </div>

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
                        <input type="text" className="form-control" id="email" />
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
      </>
    );
}

export default Cart;