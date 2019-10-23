import React from 'react';

export default function NavbarComponent(){
    return(
        <div class="headerTopBar clearfix bgBlack" id="headerTopBar">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-3">
              <div class="headFeature">
                <i class="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>
            </div>

            <div class="col-sm-5">
              <div class="headFeature">
                <ul class="headFeatureList d-flex justify-content-between">
                  <li><i class="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i class="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i class="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}