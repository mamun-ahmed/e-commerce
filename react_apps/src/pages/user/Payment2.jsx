import React from 'react';
import {Link} from 'react-router-dom';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import card_icon_img from '../../assets/images/user/card_icon_img.png'
import card_icon_imgcvv from '../../assets/images/user/card_icon_cvv_img.png'
import './styles.css';
import ListComponent from '../../Components/ListCompoent';
import {NavLists} from '../../hooks/useUser'

function Payment2(props) {
    return (
        <div class="allWrapper">
        <HeaderComponent/>
        <div class="userBodyArea clearfix" id="userBodyArea">
          <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
              <div class="col-sm-2">
                <aside class="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                  <nav class="userNav">
                    <ul class="userNavBar">
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
              
              <div class="col-sm-10">
                <main class="userMainContent clearfix bgImage bgImg03" id="userMainContent">
  
                  <section class="paymentArea secGap clearfix" id="paymentArea">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col">
                          <div class="card table-responsive border-0 cardBtBorder">
                            <div class="card-body">
                              <table class="table cardTable">
                                <thead>
                                  <tr>
                                    <th scope="col">Payment methods</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
    
                                <tbody>
                                  <tr>
                                    <td width="80%">
                                      <div class="cardPaymentDetails">
                                        <h3 class="payTitle">Visa <span class="cardNumber">**** **** **** 5365</span></h3>
                                        <p class="payExp">Expires in 09/21</p>
                                      </div>
                                    </td>
                                    <td>
                                      <Link to="#" class="btn btnActionUpdate">Update</Link>
                                      <Link to="#" class="btn btnActionDelete">Delete</Link>
                                    </td>
                                  </tr>
                          
                                </tbody>
                              </table>
  
                              <Link to="#" class="btn btn-primary btnSm">Add payment method</Link>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="card border-0 addPaymentCard">
                            <div class="card-body col-sm-6">
                              <form action="" class="selectPaymentOption">
                                <div class="formBody bgGray mb-2">
                                  <div class="form-check formRadio">
                                    <input class="form-check-input" type="radio" name="radio" id="radios1" value="option1"/>
                                    <label class="form-check-label radioLabel" for="radios1">
                                      Mpesa
                                    </label>
                                  </div>
                                </div>
                                
                                <div class="formBody bgGray">
                                  <div class="form-check formRadio">
                                    <input class="form-check-input" type="radio" name="radio" id="radios2" value="option2"/>
                                    <label class="form-check-label radioLabel" for="radios2">
                                        Paypal
                                    </label>
                                  </div>
  
                                  <div class="payInfoDetails clearfix">
                                    <hr class="hrBorder" />
                                    <div class="cardInfoForm p-3">
                                      <div class="row align-items-center">
                                        <div class="col-sm-10 form-group">
                                          <label for="card-number">Card number</label>
                                          <input type="text" class="form-control" id="card-number" aria-describedby="emailHelp" placeholder=""/>
                                        </div>
                                        <div class="col">
                                          <img src={card_icon_img} alt=""/>
                                        </div>
                                      </div>
                                      
                                      <div class="row align-items-center justify-content-between">
                                        <div class="col-sm-3 form-group">
                                          <label for="card-number">Expiry date</label>
                                          <ul class="cardPayFiled d-flex align-items-center justify-content-end">
                                            <li><input type="text" class="form-control" id="card-number" aria-describedby="emailHelp" placeholder="MM"/></li>
                                            <li class="cardBl">/</li>
                                            <li><input type="text" class="form-control" id="card-number" aria-describedby="emailHelp" placeholder="YY"/></li>
                                          </ul>
                                        </div>
  
                                        <div class="col offset-sm-4 form-group">
                                          <label for="card-number">CVV</label>
                                          <input type="text" class="form-control" id="card-number" aria-describedby="emailHelp" placeholder=""/>
                                        </div>
                                        <div class="col-sm-2">
                                          <img src={card_icon_imgcvv} alt=""/>
                                        </div>
                                      </div>
  
                                      <div class="row">
                                        <div class="col">
                                          <button class="btn btn-primary">Add</button>
                                        </div>
                                      </div>
  
                                    </div>
                                  </div>
                                </div>
                              </form>
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

export default Payment2;