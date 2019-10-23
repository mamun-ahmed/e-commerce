import React from 'react';
import {Link} from 'react-router-dom';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import {NavLists} from '../../hooks/useUser'
import ListComponent from '../../Components/ListCompoent';
function PaymentPage() {
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
                <section className="paymentArea secGap clearfix" id="paymentArea">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="card table-responsive">
                          <div className="card-body">
                            <table className="table cardTable">
                              <thead>
                                <tr>
                                  <th scope="col">Payment methods</th>
                                  <th scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="cardInfotd">
                                    <div className="cardPaymentDetails">
                                      <h3 className="payTitle">Visa <span className="cardNumber">**** **** **** 5365</span></h3>
                                      <p className="payExp">Expires in 09/21</p>
                                    </div>
                                  </td>
                                  <td className="actionBtntd">
                                    <Link to="#" className="btn btnActionUpdate">Update</Link>
                                    <Link to="#" className="btn btnActionDelete">Delete</Link>
                                  </td>
                                </tr>
                        
                              </tbody>
                            </table>

                            <Link to="#" className="btn btn-primary btnSm">Add payment method</Link>
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
export default PaymentPage;