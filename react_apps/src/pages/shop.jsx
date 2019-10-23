import React from 'react';
import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

import book_img_01 from  "../assets/images/books/book_img_01.jpg";
import book_img_02 from  "../assets/images/books/book_img_02.jpg";
import book_img_03 from  "../assets/images/books/book_img_03.jpg";
import book_img_04 from  "../assets/images/books/book_img_04.jpg";
import book_img_05 from  "../assets/images/books/book_img_05.jpg";


import ListComponent from '../Components/ListCompoent';



function Shop() {
    return(
      <>
      <div className="allWrapper">
        <HeaderComponent/>
        <main className="mainContent clearfix" id="mainContent">
        <section className="breadcrumbArea secGap pb-0 clearfix" id="breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#">Primary school </Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="mainBodyContent clearfix" id="mainBodyContent">
          <div className="container">
            <div className="row">
              <aside className="col-sm-3 asideWidget secGap clearfix" id="asideWidget">
                <h2 className="asideTitle">Filters</h2>

                <div className="asideBody bgGray" id="asideBody">

                  <div className="singleFilterCard">
                    <h5>Stage</h5>
                    <ul className="filterList">
                      {[1,2,4,5].map(data=><ListComponent
                           title={"class "+data}
                      />)}
                    </ul>
                  </div>
                  
                  <div className="singleFilterCard">
                    <h5>Discipline</h5>
                    <ul className="filterList">
                      {/* <li><Link to="#">Mathematics activities <span>5</span></Link></li>
                      <li><Link to="#">Kiswahili activities <span>3</span></Link></li>
                      <li><Link to="#">Hygiene and nutrition <br/>activities <span>10</span></Link></li>
                      <li><Link to="#">Environmental activities <span>6</span></Link></li>
                      <li><Link to="#">Religion activities <span>8</span></Link></li>
                      <li><Link to="#">Language activities <span>15</span></Link></li>
                      <li><Link to="#">Mathematics <span>10</span></Link></li>
                      <li><Link to="#">English <span>10</span></Link></li>
                      <li><Link to="#">Kiswahili <span>3</span></Link></li>
                      <li><Link to="#">Science <span>10</span></Link></li>
                      <li><Link to="#">Social Studies <span>5</span></Link></li>
                      <li><Link to="#">Cre/ire <span>3</span></Link></li> */}

                      {[
                        "Mathematics activities",
                        "Kiswahili activities",
                        "Hygiene and nutrition",
                        "Environmental activities",
                        "Religion activities",
                        "Language activities",
                        "Mathematics",
                        "English",
                        "Kiswahili",
                        "Science",
                        "Social Studies",
                        "Cre/ire"
                    ].map(data=><ListComponent
                        key={Math.abs(Math.random())}
                        title={data+"("+Math.floor(Math.random() * Math.floor(100))+")"}
                    />)}
                    </ul>
                  </div>
                  
                  <div className="singleFilterCard">
                    <h5>Price Range</h5>
                    <form>
                      <div className="form-group">
                        <input type="range" className="form-control-range" id="formControlRange"/>
                      </div>
                    </form>
                  </div>

                  <div className="singleFilterCard">
                    <h5>Author</h5>
                    <ul className="filterList">
                      {["Sam Smith",
                      "Barbara Cartland",
                      "William Shakespeare",
                      "Georges Simenon",
                      "Enid Blyton"].map(data=><ListComponent
                      title={data+"("+Math.floor(Math.random() * Math.floor(100))+")"}
                      />)}
                    </ul>
                  </div>

                  <div className="singleFilterCard">
                    <h5>Publishing house</h5>
                    <ul className="filterList">
                      <li><Link to="#">Lorem ipsum<span>5</span></Link></li>
                      <li><Link to="#">Dolor set amet <span>3</span></Link></li>
                      <li><Link to="#">Adipiscing <span>10</span></Link></li>
                    </ul>
                  </div>
                
                  <div className="singleFilterCard">
                    <h5>Publishing Year</h5>
                    <ul className="filterList">
                     {[2001,2002,2003,2004,2005,2006,2021].map(data=><ListComponent
                        title={data+ `(${Math.floor(Math.random() * Math.floor(100))})`}

                     />)}
                    </ul>
                  </div>
                  
                  <div className="singleFilterCard">
                    <h5>Book Cover</h5>
                    <ul className="filterList">
                    {["White Cover","Blude Cover","Red Cover","Green Cover"].map(data=><ListComponent
                          title={data + `(${Math.floor(Math.random() * Math.floor(100))})`}
                      />)}
                    </ul>
                  </div>
                  
                  <div className="singleFilterCard p-0 border-0 m-0">
                    <h5>Language</h5>
                    <ul className="filterList">
                      {["English","Bangla","Arabic","Sanskrit"].map(data=><ListComponent
                          title={data + `(${Math.floor(Math.random() * Math.floor(100))})`}
                      />)}
                    </ul>
                  </div>
                  
                  
                </div>
              </aside>
  
              <section className="col-sm-9 productContent secGap clearfix" id="shopProduct">
                <div className="row mb-5">
                  <div className="col">
                    <h2 className="pageTitle"><span>Primary</span> school Books</h2>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <ul className="singleFilter d-flex align-items-center">
                      <li>
                        <label htmlFor=""> Sort By</label>
                      </li>

                      <li>
                        <select className="filterSelect form-control">
                          <option>Popular</option>
                          <option>New</option>
                          <option>Price: low to high</option>
                          <option>Price: high to low</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col">
                    <ul className="singleFilter d-flex align-items-center">
                      <li>
                        <label htmlFor="">Show</label>
                      </li>

                      <li>
                        <select className="filterSelect form-control">
                          <option>16</option>
                          <option>10</option>
                          <option>5</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col">
                    <nav aria-label="Page navigation">
                      <ul className="pagination align-items-center justify-content-between">
                        <li className="page-item"><Link className="page-link" to="#"><i className="fas fa-chevron-left"></i></Link></li>
                        <li className="page-item">Page</li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item">of</li>
                        <li className="page-item"><Link className="page-link" to="#">7</Link></li>
                        <li className="page-item"><Link className="page-link" to="#"><i className="fas fa-chevron-right"></i></Link></li>
                      </ul>
                    </nav>
                  </div>

                </div>

                <div className="row productView">
                  
                  <div className="col-auto">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-auto">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_02} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-auto">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_03} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-auto">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_04} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_02} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_03} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_02} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_03} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_05} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_03} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_02} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_04} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_05} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for class 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for className 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_04} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for className 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for className 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_01}alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for className 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-auto mt-3">
                    <div className="card productCard border-0 bg-transprant">
                      <div className="productMedia mb-3 bgGray">
                        <img src={book_img_02} alt=""/>
                      </div>
                      <div className="productContent">
                        <h4 className="productTitle mb-1">Maths time for className 1</h4>
                        <h5 className="authorName mb-1">Author name</h5>
                        <p className="productPrice">$ 43.00</p>
                      </div>
                    </div>
                  </div>
  
                 
                </div>

                <div className="row mt-5">
                  <div className="col">
                    <ul className="singleFilter d-flex align-items-center">
                      <li>
                        <label htmlFor="">Sort By</label>
                      </li>

                      <li>
                        <select className="filterSelect form-control">
                          <option>Popular</option>
                          <option>New</option>
                          <option>Price: low to high</option>
                          <option>Price: high to low</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col">
                    <ul className="singleFilter d-flex align-items-center">
                      <li>
                        <label htmlFor="">Show</label>
                      </li>

                      <li>
                        <select className="filterSelect form-control">
                          <option>16</option>
                          <option>32</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col">
                    <nav aria-label="Page navigation">
                      <ul className="pagination align-items-center justify-content-between">
                        <li className="page-item"><Link className="page-link" to="#"><i className="fas fa-chevron-left"></i></Link></li>
                        <li className="page-item">Page</li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item">of</li>
                        <li className="page-item"><Link className="page-link" to="#">7</Link></li>
                        <li className="page-item"><Link className="page-link" to="#"><i className="fas fa-chevron-right"></i></Link></li>
                      </ul>
                    </nav>
                  </div>

                </div>
                
              </section>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent/>
      </div>
      
      </>
    )
}

export default Shop;