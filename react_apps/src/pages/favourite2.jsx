import React from 'react';
import HeaderComponent from '../Components/Header/HeaderComponent';
import {Link} from 'react-router-dom';
import FooterComponent from '../Components/Footer/FooterComponent';
import book_img_01 from '../assets/images/books/book_img_01.jpg'
function Favaourite2() {
    return(
        <div class="allWrapper">
        <HeaderComponent/>
        <main class="mainContent clearfix" id="mainContent">
  
          <section class="favoritesSection secGap clearfix" id="favoritesSection">
            <div class="container">
              <div class="row">
                <div class="col">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><Link href="#">Home </Link></li>
                      <li class="breadcrumb-item active" aria-current="page">Favorites</li>
                    </ol>
                  </nav>
                </div>
              </div>
  
              <div class="row mt-5 mb-5">
  
                <div class="col-auto">
                  <div class="card productCard border-0 bg-transprant">
                    <div class="productMedia mb-3 bgGray">
                      <img src={book_img_01} alt=""/>
                    </div>
                    <div class="productContent">
                      <h4 class="productTitle mb-1">Maths time for class 1</h4> <span class="favoritIcon"><i class="fas fa-star"></i></span>
                      <h5 class="authorName mb-1">Author name</h5>
                      <p class="productPrice">$ 43.00</p>
                    </div>
                  </div>
                </div>
  
                <div class="col-auto">
                  <div class="card productCard border-0 bg-transprant">
                    <div class="productMedia mb-3 bgGray">
                      <img src={book_img_01} alt=""/>
                    </div>
                    <div class="productContent">
                      <h4 class="productTitle mb-1">Maths time for class 1</h4> <span class="favoritIcon"><i class="fas fa-star"></i></span>
                      <h5 class="authorName mb-1">Author name</h5>
                      <p class="productPrice">$ 43.00</p>
                    </div>
                  </div>
                </div>
  
                <div class="col-auto">
                  <div class="card productCard border-0 bg-transprant">
                    <div class="productMedia mb-3 bgGray">
                      <img src={book_img_01} alt=""/>
                    </div>
                    <div class="productContent">
                      <h4 class="productTitle mb-1">Maths time for class 1</h4> <span class="favoritIcon"><i class="fas fa-star"></i></span>
                      <h5 class="authorName mb-1">Author name</h5>
                      <p class="productPrice">$ 43.00</p>
                    </div>
                  </div>
                </div>
  
                <div class="col-auto">
                  <div class="card productCard border-0 bg-transprant">
                    <div class="productMedia mb-3 bgGray">
                      <img src={book_img_01} alt=""/>
                    </div>
                    <div class="productContent">
                      <h4 class="productTitle mb-1">Maths time for class 1</h4> <span class="favoritIcon"><i class="fas fa-star"></i></span>
                      <h5 class="authorName mb-1">Author name</h5>
                      <p class="productPrice">$ 43.00</p>
                    </div>
                  </div>
                </div>
  
                <div class="col-auto">
                  <div class="card productCard border-0 bg-transprant">
                    <div class="productMedia mb-3 bgGray">
                      <img src={book_img_01} alt=""/>
                    </div>
                    <div class="productContent">
                      <h4 class="productTitle mb-1">Maths time for class 1</h4> <span class="favoritIcon"><i class="fas fa-star"></i></span>
                      <h5 class="authorName mb-1">Author name</h5>
                      <p class="productPrice">$ 43.00</p>
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
export default Favaourite2;