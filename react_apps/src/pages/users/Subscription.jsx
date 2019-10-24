import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';

const Subscription = () => {
  return (<>

    <div className="allWrapper">
      <div className="headerTopBar clearfix bgBlack" id="headerTopBar">
        <Container fluid={true}>
          <Row className="justify-content-between">
            <Col>
              <div className="headFeature">
                <i className="fas fa-map-marker-alt"></i> <span>Delivery region: Nairobi</span>
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headFeature">
                <ul className="headFeatureList d-flex justify-content-between">
                  <li><i className="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i className="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i className="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header userHeader clearfix" id="header">
        <Container fluid="{true}">
          <Row>
            <Col sm="2">
              <div className="logoWrapper">
                <h1 className="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}

            <Col>
              <nav className="mainMenu mainNav" id="mainNav">
                <ul className="navTabs">
                  <li>
                    <Link to="#" className="active">Home</Link>
                  </li>{/* end of li */}
                </ul>{/* end of navTabs */}

              </nav>{/* end of Nav */}
              <Link to="#" className="generalLink" id="responsiveMainNavToggler"><i className="fa fa-bars"></i></Link>
              <div className="clearfix"></div>
              <div className="responsiveMainNav"></div>{/* end of Nav */}
            </Col>{/* end of Col */}

            <Col className="col-auto">
              <div className="headPopBar clearfix" id="headPopBar">
                <ul className="headPopBarList d-flex justify-content-between align-items-center">
                  <li><Link to="/"><i className="fas fa-search"></i> Search</Link></li>
                  <li><Link to="/"><i className="far fa-star"></i> Favorites</Link></li>
                  <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                  <li>
                    <div className="userLogged d-flex align-items-center">
                      <div className="userAvater"><img src="./assets/images/reviews_avater.jpg" alt="" /></div>
                      <span className="userName">Sam Smith</span>
                    </div>{/* end of userLogged */}
                  </li>{/* end of li */}
                </ul>{/* end of headPopBarList */}
              </div>{/* end of headPopBar */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}

      <div className="userBodyArea clearfix" id="userBodyArea">
        <Container fluid="{true}" className="pl-0 pr-0">
          <Row noGutters>
            <Col sm="2">
              <aside className="userAsideBar pt-3 clearfix shadow" id="userAsideBar">
                <nav className="userNav">
                  <ul className="userNavBar">
                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-clipboard-list"></i> My orders</Link>
                    </li>{/* end of li */}
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-wallet"></i> Payment methods</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-cog"></i> Profile settings</Link>
                    </li>{/* end of li */}

                    <li className="nav-item active">
                      <Link className="nav-link" to="#"><i className="far fa-envelope"></i> Email subscription</Link>
                    </li>{/* end of li */}

                    <li className="nav-item">
                      <Link className="nav-link" to="#"><i className="fas fa-sign-out-alt"></i> Log out</Link>
                    </li>{/* end of li */}

                  </ul>{/* end of userNavBar */}
                </nav>{/* end of userNav */}
              </aside>{/* end of aside */}
            </Col>{/* end of Col */}

            <Col>
              <main className="userMainContent clearfix bgImage bgImg03" id="userMainContent">

                <section className="myOrderArea secGap clearfix" id="myOrderArea">

                  <Container fluid="{true}">
                    <Row>
                      <Col sm="12">
                        <Card>
                          <Card.Body className="pt-5">
                            <h2 className="cardSecTitle mb-3">Manage email subscription</h2>
                            <h5 className="cardSubtitle mb-2">Please choose which types of emails you would like to receive from us</h5>

                            <Form className="profileSettingsForm">
                              <Row>

                                <Col sm="12">
                                  <Form.Group controlId="formCheckbox1" className="formCheckbox mt-2">
                                    <Form.Check type="checkbox" label="Announcements" />
                                  </Form.Group>{/* end of Form.Group */}
                                </Col>{/* end of col */}
                                
                                <Col sm="12">
                                  <Form.Group controlId="formCheckbox2" className="formCheckbox mt-2">
                                    <Form.Check type="checkbox" label="Sale invitations" />
                                  </Form.Group>{/* end of Form.Group */}
                                </Col>{/* end of col */}
                                
                                <Col sm="12">
                                  <Form.Group controlId="formCheckbox3" className="formCheckbox mt-2">
                                    <Form.Check type="checkbox" label="Weekly newsletter" />
                                  </Form.Group>{/* end of Form.Group */}
                                </Col>{/* end of col */}
                                
                                <Col sm="12">
                                  <h5 className="cardSubtitle mt-3 mb-2">Click below to unsubscribe from all emails</h5>
                                </Col>{/* end of col */}
                                
                                <Col sm="12">
                                  <Form.Group controlId="formCheckbox4" className="formCheckbox mt-2">
                                    <Form.Check type="checkbox" label="Unsubscribe" />
                                  </Form.Group>{/* end of Form.Group */}
                                </Col>{/* end of col */}
                                
                                <Col sm="12">
                                  <Button variant="primary" className="mt-3" type="submit"> Save </Button>
                                </Col>{/* end of col */}

                              </Row>{/* end of row */}

                            </Form>{/* end of profileSettingsForm */}

                          </Card.Body>{/* end of Card.Body */}
                        </Card>{/* end of Card */}
                      </Col>{/* end of Col */}
                    </Row>{/* end of Row */}
                  </Container>{/* end of Container */}

                </section>{/* end of myOrderArea */}
                
              </main>{/* end of mainContent */}
            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of userBodyArea */}

    </div>{/* end of allWrapper */}
    
  </>);
}

export default Subscription;