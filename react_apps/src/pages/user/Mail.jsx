import React from 'react';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import {NavLists} from '../../hooks/useUser'
import ListComponent from '../../Components/ListCompoent';

function MailPage() {
    return(
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
                  <section class="profileArea secGap clearfix" id="profileArea">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col">
                          <div class="card">
                            <div class="card-body p-5">
                              <h2 class="cardSecTitle mb-3">Manage email subscription</h2>
                              <h5 class="cardSubtitle mb-2">Please choose which types of emails you would like to receive from us</h5>
                              
                              <form action="" class="profileSettingsForm">
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="form-check formCheckbox mt-2">
                                      <input class="form-check-input" type="checkbox"  id="check1"/>
                                      <label class="form-check-label" htmlFor="check1">Announcements</label>
                                    </div>
                                  </div>
                                  
                                  <div class="col-sm-12">
                                    <div class="form-check formCheckbox mt-2">
                                      <input class="form-check-input" type="checkbox"  id="check2"/>
                                      <label class="form-check-label" for="check2">Sale invitations</label>
                                    </div>
                                  </div>
                                  
                                  <div class="col-sm-12">
                                    <div class="form-check formCheckbox mt-2">
                                      <input class="form-check-input" type="checkbox" id="check3"/>
                                      <label class="form-check-label" for="check3">Weekly newsletter</label>
                                    </div>
                                  </div>
                                  
                                  <div class="col-sm-12">
                                    <h5 class="cardSubtitle mt-3 mb-2">Click below to unsubscribe from all emails</h5>
                                  </div>
                                  
                                  <div class="col-sm-12">
                                    <div class="form-check formCheckbox mt-2">
                                      <input class="form-check-input" type="checkbox" value="" id="check4"/>
                                      <label class="form-check-label" for="check4">Unsubscribe</label>
                                    </div>
                                  </div>
                                  
  
                                  <div class="col-sm-12">
                                    <button type="submit" class="btn btn-primary mt-3">Save</button>
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

export default MailPage;