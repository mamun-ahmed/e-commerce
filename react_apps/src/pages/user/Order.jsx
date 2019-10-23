import React from 'react';
import {Link} from 'react-router-dom';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import './styles.css';
import {NavLists} from '../../hooks/useUser'
import ListComponent from '../../Components/ListCompoent';

function OrderPage() {
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
                      <div className="col">
                        <div className="card table-responsive">
                          <div className="card-body">
                            <table className="table cardTable">
                              <thead>
                                <tr>
                                  <th scope="col">Product name</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Total</th>
                                  <th scope="col">Order date</th>
                                  <th scope="col">Order status</th>
                                </tr>
                              </thead>
  
                              <tbody>
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="date">11.05.2019</span> <span className="time">14:53</span> </td>
                                  <td><span className="stockInfo">In stock</span></td>
                                </tr>
                                
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="date">11.05.2019</span> <span className="time">14:53</span> </td>
                                  <td><span className="stockInfo">Delivered</span></td>
                                </tr>
                                
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="date">11.05.2019</span> <span className="time">14:53</span> </td>
                                  <td><span className="stockInfo">Delivered</span></td>
                                </tr>
                                
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="date">11.05.2019</span> <span className="time">14:53</span> </td>
                                  <td><span className="stockInfo">Delivered</span></td>
                                </tr>
                                
                                <tr>
                                  <td><Link to="#">Lorem ipsum dolor sit amet irure dolor</Link></td>
                                  <td>$16.00</td>
                                  <td>1</td>
                                  <td>$16.00</td>
                                  <td><span className="date">11.05.2019</span> <span className="time">14:53</span> </td>
                                  <td><span className="stockInfo">Delivered</span></td>
                                </tr>

                              </tbody>
                            </table>
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
    </div>);
}

export default OrderPage;