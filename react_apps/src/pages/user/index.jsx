import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import order_page_icon_img from '../../assets/images/user/order_page_icon_img.png';

import {NavLists} from '../../hooks/useUser'
import ListComponent from '../../Components/ListCompoent';
function UserIndex() {
    return(
     <div className="allWrapper">
       <HeaderComponent/>
        <div className="userBodyArea clearfix" id="userBodyArea">
          <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
              <div className="col-sm-2">
                <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                  <nav className="userNav">
                    <ul className="userNavBar">
                    {NavLists.map((list)=><ListComponent
                         listClass={list.listClass}
                         linkClass={list.linkClass}
                         url={list.url}
                         title={list.title}
                         Icon={list.title}
                      />)}

                    </ul>
                  </nav>
                </aside>
              </div>
              
              <div className="col-sm-10">
                <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">
  
                  <section className="myOrderArea secGap clearfix" id="myOrderArea">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="card">
                            <div className="card-body">
                              <div className="cardHeadDetails clearfix pt-5 text-center">
                                <div className="orderMedia">
                                  <img src={order_page_icon_img} alt="oderIcon"/>
                                </div>
                               
                                <div className="orderSortDes">
                                  <h2 className="headTitle mb-3"> You don’t have any <span>Orders</span></h2>
                                  <p>It’s not a problem. Just choose a category you’re intrested in and<br/> add goods to your cart
                                  </p>
                                </div>
                                <hr className="hrBorder mt-4 mb-4" />
  
                               
                              </div>
  
                              <div className="cardContentDetails">
                                <div className="row">
  
                                  <div className="col-sm-3">
                                    <h3 className="cardWidgetTitle mb-3"> Kindergarten </h3>
                                    <ul className="cardWidgetList text-center">
                                      <li><Link to="#">Pre 1</Link></li>
                                      <li><Link to="#">Pre 2</Link></li>
                                      <li><Link to="#">Pre 3</Link></li>
                                    </ul>
                                  </div>
  
                                  <div className="col-sm-3">
                                    <h3 className="cardWidgetTitle mb-3"> Primary school</h3>
                                    <ul className="cardWidgetList cardWidgetList2 text-center">
                                      <li><Link to="#">Class-1</Link></li>
                                      <li><Link to="#">Class-2</Link></li>
                                      <li><Link to="#">Class-3</Link></li>
                                      <li><Link to="#">Class-4</Link></li>
                                      <li><Link to="#">Class-5</Link></li>
                                      <li><Link to="#">Class-6</Link></li>
                                      <li><Link to="#">Class-7</Link></li>
                                      <li><Link to="#">Class-8</Link></li>
                                    </ul>
                                  </div>
  
                                  <div className="col-sm-3">
                                    <h3 className="cardWidgetTitle mb-3">Primary school</h3>
                                    <ul className="cardWidgetList text-center">
                                      <li><Link to="#">Form 1</Link></li>
                                      <li><Link to="#">Form 2</Link></li>
                                      <li><Link to="#">Form 3</Link></li>
                                      <li><Link to="#">Form 4</Link></li>
                                    </ul>
                                  </div>
  
                                  <div className="col-sm-3">
                                    <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                                    <ul className="cardWidgetList text-center">
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
                      </div>
                    </div>
                  </section>   
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UserIndex;