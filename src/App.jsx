import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Fancy Product", price: "40.00 - 80.00", sale: false },
    { id: 2, name: "Special Item", price: 18.0, sale: true, originalPrice: 20.0, rating: 5 },
    { id: 3, name: "Sale Item", price: 25.0, sale: true, originalPrice: 50.0 },
    { id: 4, name: "Popular Item", price: 40.0, sale: false, rating: 5 },
    { id: 5, name: "Sale Item", price: 50.0, sale: true, originalPrice: 70.0 },
    { id: 6, name: "Fancy Product", price: 90.0, sale: false },
    { id: 7, name: "Special Iteam", price: 30.0, sale: true, originalPrice: 45.0, rating: 5 },
    { id: 8, name: "Popular Item", price: 60.0, sale: false, rating: 5 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  const renderStars = (rating) => {
    return (
      <div className="d-flex justify-content-center my-2">
        {Array.from({ length: rating }, (_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-dark" type="button">
            <i className="bi-cart-fill me-1"></i>
            Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-9">Shop in Style</h1>
          <p className="lead">With this shop homepage template</p>
        </div>
      </header>

      {/* Product List */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                {/* Product Image */}
                <img
                  src={`https://via.placeholder.com/450x300`}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  {/* Sale Badge */}
                  {product.sale && (
                    <div className="badge bg-dark text-white position-absolute top-0 end-0">
                      Sale
                    </div>
                  )}
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.sale ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          ${product.originalPrice}
                        </span>{" "}
                        ${product.price}
                      </>
                    ) : (
                      `$${product.price}`
                    )}
                  </p>
                  {/* Star Ratings */}
                  {product.rating && renderStars(product.rating)}
                </div>
                <div className="card-footer text-center">
                  {isInCart(product.id) ? (
                    <button
                      className="btn"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
