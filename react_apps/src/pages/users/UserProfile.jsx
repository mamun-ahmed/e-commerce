import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import './assets/css/user.css';

const UserProfile = () => {
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
              <div class="headFeature">
                <ul class="headFeatureList d-flex justify-content-between">
                  <li><i class="fas fa-truck"></i> <span>Free delivery</span></li>
                  <li><i class="fas fa-award"></i> <span>Genuine goods</span></li>
                  <li><i class="fas fa-headset"></i> <span>Customer support</span></li>
                </ul>{/* end of headFeatureList */}
              </div>{/* end of headFeature */}
            </Col>{/* end of Col */}

          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </div>{/* end of headerTopBar */}

      <header className="header clearfix" id="header">
        <Container fluid="{true}">
          <Row>
            <Col sm="2">
              <div class="logoWrapper">
                <h1 class="logoText"><Link to="#">LOGO</Link></h1>
              </div>{/* end of logoWrapper */}

            </Col>{/* end of Col */}
          </Row>{/* end of Row */}
        </Container>{/* end of Container */}
      </header>{/* end of header */}


    </div>{/* end of allWrapper */}
    
  </>);
}

export default UserProfile;