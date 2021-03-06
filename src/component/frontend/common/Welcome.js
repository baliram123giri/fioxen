import React from "react";
import { NavLink } from "react-router-dom";

export default function Welcome(props) {
  return (
    <>
      {/* Header start */}
      <header className="header-area header-area-one">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="top-social">
                  <ul className="social-link">
                    <li>
                      <span>Follow us:</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="top-content text-center">
                  <p>
                    We Have Special Offers Every{" "}
                    <a href="index.html">Find your offer</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="top-right">
                  <ul className="d-flex">
                    <li>
                      <a href="index.html">
                        <i className="ti-search" />
                        <span>Search here</span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="ti-heart" />
                        <span>Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="ti-shopping-cart" />
                        <span>Cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-navigation breakpoint-on">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="row">
                <div className="col-lg-2 col-5">
                  <div className="site-branding">
                    <a href="index.html" className="brand-logo">
                      <img
                        src="assets/images/logo/logo-1.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-2">
                  <div className="nav-menu">
                    <div className="navbar-close">
                      <i className="ti-close" />
                    </div>
                    <nav className="main-menu">
                      <ul>
                        <li className="menu-item has-children">
                          <a href="index.html" className="active">
                            Home
                          </a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="index.html">Home One</a>
                            </li>
                            <li className="menu-item">
                              <a href="index-2.html">Home Two</a>
                            </li>
                            <li className="menu-item">
                              <a href="index-3.html">Home Three</a>
                            </li>
                          </ul>
                          <span className="dd-trigger">
                            <i className="ti-arrow-down" />
                          </span>
                        </li>
                        <li className="menu-item">
                          <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li className="menu-item has-children">
                          <a href="#">Listings</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/listing">Listing List</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/listing-grid">Listing Grid</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/listing-map">
                                Listing Map Grid
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/listing-detail-one">
                                Listing Details One
                              </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/listing-detail-two">
                                Listing Details Two
                              </NavLink>
                            </li>
                          </ul>
                          <span className="dd-trigger">
                            <i className="ti-arrow-down" />
                          </span>
                        </li>
                        <li className="menu-item has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/add-listing">Add Listing</NavLink>
                            </li>
                            <li className="menu-item has-children">
                              <a href="#">Products</a>
                              <ul className="sub-menu">
                                <li>
                                  <NavLink to="/our-products">
                                    Our Products
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/products-details">
                                    Products Details
                                  </NavLink>
                                </li>
                              </ul>
                              <span className="dd-trigger">
                                <i className="ti-arrow-down" />
                              </span>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/how-work">How Work</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/pricing">Pricing</NavLink>
                            </li>
                          </ul>
                          <span className="dd-trigger">
                            <i className="ti-arrow-down" />
                          </span>
                        </li>
                        <li className="menu-item has-children">
                          <a href="#">Article</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <NavLink to="/our-blog">Our Blog</NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/blog-details">Blog details</NavLink>
                            </li>
                          </ul>
                          <span className="dd-trigger">
                            <i className="ti-arrow-down" />
                          </span>
                        </li>
                        <li className="menu-item">
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-btn">
                          <a
                            href="add-listing.html"
                            className="main-btn icon-btn"
                          >
                            Add Listing
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 col-5">
                  <div className="header-right-nav">
                    <ul className="d-flex align-items-center">
                      <li className="user-btn">
                        <a href="index.html" className="icon">
                          <i className="flaticon-avatar" />
                        </a>
                      </li>
                      <li className="hero-nav-btn">
                        <a
                          href="add-listing.html"
                          className="main-btn icon-btn"
                        >
                          Add Listing
                        </a>
                      </li>
                      <li className="nav-toggle-btn">
                        <div className="navbar-toggler">
                          <span />
                          <span />
                          <span />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}
      {/* here we will start injecting to the component */}
      {props.children}
      {/* Footer start */}
      <footer className="footer-area">
        <div className="footer-wrapper-one dark-black pt-90">
          <div className="footer-widget pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="widget about-widget mb-40">
                    <h4 className="widget-title">Mobile Experience</h4>
                    <ul className="button">
                      <li>
                        <a href="#" className="app-btn android-btn">
                          <div className="icon">
                            <i className="ti-android" />
                          </div>
                          <div className="info">
                            <span>get it on</span>
                            <h6>Goole Play</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="app-btn apple-btn">
                          <div className="icon">
                            <i className="ti-apple" />
                          </div>
                          <div className="info">
                            <span>get it on</span>
                            <h6>App Store</h6>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="footer-social">
                      <h4>Follow Us</h4>
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-twitter-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="widget recent-post-widget mb-40">
                    <h4 className="widget-title">Recent News</h4>
                    <ul className="post-widget-list">
                      <li className="post-content-item">
                        <div className="post-title-date">
                          <span className="posted-on">
                            <a href="#">22 August - 2021</a>
                          </span>
                          <h6 className="title">
                            <a href="blog-details.html">
                              Facilisis a ultricies quis dictumst fredom...
                            </a>
                          </h6>
                        </div>
                      </li>
                      <li className="post-content-item">
                        <div className="post-title-date">
                          <span className="posted-on">
                            <a href="#">22 August - 2021</a>
                          </span>
                          <h6 className="title">
                            <a href="blog-details.html">
                              Facilisis a ultricies quis dictumst fredom...
                            </a>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="widget categories-widget mb-40">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="categories-link">
                      <li>
                        <a href="#">Restaurant</a>
                      </li>
                      <li>
                        <a href="#">Museum</a>
                      </li>
                      <li>
                        <a href="#">Party Center</a>
                      </li>
                      <li>
                        <a href="#">Game Field</a>
                      </li>
                      <li>
                        <a href="#">Shopping</a>
                      </li>
                      <li>
                        <a href="#">Art &amp; Gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="widget newsletter-widget mb-40">
                    <h4 className="widget-title">Newsletter</h4>
                    <p>
                      Caoreet massa torto pon interdum sestibulum suscipit duis.
                    </p>
                    <form>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter Email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="copyright-text">
                    <p>
                      Copyright ?? 2021. All rights reserved to{" "}
                      <span>Webtend</span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="copyright-link">
                    <ul>
                      <li>
                        <a href="#">Terms &amp; Conditins</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end */}
    </>
  );
}
