import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

function Favourite() {
    return(<div className="allWrapper">
            <HeaderComponent/>
        <main class="mainContent clearfix" id="mainContent">
        <section class="favoritesSection secGap clearfix" id="favoritesSection">
        <div class="container">
            <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="#">Home </Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Favorites</li>
                </ol>
                </nav>
            </div>
            </div>

            <div class="row">
            <div class="col">
                <div class="contentArea text-center mt-5 mb-5">
                <h2 class="sectionTitle mb-3">You don’t have any <span>Favorites</span></h2>
                <p>It’s not a problem. Just choose a category you’re intrested in and add goods to favorites list</p>
                </div>
            </div>
            </div>

            <div class="row">
            <div class="col">
                <div class="cardContentDetails bgGray pt-5 pb-5">
                <div class="row">

                    <div class="col-sm-3">
                    <h3 class="cardWidgetTitle mb-3">Kindergarten</h3>
                    <ul class="cardWidgetList text-center">
                        <li><Link to="#">Pre 1</Link></li>
                        <li><Link to="#">Pre 2</Link></li>
                        <li><Link to="#">Pre 3</Link></li>
                    </ul>
                    </div>

                    <div class="col-sm-3">
                    <h3 class="cardWidgetTitle mb-3">Primary school</h3>
                    <ul class="cardWidgetList cardWidgetList2 text-center">
                        <li><Link to="#">Class 1</Link></li>
                        <li><Link to="#">Class 2</Link></li>
                        <li><Link to="#">Class 3</Link></li>
                        <li><Link to="#">Class 4</Link></li>
                        <li><Link to="#">Class 5</Link></li>
                        <li><Link to="#">Class 6</Link></li>
                        <li><Link to="#">Class 7</Link></li>
                        <li><Link to="#">Class 8</Link></li>
                    </ul>
                    </div>

                    <div class="col-sm-3">
                    <h3 class="cardWidgetTitle mb-3">Primary school</h3>
                    <ul class="cardWidgetList text-center">
                        <li><Link to="#">Form 1</Link></li>
                        <li><Link to="#">Form 2</Link></li>
                        <li><Link to="#">Form 3</Link></li>
                        <li><Link to="#">Form 4</Link></li>
                    </ul>
                    </div>

                    <div class="col-sm-3">
                    <h3 class="cardWidgetTitle mb-3">Stationery</h3>
                    <ul class="cardWidgetList text-center">
                        <li><Link to="#">Stationery</Link></li>
                        <li><Link to="#">Stationery</Link></li>
                        <li><Link to="#"><strong>Bibles</strong></Link></li>
                        <li><Link to="#">Bibles</Link></li>
                    </ul>
                    </div>

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
</div>)
}

export default Favourite