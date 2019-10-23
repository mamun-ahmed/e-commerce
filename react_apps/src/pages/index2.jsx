import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

import book_img_01 from '../assets/images/books/book_img_01.jpg';
import book_img_02 from '../assets/images/books/book_img_02.jpg';
import book_img_03 from '../assets/images/books/book_img_03.jpg';
import book_img_04 from '../assets/images/books/book_img_04.jpg';
import book_img_05 from '../assets/images/books/book_img_05.jpg';


import post_img_01 from '../assets/images/post_img_01.jpg';





const IndexPage2 = () => {
    return (<>
             <div class="allWrapper">
                <HeaderComponent/>
                <main class="mainContent clearfix" id="mainContent">

                <section class="banner clearfix bgImage bgImg02" id="banner">
                    <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                        <div class="bannerCard text-center">
                            <h1 class="bannerTitle mb-3">Back to school offer</h1>
                            <h2 class="discountTxt mb-3">50%</h2>
                            <h3 class="bannerPara mb-3">On all biology books</h3>
                            <Link to="#" class="btn bannerBtn shadow">Shop now <i class="fas fa-arrow-right"></i></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="newProduct productView secGap bgGray clearfix" id="newProduct">
                    <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <h2 class="sectionTitle mb-5"><span>New</span> Book</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bg-white">
                            <img src={book_img_01} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>
                        

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bg-white">
                            <img src={book_img_02} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bg-white">
                            <img src={book_img_03} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bg-white">
                            <img src={book_img_04} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bg-white">
                            <img src={book_img_05} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </section>

                <section class="blogArea secGap clearfix" id="blogArea">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                        <article class="singleArticle articleArea">
                            <div class="articleMedia">
                            <img src={post_img_01} alt=""/>
                            </div>

                            <div class="articleBody p-5">
                            <h2 class="postTitle mb-2"><Link to="#">New books on math</Link></h2>
                            <p class="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </article>
                        </div>

                        <div class="col-sm-4">
                        <article class="singleArticle articleArea">
                            <div class="articleMedia">
                            <img src={post_img_01} alt=""/>
                            </div>

                            <div class="articleBody p-3">
                            <h2 class="postTitle mb-1"><Link to="#">Environment programm</Link></h2>
                            <p class="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </article>

                        <article class="singleArticle articleArea mt-3">
                            <div class="articleMedia">
                            <img src={post_img_01} alt=""/>
                            </div>

                            <div class="articleBody p-3">
                            <h2 class="postTitle mb-1"><Link to="#">Environment programm</Link></h2>
                            <p class="postPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </article>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="actualProduct productView secGap clearfix" id="newProduct">
                    <div class="container">
                    <div class="row justify-content-between align-items-center mb-5">
                        <div class="col">
                        <h2 class="sectionTitle"><span>Actual </span> New</h2>
                        </div>

                        <div class="col text-right">
                        <Link to="#" class="btn linkBtn">View more</Link>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bgGray">
                            <img src={post_img_01} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>
                        

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bgGray">
                            <img src={book_img_02} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bgGray">
                            <img src="assets/images/books/book_img_03.jpg" alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bgGray">
                            <img src={book_img_04} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
                            <h5 class="authorName mb-1">Author name</h5>
                            <p class="productPrice">$ 43.00</p>
                            </div>
                        </div>
                        </div>

                        <div class="col-auto">
                        <div class="card productCard border-0 bg-transprant">
                            <div class="productMedia mb-3 bgGray">
                            <img src={book_img_05} alt=""/>
                            </div>
                            <div class="productContent">
                            <h4 class="productTitle mb-1">Maths time for class 1</h4>
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
</>);
}

export default IndexPage2;