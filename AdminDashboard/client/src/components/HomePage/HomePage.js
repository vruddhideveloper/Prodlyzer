import React, { Component, useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./HomePage.css";

function HomePage() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/");
    const jsonData = await response.json();
    setData(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (event) => {
    console.log(event.target.name);
    if (event.target.name === "Home") {
      window.location.href = "http://localhost:3003/home";
    } else if (event.target.name === "FashionMantra") {
      window.location.href = "http://localhost:3003/ecomm1";
    } else if (event.target.name === "KapdaBazaar") {
      window.location.href = "http://localhost:3003/ecomm2";
    } else {
      window.location.href = "http://localhost:3003/ecomm3";
    }
  };

  const cards = [
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
    { id: 5, title: "Card 5", description: "Description for Card 5" },
    { id: 6, title: "Card 6", description: "Description for Card 6" },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3003/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3003/ecomm1">
                FashionMantra
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3003/ecomm2">
                KapdaBazaar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3003/ecomm3">
                MaxFashion
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        />
        <div>
          <i className="ri-search-2-line"></i>
        </div>
      </div>

      <div className="container">
        {data.map((card) =>
          card.map((c1) => (
            <div key={c1._id} className="card">
              <span>
                <h2 style={{ display: "inline" }}>{c1.product_name}</h2>
                <p style={{ display: "inline", fontSize: "30px" }}>
                  {c1.no_of_clicks}
                </p>
                <br />
                <p style={{ display: "inline", fontSize: "30px" }}>
                  {c1.ecommerce_name}
                </p>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
