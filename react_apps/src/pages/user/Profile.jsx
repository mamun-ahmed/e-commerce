import React from 'react';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import './styles.css';
import {NavLists} from '../../hooks/useUser'
import ListComponent from '../../Components/ListCompoent';

function ProfilePage() {
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
  
                  <section className="profileArea secGap clearfix" id="profileArea">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col">
                          <div className="card">
                            <div className="card-body">
                              <h2 className="cardSecTitle mb-4">Profile settings</h2>
                              
                              <form action="" className="profileSettingsForm">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="selectCategory">Category</label>
                                      <select className="form-control" id="selectCategory">
                                        <option selected disabled >Choose</option>
                                        <option>Secondary school</option>
                                        <option>Secondary school 2</option>
                                        <option>Secondary school 3</option>
                                        <option>Secondary school 4</option>
                                        <option>Secondary school 5</option>
                                      </select>
                                    </div>
                                  </div>
    
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="firstName">First name</label>
                                      <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                    </div>
                                  </div>
                                  
    
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="lastName">Last name</label>
                                      <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                    </div>
                                  </div>
                                  
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="email">Email address</label>
                                      <input type="email" className="form-control" id="email" placeholder="someone@some.com"/>
                                    </div>
                                  </div>
                                  
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="phoneNumber">Phone number</label>
                                      <input type="text" className="form-control" id="phoneNumber" placeholder="01887xxxxxxx" />
                                    </div>
                                  </div>
  
                                  <div className="col-sm-12">
                                    <hr className="hrBorder" />
                                  </div>
  
                                </div>
  
                                <div className="row">
                                  
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="currentPassword">Current password</label>
                                      <input type="password" className="form-control" id="currentPassword" placeholder="Current Password"/>
                                    </div>
                                  </div>
  
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="newPassword">Create new password</label>
                                      <input type="password" className="form-control" id="newPassword" placeholder="password"/>
                                    </div>
                                  </div>
  
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="repeatPassword">Repeat new password</label>
                                        <input type="password" className="form-control" id="repeatPassword" placeholder="Retype password"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default ProfilePage;